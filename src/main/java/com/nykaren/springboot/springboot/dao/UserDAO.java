package com.nykaren.springboot.springboot.dao;

import java.util.List;

import com.nykaren.springboot.springboot.modal.User;

public interface UserDAO {
	
	List<User> get();
	
	User get(int id);
	
	void save(User user);
	
	void delete(int id);
    
}
