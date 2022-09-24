const removeAllChildNodes = function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const clearGame = function removeElementsInGameSections() {
  removeAllChildNodes(document.querySelector(".player-section"));
  removeAllChildNodes(document.querySelector(".computer-section"));
};

const setAttack = function setAttackOnEnemyGameboard(gridId, player1, player2) {
  const col = gridId.split(",")[0];
  const row = gridId.split(",")[1];
  player1.attack(player2, col, row);
};

const formatGrids = function formatGridsToBeClickedOn(player1, player2) {
  const grids = document.querySelectorAll(".computer");
  grids.forEach((grid) =>
    grid.addEventListener("click", () => {
      const gridId = grid.getAttribute("data-grid-id");
      setAttack(gridId, player1, player2);
      clearGame(player1, player2);
      // eslint-disable-next-line no-use-before-define
      displayGame(player1, player2);
    })
  );
};

const displayBoard = function displayPlayerGameBoard(player) {
  const gameboard = player.gameboard.getBoard();
  const gameboardElement = document.createElement("div");
  gameboardElement.classList.add("gameboard");
  for (let i = 0; i < gameboard.length; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    row.textContent = `${i}`;

    for (let j = 0; j < 10; j++) {
      const grid = document.createElement("div");
      grid.classList.add("grid");
      grid.setAttribute("data-grid-id", `${i},${j}`);
      grid.textContent = `${j}`;

      if (gameboard[i][j] != null) {
        grid.classList.add("ship");
      }
      if (player.gameboard.hitShots.includes(`${i},${j}`)) {
        grid.classList.add("hit");
      }
      if (player.isComputer) {
        grid.classList.add("computer");
      }
      row.appendChild(grid);
    }
    gameboardElement.appendChild(row);
  }

  return gameboardElement;
};

// const displayGame =
// eslint-disable-next-line func-style
function displayGame(player1, player2) {
  const playerSection = document.querySelector(".player-section");
  const computerSection = document.querySelector(".computer-section");
  computerSection.appendChild(displayBoard(player2));
  playerSection.appendChild(displayBoard(player1));
  formatGrids(player1, player2);
}

export default displayGame;
