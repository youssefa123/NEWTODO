CREATE DATABASE NEWTODO;

-- Path: server/database.sql
CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    descriction VARCHAR(255) NOT NULL,
)