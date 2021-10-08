import React from 'react';
import Post from 'components/Post';
import styled from 'styled-components';

const MainPage: React.FC = () => {
  return (
    <Container>
      <Wrap>
        <Post />
      </Wrap>
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  ${({ theme }) => theme.flexSet('center', 'flex-start')};
  height: 100vh;
  background-color: #d1f5c850;
`;

const Wrap = styled.div`
  width: 90%;
  max-width: 1060px;
  margin-top: 100px;
`;
