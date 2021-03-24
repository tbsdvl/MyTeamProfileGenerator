// Import Engineer subclass
const Engineer = require("../lib/Engineer");

// Initialize Engineer object
describe("Engineer", () => {
    describe("Initialize", () => {
        test("Can initialize an engineer object", () => {
            const en = new Engineer();

            expect(typeof en).toBe("object");
        })

        // Test Engineer's github attribute
        test("Can add github attribute to engineer object", () => {
            const github = "tbsdvl"

            const en = new Engineer("Employee Name", 77, "email@email.com", github);

            expect(typeof en.github).toBe(typeof github);
        })
    });

    // Return Engineer's github username
    describe("Can get the github of an Engineer with the getGithub() method", () => {
        const github = "tbsdvl";

        const en = new Engineer("Employee Name", 77, "email@email.com", github);

        expect(en.getGithub()).toBe(github);
    })

    // Return Engineer's role
    describe("Can get the role of an Engineer with the getRole() method", () => {
        const role = "Engineer";

        const en = new Engineer("Employee Name", 77, "email@email.com", "tbsdvl")

        expect(en.getRole()).toBe(role);
    } )
})