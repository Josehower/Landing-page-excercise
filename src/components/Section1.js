import React from 'react';
import Timer from './Timer';
import { marginStyles, colors } from '../GlobalStyles';
import styled from 'styled-components';

const Section = styled.section`
  background-color: ${colors.yellow};
  color: ${colors.grey};
  font-weight: 300;
  font-size: 1.35rem;
  line-height: 1.4;
  height: calc(100vh - 112px);
  min-height: 608px;
  h1 {
    color: black;
    font-size: 2rem;
    line-height: 1.2;
    max-width: 1056px;
    text-align: center;
    font-size: 64px;
    padding-top: 76px;
  }

  h1 + p {
    max-width: 1056px;
    text-align: center;
    font-size: 21.6px;
    max-width: 768px;
    margin: 16px auto;
  }
`;

const MarginsWrapper = styled.div`
  ${marginStyles}
`;

const Section1 = () => {
  return (
    <Section>
      <MarginsWrapper>
        <h1>Unleash your keyboard’s superpower</h1>
        <p>
          Wading through shortcuts, and it’s too hard to remember any? Get those
          keystrokes ingrained in your muscle memory for good.
        </p>
        <Timer />
      </MarginsWrapper>
    </Section>
  );
};

export default Section1;
