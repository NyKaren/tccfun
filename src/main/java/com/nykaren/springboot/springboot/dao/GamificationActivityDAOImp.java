package com.nykaren.springboot.springboot.dao;

import java.util.List;

import javax.persistence.EntityManager;

import com.nykaren.springboot.springboot.modal.GamificationActivity;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class GamificationActivityDAOImp implements GamificationActivityDAO {

	@Autowired
	private EntityManager entityManager;

    @Override
    public List<GamificationActivity> get() {
		Session currSession = entityManager.unwrap(Session.class);
		Query<GamificationActivity> query = currSession.createQuery("from GamificationActivity", GamificationActivity.class);
		List<GamificationActivity> list = query.getResultList();
        return list;
    }

    @Override
    public GamificationActivity get(int id) {
		Session currSession = entityManager.unwrap(Session.class);
		GamificationActivity gamificationActivity = currSession.get(GamificationActivity.class, id);
        return gamificationActivity;
    }

    @Override
    public void save(GamificationActivity gamificationActivity) {
		Session currSession = entityManager.unwrap(Session.class);
		currSession.saveOrUpdate(gamificationActivity);
        
    }

    @Override
    public void delete(int id) {
		Session currSession = entityManager.unwrap(Session.class);
		GamificationActivity gamificationActivity = currSession.get(GamificationActivity.class, id);
		currSession.delete(gamificationActivity);
        
    }
    
}
