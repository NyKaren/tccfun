package com.nykaren.springboot.springboot.service;

import java.util.List;

import com.nykaren.springboot.springboot.modal.User;

public interface UserService {
	
	List<User> get();
	
	User get(int id);
	
	void save(User user);
	
	void delete(int id);
    
}
