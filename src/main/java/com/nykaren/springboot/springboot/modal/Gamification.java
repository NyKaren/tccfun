package com.nykaren.springboot.springboot.modal;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "tb_gamification")
public class Gamification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer gamification_id;
    
    @Column(nullable = false, columnDefinition = "varchar(50) default 'L1'")
    private String gamification_level;
    
    @Column(nullable = false, columnDefinition = "INT default 0")
    private Integer gamification_points;

    @ManyToMany(fetch = FetchType.EAGER, cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE
    })
    @JoinTable(
            name = "tb_gamification_activity",
            joinColumns = @JoinColumn(name = "gamification_id"),
            inverseJoinColumns = @JoinColumn(name = "activity_id")
    )
    private Set<Activity> activities = new HashSet<>();

    public void addActivity(Activity activity) {
        this.activities.add(activity);
    }

    //gamification_user
    public Gamification() { }

    public Gamification(String gamification_level) {
        this.gamification_level = gamification_level;
    }

    public Gamification(Integer gamification_id, String gamification_level) {
        this.gamification_id = gamification_id;
        this.gamification_level = gamification_level;
    }

    public Gamification(Integer gamification_id) {
        this.gamification_id = gamification_id;
    }

    public Gamification(Integer gamification_id, Integer gamification_points) {
        this.gamification_id = gamification_id;
        this.gamification_points = gamification_points;
    }

    public Gamification(Integer gamification_id, String gamification_level, Integer gamification_points) {
        this.gamification_id = gamification_id;
        this.gamification_level = gamification_level;
        this.gamification_points = gamification_points;
    }

    public Gamification(String gamification_level, Integer gamification_points) {
        this.gamification_level = gamification_level;
        this.gamification_points = gamification_points;
    }

    @Override
    public String toString() {
        return "Gamification{" +
                "gamification_id=" + gamification_id +
                ", gamification_level='" + gamification_level + '\'' +
                ", gamification_points=" + gamification_points +
                ", activities=" + activities +
                '}';
    }

    public Integer getGamification_id() {
        return gamification_id;
    }

    public void setGamification_id(Integer gamification_id) {
        this.gamification_id = gamification_id;
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

    public Set<Activity> getActivities() {
        return activities;
    }

    public void setActivities(Set<Activity> activities) {
        this.activities = activities;
    }
}
