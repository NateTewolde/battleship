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

  const receiveAttack = (x, y) => {
    // how to hit the correct position in the ship tho.
    // maybe sees the length, find the start and finds the correct
    // hit location.
    if (gameboard[x][y]) {
      gameboard[x][y].hit();
    }
  };

  return { getGameboard, placeShip, receiveAttack };
};

export default Gameboard;
