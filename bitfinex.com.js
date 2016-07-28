// ==UserScript==
// @name Bitfinex auto login
// @namespace lucianf/greasemonkey
// @version 1.1
// @description Auto login
// @author Lucian Fratila
// @include https://www.bitfinex.com/
// @downloadURL https://raw.githubusercontent.com/lucianf/greasemonkey/master/bitfinex.com.js
// ==/UserScript==

var pathname = window.location.pathname;

var prepareScreen = function () {
    loadStandardLoginForm();
    window.setTimeout(submitLogin, 500);
};

var submitLogin = function () {
    $('button.btn-green').click();
}

if (pathname == "/") {
    window.setTimeout(prepareScreen, 1000);
}
