import React from 'react';
import styled from 'styled-components/macro';

const Post: React.FC = () => {
  return (
    <Section>
      <Title>안녕하세요</Title>
      <Context></Context>
      <InfoBox>
        <Date></Date>
        <InfoDetailBox>
          <Mood></Mood>
          <Weather></Weather>
        </InfoDetailBox>
      </InfoBox>
    </Section>
  );
};

export default Post;

const Section = styled.section``;

const Title = styled.h1``;

const Context = styled.div``;

const InfoBox = styled.div``;

const Date = styled.div``;

const InfoDetailBox = styled.div``;

const Mood = styled.div``;

const Weather = styled.div``;
