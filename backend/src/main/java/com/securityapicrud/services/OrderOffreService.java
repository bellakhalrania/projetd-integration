package com.securityapicrud.services;

import jakarta.validation.constraints.NotNull;
import org.springframework.validation.annotation.Validated;
import com.securityapicrud.entity.OrderOffre;
import jakarta.validation.Valid;

@Validated
public interface OrderOffreService {
    OrderOffre create(@NotNull @Valid OrderOffre OrderOffre);
}
