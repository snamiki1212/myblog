/**
 * readme: https://stackoverflow.com/questions/19269545/how-to-get-n-no-elements-randomly-from-an-array
 */
export const fetchRandoms = (arr: any[], n = 1): any => {
  const result = new Array(n);
  let len = arr.length;
  const taken = new Array(len);

  if (n > len) return arr;
  while (n--) {
    const x = Math.floor(Math.random() * len); // random index
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
};

// Pagination によるページ数の、最終ページ数を取得
export const calcPaginationNum = (pageLength: number, postLengthPerPage: number): number =>
  Math.ceil(pageLength / postLengthPerPage);
