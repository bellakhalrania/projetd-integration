package com.securityapicrud.controllers;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;


import com.securityapicrud.entity.Chauffeur;
import com.securityapicrud.entity.Role;
import com.securityapicrud.entity.User;
import com.securityapicrud.repository.RoleRepository;
import com.securityapicrud.repository.UserRepository;
import com.securityapicrud.services.ChauffeurService;


@RestController
@RequestMapping("/api/chauffeurs")

public class ChauffeurController {
	 @Autowired
	    private UserRepository userRepository;

	    @Autowired
	    private RoleRepository roleRepository;

	    @Autowired
	    private PasswordEncoder passwordEncoder;

    @Autowired
    private ChauffeurService chauffeurService;

    @PostMapping
    public ResponseEntity<?> createChauffeur(@RequestBody Chauffeur chauffeur) {
        try {
        	if(userRepository.existsByUsername(chauffeur.getNom())){
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username is already taken!");
            }

            // add check for email exists in DB
            if(userRepository.existsByEmail(chauffeur.getEmail())){
            	return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("email is already taken!");

            }

            // create user object
            User user = new User();
            user.setName(chauffeur.getNom());
            user.setUsername(chauffeur.getPrenom());
            user.setEmail(chauffeur.getEmail());
            user.setPassword(passwordEncoder.encode(chauffeur.getPassword()));
            
             
            Role roles = roleRepository.findByName("ROLE_CHAUFFEUR").orElseThrow(() -> new RuntimeException("Role not found: ROLE_Chauffeur"));
            user.setRoles(Collections.singleton(roles));

            userRepository.save(user);
            
            Chauffeur createdChauffeur = chauffeurService.createChauffeur(chauffeur);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdChauffeur);
            
            
            
            
        } catch (Exception e) {
            // Gérer l'exception ici, par exemple, renvoyer une réponse avec un statut d'erreur 500
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


    @GetMapping
    public ResponseEntity<List<Chauffeur>> getAllChauffeurs() {
        List<Chauffeur> chauffeurList = chauffeurService.getAllChauffeurs();
        return ResponseEntity.ok(chauffeurList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Chauffeur> getOneChauffeur(@PathVariable Long id) {
        Chauffeur chauffeur = chauffeurService.getOneChauffeur(id);
        if (chauffeur == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(chauffeur);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Chauffeur> updateChauffeur(@PathVariable Long id, @RequestBody Chauffeur chauffeur) {
        Chauffeur existingChauffeur = chauffeurService.getOneChauffeur(id);
        if (existingChauffeur == null) {
            return ResponseEntity.notFound().build();
        }
        chauffeur.setId(id);
        Chauffeur updatedChauffeur = chauffeurService.updateChauffeur(chauffeur);
        return ResponseEntity.ok(updatedChauffeur);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteChauffeur(@PathVariable Long id) {
        Chauffeur chauffeur = chauffeurService.getOneChauffeur(id);
        if (chauffeur == null) {
            return ResponseEntity.notFound().build();
        }
        chauffeurService.deleteChauffeurById(id);
        return ResponseEntity.noContent().build();
    }



 
}
