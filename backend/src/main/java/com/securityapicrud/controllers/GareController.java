package com.securityapicrud.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.securityapicrud.entity.Gare;
import com.securityapicrud.services.GareService;





@RestController
@RequestMapping("/api")

public class GareController {
    
    private final GareService gareService; // Declare as final
    
    // Spring will automatically inject an instance of GareService into this constructor
    public GareController(GareService gareService) {
        this.gareService = gareService; // Initialize the final field in the constructor
    }
    
    @PostMapping("/gare")
    public Gare postGare(@RequestBody Gare gare) {
        return gareService.postGare(gare);
    }
    
    @GetMapping("/AllGare")
    private List<Gare> getAllGare(){
    	return gareService.getAllGare();
    }
    
    @GetMapping("/gare/{id}")
    public ResponseEntity<Gare> getGareById(@PathVariable Long id){
    Gare gare=  gareService.getGareById(id);
    if(gare ==null) {
    	return ResponseEntity.notFound().build();
    }
    return ResponseEntity.ok(gare);
    }
    
    @PutMapping("/gare/{id}")
    public ResponseEntity<Gare> updateGare(@PathVariable Long id,@RequestBody Gare gare){
    	Gare existgare=  gareService.getGareById(id);
    	if(existgare==null) {
    		return ResponseEntity.notFound().build();
    	}
    	existgare.setNom_Gare(gare.getNom_Gare());
    	existgare.setLieu(gare.getLieu());
    	existgare.setAddress(gare.getAddress());
    	Gare updategare = gareService.updateGare(existgare);
    	return ResponseEntity.ok(updategare);
    }
    
   @DeleteMapping("/gare/{id}")
    public ResponseEntity<?> deleteGare(@PathVariable Long id){
    	Gare existgare=  gareService.getGareById(id);
    	if(existgare==null) {
    		return ResponseEntity.notFound().build();
    	}
    	gareService.deletegare(id);
    	return ResponseEntity.ok().build();
    	
    	
    }
}

