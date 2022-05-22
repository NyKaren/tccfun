import com.nykaren.springboot.springboot.dao.RoleDAOImp;
import com.nykaren.springboot.springboot.dao.UserDAOImp;
import com.nykaren.springboot.springboot.modal.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.test.annotation.Rollback;

import java.time.LocalDate;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(false)
public class UserRepositoryTests {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private UserDAOImp repoUserDAOImp;

    @Autowired
    private RoleDAOImp repoRoleDAOImp;

    LocalDate currentLocalDate = LocalDate.now();
    //LocalDate inputDate = LocalDate.of(2022,5,10);


    @Configuration
    @ComponentScan("com.nykaren.springboot.springboot")
    public static class AppConfig {
    }

    @Test
    public void testCreateUser() {
        User user = new User();
        user.setUser_email("ravikumar@gmail.com");
        user.setUser_username("ravikumar");
        user.setUser_password("ravi2020");
        user.setUser_first_name("Ravi");
        user.setUser_last_name("Kumar");
        //user.setUser_created_by(new Date("1998-04-02T21:11:54"));
        user.setUser_created_by(currentLocalDate);
        //user.setUser_terminated_by(null);
        user.setUser_status(true);

        repoUserDAOImp.save(user);

        User existUser = entityManager.find(User.class, user.getUser_id());

        assertThat(user.getUser_email()).isEqualTo(existUser.getUser_email());

    }
}