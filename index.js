// Imported modules
const inquirer = require("inquirer");
const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'rootroot',
        database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
);

//Function to start the application 
function onStart() {
    inquirer.prompt({
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
            "View all departments",
            "View all roles",
            "View all Employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Add a Manager",
            "Update an employee role",
            "Delete Departments | Roles | Employees",
            "View the total utilized budget of a department",
            "Exit"
        ],
    })
        .then((answer) => {
            switch (answer.action) {
                case "View all departments":
                    viewAllDepartments();
                    break;
                case "View all roles":
                    viewAllRoles();
                    break;
                case "View all Employees":
                    viewAllEmployees();
                    break;
                case "Add a department":
                    addDepartment();
                    break;
                case "Add a role":
                    addRole();
                    break;
                case "Add an employee":
                    addEmployee();
                    break;
                case "Update an employee role":
                    updateRole();
                    break;
                case "Exit":
                    connection.end();
                    console.log("Bye");
                    break;
            }
        })
}
function viewAllDepartments() {
    console.log("viewAllDepartments")
    db.query("SELECT * FROM departments", (err, res) => {
        if (err) throw err;
        console.table(res);
        onStart();
    })
}

function viewAllRoles() {
    console.log("viewAllRoles")
    db.query("SELECT * FROM roles", (err, res) => {
        if (err) throw err;
        console.table(res);
        onStart();
    })
}

function viewAllEmployees() {
    console.log("viewAllEmployees")
    db.query("SELECT * FROM employees", (err, res) => {
        if (err) throw err;
        console.table(res);
        onStart();
    })
}

function addDepartment () {
    inquirer
        .prompt ([
            {
                type: "input",
                name: "department_name",
                message: "Department Name:"
            }
        ]).then((answer) => {
            db.query(`INSERT INTO departments (name) VALUES ('${answer.department_name}')`, (err, res) => {
                if (err) throw err;
                console.table(res);
                onStart();
            })
        })
}

function addRole () {
    inquirer
        .prompt ([
            {
                type: "input",
                message: "Enter Title",
                name: "title"
            },
            {
                type: "input",
                message: "Enter Salary",
                name: "salary"
            },
            {
                type: "input",
                message: "Enter Department ID",
                name: "department_id"
            },
        ]).then((answer) => {
            db.query(`INSERT INTO roles (title, salary, department_id) VALUES ('${answer.title}', ${answer.salary}, ${answer.department_id})`, (err, res) => {
                if (err) throw err;
                console.table(res);
                onStart();
            })
        })
}
function addEmployee () {
    inquirer
        .prompt ([
            {
                type: "input",
                message: "Enter First Name",
                name: "first_name"
            },
            {
                type: "input",
                message: "Enter Last Name",
                name: "last_name"
            },
            {
                type: "input",
                message: "Enter Role ID",
                name: "role_id"
            },
            {
                type: "input",
                message: "Enter Manager ID",
                name: "manager_id"
            },
        ]).then((answer) => {
            db.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('${answer.first_name}', '${answer.last_name}', ${answer.role_id}, ${answer.manager_id})`, (err, res) => {
                if (err) throw err;
                console.table(res);
                onStart();
            })
        })
}
function updateRole () {
    inquirer
        .prompt ([
            {
                type: "input",
                message: "Enter Employee ID",
                name: "employee_id"
            },
            {
                type: "input",
                message: "Enter New Role ID",
                name: "role_id"
            },
        ]).then((answer) => {
            db.query(`UPDATE employees SET role_id = ${answer.role_id} WHERE id = ${answer.employee_id}`, (err, res) => {
                if (err) throw err;
                console.table(res);
                onStart();
            })
        })
}

onStart()