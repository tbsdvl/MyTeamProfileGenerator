// Importing necessary classes and modules
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
let choice = "";

// Generating our HTML page, will be the final function to run
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

// Prompts the user to choose the next team profile to generate
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

// Prompts the user to fill out next team profile credentials
// Will wait for newChoice() to resolve, then it will give the user some prompts
// Continue adding Team Profiles until the user chooses "Generate Profiles!"
let newEmployee = async () => {
  await newChoice();

  // User chooses an engineer
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
        // Show engineer data in the console
        console.log(data);

        // Initialize a new Engineer object with essential credentials from data
        let en = new Engineer(data.name, data.id, data.email, data.github);

        let enName = `<p class="cardhead">${en.name}</p>`;
        let enRole = `<p>Engineer</p>`;
        let enID = `<p>${en.id}</p>`;
        let enEmail = `<p>Email: <a href="mailto:${en.email}">${en.email}</a></p>`;
        let enGit = `<p>GitHub: <a href="https://github.com/${en.github}">${en.github}</a></p>`;
        
        // New global <div> variable to append to our generateHTML() function
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

        // Returns user to newChoice() to choose another employee or finish program
        newEmployee();
      });

      // User chooses an intern
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
        // Shows Intern data in the console
        console.log(data);

        // Initializes a new Intern object with essential credentials
        const i = new Intern(data.name, data.id, data.email, data.school);

        let inName = `<p class="cardhead">${i.name}</p>`;
        let inRole = `<p>Intern</p>`;
        let inID = `<p>${i.id}</p>`;
        let inEmail = `<p><a href="mailto:${i.email}">${i.email}</a></p>`;
        let inSchool = `<p>${i.school}</p>`;
        
        // New global <div> variable to insert into our generateHTML() function
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
        
        // Returns user to newChoice() to choose another employee or finish program
        newEmployee();
      });

    // The User is finished generating team profiles
  } else if (choice === "Generate Profiles!") {

    // Inform the user the profiles are generating
    console.log("Generating team profile...");
    
    // Write the user's input information into a newly generated HTML document with Team Profile cards
    return fs.writeFile("./dist/index.html", generateHTML(), (err) =>
    
    // If there's an error, show in console, otherwise log "Success!"
      err ? console.log(err) : console.log("Success!")
    );
  }
};

// Export to index.js
module.exports = {
  generateHTML,
  newChoice,
  newEmployee,
};
