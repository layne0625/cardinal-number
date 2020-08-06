import getDescription, { getLessThanHundred } from '../src/languages/en';
import { getPoints } from '../src/utils';

describe('0: empty', () => {
  it('works', () => {
    expect(getDescription(0)).toEqual('');
  });
});
describe('1: one', () => {
  it('works', () => {
    expect(getDescription(1)).toEqual('one');
  });
});
describe('2: two', () => {
  it('works', () => {
    expect(getDescription(2)).toEqual('two');
  });
});
describe('3: three', () => {
  it('works', () => {
    expect(getDescription(3)).toEqual('three');
  });
});
describe('4: four', () => {
  it('works', () => {
    expect(getDescription(4)).toEqual('four');
  });
});
describe('5: five', () => {
  it('works', () => {
    expect(getDescription(5)).toEqual('five');
  });
});
describe('6: six', () => {
  it('works', () => {
    expect(getDescription(6)).toEqual('six');
  });
});
describe('7: seven', () => {
  it('works', () => {
    expect(getDescription(7)).toEqual('seven');
  });
});
describe('8: eight', () => {
  it('works', () => {
    expect(getDescription(8)).toEqual('eight');
  });
});
describe('9: nine', () => {
  it('works', () => {
    expect(getDescription(9)).toEqual('nine');
  });
});
describe('10: ten', () => {
  it('works', () => {
    expect(getDescription(10)).toEqual('ten');
  });
});
describe('11: eleven', () => {
  it('works', () => {
    expect(getDescription(11)).toEqual('eleven');
  });
});
describe('12: twelve', () => {
  it('works', () => {
    expect(getDescription(12)).toEqual('twelve');
  });
});
describe('13: thirteen', () => {
  it('works', () => {
    expect(getDescription(13)).toEqual('thirteen');
  });
});
describe('14: fourteen', () => {
  it('works', () => {
    expect(getDescription(14)).toEqual('fourteen');
  });
});
describe('15: fifteen', () => {
  it('works', () => {
    expect(getDescription(15)).toEqual('fifteen');
  });
});
describe('16: sixteen', () => {
  it('works', () => {
    expect(getDescription(16)).toEqual('sixteen');
  });
});
describe('17: seventeen', () => {
  it('works', () => {
    expect(getDescription(17)).toEqual('seventeen');
  });
});
describe('18: eighteen', () => {
  it('works', () => {
    expect(getDescription(18)).toEqual('eighteen');
  });
});
describe('19: nineteen', () => {
  it('works', () => {
    expect(getDescription(19)).toEqual('nineteen');
  });
});

describe('20:twenty', () => {
  it('works', () => {
    expect(getDescription(20)).toEqual('twenty');
  });
});

describe('21:twenty-one', () => {
  it('works', () => {
    expect(getDescription(21)).toEqual('twenty-one');
  });
});

describe('30:thirty', () => {
  it('works', () => {
    expect(getDescription(30)).toEqual('thirty');
  });
});

describe('32:thirty-two', () => {
  it('works', () => {
    expect(getDescription(32)).toEqual('thirty-two');
  });
});

describe('40:forty', () => {
  it('works', () => {
    expect(getDescription(40)).toEqual('forty');
  });
});

describe('46:forty-six', () => {
  it('works', () => {
    expect(getDescription(46)).toEqual('forty-six');
  });
});

describe('50:fifty', () => {
  it('works', () => {
    expect(getDescription(50)).toEqual('fifty');
  });
});

describe('55:fifty-five', () => {
  it('works', () => {
    expect(getDescription(55)).toEqual('fifty-five');
  });
});

describe('60:sixty', () => {
  it('works', () => {
    expect(getDescription(60)).toEqual('sixty');
  });
});

describe('66:sixty-six', () => {
  it('works', () => {
    expect(getDescription(66)).toEqual('sixty-six');
  });
});

describe('70:seventy', () => {
  it('works', () => {
    expect(getDescription(70)).toEqual('seventy');
  });
});

describe('73:seventy-three', () => {
  it('works', () => {
    expect(getDescription(73)).toEqual('seventy-three');
  });
});

