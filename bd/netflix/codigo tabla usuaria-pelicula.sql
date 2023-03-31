use mydb;
select * from rel_movies_users;

INSERT INTO rel_movies_users (fkUser, fkMovie) VALUES (1, 1), (1, 3), (2, 3);


-- VER QUÉ COLUMNAS COINCIDEN EN LA TABLA
select actors.name, movies.title
from actors INNER JOIN rel_movies_actors ON actors.idactors = rel_movies_actors.fkActor
INNER JOIN movies ON movies.idmovies = rel_movies_actors.fkMovie;

