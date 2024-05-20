package com.securityapicrud.controllers;



import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.securityapicrud.dto.LoginDto;
import com.securityapicrud.dto.SignUpDto;
import com.securityapicrud.entity.Role;
import com.securityapicrud.entity.User;
import com.securityapicrud.repository.RoleRepository;
import com.securityapicrud.repository.UserRepository;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
	
	 @Autowired
	 private UserDetailsService userDetailsService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @GetMapping("/getAllUser")
    private List<User> getAllGare(){
    	return userRepository.findAll();
    }
    
    @GetMapping("/getUser/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id){
    	User user= userRepository.findById(id).orElse(null);
    if(user ==null) {
    	return ResponseEntity.notFound().build();
    }
    return ResponseEntity.ok(user);
    }
    @GetMapping("/getUsername/{username}")
    public ResponseEntity<User> getUserByUsername(@PathVariable String username){
    	User user= userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));;
    if(user ==null) {
    	return ResponseEntity.notFound().build();
    }
    return ResponseEntity.ok(user);
    }

    
    @PostMapping("/signin")
    public ResponseEntity<Map<String, Object>> authenticateUser(@RequestBody LoginDto loginDto){
    	
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                loginDto.getUsernameOrEmail(), loginDto.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        
        
		/*
		 * UserDetails userDetails; try { userDetails =
		 * userDetailsService.loadUserByUsername(loginDto.getUsernameOrEmail()); //
		 * Récupérez les détails de l'utilisateur } catch (UsernameNotFoundException ex)
		 * { return
		 * ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Collections.singletonMap(
		 * "error", "Invalid credentials")); }
		 */
        
     // Récupérer l'utilisateur complet à partir de la base de données
        User user = userRepository.findByUsernameOrEmail(loginDto.getUsernameOrEmail(),loginDto.getUsernameOrEmail())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

      
        Map<String, Object> response = new HashMap<>();
        
        response.put("id", user.getId());
        response.put("name", user.getName());
        response.put("username", user.getUsername());
        response.put("email", user.getEmail());
        String roleName = user.getRoles().stream().findFirst().orElse(new Role("ROLE_DEFAULT")).getName();
        response.put("role", roleName);
       // response.put("role", user.getRoles().getClass().getName());

        return ResponseEntity.ok(response);
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody SignUpDto signUpDto){
            
    	
        // add check for username exists in a DB
        if(userRepository.existsByUsername(signUpDto.getUsername())){
            return new ResponseEntity<>("Username is already taken!", HttpStatus.BAD_REQUEST);
        }

        // add check for email exists in DB
        if(userRepository.existsByEmail(signUpDto.getEmail())){
            return new ResponseEntity<>("Email is already taken!", HttpStatus.BAD_REQUEST);
        }

        // create user object
        User user = new User();
        user.setName(signUpDto.getName());
        user.setUsername(signUpDto.getUsername());
        user.setEmail(signUpDto.getEmail());
        user.setPassword(passwordEncoder.encode(signUpDto.getPassword()));
        
         
        Role roles = roleRepository.findByName("ROLE_USER").orElseThrow(() -> new RuntimeException("Role not found: ROLE_USER"));
        user.setRoles(Collections.singleton(roles));

        userRepository.save(user);
        Map<String, Object> response = new HashMap<>();

        return ResponseEntity.ok(response);

    }
    
    @PostMapping("/signupChauffeur")
    public ResponseEntity<?> registerchauffeur(@RequestBody SignUpDto signUpDto){
            
    	
        // add check for username exists in a DB
        if(userRepository.existsByUsername(signUpDto.getUsername())){
            return new ResponseEntity<>("Username is already taken!", HttpStatus.BAD_REQUEST);
        }

        // add check for email exists in DB
        if(userRepository.existsByEmail(signUpDto.getEmail())){
            return new ResponseEntity<>("Email is already taken!", HttpStatus.BAD_REQUEST);
        }

        // create user object
        User user = new User();
        user.setName(signUpDto.getName());
        user.setUsername(signUpDto.getUsername());
        user.setEmail(signUpDto.getEmail());
        user.setPassword(passwordEncoder.encode(signUpDto.getPassword()));
        
         
        Role roles = roleRepository.findByName("ROLE_CHAUFFEUR").orElseThrow(() -> new RuntimeException("Role not found: ROLE_Chauffeur"));
        user.setRoles(Collections.singleton(roles));

        userRepository.save(user);

        return new ResponseEntity<>("User registered successfully", HttpStatus.OK);

    }
    @PostMapping("/signupPassager")
    public ResponseEntity<?> registerPassager(@RequestBody SignUpDto signUpDto){
            
    	
        // add check for username exists in a DB
        if(userRepository.existsByUsername(signUpDto.getUsername())){
            return new ResponseEntity<>("Username is already taken!", HttpStatus.BAD_REQUEST);
        }

        // add check for email exists in DB
        if(userRepository.existsByEmail(signUpDto.getEmail())){
            return new ResponseEntity<>("Email is already taken!", HttpStatus.BAD_REQUEST);
        }

        // create user object
        User user = new User();
        user.setName(signUpDto.getName());
        user.setUsername(signUpDto.getUsername());
        user.setEmail(signUpDto.getEmail());
        user.setPassword(passwordEncoder.encode(signUpDto.getPassword()));
        
         
        Role roles = roleRepository.findByName("ROLE_PASSAGER").orElseThrow(() -> new RuntimeException("Role not found: ROLE_PASSAGER"));
        user.setRoles(Collections.singleton(roles));

        userRepository.save(user);

        return new ResponseEntity<>("User registered successfully", HttpStatus.OK);

    }
    
    
}

