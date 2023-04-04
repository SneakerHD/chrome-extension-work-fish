(() => {
  


  console.log('22222222222')

  chrome.action.onClicked.addListener(function (tab) {
    if (chrome.runtime.openOptionsPage) {
      chrome.runtime.openOptionsPage();
    } else {
      window.open(chrome.runtime.getURL('options.html'));
    }
  });
})()