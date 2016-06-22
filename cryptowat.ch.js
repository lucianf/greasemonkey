// ==UserScript==
// @name Cryptowatch Free trial
// @namespace lucianf/greasemonkey
// @version 1.2
// @description Hides trial section
// @author Lucian Fratila
// @match https://cryptowat.ch/*
// @downloadURL https://raw.githubusercontent.com/lucianf/greasemonkey/master/cryptowat.ch.js
// ==/UserScript==

$("div#trading-area-overlay").hide();
