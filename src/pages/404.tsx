import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';

const ErrorPage: React.FC = () => {
  // TODO:
  return (
    <Container>
      <div>Sorry, something error happend.</div>
      <br />
      <Link to="/">Goto Top</Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

export default ErrorPage;
