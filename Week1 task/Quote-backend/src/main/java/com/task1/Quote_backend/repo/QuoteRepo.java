package com.task1.Quote_backend.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.task1.Quote_backend.entity.Quote;

@Repository
public interface QuoteRepo extends JpaRepository<Quote, Long> {
	List<Quote> findByName(String name);
}
