import {getLastPaginationNum} from './utils'

describe("func: getLastPaginationNum", ()=> {
  test("", () => {
    expect(getLastPaginationNum(5, 5)).toBe(1);
    expect(getLastPaginationNum(5, 3)).toBe(2);
    expect(getLastPaginationNum(5, 2)).toBe(3);
    expect(getLastPaginationNum(5, 1)).toBe(5);
  })
  
})
