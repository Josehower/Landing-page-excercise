import React, { useState, useCallback, useEffect } from 'react';
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
  cursor: pointer;

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
  const [timer, setTimer] = useState('');
  const date = new Date();
  const targetDate =
    +new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() + 1,
      date.getHours() + 4,
    ) + 18000000;

  const getDifference = useCallback(() => {
    const timeUntilBirtDay = targetDate - Date.now();
    const milliseconds = timeUntilBirtDay;
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    // const days = hours -(Math.floor(hours / 24) * 24);
    setTimer([
      days,
      hours - days * 24,
      minutes - hours * 60,
      seconds - minutes * 60,
    ]);
  }, [targetDate]);

  useEffect(() => {
    getDifference();
    setInterval(() => getDifference(), 1000);
  }, [getDifference]);

  return (
    <>
      <Div>
        <div>
          <span>{timer?.[0] ? timer?.[0] : 0}</span> Days
        </div>
        <div>
          <span>{timer?.[1] ? timer?.[1] : 0}</span> Hrs
        </div>
        <div>
          <span>{timer?.[2] ? timer?.[2] : 0}</span> Mins
        </div>
        <div>
          <span>{timer?.[3] ? timer?.[3] : 0}</span> Secs
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
