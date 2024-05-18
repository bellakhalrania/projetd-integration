package com.securityapicrud.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.securityapicrud.entity.Category;
import com.securityapicrud.services.CategoryService;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins = "*")
public class CategoryController {

	@Autowired
	private CategoryService categoryService;

	@PostMapping("/addCategoryToUser/{idUser}")
	Category addCategoryToUser(@RequestBody Category category, @PathVariable long idUser) {
		return categoryService.addCategoryToUser(category, idUser);
	}

	@PutMapping("/editCategory/{id}")
	Category editCategory(@RequestBody Category category, @PathVariable long id) {
		return categoryService.editCategory(category, id);
	}

	@GetMapping("/findCategoryById/{id}")
	Category findCategoryById(@PathVariable long id) {
		return categoryService.findCategoryById(id);
	}

	@DeleteMapping("/deleteCategory/{id}")
	void deleteCategory(@PathVariable long id) {
		categoryService.deleteCategory(id);
	}

	@GetMapping("/findAllCategories")
	List<Category> findAllCategories() {
		return categoryService.findAllCategories();
	}

	@GetMapping("/findCategoriesForUser/{id}")
	List<Category> findCategoriesForUser(@PathVariable long id) {
		return categoryService.findCategoriesForUser(id);
	}

}
