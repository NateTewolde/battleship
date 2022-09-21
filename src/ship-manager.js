const Ship = (length) => {
  const damaged = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ].slice(0, length);
  const hit = (location) => {
    damaged[location] = true;
  };
  const isSunk = () => damaged.every((location) => location === true);

  return { length, damaged, hit, isSunk };
};

export default Ship;
