const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialize", () => {
        test("Can initialize an engineer object", () => {
            const en = new Engineer();

            expect(typeof en).toBe("object");
        })

        test("Can add github attribute to engineer object", () => {
            const github = "tbsdvl"

            const en = new Engineer("Employee Name", 77, "email@email.com", github);

            expect(typeof en.github).toBe(typeof github);
        })
    });

    describe("Can get the github of an Engineer with the getGithub() method", () => {
        const github = "tbsdvl";

        const en = new Engineer("Employee Name", 77, "email@email.com", github);

        expect(en.getGithub()).toBe(github);
    })

    describe("Can get the role of an Engineer with the getRole() method", () => {
        const role = "Engineer";

        const en = new Engineer("Employee Name", 77, "email@email.com", "tbsdvl")

        expect(en.getRole()).toBe(role);
    } )
})