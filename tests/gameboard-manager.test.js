import Gameboard from "../src/gameboard-manager";
import Ship from "../src/ship-manager";

test("10x10 Gameboard created", () => {
  const myGameboard = Gameboard();
  const gameboard = myGameboard.getBoard();
  expect(gameboard.length).toBe(10);
});

test("Gameboard.placeShip() works at inital coordinate", () => {
  const myGameboard = Gameboard();
  myGameboard.placeShip(4, 2, "left", Ship(3));
  const gameboard = myGameboard.getBoard();
  expect(gameboard[4][1]).toMatchObject({
    length: 3,
    damaged: [false, false, false],
  });

  gameboard[4][1].hit(0);
  gameboard[4][1].hit(1);
  gameboard[4][1].hit(2);
  expect(gameboard[4][1].isSunk()).toBe(true);
});

test("Ship.length gets the correct length", () => {
  const myGameboard = Gameboard();
  myGameboard.placeShip(4, 3, "left", Ship(4));
  const gameboard = myGameboard.getBoard();

  expect(gameboard[4][1].length).toBe(4);
});

describe("Gameboard.placeShip() places ship in correct direction", () => {
  test("Places ship left", () => {
    const myGameboard = Gameboard();
    myGameboard.placeShip(4, 1, "left", Ship(2));
    const gameboard = myGameboard.getBoard();
    gameboard[4][1].hit(1);
    expect(gameboard[4][1]).toMatchObject({
      length: 2,
      damaged: [false, true],
    });

    expect(gameboard[4][0]).toMatchObject({
      length: 2,
      damaged: [false, true],
    });
  });

  test("Places ship right", () => {
    const myGameboard = Gameboard();
    myGameboard.placeShip(4, 5, "right", Ship(5));
    const gameboard = myGameboard.getBoard();
    gameboard[4][5].hit(2);
    expect(gameboard[4][5]).toMatchObject({
      length: 5,
      damaged: [false, false, true, false, false],
    });

    expect(gameboard[4][6]).toMatchObject({
      length: 5,
      damaged: [false, false, true, false, false],
    });
  });

  test("Places ship up", () => {
    const myGameboard = Gameboard();
    myGameboard.placeShip(4, 7, "up", Ship(5));
    const gameboard = myGameboard.getBoard();
    gameboard[4][7].hit(2);
    expect(gameboard[4][7]).toMatchObject({
      length: 5,
      damaged: [false, false, true, false, false],
    });

    expect(gameboard[5][7]).toMatchObject({
      length: 5,
      damaged: [false, false, true, false, false],
    });

    expect(gameboard[6][7]).toMatchObject({
      length: 5,
      damaged: [false, false, true, false, false],
    });

    expect(gameboard[7][7]).toMatchObject({
      length: 5,
      damaged: [false, false, true, false, false],
    });

    expect(gameboard[8][7]).toMatchObject({
      length: 5,
      damaged: [false, false, true, false, false],
    });
  });

  test("Places ship down", () => {
    const myGameboard = Gameboard();
    myGameboard.placeShip(4, 7, "down", Ship(3));
    const gameboard = myGameboard.getBoard();
    gameboard[4][7].hit(1);
    expect(gameboard[4][7]).toMatchObject({
      length: 3,
      damaged: [false, true, false],
    });

    expect(gameboard[3][7]).toMatchObject({
      length: 3,
      damaged: [false, true, false],
    });

    expect(gameboard[2][7]).toMatchObject({
      length: 3,
      damaged: [false, true, false],
    });
  });
});

describe("Gamebooard.receiveAttack() works correctly", () => {
  const myGameboard = Gameboard();
  const gameboard = myGameboard.getBoard();

  // places ship at x,y coordinates (4,7), (4,8), (4,9)
  myGameboard.placeShip(4, 7, "up", Ship(3));

  test("Gameboard.receiveAttack() hits correctly", () => {
    myGameboard.receiveAttack(5, 7);
    expect(gameboard[6][7]).toMatchObject({
      length: 3,
      damaged: [false, true, false],
    });
  });

  test("Gameboard.receiveAttack() saves missed and hit shots correctly", () => {
    myGameboard.receiveAttack(0, 0);
    myGameboard.receiveAttack(9, 9);
    myGameboard.receiveAttack(4, 6);
    myGameboard.receiveAttack(3, 7);

    myGameboard.receiveAttack(4, 7);
    myGameboard.receiveAttack(6, 7);

    expect(myGameboard.hitShots).toEqual(["5,7", "4,7", "6,7"]);
    expect(myGameboard.missedShots).toEqual(["0,0", "9,9", "4,6", "3,7"]);
  });
});

