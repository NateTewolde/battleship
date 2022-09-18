const Ship = (length) => {
  const damaged = [false, false, false, false, false].slice(0, length);
  const sunk = false;
  const hit = (location) => length;

  return { length, damaged, sunk, hit };
};

export default Ship;
