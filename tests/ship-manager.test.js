import Ship from "../src/ship-manager";

describe("Initialize Ship object correctly", () => {
  test("Length 3", () => {
    expect(Ship(3)).toMatchObject({
      length: 3,
      damaged: [false, false, false],
    });
  });

  test("Length 5", () => {
    expect(Ship(5)).toMatchObject({
      length: 5,
      damaged: [false, false, false, false, false],
    });
  });

  test("Length 1", () => {
    expect(Ship(1)).toMatchObject({
      length: 1,
      damaged: [false],
    });
  });

  test("Ship.hit() is hit in correct place", () => {
    const myShip = Ship(5);
    myShip.hit(1);
    myShip.hit(3);

    expect(myShip).toMatchObject({
      length: 5,
      damaged: [false, true, false, true, false],
    });
  });

  test("Ship.isSunk() sinks the ship correclty", () => {
    const myShip = Ship(3);
    expect(myShip.isSunk()).toBe(false);
    myShip.hit(0);
    expect(myShip.isSunk()).toBe(false);
    myShip.hit(2);
    expect(myShip.isSunk()).toBe(false);
    myShip.hit(1);
    expect(myShip.isSunk()).toBe(true);

    const mySmallShip = Ship(1);
    expect(mySmallShip.isSunk()).toBe(false);
    mySmallShip.hit(0);
    expect(mySmallShip.isSunk()).toBe(true);
  });
});
