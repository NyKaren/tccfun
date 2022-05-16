package com.nykaren.springboot.springboot.service;

import java.util.List;

import com.nykaren.springboot.springboot.dao.UserDAO;
import com.nykaren.springboot.springboot.modal.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserServiceImp implements UserService {
	
	@Autowired
	private UserDAO userDao;

	@Transactional
  @Override
  public List<User> get() {
    return userDao.get();
  }

	@Transactional
  @Override
  public User get(int id) {
		return userDao.get(id);
  }

	@Transactional
  @Override
  public void save(User user) {
    userDao.save(user);        
  }

	@Transactional
  @Override
  public void delete(int id) {
    userDao.delete(id);
  }
    
}
