import React from 'react';

interface Props {
  url: string;
  size?: number;
}

export const HatenaShareButton = ({url, size}: Props): JSX.Element => {
  const host = new URL(url).host;
  const pathName = new URL(url).pathname;

  // 下記のページにて、code をジェネレート
  // https://b.hatena.ne.jp/guide/bbutton
  return (
    <>
      <a
        href={`https://b.hatena.ne.jp/entry/s/${host}${pathName}`}
        className="hatena-bookmark-button"
        data-hatena-bookmark-layout="touch-counter"
        title="このエントリーをはてなブックマークに追加"
      >
        <img
          src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png"
          alt="このエントリーをはてなブックマークに追加"
          width={size || 36}
          height={size || 36}
          style={{borderRadius: '100%'}}
        />
      </a>
      <script
        type="text/javascript"
        src="https://b.st-hatena.com/js/bookmark_button.js"
        charSet="utf-8"
        async={true}
      ></script>
    </>
  );
};
