
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
    console.log('down here')
    console.log(arg)
    // sendResponse({farewell: "goodbye", url: img_url});
    //    chrome.downloads.download({
    //    url: img_url,
    // //    filename: saveas,
    //   saveAs: false
    //   });
     });
  