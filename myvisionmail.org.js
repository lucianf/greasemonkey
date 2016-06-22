// ==UserScript==
// @name MyVisionMail AutoLogin
// @namespace lucianf/greasemonkey
// @version 1.1
// @description Auto login
// @author Lucian Fratila
// @match https://myvisionmail.org/
// @require https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
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