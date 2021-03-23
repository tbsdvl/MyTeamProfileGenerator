const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialize", () => {
        test("Will initialize an Intern obejct", () => {
            const i = new Intern();

            expect(typeof i).toBe("object");
        })

        test("This will add the school attribute to an Intern object", () => {
            const school = "Brown University";

            const i = new Intern("Employee Name", 77, "email@email.com", school);

            expect(typeof i.school).toBe(typeof school);
        })
    });

    describe("Will return the school attribute using the getSchool() method", () => {
        const school = "Brown University";

        const i = new Intern("Employee Name", 77, "email@email.com", school);

        expect(i.getSchool()).toBe(school);
    })

    describe("Will return the role of Intern using the getRole() method", () => {
        const role = "Intern";

        const i = new Intern("Employee Name", 77, "email@email.com", "Brown University");

        expect(i.getRole()).toBe(role);
    })
});