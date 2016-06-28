// ==UserScript==
// @name BitcoinWisdom Ad Bar
// @namespace lucianf/greasemonkey
// @version 1.2.1
// @description Hides the ad bar
// @author Lucian Fratila
// @match https://bitcoinwisdom.com/*
// @require https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// @downloadURL https://raw.githubusercontent.com/lucianf/greasemonkey/master/bitcoinwisdom.com.js
// ==/UserScript==

$("div#leftbar_outer").hide();
$("div.difficulty").hide();
$("div#footer_outer").hide();
