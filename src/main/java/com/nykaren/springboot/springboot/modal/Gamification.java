package com.nykaren.springboot.springboot.modal;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;

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

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "tb_gamification_activity",
            joinColumns = @JoinColumn(name = "gamification_id"),
            inverseJoinColumns = @JoinColumn(name = "activity_id")
    )
    private Set<Activity> activities = new HashSet<>();

    public void addActivity(Activity activity) {
        this.activities.add(activity);
    }

    @Override
    public String toString() {
        return "Gamification{" +
                "gamification_id=" + gamification_id +
                ", gamification_user=" + gamification_user +
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

    public Set<Activity> getActivities() {
        return activities;
    }

    public void setActivities(Set<Activity> activities) {
        this.activities = activities;
    }
}
