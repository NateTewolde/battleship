const formatGrids = function formatGridsToBeClickedOn() {
  const grids = document.querySelectorAll(".grid");

  grids.forEach((grid) =>
    grid.addEventListener("click", () => {
      console.log("hi");
      // createAttack(grid data attribute)
    })
  );
};

const displayBoard = function displayPlayerGameBoard(gameboard) {
  const gameboardElement = document.createElement("div");
  gameboardElement.classList.add("gameboard");
  for (let i = 0; i < gameboard.length; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < 10; j++) {
      const grid = document.createElement("div");
      grid.classList.add("grid");

      if (gameboard[i][j] != null) {
        grid.classList.add("ship");
      }

      row.appendChild(grid);
    }
    gameboardElement.appendChild(row);
  }
  formatGrids();
  return gameboardElement;
};

const createAttack = function triggerAttackOnEnemyGameboard() {};

export default displayBoard;
