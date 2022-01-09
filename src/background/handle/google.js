import { EVENT } from '@config/events';

function typeGoogleSearch(value) {
  document.querySelector('.gLFyf.gsfi').value = value;
}

function execute({ _event, tab, rest, sendResponse }) {
  const callbackTypeGG = (result) => {
    sendResponse(result);
  };
  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id },
      func: typeGoogleSearch,
      args: [_get(rest, 'value', 'dathacky')],
    },
    callbackTypeGG
  );
}

const moduleExport = {
  [EVENT.TEST.TYPE_GOOGLE_SEARCH]: execute,
};

export default moduleExport;
