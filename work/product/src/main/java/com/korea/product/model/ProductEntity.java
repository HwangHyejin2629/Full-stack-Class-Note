package com.korea.product.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor //JPA에서 Entity객체를 데이터베이스에서 조회하려고 할 때 없으면 문제가 발생할수 있다.
@Table(name="products")
@Data
@Builder
@AllArgsConstructor
public class ProductEntity {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	int id;
	String name;
	String description;
	double price;
}
