package com.task1.Quote_backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.task1.Quote_backend.entity.Quote;
import com.task1.Quote_backend.service.Services;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:4200/")
public class MyController {
	  @Autowired
	    private Services service;

	    @GetMapping("/getallquotes")
	    public List<Quote> getAllQuotes() {
	        return service.getAllQuotes();
	    }

	    @GetMapping("/getquotebyid/{id}")
	    public  Optional<Quote> getQuoteById(@PathVariable Long id) {
	        return service.getQuoteById(id);
	    }
	    
	    @GetMapping("/getquotebyname/{name}")
	    public  List<Quote> getQuoteByName(@PathVariable String name) {
	        return service.getQuoteByName(name);
	    }

	    @PostMapping("/addquote")
	    public Quote saveQuote(@RequestBody Quote user) {
	        return service.saveQuote(user);
	    }

	    @PutMapping("/updatequote/{id}")
	    public Quote updateQuote(@PathVariable Long id, @RequestBody Quote userDetails) {
	        return service.updateQuote(id, userDetails);
	    }

	    @DeleteMapping("/deletequote/{id}")
	    public void deleteQuote(@PathVariable Long id) {
	    	service.deleteQuote(id);
	    }
	    
	    @GetMapping("/random")
	    public Quote getUserByRandomId() {
	        return service.getQuoteByRandomId();
	    }
}
