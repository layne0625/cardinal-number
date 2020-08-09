import convert2Zh from './languages/zh';
import convert2Es from './languages/es';
import convert2En from './languages/en';
import { FormatAmountFunction } from 'types';

type Lanugages = 'zh' | 'es' | 'en';

interface StoreType {
  config: Lanugages;
}

const store: StoreType = {
  config: 'zh',
};

export default (
  num: number,
  formatAmount: FormatAmountFunction | boolean = true
): string => {
  if (num === 0 || typeof num !== 'number' || Number.isNaN(num)) {
    return '';
  }
  if (num >= 10 ** 12) {
    throw new Error(`The maximum number is ${10 ** 12 - 1}`);
  }
  const { config } = store;
  switch (config) {
    case 'es':
      return convert2Es(num, formatAmount);
    case 'en':
      return convert2En(num, formatAmount);
    default:
      return convert2Zh(num, formatAmount);
  }
};

export const locale = (str: Lanugages) => {
  store.config = str;
};
