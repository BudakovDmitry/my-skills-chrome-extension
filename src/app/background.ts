function checkAuth(sendResponse: any) {
  chrome.cookies.get({ url: 'http://localhost:3000/', name: 'accessToken' }, function(cookie) {
    if (cookie) {
      chrome.storage.local.set({ authorized: true }, function() {
        sendResponse({ authorized: true });
      });
    } else {
      chrome.storage.local.set({ authorized: false }, function() {
        sendResponse({ authorized: false });
      });
    }
  });
  return true;
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  console.log('sender', sender)
  if (message.type === 'CHECK_AUTH') {
    return checkAuth(sendResponse);
  }
  return true;
});


chrome.runtime.onInstalled.addListener(function() {
  console.log('Extension installed');
});
