// document.addEventListener('click', function(e) {
//     e = e || window.event;
//     var target = e.target;
//     document.addEventListener('keydown', function(f) {
//         console.log(e.target.currentSrc)
//         alert(e.target.currentSrc + '    ' + f.key);
//     })
//     function download(data, filename, type) {
//         var file = new Blob([data], {type: type});
//             var a = document.createElement("a"),
//                     url = URL.createObjectURL(file);
//             a.href = url;
//             a.download = filename;
//             document.body.appendChild(a);
//             a.click();
//             setTimeout(function() {
//                 document.body.removeChild(a);
//                 window.URL.revokeObjectURL(url);  
//             }, 0); 
//     }
// })

// document.addEventListener('click', function() {
//     console.log(document.getElementsByTagName('img')[0])
// })
// for(item of document.getElementsByTagName('img')) {
//     item.addEventListener('keypress', function(f) {
//         item.addEventListener('mouseover', function(e) {
//             e = e || window.event;
//             // var target = e.target;
//             console.log(f.target + '    ' + e.target + '  gottem');
//         })
//     })
// }
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
    // document.addEventListener('mouseover', function(e) {
    //     // if(f.key == '`') {
    //     //     console.log(e.target.currentSrc)
    //     //     console.log(f.target + '  ' + f.key + '  gotten')
    //     // }
    // })

// document.addEventListener('click', function() {
//     console.log(typeof document.getElementsByTagName('img'))
//     console.log(document.getElementsByTagName('img'))
//     // document.getElementsByTagName('img').forEach(item => {
//     //     console.log(item)
//     // })
// })
// document.getElementsByTagName('img').forEach(item => {
//     item.addEventListener('keypress', function(f) {
//         item.addEventListener('mouseover', function(e) {
//             e = e || window.event;
//             // var target = e.target;
//             console.log(f.target + '    ' + e.target + '  gottem');
//         })
//     })
// })