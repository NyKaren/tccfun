package com.nykaren.springboot.springboot.dao;

import java.util.List;

import com.nykaren.springboot.springboot.modal.UserRole;

public interface UserRoleDAO {
	
	List<UserRole> get();
	
	UserRole get(int id);
	
	void save(UserRole userRole);
	
	void delete(int id);
    
}
