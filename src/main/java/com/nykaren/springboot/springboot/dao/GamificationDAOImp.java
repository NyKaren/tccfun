package com.nykaren.springboot.springboot.dao;

import java.util.List;

import javax.persistence.EntityManager;

import com.nykaren.springboot.springboot.modal.Gamification;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class GamificationDAOImp implements GamificationDAO {

	@Autowired
	private EntityManager entityManager;

    @Override
    public List<Gamification> get() {
		Session currSession = entityManager.unwrap(Session.class);
		Query<Gamification> query = currSession.createQuery("from Gamification", Gamification.class);
		List<Gamification> list = query.getResultList();
        return list;
    }

    @Override
    public Gamification get(int id) {
		Session currSession = entityManager.unwrap(Session.class);
		Gamification gamification = currSession.get(Gamification.class, id);
        return gamification;
    }

    @Override
    public void save(Gamification gamification) {
		Session currSession = entityManager.unwrap(Session.class);
		currSession.saveOrUpdate(gamification);
        
    }

    @Override
    public void delete(int id) {
		Session currSession = entityManager.unwrap(Session.class);
		Gamification gamification = currSession.get(Gamification.class, id);
		currSession.delete(gamification);   
        
    }
    
}
