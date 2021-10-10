import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from 'store/actions/modals';
import styled from 'styled-components';

interface Initialize {
  initializeCheck: (status: boolean) => void;
}

const Modal: React.FC<Initialize> = ({ initializeCheck, children }) => {
  const dispatch = useDispatch();

  const initializeSelect = () => {
    dispatch(closeModal());
    initializeCheck(false);
  };

  return (
    <Container>
      <Box>
        {children}
        <AcceptButton></AcceptButton>
        <CancleButton onClick={() => initializeSelect()}></CancleButton>
      </Box>
    </Container>
  );
};

export default Modal;

const Container = styled.div`
  ${({ theme }) => theme.flexSet()};
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #00000050;
  z-index: 1;
`;

const Box = styled.div`
  width: 350px;
  height: 250px;
  border: 1px solide #e2e2e2;
  border-radius: 5px;
  background-color: white;
`;

const AcceptButton = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 5px;
  background-color: black;
`;

const CancleButton = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 5px;
  background-color: red;
`;
