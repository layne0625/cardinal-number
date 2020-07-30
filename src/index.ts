import convert2Zh from './languages/zh';
import convert2Es from './languages/es';

type Lanugages = 'zh' | 'es';

interface StoreType {
  config: Lanugages;
}

const store: StoreType = {
  config: 'zh',
};

export default (num: number): string => {
  const { config } = store;
  switch (config) {
    case 'es':
      return convert2Es(num);
    default:
      return convert2Zh(num);
  }
};

export const locale = (str: Lanugages) => {
  store.config = str;
};
