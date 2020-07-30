import getCardinalDescription, {
  getHundreds2Thousands,
  getZero2Hundreds,
  getThousands2Millons,
} from '../src/languages/es';

describe('0: cero', () => {
  it('works', () => {
    expect(getCardinalDescription(0)).toEqual('');
  });
});
describe('1: uno', () => {
  it('works', () => {
    expect(getCardinalDescription(1)).toEqual('uno');
  });
});
describe('2: dos', () => {
  it('works', () => {
    expect(getCardinalDescription(2)).toEqual('dos');
  });
});
describe('3: tres', () => {
  it('works', () => {
    expect(getCardinalDescription(3)).toEqual('tres');
  });
});
describe('4: cuatro', () => {
  it('works', () => {
    expect(getCardinalDescription(4)).toEqual('cuatro');
  });
});
describe('5: cinco', () => {
  it('works', () => {
    expect(getCardinalDescription(5)).toEqual('cinco');
  });
});
describe('6: seis', () => {
  it('works', () => {
    expect(getCardinalDescription(6)).toEqual('seis');
  });
});
describe('7: siete', () => {
  it('works', () => {
    expect(getCardinalDescription(7)).toEqual('siete');
  });
});
describe('8: ocho', () => {
  it('works', () => {
    expect(getCardinalDescription(8)).toEqual('ocho');
  });
});
describe('9: nueve', () => {
  it('works', () => {
    expect(getCardinalDescription(9)).toEqual('nueve');
  });
});
describe('10: diez', () => {
  it('works', () => {
    expect(getCardinalDescription(10)).toEqual('diez');
  });
});
describe('11: once', () => {
  it('works', () => {
    expect(getCardinalDescription(11)).toEqual('once');
  });
});
describe('12: doce', () => {
  it('works', () => {
    expect(getCardinalDescription(12)).toEqual('doce');
  });
});
describe('13: trece', () => {
  it('works', () => {
    expect(getCardinalDescription(13)).toEqual('trece');
  });
});
describe('14: catorce', () => {
  it('works', () => {
    expect(getCardinalDescription(14)).toEqual('catorce');
  });
});
describe('15: quince', () => {
  it('works', () => {
    expect(getCardinalDescription(15)).toEqual('quince');
  });
});
describe('16: dieciséis', () => {
  it('works', () => {
    expect(getCardinalDescription(16)).toEqual('dieciséis');
  });
});
describe('17: diecisiete', () => {
  it('works', () => {
    expect(getCardinalDescription(17)).toEqual('diecisiete');
  });
});
describe('18: dieciocho', () => {
  it('works', () => {
    expect(getCardinalDescription(18)).toEqual('dieciocho');
  });
});
describe('19: diecinueve', () => {
  it('works', () => {
    expect(getCardinalDescription(19)).toEqual('diecinueve');
  });
});
describe('20: veinte', () => {
  it('works', () => {
    expect(getCardinalDescription(20)).toEqual('veinte');
  });
});
describe('21: veintiuno', () => {
  it('works', () => {
    expect(getCardinalDescription(21)).toEqual('veintiuno');
  });
});
describe('22: veintidós', () => {
  it('works', () => {
    expect(getCardinalDescription(22)).toEqual('veintidós');
  });
});
describe('23: veintitrés', () => {
  it('works', () => {
    expect(getCardinalDescription(23)).toEqual('veintitrés');
  });
});
describe('24: veinticuatro', () => {
  it('works', () => {
    expect(getCardinalDescription(24)).toEqual('veinticuatro');
  });
});
describe('25: veinticinco', () => {
  it('works', () => {
    expect(getCardinalDescription(25)).toEqual('veinticinco');
  });
});
describe('26: veintiséis', () => {
  it('works', () => {
    expect(getCardinalDescription(26)).toEqual('veintiséis');
  });
});
describe('27: veintisiete', () => {
  it('works', () => {
    expect(getCardinalDescription(27)).toEqual('veintisiete');
  });
});
describe('28: veintiocho', () => {
  it('works', () => {
    expect(getCardinalDescription(28)).toEqual('veintiocho');
  });
});
describe('29: veintinueve', () => {
  it('works', () => {
    expect(getCardinalDescription(29)).toEqual('veintinueve');
  });
});
describe('30: treinta', () => {
  it('works', () => {
    expect(getCardinalDescription(30)).toEqual('treinta');
  });
});
describe('40: cuarenta', () => {
  it('works', () => {
    expect(getCardinalDescription(40)).toEqual('cuarenta');
  });
});
describe('50: cincuenta', () => {
  it('works', () => {
    expect(getCardinalDescription(50)).toEqual('cincuenta');
  });
});
describe('60: sesenta', () => {
  it('works', () => {
    expect(getCardinalDescription(60)).toEqual('sesenta');
  });
});
describe('70: setenta', () => {
  it('works', () => {
    expect(getCardinalDescription(70)).toEqual('setenta');
  });
});
describe('80: ochenta', () => {
  it('works', () => {
    expect(getCardinalDescription(80)).toEqual('ochenta');
  });
});
describe('90: noventa', () => {
  it('works', () => {
    expect(getCardinalDescription(90)).toEqual('noventa');
  });
});
describe('100: cien', () => {
  it('works', () => {
    expect(getCardinalDescription(100)).toEqual('cien');
  });
});
describe('200: doscientos', () => {
  it('works', () => {
    expect(getCardinalDescription(200)).toEqual('doscientos');
  });
});
describe('300: trescientos', () => {
  it('works', () => {
    expect(getCardinalDescription(300)).toEqual('trescientos');
  });
});
describe('400: cuatrocientos', () => {
  it('works', () => {
    expect(getCardinalDescription(400)).toEqual('cuatrocientos');
  });
});
describe('500: quinientos', () => {
  it('works', () => {
    expect(getCardinalDescription(500)).toEqual('quinientos');
  });
});
describe('600: seiscientos', () => {
  it('works', () => {
    expect(getCardinalDescription(600)).toEqual('seiscientos');
  });
});
describe('700: setecientos', () => {
  it('works', () => {
    expect(getCardinalDescription(700)).toEqual('setecientos');
  });
});
describe('800: ochocientos', () => {
  it('works', () => {
    expect(getCardinalDescription(800)).toEqual('ochocientos');
  });
});
describe('900: novecientos', () => {
  it('works', () => {
    expect(getCardinalDescription(900)).toEqual('novecientos');
  });
});

