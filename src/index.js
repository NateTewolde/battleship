import Player from "./player-manager";
import Gameboard from "./gameboard-manager";
import Ship from "./ship-manager";
import {
  displayGame,
  clearGame,
  displayWinner,
  displayChooseShip,
} from "./dom-manager";
import { setAttack, checkForWinner } from "./game-manager";
import "./styles/style.css";

// Steps to finish:
//  - dont allow ships to overlap:
//    - make it so that Placeship() only gets the coordinates first, then
//    - if the coordinates dont have any matching with any other one in
//    - ships, and it doesnt make it go out of bounds
//    - then it can then go through and add the ship to that grid.
//    - how to validate this tho..
//    - maybe have a isShipValid() array, if its valid it pushes
//    - true, if its not then it pushes false, which dom-manager
//    - or whatever can see that the last entry was false so
//    - the ship is no good. use js form validation
//    - this can also be used to get valid slots.

//    - make computer choose random ship slots
//    - add max grid sizes in css, design and make look nice because last vanilla JS project
const shipTypes = [
  ["Patrol Boat", 2],
  ["Submarine", 3],
  ["Destroyer", 3],
  ["Battleship", 4],
  ["Carrier", 5],
];

const humanPlayer = Player(Gameboard());
const computerPlayer = Player(Gameboard(), true);

computerPlayer.gameboard.placeShip(4, 1, "up", Ship(5));
computerPlayer.gameboard.placeShip(8, 7, "down", Ship(4));
computerPlayer.gameboard.placeShip(0, 8, "left", Ship(3));
computerPlayer.gameboard.placeShip(2, 3, "right", Ship(2));
computerPlayer.gameboard.placeShip(9, 4, "left", Ship(1));

const formatGrids = function formatGridsToRunGame(player1, player2) {
  const grids = document.querySelectorAll(".computer");
  grids.forEach((grid) =>
    grid.addEventListener("click", () => {
      const gridId = grid.getAttribute("data-grid-id");
      setAttack(gridId, player1, player2);
      player2.attack(player1);

      clearGame(player1, player2);
      displayGame(player1, player2);

      if (checkForWinner(player1, player2)) {
        displayWinner(checkForWinner(player1, player2));
        return;
      }

      formatGrids(player1, player2);
    })
  );
};

const formatSubmitBtn = function formatsDirectionSubmitButton(player) {
  const submitFormBtn = document.querySelector(".submit-form-btn");
  submitFormBtn.addEventListener("click", () => {
    const location = document.querySelector(".placement-location");
    const gridId = location.getAttribute("data-grid-id");

    const directionSelected = document.getElementById("direction");
    const directionChoice =
      directionSelected.options[directionSelected.selectedIndex].text;
    const coords = gridId.split(",");

    player.gameboard.placeShip(
      +coords[0],
      +coords[1],
      directionChoice.toLowerCase(),
      Ship(shipTypes[shipTypes.length - 1][1])
    );

    if (player.gameboard.wasNewShipValid()) {
      shipTypes.pop();
    }

    clearGame();
    if (shipTypes.length === 0) {
      displayGame(humanPlayer, computerPlayer);
      formatGrids(humanPlayer, computerPlayer);
      return;
    }

    displayChooseShip(player, shipTypes);
    formatSubmitBtn(player);
  });
};
// Helper function that returns a random number between and including a mix/max
const randomInt = function getRandomIntInclusive() {
  const setMin = 0;
  const setMax = 9;
  const min = Math.ceil(setMin);
  const max = Math.floor(setMax);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomComputerShips = function getRandomValidComputerShips() {
  computerPlayer.gameboard.placeShip(randomInt(), randomInt(), "left", Ship(1));
};

displayChooseShip(humanPlayer, shipTypes);
formatSubmitBtn(humanPlayer);
