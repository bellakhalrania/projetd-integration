package com.securityapicrud.entity;


import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import java.util.ArrayList;
import java.util.List;

import org.springframework.core.metrics.StartupStep.Tags;

import com.securityapicrud.entity.Tag;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name = "Offres")
public class Offre {

 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;
 
 private String name;

 private String description;

 private Double price;

 private String pictureUrl;

 @JsonBackReference(value = "category")
 @ManyToOne
 private Category category;

 @JsonProperty(access = Access.WRITE_ONLY)
 @ManyToMany(fetch = FetchType.LAZY)
 @JoinTable(name = "tag_offres", joinColumns = @JoinColumn(name = "tag_id"), inverseJoinColumns = @JoinColumn(name = "offre_id"))

 private List<Tag> tags;


 @JsonProperty(access = Access.WRITE_ONLY)
 @OneToMany(cascade = CascadeType.ALL, mappedBy = "product")
 private List<Comment> comments;
 
 
 
 public Offre(String name, String description, Double price, String pictureUrl, Category category, List<Tag> tags,
			List<Comment> comments) {
   super();
   this.name = name;
   this.description = description;
   this.price = price;
   this.pictureUrl = pictureUrl;
   this.category = category;
   this.tags=tags;
   this.comments = comments;
 } 
 
 
 public  Offre() {
	  super();
	 }
 public Long  getId() {
   return id;
 }

 public void setId(long id) {
   this.id = id;
 }

 public String getName() {
   return name;
 }

 public void setName(String name) {
   this.name = name;
 }

 public String getDescription() {
   return description;
 }

 public void setDescription(String description) {
   this.description = description;
 }

 public Double getPrice() {
   return price;
 }

 public void setPrice(Double price) {
   this.price = price;
 }

 public String getPictureUrl() {
   return pictureUrl;
 }

 public void setPictureUrl(String pictureUrl) {
   this.pictureUrl = pictureUrl;
 }

 public Category getCategory() {
   return category;
 }

 public void setCategory(Category category) {
   this.category = category;
 }

 public List<Tag> getTags() {
   return tags;
 }

 public void setTags(List<Tag> tags) {
   this.tags = tags;
 }

 public List<Comment> getComments() {
   return comments;
 }

 public void setComments(List<Comment> comments) {
   this.comments = comments;
 }

 public void addCommentToProduct(Comment comment) {
  if (getComments() == null) {
   this.comments = new ArrayList<>();
   }
   getComments().add(comment);
   comment.setOffre(this);
 }

 public void addTag(Tag tag) {
  if (getTags() == null) {
	 this.tags = new ArrayList<>();
    }
  if (!getTags().contains(tag)) {
     getTags().add(tag);
   }
 }
}
 
