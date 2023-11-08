-- Database: socket

--DROP DATABASE IF EXISTS socket;

--CREATE DATABASE socket;
drop table if exists user_contact;
drop table if exists user_info;
drop table if exists user_login;

CREATE TABLE user_login(
  email VARCHAR(50) PRIMARY KEY NOT NULL,
  hash_password VARCHAR(50) NOT NULL
);

CREATE TABLE user_info(
  user_id VARCHAR(50) PRIMARY KEY NOT NULL,
  email VARCHAR(50) NOT NULL,
  username VARCHAR(20) NOT NULL,
  bio VARCHAR(128),
  FOREIGN KEY(email) REFERENCES user_login(email)
);

CREATE TABLE user_contact(
  user_id VARCHAR(50) NOT NULL,
  contact_id VARCHAR(50) NOT NULL,
  private_message_id VARCHAR(50) NOT NULL,
  PRIMARY KEY(user_id, contact_id),
  FOREIGN KEY(user_id) REFERENCES user_info(user_id),
  FOREIGN KEY(contact_id) REFERENCES user_info(user_id)
);

CREATE TABLE private_message(
  private_message_id VARCHAR(50) NOT NULL,
  message_timestamp timestamp NOT NULL,           
  message_content VARCHAR(250) NOT NULL,
  from_user_id VARCHAR(50) NOT NULL,
  PRIMARY KEY(private_message_id, message_timestamp),
  --FOREIGN KEY(private_message_id) REFERENCES user_contact(private_message_id),
  FOREIGN KEY(from_user_id) REFERENCES user_info(user_id)
);

CREATE TABLE group_info(
  group_id VARCHAR(50) PRIMARY KEY NOT NULL,
  groupname VARCHAR(50) NOT NULL
);

CREATE TABLE group_message(
  group_id VARCHAR(50) NOT NULL,
  message_timestamp timestamp NOT NULL, 
  message_content VARCHAR(250) NOT NULL,
  from_user_id VARCHAR(50) NOT NULL,
  PRIMARY KEY(group_id, message_timestamp),
  FOREIGN KEY(group_id) REFERENCES group_info(group_id),
  FOREIGN KEY(from_user_id) REFERENCES user_info(user_id)
);

CREATE TABLE group_user(
  group_id VARCHAR(50) NOT NULL,
  user_id VARCHAR(50) NOT NULL,
  PRIMARY KEY(group_id, user_id),
  FOREIGN KEY(group_id) REFERENCES group_info(group_id),
  FOREIGN KEY(group_id) REFERENCES user_info(user_id)

);
