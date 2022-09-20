// Helper function that returns a random number between and including a mix/max
const randomInt = function getRandomIntInclusive() {
  const setMin = 0;
  const setMax = 9;
  const min = Math.ceil(setMin);
  const max = Math.floor(setMax);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const computerAttack = function createRandomUnusedComputerAttackChoice(
  attacksMade
) {
  const compX = randomInt();
  const compY = randomInt();
  if (attacksMade.includes(`${compX},${compY}`)) {
    computerAttack(attacksMade);
  }
  attacksMade.push(`${compX},${compY}`);
  return [compX, compY];
};

const Player = (gameboard, isComputer) => {
  const attacksMade = [];
  const attack = (enemy, x, y) => {
    if (isComputer) {
      const coords = computerAttack(attacksMade);
      // eslint-disable-next-line no-param-reassign
      [x, y] = coords;
    }
    enemy.gameboard.receiveAttack(x, y);
  };
  return { gameboard, attack };
};

export default Player;
