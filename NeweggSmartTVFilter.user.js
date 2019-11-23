// ==UserScript==
// @name     Newegg Smart TV Filter
// @version  1
// @grant    none
// @match 	 *://*.newegg.com/*
// @require	 https://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

let oldJQueryContains = jQuery.expr[':'].contains;
jQuery.expr[':'].contains = function(a, i, m) {
  return jQuery(a).text().toUpperCase()
      .indexOf(m[3].toUpperCase()) >= 0;
};

if($("li.is-current:contains('TV')").length > 0){
	$(".item-container a:contains('smart')").parent().parent().replaceWith("<div class=\"item-container\">smart</div>");  
}

jQuery.expr[':'].contains = oldJQueryContains;

