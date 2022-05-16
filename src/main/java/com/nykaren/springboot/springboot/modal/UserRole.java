package com.nykaren.springboot.springboot.modal;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "tb_user_role")
public class UserRole {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Integer user_role_id;
  
    @Column    
    @OneToMany(mappedBy = "user_role")
    private List<Role> roles = new ArrayList<>();
    //private Integer user_role_role_id; //id from the user on other table

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user_role_user;
    //private Integer user_role_user_id; //id from the role on other table

	@Column(columnDefinition = "TINYINT(1) default 1")
    @NotNull
    private Boolean user_role_status; //In the mysql, TINYINT(1)

    @Override
    public String toString() {
        return "UserRole [roles=" + roles + ", user_role_id=" + user_role_id + ", user_role_status=" + user_role_status
                + ", user_role_user=" + user_role_user + "]";
    }

    public Integer getUser_role_id() {
        return user_role_id;
    }

    public void setUser_role_id(Integer user_role_id) {
        this.user_role_id = user_role_id;
    }

    public List<Role> getRoles() {
        return roles;
    }

    public void setRoles(List<Role> roles) {
        this.roles = roles;
    }

    public User getUser_role_user() {
        return user_role_user;
    }

    public void setUser_role_user(User user_role_user) {
        this.user_role_user = user_role_user;
    }

    public Boolean getUser_role_status() {
        return user_role_status;
    }

    public void setUser_role_status(Boolean user_role_status) {
        this.user_role_status = user_role_status;
    }
    
}