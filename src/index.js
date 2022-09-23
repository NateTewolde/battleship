import Player from "./player-manager";
import Gameboard from "./gameboard-manager";
import Ship from "./ship-manager";
import displayGame from "./dom-manager";
import "./styles/style.css";

const humanPlayer = Player(Gameboard());
const computerPlayer = Player(Gameboard(), true);

humanPlayer.gameboard.placeShip(0, 0, "down", Ship(1));
humanPlayer.gameboard.placeShip(2, 0, "down", Ship(1));
humanPlayer.gameboard.placeShip(0, 5, "down", Ship(1));
humanPlayer.gameboard.placeShip(3, 2, "left", Ship(2));

humanPlayer.gameboard.placeShip(1, 7, "right", Ship(3));
humanPlayer.gameboard.placeShip(8, 7, "down", Ship(3));
humanPlayer.gameboard.placeShip(7, 1, "up", Ship(3));

computerPlayer.gameboard.placeShip(4, 1, "up", Ship(2));
computerPlayer.gameboard.placeShip(4, 7, "up", Ship(3));

humanPlayer.gameboard.receiveAttack(8, 1);
humanPlayer.gameboard.receiveAttack(6, 7);

displayGame(humanPlayer, computerPlayer);
