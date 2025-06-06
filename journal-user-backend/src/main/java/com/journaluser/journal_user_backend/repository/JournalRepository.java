package com.journaluser.journal_user_backend.repository;

import com.journaluser.journal_user_backend.model.Journal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JournalRepository extends JpaRepository<Journal, Long> {
}
