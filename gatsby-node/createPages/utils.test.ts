import {getLastPaginationNum, fetchRandoms} from './utils';

describe('func: getLastPaginationNum', () => {
  test('', () => {
    expect(getLastPaginationNum(5, 5)).toBe(1);
    expect(getLastPaginationNum(5, 3)).toBe(2);
    expect(getLastPaginationNum(5, 2)).toBe(3);
    expect(getLastPaginationNum(5, 1)).toBe(5);
  });
});

describe('func: fetchRandoms', () => {
  const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  test('', () => {
    expect(
      Array(5).some(() => {
        return fetchRandoms(list, 1) !== fetchRandoms(list, 1);
      })
    ).toBeTruthy;
  });
});
