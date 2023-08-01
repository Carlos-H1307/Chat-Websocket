create database chat_websoket;

create table if not exists user(
	username varchar(50) not null,
    password varchar(20) not null,
    primary key(username)
);