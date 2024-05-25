package com.securityapicrud.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.securityapicrud.entity.*;
import com.securityapicrud.services.OffreService;

@RestController
@RequestMapping("/api")
public class OffreController {

	@Autowired
	private OffreService offreservice;
	
	
	@GetMapping("/offres")
	public List<Offre> getOffre(){
		return offreservice.getOffres();
		}
	
	@PostMapping("/offres/addnew")
	public void addOffre(@RequestBody Offre offre) {
		offreservice.addOffre(offre);
	}
	
	
	@PutMapping("/offres/{idOffre}/edit")
	public void updateOffre(@PathVariable("idOffre") Integer idOffre,@RequestBody Offre offre) {
		offreservice.updateOffre(offre);
	}
	
	
	
	@DeleteMapping("/offres/{idOffre}/delete")
	public void deleteoffre(@PathVariable("idOffre") Integer idOffre) {
		offreservice.deleteOffres(idOffre);
		
		
	}
}
