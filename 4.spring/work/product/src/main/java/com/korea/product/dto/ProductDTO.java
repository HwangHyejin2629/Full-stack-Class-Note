package com.korea.product.dto;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.korea.product.model.ProductEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class ProductDTO {
	private int id;
	private String name;
	private int inventory;
	private int price;
	private LocalDateTime insertDate;	
	private LocalDateTime updateDate;
	
	public ProductDTO(ProductEntity entity) {
		this.id=entity.getId();
		this.name=entity.getName();
		this.inventory=entity.getInventory();
		this.price=entity.getPrice();
		this.insertDate=entity.getInsertDate();
		this.updateDate=entity.getUpdateDate();
	}
	//static : ProductDTO.toEntity 로 호출 가능
	public static ProductEntity toEntity(ProductDTO dto) { //DTO->Entity
		return ProductEntity.builder()
				.id(dto.getId())
				.name(dto.getName())
				.inventory(dto.getInventory())
				.price(dto.getPrice())
				.insertDate(dto.getInsertDate())
				.updateDate(dto.getUpdateDate())
				.build();
				
	}
}
