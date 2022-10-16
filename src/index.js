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

const shipTypes = [
  ["Patrol Boat", 2],
  ["Submarine", 3],
  ["Destroyer", 3],
  ["Battleship", 4],
  ["Carrier", 5],
];

const humanPlayer = Player(Gameboard());
const computerPlayer = Player(Gameboard(), true);

computerPlayer.gameboard.placeRandomShip(Ship(5));
computerPlayer.gameboard.placeRandomShip(Ship(4));
computerPlayer.gameboard.placeRandomShip(Ship(3));
computerPlayer.gameboard.placeRandomShip(Ship(3));
computerPlayer.gameboard.placeRandomShip(Ship(2));

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
const chooseShips = function createAndDisplayPlayerShipChoosing() {
  displayChooseShip(humanPlayer, shipTypes);

  // eslint-disable-next-line no-use-before-define
  formatSubmitBtn(humanPlayer);
  // eslint-disable-next-line no-use-before-define
  formatRandomBtn(humanPlayer);
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

    chooseShips();
  });
};

const formatRandomBtn = function randomBtnWillPlaceShipRandomly(player) {
  const randomBtn = document.querySelector(".random-form-btn");
  randomBtn.addEventListener("click", () => {
    player.gameboard.placeRandomShip(Ship(shipTypes[shipTypes.length - 1][1]));
    shipTypes.pop();
    clearGame();
    if (shipTypes.length === 0) {
      displayGame(humanPlayer, computerPlayer);
      formatGrids(humanPlayer, computerPlayer);
      return;
    }

    chooseShips();
  });
};

chooseShips();