describe('1000: mil', () => {
  it('works', () => {
    expect(getCardinalDescription(1000)).toEqual('mil');
  });
});
describe('1000000: un millón', () => {
  it('works', () => {
    expect(getCardinalDescription(1000000)).toEqual('un millón');
  });
});
describe('2000000: dos millones', () => {
  it('works', () => {
    expect(getCardinalDescription(2000000)).toEqual('dos millones');
  });
});
describe('100000100: cien millones cien', () => {
  it('works', () => {
    expect(getCardinalDescription(100000100)).toEqual('cien millones cien');
  });
});
describe('222000:	doscientos veintidós mil', () => {
  it('works', () => {
    expect(getCardinalDescription(222000)).toEqual('doscientos veintidós mil');
  });
});
describe('1225:	mil doscientos veinticinco', () => {
  it('works', () => {
    expect(getCardinalDescription(1225)).toEqual('mil doscientos veinticinco');
  });
});
describe('999888:	novecientos noventa y nueve mil ochocientos ochenta y ocho', () => {
  it('works', () => {
    expect(getCardinalDescription(999888)).toEqual(
      'novecientos noventa y nueve mil ochocientos ochenta y ocho'
    );
  });
});
describe('32:	treinta y dos', () => {
  it('works', () => {
    expect(getCardinalDescription(32)).toEqual('treinta y dos');
  });
});
describe('33:	treinta y tres', () => {
  it('works', () => {
    expect(getCardinalDescription(33)).toEqual('treinta y tres');
  });
});
describe('99:	noventa y nueve', () => {
  it('works', () => {
    expect(getCardinalDescription(99)).toEqual('noventa y nueve');
  });
});
describe('102:	ciento dos', () => {
  it('works', () => {
    expect(getCardinalDescription(102)).toEqual('ciento dos');
  });
});
describe('199: ciento noventa y nueve', () => {
  it('works', () => {
    expect(getCardinalDescription(199)).toEqual('ciento noventa y nueve');
  });
});
describe('7133442: siete millones ciento treinta y tres mil cuatrocientos cuarenta y dos', () => {
  it('works', () => {
    expect(getCardinalDescription(7133442)).toEqual(
      'siete millones ciento treinta y tres mil cuatrocientos cuarenta y dos'
    );
  });
});

describe('102: empty array', () => {
  it('works', () => {
    expect(getZero2Hundreds(102)).toEqual([]);
  });
});

describe('1002: empty array', () => {
  it('works', () => {
    expect(getHundreds2Thousands(1002)).toEqual([]);
  });
});

describe('1000002: empty array', () => {
  it('works', () => {
    expect(getThousands2Millons(10000002)).toEqual([]);
  });
});

describe('not a number', () => {
  it('works', () => {
    expect(getCardinalDescription('aaaa')).toEqual('');
  });
});
