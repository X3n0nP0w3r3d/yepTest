chrome.runtime.onInstalled.addListener(function(){
    chrome.storage.sync.set({color: '#00ff00'}, function(){
        console.log ('The color is green');
    });
chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'twitch.tv'},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});