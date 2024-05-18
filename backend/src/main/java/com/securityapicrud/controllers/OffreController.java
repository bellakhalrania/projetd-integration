package com.securityapicrud.controllers;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.securityapicrud.dto.OffreDao;
import com.securityapicrud.entity.Offre;
import com.securityapicrud.services.OffreService;

import com.securityapicrud.services.*;
@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins = "*")
public class OffreController {

	@Autowired
	private OffreService offreService;

	@Autowired
	private OffreDao offreDao;

	@PostMapping("/addProductToCategory/{idCategory}")
	Offre addOffreToCategory(@RequestBody Offre offre, @PathVariable long idCategory) {
		return offreService.addOffreToCategory(offre, idCategory);
	}
	
	
	
		

	@PutMapping("/editProduct/{id}")
	Offre editProduct(@RequestBody Offre offre, @PathVariable long id) {
		return offreService.editOffre(offre, id);
	}

	@GetMapping("/findProductById/{id}")
	Offre findProductById(@PathVariable long id) {
		return offreService.findOffreById(id);
	}

	@DeleteMapping("/deleteProduct/{id}")
	void deleteProduct(@PathVariable long id) {
		offreService.deleteOffre(id);
	}

	@GetMapping("/findAllProducts")
	List<Offre> findAllOffres() {
		return offreService.findAllOffres();
	}

	@GetMapping("/findProductsForCategory/{idCategory}")
	List<Offre> findProductsForCategory(@PathVariable long idCategory) {
		return offreService.findOffresForCategory(idCategory);
	}

	@GetMapping("/findByName/{name}")
	List<Offre> findByName(@PathVariable String name) {
		return offreService.findByName("%" + name + "%");
		}

}
