
chrome.runtime.onMessage.addListener(
    function(arg, sender, sendResponse) {

    var browser = window.chrome || window.browser;
    var downloading = browser.downloads.download({
        url: arg
        //saveAs: true
        //filename: this is a good option
    });
    console.log(downloading)
    // downloading.then(onStartedDownload, onFailed);
    // sendResponse({farewell: "goodbye", url: img_url});
    //    chrome.downloads.download({
    //    url: img_url,
    // //    filename: saveas,
    //   saveAs: false
    //   });
    Promise.resolve("").then(result => sendResponse('image grabbed successfully'));
    return true;
     });
  