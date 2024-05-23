package com.securityapicrud;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.securityapicrud.entity.Role;
import com.securityapicrud.repository.RoleRepository;


@SpringBootApplication
public class SecurityapicrudApplication implements CommandLineRunner{

	 @Autowired
	  private RoleRepository roleRepository;
	
	 
	 public static void main(String[] args) {
		SpringApplication.run(SecurityapicrudApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		if (roleRepository.count() == 0) {
		  roleRepository.save(new Role("ROLE_ADMIN"));
		roleRepository.save(new Role("ROLE_USER"));
		roleRepository.save(new Role("ROLE_CHAUFFEUR"));
		} 
		
	}

}
