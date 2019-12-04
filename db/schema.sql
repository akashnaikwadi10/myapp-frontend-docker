create table product(id integer primary key auto_increment,title varchar(10),description varchar(100),price float);
create table category(id integer primary key auto_increment,title varchar(10),description varchar(100));
create table user(id integer primary key auto_increment,name varchar(10),phone  varchar(15));

insert into product values(1,'bat','play',400);
insert into product values(2,'acs','psdflay',400);
insert into product values(3,'basd','plasdy',400);