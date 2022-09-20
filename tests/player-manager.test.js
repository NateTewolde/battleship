import Player from "../src/player-manager.js";
import Gameboard from "../src/gameboard-manager.js";
import Ship from "../src/ship-manager.js";

test("Player.attack(enemy, x, y) makes enemy gameboard receive attack correctly", () => {
  const player1 = Player(Gameboard());
  const player2 = Player(Gameboard());

  // places ship at x,y coordinates (4,7), (4,8), (4,9)
  player2.gameboard.placeShip(4, 7, "down", Ship(3));
  // places ship at x,y coordinates (0,3), (1,3)
  player2.gameboard.placeShip(0, 3, "right", Ship(2));
  // places ship at x,y coordinates (0,4), (1,4)
  player2.gameboard.placeShip(0, 4, "right", Ship(2));

  // places ship at x,y coordinates (4,7), (4,8), (4,9)
  player1.gameboard.placeShip(4, 7, "down", Ship(3));
  // places ship at x,y coordinates (0,3), (1,3)
  player1.gameboard.placeShip(0, 3, "right", Ship(2));
  // places ship at x,y coordinates (0,4), (1,4)
  player1.gameboard.placeShip(0, 4, "right", Ship(2));

  player1.attack(player2, 4, 7);

  player2.attack(player1, 1, 3);

  player2.attack(player1, 0, 4);
  expect(player1.gameboard.areAllSunk()).toBe(false);
  player2.attack(player1, 1, 4);

  player1.attack(player2, 0, 3);
  player1.attack(player2, 1, 3);

  player1.attack(player2, 0, 4);
  expect(player2.gameboard.areAllSunk()).toBe(false);
  player1.attack(player2, 1, 4);

  player2.attack(player1, 4, 7);
  player1.attack(player2, 4, 8);

  player1.attack(player2, 4, 9);
  player2.attack(player1, 4, 8);

  player2.attack(player1, 4, 9);

  player2.attack(player1, 0, 3);

  expect(player1.gameboard.areAllSunk()).toBe(true);
  expect(player2.gameboard.areAllSunk()).toBe(true);
});
