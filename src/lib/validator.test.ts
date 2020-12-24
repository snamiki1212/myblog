import {isInternalPageLink, isAffiLink} from './validator';

const HTTPS_URL = 'https://google.com';
const HTTP_URL = 'http://wwwa.cao.go.jp/notice/20191101notice.html';

describe('func:isInternalPageLink', () => {
  test('yes', () => {
    const _true = isInternalPageLink('./test-page');
    expect(_true).toBeTruthy();
  });

  test('no', () => {
    const _false1 = isInternalPageLink(HTTPS_URL);
    const _false2 = isInternalPageLink(HTTP_URL);
    const _false3 = isInternalPageLink('test.jpg'); // media

    expect(_false1).toBeFalsy();
    expect(_false2).toBeFalsy();
    expect(_false3).toBeFalsy();
  });
});

// 一部のアフィリンクのURLスタートが "//" スタートのがある。
describe('func:isAffiLink', () => {
  test('yes', () => {
    const affiLink = '//ad.jp.ap.valuecommerce.com/servlet/gifbanner';
    expect(isAffiLink(affiLink)).toBeTruthy();
  });

  test('no', () => {
    const _false1 = isAffiLink(HTTPS_URL);
    const _false2 = isAffiLink(HTTP_URL);

    expect(_false1).toBeFalsy();
    expect(_false2).toBeFalsy();
  });
});
