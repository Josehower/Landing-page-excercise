import React from 'react';
import styled from 'styled-components';
import { colors } from '../GlobalStyles';

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  background-color: rgba(18, 18, 18, 0.05);
  width: 416px;
  height: 70.19px;
  font-size: 12.8px;
  margin: 50px auto 0;
  border-radius: 19px;
  padding: 9.6px;

  div {
    text-align: center;
    font-weight: 700;

    span {
      display: block;
      color: black;
      font-size: 19.2px;
      font-weight: 600;
    }
  }
`;

const TimerButton = styled.button`
  height: 51px;
  font-size: 19.2px;
  font-weight: 700;
  padding: 16px 1em;
  border-radius: 12px;
  border: solid transparent 3px;
  transition: all 0.2s;
  line-height: 18px;

  &:hover {
    border: solid black 3px;
  }

  span {
    display: inline;
  }
`;

const SpanPromo = styled.span`
  ${(props) => (props.cheap ? 'color: #28c941' : '')}
  ${(props) => (props.expensive ? 'text-decoration: line-through;' : '')}
`;

const ItalicP = styled.p`
  font-style: italic;
  color: ${colors.grey};
  font-size: 14.8px;
  text-align: center;
  font-weight: 600;
  line-height: 20.16px;
  margin-top: 12px;
`;

const Timer = () => {
  return (
    <>
      <Div>
        <div>
          <span>00</span> Days
        </div>
        <div>
          <span>08</span> Hrs
        </div>
        <div>
          <span>58</span> Mins
        </div>
        <div>
          <span>28</span> Secs
        </div>
        <TimerButton>
          Buy for
          <SpanPromo expensive> $20 </SpanPromo>
          <SpanPromo cheap> $15 </SpanPromo>
        </TimerButton>
      </Div>
      <ItalicP>25% off today · 30-Day Money-Back Guarantee</ItalicP>
    </>
  );
};

export default Timer;
