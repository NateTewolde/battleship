const Gameboard = () => {
  const gameboard = [[], [], [], [], [], [], [], [], [], []];
  const getGameboard = () => gameboard;

  const placeShip = (row, col, direction, ship) => {
    gameboard[col][row] = ship;

    for (let i = 0; i < ship.length; i++) {
      if (direction === "left") {
        gameboard[col - 1][row] = ship;
      }
      if (direction === "right") {
        gameboard[col + 1][row] = ship;
      }
      if (direction === "down") {
        gameboard[col][row - 1] = ship;
      }
      if (direction === "up") {
        gameboard[col][row + 1] = ship;
      }
    }
  };
  return { getGameboard, placeShip };
};

export default Gameboard;
