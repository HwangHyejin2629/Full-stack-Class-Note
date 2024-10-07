package com.korea.user.persistence;

import org.springframework.data.jpa.repository.JpaRepository;

import com.korea.user.model.UserEntity;

public interface UserRepsoitory extends JpaRepository<UserEntity, Integer>{

	UserEntity findByEmail(String email);
}
