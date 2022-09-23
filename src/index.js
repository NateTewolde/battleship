import Player from "./player-manager";
import Gameboard from "./gameboard-manager";
import Ship from "./ship-manager";
import { displayBoard, formatGrids } from "./dom-manager";
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

computerPlayer.gameboard.placeShip(4, 1, "up", Ship(2));
computerPlayer.gameboard.placeShip(4, 7, "up", Ship(3));

const playerSection = document.querySelector(".player-section");
const computerSection = document.querySelector(".computer-section");
computerSection.appendChild(displayBoard(computerPlayer.gameboard.getBoard()));
playerSection.appendChild(displayBoard(humanPlayer.gameboard.getBoard()));

formatGrids(humanPlayer, computerPlayer);
