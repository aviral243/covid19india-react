(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[1],{584:function(t,e,r){"use strict";r.d(e,"a",(function(){return L}));var n=r(3),a=r(2);function i(t){Object(a.a)(1,arguments);var e=Object(n.a)(t);return!isNaN(e)}var o=r(45),c=r(28);function u(t,e){for(var r=t<0?"-":"",n=Math.abs(t).toString();n.length<e;)n="0"+n;return r+n}var s={y:function(t,e){var r=t.getUTCFullYear(),n=r>0?r:1-r;return u("yy"===e?n%100:n,e.length)},M:function(t,e){var r=t.getUTCMonth();return"M"===e?String(r+1):u(r+1,2)},d:function(t,e){return u(t.getUTCDate(),e.length)},a:function(t,e){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return r.toUpperCase();case"aaaaa":return r[0];case"aaaa":default:return"am"===r?"a.m.":"p.m."}},h:function(t,e){return u(t.getUTCHours()%12||12,e.length)},H:function(t,e){return u(t.getUTCHours(),e.length)},m:function(t,e){return u(t.getUTCMinutes(),e.length)},s:function(t,e){return u(t.getUTCSeconds(),e.length)},S:function(t,e){var r=e.length,n=t.getUTCMilliseconds();return u(Math.floor(n*Math.pow(10,r-3)),e.length)}};var d=r(55),f=r(51),h=r(54),l=r(27),g="midnight",w="noon",m="morning",b="afternoon",v="evening",x="night";function y(t,e){var r=t>0?"-":"+",n=Math.abs(t),a=Math.floor(n/60),i=n%60;if(0===i)return r+String(a);var o=e||"";return r+String(a)+o+u(i,2)}function T(t,e){return t%60===0?(t>0?"-":"+")+u(Math.abs(t)/60,2):M(t,e)}function M(t,e){var r=e||"",n=t>0?"-":"+",a=Math.abs(t);return n+u(Math.floor(a/60),2)+r+u(a%60,2)}var O={G:function(t,e,r){var n=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});case"GGGGG":return r.era(n,{width:"narrow"});case"GGGG":default:return r.era(n,{width:"wide"})}},y:function(t,e,r){if("yo"===e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return r.ordinalNumber(a,{unit:"year"})}return s.y(t,e)},Y:function(t,e,r,n){var a=Object(l.a)(t,n),i=a>0?a:1-a;return"YY"===e?u(i%100,2):"Yo"===e?r.ordinalNumber(i,{unit:"year"}):u(i,e.length)},R:function(t,e){return u(Object(f.a)(t),e.length)},u:function(t,e){return u(t.getUTCFullYear(),e.length)},Q:function(t,e,r){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(n);case"QQ":return u(n,2);case"Qo":return r.ordinalNumber(n,{unit:"quarter"});case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},q:function(t,e,r){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(n);case"qq":return u(n,2);case"qo":return r.ordinalNumber(n,{unit:"quarter"});case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},M:function(t,e,r){var n=t.getUTCMonth();switch(e){case"M":case"MM":return s.M(t,e);case"Mo":return r.ordinalNumber(n+1,{unit:"month"});case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},L:function(t,e,r){var n=t.getUTCMonth();switch(e){case"L":return String(n+1);case"LL":return u(n+1,2);case"Lo":return r.ordinalNumber(n+1,{unit:"month"});case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},w:function(t,e,r,n){var a=Object(h.a)(t,n);return"wo"===e?r.ordinalNumber(a,{unit:"week"}):u(a,e.length)},I:function(t,e,r){var n=Object(d.a)(t);return"Io"===e?r.ordinalNumber(n,{unit:"week"}):u(n,e.length)},d:function(t,e,r){return"do"===e?r.ordinalNumber(t.getUTCDate(),{unit:"date"}):s.d(t,e)},D:function(t,e,r){var i=function(t){Object(a.a)(1,arguments);var e=Object(n.a)(t),r=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var i=e.getTime(),o=r-i;return Math.floor(o/864e5)+1}(t);return"Do"===e?r.ordinalNumber(i,{unit:"dayOfYear"}):u(i,e.length)},E:function(t,e,r){var n=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},e:function(t,e,r,n){var a=t.getUTCDay(),i=(a-n.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return u(i,2);case"eo":return r.ordinalNumber(i,{unit:"day"});case"eee":return r.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(a,{width:"short",context:"formatting"});case"eeee":default:return r.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,r,n){var a=t.getUTCDay(),i=(a-n.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return u(i,e.length);case"co":return r.ordinalNumber(i,{unit:"day"});case"ccc":return r.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(a,{width:"narrow",context:"standalone"});case"cccccc":return r.day(a,{width:"short",context:"standalone"});case"cccc":default:return r.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,r){var n=t.getUTCDay(),a=0===n?7:n;switch(e){case"i":return String(a);case"ii":return u(a,e.length);case"io":return r.ordinalNumber(a,{unit:"day"});case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(n,{width:"short",context:"formatting"});case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},a:function(t,e,r){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"aaaaa":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},b:function(t,e,r){var n,a=t.getUTCHours();switch(n=12===a?w:0===a?g:a/12>=1?"pm":"am",e){case"b":case"bb":case"bbb":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"bbbbb":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},B:function(t,e,r){var n,a=t.getUTCHours();switch(n=a>=17?v:a>=12?b:a>=4?m:x,e){case"B":case"BB":case"BBB":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},h:function(t,e,r){if("ho"===e){var n=t.getUTCHours()%12;return 0===n&&(n=12),r.ordinalNumber(n,{unit:"hour"})}return s.h(t,e)},H:function(t,e,r){return"Ho"===e?r.ordinalNumber(t.getUTCHours(),{unit:"hour"}):s.H(t,e)},K:function(t,e,r){var n=t.getUTCHours()%12;return"Ko"===e?r.ordinalNumber(n,{unit:"hour"}):u(n,e.length)},k:function(t,e,r){var n=t.getUTCHours();return 0===n&&(n=24),"ko"===e?r.ordinalNumber(n,{unit:"hour"}):u(n,e.length)},m:function(t,e,r){return"mo"===e?r.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):s.m(t,e)},s:function(t,e,r){return"so"===e?r.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):s.s(t,e)},S:function(t,e){return s.S(t,e)},X:function(t,e,r,n){var a=(n._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return T(a);case"XXXX":case"XX":return M(a);case"XXXXX":case"XXX":default:return M(a,":")}},x:function(t,e,r,n){var a=(n._originalDate||t).getTimezoneOffset();switch(e){case"x":return T(a);case"xxxx":case"xx":return M(a);case"xxxxx":case"xxx":default:return M(a,":")}},O:function(t,e,r,n){var a=(n._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+y(a,":");case"OOOO":default:return"GMT"+M(a,":")}},z:function(t,e,r,n){var a=(n._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+y(a,":");case"zzzz":default:return"GMT"+M(a,":")}},t:function(t,e,r,n){var a=n._originalDate||t;return u(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,r,n){return u((n._originalDate||t).getTime(),e.length)}},C=r(50),U=r(22),p=r(23),E=r(4),q=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,S=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,j=/^'([^]*?)'?$/,k=/''/g,D=/[a-zA-Z]/;function L(t,e,r){Object(a.a)(2,arguments);var u=String(e),s=r||{},d=s.locale||o.a,f=d.options&&d.options.firstWeekContainsDate,h=null==f?1:Object(E.a)(f),l=null==s.firstWeekContainsDate?h:Object(E.a)(s.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var g=d.options&&d.options.weekStartsOn,w=null==g?0:Object(E.a)(g),m=null==s.weekStartsOn?w:Object(E.a)(s.weekStartsOn);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!d.localize)throw new RangeError("locale must contain localize property");if(!d.formatLong)throw new RangeError("locale must contain formatLong property");var b=Object(n.a)(t);if(!i(b))throw new RangeError("Invalid time value");var v=Object(U.a)(b),x=Object(c.a)(b,v),y={firstWeekContainsDate:l,weekStartsOn:m,locale:d,_originalDate:b},T=u.match(S).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,C.a[e])(t,d.formatLong,y):t})).join("").match(q).map((function(t){if("''"===t)return"'";var e=t[0];if("'"===e)return N(t);var r=O[e];if(r)return!s.useAdditionalWeekYearTokens&&Object(p.b)(t)&&Object(p.c)(t),!s.useAdditionalDayOfYearTokens&&Object(p.a)(t)&&Object(p.c)(t),r(x,t,d.localize,y);if(e.match(D))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return t})).join("");return T}function N(t){return t.match(j)[1].replace(k,"'")}}}]);
//# sourceMappingURL=1.21caaf7b.chunk.js.map