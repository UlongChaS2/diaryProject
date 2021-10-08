import React from 'react';
import styled from 'styled-components';

const MainPage: React.FC = () => {
  return (
    <Container>
      <Wrap>안녕하세요</Wrap>
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  ${({ theme }) => theme.flexSet()}
`;

const Wrap = styled.div`
  width: 90%;
  max-width: 1060px;
`;
