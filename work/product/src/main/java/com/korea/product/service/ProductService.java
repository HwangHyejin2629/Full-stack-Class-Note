package com.korea.product.service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.korea.product.dto.ProductDTO;
import com.korea.product.model.ProductEntity;
import com.korea.product.presistence.ProductRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductService {

	private final ProductRepository repository;
	
	//상품추가
	public List<ProductDTO> addProduct() {
		List<ProductEntity> list = Arrays.asList(
                new ProductEntity(1, "Smartphone", "High-end smartphone with 128GB storage", 999.99),
                new ProductEntity(2, "Laptop", "15-inch laptop with 16GB RAM and 512GB SSD", 1299.99),
                new ProductEntity(3, "Wireless Earbuds", "Noise-cancelling wireless earbuds", 199.99),
                new ProductEntity(4, "Smartwatch", "Fitness tracker with heart rate monitor", 249.99),
                new ProductEntity(5, "Gaming Mouse", "High-precision gaming mouse with RGB lighting", 59.99),
                new ProductEntity(6, "Bluetooth Speaker", "Portable Bluetooth speaker with 12-hour battery life", 79.99),
                new ProductEntity(7, "4K TV", "55-inch 4K Ultra HD TV with HDR support", 899.99),
                new ProductEntity(8, "Tablet", "10-inch tablet with 64GB storage", 299.99),
                new ProductEntity(9, "External Hard Drive", "2TB external hard drive for backups", 89.99),
                new ProductEntity(10, "Gaming Console", "Next-gen gaming console with 1TB storage", 499.99)
        );
		for(int i = 0; i<list.size(); i++) {
			repository.save(list.get(i));
		}
		//list.stream 복사본 만들기 .map 하나씩 꺼내서, 리스트안의 entity -> new ProductDTO(entity) entity->DTO
		return list.stream().map(ProductDTO::new).collect(Collectors.toList()); //.collect(Collectors.toList()); 리스트로 수집
	}
	
	//상품조회
	public List<ProductDTO> getFilteredProducts(Double minPrice, String name){
		System.out.println("minPrice : " + minPrice);
		List<ProductEntity> products = repository.findAll();
		
		//가격 필터링(최소금액이 주어진 경우)
		if(minPrice != null) {
			products = products.stream()
						.filter(product -> product.getPrice() >= minPrice)
						.collect(Collectors.toList());
		}
		
		//이름 필터링(name이 넘어왔을 경우)
		if(name != null && !name.isEmpty()) {
			products = products.stream()
						.filter(product -> product.getName().toLowerCase().contains(name.toLowerCase()))
						.collect(Collectors.toList());
		}
		
		return products.stream().map(ProductDTO::new).collect(Collectors.toList());
	}
	
	
	//상품수정
	// localhost:9090/api/products/1
	// Request Body에 담아서 Controller전달
	// {
	//		"id" : 1,
	//		"name" : 수정할이름,
	//		"description": 수정할내용,
	//		"price" : 수정할 가격
	// }
	public ProductDTO updateProduct(int id, ProductDTO dto) {
		//db에서 id에 해당하는 데이터가 있는지 조회
		Optional<ProductEntity> original = repository.findById(id);
		
		//있으면 매개변수로 넘어온 dto에 있는 내용으로 기존의 내용을 갱신
		if(original.isPresent()) {
			ProductEntity entity = original.get();
			entity.setName(dto.getName());
			entity.setDescription(dto.getDescription());
			entity.setPrice(dto.getPrice());
			repository.save(entity);
			return new ProductDTO(entity);
		}
		return null;
	}
	
	public boolean deleteProduct(int id) {
		//Optional 클래스 사용해서 넘어온 id를 통해 DB에 데이터가 있는지 검증
		//select*from products where id=1;
		Optional<ProductEntity>original=repository.findById(id);
		if(original.isPresent()) { //id에 맞는 정보가 있는지 확인해줘
			repository.deleteById(id); //있으면, id 자료를 삭제해줘
			return true; //true를 반환
		}
		return false; //조건 안맞으면 
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
