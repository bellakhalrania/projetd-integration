package com.securityapicrud.dto;




import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import com.securityapicrud.entity.User;


public interface UserDao extends JpaRepository<User, Long>{
 Optional<User> findByUsername(String name);
}

