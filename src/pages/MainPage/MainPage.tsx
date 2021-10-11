import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadingStatus } from 'types';

import { RootState } from 'store/reducers';
import { showModal } from 'store/actions/modals';
import { getNoteSagaAction } from 'store/actions/serverApi';

import Modal from 'components/Modal';
import RemoveConfirmaition from 'components/RemoveConfirmaition';
import NoteForm from 'components/NoteForm';
import styled from 'styled-components/macro';

const MainPage: React.FC = () => {
  const dispatch = useDispatch();

  const { isModalOpen } = useSelector((state: RootState) => state.modals);
  const { data } = useSelector((state: RootState) => state.serverApi);
  const { loading } = useSelector(
    (state: RootState): loadingStatus => state.serverStatus
  );

  const [isModify, setIsModify] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  const initializeCheck = (status: boolean) => {
    setIsChecked(status);
  };

  useEffect(() => {
    dispatch(getNoteSagaAction());
  }, [getNoteSagaAction, dispatch]);

  return (
    <Container>
      {isModalOpen && (
        <Modal initializeCheck={initializeCheck}>
          <RemoveConfirmaition />
        </Modal>
      )}
      <Wrap>
        <BtnBox>
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
            <DeleteBtn onClick={() => dispatch(showModal('delete'))}>
              삭제
            </DeleteBtn>
          )}
          <NewNoteBtn>새로 추가</NewNoteBtn>
        </BtnBox>
        {loading !== undefined && loading ? (
          <div style={{ fontSize: '100px' }}>로딩중...</div>
        ) : (
          <NoteForm
            isModify={isModify}
            isChecked={isChecked}
            checkRemove={toggleCheck}
            noteData={data}
          />
        )}
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

const BtnBox = styled.div`
  ${({ theme }) => theme.flexSet('flex-end')};
  margin-bottom: 20px;
`;

const DeleteBtn = styled.button`
  min-width: 80px;
  height: 30px;
  padding: 10px;
  margin-left: 10px;
  border-radius: 5px;
  background-color: green;
`;

const ModifyBtn = styled(DeleteBtn)<{ isModify: boolean }>`
  min-width: 80px;
  height: 30px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${({ isModify }) => (isModify ? 'blue' : 'red')};
`;

const NewNoteBtn = styled(DeleteBtn)`
  background-color: blueviolet;
`;
