import React from 'react';
import CheckIcon from 'assets/icons/CheckIcon';
import styled from 'styled-components/macro';

interface isModify {
  isModify: boolean;
  isChecked: boolean;
  checkRemove: () => void;
}

const Post: React.FC<isModify> = ({ isModify, isChecked, checkRemove }) => {
  return (
    <Section onClick={() => checkRemove()} isModify={isModify}>
      {isModify && isChecked ? (
        <ModifySection>
          <CheckBox />
        </ModifySection>
      ) : null}
      <DateBox>
        <YearMonth>2021.10</YearMonth>
        <Day>08</Day>
      </DateBox>
      <ContextBox>
        <InfoBox>
          <Title>제목입니다.</Title>
          <div>
            <Mood>기분입니다.</Mood>
            <Weather>날씨입니다.</Weather>
          </div>
        </InfoBox>
        <Context>
          본문입니다.본문입니다.본문입니다.본문입니다.본문입니다.본문입니다.본문입니다.본문입니다.본문입니다.본문입니다.본문입니다.본문입니다.
        </Context>
      </ContextBox>
    </Section>
  );
};

export default Post;

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
