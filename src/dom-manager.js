const setAttack = function setAttackOnEnemyGameboard(gridId, player1, player2) {
  const col = gridId.split(",")[0];
  const row = gridId.split(",")[1];
  console.log(`${col},${row}}`);
  player1.attack(player2, col, row);
};

const formatGrids = function formatGridsToBeClickedOn(player1, player2) {
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) =>
    grid.addEventListener("click", () => {
      const gridId = grid.getAttribute("data-grid-id");
      setAttack(gridId, player1, player2);
    })
  );
};

const displayBoard = function displayPlayerGameBoard(gameboard) {
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
      row.appendChild(grid);
    }
    gameboardElement.appendChild(row);
  }
  return gameboardElement;
};

export { displayBoard, formatGrids };
