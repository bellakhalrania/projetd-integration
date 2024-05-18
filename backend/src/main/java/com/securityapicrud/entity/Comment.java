package com.securityapicrud.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="comments")
public class Comment { 
 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;

 private String title;

 @Lob
 @Column( length = 100000 )
 private String message;
	
 private String addedBy;
	
 @Temporal(TemporalType.TIMESTAMP)
 private Date addedAt;
	
 @JsonBackReference(value = "product")
 @ManyToOne
 private Offre offre;
 
 public Comment() {
  super();
 }

 public Comment(String title, String message, String addedBy, Date addedAt, Offre offre) {
   super();
   this.title = title;
   this.message = message;
   this.addedBy = addedBy;
   this.addedAt = addedAt;
   this.offre = offre;
 }

 public Long  getId() {
   return id;
 }

 public void setId(long id) {
   this.id = id;
 }
 
 public String getTitle() {
   return title;
 }

 public void setTitle(String title) {
   this.title = title;
 }

 public String getMessage() {
   return message;
 }

 public void setMessage(String message) {
   this.message = message;
 }

 public String getAddedBy() {
   return addedBy;
 }

 public void setAddedBy(String addedBy) {
   this.addedBy = addedBy;
 }

 public Date getAddedAt() {
   return addedAt;
 }

 public void setAddedAt(Date addedAt) {
   this.addedAt = addedAt;
 }

 public Offre getOffre() {
   return offre;
 }

 public void setOffre(Offre Offre) {
   this.offre = Offre;
 }	
}
