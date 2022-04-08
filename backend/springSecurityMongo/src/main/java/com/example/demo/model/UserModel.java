package com.example.demo.model;
 import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

 @Document(collection="users")
public class UserModel {
	
	@Id
	private String Id;
	private String username;
	private String password;
	private String mobileNumber;
	private String gender;
	
	public UserModel() {
		
	}
	public String getUsername() {
		return username;
	}
	public  void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getId() {
		return Id;
	}
	
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public UserModel(String id, String username, String password, String mobileNumber, String gender) {
		super();
		Id = id;
		this.username = username;
		this.password = password;
		this.mobileNumber = mobileNumber;
		this.gender = gender;
	}
	
	}
	
	
	

 
 
 
 
 
 
 
