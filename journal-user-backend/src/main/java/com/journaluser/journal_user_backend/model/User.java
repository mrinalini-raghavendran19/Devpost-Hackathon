package com.journaluser.journal_user_backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

import java.util.ArrayList;
import java.util.List;

@Entity
public class User {

    @Id
    private String userName;
    private String name;
    private String email;
    private int age;
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;
    private String role="USER";

    @JsonIgnoreProperties("user")
    @OneToMany(mappedBy = "user")
    private List<Journal> journals = new ArrayList<>();

    public List<Journal> getJournals() {
        return journals;
    }
    public void addJournal(Journal journal) {
        journals.add(journal);
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void removeJournal(Journal journal){
        journals.remove(journal);
    }
}
