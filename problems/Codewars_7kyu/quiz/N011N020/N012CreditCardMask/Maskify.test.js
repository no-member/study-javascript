const Maskify = require('./Maskify');

describe('4글자 이하인 경우', () => {
  test('"1"은 "1"를 반환', () => {
    expect(Maskify.maskify('1')).toBe('1');
  });

  test('"shin"은 "shin"를 반환', () => {
    expect(Maskify.maskify('shin')).toBe('shin');
  });
});

describe('4글자 초과인 경우', () => {
  test('"Spooky"은 "##ooky"를 반환', () => {
    expect(Maskify.maskify('Spooky')).toBe('##ooky');
  });

  test('"Nananananananananananananananana Batman!"은 "####################################man!', () => {
    expect(Maskify.maskify('Nananananananananananananananana Batman!')).toBe('####################################man!');
  });
});
