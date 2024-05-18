package com.securityapicrud.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.securityapicrud.entity.Comment;
import com.securityapicrud.services.CommentService;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins = "*")
public class CommentController {
 
	@Autowired
	private CommentService commentService;
	
	@PostMapping("/addCommentToOffre/{idOffre}")
	Comment addCommentToProduct(@RequestBody Comment comment, @PathVariable long idOffre) {
		return commentService.addCommentToProduct(comment, idOffre);
	}
	@PutMapping("/editComment/{id}")
	Comment editComment(@RequestBody Comment comment, @PathVariable long id) {
		return commentService.editComment(comment, id);
	}
	@GetMapping("/findCommentById/{id}")
	Comment findCommentById(@PathVariable long id) {
		return commentService.findCommentById(id);
	}
	@DeleteMapping("/deleteComment/{id}")
	void deleteComment(@PathVariable long id) {
		commentService.deleteComment(id);
	}
	@GetMapping("/findCommentsForOffre/{idOffre}")
	List<Comment> findCommentsForProduct(@PathVariable long idOffre) {
		return commentService.findCommentsForProduct(idOffre);
	}
	@GetMapping("/findAllComments")
	List<Comment> findAllComments() {
		return commentService.findAllComments();
	}
}
