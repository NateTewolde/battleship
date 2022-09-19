import Gameboard from "../src/gameboard-manager.js";
import Ship from "../src/ship-manager";

test("10x10 Gameboard created", () => {
  const myGameboard = Gameboard();
  const gameboard = myGameboard.getGameboard();
  expect(gameboard.length).toBe(10);
});

test("Gameboard.placeShip() works at inital coordinate", () => {
  const myGameboard = Gameboard();
  myGameboard.placeShip(4, 1, "left", Ship(3));
  const gameboard = myGameboard.getGameboard();
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
  myGameboard.placeShip(4, 1, "left", Ship(4));
  const gameboard = myGameboard.getGameboard();

  expect(gameboard[4][1].length).toBe(4);
});

describe("Gameboard.placeShip() places ship in correct direction", () => {
  test("Places ship left", () => {
    const myGameboard = Gameboard();
    myGameboard.placeShip(4, 1, "left", Ship(4));
    const gameboard = myGameboard.getGameboard();
    gameboard[4][1].hit(1);
    expect(gameboard[4][1]).toMatchObject({
      length: 4,
      damaged: [false, true, false, false],
    });

    expect(gameboard[3][1]).toMatchObject({
      length: 4,
      damaged: [false, true, false, false],
    });

    expect(gameboard[2][1]).toMatchObject({
      length: 4,
      damaged: [false, true, false, false],
    });

    expect(gameboard[1][1]).toMatchObject({
      length: 4,
      damaged: [false, true, false, false],
    });
  });

  test("Places ship right", () => {
    const myGameboard = Gameboard();
    myGameboard.placeShip(4, 7, "right", Ship(5));
    const gameboard = myGameboard.getGameboard();
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

  test("Places ship up", () => {
    const myGameboard = Gameboard();
    myGameboard.placeShip(4, 7, "up", Ship(5));
    const gameboard = myGameboard.getGameboard();
    gameboard[4][7].hit(2);
    expect(gameboard[4][7]).toMatchObject({
      length: 5,
      damaged: [false, false, true, false, false],
    });

    expect(gameboard[4][6]).toMatchObject({
      length: 5,
      damaged: [false, false, true, false, false],
    });

    expect(gameboard[4][5]).toMatchObject({
      length: 5,
      damaged: [false, false, true, false, false],
    });

    expect(gameboard[4][4]).toMatchObject({
      length: 5,
      damaged: [false, false, true, false, false],
    });

    expect(gameboard[4][3]).toMatchObject({
      length: 5,
      damaged: [false, false, true, false, false],
    });
  });

  test("Places ship down", () => {
    const myGameboard = Gameboard();
    myGameboard.placeShip(4, 7, "down", Ship(3));
    const gameboard = myGameboard.getGameboard();
    gameboard[4][7].hit(0);
    expect(gameboard[4][7]).toMatchObject({
      length: 3,
      damaged: [true, false, false],
    });

    expect(gameboard[4][8]).toMatchObject({
      length: 3,
      damaged: [true, false, false],
    });

    expect(gameboard[4][9]).toMatchObject({
      length: 3,
      damaged: [true, false, false],
    });
  });
});
