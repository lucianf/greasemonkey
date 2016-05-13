// ==UserScript==
// @name FastBanking defaults
// @namespace lucianf/greasemonkey/fastbanking
// @include https://fastbanking.bancpost.ro/*
// @require https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// @version 0.4
// @downloadURL https://raw.githubusercontent.com/lucianf/greasemonkey/master/fastbanking.js
// ==/UserScript==

var pathname = window.location.pathname;

if (pathname == "/iBankWeb/login.jsp") {
  // flag for jumping straight into token auth
  GM_setValue("fbjumpflag", 1);
  return;
}

if (pathname == "/iBankWeb/home/index.do" && GM_getValue("fbjumpflag") == 1) {
  // coming straight from login, trigger token auth
  //GM_deleteValue("fbjumpflag");
  GM_setValue("fbjumpflag", 0);
  window.location.href = "https://fastbanking.bancpost.ro/iBankWeb/accounts/ListBalanceAccounts.do";
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
