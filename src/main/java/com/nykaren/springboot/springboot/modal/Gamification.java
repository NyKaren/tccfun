package com.nykaren.springboot.springboot.modal;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "tb_gamification")
public class Gamification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Integer gamification_id;

    @OneToOne
    private User gamification_user;
    //private Integer gamification_user_id; //id from the user on other table
    //Is it really a column?
    
    @Column
    @NotNull
    private String gamification_level;
    
    @Column
    @NotNull
    private Integer gamification_points;

	@Column
    @OneToMany(mappedBy = "gamification_activity_gamification")
    private List<GamificationActivity> gamification_activities = new ArrayList<>();

    @Override
    public String toString() {
        return "Gamification [gamification_activities=" + gamification_activities + ", gamification_id="
                + gamification_id + ", gamification_level=" + gamification_level + ", gamification_points="
                + gamification_points + ", gamification_user=" + gamification_user + "]";
    }

    public Integer getGamification_id() {
        return gamification_id;
    }

    public void setGamification_id(Integer gamification_id) {
        this.gamification_id = gamification_id;
    }

    public User getGamification_user() {
        return gamification_user;
    }

    public void setGamification_user(User gamification_user) {
        this.gamification_user = gamification_user;
    }

    public String getGamification_level() {
        return gamification_level;
    }

    public void setGamification_level(String gamification_level) {
        this.gamification_level = gamification_level;
    }

    public Integer getGamification_points() {
        return gamification_points;
    }

    public void setGamification_points(Integer gamification_points) {
        this.gamification_points = gamification_points;
    }

    public List<GamificationActivity> getGamification_activities() {
        return gamification_activities;
    }

    public void setGamification_activities(List<GamificationActivity> gamification_activities) {
        this.gamification_activities = gamification_activities;
    }    
    
}
