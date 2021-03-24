const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");

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

const newChoice = () => {
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
        return data.employeeChoice;
      });
}

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

    fs.writeFile("index.html", generateHTML(), (err) =>
      err ? console.log(err) : console.log("Success!")
    );

    const m = new Manager(data.name, data.id, data.email, data.officeNumber);
    newChoice();
  });
