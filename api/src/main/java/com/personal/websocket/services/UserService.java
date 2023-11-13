package com.personal.websocket.services;

import com.personal.websocket.models.entities.UserEntity;
import com.personal.websocket.models.exceptions.AlreadyRegisteredException;
import com.personal.websocket.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

  @Autowired
  private UserRepository repository;

  public List<UserEntity> getAll() {
    return repository.findAll();
  }

  public String register(UserEntity entity) {
      Optional<UserEntity> verifyNome = repository.findByNome(entity.getNome());
      Optional<UserEntity> verifyEmail = repository.findByEmail(entity.getEmail());

      if(verifyNome.isPresent() || verifyEmail.isPresent()) {
        throw new AlreadyRegisteredException("[ERRO] Usuário já cadastrado.");
      }

      entity.setSenha(new BCryptPasswordEncoder().encode(entity.getSenha()));
      repository.save(entity);
      return "Usuário cadastrado com sucesso";
  }
}
