const Gameboard = () => {
  const gameboard = [[], [], [], [], [], [], [], [], [], []];
  const getBoard = () => gameboard;
  const ships = [];
  const shipValidity = [];

  const wasNewShipValid = () => shipValidity[shipValidity.length - 1];

  const populateShipsGrids = (shipCoords, ship) => {
    shipCoords.forEach((element) => {
      const [col, row] = element.split(",");
      gameboard[col][row] = ship;
    });
  };

  // check if newShipInfo matches any other ships coords
  const checkNewShipValidity = (newShipInfo) => {
    const foundOverlap = ships.some((ship) =>
      ship.some((coord) => newShipInfo.includes(coord))
    );

    const foundOutOfBounds = newShipInfo.some((coords) => {
      const [col, row] = coords.split(",");
      if (col > 9 || col < 0 || row > 9 || row < 0) {
        return true;
      }
      return false;
    });

    if (foundOverlap || foundOutOfBounds) {
      shipValidity.push(false);
      return;
    }
    shipValidity.push(true);
  };

  const placeShip = (col, row, direction, ship) => {
    const newShipInfo = [];

    for (let i = 0; i < ship.length; i++) {
      if (direction === "left") {
        newShipInfo.push(`${col},${row - i}`);
      }
      if (direction === "right") {
        newShipInfo.push(`${col},${row + i}`);
      }
      if (direction === "down") {
        newShipInfo.push(`${col - i},${row}`);
      }
      if (direction === "up") {
        newShipInfo.push(`${col + i},${row}`);
      }
    }

    checkNewShipValidity(newShipInfo);
    const isValid = wasNewShipValid();

    if (!isValid) {
      return;
    }
    populateShipsGrids(newShipInfo.slice(0), ship);
    newShipInfo.push(ship);
    ships.push(newShipInfo);
  };

  // Helper function that returns a random number between and including a mix/max
  const randomInt = function getRandomIntInclusive(setMin, setMax) {
    const min = Math.ceil(setMin);
    const max = Math.floor(setMax);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const placeRandomShip = function placeRandomValidShip(ship) {
    const cols = [randomInt(0, 9)];
    const rows = [randomInt(0, 9)];
    const randDirect = [randomInt(0, 3)];
    const directions = ["left", "right", "up", "down"];
    const condition = true;

    while (condition) {
      placeShip(
        cols[cols.length - 1],
        rows[rows.length - 1],
        directions[randDirect.length - 1],
        ship
      );
      cols.push(randomInt(0, 9));
      rows.push(randomInt(0, 9));
      randDirect.push(randomInt(0, 3));
      const isValid = wasNewShipValid();
      if (isValid) {
        break;
      }
    }
  };

  const missedShots = [];
  const hitShots = [];

  const receiveAttack = (x, y) => {
    const xPlusY = `${x},${y}`;
    let hitPosition;
    let didItHit;

    for (let i = 0; i < ships.length; i++) {
      hitPosition = ships[i].findIndex((coordinates) => coordinates === xPlusY);
      if (gameboard[x][y] != null) {
        gameboard[x][y].hit(hitPosition);
        didItHit = true;
      }
    }
    if (didItHit) {
      hitShots.push(xPlusY);
      return;
    }

    missedShots.push(xPlusY);
  };

  const areAllSunk = () =>
    ships.slice(0).every((ship) => ship[ship.length - 1].isSunk());

  return {
    getBoard,
    placeShip,
    receiveAttack,
    missedShots,
    hitShots,
    areAllSunk,
    wasNewShipValid,
    placeRandomShip,
  };
};

export default Gameboard;
