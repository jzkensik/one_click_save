
chrome.runtime.onMessage.addListener(
    function(arg, sender, sendResponse) {
    //   var args=arg.collection;
    //   for (i in args){
    //   var img_url=args[i];
    //   try{
    //    saveas=img_url.replace(/[^a-zA-Z0-9]/g,'-');
    //   }
    //   catch (problem){
    //   }
    function onStartedDownload(id) {
        console.log(`Started downloading: ${id}`);
      }
      
      function onFailed(error) {
        console.log(`Download failed: ${error}`);
      }
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
    //Promise.resolve("").then(result => sendResponse(arg));
    return true;
     });
  