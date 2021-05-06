var img_url = '';
document.addEventListener('mouseover', simulateClick);
function simulateClick(e) {
      //var browser=window.browser||window.chrome;
      if(e.shiftKey) {
        if (e.target.currentSrc) {
            chrome.runtime.sendMessage(e.target.currentSrc, (response) => {
                console.log('response below')
                console.log(response);
                //there's some solid link manipulation you can do to get the proper images.
                //try different combinations that get you from thumbnail to fullres.
                //there's also a thing called imagus, that could help
                //actually it seems like this is working with PNGs. Needs more testing
              });
            // var downloading = browser.downloads.download({
            //     url: e.target.currentSrc,
            //     saveAs: true
            //     //filename: this is a good option
            // });
            // downloading.then(onStartedDownload, onFailed);
        }
      }

}
document.addEventListener("click", checkTab);
function checkTab() {
  if (document.getElementById('locationChange')) {
    document.getElementById('locationChange').addEventListener("click", changeLocation);
  }
}
function changeLocation() {
 document.querySelector('#locationChange').innerText = 'Hide';
 var confirm = document.createElement("h3");
 //confirm.innerHTML = "done!";      
 confirm.innerHTML = document.getElementById('new_dest').value
 document.body.appendChild(confirm);  
//  setInterval()
//  document.body.removeChild(confirm);
}

// document.getElementsByTagName('img').forEach(item => {
//     item.addEventListener('keypress', function(f) {
//         item.addEventListener('mouseover', function(e) {
//             e = e || window.event;
//             // var target = e.target;
//             console.log(f.target + '    ' + e.target + '  gottem');
//         })
//     })
// })