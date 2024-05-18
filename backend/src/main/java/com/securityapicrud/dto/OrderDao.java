package com.securityapicrud.dto;

import org.springframework.data.jpa.repository.JpaRepository;

import com.securityapicrud.entity.Order;


public interface OrderDao extends JpaRepository<Order, Long> {

}
