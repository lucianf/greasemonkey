// ==UserScript==
// @name Bitfinex prompt login
// @namespace lucianf/greasemonkey
// @version 1.0
// @description Auto prompt login box
// @author Lucian Fratila
// @include https://www.bitfinex.com/
// @downloadURL https://raw.githubusercontent.com/lucianf/greasemonkey/master/bitfinex.com.js
// ==/UserScript==

var pathname = window.location.pathname;

var prepareScreen = function () {
    loadStandardLoginForm();
};

if (pathname == "/") {
    window.setTimeout(prepareScreen, 1000);
}
