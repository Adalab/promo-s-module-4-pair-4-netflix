use mydb;
select * from rel_movies_users;

INSERT INTO rel_movies_users (fkUser, fkMovie) VALUES (1, 1), (1, 3), (2, 3);
