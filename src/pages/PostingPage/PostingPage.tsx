import React, { useState } from 'react';
import { useHistory } from 'react-router';

import DatePickerWrapper from 'components/DatePickerWrapper';
import { TWeather, TMood, typeNote } from 'types/note';
import { formatPosting } from 'utils/contants';
import styled from 'styled-components/macro';

const PostingPage: React.FC = () => {
  const history = useHistory();
  const [form, setForm] = useState<typeNote>(formatPosting);

  const handleForm = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ): void => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleDate = (selectedDate: Date) => {
    setForm({ ...form, date: selectedDate });
  };

  const canclePosting = () => {
    setForm(formatPosting);
    history.push('/');
  };

  const { title, context } = form;
  return (
    <Container>
      <Wrap>
        <Form>
          <TitleInput onChange={handleForm} name='title' value={title} />
          <DetailBox>
            <DatePickerWrapper handleDate={handleDate} />
            <MoodSelect onChange={handleForm} name='mood'>
              <option value=''>기분 선택</option>
              {Object.entries(TMood).map(([key, value]) => {
                return (
                  <option key={key} value={key}>
                    {value}
                  </option>
                );
              })}
            </MoodSelect>
            <WeatherSelect onChange={handleForm} name='weather'>
              <option value=''>날씨 선택</option>
              {Object.entries(TWeather).map(([key, value]) => {
                return (
                  <option key={key} value={key}>
                    {value}
                  </option>
                );
              })}
            </WeatherSelect>
          </DetailBox>
          <ContextArea onChange={handleForm} name='context' value={context} />
        </Form>
        <BtnBox>
          <SubmitBtn>확인</SubmitBtn>
          <CancleBtn onClick={() => canclePosting()}>취소</CancleBtn>
        </BtnBox>
      </Wrap>
    </Container>
  );
};

export default PostingPage;

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

const Form = styled.form`
  ${({ theme }) => theme.flexSet('center', 'center', 'column')};
  width: 100%;
  border-radius: 5px;
  border: 1px solid #e2e2e2;
  background-color: white;
`;

const TitleInput = styled.input.attrs({
  placeholder: '제목을 적어주세요',
})`
  width: 100%;
  padding: 10px;
  font-size: 30px;
`;

const DetailBox = styled.div`
  ${({ theme }) => theme.flexSet('flex-end')};
  width: 100%;
  padding: 10px;
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;

  .react-datepicker-wrapper {
    width: initial;
  }
`;

const MoodSelect = styled.select`
  border: 1px solide #e2e2e2;
`;

const WeatherSelect = styled(MoodSelect)``;

const ContextArea = styled.textarea.attrs({
  placeholder: '내용을 적어주세요',
})`
  width: 100%;
  height: 300px;
  min-height: 300px;
  padding: 10px;
  font-size: 20px;
  border: 0px;
  resize: none;

  &:focus-visible {
    outline: none;
  }
`;

const BtnBox = styled.div`
  ${({ theme }) => theme.flexSet('flex-end')};
  margin: 10px 0;
`;

const SubmitBtn = styled.button`
  min-width: 80px;
  height: 30px;
  padding: 10px;
  margin-left: 10px;
  border-radius: 5px;
  background-color: green;
`;

const CancleBtn = styled(SubmitBtn)`
  background-color: red;
`;
