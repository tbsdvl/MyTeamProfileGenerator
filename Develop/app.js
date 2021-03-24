const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
let choice = "";

function generateHTML() {
  const html =
    `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="./style.css">
          <title>My Team Profile Generator</title>
      </head>
      <body>
          <header>
              <h1>My Team Profile Generator</h1>
          </header>
        <main>
          <section>
            <div id="teamcards">` + mDiv +
    enDiv + inDiv +
    `</div>
          </section>
        </main>
      </body>
      <script src="index.js"></script>
      </html>`;
  return html;
}

let newChoice = () => {
  return new Promise((resolve) => {
    inquirer
      .prompt([
        {
          type: "list",
          message: `Would you like to add another employee or end the application? Press enter to submit your choice.`,
          name: "employeeChoice",
          choices: ["Engineer", "Intern", "Generate Profiles!"],
        },
      ])
      .then((data) => {
        console.log(data.employeeChoice);
        resolve((choice = data.employeeChoice));
      });
  });
};

let newEmployee = async () => {
  await newChoice();
  if (choice === "Engineer") {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Enter Engineer's Name: ",
          name: "name",
        },
        {
          type: "input",
          message: "Enter Engineer's Employee ID: ",
          name: "id",
        },
        {
          type: "input",
          message: "Enter Engineer's Email: ",
          name: "email",
        },
        {
          type: "input",
          message: "Enter Engineer's GitHub username: ",
          name: "github",
        },
      ])
      .then((data) => {
        console.log(data);

        let en = new Engineer(data.name, data.id, data.email, data.github);

        let enName = `<p class="cardhead">${en.name}</p>`;
        let enRole = `<p>Engineer</p>`;
        let enID = `<p>${en.id}</p>`;
        let enEmail = `<p>Email: <a href="mailto:${en.email}">${en.email}</a></p>`;
        let enGit = `<p>GitHub: <a href="https://github.com/${en.github}">${en.github}</a></p>`;
        globalThis.enDiv =
          `<div class="allteamcard">` +
          enName +
          `<div class="card">` +
          enRole +
          enID +
          enEmail +
          enGit +
          `</div>` +
          `</div>`;

        newEmployee();
      });
  } else if (choice === "Intern") {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Enter Intern's Name: ",
          name: "name",
        },
        {
          type: "input",
          message: "Enter Intern's Employee ID: ",
          name: "id",
        },
        {
          type: "input",
          message: "Enter Intern's Email: ",
          name: "email",
        },
        {
          type: "input",
          message: "Enter Intern's school: ",
          name: "school",
        },
      ])
      .then((data) => {
        console.log(data);

        const i = new Intern(data.name, data.id, data.email, data.school);

        let inName = `<p class="cardhead">${i.name}</p>`;
        let inRole = `<p>Intern</p>`;
        let inID = `<p>${i.id}</p>`;
        let inEmail = `<p><a href="mailto:${i.email}">${i.email}</a></p>`;
        let inSchool = `<p>${i.school}</p>`;
        globalThis.inDiv =
          `<div class="allteamcard">` +
          inName +
          `<div class="card">` +
          inRole +
          inID +
          inEmail +
          inSchool +
          `</div>` +
          `</div>`;

        newEmployee();
      });
  } else if (choice === "Generate Profiles!") {
    console.log("Generating team profile...");
    return fs.writeFile("./dist/index.html", generateHTML(), (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  }
};

module.exports = {
  generateHTML,
  newChoice,
  newEmployee,
};
