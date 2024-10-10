package com.korea.product.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.korea.product.dto.ProductDTO;
import com.korea.product.dto.ResponseDTO;
import com.korea.product.model.ProductEntity;
import com.korea.product.service.ProductService;

import lombok.RequiredArgsConstructor;


@RestController
@RequiredArgsConstructor // 필드에 final이나 @Nonnull이 붙어있는 필드를 매개변수로 갖는 생성자를 생성.
@RequestMapping("product")
public class ProductController {
	private final ProductService service; //생성자 주입
	//==
	//public ProductController(ProductService productService){
	// 	this.productService=productService;
	//}
	
	@GetMapping
	public ResponseEntity<?> productList(){
		List<ProductDTO> dtos= service.retrieveAll();
		ResponseDTO<ProductDTO> response = ResponseDTO.<ProductDTO>builder().data(dtos).build();
		
		return ResponseEntity.ok(response);

	}
	
	@PostMapping
	public ResponseEntity<?> createProduct(@RequestBody ProductDTO dto) {
		//DTO->Entity
		ProductEntity entity = ProductDTO.toEntity(dto); //DTO->Entity
		//entity를 넣어서 service의 create메서드 실행 
		service.create(entity);
		
		//모든 리스트 반환
		List<ProductDTO> dtos= service.retrieveAll();
		ResponseDTO<ProductDTO> response = ResponseDTO.<ProductDTO>builder().data(dtos).build();
		return ResponseEntity.ok(response);
	}
}
