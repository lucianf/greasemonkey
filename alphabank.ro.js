// ==UserScript==
// @name Alpha Bank defaults
// @namespace lucianf/greasemonkey
// @version 1.2
// @description Dismisses initial popup and focuses OTP field
// @author Lucian Fratila
// @include https://secure*.alphabank.ro/*
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
    window.setTimeout(prepareScreen, 1000);
}
