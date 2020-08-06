import { NumberDictType, FormatAmountFunction } from '../types';
import { getPoints } from '../utils';
const baseMap: NumberDictType = {
  0: '零',
  1: '壹',
  2: '贰',
  3: '叁',
  4: '肆',
  5: '伍',
  6: '陆',
  7: '柒',
  8: '捌',
  9: '玖',
};

const indexMap: NumberDictType = {
  1: '拾', // 10^1 => 10
  2: '佰', // 10^2 => 100
  3: '仟', // 10^3 => 1000
  4: '万', // 10^4 => 10000
  5: '拾', // 10^5 => 100000
  6: '佰', // 10^6 => 1000000
  7: '仟', // 10^7 => 10000000
  8: '亿', // 10^8 => 100000000
  9: '拾', // 10^9 => 1000000000
  10: '佰', // 10^10 => 10000000000
  11: '仟', // 10^11 => 100000000000
};

const formatStrList = (temp: any[], cur: number, index: number) => {
  const first = temp.slice(-1)[0];
  if (cur === 0) {
    return first === '零' ? temp : [...temp, '零'];
  }
  return [...temp, baseMap[cur], indexMap[index]];
};

const defaultFormatPoints: FormatAmountFunction = num => {
  if (num === 0) {
    return ['元整'];
  }
  const tens = Math.floor(num / 10);
  const digits = num % 10;
  let strList: string[] = [];
  if (tens > 0 || digits > 0) {
    strList = ['元'];
  }
  strList = tens > 0 ? [...strList, baseMap[tens], '角'] : [...strList];
  return digits > 0 ? [...strList, baseMap[digits], '分'] : strList;
};

export default (
  num: number,
  formatAmount?: FormatAmountFunction | boolean
): string => {
  let pointsList: string[] = [];
  if (formatAmount) {
    const points = getPoints(num);
    pointsList =
      typeof formatAmount === 'function'
        ? formatAmount(num)
        : defaultFormatPoints(points);
  }
  const integer = Math.floor(num);
  const itemList = `${integer}`.split('').map(item => Number(item));
  const strList = itemList.reduce((temp: any[], cur: number, index: number) => {
    const digitalIndex = itemList.length - index - 1;
    let strList = [];
    let last = '';
    switch (digitalIndex) {
      case 0:
        strList = cur === 0 ? temp : [...temp, baseMap[cur]];
        break;
      case 4:
        strList = formatStrList(temp, cur, digitalIndex);
        last = strList.slice(-1)[0];
        if (last === '零' && strList.slice(-2, -1)[0] !== '亿') {
          strList.splice(-1, 0, '万');
        }
        break;
      case 8:
        strList = formatStrList(temp, cur, digitalIndex);
        last = strList.slice(-1)[0];
        if (last === '零') {
          strList.splice(-1, 0, '亿');
        }
        break;
      default:
        strList = formatStrList(temp, cur, digitalIndex);
    }
    return strList;
  }, []);

  if (strList.slice(-1)[0] === '零') {
    strList.pop();
  }

  return [...strList, ...pointsList].join('');
};
