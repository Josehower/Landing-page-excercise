import React, { useState } from 'react';
import { colors } from '../GlobalStyles';
import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  border: none;
  outline: none;
  text-align: left;

  h2 {
    grid-column: span 2;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    cursor: pointer;
  }

  h3 {
    font-size: 20.8px;
    width: 421px;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  .triangle {
    transform: scale(0.65);
    fill: rgba(242, 242, 242, 0.5);
  }

  p {
    display: block;
    overflow: hidden;
    max-height: 400px;
    text-align: left;
    ${(props) => (props.isOpen ? '' : `max-height: 0`)};
    transition: all 0.4s;
    color: ${colors.whiteLight};
  }
`;
const Accordion = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(isOpen ? false : true);

  return (
    <Button onClick={toggle} isOpen={isOpen}>
      {props.children}
    </Button>
  );
};

export default Accordion;
