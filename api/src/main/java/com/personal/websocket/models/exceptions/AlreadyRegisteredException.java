package com.personal.websocket.models.exceptions;

public class AlreadyRegisteredException extends RuntimeException {
  public AlreadyRegisteredException(String msg) {
    super(msg);
  }
}
