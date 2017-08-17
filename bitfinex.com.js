// ==UserScript==
// @name Bitfinex misc
// @namespace lucianf/greasemonkey
// @version 1.3.1
// @description Auto login and interface cleanup
// @author Lucian Fratila
// @match https://www.bitfinex.com/*
// @downloadURL https://raw.githubusercontent.com/lucianf/greasemonkey/master/bitfinex.com.js
// ==/UserScript==

var pathname = window.location.pathname;

var prepareScreenLogin = function () {
    loadStandardLoginForm();
    window.setTimeout(submitLogin, 500);
};

var submitLogin = function () {
    $('button.btn-green').click();
};

var prepareScreenTrading = function () {
    // remove tradingview branding
    $("iframe[id^='tradingview']").contents().find(".onchart-tv-logo.wrapper.expanded").hide();

    // hide drawing tools
    //$("iframe[id^='tradingview']").contents().find(".tv-side-toolbar").hide();

    // rewrite some messages
    I18n.alerts.price="[PAIR] move [UPDOWN] [PRICE]"; // shorten move alert
};

console.log(pathname);

if (pathname == "/") {
    window.setTimeout(prepareScreenLogin, 1000);
}

if (pathname.startsWith("/trading")) {
    window.setTimeout(prepareScreenTrading, 5000);
}
