export const getPoints = (num: number, pow = 2): number => {
  const scale = 10 ** pow;
  return Math.floor((num * scale) % scale);
};
