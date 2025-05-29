package com.journaluser.journal_user_backend.controller;

import com.journaluser.journal_user_backend.model.Journal;
import com.journaluser.journal_user_backend.repository.JournalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class JournalController {

    @Autowired
    private JournalRepository journalRepo;

    @PostMapping("/journal")
    public Journal addJournal(@RequestBody Journal journal){
        return journalRepo.save(journal);
    }

    @GetMapping("/journal")
    public List<Journal> getAllJournals(){
        return journalRepo.findAll();
    }

}
