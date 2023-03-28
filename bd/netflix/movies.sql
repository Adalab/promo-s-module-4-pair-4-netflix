SELECT * FROM pair.movies;

SELECT title, genre, year FROM movies
WHERE year < 1995;

SELECT title FROM movies 
WHERE category = "Top 10";

UPDATE movies SET year = 1997
WHERE id = 3;

