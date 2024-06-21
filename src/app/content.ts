export const checkAuthContent = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const tabId = tabs[0].id;
    console.log('tabId', tabId)
    if (tabId) {
      chrome.tabs.sendMessage(tabId, { type: 'CHECK_AUTH' }, (response) => {
        console.log('response', response)
      });

    } else {
      console.error('Tab ID is undefined');
    }
  });
}
