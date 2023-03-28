SELECT * FROM pair.actors;

SELECT name, lastname FROM actors
WHERE birthday BETWEEN 1950 AND 1960;
-- no se puede hacer porq tiene un formato de fecha (date) incompatible conel formato de  between.

SELECT name, lastname, country FROM actors
WHERE country LIKE 'Estados%';