const Gameboard = () => {
  const gameboard = [[], [], [], [], [], [], [], [], [], []];
  const getGameboard = () => gameboard;

  const placeShip = (col, row, direction, ship) => {
    gameboard[col][row] = ship;

    for (let i = 0; i < ship.length; i++) {
      if (direction === "left") {
        gameboard[col - i][row] = ship;
      }
      if (direction === "right") {
        gameboard[col + i][row] = ship;
      }
      if (direction === "down") {
        gameboard[col][row + i] = ship;
      }
      if (direction === "up") {
        gameboard[col][row - i] = ship;
      }
    }
  };
  return { getGameboard, placeShip };
};

export default Gameboard;
