package com.securityapicrud.impl;

import jakarta.validation.constraints.NotNull;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.securityapicrud.dto.OrderDao;
import com.securityapicrud.entity.Order;
import com.securityapicrud.services.OrderService;

import jakarta.validation.Valid;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {
    

	private OrderDao orderDao;

    public OrderServiceImpl(OrderDao orderDao) {
        this.orderDao = orderDao;
    }

    @Override
    public Iterable<Order> getAllOrders() {
        return this.orderDao.findAll();
    }

    @Override
    public Order create(@NotNull(message = "The order cannot be null.") @Valid Order order) {
        return this.orderDao.save(order);
    }

    @Override
    public void update(@NotNull(message = "The order cannot be null.") @Valid Order order) {
        this.orderDao.save(order);
    }
}
