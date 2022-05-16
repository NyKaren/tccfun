package com.nykaren.springboot.springboot.controller;

import java.util.List;

import com.nykaren.springboot.springboot.modal.GamificationActivity;
import com.nykaren.springboot.springboot.service.GamificationActivityService;

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
public class GamificationActivityController {
	
	@Autowired
	private GamificationActivityService gamificationActivityService;
	
	@GetMapping("/gamificationActivity")
	public List<GamificationActivity> get() {
		return gamificationActivityService.get();
	}
	
	@PostMapping("/gamificationActivity")
	public GamificationActivity save(@RequestBody GamificationActivity gamificationActivity) {
		gamificationActivityService.save(gamificationActivity);
		return gamificationActivity;
	}
	
	@GetMapping("/gamificationActivity/{id}")
	public GamificationActivity get(@PathVariable int id) {
		return gamificationActivityService.get(id);
	}
	
	@DeleteMapping("/gamificationActivity/{id}")
	public String delete(@PathVariable int id) {
		
		gamificationActivityService.delete(id);
		
		return "GamificationActivity removed with id "+id;
		
	}
	
	@PutMapping("/gamificationActivity")
	public GamificationActivity update(@RequestBody GamificationActivity gamificationActivity) {
		gamificationActivityService.save(gamificationActivity);
		return gamificationActivity;
	}
    
}
