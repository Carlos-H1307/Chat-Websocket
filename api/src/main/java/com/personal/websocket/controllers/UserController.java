package com.personal.websocket.controllers;

import com.personal.websocket.models.entities.UserEntity;
import com.personal.websocket.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

  @Autowired
  private UserService service;

  @CrossOrigin(origins = "*")
  @GetMapping
  public List<UserEntity> getAll() {
    return service.getAll();
  }
}