describe('80:eighty', () => {
  it('works', () => {
    expect(getDescription(80)).toEqual('eighty');
  });
});

describe('88:eighty-eight', () => {
  it('works', () => {
    expect(getDescription(88)).toEqual('eighty-eight');
  });
});

describe('90:ninety', () => {
  it('works', () => {
    expect(getDescription(90)).toEqual('ninety');
  });
});

describe('96:ninety-six', () => {
  it('works', () => {
    expect(getDescription(96)).toEqual('ninety-six');
  });
});

describe('10**2: one hundred', () => {
  it('works', () => {
    expect(getDescription(10 ** 2)).toEqual('one hundred');
  });
});

describe('101: one hundred and one', () => {
  it('works', () => {
    expect(getDescription(101)).toEqual('one hundred and one');
  });
});
describe('10**3: one thousand', () => {
  it('works', () => {
    expect(getDescription(10 ** 3)).toEqual('one thousand');
  });
});
describe('1100: one thousand one hundred', () => {
  it('works', () => {
    expect(getDescription(1100)).toEqual('one thousand one hundred');
  });
});
describe('1023: one thousand and twenty-three ', () => {
  it('works', () => {
    expect(getDescription(1023)).toEqual('one thousand and twenty-three');
  });
});
describe('10**6: one million', () => {
  it('works', () => {
    expect(getDescription(10 ** 6)).toEqual('one million');
  });
});
describe('2345678: two million three hundred and forty-five thousand six hundred and seventy-eight', () => {
  it('works', () => {
    expect(getDescription(2345678)).toEqual(
      'two million three hundred and forty-five thousand six hundred and seventy-eight'
    );
  });
});

describe('2300608: two million three hundred thousand six hundred and eight', () => {
  it('works', () => {
    expect(getDescription(2300608)).toEqual(
      'two million three hundred thousand six hundred and eight'
    );
  });
});
describe('10**9: one billion', () => {
  it('works', () => {
    expect(getDescription(10 ** 9)).toEqual('one billion');
  });
});

describe('1234123455: one billion two hundred and thirty-four million one hundred and twenty-three thousand four hundred and fifty-five', () => {
  it('works', () => {
    expect(getDescription(1234123455)).toEqual(
      'one billion two hundred and thirty-four million one hundred and twenty-three thousand four hundred and fifty-five'
    );
  });
});

describe('102100210103: one hundred and two billion one hundred million two hundred and ten thousand one hundred and three', () => {
  it('works', () => {
    expect(getDescription(102100210103)).toEqual(
      'one hundred and two billion one hundred million two hundred and ten thousand one hundred and three'
    );
  });
});

describe('102100210103: one hundred and two billion one hundred million two hundred and ten thousand one hundred and three only', () => {
  it('works', () => {
    expect(getDescription(102100210103, true)).toEqual(
      'one hundred and two billion one hundred million two hundred and ten thousand one hundred and three only'
    );
  });
});

describe('2345678.20: two million three hundred and forty-five thousand six hundred and seventy-eight and cents twenty only', () => {
  it('works', () => {
    expect(getDescription(2345678.2, true)).toEqual(
      'two million three hundred and forty-five thousand six hundred and seventy-eight and cents twenty only'
    );
  });
});
describe('2345678.02: two million three hundred and forty-five thousand six hundred and seventy-eight and cents two only', () => {
  it('works', () => {
    expect(getDescription(2345678.02, true)).toEqual(
      'two million three hundred and forty-five thousand six hundred and seventy-eight and cents two only'
    );
  });
});

const formatPoints = (num: number): string[] => {
  const points = getPoints(num);
  let pointsList = getLessThanHundred(points);
  if (num !== 0) {
    return ['and point', ...pointsList, 'only'];
  }
  return ['only'];
};

describe('2345678.02: two million three hundred and forty-five thousand six hundred and seventy-eight and point two only', () => {
  it('works', () => {
    expect(getDescription(2345678.02, formatPoints)).toEqual(
      'two million three hundred and forty-five thousand six hundred and seventy-eight and point two only'
    );
  });
});
