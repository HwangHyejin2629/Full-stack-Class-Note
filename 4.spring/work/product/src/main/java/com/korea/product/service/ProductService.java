package com.korea.product.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.korea.product.dto.ProductDTO;
import com.korea.product.model.ProductEntity;
import com.korea.product.persistence.ProductRepository;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;


@Service
@Slf4j  
@RequiredArgsConstructor
public class ProductService {
	private final ProductRepository repository;
	
	//모든 상품 조회
	public List<ProductDTO> retrieveAll(){ //DTO로 내보내게 만든다.2건 이상 조회가 될테니 List
		//DB에 접근해서 데이터를 조회
		//findAll():select*from product;
		List<ProductEntity> list = repository.findAll();
		
		//리스트안에 있는 Entity를 Dto로 변경
		//스트림연산 : 스트림 생성(list.stream() 복사), 중간연산(.map(ProductDTO::new) 실제로 하고싶은작업 entity를 dto로 변환), 마무리연산(.collect(Collectors.toList() 리스트에 담아서 반환해)
		List<ProductDTO> dtos= list.stream().map(ProductDTO::new).collect(Collectors.toList());
		
		return dtos;
	}
	
	public List<ProductDTO> create(ProductEntity entity) {
		//데이터 추가하기
		repository.save(entity);
		
		//전체 조회
		List<ProductEntity> list = repository.findAll();
		List<ProductDTO> dtos= list.stream().map(ProductDTO::new).collect(Collectors.toList());
		
		return dtos;
	}
	
}
