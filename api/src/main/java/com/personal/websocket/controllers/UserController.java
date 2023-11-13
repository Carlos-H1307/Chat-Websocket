package com.personal.websocket.controllers;

import com.personal.websocket.models.entities.UserEntity;
import com.personal.websocket.models.exceptions.AlreadyRegisteredException;
import com.personal.websocket.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api")
public class UserController {

  @Autowired
  private UserService service;

  @GetMapping("/user")
  public List<UserEntity> getAll() {
    return service.getAll();
  }

  @PostMapping("/register")
  public ResponseEntity<String> register(@RequestBody UserEntity entity) {
    try{
      String response = service.register(entity);
      return ResponseEntity.status(HttpStatus.CREATED).body(response);

    } catch(AlreadyRegisteredException ex) {
      return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(ex.getMessage());
    }
  }
}
