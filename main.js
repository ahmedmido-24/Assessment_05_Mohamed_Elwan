// Part 1: ERD Diagram
// answer: in file erd_diagram.tldr

//////////////////////////////////////////////////////////////////////////////////////
//Part2: Design a schema (Mapping) for the following ERD.

// -- Create User Table

// CREATE TABLE User (
//   id INT PRIMARY KEY AUTO_INCREMENT,
//   firstName VARCHAR(50),
//   lastName VARCHAR(50),
//   userName VARCHAR(50) UNIQUE,
//   email VARCHAR(100),
//   phone VARCHAR(20),
//   role VARCHAR(50),
//   password VARCHAR(255)
// );

// -- Create Product Table

// CREATE TABLE Product (
//   id INT PRIMARY KEY AUTO_INCREMENT,
//   name VARCHAR(100),
//   stock INT,
//   price DECIMAL(10, 2),
//   isDeleted BOOLEAN DEFAULT FALSE,
//   userID INT NOT NULL,
//   FOREIGN KEY (userID) REFERENCES User(id) ON DELETE CASCADE
// );
///////////////////////////////////////////////////////////////////////////////////////
/**
 * Part 3: (Using Node.js and MySQL) Answer the Questions below
 */

// Sql Steps

// -- 1. Create Suppliers Table
// CREATE TABLE Suppliers (
//     SupplierID INT PRIMARY KEY AUTO_INCREMENT,
//     SupplierName TEXT NOT NULL,
//     ContactNumber TEXT
// );

// -- 2. Create Products Table
// CREATE TABLE Products (
//     ProductID INT PRIMARY KEY AUTO_INCREMENT,
//     ProductName TEXT NOT NULL,
//     Price DECIMAL(10, 2),
//     StockQuantity INT,
//     SupplierID INT,
//     FOREIGN KEY (SupplierID) REFERENCES Suppliers(SupplierID)
// );

// -- 3. Create Sales Table
// CREATE TABLE Sales (
//     SaleID INT PRIMARY KEY AUTO_INCREMENT,
//     ProductID INT,
//     QuantitySold INT,
//     SaleDate DATE,
//     FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
// );

//----

// Node.js Code to interact with the database

// const mysql = require('mysql2/promise');

// const dbConfig = {
//     host: '3000',
//     user: 'root',
//     password: 'your_password',
//     database: 'retail_store'
// };

// async function manageStore() {
//     const connection = await mysql.createConnection(dbConfig);
//     console.log("Connected to the retail database.");

//     try {
//         const [supplierResult] = await connection.execute(
//             'INSERT INTO Suppliers (SupplierName, ContactNumber) VALUES (?, ?)',
//             ['Global Tech', '555-0199']
//         );
//         console.log("Supplier added with ID:", supplierResult.insertId);

//         const [products] = await connection.execute(`
//             SELECT p.ProductName, p.Price, s.SupplierName 
//             FROM Products p
//             JOIN Suppliers s ON p.SupplierID = s.SupplierID
//         `);
//         console.log("Product List:", products);

//     } catch (err) {
//         console.error("Error:", err);
//     } finally {
//         await connection.end();
//     }
// }

// manageStore();
///////////////////////////////////////////////////////////////////////////////////////
//(Using Node.js and MySQL) generate queries that perform the following tasks (8 Grades):

//1- Create the required tables for the retail store database based on the tables structure and relationships. (0.5 Grade)

// CREATE TABLE Suppliers (
//     SupplierID INT PRIMARY KEY AUTO_INCREMENT,
//     SupplierName VARCHAR(255) NOT NULL,
//     ContactNumber TEXT
// );

// CREATE TABLE Products (
//     ProductID INT PRIMARY KEY AUTO_INCREMENT,
//     ProductName TEXT,
//     Price DECIMAL(10, 2),
//     StockQuantity INT,
//     SupplierID INT,
//     FOREIGN KEY (SupplierID) REFERENCES Suppliers(SupplierID)
// );

// CREATE TABLE Sales (
//     SaleID INT PRIMARY KEY AUTO_INCREMENT,
//     ProductID INT,
//     QuantitySold INT,
//     SaleDate DATE,
//     FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
// );

