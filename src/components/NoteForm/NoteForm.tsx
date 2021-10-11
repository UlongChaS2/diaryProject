import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import { typeNotes } from 'types';
import CheckIcon from 'assets/icons/CheckIcon';
import styled from 'styled-components/macro';

interface TNoteForm {
  noteData: typeNotes;
  isModify: boolean;
  isChecked: boolean;
  checkRemove: () => void;
}

const NoteForm: React.FC<TNoteForm> = ({
  noteData,
  isModify,
  isChecked,
  checkRemove,
}) => {
  const [notes, setNotes] = useState<typeNotes>();

  useEffect(() => {
    setNotes(noteData);
  }, []);

  return (
    <Wrap>
      {notes &&
        notes.map(({ id, context, title, weather, date, mood }) => {
          return (
            <Section key={id} onClick={() => checkRemove()} isModify={isModify}>
              {isModify && isChecked ? (
                <ModifySection>
                  <CheckBox />
                </ModifySection>
              ) : null}
              <DateBox>
                <YearMonth>{date}</YearMonth>
                <Day>08</Day>
              </DateBox>
              <ContextBox>
                <InfoBox>
                  <Title>{title}</Title>
                  <div>
                    <Mood>{mood}</Mood>
                    <Weather>{weather}</Weather>
                  </div>
                </InfoBox>
                <Context>{context}</Context>
              </ContextBox>
            </Section>
          );
        })}
    </Wrap>
  );
};

export default NoteForm;

const Wrap = styled.div`
  ${({ theme }) => theme.flexSet('space-between')};
`;

const Section = styled.section<{ isModify: boolean }>`
  ${({ theme }) => theme.flexSet()};
  position: relative;
  width: calc((100% - 20px) / 2);
  border-radius: 5px;
  background-color: #abdeb1;
  padding: 12px;

  &:hover {
    background-color: ${({ isModify }) => isModify && '#6ca973'};
  }

  &:nth-child(2n) {
    margin: 0px;
  }
`;

const ModifySection = styled.div`
  ${({ theme }) => theme.flexSet()};
  position: absolute;
  width: calc((100% - 20px) / 2);
  width: 100%;
  height: 100%;
  background-color: #eeeeee50;
  border-radius: 5px;
`;

const CheckBox = styled(CheckIcon)`
  width: 60px;
  height: 60px;
  background-color: #41af41;
  border-radius: 5px;
  padding: 10px;
`;

const DateBox = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'column')};
  padding: 10px;
  border-radius: 5px;
  background-color: white;
`;

const YearMonth = styled.div`
  font-size: 14px;
`;

const Day = styled.div`
  font-size: 30px;
`;

const ContextBox = styled.section`
  ${({ theme }) => theme.flexSet('center', 'center', 'column')};
  padding: 10px 10px 10px 22px;
`;

const Title = styled.h1``;

const InfoBox = styled.div`
  ${({ theme }) => theme.flexSet('space-between')};
  width: 100%;
`;

const Mood = styled.span``;

const Weather = styled.span``;

const Context = styled.div`
  padding-top: 10px;
`;
