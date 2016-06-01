// ==UserScript==
// @name Alpha Bank defaults
// @namespace lucianf/greasemonkey
// @include https://secure*.alphabank.ro/*
// @version 1.0
// @downloadURL https://raw.githubusercontent.com/lucianf/greasemonkey/master/alphabank.ro.js
// ==/UserScript==

var pathname = window.location.pathname;

var prepareScreen = function () {
    //$('.ui-state-default').click();
    $("#warning").dialog("close");

    //$('input[name="fldOTP"]').focus();
    document.frmLogon.fldOTP.focus();
};

if (pathname == "/corporate/CorpOTPLoginLangRom.jsp") {
    console.log("setfun");
    window.setTimeout(prepareScreen, 1000);
}
