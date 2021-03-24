// Import Employee parent class
const Employee = require("./Employee");

// Create Engineer subclass
class Engineer extends Employee {
    
    // Engineer's attributes
    constructor(name, id, email, github) {
        super(name, id, email, github);
        this.github = github;
    }

    // Method to return Engineer's github attribute
    getGithub() {
        return this.github;
    }

    // Method to return Engineer's role
    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;