package com.securityapicrud.impl;

import jakarta.validation.constraints.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.securityapicrud.dto.OrderOffreDao;
import com.securityapicrud.entity.OrderOffre;
import com.securityapicrud.services.OrderOffreService;

import jakarta.validation.Valid;

@Transactional
@Component
public class OrderOffreServiceImpl implements OrderOffreService {
    
    @Autowired
    private OrderOffreDao orderProductDao;

    @Override
    public OrderOffre create(@NotNull @Valid OrderOffre orderProduct) {
        return this.orderProductDao.save(orderProduct);
    }
}
