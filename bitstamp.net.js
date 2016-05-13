// ==UserScript==
// @name Bitstamp menus
// @namespace lucianf/greasemonkey
// @include https://www.bitstamp.net/*
// @version 1.0
// @downloadURL https://raw.githubusercontent.com/lucianf/greasemonkey/master/bitstamp.net.js
// ==/UserScript==

var pathname = window.location.pathname;
var links;

if (pathname.substring(0, 14) == "/market/order/") {

  // hide top 7 orders
  $("div h3:contains('Top 7')").parent('div').hide();

  // enable advanced orders
  $('div#buy_advanced_area').show();
  $('a#buy_advanced').hide();
  $('div#sell_advanced_area').show();
  $('a#sell_advanced').hide();

  $(function() {
    $(window).bind('load', function() {
      // fill in buy/sell all
      $('a#buy_all').click();
      $('a#sell_all').click();
    });

    //$("#id_price").blur(function() {
    //  $('a#buy_all').click();
    //});
  });

  links = [
            ["/account/balance/", "Account Balance"],
            ["/account/transactions/", "Transactions"],
            ["/account/orders/", "Open Orders"],
            ["/account/sms_notifications/", "SMS Price Alerts"]
          ];
}

if (['/account/orders/', '/account/transactions/', '/account/balance/', '/account/sms_notifications/'].indexOf(pathname) >= 0) {
  links = [
            ["/market/order/instant/", "Instant Order"],
            ["/market/order/", "Limit Order"],
            ["/market/order/stop/", "Stop Order"]
          ];

  $("li:has('a'):contains('Verify Account')").remove();
  $("li:has('a'):contains('Debit Card')").remove();
}

if (links) {
  var toAppend=$()

  $.each(links, function(i, e) {
    link = links[i][0];
    title = links[i][1];
    toAppend = toAppend.add(
      $('<li>').append(
        $('<a>').attr('href',link).attr('class', 'template_toogle_class').attr('id', 'template_text').append(title+"\n<span> </span>")
    ))
  });

  $('ul[class="default_menu"]').append(toAppend);
}
