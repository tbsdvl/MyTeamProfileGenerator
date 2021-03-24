// Import Manager subclass
const Manager = require("../lib/Manager");

// Initialize Manager object
describe("Manager", () => {
  describe("Initialize", () => {
    test("Can initialize a Manager object", () => {
        const m = new Manager();

        expect(typeof m).toBe("object");
    });

    // Test Manager officeNumber attribute
    test("Can add officeNumber attribute to Manager object", () => {
        const officeNumber = 1;

        const m = new Manager("Employee Name", 77, "email@email.com", officeNumber);

        expect(typeof m.officeNumber).toBe(typeof officeNumber);
    });
  });

  // Return Manager's role
  describe("Can get the role of Manager with getRole() method", () => {
      const role = "Manager";

      const m = new Manager(name, 77, "email@email.com", 1);

      expect(m.getRole()).toBe(role);
  });
});