test("Gameboard.areAllSunk() checks if all ships are sunk correctly", () => {
  const myGameboard = Gameboard();

  // places ship at x,y coordinates (4,7), (4,8), (4,9)
  myGameboard.placeShip(4, 7, "down", Ship(3));
  // places ship at x,y coordinates (0,3), (1,3)
  myGameboard.placeShip(0, 3, "right", Ship(2));
  // places ship at x,y coordinates (0,4), (1,4)
  myGameboard.placeShip(2, 4, "left", Ship(2));

  myGameboard.receiveAttack(4, 7);
  myGameboard.receiveAttack(3, 7);
  myGameboard.receiveAttack(2, 7);

  myGameboard.receiveAttack(0, 3);
  myGameboard.receiveAttack(0, 4);

  myGameboard.receiveAttack(2, 4);
  expect(myGameboard.areAllSunk()).toBe(false);
  myGameboard.receiveAttack(2, 3);

  expect(myGameboard.areAllSunk()).toBe(true);
});

describe("Gameboard.wasNewShipValid() works correctly", () => {
  test("Gameboard.wasNewShipValid() makes sure ships dont overlap", () => {
    const playersGameboard = Gameboard();
    playersGameboard.placeShip(8, 2, "right", Ship(2));
    expect(playersGameboard.wasNewShipValid()).toBe(true);
    playersGameboard.placeShip(8, 2, "right", Ship(2));
    expect(playersGameboard.wasNewShipValid()).toBe(false);
    playersGameboard.placeShip(7, 2, "right", Ship(2));
    expect(playersGameboard.wasNewShipValid()).toBe(true);

    playersGameboard.placeShip(2, 1, "right", Ship(5));
    expect(playersGameboard.wasNewShipValid()).toBe(true);
    playersGameboard.placeShip(1, 5, "up", Ship(5));
    expect(playersGameboard.wasNewShipValid()).toBe(false);
    playersGameboard.placeShip(4, 3, "right", Ship(5));
    expect(playersGameboard.wasNewShipValid()).toBe(true);
  });

  test("Gameboard.wasNewShipValid makes sure ships dont go out of bounds", () => {
    const playersGameboard = Gameboard();

    playersGameboard.placeShip(1, 9, "right", Ship(5));
    expect(playersGameboard.wasNewShipValid()).toBe(false);
    playersGameboard.placeShip(1, 9, "right", Ship(1));
    expect(playersGameboard.wasNewShipValid()).toBe(true);

    playersGameboard.placeShip(9, 1, "left", Ship(5));
    expect(playersGameboard.wasNewShipValid()).toBe(false);
    playersGameboard.placeShip(9, 1, "left", Ship(2));
    expect(playersGameboard.wasNewShipValid()).toBe(true);

    playersGameboard.placeShip(5, 2, "up", Ship(5));
    expect(playersGameboard.wasNewShipValid()).toBe(true);
    playersGameboard.placeShip(9, 3, "up", Ship(5));
    expect(playersGameboard.wasNewShipValid()).toBe(false);
    playersGameboard.placeShip(5, 3, "up", Ship(1));
    expect(playersGameboard.wasNewShipValid()).toBe(true);

    playersGameboard.placeShip(4, 1, "down", Ship(5));
    expect(playersGameboard.wasNewShipValid()).toBe(true);
    playersGameboard.placeShip(2, 2, "down", Ship(5));
    expect(playersGameboard.wasNewShipValid()).toBe(false);
    playersGameboard.placeShip(4, 2, "down", Ship(5));
    expect(playersGameboard.wasNewShipValid()).toBe(true);
  });
});
