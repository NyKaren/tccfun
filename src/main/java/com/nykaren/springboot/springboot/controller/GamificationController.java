package com.nykaren.springboot.springboot.controller;

import java.util.List;

import com.nykaren.springboot.springboot.modal.Gamification;
import com.nykaren.springboot.springboot.service.GamificationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class GamificationController {
	
	@Autowired
	private GamificationService gamificationService;
	
	@GetMapping("/gamification")
	public List<Gamification> get() {
		return gamificationService.get();
	}
	
	@PostMapping("/gamification")
	public Gamification save(@RequestBody Gamification gamification) {
		gamificationService.save(gamification);
		return gamification;
	}
	
	@GetMapping("/gamification/{id}")
	public Gamification get(@PathVariable int id) {
		return gamificationService.get(id);
	}
	
	@DeleteMapping("/gamification/{id}")
	public String delete(@PathVariable int id) {
		
		gamificationService.delete(id);
		
		return "Gamification removed with id "+id;
		
	}
	
	@PutMapping("/gamification")
	public Gamification update(@RequestBody Gamification gamification) {
		gamificationService.save(gamification);
		return gamification;
	}
    
}
