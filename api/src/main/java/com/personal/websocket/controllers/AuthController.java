package com.personal.websocket.controllers;

import com.personal.websocket.configs.security.TokenService;
import com.personal.websocket.models.dtos.LoginResponseDTO;
import com.personal.websocket.models.entities.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

  @Autowired
  private AuthenticationManager authenticationManager;

  @Autowired
  private TokenService tokenService;

  @CrossOrigin(origins = "*")
  @PostMapping
  public LoginResponseDTO login (@RequestBody UserEntity user) {
    var usernamePassword = new UsernamePasswordAuthenticationToken(user.getNome(), user.getPassword());
    var auth = this.authenticationManager.authenticate(usernamePassword);

    //???
    var token = tokenService.generateToken(UserEntity.fromSpringSecurityUser((org.springframework.security.core.userdetails.User) auth.getPrincipal()));
    return new LoginResponseDTO(token);
  }
}
