import React, {Component} from 'react';
import ReadingProgress from 'react-reading-progress';
import styled from 'styled-components';

class StyledReadingProgress extends Component {
  render() {
    // MEMO: Target context class is 'target-el'
    return (
      <Wrapper>
        <RP />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  position: fixed;
  z-index: 999;
`;

const RP = styled(ReadingProgress)`
  position: relative !important; // MEMO: ライブラリ元に対して上書き
  background: red !important; // TODO: なぜ動いているかわからない。。。red指定しているが、無効化されてグローバルに定義してるカラーが利用される。この１行を抜くとデフォルト値のカラーになってしまう。
`;

export default StyledReadingProgress;
