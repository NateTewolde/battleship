import Player from "./player-manager";
import Gameboard from "./gameboard-manager";
import Ship from "./ship-manager";
import displayBoard from "./dom-manager";
import "./styles/style.css";

const humanPlayer = Player(Gameboard());
const computerPlayer = Player(Gameboard());

humanPlayer.gameboard.placeShip(0, 0, "down", Ship(1));
humanPlayer.gameboard.placeShip(2, 0, "down", Ship(1));
humanPlayer.gameboard.placeShip(0, 5, "down", Ship(1));
humanPlayer.gameboard.placeShip(3, 2, "left", Ship(2));

humanPlayer.gameboard.placeShip(1, 7, "right", Ship(3));
humanPlayer.gameboard.placeShip(8, 7, "down", Ship(3));
humanPlayer.gameboard.placeShip(7, 1, "up", Ship(3));

computerPlayer.gameboard.placeShip(1, 4, "left", Ship(2));
computerPlayer.gameboard.placeShip(4, 7, "up", Ship(3));

const playerSection = document.querySelector(".player-section");
const computerSection = document.querySelector(".computer-section");
console.log(humanPlayer.gameboard.getGameboard());
computerSection.appendChild(
  displayBoard(computerPlayer.gameboard.getGameboard())
);
playerSection.appendChild(displayBoard(humanPlayer.gameboard.getGameboard()));

// // places ship at x,y coordinates (1,8), (1,7), (1,6), (1,5), (1,4)
// humanPlayer.gameboard.placeShip(1, 8, "up", Ship(5));

// // places ship at x,y coordinates (9,8), (8,8), (7,8), (6,8)
// // humanPlayer.gameboard.placeShip(1, 8, "left", Ship(4));

// // places ship at x,y coordinates (4,7), (4,8), (4,9)
// humanPlayer.gameboard.placeShip(4, 7, "down", Ship(3));

// // places ship at x,y coordinates (0,3), (1,3)
// humanPlayer.gameboard.placeShip(0, 3, "right", Ship(2));

// // places ship at x,y coordinates (0,4)
// humanPlayer.gameboard.placeShip(0, 4, "right", Ship(1));

// // places ship at x,y coordinates (1,8), (1,7), (1,6), (1,5), (1,4)
// computerPlayer.gameboard.placeShip(1, 8, "up", Ship(5));

// // places ship at x,y coordinates (9,8), (8,8), (7,8), (6,8)
// // computerPlayer.gameboard.placeShip(1, 8, "left", Ship(4));

// // places ship at x,y coordinates (4,7), (4,8), (4,9)
// computerPlayer.gameboard.placeShip(4, 7, "down", Ship(3));

// // places ship at x,y coordinates (0,3), (1,3)
// computerPlayer.gameboard.placeShip(0, 3, "right", Ship(2));

// // places ship at x,y coordinates (0,4)
// computerPlayer.gameboard.placeShip(0, 4, "right", Ship(1));
