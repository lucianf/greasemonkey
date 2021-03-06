// ==UserScript==
// @name FastBanking defaults
// @namespace lucianf/greasemonkey
// @version 1.4
// @description Fast fwd through initial nav
// @author Lucian Fratila
// @match https://fastbanking.bancpost.ro/*
// @require https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// @downloadURL https://raw.githubusercontent.com/lucianf/greasemonkey/master/fastbanking.js
// @grant GM_setValue
// @grant GM_getValue
// ==/UserScript==

var pathname = window.location.pathname;
//console.log("Path: "+pathname+" ff="+GM_getValue("fbjumpflag"));

if (pathname == "/iBankWeb/login.jsp") {
    // flag for jumping straight into token auth
    GM_setValue("fbjumpflag", 1);
    return;
}

/* apparently no longer valid
if (pathname == "/iBankWeb/index.jsp" && GM_getValue("fbjumpflag") == 1) {
    // choose account
    $('form[name="choose"]').submit();
    return;
}
*/

if (pathname == "/iBankWeb/home/index.do" && GM_getValue("fbjumpflag") == 1) {
    // coming straight from login, trigger token auth
    //GM_deleteValue("fbjumpflag");
    GM_setValue("fbjumpflag", 0);
    //window.location.href = "https://fastbanking.bancpost.ro/iBankWeb/accounts/ListBalanceAccounts.do";
    $('form[name="choose"]').submit();
    return;
}

//if (pathname == "/iBankWeb/auth/tokenselect.do" || pathname == "/iBankWeb/auth/verifytokenresp.do") {
if ($('form[name="response"]').length == 1) {
    var TwoFactorAuthentication = (function() {
        var r = {
                initFormSubmit: function() {
                    var codeInput = $('.keyboardInput'),
                        tfauthForm = $('form[name="response"]');
                    tfauthForm.on('submit', function() {
                        tfauthForm.find('input[type=submit]').prop('disabled', true);
                    });
                    codeInput.on('input', function() {
                        var text = $(this).val();
                        if ($.isNumeric(text) && text.length === 6) {
                            tfauthForm.trigger('submit');
                            codeInput.off('input');
                        }
                    });
                    codeInput.trigger('focus');
                }
            },
            u = {
                initialize: function() {
                    r.initFormSubmit();
                }
            };
        return u;
    }());
    $(TwoFactorAuthentication.initialize);
}


if ($('form[name="token"]').length == 1) {
  // select default token and go to auth
  $('input[value="VSST78682471|null"]').attr('checked', 'checked');
  $('form[name="token"]').submit();
}

if (pathname == "/iBankWeb/exchange/sell.do") {
  if ($('select[name="currency"]').size() == 1) {
    $('input[name="tostep2"]').trigger('click');
  }
}

if (pathname == "/iBankWeb/exchange/sellWizard1.do") {
  $('input[value="1200001208783666"]').attr('checked', 'checked');
  $('input[name="tostep3"]').trigger('click');
}

if (pathname == "/iBankWeb/exchange/sellWizard2.do") {
  $('input[value="1200000172133922"]').attr('checked', 'checked');
  $('input[name="tostep4"]').trigger('click');
}
