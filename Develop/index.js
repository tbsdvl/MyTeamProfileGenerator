const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
let choice = "";

function generateHTML() {
  const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team Profile Generator</title>
    </head>
    <body>
        <header>
            <h1>My Team Profile Generator</h1>
        </header>
      <main>
        <section>
          <div id="teamcards">
          </div>
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
          choices: ["Engineer", "Intern", "All done!"],
        },
      ])
      .then((data) => {
        console.log(data.employeeChoice);
        resolve(choice = data.employeeChoice);
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

        const en = new Engineer(data.name, data.id, data.email, data.github);
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
        newEmployee();
      });
  } else if (choice === "All done!") {
    console.log("Generating team profile...");
    return fs.writeFile("index.html", generateHTML(), (err) =>
    err ? console.log(err) : console.log("Success!")
  );
  }
};
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

    const m = new Manager(data.name, data.id, data.email, data.officeNumber);

    newEmployee();
    });
