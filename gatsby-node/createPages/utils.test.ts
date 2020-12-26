import {calcPaginationNum} from './utils'

describe("func: calcPaginationNum", ()=> {
  test("", () => {
    expect(calcPaginationNum(5, 5)).toBe(1);
    expect(calcPaginationNum(5, 3)).toBe(2);
    expect(calcPaginationNum(5, 2)).toBe(3);
    expect(calcPaginationNum(5, 1)).toBe(5);
  })
  
})
