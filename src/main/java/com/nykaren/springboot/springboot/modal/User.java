package com.nykaren.springboot.springboot.modal;

import java.time.LocalDate;
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
@Table(name = "tb_user")
public class User {

  @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
  private Integer user_id;

	@Column
  @NotNull
  private String user_username;

	@Column
  @NotNull
  private String user_password;

	@Column
  @NotNull
  private String user_email;

	@Column
  @NotNull
  private String user_first_name;

	@Column
  @NotNull
  private String user_last_name;

	@Column
  @NotNull
	private LocalDate user_created_by;

	@Column(columnDefinition = "varchar(50) default NULL")
	private LocalDate user_terminated_by;

	@Column(columnDefinition = "TINYINT(1) default 1")
  @NotNull
  private Boolean user_status;  //In the mysql, TINYINT(1)

  @OneToOne(mappedBy="gamification_user")
  private Gamification gamification;
  //On Gamification table: private Integer gamification_user_id; //id from the user on other table

	@Column
  @OneToMany(mappedBy = "user_role_user")
  private List<UserRole> user_roles = new ArrayList<>();

  @Override
  public String toString() {
    return "User [gamification=" + gamification + ", user_created_by=" + user_created_by + ", user_email=" + user_email
        + ", user_first_name=" + user_first_name + ", user_id=" + user_id + ", user_last_name=" + user_last_name
        + ", user_password=" + user_password + ", user_roles=" + user_roles + ", user_status=" + user_status
        + ", user_terminated_by=" + user_terminated_by + ", user_username=" + user_username + "]";
  }

  public Integer getUser_id() {
    return user_id;
  }

  public void setUser_id(Integer user_id) {
    this.user_id = user_id;
  }

  public String getUser_username() {
    return user_username;
  }

  public void setUser_username(String user_username) {
    this.user_username = user_username;
  }

  public String getUser_password() {
    return user_password;
  }

  public void setUser_password(String user_password) {
    this.user_password = user_password;
  }

  public String getUser_email() {
    return user_email;
  }

  public void setUser_email(String user_email) {
    this.user_email = user_email;
  }

  public String getUser_first_name() {
    return user_first_name;
  }

  public void setUser_first_name(String user_first_name) {
    this.user_first_name = user_first_name;
  }

  public String getUser_last_name() {
    return user_last_name;
  }

  public void setUser_last_name(String user_last_name) {
    this.user_last_name = user_last_name;
  }

  public LocalDate getUser_created_by() {
    return user_created_by;
  }

  public void setUser_created_by(LocalDate user_created_by) {
    this.user_created_by = user_created_by;
  }

  public LocalDate getUser_terminated_by() {
    return user_terminated_by;
  }

  public void setUser_terminated_by(LocalDate user_terminated_by) {
    this.user_terminated_by = user_terminated_by;
  }

  public Boolean getUser_status() {
    return user_status;
  }

  public void setUser_status(Boolean user_status) {
    this.user_status = user_status;
  }

  public Gamification getGamification() {
    return gamification;
  }

  public void setGamification(Gamification gamification) {
    this.gamification = gamification;
  }

  public List<UserRole> getUser_roles() {
    return user_roles;
  }

  public void setUser_roles(List<UserRole> user_roles) {
    this.user_roles = user_roles;
  }

  
}
