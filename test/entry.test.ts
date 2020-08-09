import convert, { locale } from '../src';

describe('not a number', () => {
  it('works', () => {
    expect(convert(Number('aaaa'))).toEqual('');
  });
});

describe('Exceeds the maximum', () => {
  it('works', () => {
    expect(() => convert(10 ** 12)).toThrowError(/maximum/);
  });
});

describe('Exceeds the maximum', () => {
  it('works: twelve', () => {
    locale('en');
    expect(convert(12, false)).toEqual('twelve');
  });
});

describe('Exceeds the maximum', () => {
  it('works: doce', () => {
    locale('es');
    expect(convert(12, false)).toEqual('doce');
  });
});

describe('Exceeds the maximum', () => {
  it('works: 壹拾贰', () => {
    locale('zh');
    expect(convert(12)).toEqual('壹拾贰元整');
  });
});
