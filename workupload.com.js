// ==UserScript==
// @name         Workupload Ad-Block Removal
// @namespace    http://tampermonkey.net/
// @version      0.8
// @description  Removes the sad crying girl that blocks workupload.com when ad-block is active
// @author       Critter
// @match        http://tampermonkey.net/index.php?version=4.0&ext=dhdg&updated=true
// @grant        none
// @include http://workupload.com/*
// @include http://www.workupload.com/*
// @include https://workupload.com/*
// @downloadURL https://raw.githubusercontent.com/lucianf/greasemonkey/master/workupload.com.js
// ==/UserScript==



(function() {
    'use strict';

    if($('#download').is ('.donotshow'))
    {
        setTimeout(fixShit, 5000);
    }
    function fixShit()
    {
        $('#download').attr("id","downloadz");
        $('#downloadz').removeClass('donotshow');
        $('#sad').hide();
    }
})();