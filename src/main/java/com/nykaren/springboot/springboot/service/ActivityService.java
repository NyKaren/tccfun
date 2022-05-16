package com.nykaren.springboot.springboot.service;

import java.util.List;

import com.nykaren.springboot.springboot.modal.Activity;

public interface ActivityService {
	
	List<Activity> get();
	
	Activity get(int id);
	
	void save(Activity activity);
	
	void delete(int id);
    
}
