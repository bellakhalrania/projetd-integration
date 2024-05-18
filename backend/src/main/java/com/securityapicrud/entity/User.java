package com.securityapicrud.entity;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import jakarta.persistence.*; 
import lombok.Data;

@Data
@Entity
@Table(name = "users", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"username"}),
        @UniqueConstraint(columnNames = {"email"})
})
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String username;
    private String email;
    private String password;
    private boolean admin;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "user_roles",
        joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
        inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id"))
    private Set<Role> roles;
    
    
    @JsonProperty(access = Access.AUTO)
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
    private List<Category> categories;
   	 
    @JsonProperty(access = Access.AUTO)
    @OneToMany(cascade = CascadeType.MERGE, mappedBy = "user")
    private List<Cart> carts;
    

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(long id, String name, String username, String email, String password ,boolean admin,List<Category> categories, List<Cart> carts) {
		super();
		this.id = id;
		this.name = name;
		this.username = username;
		this.email = email;
		this.password = password;
		 this.categories = categories;
		   this.carts = carts;
		   this.admin=admin;
		
	}
	

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", admin="+admin+" username=" + username + ", email=" + email + ", password="
				+ password + ", roles=" + roles + "]";
	}

	public long getId() {
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

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	
	
	public boolean isAdmin() {
		return admin;
	}

	public void setAdmin(boolean admin) {
		this.admin = admin;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}
    
	
	 public List<Category> getCategories() {
		   return categories;
		 }

		 public void setCategories(List<Category> categories) {
		   this.categories = categories;
		 }
				
		 public List<Cart> getCarts() {
		   return carts;
		 }

		 public void setCarts(List<Cart> carts) {
		   this.carts = carts;
		 }

		 public void addCategoryToUser(Category category) {
		  if (getCategories()==null) {
		   this.categories = new ArrayList<>();
		   }
		   getCategories().add(category);
		   category.setUser(this);
		 }
		   
		 public void addCartToUser(Cart cart) {
		   if(getCarts()==null) {
		    this.carts = new ArrayList<>();	
		   }
		    getCarts().add(cart);
		    cart.setUser(this);
		 }
		    
		 public void removeFromCart(Cart cart) {
		   if (getCarts()!=null) {
		  getCarts().remove(cart);
		  }
		 }
    
}
