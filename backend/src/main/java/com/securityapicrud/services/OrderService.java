package com.securityapicrud.services;

import jakarta.validation.constraints.NotNull;
import org.springframework.validation.annotation.Validated;
import com.securityapicrud.entity.Order;
import jakarta.validation.Valid;

@Validated
public interface OrderService {

    @NotNull(message = "{NotNull.order}")
    Iterable<Order> getAllOrders();

    Order create(@NotNull(message = "{NotNull.order}") @Valid Order order);
    void update(@NotNull(message = "{NotNull.order}") @Valid Order order);
}
