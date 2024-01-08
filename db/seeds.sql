USE employees_db;

INSERT INTO departments (name)
VALUES  ("Sales"),
        ("Engineering"),
        ("Finance"),
        ("Legal");

INSERT INTO roles (title, salary, department_id)
VALUES  ("Sales Lead", 100000, 1),
        ("Salesperson", 80000, 1),
        ("Lead Engineer", 150000, 2),
        ("Software Engineer", 120000, 2),
        ("Accountant", 125000, 3),
        ("Lawyer", 190000, 4);



INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ("Eric", "Cartman", 1, NULL),
        ("Randy", "Marsh", 3, NULL ),
        ("Stan", "Marsh", 4, 2),
        ("Kyle", "Broflovski", 5, NULL),
        ("Kenny", "McCormick", 2, 1),
        ("Wendy", "Testaburger", 6, NULL);

