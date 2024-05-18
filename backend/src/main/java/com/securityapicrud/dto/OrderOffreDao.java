package com.securityapicrud.dto;



import org.springframework.data.jpa.repository.JpaRepository;


import com.securityapicrud.entity.OrderOffre;
import com.securityapicrud.entity.OrderOffreFK;


public interface OrderOffreDao extends JpaRepository<OrderOffre, OrderOffreFK> {

}
