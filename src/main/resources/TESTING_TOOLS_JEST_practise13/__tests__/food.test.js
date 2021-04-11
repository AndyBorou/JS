const foodProcess = require("../food");

const food = [
    { kind: 'potato', price: 10 },
    { kind: 'bred', price: 16 },
    { kind: 'pepper', price: 27 },
    { kind: 'banana', price: 32 },
    { kind: 'lemon', price: 50 }
];

const max = 40;
const min = 12;

describe("My Test suite4", () => {
    test('array check', () => {
    expect(foodProcess(food, min, max)).toHaveLength(3);

    expect(foodProcess(food, min, max)).toEqual(expect.arrayContaining([{ kind: 'pepper', price: 27 }]));

    expect(foodProcess(food, min, max)).toEqual(expect.arrayContaining([food[1], food[2], food[3]]));

    expect(foodProcess(food, min, max)[0].price).toBeGreaterThan(min);

    expect(foodProcess(food, min, max)[2].price).toBeLessThan(max);

    expect(foodProcess(food, min, max)).toEqual(expect.not.arrayContaining([{ kind: 'lemon', price: 50 }]));

    expect(foodProcess(food, min, max)[1].kind).toMatch(/pepper/);

    expect(foodProcess(food, min, max)[0]).toEqual({ kind: 'bred', price: 16 })
});


})