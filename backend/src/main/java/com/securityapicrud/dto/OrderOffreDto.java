package com.securityapicrud.dto;

import com.securityapicrud.entity.Offre;

public class OrderOffreDto {
	
 private Offre offre;
 private Integer quantity;

 public Offre getOffre() {
   return offre;
 }

 public void setProduct(Offre offre) {
   this.offre = offre;
 }

 public Integer getQuantity() {
   return quantity;
 }

 public void setQuantity(Integer quantity) {
   this.quantity = quantity;
 }
}
