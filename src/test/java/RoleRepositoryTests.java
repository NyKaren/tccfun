import com.nykaren.springboot.springboot.dao.RoleDAOImp;
import com.nykaren.springboot.springboot.modal.Role;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.test.annotation.Rollback;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(false)
public class RoleRepositoryTests {

    @Autowired
    private RoleDAOImp repoRoleDAOImp;

    @Configuration
    @ComponentScan("com.nykaren.springboot.springboot")
    public static class AppConfig {
    }

    @Test
    public void testCreateRoles() {
        Role student = new Role("Aluno");
        Role admin = new Role("Administrador");

        repoRoleDAOImp.save(student);
        repoRoleDAOImp.save(admin);
        List<Role> listRoles = repoRoleDAOImp.get();

        assertThat(listRoles.size()).isEqualTo(2);
    }

}