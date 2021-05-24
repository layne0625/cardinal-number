import { NumberDictType, FormatAmountFunction } from '../types';
import { getPoints } from '../utils';

const baseMap: NumberDictType = {
  0: 'cero',
  1: 'un',
  2: 'dos',
  3: 'tres',
  4: 'cuatro',
  5: 'cinco',
  6: 'seis',
  7: 'siete',
  8: 'ocho',
  9: 'nueve',
  10: 'diez',
  11: 'once',
  12: 'doce',
  13: 'trece',
  14: 'catorce',
  15: 'quince',
  16: 'dieciséis',
  17: 'diecisiete',
  18: 'dieciocho',
  19: 'diecinueve',
  20: 'veinte',
  21: 'veintiún',
  22: 'veintidós',
  23: 'veintitrés',
  24: 'veinticuatro',
  25: 'veinticinco',
  26: 'veintiséis',
  27: 'veintisiete',
  28: 'veintiocho',
  29: 'veintinueve',
};

const tensMap: NumberDictType = {
  3: 'treinta', // 30
  4: 'cuarenta', // 40
  5: 'cincuenta', // 50
  6: 'sesenta', // 60
  7: 'setenta', // 70
  8: 'ochenta', // 80
  9: 'noventa', // 90
};

const hundredsMap: NumberDictType = {
  1: 'ciento', // 100
  2: 'doscientos', // 200
  3: 'trescientos', // 300
  4: 'cuatrocientos', // 400
  5: 'quinientos', // 500
  6: 'seiscientos', // 600
  7: 'setecientos', // 700
  8: 'ochocientos', // 800
  9: 'novecientos', // 900
};

const AND = 'y';

const getZero2Hundreds = (num: number, special = false) => {
  if (num >= 30) {
    const digits = num % 10;
    const digitsStr = baseMap[digits];
    let strList = [];
    const tens = Math.floor(num / 10);
    strList.push(tensMap[tens]);
    if (digits > 0) {
      strList = [...strList, AND, digitsStr];
    }
    return strList;
  }
  // 1后面跟修饰词时， 用'un'，否则用 'uno'
  return num !== 0 ? [num === 1 && special ? 'un' : baseMap[num]] : [];
};

const getHundreds2Thousands = (num: number, special = false) => {
  // 100比较特殊， 100整数位‘cien’, 比100大的数用ciento
  if (num === 100) {
    return ['cien'];
  }
  const hundreds = Math.floor(num / 100);
  const rests = num % 100;
  let strList = getZero2Hundreds(rests, special);
  if (hundreds > 0) {
    strList.unshift(hundredsMap[hundreds]);
  }
  return strList;
};

const getThousands2Millons = (num: number, special = false) => {
  const millons = Math.floor(num / 1000);
  const rests = num % 1000;
  let strList = getHundreds2Thousands(rests, special);
  if (millons > 0) {
    const millonsStrList = getHundreds2Thousands(millons, true);
    if (millons === 1) {
      strList = ['mil', ...strList];
    } else {
      strList = [...millonsStrList, 'mil', ...strList];
    }
  }
  return strList;
};

const defaultFormatPoints: FormatAmountFunction = num => {
  const numStr = `00${num}`.slice(-2);
  return ['pesos', `${numStr}/100 MN`];
};

export default (
  num: number,
  formatAmount?: FormatAmountFunction | boolean
): string => {
  let pointsStrList: string[] = [];
  // 处理小数
  if (formatAmount) {
    const points = getPoints(num);
    pointsStrList =
      typeof formatAmount === 'function'
        ? formatAmount(num)
        : defaultFormatPoints(points);
  }

  const integer = Math.floor(num);
  if (integer < 1000000) {
    const strList = getThousands2Millons(integer);
    const temp = strList.length > 0 ? strList : [baseMap[0]];
    return [...temp, ...pointsStrList].join(' ');
  }
  const millons = Math.floor(integer / 1000000);
  const rests = Math.floor(integer % 1000000);
  let strList = getThousands2Millons(rests);
  const millonsStrList = getThousands2Millons(millons, true);
  // 百万大于1时用millones
  strList = [
    ...millonsStrList,
    millons === 1 ? 'millón' : 'millones',
    ...strList,
  ];

  return [...strList, ...pointsStrList].join(' ');
};
