const inquirer = require("inquirer");

function newChoice() {
    inquirer
      .prompt([
        {
          type: "list",
          message: `Would you like to add another employee or end the application? Press enter to submit your choice.`,
          name: "employeeList",
          choices: ["Engineer", "Intern", "All done!"],
        },
      ])
      .then((data) => {
        console.log(data);
      });
      console.log(data);
}

module.exports = newChoice();