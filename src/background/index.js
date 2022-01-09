import handleBackground from './handle';

chrome.runtime.onMessage.addListener(
  ({ event, tab, ...rest }, _sender, sendResponse) => {
    const functionHandleEvent = handleBackground[event] || null;
    if (null) {
      console.error('Not found `handle` of event', event);
    } else {
      functionHandleEvent({
        event,
        tab,
        rest,
        sendResponse,
      });
    }
  }
);
