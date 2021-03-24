// Importing necessary classes and modules
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const app = require("./app");

// Prompts the user to input credentials for Team Manager
inquirer
  .prompt([
    {
      type: "input",
      message: "Enter Team Manager's Name: ",
      name: "name",
    },
    {
      type: "input",
      message: "Enter Team Manager's ID: ",
      name: "id",
    },
    {
      type: "input",
      message: "Enter Team Manager's Email: ",
      name: "email",
    },
    {
      type: "input",
      message: "Enter Team Manager's Office Number: ",
      name: "officeNumber",
    },
  ])
  .then((data) => {
    // Presents data in console
    console.log(data);

    // Initializes a new Manager object with essential credentials from data
    let m = new Manager(data.name, data.id, data.email, data.officeNumber);

    // Creating variables to insert into a new HTML <div> element
    let mName = `<p class="cardhead">${m.name}</p>`;
    let mRole = `<p>Team Manager</p>`;
    let mID = `<p>${m.id}</p>`;
    let mEmail = `<p>Email: <a href="mailto:${m.email}">${m.email}</a></p>`;
    let mOffice = `<p>Office Number: ${m.officeNumber}</p>`;

    // New global <div> variable to append to generateHTML once program finishes
    globalThis.mDiv =
      `<div class="allteamcard">` +
      mName +
      `<div class="card">` +
      mRole +
      mID +
      mEmail +
      mOffice +
      `</div>` +
      `</div>`;

    // Prompts user to begin adding Engineers and Interns
    app.newEmployee();
  });
