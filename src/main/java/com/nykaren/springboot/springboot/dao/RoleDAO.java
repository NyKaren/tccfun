package com.nykaren.springboot.springboot.dao;

import java.util.List;

import com.nykaren.springboot.springboot.modal.Role;

public interface RoleDAO {
	
	List<Role> get();
	
	Role get(int id);
	
	void save(Role role);
	
	void delete(int id);
    
}
