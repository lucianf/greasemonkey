// ==UserScript==
// @name MyVisionMail AutoLogin
// @namespace lucianf/greasemonkey
// @include https://myvisionmail.org/
// @require https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// @version 1.0
// @downloadURL https://raw.githubusercontent.com/lucianf/greasemonkey/master/myvisionmail.org.js
// ==/UserScript==

(function() {
    var pathname = window.location.pathname;

    if (pathname == "/" || pathname == "/names.nsf?Login") {  
        setTimeout(submitForm, 2000);
    }

    function submitForm() {
        $("form[name='_DominoForm']").submit();
    }
})();