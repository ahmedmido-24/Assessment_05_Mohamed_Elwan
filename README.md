# Assignment 5 – Database Design & MySQL

---

## Overview

This assignment focuses on **database design**, **ERD modeling**, **schema mapping**, and **MySQL database operations** using **Node.js and MySQL**. The tasks demonstrate understanding of relational databases, relationships, and SQL operations.

---

## Part 1: ERD Diagram – Musicana Records (1 Grade)

This part involves designing an **Entity Relationship Diagram (ERD)** for the Musicana records database.

### ERD Description

* Musicians are stored with ID, name, address (street, city), and phone number.
* Instruments have a unique name and a musical key.
* Albums have a unique title, album identifier, and copyright date.
* Songs have a unique title and an author.
* A musician can play multiple instruments, and instruments can be played by multiple musicians.
* Each album contains multiple songs, and each song belongs to only one album.
* Songs are performed by one or more musicians.
* Each album has exactly one producer.
* A producer can produce multiple albums.

---

## Part 2: Schema Design (Mapping) (1 Grade)

This part focuses on converting the ERD into a **relational database schema**.
The schema defines tables, primary keys, foreign keys, and relationships based on the Musicana ERD.

The schema design is created using a database design tool.

---

## Part 3: Retail Store Database – Node.js & MySQL

This part covers building and querying a **retail store database** using **MySQL**, based on the given scenario.

### Database Tables

* **Products**: Stores product details such as name, price, stock quantity, and supplier reference.
* **Suppliers**: Stores supplier information and contact details.
* **Sales**: Stores sales records including product sold, quantity, and sale date.

---

## SQL Tasks

The following operations are implemented using MySQL queries:

* Creating database tables and relationships
* Modifying table structures (add, remove, update columns)
* Applying constraints
* Inserting sample data
* Updating and deleting records
* Writing queries for data analysis and reporting
* Managing database users and permissions

---

## Tools & Technologies

* Node.js
* MySQL
* SQL
* ERD Design Tool

---

## Author

Ahmed Mokhtar
GitHub: [https://github.com/ahmedmido-24](https://github.com/ahmedmido-24)
