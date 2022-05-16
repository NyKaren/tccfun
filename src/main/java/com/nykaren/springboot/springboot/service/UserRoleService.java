package com.nykaren.springboot.springboot.service;

import java.util.List;

import com.nykaren.springboot.springboot.modal.UserRole;

public interface UserRoleService {
	
	List<UserRole> get();
	
	UserRole get(int id);
	
	void save(UserRole userRole);
	
	void delete(int id);
    
}
