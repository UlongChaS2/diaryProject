import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'store/reducers';
import { modalType } from 'types';

import { showModal } from 'store/actions/modals';
import { getNoteSagaAction } from 'store/actions/serverApi';

import Modal from 'components/Modal';
import RemoveConfirmaition from 'components/RemoveConfirmaition';
import Note from 'components/Note';
import styled from 'styled-components/macro';

const MainPage: React.FC = () => {
  const dispatch = useDispatch();

  const modal = useSelector<RootState, modalType>((state) => state.modals);
  const serverState2 = useSelector<RootState>((state) => state.serverStatus);

  console.log(serverState2);
  const [isModify, setIsModify] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const checkRemove = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    dispatch(getNoteSagaAction());
  }, [getNoteSagaAction]);

  return (
    <Container>
      {modal.isModalOpen && (
        <Modal checkRemove={checkRemove}>
          <RemoveConfirmaition />
        </Modal>
      )}
      <Wrap>
        <ModifyBtn
          onClick={() => {
            setIsModify(!isModify);
            setIsChecked(false);
          }}
          isModify={isModify}
        >
          {isModify ? '선택 중단' : '선택'}
        </ModifyBtn>
        {isModify && (
          <DeleteBtn
            onClick={() => dispatch(showModal('delete'))}
            isModify={isModify}
          >
            삭제
          </DeleteBtn>
        )}

        <Note
          isModify={isModify}
          isChecked={isChecked}
          checkRemove={checkRemove}
        />
      </Wrap>
    </Container>
  );
};

export default React.memo(MainPage);

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

const ModifyBtn = styled.button<{ isModify: boolean }>`
  min-width: 80px;
  height: 30px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${({ isModify }) => (isModify ? 'blue' : 'red')};
  float: right;
`;

const DeleteBtn = styled(ModifyBtn)`
  background-color: green;
`;
