package com.nykaren.springboot.springboot.service;

import java.util.List;

import com.nykaren.springboot.springboot.dao.GamificationActivityDAO;
import com.nykaren.springboot.springboot.modal.GamificationActivity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class GamificationActivityServiceImp implements GamificationActivityService {
	
	@Autowired
	private GamificationActivityDAO gamificationActivityDao;

	@Transactional
    @Override
    public List<GamificationActivity> get() {
        return gamificationActivityDao.get();
    }

    @Transactional
    @Override
    public GamificationActivity get(int id) {
        return gamificationActivityDao.get(id);
    }

    @Transactional
    @Override
    public void save(GamificationActivity gamificationActivity) {
        gamificationActivityDao.save(gamificationActivity);        
        
    }

    @Transactional
    @Override
    public void delete(int id) {
        gamificationActivityDao.delete(id);
        
    }
    
}
