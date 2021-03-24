// Create Employee parent class
class Employee {

  // Create Employee's attributes
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // Method to return Employee's name
  getName() {
    return this.name;
  }

  // Method to return Employee's Id
  getId() {
    return this.id;
  }

  // Method to return Employee's email
  getEmail() {
    return this.email;
  }

  // Method to return Employee's role
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
