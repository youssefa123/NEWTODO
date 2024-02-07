CREATE DATABASE NEWTODO;

-- Path: server/database.sql
CREATE TABLE TDOD(
    todo_id SERIAL PRIMARY KEY,
    descriction VARCHAR(255) NOT NULL,
)