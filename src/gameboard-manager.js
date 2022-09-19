const Gameboard = () => {
  const gameboard = [[], [], [], [], [], [], [], [], [], []];
  const getGameboard = () => gameboard;
  const ships = [];

  const placeShip = (col, row, direction, ship) => {
    const newShipInfo = [];

    for (let i = 0; i < ship.length; i++) {
      if (direction === "left") {
        gameboard[col - i][row] = ship;
        newShipInfo.push(`${col - i},${row}`);
      }
      if (direction === "right") {
        gameboard[col + i][row] = ship;
        newShipInfo.push(`${col + i},${row}`);
      }
      if (direction === "down") {
        gameboard[col][row + i] = ship;
        newShipInfo.push(`${col},${row + i}`);
      }
      if (direction === "up") {
        gameboard[col][row - i] = ship;
        newShipInfo.push(`${col},${row - i}`);
      }
    }

    newShipInfo.push(ship);
    ships.push(newShipInfo);
    return newShipInfo;
  };

  const missedShots = [];

  const receiveAttack = (x, y) => {
    const xPlusY = `${x},${y}`;
    let hitPosition;

    for (let i = 0; i < ships.length; i++) {
      hitPosition = ships[i].findIndex((coordinates) => coordinates === xPlusY);
    }

    if (gameboard[x][y]) {
      gameboard[x][y].hit(hitPosition);
      return;
    }

    missedShots.push(xPlusY);
  };

  const areAllSunk = () => ships;
  //  ships.every((ship) => ship[ship.length - 1].isSunk());

  return { getGameboard, placeShip, receiveAttack, missedShots, areAllSunk };
};

export default Gameboard;
