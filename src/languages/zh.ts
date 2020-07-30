import { NumberDictType } from '../types';

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

export default (num: number): string => {
  if (typeof num !== 'number' || Number.isNaN(num)) {
    return '';
  }
  if (num >= 10 ** 12) {
    throw new Error(`The maximum number is ${10 ** 12 - 1}`);
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

  return strList.join('');
};
