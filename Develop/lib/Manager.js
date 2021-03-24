// Import Employee parent class
const Employee = require("./Employee");

// Create Manager sublcass
class Manager extends Employee {

    // Adding Manager's attributes
    constructor(name, id, email, officeNumber) {
        super(name, id, email, officeNumber);
        this.officeNumber = officeNumber;
    }

    // Method to return Manager's role
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;