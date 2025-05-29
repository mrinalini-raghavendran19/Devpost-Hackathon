package com.journaluser.journal_user_backend.controller;

import com.journaluser.journal_user_backend.model.Journal;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/sentiment")
public class SentimentController {

    private final RestTemplate restTemp;

    public SentimentController(RestTemplate restTemp){
        this.restTemp = restTemp;
    }

    @PostMapping
    public ResponseEntity<?> sentimentAnalysis(@RequestBody Journal journal){

        String content = journal.getContent();
        String pyURL = "http://localhost:5001/analyze";
        HttpHeaders httpHeaders = new HttpHeaders();


        if(content == null || content.isEmpty()){
            return ResponseEntity.badRequest().body("Content is required for a journal");
        }

        HashMap<String, String> req = new HashMap<>();

        req.put("text", content);

        HttpEntity<Map<String, String>> entity = new HttpEntity<>(req, httpHeaders);

        try{
            ResponseEntity<Map> response = restTemp.postForEntity(pyURL, entity, Map.class);
            return ResponseEntity.ok(response.getBody());
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error communicating with sentiment service: " + e.getMessage());
        }

    }

}
