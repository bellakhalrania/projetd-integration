package com.securityapicrud.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;

import com.securityapicrud.entity.Cars;
import com.securityapicrud.services.CarsService;

import java.util.Set;

@RestController

@RequestMapping("/api/cars")
public class CarsController {

    @Autowired
    private CarsService carsService;

    @PostMapping
    public ResponseEntity<Cars> createCars(@Validated @RequestBody Cars cars) {
        Cars createdCars = carsService.createCars(cars);
        return new ResponseEntity<>(createdCars, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<Set<Cars>> getAllCars() {
        Set<Cars> carsList = carsService.getAllCars();
        return new ResponseEntity<>(carsList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cars> getOneCars(@PathVariable Long id) {
        Cars cars = carsService.getOneCars(id);
        return cars != null ? ResponseEntity.ok(cars) : ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cars> updateCars(@PathVariable Long id, @Validated @RequestBody Cars cars) {
        if (carsService.getOneCars(id) == null) {
            return ResponseEntity.notFound().build();
        }
        cars.setIdBus(id);
        Cars updatedCars = carsService.updateCars(cars);
        return ResponseEntity.ok(updatedCars);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCars(@PathVariable Long id) {
        if (carsService.getOneCars(id) == null) {
            return ResponseEntity.notFound().build();
        }
        carsService.deleteCarsById(id);
        return ResponseEntity.noContent().build();
    }
}
