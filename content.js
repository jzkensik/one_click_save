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

document.addEventListener('mouseover', function(f) {
    document.addEventListener('keypress', function(e) {
        // e = e || window.event;
        // var target = e.target;
        var pressed = true
        console.log(pressed)
        if(pressed == true) {
            console.log(f.target.baseURI + '    ' + e.key);
            setTimeout(pressed = false, 1000);
        }
    })
})