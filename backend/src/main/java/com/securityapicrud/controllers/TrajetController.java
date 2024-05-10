package com.securityapicrud.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.securityapicrud.entity.Trajet;
import com.securityapicrud.services.TrajetService;



@RestController
@RequestMapping("/api")
public class TrajetController {
	
	private final TrajetService trajetService;
	
	public TrajetController(TrajetService trajetService) {
	        this.trajetService = trajetService; 
	    }
	 /*
	 @PostMapping("/trajet")
	    public Trajet postTrajet(@RequestBody Trajet trajet) {
	        return trajetService.postTrajet(trajet);
	    }*/
	 @PostMapping("/trajet")
	 public Trajet postTrajet(@RequestBody Trajet trajet) {
	     return trajetService.postTrajet(trajet);
	 }
	 @GetMapping("/AllTrajet")
	 private List<Trajet> getAllTrajets(){
	     List<Trajet> trajets = trajetService.getAllTrajets();
	     return trajets;
	 }
	 
	 /*
	    @GetMapping
	    private List<Trajet> getAllTrajets() {
	        return trajetService.getAllTrajets();
	    }*/
	    
	    
	  
	    @GetMapping("/trajet/{id}")
	    public ResponseEntity<Trajet> getTrajetById(@PathVariable Long id){
	    Trajet trajet=  trajetService.getTrajetById(id);
	    if(trajet ==null) {
	    	return ResponseEntity.notFound().build();
	    }
	    return ResponseEntity.ok(trajet);
	    }
	
/*
	    @PostMapping
	    public Trajet createTrajet(@RequestBody Trajet trajet) {
	        return trajetService.createTrajet(trajet);
	    }

	    @PutMapping("/{id}")
	    public Trajet updateTrajet(@PathVariable Long id, @RequestBody Trajet trajet) {
	        trajet.setId(id);
	        return trajetService.updateTrajet(trajet);
	    }*/
	    
	    @PutMapping("/trajet/{id}")
	    public ResponseEntity<Trajet> updateTrajet(@PathVariable Long id,@RequestBody Trajet trajet){
	    	Trajet existtrajet=  trajetService.getTrajetById(id);
	    	if(existtrajet==null) {
	    		return ResponseEntity.notFound().build();
	    	}
	    	existtrajet.setStationDepart(trajet.getStationDepart());
	    	existtrajet.setStationArrive(trajet.getStationArrive());
	    	existtrajet.setDepart(trajet.getDepart());
	    	existtrajet.setArrive(trajet.getArrive());
	    	Trajet updateTrajet = trajetService.updateTrajet(existtrajet);
	    	return ResponseEntity.ok(updateTrajet);
	    }
/*
	    @DeleteMapping("/{id}")
	    public void deleteTrajet(@PathVariable Long id) {
	        trajetService.deleteTrajet(id);
	    }*/
	    
	    
	    @DeleteMapping("/trajet/{id}")
	    public ResponseEntity<?> deleteTrajet(@PathVariable Long id){
	    	Trajet existtrajet=  trajetService.getTrajetById(id);
	    	if(existtrajet==null) {
	    		return ResponseEntity.notFound().build();
	    	}
	    	trajetService.deleteTrajet(id);
	    	return ResponseEntity.ok().build();
	    	
	    	
	    }
	    /*
	    
	    @GetMapping("/AllTrajet")
	    public String filterTrajets(@RequestParam(stationDepart = "nom", required = false) String nom, Model model) {
	        List<Trajet> Trajets = new ArrayList<>();
	        if (nom == null) {
	            Trajets = TrajetRepository.findAll();
	        } else {
	        	Trajets = TrajetRepository.findByNomProduitContains(nom);
	        }
	        model.addAttribute("produits", produits);
	        return "produit/listeProduits";
	    }*/
	   

}
