package com.securityapicrud.entity;


import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "orderProducts")
public class OrderOffre {

 @EmbeddedId
 @JsonIgnore
 private OrderOffreFK pk;

 @Column(nullable = false)
 private Integer quantity = 1;

 public OrderOffre(Order order, Offre offre, Integer quantity) {
   pk = new OrderOffreFK();
   pk.setOrder(order);
   pk.setOffre(offre);
   this.quantity = quantity;
 }

 public OrderOffreFK getPk() {
   return pk;
 }

 public void setPk(OrderOffreFK pk) {
   this.pk = pk;
 }

 public Integer getQuantity() {
   return quantity;
 }

 public void setQuantity(Integer quantity) {
   this.quantity = quantity;
 }

 @Override
 public boolean equals(Object obj) {
   if (this == obj) {
       return true;
   }
   if (obj == null) {
	 return false;
    }
   if (getClass() != obj.getClass()) {
	 return false;
    }
   OrderOffre other = (OrderOffre) obj;
   if (pk == null) {
     if (other.pk != null) {
	return false;
			}
   } else if (!pk.equals(other.pk)) {
	 return false;
    }
   return true;
 }
}
