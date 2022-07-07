const calcTax = require("./tax_calculator");

describe("tax function check", () => {
    test("regular check", () => {
        expect(calcTax(700000)).toBe(140000);
    })
    test("no arguement", () => {
        expect(calcTax()).toBe("please enter valid income");
    })
    test("regular check", () => {
        expect(calcTax(300000)).toBe(30000);
    })
    test("regular check", () => {
        expect(calcTax(1100000)).toBe(330000);
    })
})