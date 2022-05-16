package com.nykaren.springboot.springboot.service;

import java.util.List;

import com.nykaren.springboot.springboot.modal.GamificationActivity;

public interface GamificationActivityService {
	
	List<GamificationActivity> get();
	
	GamificationActivity get(int id);
	
	void save(GamificationActivity gamificationActivity);
	
	void delete(int id);
    
}
