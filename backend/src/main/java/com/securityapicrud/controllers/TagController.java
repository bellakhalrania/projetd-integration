package com.securityapicrud.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.securityapicrud.dto.TagDao;
import com.securityapicrud.entity.Offre;
import com.securityapicrud.entity.Tag;
import com.securityapicrud.services.TagService;


@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins = "*")
public class TagController {

	@Autowired
	private TagService tagService;
	
	@Autowired
	private TagDao tagDao;

	@PostMapping("/addTagToProduct/{idProduct}/{idTag}")
	void addTagToProduct(@PathVariable long idOffre, @PathVariable long idTag) {
		tagService.addTagToOffre(idOffre, idTag);
	}

	@GetMapping("/findTagsForProduct/{idProduct}")
	List<Tag> findTagsForProduct(@PathVariable long idProduct) {
		return tagService.findTagsForOffre(idProduct);
	}
	
	@GetMapping("/findAllTags")
	List<Tag> findAllTags() {
		return tagService.findAllTags();
	}

	@DeleteMapping("/deleteTagFromProduct")
	void deleteTagFromProduct(@PathVariable long idTag, @PathVariable long idOffre) {
		tagService.deleteTagFromOffre(idTag, idOffre);
	}
 
	@PostMapping("/addTag")
	Tag addTag(@RequestBody Tag tag) {
		return tagService.addTag(tag);
	}

	@DeleteMapping("/deleteTag/{id}")
	void deleteTag(@PathVariable long id) {
		tagService.deleteTag(id);
	}

	@GetMapping("/findTagById/{id}")
	Tag findTagById(@PathVariable long id) {
		return tagService.findTagById(id);
	}
	@GetMapping("/findAllTagByName/{name}")
	List<Tag> findAllTagByName(@PathVariable String name) {
		return tagDao.findByName("%" + name + "%");
	}
	
	@GetMapping("/findOffresForTag/{idTag}")
	List<Offre> findProductsForTag(@PathVariable long idTag) {
		return tagService.findOffreForTag(idTag);
	}

}
