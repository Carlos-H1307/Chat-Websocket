create database chat_websoket;

create table if not exists user(
	user_id varchar(40) not null,
	username varchar(40) not null,
    password varchar(60) not null,

	primary key(user_id),
	unique(username)
);
select * from user