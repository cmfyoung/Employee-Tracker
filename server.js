const inquirer = require("inquirer");
const mysql = require("mysql2");

function onStart() {
    inquirer.prompt ({
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
            "View all departments",
            "View all roles",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Add a Manager",
            "Update an employee role",
            "View Employees by Manager",
            "View Employees by Department", 
            "Delete Departments | Roles | Employees",
            "View the total utilized budget of a department", 
            "Exit"
        ],
    })
    .then ((answer) => {
        switch (answer.action) {
            case "View all departments":
                viewAllDepartments();
                break;
            case  "View all roles":
                viewAllRoles();
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
            case "Add a Manager":
                addManger();
                break;
            case "Update an employee role":
                updateRole();
                break;
            case "View Employees by Manager":
                viewEmployeesByManager();
                break;
            case "View Employees by Department":
                viewEmployeesByDepartment();
                break; 
            case "Delete Departments | Roles | Employees":
                deleteDRE();
                break;
            case "View the total utilized budget of a department": 
                viewTotalBudge();
                break;
            case "Exit":
                connection.end();
                console.log("Bye");
                break;
        }
    })
}