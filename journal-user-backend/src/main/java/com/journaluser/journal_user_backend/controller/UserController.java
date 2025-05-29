package com.journaluser.journal_user_backend.controller;

import com.fasterxml.jackson.databind.node.ObjectNode;
import com.journaluser.journal_user_backend.model.Journal;
import com.journaluser.journal_user_backend.model.User;
import com.journaluser.journal_user_backend.repository.JournalRepository;
import com.journaluser.journal_user_backend.repository.UserRepository;
import com.journaluser.journal_user_backend.repository.UserServiceImplementation;
import com.journaluser.journal_user_backend.response.AuthResponse;
import com.journaluser.journal_user_backend.securityconfig.JwtProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.List;

@RestController
@RequestMapping("/")
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepo;

    private UserServiceImplementation customUserDetails;
    @Autowired
    private JournalRepository journalRepo;

    @PostMapping
    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user)  {
        String email = user.getEmail();
        String password = user.getPassword();
        String name = user.getName();
        String username = user.getUserName();
        int age = user.getAge();

//        User isUser = userRepo.findById(username).get();
//        if (isUser != null) {
//            //throw new Exception("Email Is Already Used With Another Account");
//
//        }
        User createdUser = new User();
        createdUser.setUserName(username);
        createdUser.setName(name);
        createdUser.setEmail(email);
        createdUser.setAge(age);
        createdUser.setPassword(passwordEncoder.encode(password));

        User savedUser = userRepo.save(createdUser);
        userRepo.save(savedUser);
        Authentication authentication = new UsernamePasswordAuthenticationToken(username,password);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = JwtProvider.generateToken(authentication);


        AuthResponse authResponse = new AuthResponse();
        authResponse.setJwt(token);
        authResponse.setMessage("Register Success");
        authResponse.setStatus(true);
        return new ResponseEntity<AuthResponse>(authResponse, HttpStatus.OK);

        //return savedUser;

    }

    @PostMapping("/signin")
    public User signin(@RequestBody ObjectNode json) {
        String username = json.get("userName").asText();
        String password = json.get("password").asText();
        customUserDetails = new UserServiceImplementation(userRepo);
        User actualUser = userRepo.findById(username).get();

        Authentication authentication = authenticate(username,password);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = JwtProvider.generateToken(authentication);
        AuthResponse authResponse = new AuthResponse();

        authResponse.setMessage("Login success");
        authResponse.setJwt(token);
        authResponse.setStatus(true);

        return actualUser;
    }


    private Authentication authenticate(String username, String password) {

        UserDetails userDetails = customUserDetails.loadUserByUsername(username);

        if(userDetails == null) {
            System.out.println("Sign in details - null" + userDetails);

            throw new BadCredentialsException("Invalid username and password");
        }
        if(!passwordEncoder.matches(password,userDetails.getPassword())) {
            System.out.println("Sign in userDetails - password mismatch"+userDetails);

            throw new BadCredentialsException("Invalid password");

        }
        return new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());

    }


//    @PostMapping
//    public User addUser(@RequestBody User user){
//        //user.setPassword(passEncoder.encode(user.getPassword()));
//        return userRepo.save(user);
//    }

    @GetMapping
    public List<User> getAllUsers(){
        return userRepo.findAll();
    }

    @GetMapping("/{userName}")
    public User getUserByUserName(@PathVariable("userName") String userName){
        return userRepo.findById(userName).get();
    }

    @GetMapping("/{userName}/journals")
    public List<Journal> getJournalsByUserName(@PathVariable("userName") String userName){
        User user = userRepo.findById(userName).get();
        return user.getJournals();
    }

    @PostMapping("/{username}/journals")
    public Journal addJournal(@PathVariable("username") String userName, @RequestBody Journal newJournal){
        User user = userRepo.findById(userName).get();
        newJournal.setUser(user);
        journalRepo.save(newJournal);
        user.addJournal(newJournal);
        return newJournal;
    }

    @PutMapping("/{username}/journals/{journalId}")
    public Journal updateJournal(@PathVariable("username") String userName, @PathVariable("journalId") Long journalId, @RequestBody Journal updatedJournal){
        User user = userRepo.findById(userName).get();
        Journal journal = journalRepo.findById(journalId).get();

        if(!journal.getUser().equals(user)){
            throw new RuntimeException("Journal does not belong to user");
        }

        journal.setTitle(updatedJournal.getTitle());
        journal.setContent(updatedJournal.getContent());
        journal.setLastUpdated(updatedJournal.getLastUpdated());

        return journalRepo.save(journal);
    }

//    @GetMapping("/{user}/journals")
//    public List<Journal> getJournalsByUser(@PathVariable("user") User user){
//        return user.getJournals();
//    }

    @DeleteMapping("/{username}/journals/{journalId}")
    public void deleteJournal(@PathVariable("username") String userName, @PathVariable("journalId") Long journalId){
        User user = userRepo.findById(userName).get();
        Journal journal = journalRepo.findById(journalId).get();
        user.removeJournal(journal);
        journalRepo.delete(journal);
    }


}
