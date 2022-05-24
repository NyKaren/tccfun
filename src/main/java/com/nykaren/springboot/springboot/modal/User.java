package com.nykaren.springboot.springboot.modal;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;


@Entity
@Table(name = "tb_user")
public class User {

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer user_id;

	@Column(nullable = false, unique = true, length = 45)
    private String user_username;

	@Column(nullable = false, length = 64)
    private String user_password;

	@Column(nullable = false, unique = true, length = 45)
    private String user_email;

	@Column(nullable = false, length = 20)
    private String user_first_name;

	@Column(nullable = false, length = 20)
    private String user_last_name;

	@Column(nullable = false)
	private LocalDate user_created_by;

	@Column(columnDefinition = "varchar(50) default NULL")
	private LocalDate user_terminated_by;

	@Column(nullable = false, columnDefinition = "TINYINT(1) default 1")
    private Boolean user_status;  //In the mysql, TINYINT(1)

    @ManyToMany(fetch = FetchType.EAGER, cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE
    })
    @JoinTable(
            name = "tb_user_role",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private Set<Role> roles = new HashSet<>();

    public void addRole(Role role) {
      this.roles.add(role);
    }

  @OneToOne(orphanRemoval = true, cascade = {
          CascadeType.PERSIST
  })
  @JoinColumn(name="gamification_id")
  private Gamification gamification;
  //On Gamification table: private Integer gamification_user_id; //id from the user on other table


    @Override
    public String toString() {
      return "User{" +
              "user_id=" + user_id +
              ", user_username='" + user_username + '\'' +
              ", user_password='" + user_password + '\'' +
              ", user_email='" + user_email + '\'' +
              ", user_first_name='" + user_first_name + '\'' +
              ", user_last_name='" + user_last_name + '\'' +
              ", user_created_by=" + user_created_by +
              ", user_terminated_by=" + user_terminated_by +
              ", user_status=" + user_status +
              ", roles=" + roles +
              ", gamification=" + gamification +
              '}';
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

    public Set<Role> getRoles() {
      return roles;
    }

    public void setRoles(Set<Role> roles) {
      this.roles = roles;
    }

  public Gamification getGamification() {
    return gamification;
  }

  public void setGamification(Gamification gamification) {
    this.gamification = gamification;
  }
}
