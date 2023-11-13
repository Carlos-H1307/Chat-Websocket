package com.personal.websocket.models.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Entity
public class UserEntity implements UserDetails {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  @NotBlank
  @Column(name="user_name", unique=true)
  private String nome;

  @Email
  @NotBlank
  @Column(name="user_email", unique=true)
  private String email;

  @NotBlank
  @Column(name = "user_password")
  private String senha;

  public UserEntity() {}

  public UserEntity(Long id, String nome, String email, String senha) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getNome() {
    return nome;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getSenha() {
    return senha;
  }

  public void setSenha(String senha) {
    this.senha = senha;
  }

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    return List.of(new SimpleGrantedAuthority("USUARIO"));
  }

  @Override
  public String getPassword() {
    return senha;
  }

  @Override
  public String getUsername() {
    return nome;
  }

  @Override
  public boolean isAccountNonExpired() {
    return true;
  }

  @Override
  public boolean isAccountNonLocked() {
    return true;
  }

  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }

  @Override
  public boolean isEnabled() {
    return true;
  }

  public static UserEntity fromSpringSecurityUser(org.springframework.security.core.userdetails.User springUser) {
    UserEntity userEntity = new UserEntity();
    // Atribua os campos necessários usando as informações de springUser
    userEntity.setNome(springUser.getUsername());
    // Atribua outros campos, se necessário

    return userEntity;
  }
}
