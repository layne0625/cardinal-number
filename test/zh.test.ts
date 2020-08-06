import getDescription from '../src/languages/zh';
import { getPoints } from '../src/utils';

describe('0: empty', () => {
  it('works', () => {
    expect(getDescription(0)).toEqual('');
  });
});

describe('1: 壹', () => {
  it('works', () => {
    expect(getDescription(1)).toEqual('壹');
  });
});
describe('2: 贰', () => {
  it('works', () => {
    expect(getDescription(2)).toEqual('贰');
  });
});
describe('3: 叁', () => {
  it('works', () => {
    expect(getDescription(3)).toEqual('叁');
  });
});
describe('4: 肆', () => {
  it('works', () => {
    expect(getDescription(4)).toEqual('肆');
  });
});
describe('5: 伍', () => {
  it('works', () => {
    expect(getDescription(5)).toEqual('伍');
  });
});
describe('6: 陆', () => {
  it('works', () => {
    expect(getDescription(6)).toEqual('陆');
  });
});
describe('7: 柒', () => {
  it('works', () => {
    expect(getDescription(7)).toEqual('柒');
  });
});
describe('8: 捌', () => {
  it('works', () => {
    expect(getDescription(8)).toEqual('捌');
  });
});
describe('9: 玖', () => {
  it('works', () => {
    expect(getDescription(9)).toEqual('玖');
  });
});
describe('10: 壹拾', () => {
  it('works', () => {
    expect(getDescription(10)).toEqual('壹拾');
  });
});
describe('20: 贰拾', () => {
  it('works', () => {
    expect(getDescription(20)).toEqual('贰拾');
  });
});
describe('22: 贰拾贰', () => {
  it('works', () => {
    expect(getDescription(22)).toEqual('贰拾贰');
  });
});
describe('30: 叁拾', () => {
  it('works', () => {
    expect(getDescription(30)).toEqual('叁拾');
  });
});
describe('39: 叁拾玖', () => {
  it('works', () => {
    expect(getDescription(39)).toEqual('叁拾玖');
  });
});
describe('40: 肆拾', () => {
  it('works', () => {
    expect(getDescription(40)).toEqual('肆拾');
  });
});
describe('50: 伍拾', () => {
  it('works', () => {
    expect(getDescription(50)).toEqual('伍拾');
  });
});
describe('60: 陆拾', () => {
  it('works', () => {
    expect(getDescription(60)).toEqual('陆拾');
  });
});
describe('70: 柒拾', () => {
  it('works', () => {
    expect(getDescription(70)).toEqual('柒拾');
  });
});
describe('80: 捌拾', () => {
  it('works', () => {
    expect(getDescription(80)).toEqual('捌拾');
  });
});
describe('88: 捌拾捌', () => {
  it('works', () => {
    expect(getDescription(88)).toEqual('捌拾捌');
  });
});
describe('90: 玖拾', () => {
  it('works', () => {
    expect(getDescription(90)).toEqual('玖拾');
  });
});
describe('100: 壹佰', () => {
  it('works', () => {
    expect(getDescription(100)).toEqual('壹佰');
  });
});
describe('101: 壹佰零壹', () => {
  it('works', () => {
    expect(getDescription(101)).toEqual('壹佰零壹');
  });
});
describe('111: 壹佰壹拾壹', () => {
  it('works', () => {
    expect(getDescription(111)).toEqual('壹佰壹拾壹');
  });
});
describe('200: 贰佰', () => {
  it('works', () => {
    expect(getDescription(200)).toEqual('贰佰');
  });
});
describe('300: 叁佰', () => {
  it('works', () => {
    expect(getDescription(300)).toEqual('叁佰');
  });
});
describe('400: 肆佰', () => {
  it('works', () => {
    expect(getDescription(400)).toEqual('肆佰');
  });
});
describe('500: 伍佰', () => {
  it('works', () => {
    expect(getDescription(500)).toEqual('伍佰');
  });
});
describe('600: 陆佰', () => {
  it('works', () => {
    expect(getDescription(600)).toEqual('陆佰');
  });
});
describe('700: 柒佰', () => {
  it('works', () => {
    expect(getDescription(700)).toEqual('柒佰');
  });
});
describe('800: 捌佰', () => {
  it('works', () => {
    expect(getDescription(800)).toEqual('捌佰');
  });
});
describe('823: 捌佰贰拾叁', () => {
  it('works', () => {
    expect(getDescription(823)).toEqual('捌佰贰拾叁');
  });
});
describe('900: 玖佰', () => {
  it('works', () => {
    expect(getDescription(900)).toEqual('玖佰');
  });
});
describe('1000: 壹仟', () => {
  it('works', () => {
    expect(getDescription(1000)).toEqual('壹仟');
  });
});
describe('2000: 贰仟', () => {
  it('works', () => {
    expect(getDescription(2000)).toEqual('贰仟');
  });
});
describe('3000: 叁仟', () => {
  it('works', () => {
    expect(getDescription(3000)).toEqual('叁仟');
  });
});
describe('4000: 肆仟', () => {
  it('works', () => {
    expect(getDescription(4000)).toEqual('肆仟');
  });
});
describe('5000: 伍仟', () => {
  it('works', () => {
    expect(getDescription(5000)).toEqual('伍仟');
  });
});
describe('6000: 陆仟', () => {
  it('works', () => {
    expect(getDescription(6000)).toEqual('陆仟');
  });
});
describe('7000: 柒仟', () => {
  it('works', () => {
    expect(getDescription(7000)).toEqual('柒仟');
  });
});
describe('8000: 捌仟', () => {
  it('works', () => {
    expect(getDescription(8000)).toEqual('捌仟');
  });
});
describe('8320: 捌仟叁佰贰拾', () => {
  it('works', () => {
    expect(getDescription(8320)).toEqual('捌仟叁佰贰拾');
  });
});
describe('8080: 捌仟零捌拾', () => {
  it('works', () => {
    expect(getDescription(8080)).toEqual('捌仟零捌拾');
  });
});
describe('8088: 捌仟零捌拾捌', () => {
  it('works', () => {
    expect(getDescription(8088)).toEqual('捌仟零捌拾捌');
  });
});
describe('8008: 捌仟零捌', () => {
  it('works', () => {
    expect(getDescription(8008)).toEqual('捌仟零捌');
  });
});
describe('9000: 玖仟', () => {
  it('works', () => {
    expect(getDescription(9000)).toEqual('玖仟');
  });
});
describe('90000: 玖万', () => {
  it('works', () => {
    expect(getDescription(90000)).toEqual('玖万');
  });
});
describe('90900: 玖万零玖佰', () => {
  it('works', () => {
    expect(getDescription(90900)).toEqual('玖万零玖佰');
  });
});
describe('90090: 玖万零玖拾', () => {
  it('works', () => {
    expect(getDescription(90090)).toEqual('玖万零玖拾');
  });
});
describe('90009: 玖万零玖', () => {
  it('works', () => {
    expect(getDescription(90009)).toEqual('玖万零玖');
  });
});
describe('99999: 玖万玖仟玖佰玖拾玖', () => {
  it('works', () => {
    expect(getDescription(99999)).toEqual('玖万玖仟玖佰玖拾玖');
  });
});
describe('900000: 玖拾万', () => {
  it('works', () => {
    expect(getDescription(900000)).toEqual('玖拾万');
  });
});
describe('909000: 玖拾万零玖仟', () => {
  it('works', () => {
    expect(getDescription(909000)).toEqual('玖拾万零玖仟');
  });
});
describe('9000000: 玖佰万', () => {
  it('works', () => {
    expect(getDescription(9000000)).toEqual('玖佰万');
  });
});
describe('90000000: 玖仟万', () => {
  it('works', () => {
    expect(getDescription(90000000)).toEqual('玖仟万');
  });
});

