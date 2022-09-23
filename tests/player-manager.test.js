import Player from "../src/player-manager";
import Gameboard from "../src/gameboard-manager";
import Ship from "../src/ship-manager";

test("Player object keeps track if its a computer", () => {
  const computerPlayer = Player(Gameboard, true);
  expect(computerPlayer.isComputer).toBe(true);
});

test("Player.attack(enemy, x, y) makes enemy gameboard receive attack correctly", () => {
  const player1 = Player(Gameboard());
  const player2 = Player(Gameboard());

  player2.gameboard.placeShip(4, 7, "down", Ship(3));
  player2.gameboard.placeShip(0, 3, "right", Ship(2));

  player1.gameboard.placeShip(4, 7, "down", Ship(3));
  player1.gameboard.placeShip(0, 3, "right", Ship(2));

  player1.attack(player2, 4, 7);
  player1.attack(player2, 3, 7);
  player1.attack(player2, 2, 7);
  expect(player2.gameboard.areAllSunk()).toBe(false);
  player1.attack(player2, 0, 3);
  player1.attack(player2, 0, 4);

  player2.attack(player1, 4, 7);
  player2.attack(player1, 3, 7);
  player2.attack(player1, 2, 7);
  expect(player1.gameboard.areAllSunk()).toBe(false);
  player2.attack(player1, 0, 3);
  player2.attack(player1, 0, 4);

  expect(player1.gameboard.areAllSunk()).toBe(true);
  expect(player2.gameboard.areAllSunk()).toBe(true);
});

test("Player.attack() from a computer player uses a random unused attack correctly", () => {
  const humanPlayer = Player(Gameboard());
  const computerPlayer = Player(Gameboard(), true);

  computerPlayer.gameboard.placeShip(4, 7, "down", Ship(3));
  computerPlayer.gameboard.placeShip(0, 3, "right", Ship(2));

  for (let j = 0; j < 10; j++) {
    humanPlayer.gameboard.placeShip(j, 0, "right", Ship(10));
  }

  expect(computerPlayer.gameboard.areAllSunk()).toBe(false);
  humanPlayer.attack(computerPlayer, 4, 7);
  humanPlayer.attack(computerPlayer, 3, 7);
  humanPlayer.attack(computerPlayer, 2, 7);
  expect(computerPlayer.gameboard.areAllSunk()).toBe(false);
  humanPlayer.attack(computerPlayer, 0, 3);
  humanPlayer.attack(computerPlayer, 0, 4);
  expect(computerPlayer.gameboard.areAllSunk()).toBe(true);

  for (let i = 0; i < 98; i++) {
    computerPlayer.attack(humanPlayer);
  }

  expect(computerPlayer.attacksMade.length).toBe(98);
  expect(humanPlayer.gameboard.areAllSunk()).toBe(false);
  computerPlayer.attack(humanPlayer);
  computerPlayer.attack(humanPlayer);
  expect(computerPlayer.attacksMade.length).toBe(100);
  expect(humanPlayer.gameboard.areAllSunk()).toBe(true);
});
