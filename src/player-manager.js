const Player = (gameboard) => {
  const attack = (enemy, x, y) => enemy.gameboard.receiveAttack(x, y);

  return { gameboard, attack };
};

export default Player;
