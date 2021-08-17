import {addTargetBlank} from './html';

describe(addTargetBlank.name, () => {
  it('can work.', () => {
    const naiveHtml = `<a href="http://snamiki1212.com" rel="nofollow">URL</a>`;
    const expected = `<a rel="noopener noreferrer" target="_blank" href="http://snamiki1212.com" rel="nofollow">URL</a>`;
    expect(addTargetBlank(naiveHtml)).toEqual(expected);
  });
});
