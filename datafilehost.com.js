// ==UserScript==
// @name       DataFileHost Uncheck Download Manager
// @namespace  techietrash/datafilehost
// @version    0.3
// @description  Unchecks Download Manager then downloads file.
// @match    http://www.datafilehost.com/d/*
// @downloadURL https://raw.githubusercontent.com/lucianf/greasemonkey/master/datafilehost.com.js
// @copyright  techietrash (CC BY-NC 3.0) 2013, Creative Commons Attribution-NonCommercial 3.0 Unported 
// ==/UserScript==

var uncheckIt = function () {
  //console.log(">>> Unchecking Download Manager...");
  document.cbf.cb.checked = false;
  dm();
  //console.log(">>> Downloading File...");
  window.location = document.querySelector('#dl a').href;
  //console.log('>>> Finished');
};
window.setTimeout(uncheckIt, 900);
