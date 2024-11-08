package com.task1.Quote_backend.service;

import java.util.List;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.task1.Quote_backend.entity.Quote;
import com.task1.Quote_backend.exception.NotFoundException;
import com.task1.Quote_backend.repo.QuoteRepo;

@Service
public class Services {
	@Autowired
    private QuoteRepo quotrepository;
	
	private final Random random = new Random();
	

    public List<Quote> getAllQuotes() {
        return quotrepository.findAll();
    }

    public  Optional<Quote> getQuoteById(Long id) {
    	 return quotrepository.findById(id);
    }
    
    public  List<Quote> getQuoteByName(String name) {
    	return quotrepository.findByName(name);        
    }

    public Quote saveQuote(Quote user) {
        return quotrepository.save(user);
    }

    public Quote updateQuote(Long id, Quote data) {
    	Quote quote = quotrepository.findById(id)
                   .orElseThrow(() -> new NotFoundException("Quote not found with id " + id));
           
    	quote.setName(data.getName());
    	quote.setQuote(data.getQuote());
    	quote.setCategory(data.getCategory());   
           
           return quotrepository.save(quote);
    }

    public void deleteQuote(Long id) {
    	if (!quotrepository.existsById(id)) {
            throw new NotFoundException("User not found with id " + id);
        }
    	quotrepository.deleteById(id);
    }
    
    public Quote getQuoteByRandomId() {
        List<Quote> quote = quotrepository.findAll();  
        if (quote.isEmpty()) {
            throw new NotFoundException("No users found");
        }   
        int randomIndex = random.nextInt(quote.size());
        return quote.get(randomIndex);
    }
}
