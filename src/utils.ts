export const getPoints = (num: number, precision = 2): number => {
  const finalNum = num.toFixed(precision)
  const temp = `${finalNum}`.split('.')[1] || ''
  return Number(temp) || 0
};
