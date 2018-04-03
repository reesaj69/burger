-- Create the burgers_db

CREATE DATABASE burgers_db;

-- Use the database

USE burgers_db;

-- Created the table "schools" 

CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(200), NOT NULL,
  devoured BOOLEAN DEFAULT false
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);