//2- Add a column “Category” to the Products table. (0.5 Grade)
//ALTER TABLE Products ADD COLUMN Category VARCHAR(100);

//3- Remove the “Category” column from Products. (0.5 Grade)
//ALTER TABLE Products DROP COLUMN Category;

//4- Change “ContactNumber” column in Suppliers to VARCHAR (15). (0.5 Grade)
//ALTER TABLE Suppliers MODIFY COLUMN ContactNumber VARCHAR(15);

//5- Add a NOT NULL constraint to ProductName. (0.5 Grade)
//ALTER TABLE Products MODIFY COLUMN ProductName VARCHAR(255) NOT NULL;

/**
 * 6- Perform Basic Inserts: (0.5 Grade)
a. Add a supplier with the name 'FreshFoods' and contact number '01001234567'.
b. Insert the following three products, all provided by 'FreshFoods':
i. 'Milk' with a price of 15.00 and stock quantity of 50.
ii. 'Bread' with a price of 10.00 and stock quantity of 30.
iii. 'Eggs' with a price of 20.00 and stock quantity of 40.
c. Add a record for the sale of 2 units of 'Milk' made on '2025-05-20'.
 */

// INSERT INTO Suppliers (SupplierName, ContactNumber) VALUES ('FreshFoods', '01001234567');

// INSERT INTO Products (ProductName, Price, StockQuantity, SupplierID) VALUES 
// ('Milk', 15.00, 50, 1),
// ('Bread', 10.00, 30, 1),
// ('Eggs', 20.00, 40, 1);

// INSERT INTO Sales (ProductID, QuantitySold, SaleDate) VALUES (1, 2, '2025-05-20');

// 7- Update the price of 'Bread' to 25.00. (0.5 Grade)
//UPDATE Products SET Price = 25.00 WHERE ProductName = 'Bread';

//8- Delete the product 'Eggs'. (0.5 Grade)
//DELETE FROM Products WHERE ProductName = 'Eggs';

//9- Retrieve the total quantity sold for each product. (0.5 Grade)
// SELECT p.ProductName, SUM(s.QuantitySold) AS TotalSold
// FROM Products p
// LEFT JOIN Sales s ON p.ProductID = s.ProductID
// GROUP BY p.ProductID;

// 10-Get the product with the highest stock. (0.5 Grade)
//SELECT * FROM Products ORDER BY StockQuantity DESC LIMIT 1;

//11-Find suppliers with names starting with 'F'. (0.5 Grade)
//SELECT * FROM Suppliers WHERE SupplierName LIKE 'F%';

//12-Show all products that have never been sold. (0.5 Grade)
// SELECT p.ProductName 
// FROM Products p 
// LEFT JOIN Sales s ON p.ProductID = s.ProductID 
// WHERE s.SaleID IS NULL;

// 13-Get all sales along with product name and sale date. (0.5 Grade)
// SELECT s.SaleID, p.ProductName, s.SaleDate 
// FROM Sales s
// JOIN Products p ON s.ProductID = p.ProductID;

//14-Create a user “store_manager” and give them SELECT, INSERT, and UPDATE permissions on all tables. (0.5 Grade)
// CREATE USER 'store_manager' IDENTIFIED BY 'password123';
// GRANT SELECT, INSERT, UPDATE ON *.* TO 'store_manager';

//15-Revoke UPDATE permission from “store_manager”. (0.5 Grade)
// REVOKE UPDATE ON *.* FROM 'store_manager';

//16-Grant DELETE permission to “store_manager” only on the Sales table. (0.5 Grade)
//GRANT DELETE ON Sales TO 'store_manager';

// in node js
// const mysql = require('mysql2/promise');
// async function runQueries() {
//     const connection = await mysql.createConnection({
//         host: '3000',
//         user: 'root',
//         password: 'your_password',
//         database: 'retail_store'
//     });
//     try {
//         const [rows] = await connection.execute('SELECT * FROM Products ORDER BY StockQuantity DESC LIMIT 1');
//         console.log("Highest Stock Product:", rows[0]);
//         await connection.execute('UPDATE Products SET Price = 25.00 WHERE ProductName = ?', ['Bread']);
//         console.log("Price updated.");
//     } catch (err) {
//         console.error(err);
//     } finally {
//         await connection.end();
//     }
// }
// runQueries();