describe('800000000: 捌亿', () => {
  it('works', () => {
    expect(getDescription(800000000)).toEqual('捌亿');
  });
});
describe('8000000000: 捌拾亿', () => {
  it('works', () => {
    expect(getDescription(8000000000)).toEqual('捌拾亿');
  });
});
describe('80000000000: 捌佰亿', () => {
  it('works', () => {
    expect(getDescription(80000000000)).toEqual('捌佰亿');
  });
});
describe('80103009000: 捌佰零壹亿零叁佰万零玖仟', () => {
  it('works', () => {
    expect(getDescription(80103009000)).toEqual('捌佰零壹亿零叁佰万零玖仟');
  });
});
describe('800000000000: 捌仟亿', () => {
  it('works', () => {
    expect(getDescription(800000000000)).toEqual('捌仟亿');
  });
});
describe('888888888888: 捌仟捌佰捌拾捌亿捌仟捌佰捌拾捌万捌仟捌佰捌拾捌', () => {
  it('works', () => {
    expect(getDescription(888888888888)).toEqual(
      '捌仟捌佰捌拾捌亿捌仟捌佰捌拾捌万捌仟捌佰捌拾捌'
    );
  });
});
describe('800000000008: 捌仟亿零捌', () => {
  it('works', () => {
    expect(getDescription(800000000008)).toEqual('捌仟亿零捌');
  });
});
describe('800000000080: 捌仟亿零捌拾', () => {
  it('works', () => {
    expect(getDescription(800000000080)).toEqual('捌仟亿零捌拾');
  });
});
describe('800000000800: 捌仟亿零捌佰', () => {
  it('works', () => {
    expect(getDescription(800000000800)).toEqual('捌仟亿零捌佰');
  });
});
describe('800000000808: 捌仟亿零捌佰零捌', () => {
  it('works', () => {
    expect(getDescription(800000000808)).toEqual('捌仟亿零捌佰零捌');
  });
});
describe('800000008808: 捌仟亿零捌仟捌佰零捌', () => {
  it('works', () => {
    expect(getDescription(800000008808)).toEqual('捌仟亿零捌仟捌佰零捌');
  });
});
describe('800000080808: 捌仟亿零捌万零捌佰零捌', () => {
  it('works', () => {
    expect(getDescription(800000080808)).toEqual('捌仟亿零捌万零捌佰零捌');
  });
});
describe('800008080808: 捌仟亿零捌佰零捌万零捌佰零捌', () => {
  it('works', () => {
    expect(getDescription(800008080808)).toEqual(
      '捌仟亿零捌佰零捌万零捌佰零捌'
    );
  });
});
describe('800080080808: 捌仟亿零捌仟零捌万零捌佰零捌', () => {
  it('works', () => {
    expect(getDescription(800080080808)).toEqual(
      '捌仟亿零捌仟零捌万零捌佰零捌'
    );
  });
});
describe('800880080808: 捌仟零捌亿捌仟零捌万零捌佰零捌', () => {
  it('works', () => {
    expect(getDescription(800880080808)).toEqual(
      '捌仟零捌亿捌仟零捌万零捌佰零捌'
    );
  });
});
describe('808080080808: 捌仟零捌拾亿零捌仟零捌万零捌佰零捌', () => {
  it('works', () => {
    expect(getDescription(808080080808)).toEqual(
      '捌仟零捌拾亿零捌仟零捌万零捌佰零捌'
    );
  });
});

describe('90009: 玖万零玖元整', () => {
  it('works', () => {
    expect(getDescription(90009, true)).toEqual('玖万零玖元整');
  });
});

describe('90009.09: 玖万零玖元玖分', () => {
  it('works', () => {
    expect(getDescription(90009.09, true)).toEqual('玖万零玖元玖分');
  });
});

describe('90009.9: 玖万零玖元玖角', () => {
  it('works', () => {
    expect(getDescription(90009.9, true)).toEqual('玖万零玖元玖角');
  });
});

describe('90009.98: 玖万零玖元玖角捌分', () => {
  it('works', () => {
    expect(getDescription(90009.98, true)).toEqual('玖万零玖元玖角捌分');
  });
});

describe('90009.989: 玖万零玖元玖角捌分', () => {
  it('works', () => {
    expect(getDescription(90009.989, true)).toEqual('玖万零玖元玖角捌分');
  });
});

const formatPoints = (num: number): string[] => {
  const points = getPoints(num, 3);
  return [`${points}`];
};

describe('90009.989: 玖万零玖989', () => {
  it('works', () => {
    expect(getDescription(90009.989, formatPoints)).toEqual('玖万零玖989');
  });
});
