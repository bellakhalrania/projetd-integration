package com.securityapicrud.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.securityapicrud.entity.Chauffeur;
import com.securityapicrud.services.ChauffeurService;


@RestController
@RequestMapping("/api/chauffeurs")
public class ChauffeurController {

    @Autowired
    private ChauffeurService chauffeurService;

    @PostMapping
    public ResponseEntity<Chauffeur> createChauffeur(@RequestBody Chauffeur chauffeur) {
        try {
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
