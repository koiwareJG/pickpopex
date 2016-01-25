package org.zerock.domain;

public class SampleVO {

	  private Integer mno;
	  private String firstName;
	  private String lastName;
	  private String conType;
	  private String id;
	  private String comment;
	  private String imgPath;
	  private String productName;
	  private String price;
	  private String point;

	  public Integer getMno() {
	    return mno;
	  }

	  public void setMno(Integer mno) {
	    this.mno = mno;
	  }

	  public String getFirstName() {
	    return firstName;
	  }

	  public void setFirstName(String firstName) {
	    this.firstName = firstName;
	  }

	  public String getLastName() {
	    return lastName;
	  }

	  public void setLastName(String lastName) {
	    this.lastName = lastName;
	  }
	  
	  public String getConType() {
		return conType;
	}

	public void setConType(String conType) {
		this.conType = conType;
	}
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public String getImgPath() {
		return imgPath;
	}

	public void setImgPath(String imgPath) {
		this.imgPath = imgPath;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getPoint() {
		return point;
	}

	public void setPoint(String point) {
		this.point = point;
	}

	@Override
	  public String toString() {
	    return "SampleVO [mno=" + mno + ", firstName=" + firstName + ", lastName=" + lastName + ", conType=" + conType + ", id=" + id + ", comment=" + comment + ", imgPath=" + imgPath + ", productName=" + productName + ", price=" + price + ", point=" + point + "]";
	  }


	}