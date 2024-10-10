package com.korea.product.model;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor 
@AllArgsConstructor

@Entity
@Table(name="product") //Database에 product 테이블과 연결해주는 역할
public class ProductEntity {  //jpa 에서는 ProductEntity 라는 이름으로 사용됨
	@Id
	//자동생성
	@GeneratedValue(strategy=GenerationType.AUTO) //시퀀스 (고유번호)
	private int id; //상품아이디 - 시퀀스로 고유번호 지정
	
	//이 3개만 body에 넘기면 create됨
	private String name; //상품이름
	private int inventory; //재고
	private int price; //가격
	
	//자동생성
	@CreationTimestamp  //Insert쿼리가 발생할 때 시간 값을 적용시켜준다.
	//LocalDateTime : 시간 날짜를 저장 할 수 있는 클래스
	private LocalDateTime insertDate; //등록날짜 
	
	//자동생성
	@UpdateTimestamp  //Update쿼리가 발생했을때 시간 값을 적용시켜준다.
	//LocalDateTime.now();  현재 시간을 저장
	private LocalDateTime updateDate=LocalDateTime.now(); //수정날짜 : 처음에는 등록날짜로 지정
}
