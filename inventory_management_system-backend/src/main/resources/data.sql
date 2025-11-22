-- Categories
INSERT INTO categories (id, name, description) VALUES (1, 'Electronics', 'Electronic items');
INSERT INTO categories (id, name, description) VALUES (2, 'Stationery', 'Office supplies');
INSERT INTO categories (id, name, description) VALUES (3, 'Groceries', 'Everyday essentials');

-- Suppliers
INSERT INTO suppliers (id, company_name, contact_person, email, phone, address)
VALUES (1, 'TechWorld', 'Ravi Sharma', 'contact@techworld.com', '9998887776', 'Delhi, India');
INSERT INTO suppliers (id, company_name, contact_person, email, phone, address)
VALUES (2, 'OfficeMart', 'Neha Kapoor', 'support@officemart.com', '8887776665', 'Mumbai, India');
INSERT INTO suppliers (id, company_name, contact_person, email, phone, address)
VALUES (3, 'OffceMart', 'Neha Kaoor', 'support@offcemart.com', '8887776865', 'Mumbai, India');

-- Products
INSERT INTO products (id, sku, name, category_id, supplier_id, unit_price, quantity_in_stock, reorder_level, reorder_quantity, description)
VALUES (1, 'ELEC-001', 'Wireless Mouse', 1, 1, 599.00, 50, 10, 20, 'Logitech Wireless Mouse');
INSERT INTO products (id, sku, name, category_id, supplier_id, unit_price, quantity_in_stock, reorder_level, reorder_quantity, description)
VALUES (2, 'STAT-001', 'A4 Paper Pack', 2, 2, 300.00, 20, 5, 10, '500 Sheets pack');
INSERT INTO products (id, sku, name, category_id, supplier_id, unit_price, quantity_in_stock, reorder_level, reorder_quantity, description)
VALUES (3, 'STAT-021', 'A4 Pap', 2, 2, 300.00, 20, 5, 10, '500 Sheets pack');

-- Transactions
INSERT INTO transactions (product_id, transaction_type, quantity, reference_number, notes, date)
VALUES (1, 'STOCK_IN', 50, 'REF001', 'Initial stock', NOW());
INSERT INTO transactions (product_id, transaction_type, quantity, reference_number, notes, date)
VALUES (2, 'STOCK_IN', 20, 'REF002', 'Initial stock', NOW());
----Clear existing data to avoid duplicate key errors
--DELETE FROM products;
--DELETE FROM categories;
--DELETE FROM suppliers;
--
---- Insert Categories
--INSERT INTO categories (id, name, description) VALUES (1, 'Electronics', 'Electronic items');
--INSERT INTO categories (id, name, description) VALUES (2, 'Groceries', 'Daily consumable items');
--INSERT INTO categories (id, name, description) VALUES (3, 'Stationery', 'Office and school supplies');
--
---- Insert Suppliers
--INSERT INTO suppliers (id, name, contact_name, phone, email, address)
--VALUES
--(1, 'Tech Supplies Co.', 'John Doe', '9876543210', 'contact@techsupplies.com', 'New Delhi, India'),
--(2, 'Daily Needs Ltd.', 'Amit Sharma', '9123456789', 'support@dailyneeds.com', 'Mumbai, India'),
--(3, 'OfficeMart Pvt Ltd.', 'Priya Verma', '9988776655', 'info@officemart.com', 'Bangalore, India');
--
---- Insert Products
--INSERT INTO products
--(id, sku, name, category_id, supplier_id, unit_price, quantity_in_stock, reorder_level, reorder_quantity, description)
--VALUES
--(1, 'ELEC001', 'Wireless Mouse', 1, 1, 750.00, 50, 10, 20, 'Ergonomic wireless mouse'),
--(2, 'ELEC002', 'Keyboard', 1, 1, 1200.00, 30, 5, 10, 'Mechanical keyboard'),
--(3, 'GROC001', 'Basmati Rice 5kg', 2, 2, 650.00, 100, 20, 50, 'Premium quality basmati rice'),
--(4, 'STAT001', 'A4 Notebook', 3, 3, 80.00, 200, 50, 100, '100-page ruled notebook');
