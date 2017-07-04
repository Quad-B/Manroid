var webview = document.querySelector('webview');

webview.addEventListener('did-finish-load', function(){
    webview.insertCSS('body{background:#000}');
});