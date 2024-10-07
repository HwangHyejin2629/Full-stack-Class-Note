package com.korea.product.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.korea.product.dto.ProductDTO;
import com.korea.product.service.ProductService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/products")
public class ProductController {

	private final ProductService service;
	
	//상품추가
	@PostMapping
	public ResponseEntity<?> addProduct(){
		return ResponseEntity.ok().body(service.addProduct());
	}
	
	//상품조회
	//localhost:9090/api/products?minPrice=200&name="phone"
	@GetMapping
	public ResponseEntity<?> getFilteredProduct( 
			//
			@RequestParam(value="minPrice", required=false) Double minPrice,
			@RequestParam(value="name", required=false) String name){
		System.out.println("m_price : " + minPrice);
		List<ProductDTO> products = service.getFilteredProducts(minPrice, name);
		return ResponseEntity.ok().body(products);
	}
	
	//상품수정
	@PutMapping("/{id}")
	public ResponseEntity<?> updateProduct(@PathVariable int id, @RequestBody ProductDTO dto){
	 	ProductDTO u_dto = service.updateProduct(id, dto);
	 	if(u_dto != null) {
	 		return ResponseEntity.ok().body(u_dto);
	 	}
	 	return ResponseEntity.badRequest().body("업데이트가 안됐습니다.");
	}
	
	//상품삭제
	@DeleteMapping("/{id}")
	public ResponseEntity<?> publicController(@PathVariable int id){
		boolean result=service.deleteProduct(id); //id service로 넘기면 service에서 id로 삭제한다.
		if(result){
			return ResponseEntity.ok("삭제 잘됨");
		}return ResponseEntity.badRequest().body("삭제가 잘 안됨");
	}
	
	
	
	
	
	
	
}
