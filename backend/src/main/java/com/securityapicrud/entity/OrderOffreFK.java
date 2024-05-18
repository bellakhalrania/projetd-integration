package com.securityapicrud.entity;



import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.Embeddable;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import java.io.Serializable;

@Embeddable
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "order")
public class OrderOffreFK implements Serializable {

 private static final long serialVersionUID = 1L;
	
 @ManyToOne(optional=false, fetch = FetchType.LAZY)
 @JoinColumn(name="orderId")
 private Order order;
	
 @ManyToOne(optional=false, fetch = FetchType.LAZY)
 @JoinColumn(name="offreId")
 private Offre offre;
 
 public OrderOffreFK() {
  super();
 }
 
 public Order getOrder() {
   return order;
 }

 public void setOrder(Order order) {
   this.order = order;
 }

 public Offre getOffre() {
   return offre;
 }

 public void setOffre(Offre offre) {
   this.offre = offre;
 }
	
 @Override
 public int hashCode() {
   final int prime = 31;
   int result = 1;
		
  result  = prime * result  + ((order.getId() == null)
    ? 0
    : order
    .getId()
    .hashCode());
   result = prime * result  + ((offre.getId() == null)
    ? 0
    : offre
    .getId()
    .hashCode());
   return result ;
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
   OrderOffreFK other = (OrderOffreFK) obj;
    if (order == null) {
      if (other.order != null) {
      return false;
    }
   }else if (!order.equals(other.order)) {
      return false;
     }
   if (offre == null) {
    if (other.offre != null) {
      return false;
    }
    }else if (!offre.equals(other.offre)) {
			return false;
     }
     return true;
 }
	
}
