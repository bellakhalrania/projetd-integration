package com.securityapicrud.dto;



import org.springframework.data.jpa.repository.JpaRepository;

import com.securityapicrud.entity.Comment;


public interface CommentDao extends JpaRepository<Comment, Long> {

} 
