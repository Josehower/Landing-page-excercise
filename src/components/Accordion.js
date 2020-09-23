import React, { useState } from 'react';
import { downArrow } from '../OtherModules/DownArrow';
import styled from 'styled-components';
const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: white;
  border: none;
  h2 {
    grid-column: span 2;
  }

  h3 {
    font-size: 20.8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  svg {
    width: 20px;
    height: 20px;
    margin-left: 20px;
  }

  .triangle {
    transform: scale(0.65);
    fill: rgba(242, 242, 242, 0.5);
  }

  p {
    ${(props) => (props.isOpen ? '' : 'display: none; color: transparent')}
  }
`;
const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(isOpen ? false : true);

  return (
    <Button onClick={toggle} isOpen={isOpen}>
      <h3>Is there a list of supported apps? {downArrow}</h3>
      <p>
        Mouseless comes with exercises for Xcode, Webflow, Code, Ulysses,
        Trello, Transmit, Todoist, Things, Superhuman, Sublime Text, Spotify,
        Slack, Sketch, Safari, Photoshop, Notion, macOS, iA Writer, Google Docs,
        Gmail, Firefox, Finder, Figma, Evernote, Google Chrome, Bear, Airtable,
        Adobe XD. <br /> However, the menu bar dropdown supports every app that
        is currently open.
      </p>
    </Button>
  );
};

export default Accordion;
