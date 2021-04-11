const sum = require("../sum"); // path
const proces = require("../calcCircle");

// ====================1======
describe("My Test suite1", () => {
    test('sum 0.2 + 0.3 is 0.5', () => {
    expect(sum(0.2, 0.3)).toBe(0.5);
});
})

// ===========================2=======================

const userList = ['Nick', 'Kate', 'quest123', 'admin', 'new_user_2'];

describe("My Test suite2", () => {
    test('array check', () => {
    expect(userList.includes("admin")).toBe(true);
    expect(userList[0]).toBe("Nick");
    expect(userList[userList.length-1]).toMatch(/new_user_2/);
    expect(userList).toHaveLength(5);
    expect(typeof userList[3]).toBe("string");
    expect(userList[8]).not.toBeDefined();
});
})

// ==================================3=======================

describe("My Test suite3", () => {
    test('r = 22 l = 138.2', () => {
        expect(proces.l(22)).toEqual(138.2);
    });

    test('r 9 a 254.47', () => {
        expect(proces.a(9)).toEqual(254.47);
    });

    test('r = 0 l = 0', () => {
        expect(proces.l(0)).toEqual(0);
    });

    test('r 0 a = 0', () => {
        expect(proces.a(0)).toEqual(0);
    });
})
