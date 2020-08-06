import { NumberDictType, FormatAmountFunction } from '../types';
import { getPoints } from '../utils';

const baseMap: NumberDictType = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
};

const tensMap: NumberDictType = {
  2: 'twenty',
  3: 'thirty',
  4: 'forty',
  5: 'fifty',
  6: 'sixty',
  7: 'seventy',
  8: 'eighty',
  9: 'ninety',
};

const hundredsMap: NumberDictType = {
  2: 'hundred',
  3: 'thousand',
  6: 'million',
  9: 'billion',
};
// 0 ~ 99
export const getLessThanHundred = (num: number, special = false): string[] => {
  let arr = [];
  if (num === 0) {
    return [];
  }
  if (num < 20) {
    arr = [baseMap[num]];
  } else {
    const tens = Math.floor(num / 10);
    const digits = Math.floor(num % 10);
    arr =
      digits > 0 ? [`${tensMap[tens]}-${baseMap[digits]}`] : [tensMap[tens]];
  }

  return special ? ['and', ...arr] : arr;
};

// 100~999
const getHundred2Thousand = (num: number, special = false): string[] => {
  const hundreds = Math.floor(num / 100);
  const rests = num % 100;
  let restsArr = getLessThanHundred(rests, hundreds > 0 || special);
  if (hundreds > 0) {
    return [baseMap[hundreds], hundredsMap[2], ...restsArr];
  }
  return restsArr;
};

const defaultFormatPoints: FormatAmountFunction = num => {
  let pointsList = getLessThanHundred(num);
  if (num !== 0) {
    return ['and cents', ...pointsList, 'only'];
  }
  return ['only'];
};

export default (
  num: number,
  formatAmount?: FormatAmountFunction | boolean
): string => {
  // 234,567,891,231 => [234,567,891,231]
  let threeItemList = [];
  let index = 0;
  let pointsList: string[] = [];
  if (formatAmount) {
    const points = getPoints(num);
    pointsList =
      typeof formatAmount === 'function'
        ? formatAmount(num)
        : defaultFormatPoints(points);
  }

  const interger = Math.floor(num);

  while (index >= 0) {
    const start = -3 * index;
    const end = -3 * (index + 1);
    const item = `${interger}`.slice(end, start || undefined);
    index = item.length === 3 ? index + 1 : -1;
    threeItemList.unshift(Number(item));
  }

  const strList = threeItemList.reduce((temp: string[], cur, index) => {
    const hundredsKey = (threeItemList.length - 1 - index) * 3;
    const hundredsValue = hundredsMap[hundredsKey] || ''; // thousand/million/billion
    const strList = getHundred2Thousand(cur, temp.length > 0);
    return strList.length > 0 && hundredsValue
      ? [...temp, ...strList, hundredsValue]
      : [...temp, ...strList];
  }, []);

  return [...strList, ...pointsList].join(' ');
};
