package com.nykaren.springboot.springboot.service;

import java.util.List;

import com.nykaren.springboot.springboot.modal.Gamification;

public interface GamificationService {
	
	List<Gamification> get();
	
	Gamification get(int id);
	
	void save(Gamification gamification);
	
	void delete(int id);
    
}
