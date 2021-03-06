// Import Employee parent class
const Employee = require("../lib/Employee");

// Initialize a new Employee object
describe("Employee", () => {
  describe("Initialization", () => {
    test("Can initialize an employee object", () => {
      const e = new Employee();
      expect(typeof e).toBe("object");
    });

    // Test Employee name attribute
    test("Can set name attribute with constructor", () => {
      const name = "Employee Name";
      const e = new Employee(name);
      expect(typeof e.name).toBe(typeof name);
    });

    // Test Employee id attribute
    test("Can set id attribute with constructor", () => {
      const id = 77;
      const e = new Employee("Employee Name", id);
      expect(typeof e.id).toBe(typeof id);
    });

    // Test employee email attribute
    test("Can set email attribute with constructor", () => {
      const email = "email@email.com";
      const e = new Employee("Employee Name", 77, email);
      expect(typeof e.email).toBe(typeof email);
    });
  });
});

describe("getters", () => {
  // Return Employee's name
  test("Can get name via getName() method", () => {
    const name = "Employee Name";
    const e = new Employee(name, 77, "email@email.com");
    expect(e.getName()).toBe(name);
  });

  // Return Employee's id
  test("Can get id via getId() method", () => {
    const id = 77;
    const e = new Employee(name, 77, "email@email.com");
    expect(e.getId()).toBe(id);
  });

  // Return Employee's email
  test("Can get email via getEmail() method", () => {
    const email = "email@email.com";
    const e = new Employee(name, 77, "email@email.com");
    expect(e.getEmail()).toBe(email);
  });

  // Return Employee's role
  test("Can get role via getRole() method", () => {
    const role = "Employee";
    const e = new Employee(name, 77, "email@email.com");
    expect(e.getRole()).toBe(role);
  });
});
