package com.korea.product.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.korea.product.model.ProductEntity;

//영속계층
@Repository
//인터페이스를 상속받으면 메서드를 자식 인터페이스가 다 쓸수 있다. JpaRepository :  Database와 연결
public interface ProductRepository extends JpaRepository<ProductEntity, Integer>{ // <들어올 데이터 타입, 프라이머리키 Type>
//메서드를 구현하지 않고 직접 호출하여 사용할 수 있다.
	

}
