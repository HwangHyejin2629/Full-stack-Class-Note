package com.korea.user.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.korea.user.dto.ResponseDTO;
import com.korea.user.dto.UserDTO;
import com.korea.user.model.UserEntity;
import com.korea.user.security.TokenProvider;
import com.korea.user.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private TokenProvider tokenProvider;//토큰을 발급해줌
	
	//id중복조회
	@GetMapping("idCheck")
	public ResponseEntity<?> isIdDuplicate(@RequestBody UserDTO dto){
		boolean check = userService.isIdDuplicate(dto.getUserId());
		ResponseDTO<Boolean> response = ResponseDTO.<Boolean>builder().value(check).build();
		return ResponseEntity.ok().body(response);
	}
	
	@PostMapping("signup")
	//id
	//pwd
	//name
	//email
	public ResponseEntity<?> sginup(@RequestBody UserDTO dto){
		List<UserDTO> dtos = userService.insert(dto);
		ResponseDTO<UserDTO> response = ResponseDTO.<UserDTO>builder().data(dtos).build();
		return ResponseEntity.ok().body(response);
	}
	
	//모든 유저 조회
	@GetMapping("allUsers")
	public ResponseEntity<?> allUsers(){
		List<UserDTO> dtos = userService.allUsers();
		ResponseDTO<UserDTO> response = ResponseDTO.<UserDTO>builder().data(dtos).build();
		return ResponseEntity.ok().body(response);
	}
	
	//로그인
	@PostMapping("/signin")
	//아이디와 비밀번호를 입력받는다.
	public ResponseEntity<?> authenticate(@RequestBody UserDTO dto){
		//id와 비밀번호를 통해 유저를 반환받는다.
		UserEntity user = userService.getByCredential(dto.getUserId(), dto.getPwd());
		
		//조회가 됐다면
		if(user != null) {
			//토큰을 발급해준다.
			final String token = tokenProvider.create(user);
			
			final UserDTO responseUserDTO = UserDTO.builder()
												.userId(user.getUserId())
												.idx(user.getIdx())
												.name(user.getName())
												.email(user.getEmail())
												.token(token)
												.build();
			return ResponseEntity.ok().body(responseUserDTO);
		} else {
			ResponseDTO responseDTO = ResponseDTO.builder().error("Login failed").build();
			return ResponseEntity.badRequest().body(responseDTO);
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
