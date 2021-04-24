document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target,
        text = target.textContent || target.innerText;
    function download(data, filename, type) {
        var file = new Blob([data], {type: type});
            var a = document.createElement("a"),
                    url = URL.createObjectURL(file);
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            setTimeout(function() {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);  
            }, 0); 
    }
    alert(e.target.currentSrc);
})