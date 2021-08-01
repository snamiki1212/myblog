import {useConfigMySocialLinks} from './config';

const fn = useConfigMySocialLinks;

describe(useConfigMySocialLinks.name, () => {
  it('can work by taking github.', () => {
    expect(fn('github')).not.toBe('');
  });

  it('can work by taking twitter.', () => {
    expect(fn('twitter')).not.toBe('');
  });

  it('can work by taking linkedin.', () => {
    expect(fn('linkedin')).not.toBe('');
  });

  it('cannot work by taking invalid arg.', () => {
    expect(fn('abcd' as any)).toBe('');
  });
});
