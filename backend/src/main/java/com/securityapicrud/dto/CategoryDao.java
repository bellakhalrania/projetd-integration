package com.securityapicrud.dto;




import org.springframework.data.jpa.repository.JpaRepository;

import com.securityapicrud.entity.Category;


public interface CategoryDao extends JpaRepository<Category, Long>{

}
