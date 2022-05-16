package com.nykaren.springboot.springboot.dao;

import java.util.List;

import com.nykaren.springboot.springboot.modal.Gamification;

public interface GamificationDAO {
	
	List<Gamification> get();
	
	Gamification get(int id);
	
	void save(Gamification gamification);
	
	void delete(int id);
    
}
