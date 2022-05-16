package com.nykaren.springboot.springboot.service;

import java.util.List;

import com.nykaren.springboot.springboot.dao.GamificationDAO;
import com.nykaren.springboot.springboot.modal.Gamification;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class GamificationServiceImp implements GamificationService {
	
	@Autowired
	private GamificationDAO gamificationDao;

	@Transactional
    @Override
    public List<Gamification> get() {
        return gamificationDao.get();
    }

    @Transactional
    @Override
    public Gamification get(int id) {
        return gamificationDao.get(id);
    }

    @Transactional
    @Override
    public void save(Gamification gamification) {
        gamificationDao.save(gamification);        
        
    }

    @Transactional
    @Override
    public void delete(int id) {
        gamificationDao.delete(id);
        
    }
    
}
