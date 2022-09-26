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
//  - Make user ship placement,
//    drag and drop doesnt seem too hard, and can include a rotate button
//  - hide computer ships until games over css
// -add max grid sizes in css

const humanPlayer = Player(Gameboard());
const computerPlayer = Player(Gameboard(), true);
displayChooseShip(humanPlayer);

// computerPlayer.gameboard.placeShip(4, 1, "up", Ship(5));
// computerPlayer.gameboard.placeShip(8, 7, "down", Ship(4));
// computerPlayer.gameboard.placeShip(0, 8, "left", Ship(3));
// computerPlayer.gameboard.placeShip(2, 3, "right", Ship(2));
// computerPlayer.gameboard.placeShip(9, 4, "left", Ship(1));

// humanPlayer.gameboard.placeShip(1, 1, "up", Ship(5));
// humanPlayer.gameboard.placeShip(9, 2, "down", Ship(4));
// humanPlayer.gameboard.placeShip(8, 6, "left", Ship(3));
// humanPlayer.gameboard.placeShip(3, 4, "right", Ship(2));
// humanPlayer.gameboard.placeShip(4, 9, "left", Ship(1));

// displayGame(humanPlayer, computerPlayer);

// const formatGrids = function formatGridsToRunGame(player1, player2) {
//   const grids = document.querySelectorAll(".computer");
//   grids.forEach((grid) =>
//     grid.addEventListener("click", () => {
//       const gridId = grid.getAttribute("data-grid-id");
//       setAttack(gridId, player1, player2);
//       player2.attack(player1);

//       clearGame(player1, player2);
//       displayGame(player1, player2);

//       if (checkForWinner(player1, player2)) {
//         displayWinner(checkForWinner(player1, player2));
//         return;
//       }

//       formatGrids(player1, player2);
//     })
//   );
// };

// formatGrids(humanPlayer, computerPlayer);
