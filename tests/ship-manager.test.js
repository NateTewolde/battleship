import Ship from "../src/ship-manager";

describe("Initialize Ship object correctly", () => {
  test("Length 3", () => {
    expect(Ship(3)).toMatchObject({
      length: 3,
      damaged: [false, false, false],
      sunk: false,
    });
  });

  test("Length 5", () => {
    expect(Ship(5)).toMatchObject({
      length: 5,
      damaged: [false, false, false, false, false],
      sunk: false,
    });
  });

  test("Length 1", () => {
    expect(Ship(1)).toMatchObject({
      length: 1,
      damaged: [false],
      sunk: false,
    });
  });
});
