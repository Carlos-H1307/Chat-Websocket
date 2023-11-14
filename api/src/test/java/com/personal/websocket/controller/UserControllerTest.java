package com.personal.websocket.controller;

import com.personal.websocket.controllers.UserController;
import com.personal.websocket.models.entities.UserEntity;
import com.personal.websocket.services.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

@SpringBootTest
@AutoConfigureMockMvc
public class UserControllerTest {

  public static final long ID = 1L;
  public static final String NOME = "Teste";
  public static final String SENHA = "$2a$12$.R6GxhuuSh7OA83h5b98gOgEOQhiVad1ns8AAOhIMlBs.G8cMxrZG";
  public static final String EMAIL = "teste@gmail.com";

  @InjectMocks
  private UserController controller;

  @MockBean
  private UserService service;

  @Autowired
  private MockMvc mockMvc;

  private UserEntity userEntity;

  @BeforeEach
  void setUp() {
    MockitoAnnotations.openMocks(this);
    startUser();
  }

  @Test
  void whenGetAllThenReturnListOfUsers() throws Exception{
    when(service.getAll()).thenReturn(List.of(userEntity));

    mockMvc.perform(MockMvcRequestBuilders.get("/api/user"))
            .andExpect(MockMvcResultMatchers.status().isOk())
            .andExpect(MockMvcResultMatchers.jsonPath("$[0].id").value(ID))
            .andExpect(MockMvcResultMatchers.jsonPath("$[0].nome").value(NOME))
            .andExpect(MockMvcResultMatchers.jsonPath("$[0].senha").value(SENHA))
            .andExpect(MockMvcResultMatchers.jsonPath("$[0].email").value(EMAIL))
            .andDo(MockMvcResultHandlers.print());
  }

  @Test
  void whenRegisterThenCreatesANewUser() throws Exception {
    when(service.register(any(UserEntity.class))).thenReturn(anyString());

    mockMvc.perform(MockMvcRequestBuilders
              .post("/api/register")
              .contentType(MediaType.APPLICATION_JSON)
            //não consegui usar a variável userEntity dentro do método content()
              .content("{ \"nome\": \"Teste\", \"senha\": \"$2a$12$.R6GxhuuSh7OA83h5b98gOgEOQhiVad1ns8AAOhIMlBs.G8cMxrZG\", \"email\": \"teste@hotmail.com\"}")
            )
            .andExpect(MockMvcResultMatchers.status().isCreated())
            .andDo(MockMvcResultHandlers.print());
  }

  private void startUser() {
    userEntity = new UserEntity(ID, NOME, EMAIL, SENHA);
  }
}
