package com.securityapicrud.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.securityapicrud.entity.Passager;
import com.securityapicrud.services.PassagerService;



@RestController
@RequestMapping("/passagers")
public class PassagerController {

    @Autowired
    private PassagerService passagerService;

    @PostMapping
    public ResponseEntity<Passager> createPassager(@RequestBody Passager passager) {
        try {
            Passager createdPassager = passagerService.createPassager(passager);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdPassager);
        } catch (Exception e) {
            // Gérer l'exception ici, par exemple, renvoyer une réponse avec un statut d'erreur 500
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping
    public ResponseEntity<List<Passager>> getAllPassagers() {
        List<Passager> passagerList = passagerService.getAllPassagers();
        return ResponseEntity.ok(passagerList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Passager> getOnePassager(@PathVariable Long id) {
        Passager passager = passagerService.getOnePassager(id);
        if (passager == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(passager);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Passager> updatePassager(@PathVariable Long id, @RequestBody Passager passager) {
        Passager existingPassager = passagerService.getOnePassager(id);
        if (existingPassager == null) {
            return ResponseEntity.notFound().build();
        }
        passager.setId(id);
        Passager updatedPassager = passagerService.updatePassager(passager);
        return ResponseEntity.ok(updatedPassager);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePassager(@PathVariable Long id) {
        Passager passager = passagerService.getOnePassager(id);
        if (passager == null) {
            return ResponseEntity.notFound().build();
        }
        passagerService.deletePassagerById(id);
        return ResponseEntity.noContent().build();
    }
}
