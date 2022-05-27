import com.nykaren.springboot.springboot.dao.RoleDAOImp;
import com.nykaren.springboot.springboot.dao.UserDAOImp;
import com.nykaren.springboot.springboot.modal.Activity;
import com.nykaren.springboot.springboot.modal.Gamification;
import com.nykaren.springboot.springboot.modal.Role;
import com.nykaren.springboot.springboot.modal.User;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.test.annotation.Rollback;

import java.time.LocalDate;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(false)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class RepositoryTests {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private UserDAOImp repoUserDAOImp;

    @Autowired
    private RoleDAOImp repoRoleDAOImp;

    LocalDate currentLocalDate = LocalDate.now();


    @Configuration
    @ComponentScan("com.nykaren.springboot.springboot")
    public static class AppConfig {
    }

    @Test
    @Order(1)
    public void testCreateRoles() {
        Role roleStudent = new Role("Aluno");
        Role roleAdmin = new Role("Administrador");

        repoRoleDAOImp.save(roleStudent);
        repoRoleDAOImp.save(roleAdmin);
        List<Role> listRoles = repoRoleDAOImp.get();

        assertThat(listRoles.size()).isEqualTo(2);
    }

    @Test
    @Order(2)
    public void testCreateUser() {
        User user = new User();

        user.setUser_email("ravikumar@gmail.com");
        user.setUser_username("ravikumar");
        user.setUser_password("ravi2020");
        user.setUser_first_name("Ravi");
        user.setUser_last_name("Kumar");
        user.setUser_created_by(currentLocalDate);
        user.setUser_status(true);
        repoUserDAOImp.save(user);

        User existUser = entityManager.find(User.class, user.getUser_id());
        assertThat(user.getUser_email()).isEqualTo(existUser.getUser_email());
    }

    @Test
    @Order(3)
    public void testAddRoleToNewUser() {
        Role roleAdmin = repoRoleDAOImp.get(2);
        User user = new User();

        user.setUser_email("mikes.gates@gmail.com");
        user.setUser_username("MikeGates");
        user.setUser_password("mike2020");
        user.setUser_first_name("Mike");
        user.setUser_last_name("Gates");
        user.setUser_created_by(currentLocalDate);
        user.setUser_status(true);
        user.setRole(roleAdmin);
        repoUserDAOImp.save(user);

        User existUser = entityManager.find(User.class, user.getUser_id());
        assertThat(user.getRole()).isEqualTo(existUser.getRole());
    }

    @Test
    @Order(4)
    public void testAddRoleToExistingUser() {
        User user = repoUserDAOImp.get(1);
        Role roleStudent = repoRoleDAOImp.get(1);

        user.setRole(roleStudent);
        repoUserDAOImp.save(user);

        User existUser = entityManager.find(User.class, user.getUser_id());
        assertThat(user.getRole()).isEqualTo(existUser.getRole());
    }

    @Test
    @Order(5)
    public void testAddGamificationToNewUser() {
        Role roleStudent = repoRoleDAOImp.get(1);
        User user = new User();
        Gamification userGamification = new Gamification("L1", 0);

        user.setUser_email("ethan.sanders@gmail.com");
        user.setUser_username("EthanSanders");
        user.setUser_password("ethan43g7");
        user.setUser_first_name("Ethan");
        user.setUser_last_name("Sanders");
        user.setUser_created_by(currentLocalDate);
        user.setUser_status(true);
        user.setRole(roleStudent);
        user.setGamification(userGamification);
        repoUserDAOImp.save(user);

        User existUser = entityManager.find(User.class, user.getUser_id());
        assertThat(user.getGamification()).isEqualTo(existUser.getGamification());
    }

    @Test
    @Order(6)
    public void testAddActivityToExistingGamification() {
        User user = repoUserDAOImp.get(3);
        Gamification userGamification = user.getGamification();
        Activity userActivity = new Activity("Mínimo de 67% da carga horária total das disciplinas obrigatórias do curso", "L1", 50, true);

        userGamification.addActivity(userActivity);
        user.setGamification(userGamification);
        repoUserDAOImp.save(user);

        User existUser = entityManager.find(User.class, user.getUser_id());
        assertThat(user.getGamification()).isEqualTo(existUser.getGamification());
    }
}