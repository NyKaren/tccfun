package com.nykaren.springboot.springboot.service;

import java.util.List;

import com.nykaren.springboot.springboot.dao.ActivityDAO;
import com.nykaren.springboot.springboot.modal.Activity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ActivityServiceImp implements ActivityService {
	
	@Autowired
	private ActivityDAO activityDAO;

	@Transactional
    @Override
    public List<Activity> get() {
        return activityDAO.get();
    }

    @Transactional
    @Override
    public Activity get(int id) {
        return activityDAO.get(id);
    }

    @Transactional
    @Override
    public void save(Activity activity) {
        activityDAO.save(activity);        
        
    }

    @Transactional
    @Override
    public void delete(int id) {
        activityDAO.delete(id);
        
    }
    
}
