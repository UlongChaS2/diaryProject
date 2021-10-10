import React from 'react';
import Form from 'components/Form';
import styled from 'styled-components';

const App: React.FC = () => {
  return (
    <Container>
      <Wrap>
        <Form />
      </Wrap>
    </Container>
  );
};

export default App;

const Container = styled.div`
  ${({ theme }) => theme.flexSet()}
`;

const Wrap = styled.div`
  width: 90%;
  max-width: 1060px;
`;
