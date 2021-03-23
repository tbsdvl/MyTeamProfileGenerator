const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");

inquirer.prompt([
    {
        type: "input",
        message: "Enter Team Manager's Name: ",
        name: "managerName",
    },
    {
        type: "input",
        message: "Enter Team Manager's ID: ",
        name: "managerID",
    },
    {
        type: "input",
        message: "Enter Team Manager's Email: ",
        name: "managerEmail",
    },
    {
        type: "input",
        message: "Enter Team Manager's Office Number: ",
        name: "managerOffice",
    }
])
.then((data) => {
    console.log(data);
})