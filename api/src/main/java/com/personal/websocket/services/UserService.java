package com.personal.websocket.services;

import com.personal.websocket.models.entities.UserEntity;
import com.personal.websocket.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

  @Autowired
  private UserRepository repository;

  public List<UserEntity> getAll() {
    return repository.findAll();
  }
}
