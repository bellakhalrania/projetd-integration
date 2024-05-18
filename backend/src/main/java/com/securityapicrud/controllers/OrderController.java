package com.securityapicrud.controllers;


import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;



import java.util.Objects;

import org.antlr.v4.runtime.misc.NotNull;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import com.securityapicrud.dto.*;
import com.securityapicrud.Exception.*;
import com.securityapicrud.entity.Order;
import com.securityapicrud.entity.OrderOffre;
import com.securityapicrud.entity.OrderStatus;
import com.securityapicrud.services.*;
import com.securityapicrud.services.OrderService;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/orders")
public class OrderController {
	
	OffreService OffreService;
	OrderService orderService;
	OrderOffreService orderoffreService;
	
	public OrderController(OffreService offreService, OrderService OrderService,
			OrderOffreService orderoffreService) {
		super();
		this.OffreService = OffreService;
		this.orderService = orderService;
		this.orderoffreService = orderoffreService;
	}
	
	@GetMapping
	@ResponseStatus(HttpStatus.OK)
	public @NotNull Iterable<Order> list(){
		return this.orderService.getAllOrders();
	}
	
	@PostMapping("/orders")
	public ResponseEntity<Order> create(@RequestBody OrderForm form){
		List<OrderOffreDto> formDtos = form.getpOrderOffreDtos();
		validateOffresExistance(formDtos);
		Order order = new Order();
		order.setStatus(OrderStatus.PAID.name());
		order = this.orderService.create(order);
		
		List<OrderOffre> orderProducts = new ArrayList<OrderOffre>();
		for(OrderOffreDto dto: formDtos) {
			orderProducts.add(orderoffreService.create(new OrderOffre(order, OffreService.getOffre(
					dto.getOffre().getId()), dto.getQuantity())));
		}
		order.setOrderOffres(orderProducts);
		this.orderService.update(order);
		
		String uri = ServletUriComponentsBuilder
				.fromCurrentServletMapping()
				.path("/orders/{id}")
				.buildAndExpand(order.getId())
				.toString();
		HttpHeaders headers = new HttpHeaders();
		headers.add("Location", uri);
		
		return new ResponseEntity<>(order, headers, HttpStatus.CREATED);
	
	}

	private void validateOffresExistance(List<OrderOffreDto> orderProducts) {
		List<OrderOffreDto> list = orderProducts
				.stream()
				.filter(op -> Objects.isNull(OffreService.getOffre(op.getOffre().getId())))
				.collect(Collectors.toList());
		if (!CollectionUtils.isEmpty(list)) {
			new ResourceNotFoundException("Product not found");
			
		}
		
		
	}
	
	public  static class OrderForm {
		private List<OrderOffreDto> pOrderOffreDtos;

		public List<OrderOffreDto> getpOrderOffreDtos() {
			return pOrderOffreDtos;
		}

		public void setpOrderOffreDtos(List<OrderOffreDto> pOrderOffreDtos) {
			this.pOrderOffreDtos = pOrderOffreDtos;
		}
		
	}
	

}
