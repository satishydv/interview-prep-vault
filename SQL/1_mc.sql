-- SELECT ALL records from the employees table
SELECT * FROM employees;

-- SELECT specific columns from the employees table
SELECT name, salary FROM employees;

-- find employees with salary greater than 50000
SELECT * FROM employees WHERE salary > 50000;

SELECT * FROM  employees WHERE department = 'Sales';

-- ORDER employees by salary in descending order
SELECT * FROM employee ORDER BY salary DESC;

-- COUNT the number of employees
SELECT COUNT(*) FROM employees;

-- Calculate the average salary of employees
SELECT AVG(salary) AS average_salary FROM employees;

SELECT MAX(salary), MIN(salary) FROM employees;

SELECT department, COUNT(*) FROM employees GROUP BY department;

SELECT department, COUNT(*) AS employee_count FROM employees GROUP BY department HAVING COUNT(*) > 5;

SELECT email, COUNT(*) AS email_count FROM employees GROUP BY email HAVING COUNT(*) > 1;

-- Delete duplicate users based on email
DELETE FROM users
WHERE id NOT IN (SELECT MIN(id) FROM users GROUP BY email);

-- Inner Join example
SELECT users.name, orders.amount FROM users
INNER JOIN orders ON users.id = orders.user_id;

-- Left Join example
SELECT users.name, orders.amount FROM users
LEFT JOIN orders ON users.id = orders.user_id;

-- find records present in table A but not in table B
SELECT a.* FROM tableA a
LEFT JOIN tableB b ON a.id = b.id
WHERE b.id IS NULL;

--find 2nd highest salary from employees table
SELECT MAX(salary) AS second_highest_salary
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);

--find nth highest salary from employees table
SELECT DISTINCT salary FROM employees 
ORDER BY salary DESC
LIMIT 1 OFFSET n-1; -- replace n with the desired rank

-- fetch top 5 highest paid employees
SELECT * FROM employees
ORDER BY salary DESC
LIMIT 5;

-- find employees whose name starts with 'A'
SELECT * FROM employees
WHERE name LIKE 'A%';

-- find employees whose name ends with 'son'
SELECT * FROM employees
WHERE name LIKE '%son';

-- find employees whose name contains 'an'
SELECT * FROM employees
WHERE name LIKE '%an%';

-- Update salary of employee with id 3 by increasing it by 10%
UPDATE employees
SET salary = salary * 1.10
where id = 3;




