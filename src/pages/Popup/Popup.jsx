import React, { useState, useRef } from 'react';
import Button from '@components/Button';
import { EVENT } from '@config/events';
import * as Styled from './styled';

const Popup = () => {
  const [status, setStatus] = useState(null);
  const $input = useRef(null);

  const onTypeGoogle = async () => {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    chrome.runtime.sendMessage(
      {
        event: EVENT.TEST.TYPE_GOOGLE_SEARCH,
        value: $input.current.value,
        tab,
      },
      (response) => {
        console.log('res', response);
        setStatus(response);
      }
    );
  };

  const onStartRecord = () => {
    chrome.runtime.sendMessage(
      {
        event: EVENT.POPUP.START_CAPTURE_SCREEN,
      },
      (response) => {
        console.log('res', response);
        setStatus(response);
      }
    );
  };

  return (
    <Styled.Main>
      <input ref={$input} />
      <Button text="Type Google Search" onClick={onTypeGoogle} />
      <Button text="Start Record" onClick={onStartRecord} />
      <p>{status}</p>
    </Styled.Main>
  );
};

export default Popup;
