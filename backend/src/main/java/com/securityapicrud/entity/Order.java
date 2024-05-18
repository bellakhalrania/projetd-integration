package com.securityapicrud.entity;




import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;


import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;

@Entity
@Table(name = "orders")
@JsonIdentityInfo(generator=ObjectIdGenerators.PropertyGenerator.class, property="orderProducts")
public class Order {
 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;
 
 @JsonFormat(pattern="dd/MM/yyyy")
 private LocalDate dateCreated;
		
 private String status;
	 
 @OneToMany(mappedBy="pk.order")
 private List<OrderOffre> orderOffres = new ArrayList<OrderOffre>();
 

 
 public Order(LocalDate dateCreated, String status, List<OrderOffre> orderoffres) {
   super();
   this.dateCreated = dateCreated;
   this.status = status;
   this.orderOffres = orderoffres;
 }
 public Order () {

 }

 public Long  getId() {
   return id;
 }

 public void setId(long id) {
   this.id = id;
 }
 
 public LocalDate getDateCreated() {
   return dateCreated;
 }

 public void setDateCreated(LocalDate dateCreated) {
   this.dateCreated = dateCreated;
 }

 public String getStatus() {
   return status;
 }

 public void setStatus(String status) {
   this.status = status;
 }

 public List<OrderOffre> getOrderOffres() {
   return orderOffres;
 }

 public void setOrderOffres(List<OrderOffre> orderoffres) {
   this.orderOffres = orderoffres;
 } 

}
 