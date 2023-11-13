package com.personal.websocket.configs.security;

import com.personal.websocket.models.entities.UserEntity;
import com.personal.websocket.repositories.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Transactional
public class AuthService implements UserDetailsService {

  @Autowired
  UserRepository repository;

  @Override
  public UserDetails loadUserByUsername(String nome) throws UsernameNotFoundException {
    Optional<UserEntity> usuario = repository.findByNome(nome);
    return new User(usuario.get().getUsername(), usuario.get().getPassword(), true, true, true, true, usuario.get().getAuthorities());
  }

}