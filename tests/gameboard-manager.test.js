import Gameboard from "../src/gameboard-manager.js";
import Ship from "../src/ship-manager";

test("10x10 Gameboard created", () => {
  const myGameboard = Gameboard();
  const gameboard = myGameboard.getGameboard();
  expect(gameboard.length).toBe(10);
});

test("Place ship at coordinate", () => {
  const myGameboard = Gameboard();
  myGameboard.placeShip(1, 4, "left", Ship(3));
  const gameboard = myGameboard.getGameboard();
  expect(gameboard[4][1]).toMatchObject({
    length: 3,
    damaged: [false, false, false],
  });
  expect(gameboard[4][2]).toMatchObject({
    length: 3,
    damaged: [false, false, false],
  });

  gameboard[4][2].hit(0);
  gameboard[4][2].hit(1);
  gameboard[4][2].hit(2);
  expect(gameboard[4][2].isSunk()).toBe(true);
  expect(gameboard[4][1].isSunk()).toBe(true);
});
