SELECT * FROM pair.users;

SELECT user FROM users
WHERE plan_details = 'Standard';

DELETE FROM users
WHERE name LIKE 'M%';