USE employee_db;

INSERT INTO department (name)
VALUES  ("Sales"),
        ("Engineering"),
        ("Finance"),
        ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES  ("Sales Lead", 100000, 1),
        ("Salesperson", 80000, 1),
        ("Lead Engineer", 150000, 2),
        ("Software Engineer", 120000, 2),
        ("Accountant", 125000, 3),
        ("Lawyer", 190000, 4);



INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Eric", "Cartman", 1, 1),
        ("Stan", "Marsh", 2, 3),
        ("Kyle", "Broflovski", 1, 3),
        ("Kenny", "McCormick", 1, 3),
        ("Randy", "Marsh", 3, 5),
        ("Wendy", "Testaburger", 4, 3);