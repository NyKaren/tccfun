import com.nykaren.springboot.springboot.dao.RoleDAOImp;
import com.nykaren.springboot.springboot.dao.UserDAOImp;
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
        user.addRole(roleAdmin);
        System.out.println("Role admin: "+roleAdmin);

        repoUserDAOImp.save(user);
        System.out.println("User: "+user);
        User existUser = entityManager.find(User.class, user.getUser_id());
        System.out.println("ExistUser: "+existUser);

        assertThat(existUser.getRoles().size()).isEqualTo(1);
    }

    @Test
    @Order(4)
    public void testAddRoleToExistingUser() {
        User user = repoUserDAOImp.get(1);
        Role roleAdmin = repoRoleDAOImp.get(2);
        Role roleStudent = repoRoleDAOImp.get(1);
        System.out.println("Role admin: "+roleAdmin);
        System.out.println("Role student: "+roleStudent);

        user.addRole(roleStudent);
        user.addRole(roleAdmin);

        repoUserDAOImp.save(user);
        System.out.println("User: "+user);
        User existUser = entityManager.find(User.class, user.getUser_id());

        assertThat(existUser.getRoles().size()).isEqualTo(2);
    }
}