const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const app = require("./app");

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
    console.log(data);

    let m = new Manager(data.name, data.id, data.email, data.officeNumber);

    let mName = `<p class="cardhead">${m.name}</p>`;
    let mRole = `<p>Team Manager</p>`;
    let mID = `<p>${m.id}</p>`;
    let mEmail = `<p>Email: <a href="mailto:${m.email}">${m.email}</a></p>`;
    let mOffice = `<p>Office Number: ${m.officeNumber}</p>`;
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

    app.newEmployee();
  });
