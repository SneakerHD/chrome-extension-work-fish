// // import React from 'react';
// // import ReactDOM from 'react-dom';
(() => {
  var $form = $('#form')
  $form.on('submit', function(e) {
    if (chrome.runtime.openOptionsPage) {
      chrome.runtime.openOptionsPage();
    } else {
      window.open(chrome.runtime.getURL('options.html'));
    }
  })
})()
