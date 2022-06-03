//     Underscore.js 1.9.0
//     http://underscorejs.org
//     (c) 2009-2018 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
!function(){var n="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||this||{},r=n._,e=Array.prototype,o=Object.prototype,s="undefined"!=typeof Symbol?Symbol.prototype:null,u=e.push,c=e.slice,p=o.toString,i=o.hasOwnProperty,t=Array.isArray,a=Object.keys,l=Object.create,f=function(){},h=function(n){return n instanceof h?n:this instanceof h?void(this._wrapped=n):new h(n)};"undefined"==typeof exports||exports.nodeType?n._=h:("undefined"!=typeof module&&!module.nodeType&&module.exports&&(exports=module.exports=h),exports._=h),h.VERSION="1.9.0";var v,y=function(u,i,n){if(void 0===i)return u;switch(null==n?3:n){case 1:return function(n){return u.call(i,n)};case 3:return function(n,r,t){return u.call(i,n,r,t)};case 4:return function(n,r,t,e){return u.call(i,n,r,t,e)}}return function(){return u.apply(i,arguments)}},d=function(n,r,t){return h.iteratee!==v?h.iteratee(n,r):null==n?h.identity:h.isFunction(n)?y(n,r,t):h.isObject(n)&&!h.isArray(n)?h.matcher(n):h.property(n)};h.iteratee=v=function(n,r){return d(n,r,1/0)};var g=function(u,i){return i=null==i?u.length-1:+i,function(){for(var n=Math.max(arguments.length-i,0),r=Array(n),t=0;t<n;t++)r[t]=arguments[t+i];switch(i){case 0:return u.call(this,r);case 1:return u.call(this,arguments[0],r);case 2:return u.call(this,arguments[0],arguments[1],r)}var e=Array(i+1);for(t=0;t<i;t++)e[t]=arguments[t];return e[i]=r,u.apply(this,e)}},m=function(n){if(!h.isObject(n))return{};if(l)return l(n);f.prototype=n;var r=new f;return f.prototype=null,r},b=function(r){return function(n){return null==n?void 0:n[r]}},j=function(n,r){for(var t=r.length,e=0;e<t;e++){if(null==n)return;n=n[r[e]]}return t?n:void 0},x=Math.pow(2,53)-1,_=b("length"),A=function(n){var r=_(n);return"number"==typeof r&&0<=r&&r<=x};h.each=h.forEach=function(n,r,t){var e,u;if(r=y(r,t),A(n))for(e=0,u=n.length;e<u;e++)r(n[e],e,n);else{var i=h.keys(n);for(e=0,u=i.length;e<u;e++)r(n[i[e]],i[e],n)}return n},h.map=h.collect=function(n,r,t){r=d(r,t);for(var e=!A(n)&&h.keys(n),u=(e||n).length,i=Array(u),o=0;o<u;o++){var a=e?e[o]:o;i[o]=r(n[a],a,n)}return i};var w=function(c){return function(n,r,t,e){var u=3<=arguments.length;return function(n,r,t,e){var u=!A(n)&&h.keys(n),i=(u||n).length,o=0<c?0:i-1;for(e||(t=n[u?u[o]:o],o+=c);0<=o&&o<i;o+=c){var a=u?u[o]:o;t=r(t,n[a],a,n)}return t}(n,y(r,e,4),t,u)}};h.reduce=h.foldl=h.inject=w(1),h.reduceRight=h.foldr=w(-1),h.find=h.detect=function(n,r,t){var e=(A(n)?h.findIndex:h.findKey)(n,r,t);if(void 0!==e&&-1!==e)return n[e]},h.filter=h.select=function(n,e,r){var u=[];return e=d(e,r),h.each(n,function(n,r,t){e(n,r,t)&&u.push(n)}),u},h.reject=function(n,r,t){return h.filter(n,h.negate(d(r)),t)},h.every=h.all=function(n,r,t){r=d(r,t);for(var e=!A(n)&&h.keys(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(!r(n[o],o,n))return!1}return!0},h.some=h.any=function(n,r,t){r=d(r,t);for(var e=!A(n)&&h.keys(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(r(n[o],o,n))return!0}return!1},h.contains=h.includes=h.include=function(n,r,t,e){return A(n)||(n=h.values(n)),("number"!=typeof t||e)&&(t=0),0<=h.indexOf(n,r,t)},h.invoke=g(function(n,t,e){var u,i;return h.isFunction(t)?i=t:h.isArray(t)&&(u=t.slice(0,-1),t=t[t.length-1]),h.map(n,function(n){var r=i;if(!r){if(u&&u.length&&(n=j(n,u)),null==n)return;r=n[t]}return null==r?r:r.apply(n,e)})}),h.pluck=function(n,r){return h.map(n,h.property(r))},h.where=function(n,r){return h.filter(n,h.matcher(r))},h.findWhere=function(n,r){return h.find(n,h.matcher(r))},h.max=function(n,e,r){var t,u,i=-1/0,o=-1/0;if(null==e||"number"==typeof e&&"object"!=typeof n[0]&&null!=n)for(var a=0,c=(n=A(n)?n:h.values(n)).length;a<c;a++)null!=(t=n[a])&&i<t&&(i=t);else e=d(e,r),h.each(n,function(n,r,t){u=e(n,r,t),(o<u||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},h.min=function(n,e,r){var t,u,i=1/0,o=1/0;if(null==e||"number"==typeof e&&"object"!=typeof n[0]&&null!=n)for(var a=0,c=(n=A(n)?n:h.values(n)).length;a<c;a++)null!=(t=n[a])&&t<i&&(i=t);else e=d(e,r),h.each(n,function(n,r,t){((u=e(n,r,t))<o||u===1/0&&i===1/0)&&(i=n,o=u)});return i},h.shuffle=function(n){return h.sample(n,1/0)},h.sample=function(n,r,t){if(null==r||t)return A(n)||(n=h.values(n)),n[h.random(n.length-1)];var e=A(n)?h.clone(n):h.values(n),u=_(e);r=Math.max(Math.min(r,u),0);for(var i=u-1,o=0;o<r;o++){var a=h.random(o,i),c=e[o];e[o]=e[a],e[a]=c}return e.slice(0,r)},h.sortBy=function(n,e,r){var u=0;return e=d(e,r),h.pluck(h.map(n,function(n,r,t){return{value:n,index:u++,criteria:e(n,r,t)}}).sort(function(n,r){var t=n.criteria,e=r.criteria;if(t!==e){if(e<t||void 0===t)return 1;if(t<e||void 0===e)return-1}return n.index-r.index}),"value")};var O=function(o,r){return function(e,u,n){var i=r?[[],[]]:{};return u=d(u,n),h.each(e,function(n,r){var t=u(n,r,e);o(i,n,t)}),i}};h.groupBy=O(function(n,r,t){h.has(n,t)?n[t].push(r):n[t]=[r]}),h.indexBy=O(function(n,r,t){n[t]=r}),h.countBy=O(function(n,r,t){h.has(n,t)?n[t]++:n[t]=1});var k=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;h.toArray=function(n){return n?h.isArray(n)?c.call(n):h.isString(n)?n.match(k):A(n)?h.map(n,h.identity):h.values(n):[]},h.size=function(n){return null==n?0:A(n)?n.length:h.keys(n).length},h.partition=O(function(n,r,t){n[t?0:1].push(r)},!0),h.first=h.head=h.take=function(n,r,t){if(!(null==n||n.length<1))return null==r||t?n[0]:h.initial(n,n.length-r)},h.initial=function(n,r,t){return c.call(n,0,Math.max(0,n.length-(null==r||t?1:r)))},h.last=function(n,r,t){if(!(null==n||n.length<1))return null==r||t?n[n.length-1]:h.rest(n,Math.max(0,n.length-r))},h.rest=h.tail=h.drop=function(n,r,t){return c.call(n,null==r||t?1:r)},h.compact=function(n){return h.filter(n,Boolean)};var S=function(n,r,t,e){for(var u=(e=e||[]).length,i=0,o=_(n);i<o;i++){var a=n[i];if(A(a)&&(h.isArray(a)||h.isArguments(a)))if(r)for(var c=0,l=a.length;c<l;)e[u++]=a[c++];else S(a,r,t,e),u=e.length;else t||(e[u++]=a)}return e};h.flatten=function(n,r){return S(n,r,!1)},h.without=g(function(n,r){return h.difference(n,r)}),h.uniq=h.unique=function(n,r,t,e){h.isBoolean(r)||(e=t,t=r,r=!1),null!=t&&(t=d(t,e));for(var u=[],i=[],o=0,a=_(n);o<a;o++){var c=n[o],l=t?t(c,o,n):c;r&&!t?(o&&i===l||u.push(c),i=l):t?h.contains(i,l)||(i.push(l),u.push(c)):h.contains(u,c)||u.push(c)}return u},h.union=g(function(n){return h.uniq(S(n,!0,!0))}),h.intersection=function(n){for(var r=[],t=arguments.length,e=0,u=_(n);e<u;e++){var i=n[e];if(!h.contains(r,i)){var o;for(o=1;o<t&&h.contains(arguments[o],i);o++);o===t&&r.push(i)}}return r},h.difference=g(function(n,r){return r=S(r,!0,!0),h.filter(n,function(n){return!h.contains(r,n)})}),h.unzip=function(n){for(var r=n&&h.max(n,_).length||0,t=Array(r),e=0;e<r;e++)t[e]=h.pluck(n,e);return t},h.zip=g(h.unzip),h.object=function(n,r){for(var t={},e=0,u=_(n);e<u;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t};var M=function(i){return function(n,r,t){r=d(r,t);for(var e=_(n),u=0<i?0:e-1;0<=u&&u<e;u+=i)if(r(n[u],u,n))return u;return-1}};h.findIndex=M(1),h.findLastIndex=M(-1),h.sortedIndex=function(n,r,t,e){for(var u=(t=d(t,e,1))(r),i=0,o=_(n);i<o;){var a=Math.floor((i+o)/2);t(n[a])<u?i=a+1:o=a}return i};var F=function(i,o,a){return function(n,r,t){var e=0,u=_(n);if("number"==typeof t)0<i?e=0<=t?t:Math.max(t+u,e):u=0<=t?Math.min(t+1,u):t+u+1;else if(a&&t&&u)return n[t=a(n,r)]===r?t:-1;if(r!=r)return 0<=(t=o(c.call(n,e,u),h.isNaN))?t+e:-1;for(t=0<i?e:u-1;0<=t&&t<u;t+=i)if(n[t]===r)return t;return-1}};h.indexOf=F(1,h.findIndex,h.sortedIndex),h.lastIndexOf=F(-1,h.findLastIndex),h.range=function(n,r,t){null==r&&(r=n||0,n=0),t||(t=r<n?-1:1);for(var e=Math.max(Math.ceil((r-n)/t),0),u=Array(e),i=0;i<e;i++,n+=t)u[i]=n;return u},h.chunk=function(n,r){if(null==r||r<1)return[];for(var t=[],e=0,u=n.length;e<u;)t.push(c.call(n,e,e+=r));return t};var E=function(n,r,t,e,u){if(!(e instanceof r))return n.apply(t,u);var i=m(n.prototype),o=n.apply(i,u);return h.isObject(o)?o:i};h.bind=g(function(r,t,e){if(!h.isFunction(r))throw new TypeError("Bind must be called on a function");var u=g(function(n){return E(r,u,t,this,e.concat(n))});return u}),h.partial=g(function(u,i){var o=h.partial.placeholder,a=function(){for(var n=0,r=i.length,t=Array(r),e=0;e<r;e++)t[e]=i[e]===o?arguments[n++]:i[e];for(;n<arguments.length;)t.push(arguments[n++]);return E(u,a,this,this,t)};return a}),(h.partial.placeholder=h).bindAll=g(function(n,r){var t=(r=S(r,!1,!1)).length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=h.bind(n[e],n)}}),h.memoize=function(e,u){var i=function(n){var r=i.cache,t=""+(u?u.apply(this,arguments):n);return h.has(r,t)||(r[t]=e.apply(this,arguments)),r[t]};return i.cache={},i},h.delay=g(function(n,r,t){return setTimeout(function(){return n.apply(null,t)},r)}),h.defer=h.partial(h.delay,h,1),h.throttle=function(t,e,u){var i,o,a,c,l=0;u||(u={});var f=function(){l=!1===u.leading?0:h.now(),i=null,c=t.apply(o,a),i||(o=a=null)},n=function(){var n=h.now();l||!1!==u.leading||(l=n);var r=e-(n-l);return o=this,a=arguments,r<=0||e<r?(i&&(clearTimeout(i),i=null),l=n,c=t.apply(o,a),i||(o=a=null)):i||!1===u.trailing||(i=setTimeout(f,r)),c};return n.cancel=function(){clearTimeout(i),l=0,i=o=a=null},n},h.debounce=function(t,e,u){var i,o,a=function(n,r){i=null,r&&(o=t.apply(n,r))},n=g(function(n){if(i&&clearTimeout(i),u){var r=!i;i=setTimeout(a,e),r&&(o=t.apply(this,n))}else i=h.delay(a,e,this,n);return o});return n.cancel=function(){clearTimeout(i),i=null},n},h.wrap=function(n,r){return h.partial(r,n)},h.negate=function(n){return function(){return!n.apply(this,arguments)}},h.compose=function(){var t=arguments,e=t.length-1;return function(){for(var n=e,r=t[e].apply(this,arguments);n--;)r=t[n].call(this,r);return r}},h.after=function(n,r){return function(){if(--n<1)return r.apply(this,arguments)}},h.before=function(n,r){var t;return function(){return 0<--n&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}},h.once=h.partial(h.before,2),h.restArguments=g;var N=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],T=function(n,r){var t=I.length,e=n.constructor,u=h.isFunction(e)&&e.prototype||o,i="constructor";for(h.has(n,i)&&!h.contains(r,i)&&r.push(i);t--;)(i=I[t])in n&&n[i]!==u[i]&&!h.contains(r,i)&&r.push(i)};h.keys=function(n){if(!h.isObject(n))return[];if(a)return a(n);var r=[];for(var t in n)h.has(n,t)&&r.push(t);return N&&T(n,r),r},h.allKeys=function(n){if(!h.isObject(n))return[];var r=[];for(var t in n)r.push(t);return N&&T(n,r),r},h.values=function(n){for(var r=h.keys(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=n[r[u]];return e},h.mapObject=function(n,r,t){r=d(r,t);for(var e=h.keys(n),u=e.length,i={},o=0;o<u;o++){var a=e[o];i[a]=r(n[a],a,n)}return i},h.pairs=function(n){for(var r=h.keys(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=[r[u],n[r[u]]];return e},h.invert=function(n){for(var r={},t=h.keys(n),e=0,u=t.length;e<u;e++)r[n[t[e]]]=t[e];return r},h.functions=h.methods=function(n){var r=[];for(var t in n)h.isFunction(n[t])&&r.push(t);return r.sort()};var B=function(c,l){return function(n){var r=arguments.length;if(l&&(n=Object(n)),r<2||null==n)return n;for(var t=1;t<r;t++)for(var e=arguments[t],u=c(e),i=u.length,o=0;o<i;o++){var a=u[o];l&&void 0!==n[a]||(n[a]=e[a])}return n}};h.extend=B(h.allKeys),h.extendOwn=h.assign=B(h.keys),h.findKey=function(n,r,t){r=d(r,t);for(var e,u=h.keys(n),i=0,o=u.length;i<o;i++)if(r(n[e=u[i]],e,n))return e};var R,q,K=function(n,r,t){return r in t};h.pick=g(function(n,r){var t={},e=r[0];if(null==n)return t;h.isFunction(e)?(1<r.length&&(e=y(e,r[1])),r=h.allKeys(n)):(e=K,r=S(r,!1,!1),n=Object(n));for(var u=0,i=r.length;u<i;u++){var o=r[u],a=n[o];e(a,o,n)&&(t[o]=a)}return t}),h.omit=g(function(n,t){var r,e=t[0];return h.isFunction(e)?(e=h.negate(e),1<t.length&&(r=t[1])):(t=h.map(S(t,!1,!1),String),e=function(n,r){return!h.contains(t,r)}),h.pick(n,e,r)}),h.defaults=B(h.allKeys,!0),h.create=function(n,r){var t=m(n);return r&&h.extendOwn(t,r),t},h.clone=function(n){return h.isObject(n)?h.isArray(n)?n.slice():h.extend({},n):n},h.tap=function(n,r){return r(n),n},h.isMatch=function(n,r){var t=h.keys(r),e=t.length;if(null==n)return!e;for(var u=Object(n),i=0;i<e;i++){var o=t[i];if(r[o]!==u[o]||!(o in u))return!1}return!0},R=function(n,r,t,e){if(n===r)return 0!==n||1/n==1/r;if(null==n||null==r)return!1;if(n!=n)return r!=r;var u=typeof n;return("function"===u||"object"===u||"object"==typeof r)&&q(n,r,t,e)},q=function(n,r,t,e){n instanceof h&&(n=n._wrapped),r instanceof h&&(r=r._wrapped);var u=p.call(n);if(u!==p.call(r))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+r;case"[object Number]":return+n!=+n?+r!=+r:0==+n?1/+n==1/r:+n==+r;case"[object Date]":case"[object Boolean]":return+n==+r;case"[object Symbol]":return s.valueOf.call(n)===s.valueOf.call(r)}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof r)return!1;var o=n.constructor,a=r.constructor;if(o!==a&&!(h.isFunction(o)&&o instanceof o&&h.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in r)return!1}e=e||[];for(var c=(t=t||[]).length;c--;)if(t[c]===n)return e[c]===r;if(t.push(n),e.push(r),i){if((c=n.length)!==r.length)return!1;for(;c--;)if(!R(n[c],r[c],t,e))return!1}else{var l,f=h.keys(n);if(c=f.length,h.keys(r).length!==c)return!1;for(;c--;)if(l=f[c],!h.has(r,l)||!R(n[l],r[l],t,e))return!1}return t.pop(),e.pop(),!0},h.isEqual=function(n,r){return R(n,r)},h.isEmpty=function(n){return null==n||(A(n)&&(h.isArray(n)||h.isString(n)||h.isArguments(n))?0===n.length:0===h.keys(n).length)},h.isElement=function(n){return!(!n||1!==n.nodeType)},h.isArray=t||function(n){return"[object Array]"===p.call(n)},h.isObject=function(n){var r=typeof n;return"function"===r||"object"===r&&!!n},h.each(["Arguments","Function","String","Number","Date","RegExp","Error","Symbol","Map","WeakMap","Set","WeakSet"],function(r){h["is"+r]=function(n){return p.call(n)==="[object "+r+"]"}}),h.isArguments(arguments)||(h.isArguments=function(n){return h.has(n,"callee")});var z=n.document&&n.document.childNodes;"function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof z&&(h.isFunction=function(n){return"function"==typeof n||!1}),h.isFinite=function(n){return!h.isSymbol(n)&&isFinite(n)&&!isNaN(parseFloat(n))},h.isNaN=function(n){return h.isNumber(n)&&isNaN(n)},h.isBoolean=function(n){return!0===n||!1===n||"[object Boolean]"===p.call(n)},h.isNull=function(n){return null===n},h.isUndefined=function(n){return void 0===n},h.has=function(n,r){if(!h.isArray(r))return null!=n&&i.call(n,r);for(var t=r.length,e=0;e<t;e++){var u=r[e];if(null==n||!i.call(n,u))return!1;n=n[u]}return!!t},h.noConflict=function(){return n._=r,this},h.identity=function(n){return n},h.constant=function(n){return function(){return n}},h.noop=function(){},h.property=function(r){return h.isArray(r)?function(n){return j(n,r)}:b(r)},h.propertyOf=function(r){return null==r?function(){}:function(n){return h.isArray(n)?j(r,n):r[n]}},h.matcher=h.matches=function(r){return r=h.extendOwn({},r),function(n){return h.isMatch(n,r)}},h.times=function(n,r,t){var e=Array(Math.max(0,n));r=y(r,t,1);for(var u=0;u<n;u++)e[u]=r(u);return e},h.random=function(n,r){return null==r&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))},h.now=Date.now||function(){return(new Date).getTime()};var D={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},L=h.invert(D),P=function(r){var t=function(n){return r[n]},n="(?:"+h.keys(r).join("|")+")",e=RegExp(n),u=RegExp(n,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};h.escape=P(D),h.unescape=P(L),h.result=function(n,r,t){h.isArray(r)||(r=[r]);var e=r.length;if(!e)return h.isFunction(t)?t.call(n):t;for(var u=0;u<e;u++){var i=null==n?void 0:n[r[u]];void 0===i&&(i=t,u=e),n=h.isFunction(i)?i.call(n):i}return n};var W=0;h.uniqueId=function(n){var r=++W+"";return n?n+r:r},h.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var C=/(.)^/,J={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},U=/\\|'|\r|\n|\u2028|\u2029/g,V=function(n){return"\\"+J[n]};h.template=function(i,n,r){!n&&r&&(n=r),n=h.defaults({},n,h.templateSettings);var t,e=RegExp([(n.escape||C).source,(n.interpolate||C).source,(n.evaluate||C).source].join("|")+"|$","g"),o=0,a="__p+='";i.replace(e,function(n,r,t,e,u){return a+=i.slice(o,u).replace(U,V),o=u+n.length,r?a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":t?a+="'+\n((__t=("+t+"))==null?'':__t)+\n'":e&&(a+="';\n"+e+"\n__p+='"),n}),a+="';\n",n.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{t=new Function(n.variable||"obj","_",a)}catch(n){throw n.source=a,n}var u=function(n){return t.call(this,n,h)},c=n.variable||"obj";return u.source="function("+c+"){\n"+a+"}",u},h.chain=function(n){var r=h(n);return r._chain=!0,r};var $=function(n,r){return n._chain?h(r).chain():r};h.mixin=function(t){return h.each(h.functions(t),function(n){var r=h[n]=t[n];h.prototype[n]=function(){var n=[this._wrapped];return u.apply(n,arguments),$(this,r.apply(h,n))}}),h},h.mixin(h),h.each(["pop","push","reverse","shift","sort","splice","unshift"],function(r){var t=e[r];h.prototype[r]=function(){var n=this._wrapped;return t.apply(n,arguments),"shift"!==r&&"splice"!==r||0!==n.length||delete n[0],$(this,n)}}),h.each(["concat","join","slice"],function(n){var r=e[n];h.prototype[n]=function(){return $(this,r.apply(this._wrapped,arguments))}}),h.prototype.value=function(){return this._wrapped},h.prototype.valueOf=h.prototype.toJSON=h.prototype.value,h.prototype.toString=function(){return String(this._wrapped)},"function"==typeof define&&define.amd&&define("underscore",[],function(){return h})}();
var asl_underscore = _.noConflict();

/*Marker Cluster*/
function MarkerClusterer(t, e, i) {
    this.extend(MarkerClusterer, google.maps.OverlayView), this.map_ = t, this.markers_ = [], 
    this.clusters_ = [], this.sizes = [ 53, 56, 66, 78, 90 ], this.styles_ = [], this.ready_ = !1;
    var n = i || {};
    this.gridSize_ = n.gridSize || 60, this.minClusterSize_ = n.minimumClusterSize || 2, 
    this.maxZoom_ = n.maxZoom || null, this.styles_ = n.styles || [], this.imagePath_ = n.imagePath || this.MARKER_CLUSTER_IMAGE_PATH_, 
    this.imageExtension_ = n.imageExtension || this.MARKER_CLUSTER_IMAGE_EXTENSION_, 
    this.zoomOnClick_ = !0, void 0 != n.zoomOnClick && (this.zoomOnClick_ = n.zoomOnClick), 
    this.averageCenter_ = !1, void 0 != n.averageCenter && (this.averageCenter_ = n.averageCenter), 
    this.setupStyles_(), this.setMap(t), this.prevZoom_ = this.map_.getZoom();
    var r = this;
    google.maps.event.addListener(this.map_, "zoom_changed", function() {
        var t = r.map_.getZoom();
        r.prevZoom_ != t && (r.prevZoom_ = t, r.resetViewport());
    }), google.maps.event.addListener(this.map_, "idle", function() {
        r.redraw();
    }), e && e.length && this.addMarkers(e, !1);
}

function Cluster(t) {
    this.markerClusterer_ = t, this.map_ = t.getMap(), this.gridSize_ = t.getGridSize(), 
    this.minClusterSize_ = t.getMinClusterSize(), this.averageCenter_ = t.isAverageCenter(), 
    this.center_ = null, this.markers_ = [], this.bounds_ = null, this.clusterIcon_ = new ClusterIcon(this, t.getStyles(), t.getGridSize());
}

function ClusterIcon(t, e, i) {
    t.getMarkerClusterer().extend(ClusterIcon, google.maps.OverlayView), this.styles_ = e, 
    this.padding_ = i || 0, this.cluster_ = t, this.center_ = null, this.map_ = t.getMap(), 
    this.div_ = null, this.sums_ = null, this.visible_ = !1, this.setMap(this.map_);
}

MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_PATH_ = "../images/m", MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_EXTENSION_ = "png", 
MarkerClusterer.prototype.extend = function(t, e) {
    return function(t) {
        for (var e in t.prototype) this.prototype[e] = t.prototype[e];
        return this;
    }.apply(t, [ e ]);
}, MarkerClusterer.prototype.onAdd = function() {
    this.setReady_(!0);
}, MarkerClusterer.prototype.draw = function() {}, MarkerClusterer.prototype.setupStyles_ = function() {
    if (!this.styles_.length) for (var t, e = 0; t = this.sizes[e]; e++) this.styles_.push({
        url: this.imagePath_ + (e + 1) + "." + this.imageExtension_,
        height: t,
        width: t
    });
}, MarkerClusterer.prototype.fitMapToMarkers = function() {
    for (var t, e = this.getMarkers(), i = new google.maps.LatLngBounds(), n = 0; t = e[n]; n++) i.extend(t.getPosition());
    this.map_.fitBounds(i);
}, MarkerClusterer.prototype.setStyles = function(t) {
    this.styles_ = t;
}, MarkerClusterer.prototype.getStyles = function() {
    return this.styles_;
}, MarkerClusterer.prototype.isZoomOnClick = function() {
    return this.zoomOnClick_;
}, MarkerClusterer.prototype.isAverageCenter = function() {
    return this.averageCenter_;
}, MarkerClusterer.prototype.getMarkers = function() {
    return this.markers_;
}, MarkerClusterer.prototype.getTotalMarkers = function() {
    return this.markers_.length;
}, MarkerClusterer.prototype.setMaxZoom = function(t) {
    this.maxZoom_ = t;
}, MarkerClusterer.prototype.getMaxZoom = function() {
    return this.maxZoom_;
}, MarkerClusterer.prototype.calculator_ = function(t, e) {
    for (var i = 0, n = t.length, r = n; 0 !== r; ) r = parseInt(r / 10, 10), i++;
    return i = Math.min(i, e), {
        text: n,
        index: i
    };
}, MarkerClusterer.prototype.setCalculator = function(t) {
    this.calculator_ = t;
}, MarkerClusterer.prototype.getCalculator = function() {
    return this.calculator_;
}, MarkerClusterer.prototype.addMarkers = function(t, e) {
    for (var i, n = 0; i = t[n]; n++) this.pushMarkerTo_(i);
    e || this.redraw();
}, MarkerClusterer.prototype.pushMarkerTo_ = function(t) {
    if (t.isAdded = !1, t.draggable) {
        var e = this;
        google.maps.event.addListener(t, "dragend", function() {
            t.isAdded = !1, e.repaint();
        });
    }
    this.markers_.push(t);
}, MarkerClusterer.prototype.addMarker = function(t, e) {
    this.pushMarkerTo_(t), e || this.redraw();
}, MarkerClusterer.prototype.removeMarker_ = function(t) {
    var e = -1;
    if (this.markers_.indexOf) e = this.markers_.indexOf(t); else for (var i, n = 0; i = this.markers_[n]; n++) if (i == t) {
        e = n;
        break;
    }
    return -1 == e ? !1 : (t.setMap(null), this.markers_.splice(e, 1), !0);
}, MarkerClusterer.prototype.removeMarker = function(t, e) {
    var i = this.removeMarker_(t);
    return !e && i ? (this.resetViewport(), this.redraw(), !0) : !1;
}, MarkerClusterer.prototype.removeMarkers = function(t, e) {
    for (var i, n = !1, r = 0; i = t[r]; r++) {
        var s = this.removeMarker_(i);
        n = n || s;
    }
    return !e && n ? (this.resetViewport(), this.redraw(), !0) : void 0;
}, MarkerClusterer.prototype.setReady_ = function(t) {
    this.ready_ || (this.ready_ = t, this.createClusters_());
}, MarkerClusterer.prototype.getTotalClusters = function() {
    return this.clusters_.length;
}, MarkerClusterer.prototype.getMap = function() {
    return this.map_;
}, MarkerClusterer.prototype.setMap = function(t) {
    this.map_ = t;
}, MarkerClusterer.prototype.getGridSize = function() {
    return this.gridSize_;
}, MarkerClusterer.prototype.setGridSize = function(t) {
    this.gridSize_ = t;
}, MarkerClusterer.prototype.getMinClusterSize = function() {
    return this.minClusterSize_;
}, MarkerClusterer.prototype.setMinClusterSize = function(t) {
    this.minClusterSize_ = t;
}, MarkerClusterer.prototype.getExtendedBounds = function(t) {
    var e = this.getProjection(), i = new google.maps.LatLng(t.getNorthEast().lat(), t.getNorthEast().lng()), n = new google.maps.LatLng(t.getSouthWest().lat(), t.getSouthWest().lng()), r = e.fromLatLngToDivPixel(i);
    r.x += this.gridSize_, r.y -= this.gridSize_;
    var s = e.fromLatLngToDivPixel(n);
    s.x -= this.gridSize_, s.y += this.gridSize_;
    var o = e.fromDivPixelToLatLng(r), l = e.fromDivPixelToLatLng(s);
    return t.extend(o), t.extend(l), t;
}, MarkerClusterer.prototype.isMarkerInBounds_ = function(t, e) {
    return e.contains(t.getPosition());
}, MarkerClusterer.prototype.clearMarkers = function() {
    this.resetViewport(!0), this.markers_ = [];
}, MarkerClusterer.prototype.resetViewport = function(t) {
    for (var e, i = 0; e = this.clusters_[i]; i++) e.remove();
    for (var n, i = 0; n = this.markers_[i]; i++) n.isAdded = !1, t && n.setMap(null);
    this.clusters_ = [];
}, MarkerClusterer.prototype.repaint = function() {
    var t = this.clusters_.slice();
    this.clusters_.length = 0, this.resetViewport(), this.redraw(), window.setTimeout(function() {
        for (var e, i = 0; e = t[i]; i++) e.remove();
    }, 0);
}, MarkerClusterer.prototype.redraw = function() {
    this.createClusters_();
}, MarkerClusterer.prototype.distanceBetweenPoints_ = function(t, e) {
    if (!t || !e) return 0;
    var i = 6371, n = (e.lat() - t.lat()) * Math.PI / 180, r = (e.lng() - t.lng()) * Math.PI / 180, s = Math.sin(n / 2) * Math.sin(n / 2) + Math.cos(t.lat() * Math.PI / 180) * Math.cos(e.lat() * Math.PI / 180) * Math.sin(r / 2) * Math.sin(r / 2), o = 2 * Math.atan2(Math.sqrt(s), Math.sqrt(1 - s)), l = i * o;
    return l;
}, MarkerClusterer.prototype.addToClosestCluster_ = function(t) {
    for (var e, i = 4e4, n = null, r = (t.getPosition(), 0); e = this.clusters_[r]; r++) {
        var s = e.getCenter();
        if (s) {
            var o = this.distanceBetweenPoints_(s, t.getPosition());
            i > o && (i = o, n = e);
        }
    }
    if (n && n.isMarkerInClusterBounds(t)) n.addMarker(t); else {
        var e = new Cluster(this);
        e.addMarker(t), this.clusters_.push(e);
    }
}, MarkerClusterer.prototype.createClusters_ = function() {
    if (this.ready_) for (var t, e = new google.maps.LatLngBounds(this.map_.getBounds().getSouthWest(), this.map_.getBounds().getNorthEast()), i = this.getExtendedBounds(e), n = 0; t = this.markers_[n]; n++) !t.isAdded && this.isMarkerInBounds_(t, i) && this.addToClosestCluster_(t);
}, Cluster.prototype.isMarkerAlreadyAdded = function(t) {
    if (this.markers_.indexOf) return -1 != this.markers_.indexOf(t);
    for (var e, i = 0; e = this.markers_[i]; i++) if (e == t) return !0;
    return !1;
}, Cluster.prototype.addMarker = function(t) {
    if (this.isMarkerAlreadyAdded(t)) return !1;
    if (this.center_) {
        if (this.averageCenter_) {
            var e = this.markers_.length + 1, i = (this.center_.lat() * (e - 1) + t.getPosition().lat()) / e, n = (this.center_.lng() * (e - 1) + t.getPosition().lng()) / e;
            this.center_ = new google.maps.LatLng(i, n), this.calculateBounds_();
        }
    } else this.center_ = t.getPosition(), this.calculateBounds_();
    t.isAdded = !0, this.markers_.push(t);
    var r = this.markers_.length;
    if (r < this.minClusterSize_ && t.getMap() != this.map_ && t.setMap(this.map_), 
    r == this.minClusterSize_) for (var s = 0; r > s; s++) this.markers_[s].setMap(null);
    return r >= this.minClusterSize_ && t.setMap(null), this.updateIcon(), !0;
}, Cluster.prototype.getMarkerClusterer = function() {
    return this.markerClusterer_;
}, Cluster.prototype.getBounds = function() {
    for (var t, e = new google.maps.LatLngBounds(this.center_, this.center_), i = this.getMarkers(), n = 0; t = i[n]; n++) e.extend(t.getPosition());
    return e;
}, Cluster.prototype.remove = function() {
    this.clusterIcon_.remove(), this.markers_.length = 0, delete this.markers_;
}, Cluster.prototype.getSize = function() {
    return this.markers_.length;
}, Cluster.prototype.getMarkers = function() {
    return this.markers_;
}, Cluster.prototype.getCenter = function() {
    return this.center_;
}, Cluster.prototype.calculateBounds_ = function() {
    var t = new google.maps.LatLngBounds(this.center_, this.center_);
    this.bounds_ = this.markerClusterer_.getExtendedBounds(t);
}, Cluster.prototype.isMarkerInClusterBounds = function(t) {
    return this.bounds_.contains(t.getPosition());
}, Cluster.prototype.getMap = function() {
    return this.map_;
}, Cluster.prototype.updateIcon = function() {
    var t = this.map_.getZoom(), e = this.markerClusterer_.getMaxZoom();
    if (e && t > e) for (var i, n = 0; i = this.markers_[n]; n++) i.setMap(this.map_); else {
        if (this.markers_.length < this.minClusterSize_) return void this.clusterIcon_.hide();
        var r = this.markerClusterer_.getStyles().length, s = this.markerClusterer_.getCalculator()(this.markers_, r);
        this.clusterIcon_.setCenter(this.center_), this.clusterIcon_.setSums(s), this.clusterIcon_.show();
    }
}, ClusterIcon.prototype.triggerClusterClick = function(t) {
    var e = this.cluster_.getMarkerClusterer();
    google.maps.event.trigger(e, "clusterclick", this.cluster_, t), e.isZoomOnClick() && this.map_.fitBounds(this.cluster_.getBounds());
}, ClusterIcon.prototype.onAdd = function() {
    if (this.div_ = document.createElement("DIV"), this.visible_) {
        var t = this.getPosFromLatLng_(this.center_);
        this.div_.style.cssText = this.createCss(t), this.div_.innerHTML = this.sums_.text;
    }
    var e = this.getPanes();
    e.overlayMouseTarget.appendChild(this.div_);
    var i = this;
    google.maps.event.addDomListener(this.div_, "click", function(t) {
        i.triggerClusterClick(t);
    });
}, ClusterIcon.prototype.getPosFromLatLng_ = function(t) {
    var e = this.getProjection().fromLatLngToDivPixel(t);
    return "object" == typeof this.iconAnchor_ && 2 === this.iconAnchor_.length ? (e.x -= this.iconAnchor_[0], 
    e.y -= this.iconAnchor_[1]) : (e.x -= parseInt(this.width_ / 2, 10), e.y -= parseInt(this.height_ / 2, 10)), 
    e;
}, ClusterIcon.prototype.draw = function() {
    if (this.visible_) {
        var t = this.getPosFromLatLng_(this.center_);
        this.div_.style.top = t.y + "px", this.div_.style.left = t.x + "px";
    }
}, ClusterIcon.prototype.hide = function() {
    this.div_ && (this.div_.style.display = "none"), this.visible_ = !1;
}, ClusterIcon.prototype.show = function() {
    if (this.div_) {
        var t = this.getPosFromLatLng_(this.center_);
        this.div_.style.cssText = this.createCss(t), this.div_.style.display = "";
    }
    this.visible_ = !0;
}, ClusterIcon.prototype.remove = function() {
    this.setMap(null);
}, ClusterIcon.prototype.onRemove = function() {
    this.div_ && this.div_.parentNode && (this.hide(), this.div_.parentNode.removeChild(this.div_), 
    this.div_ = null);
}, ClusterIcon.prototype.setSums = function(t) {
    this.sums_ = t, this.text_ = t.text, this.index_ = t.index, this.div_ && (this.div_.innerHTML = t.text), 
    this.useStyle();
}, ClusterIcon.prototype.useStyle = function() {
    var t = Math.max(0, this.sums_.index - 1);
    t = Math.min(this.styles_.length - 1, t);
    var e = this.styles_[t];
    this.url_ = e.url, this.height_ = e.height, this.width_ = e.width, this.textColor_ = e.textColor, 
    this.anchor_ = e.anchor, this.textSize_ = e.textSize, this.backgroundPosition_ = e.backgroundPosition, 
    this.iconAnchor_ = e.iconAnchor;
}, ClusterIcon.prototype.setCenter = function(t) {
    this.center_ = t;
}, ClusterIcon.prototype.createCss = function(t) {
    var e = [];
    e.push("background-image:url(" + this.url_ + ");");
    var i = this.backgroundPosition_ ? this.backgroundPosition_ : "0 0";
    e.push("background-position:" + i + ";"), "object" == typeof this.anchor_ ? (e.push("number" == typeof this.anchor_[0] && this.anchor_[0] > 0 && this.anchor_[0] < this.height_ ? "height:" + (this.height_ - this.anchor_[0]) + "px; padding-top:" + this.anchor_[0] + "px;" : "number" == typeof this.anchor_[0] && this.anchor_[0] < 0 && -this.anchor_[0] < this.height_ ? "height:" + this.height_ + "px; line-height:" + (this.height_ + this.anchor_[0]) + "px;" : "height:" + this.height_ + "px; line-height:" + this.height_ + "px;"), 
    e.push("number" == typeof this.anchor_[1] && this.anchor_[1] > 0 && this.anchor_[1] < this.width_ ? "width:" + (this.width_ - this.anchor_[1]) + "px; padding-left:" + this.anchor_[1] + "px;" : "width:" + this.width_ + "px; text-align:center;")) : e.push("height:" + this.height_ + "px; line-height:" + this.height_ + "px; width:" + this.width_ + "px; text-align:center;");
    var n = this.textColor_ ? this.textColor_ : "black", r = this.textSize_ ? this.textSize_ : 11;
    return e.push("cursor:pointer; top:" + t.y + "px; left:" + t.x + "px; color:" + n + "; position:absolute; font-size:" + r + "px; font-family:Arial,sans-serif; font-weight:bold"), 
    e.join("");
}, window.MarkerClusterer = MarkerClusterer, MarkerClusterer.prototype.addMarker = MarkerClusterer.prototype.addMarker, 
MarkerClusterer.prototype.addMarkers = MarkerClusterer.prototype.addMarkers, MarkerClusterer.prototype.clearMarkers = MarkerClusterer.prototype.clearMarkers, 
MarkerClusterer.prototype.fitMapToMarkers = MarkerClusterer.prototype.fitMapToMarkers, 
MarkerClusterer.prototype.getCalculator = MarkerClusterer.prototype.getCalculator, 
MarkerClusterer.prototype.getGridSize = MarkerClusterer.prototype.getGridSize, MarkerClusterer.prototype.getExtendedBounds = MarkerClusterer.prototype.getExtendedBounds, 
MarkerClusterer.prototype.getMap = MarkerClusterer.prototype.getMap, MarkerClusterer.prototype.getMarkers = MarkerClusterer.prototype.getMarkers, 
MarkerClusterer.prototype.getMaxZoom = MarkerClusterer.prototype.getMaxZoom, MarkerClusterer.prototype.getStyles = MarkerClusterer.prototype.getStyles, 
MarkerClusterer.prototype.getTotalClusters = MarkerClusterer.prototype.getTotalClusters, 
MarkerClusterer.prototype.getTotalMarkers = MarkerClusterer.prototype.getTotalMarkers, 
MarkerClusterer.prototype.redraw = MarkerClusterer.prototype.redraw, MarkerClusterer.prototype.removeMarker = MarkerClusterer.prototype.removeMarker, 
MarkerClusterer.prototype.removeMarkers = MarkerClusterer.prototype.removeMarkers, 
MarkerClusterer.prototype.resetViewport = MarkerClusterer.prototype.resetViewport, 
MarkerClusterer.prototype.repaint = MarkerClusterer.prototype.repaint, MarkerClusterer.prototype.setCalculator = MarkerClusterer.prototype.setCalculator, 
MarkerClusterer.prototype.setGridSize = MarkerClusterer.prototype.setGridSize, MarkerClusterer.prototype.setMaxZoom = MarkerClusterer.prototype.setMaxZoom, 
MarkerClusterer.prototype.onAdd = MarkerClusterer.prototype.onAdd, MarkerClusterer.prototype.draw = MarkerClusterer.prototype.draw, 
Cluster.prototype.getCenter = Cluster.prototype.getCenter, Cluster.prototype.getSize = Cluster.prototype.getSize, 
Cluster.prototype.getMarkers = Cluster.prototype.getMarkers, ClusterIcon.prototype.onAdd = ClusterIcon.prototype.onAdd, 
ClusterIcon.prototype.draw = ClusterIcon.prototype.draw, ClusterIcon.prototype.onRemove = ClusterIcon.prototype.onRemove;


var asl_jQuery = jQuery;

/*! JsRender v0.9.90 (Beta): http://jsviews.com/#jsrender */
/*! **VERSION FOR WEB** (For NODE.JS see http://jsviews.com/download/jsrender-node.js) */
!function(e,t){var n=t.jQuery;"object"==typeof exports?module.exports=n?e(t,n):function(n){if(n&&!n.fn)throw"Provide jQuery or null";return e(t,n)}:"function"==typeof define&&define.amd?define(function(){return e(t)}):e(t,!1)}(function(e,t){"use strict";function n(e,t){return function(){var n,r=this,i=r.base;return r.base=e,n=t.apply(r,arguments),r.base=i,n}}function r(e,t){return ne(t)&&(t=n(e?e._d?e:n(a,e):a,t),t._d=1),t}function i(e,t){var n,i=t.props;for(n in i)!Ee.test(n)||e[n]&&e[n].fix||(e[n]="convert"!==n?r(e.constructor.prototype[n],i[n]):i[n])}function o(e){return e}function a(){return""}function s(e){try{throw console.log("JsRender dbg breakpoint: "+e),"dbg breakpoint"}catch(t){}return this.base?this.baseApply(arguments):e}function d(e){this.name=(t.link?"JsViews":"JsRender")+" Error",this.message=e||this.name}function l(e,t){if(e){for(var n in t)e[n]=t[n];return e}}function u(e,t,n){return e?re(e)?u.apply(ee,e):(le.delimiters=[e,t,he=n?n.charAt(0):he],ce=e.charAt(0),fe=e.charAt(1),ge=t.charAt(0),ve=t.charAt(1),e="\\"+ce+"(\\"+he+")?\\"+fe,t="\\"+ge+"\\"+ve,X="(?:(\\w+(?=[\\/\\s\\"+ge+"]))|(\\w+)?(:)|(>)|(\\*))\\s*((?:[^\\"+ge+"]|\\"+ge+"(?!\\"+ve+"))*?)",de.rTag="(?:"+X+")",X=new RegExp("(?:"+e+X+"(\\/)?|\\"+ce+"(\\"+he+")?\\"+fe+"(?:(?:\\/(\\w+))\\s*|!--[\\s\\S]*?--))"+t,"g"),de.rTmpl=new RegExp("^\\s|\\s$|<.*>|([^\\\\]|^)[{}]|"+e+".*"+t),pe):le.delimiters}function p(e,t){t||e===!0||(t=e,e=void 0);var n,r,i,o,a=this,s=!t||"root"===t;if(e){if(o=t&&a.type===t&&a,!o)if(n=a.views,a._.useKey){for(r in n)if(o=t?n[r].get(e,t):n[r])break}else for(r=0,i=n.length;!o&&r<i;r++)o=t?n[r].get(e,t):n[r]}else if(s)o=a.root;else for(;a&&!o;)o=a.type===t?a:void 0,a=a.parent;return o}function c(){var e=this.get("item");return e?e.index:void 0}function f(){return this.index}function g(t,n,r){var i,o,a,s,d=this,u=!we&&void 0!==n,p=d.ctx;if(t in p||t in(p=ae)){if(a=p&&p[t],"tag"===t||"root"===t||"parentTags"===t||d._.it===t)return a}else p=void 0;if((!a||!ne(a)&&d.linked||d.tagCtx)&&(a&&a._cxp||(p!==ae&&(d=d.tagCtx?d:(d=d.scope||d,!d.isTop&&d.ctx.tag||d),p=d._ocps,a=p&&p[t]||a),a&&a._cxp||!r&&!u||(a=de._crcp(t,a,d,p))),s=a&&a._cxp)){if(u)return de._ucp(t,n,d,s);if(r)return o=a[1]?de._ceo(a[1].deps):[_e],o.unshift(a[0]),o._cxp=s,o;a=a[1]?s.tag&&s.tag.cvtArgs?s.tag.cvtArgs(!0,s.tagElse)[s.ind]:a[1](a[0].data,a[0],de):a[0]._ocp}return a&&ne(a)&&(i=function(){return a.apply(this&&this!==e?this:d,arguments)},l(i,a),i._vw=d),i||a}function v(e){return e&&(e.fn?e:this.getRsc("templates",e)||ie(e))}function h(e,t,n,r){var o,a,s,d,u="number"==typeof n&&t.tmpl.bnds[n-1],p=t.linkCtx;if(void 0===r&&u&&u._lr&&(r=""),void 0!==r?n=r={props:{},args:[r]}:u&&(n=u(t.data,t,de)),u=u._bd&&u,a=n.args[0],e||u){if(o=p&&p.tag,n.view=t,!o){if(o=l(new de._tg,{_:{bnd:u,unlinked:!0},inline:!p,tagName:":",convert:e,flow:!0,tagCtx:n}),s=n.args.length,s>1)for(d=o.bindTo=[];s--;)d.unshift(s);p&&(p.tag=o,o.linkCtx=p),n.ctx=Q(n.ctx,(p?p.view:t).ctx),i(o,n)}o._er=r&&a,o.ctx=n.ctx||o.ctx||{},n.ctx=void 0,a=o.cvtArgs()[0]}return a=u&&t._.onRender?t._.onRender(a,t,o):a,void 0!=a?a:""}function m(e,t){var n,r,i,o,a,s,d,l=this;if(l.tagName?(s=l,l=s.tagCtxs?s.tagCtxs[t||0]:s.tagCtx):s=l.tag,a=s.bindTo,o=l.args,(d=s.convert)&&""+d===d&&(d="true"===d?void 0:l.view.getRsc("converters",d)||I("Unknown converter: '"+d+"'")),e&&e.length)o=e;else if(d&&!e&&(o=o.slice()),a){for(i=[],n=a.length;n--;)r=a[n],i.unshift(w(l,r));e&&(o=i)}if(d)if(a=a||[0],n=a.length,d=d.apply(s,i||o),re(d)&&d.length===n||(d=[d],a=[0],n=1),e)o=d;else for(;n--;)r=a[n],+r===r&&(o[r]=d[n]);return o}function w(e,t){return e=e[+t===t?"args":"props"],e&&e[t]}function x(e){return this.cvtArgs(!0,e)}function _(e,t){var n,r,i=this;if(""+t===t){for(;void 0===n&&i;)r=i.tmpl&&i.tmpl[e],n=r&&r[t],i=i.parent;return n||ee[e][t]}}function b(e,t,n,r,o,a){function s(e){var t;(t=d[e])&&(d[e]=t=re(t)?t:[t],E!==t.length&&I(e+" length not same as bindTo "))}t=t||Y;var d,l,u,p,c,f,g,v,h,m,x,_,b,y,k,C,T,j,A,R,V,$,E,M=0,N="",P=t.linkCtx||0,O=t.ctx,U=n||t.tmpl,q="number"==typeof r&&t.tmpl.bnds[r-1];for("tag"===e._is?(d=e,e=d.tagName,r=d.tagCtxs,u=d.template):(l=t.getRsc("tags",e)||I("Unknown tag: {{"+e+"}} "),u=l.template),void 0===a&&q&&(q._lr=(l.lateRender||q._lr)&&"false"!==q._lr)&&(a=""),void 0!==a?(N+=a,r=a=[{props:{},args:[],params:{}}]):q&&(r=q(t.data,t,de)),g=r.length;M<g;M++)m=r[M],y=m.tmpl,(!P||!P.tag||M&&!P.tag.inline||d._er||y&&+y===y)&&(y&&U.tmpls&&(m.tmpl=m.content=U.tmpls[y-1]),m.index=M,m.render=S,m.view=t,m.ctx=Q(m.ctx,O)),(n=m.props.tmpl)&&(m.tmpl=t.getTmpl(n),m.content=m.content||m.tmpl),d||(d=new l._ctr,k=!!d.init,d.parent=f=O&&O.tag,d.tagCtxs=r,R=d.dataMap,P&&(d.inline=!1,P.tag=d,d.linkCtx=P),(d._.bnd=q||P.fn)?d._.arrVws={}:d.dataBoundOnly&&I(e+" must be data-bound:\n{^{"+e+"}}")),r=d.tagCtxs,R=d.dataMap,m.tag=d,R&&r&&(m.map=r[M].map),d.flow||(x=m.ctx=m.ctx||{},p=d.parents=x.parentTags=O&&Q(x.parentTags,O.parentTags)||{},f&&(p[f.tagName]=f),p[d.tagName]=x.tag=d);if(!(d._er=a)){for(i(d,r[0]),d.rendering={},M=0;M<g;M++){if(m=d.tagCtx=r[M],A=m.props,d.ctx=m.ctx,!M){if(k&&(d.init(m,P,d.ctx),k=void 0),m.args.length||d.argDefault===!1||(m.args=j=[m.view.data],m.params.args=["#data"]),b=d.bindTo,void 0!==b)for(b=d.bindTo=re(b)?b:[b],v=b.length;v--;)$=b[v],isNaN(parseInt($))||($=parseInt($)),b[v]=$;b=d.bindTo||[0],E=b.length,d._.bnd&&(s("linkedElement"),s("linkedCtxParam")),P&&(P.attr=d.attr=P.attr||d.attr),c=d.attr,d._.noVws=c&&c!==Pe}if(j=d.cvtArgs(void 0,M),d.linkedCtxParam)for(v=E;v--;)(_=d.linkedCtxParam[v])&&($=b[v],m.ctx[_]=de._cp(w(m,$),w(m.params,$),m.view,d._.bnd&&{tag:d,ind:v,tagElse:M}));(C=A.dataMap||R)&&(j.length||A.dataMap)&&(T=m.map,T&&T.src===j[0]&&!o||(T&&T.src&&T.unmap(),T=m.map=C.map(j[0],A,void 0,!d._.bnd)),j=[T.tgt]),h=void 0,d.render&&(h=d.render.apply(d,j),t.linked&&h&&!Me.test(h)&&(n={links:[]},n.render=n.fn=function(){return h},h=F(n,t.data,void 0,!0,t,void 0,void 0,d))),j.length||(j=[t]),void 0===h&&(V=j[0],d.contentCtx&&(V=d.contentCtx===!0?t:d.contentCtx(V)),h=m.render(V,!0)||(o?void 0:"")),N=N?N+(h||""):h}d.rendering=void 0}return d.tagCtx=r[0],d.ctx=d.tagCtx.ctx,d._.noVws&&d.inline&&(N="text"===c?oe.html(N):""),q&&t._.onRender?t._.onRender(N,t,d):N}function y(e,t,n,r,i,o,a,s){var d,l,u,p=this,f="array"===t;p.content=s,p.views=f?[]:{},p.data=r,p.tmpl=i,u=p._={key:0,useKey:f?0:1,id:""+Se++,onRender:a,bnds:{}},p.linked=!!a,p.type=t||"top",(p.parent=n)?(p.root=n.root||p,d=n.views,l=n._,p.isTop=l.scp,p.scope=(!e.tag||e.tag===n.ctx.tag)&&!p.isTop&&n.scope||p,l.useKey?(d[u.key="_"+l.useKey++]=p,p.index=qe,p.getIndex=c):d.length===(u.key=p.index=o)?d.push(p):d.splice(o,0,p),p.ctx=e||n.ctx):p.ctx=e||{}}function k(e){var t,n,r;for(t in Le)n=t+"s",e[n]&&(r=e[n],e[n]={},ee[n](r,e))}function C(e,t,n){function i(){var t=this;t._={unlinked:!0},t.inline=!0,t.tagName=e}var o,a,s,d=(t.bindTo,new de._tg);if(ne(t)?t={depends:t.depends,render:t}:""+t===t&&(t={template:t}),a=t.baseTag){t.flow=!!t.flow,t.baseTag=a=""+a===a?n&&n.tags[a]||se[a]:a,d=l(d,a);for(s in t)d[s]=r(a[s],t[s])}else d=l(d,t);return void 0!==(o=d.template)&&(d.template=""+o===o?ie[o]||ie(o):o),(i.prototype=d).constructor=d._ctr=i,n&&(d._parentTmpl=n),d}function T(e){return this.base.apply(this,e)}function j(e,n,r,i){function o(n){var o,s;if(""+n===n||n.nodeType>0&&(a=n)){if(!a)if(/^\.\/[^\\:*?"<>]*$/.test(n))(s=ie[e=e||n])?n=s:a=document.getElementById(n);else if(t.fn&&!de.rTmpl.test(n))try{a=t(n,document)[0]}catch(d){}a&&(i?n=a.innerHTML:(o=a.getAttribute(Oe),o&&(o!==Ue?(n=ie[o],delete ie[o]):t.fn&&(n=t.data(a)[Ue])),o&&n||(e=e||(t.fn?Ue:n),n=j(e,a.innerHTML,r,i)),n.tmplName=e=e||o,e!==Ue&&(ie[e]=n),a.setAttribute(Oe,e),t.fn&&t.data(a,Ue,n))),a=void 0}else n.fn||(n=void 0);return n}var a,s,d=n=n||"";if(de._html=oe.html,0===i&&(i=void 0,d=o(d)),i=i||(n.markup?n:{}),i.tmplName=e,r&&(i._parentTmpl=r),!d&&n.markup&&(d=o(n.markup))&&d.fn&&(d=d.markup),void 0!==d)return d.fn||n.fn?d.fn&&(s=d):(n=$(d,i),U(d.replace(Te,"\\$&"),n)),s||(s=l(function(){return s.render.apply(s,arguments)},n),k(s)),s}function A(e,t){return ne(e)?e.call(t):e}function R(e){for(var t=[],n=0,r=e.length;n<r;n++)t.push(e[n].unmap());return t}function V(e,n){function r(e){u.apply(this,e)}function i(){return new r(arguments)}function o(e,t){for(var n,r,i,o,a=0;a<w;a++)i=c[a],n=void 0,i+""!==i&&(n=i,i=n.getter),void 0===(o=e[i])&&n&&void 0!==(r=n.defaultVal)&&(o=A(r,e)),t(o,n&&p[n.type],i)}function a(t){t=t+""===t?JSON.parse(t):t;var n,r,i=0,a=t,l=[];if(re(t)){for(t=t||[],n=t.length;i<n;i++)l.push(this.map(t[i]));return l._is=e,l.unmap=d,l.merge=s,l}if(t){o(t,function(e,t){t&&(e=t.map(e)),l.push(e)}),a=this.apply(this,l);for(r in t)r===te||_[r]||(a[r]=t[r])}return a}function s(e){e=e+""===e?JSON.parse(e):e;var t,n,r,a,s,d,l,u,p,c=0,f=this;if(re(f)){for(l={},p=[],n=e.length,r=f.length;c<n;c++){for(u=e[c],d=!1,t=0;t<r&&!d;t++)l[t]||(s=f[t],g&&(l[t]=d=g+""===g?u[g]&&(_[g]?s[g]():s[g])===u[g]:g(s,u)));d?(s.merge(u),p.push(s)):p.push(i.map(u))}return void(x?x(f).refresh(p,!0):f.splice.apply(f,[0,f.length].concat(p)))}o(e,function(e,t,n){t?f[n]().merge(e):f[n](e)});for(a in e)a===te||_[a]||(f[a]=e[a])}function d(){var e,t,n,r,i=0,o=this;if(re(o))return R(o);for(e={};i<w;i++)t=c[i],n=void 0,t+""!==t&&(n=t,t=n.getter),r=o[t](),e[t]=n&&r&&p[n.type]?re(r)?R(r):r.unmap():r;for(t in o)"_is"===t||_[t]||t===te||"_"===t.charAt(0)&&_[t.slice(1)]||ne(o[t])||(e[t]=o[t]);return e}var l,u,p=this,c=n.getters,f=n.extend,g=n.id,v=t.extend({_is:e||"unnamed",unmap:d,merge:s},f),h="",m="",w=c?c.length:0,x=t.observable,_={};for(r.prototype=v,l=0;l<w;l++)!function(e){e=e.getter||e,_[e]=l+1;var t="_"+e;h+=(h?",":"")+e,m+="this."+t+" = "+e+";\n",v[e]=v[e]||function(n){return arguments.length?void(x?x(this).setProperty(e,n):this[t]=n):this[t]},x&&(v[e].set=v[e].set||function(e){this[t]=e})}(c[l]);return u=new Function(h,m.slice(0,-1)),u.prototype=v,v.constructor=u,i.map=a,i.getters=c,i.extend=f,i.id=g,i}function $(e,n){var r,i=ue._wm||{},o=l({tmpls:[],links:{},bnds:[],_is:"template",render:S},n);return o.markup=e,n.htmlTag||(r=Re.exec(e),o.htmlTag=r?r[1].toLowerCase():""),r=i[o.htmlTag],r&&r!==i.div&&(o.markup=t.trim(o.markup)),o}function E(e,t){function n(i,o,a){var s,d,l,u=de.onStore[e];if(i&&typeof i===Ie&&!i.nodeType&&!i.markup&&!i.getTgt&&!("viewModel"===e&&i.getters||i.extend)){for(d in i)n(d,i[d],o);return o||ee}return void 0===o&&(o=i,i=void 0),i&&""+i!==i&&(a=o,o=i,i=void 0),l=a?"viewModel"===e?a:a[r]=a[r]||{}:n,s=t.compile,null===o?i&&delete l[i]:(s&&(o=s.call(l,i,o,a,0)||{},o._is=e),i&&(l[i]=o)),u&&u(i,o,a,s),o}var r=e+"s";ee[r]=n}function M(e){pe[e]=function(t){return arguments.length?(le[e]=t,pe):le[e]}}function N(e){function t(t,n){this.tgt=e.getTgt(t,n)}return ne(e)&&(e={getTgt:e}),e.baseMap&&(e=l(l({},e.baseMap),e)),e.map=function(e,n){return new t(e,n)},e}function S(e,t,n,r,i,o){var a,s,d,l,u,p,c,f,g=r,v="";if(t===!0?(n=t,t=void 0):typeof t!==Ie&&(t=void 0),(d=this.tag)?(u=this,g=g||u.view,l=g.getTmpl(d.template||u.tmpl),arguments.length||(e=g)):l=this,l){if(!r&&e&&"view"===e._is&&(g=e),g&&e===g&&(e=g.data),p=!g,we=we||p,g||((t=t||{}).root=e),!we||ue.useViews||l.useViews||g&&g!==Y)v=F(l,e,t,n,g,i,o,d);else{if(g?(c=g.data,f=g.index,g.index=qe):(g=Y,c=g.data,g.data=e,g.ctx=t),re(e)&&!n)for(a=0,s=e.length;a<s;a++)g.index=a,g.data=e[a],v+=l.fn(e[a],g,de);else g.data=e,v+=l.fn(e,g,de);g.data=c,g.index=f}p&&(we=void 0)}return v}function F(e,t,n,r,i,o,a,s){function d(e){_=l({},n),_[x]=e}var u,p,c,f,g,v,h,m,w,x,_,b,k="";if(s&&(w=s.tagName,b=s.tagCtx,n=n?Q(n,s.ctx):s.ctx,e===i.content?h=e!==i.ctx._wrp?i.ctx._wrp:void 0:e!==b.content?e===s.template?(h=b.tmpl,n._wrp=b.content):h=b.content||i.content:h=i.content,b.props.link===!1&&(n=n||{},n.link=!1),(x=b.props.itemVar)&&("~"!==x.charAt(0)&&O("Use itemVar='~myItem'"),x=x.slice(1))),i&&(a=a||i._.onRender,n=Q(n,i.ctx)),o===!0&&(v=!0,o=0),a&&(n&&n.link===!1||s&&s._.noVws)&&(a=void 0),m=a,a===!0&&(m=void 0,a=i._.onRender),n=e.helpers?Q(e.helpers,n):n,_=n,re(t)&&!r)for(c=v?i:void 0!==o&&i||new y(n,"array",i,t,e,o,a,h),i&&i._.useKey&&(c._.bnd=!s||s._.bnd&&s),u=0,p=t.length;u<p;u++)x&&d(t[u]),f=new y(_,"item",c,t[u],e,(o||0)+u,a,c.content),f._.it=x,g=e.fn(t[u],f,de),k+=c._.onRender?c._.onRender(g,f):g;else x&&d(t),c=v?i:new y(_,w||"data",i,t,e,o,a,h),c._.it=x,k+=e.fn(t,c,de);return s&&(c.tag=s,c.tagElse=b.index,b.contentView=c),m?m(k,c):k}function P(e,t,n){var r=void 0!==n?ne(n)?n.call(t.data,e,t):n||"":"{Error: "+(e.message||e)+"}";return le.onError&&void 0!==(n=le.onError.call(t.data,e,n&&r,t))&&(r=n),t&&!t.linkCtx?oe.html(r):r}function I(e){throw new de.Err(e)}function O(e){I("Syntax error\n"+e)}function U(e,t,n,r,i){function o(t){t-=v,t&&m.push(e.substr(v,t).replace(ke,"\\n"))}function a(t,n){t&&(t+="}}",O((n?"{{"+n+"}} block has {{/"+t+" without {{"+t:"Unmatched or missing {{/"+t)+", in template:\n"+e))}function s(s,d,l,c,g,x,_,b,y,k,C,T){(_&&d||y&&!l||b&&":"===b.slice(-1)||k)&&O(s),x&&(g=":",c=Pe),y=y||n&&!i;var j,A=(d||n)&&[[]],R="",V="",$="",E="",M="",N="",S="",F="",P=!y&&!g;l=l||(b=b||"#data",g),o(T),v=T+s.length,_?f&&m.push(["*","\n"+b.replace(/^:/,"ret+= ").replace(Ce,"$1")+";\n"]):l?("else"===l&&(Ae.test(b)&&O('for "{{else if expr}}" use "{{else expr}}"'),A=w[8]&&[[]],w[9]=e.substring(w[9],T),w=h.pop(),m=w[2],P=!0),b&&B(b.replace(ke," "),A,t).replace(je,function(e,t,n,r,i,o,a,s){return r="'"+i+"':",a?(V+=o+",",E+="'"+s+"',"):n?($+=r+"j._cp("+o+',"'+s+'",view),',N+=r+"'"+s+"',"):t?S+=o:("trigger"===i&&(F+=o),"lateRender"===i&&(j=s),R+=r+o+",",M+=r+"'"+s+"',",p=p||Ee.test(i)),""}).slice(0,-1),A&&A[0]&&A.pop(),u=[l,c||!!r||p||"",P&&[],J(E||(":"===l?"'#data',":""),M,N),J(V||(":"===l?"data,":""),R,$),S,F,j,A||0],m.push(u),P&&(h.push(w),w=u,w[9]=v)):C&&(a(C!==w[0]&&"else"!==w[0]&&C,w[0]),w[9]=e.substring(w[9],T),w=h.pop()),a(!w&&C),m=w[2]}var d,l,u,p,c,f=le.allowCode||t&&t.allowCode||pe.allowCode===!0,g=[],v=0,h=[],m=g,w=[,,g];if(f&&t._is&&(t.allowCode=f),n&&(void 0!==r&&(e=e.slice(0,-r.length-2)+ge),e=ce+e+ve),a(h[0]&&h[0][2].pop()[0]),e.replace(X,s),o(e.length),(v=g[g.length-1])&&a(""+v!==v&&+v[9]===v[9]&&v[0]),n){for(l=L(g,e,n),c=[],d=g.length;d--;)c.unshift(g[d][8]);q(l,c)}else l=L(g,t);return l}function q(e,t){var n,r,i=0,o=t.length;for(e.deps=[],e.paths=[];i<o;i++){e.paths.push(r=t[i]);for(n in r)"_jsvto"!==n&&r.hasOwnProperty(n)&&r[n].length&&!r[n].skp&&(e.deps=e.deps.concat(r[n]))}}function J(e,t,n){return[e.slice(0,-1),t.slice(0,-1),n.slice(0,-1)]}function K(e,t){return"\n\t"+(t?t+":{":"")+"args:["+e[0]+"]"+(e[1]||!t?",\n\tprops:{"+e[1]+"}":"")+(e[2]?",\n\tctx:{"+e[2]+"}":"")}function B(e,t,n){function r(r,m,w,x,_,b,y,k,C,T,j,A,R,V,$,E,M,N,S,F){function P(e,n,r,a,s,d,p,c){var f="."===r;if(r&&(_=_.slice(n.length),/^\.?constructor$/.test(c||_)&&O(e),f||(e=(a?'view.ctxPrm("'+a+'")':s?"view":"data")+(c?(d?"."+d:a?"":s?"":"."+r)+(p||""):(c=a?"":s?d||"":r,"")),e+=c?"."+c:"",e=n+("view.data"===e.slice(0,9)?e.slice(5):e)),l)){if(J="linkTo"===i?o=t._jsvto=t._jsvto||[]:u.bd,K=f&&J[J.length-1]){if(K._cpfn){for(;K.sb;)K=K.sb;K.bnd&&(_="^"+_.slice(1)),K.sb=_,K.bnd=K.bnd||"^"===_.charAt(0)}}else J.push(_);h[g]=S+(f?1:0)}return e}x&&!k&&(_=x+_),b=b||"",w=w||m||A,_=_||C,T=T||M||"";var I,q,J,K,B,L=")";if("["===T&&(T="[j._sq(",L=")]"),!y||d||s){if(l&&E&&!d&&!s&&(!i||a||o)&&(I=h[g-1],F.length-1>S-(I||0))){if(I=F.slice(I,S+r.length),q!==!0)if(J=o||p[g-1].bd,K=J[J.length-1],K&&K.prm){for(;K.sb&&K.sb.prm;)K=K.sb;B=K.sb={path:K.sb,bnd:K.bnd}}else J.push(B={path:J.pop()});E=fe+":"+I+" onerror=''"+ge,q=f[E],q||(f[E]=!0,f[E]=q=U(E,n,!0)),q!==!0&&B&&(B._cpfn=q,B.prm=u.bd,B.bnd=B.bnd||B.path&&B.path.indexOf("^")>=0)}return d?(d=!R,d?r:A+'"'):s?(s=!V,s?r:A+'"'):(w?(h[g]=S++,u=p[++g]={bd:[]},w):"")+(N?g?"":(c=F.slice(c,S),(i?(i=a=o=!1,"\b"):"\b,")+c+(c=S+r.length,l&&t.push(u.bd=[]),"\b")):k?(g&&O(e),l&&t.pop(),i=_,a=x,c=S+r.length,l&&(l=u.bd=t[i]=[],l.skp=!x),_+":"):_?_.split("^").join(".").replace(be,P)+(T?(u=p[++g]={bd:[]},v[g]=L,T):b):b?b:$?($=v[g]||$,v[g]=!1,u=p[--g],$+(T?(u=p[++g],v[g]=L,T):"")):j?(v[g]||O(e),","):m?"":(d=R,s=V,'"'))}O(e)}var i,o,a,s,d,l=t&&t[0],u={bd:l},p={0:u},c=0,f=(n?n.links:l&&(l.links=l.links||{}))||Y.tmpl.links,g=0,v={},h={},m=(e+(n?" ":"")).replace(ye,r);return!g&&m||O(e)}function L(e,t,n){var r,i,o,a,s,d,l,u,p,c,f,g,v,h,m,w,x,_,b,y,k,C,T,j,A,R,V,E,M,N,S,F=0,P=ue.useViews||t.useViews||t.tags||t.templates||t.helpers||t.converters,I="",U={},J=e.length;for(""+t===t?(_=n?'data-link="'+t.replace(ke," ").slice(1,-1)+'"':t,t=0):(_=t.tmplName||"unnamed",t.allowCode&&(U.allowCode=!0),t.debug&&(U.debug=!0),f=t.bnds,x=t.tmpls),r=0;r<J;r++)if(i=e[r],""+i===i)I+='\n+"'+i+'"';else if(o=i[0],"*"===o)I+=";\n"+i[1]+"\nret=ret";else{if(a=i[1],k=!n&&i[2],s=K(i[3],"params")+"},"+K(v=i[4]),N=i[6],S=i[7],C=i[9]&&i[9].replace(Ce,"$1"),(A="else"===o)?g&&g.push(i[8]):(E=i[5]||le.debugMode!==!1&&"undefined",f&&(g=i[8])&&(g=[g],F=f.push(1))),P=P||v[1]||v[2]||g||/view.(?!index)/.test(v[0]),(R=":"===o)?a&&(o=a===Pe?">":a+o):(k&&(b=$(C,U),b.tmplName=_+"/"+o,b.useViews=b.useViews||P,L(k,b),P=b.useViews,x.push(b)),A||(y=o,P=P||o&&(!se[o]||!se[o].flow),j=I,I=""),T=e[r+1],T=T&&"else"===T[0]),M=E?";\ntry{\nret+=":"\n+",h="",m="",R&&(g||N||a&&a!==Pe||S)){if(V=new Function("data,view,j,u","// "+_+" "+ ++F+" "+o+"\nreturn {"+s+"};"),V._er=E,V._tag=o,V._bd=!!g,V._lr=S,n)return V;q(V,g),w='c("'+a+'",view,',c=!0,h=w+F+",",m=")"}if(I+=R?(n?(E?"try{\n":"")+"return ":M)+(c?(c=void 0,P=p=!0,w+(V?(f[F-1]=V,F):"{"+s+"}")+")"):">"===o?(l=!0,"h("+v[0]+")"):(u=!0,"((v="+v[0]+")!=null?v:"+(n?"null)":'"")'))):(d=!0,"\n{view:view,tmpl:"+(k?x.length:"0")+","+s+"},"),y&&!T){if(I="["+I.slice(0,-1)+"]",w='t("'+y+'",view,this,',n||g){if(I=new Function("data,view,j,u"," // "+_+" "+F+" "+y+"\nreturn "+I+";"),I._er=E,I._tag=y,g&&q(f[F-1]=I,g),I._lr=S,n)return I;h=w+F+",undefined,",m=")"}I=j+M+w+(I.deps&&F||I)+")",g=0,y=0}E&&!T&&(P=!0,I+=";\n}catch(e){ret"+(n?"urn ":"+=")+h+"j._err(e,view,"+E+")"+m+";}"+(n?"":"ret=ret"))}I="// "+_+"\nvar v"+(d?",t=j._tag":"")+(p?",c=j._cnvt":"")+(l?",h=j._html":"")+(n?";\n":',ret=""\n')+(U.debug?"debugger;":"")+I+(n?"\n":";\nreturn ret;");try{I=new Function("data,view,j,u",I)}catch(B){O("Compiled template code:\n\n"+I+'\n: "'+(B.message||B)+'"')}return t&&(t.fn=I,t.useViews=!!P),I}function Q(e,t){return e&&e!==t?t?l(l({},t),e):e:t&&l({},t)}function H(e){return Fe[e]||(Fe[e]="&#"+e.charCodeAt(0)+";")}function D(e){var t,n,r=[];if(typeof e===Ie)for(t in e)n=e[t],t!==te&&e.hasOwnProperty(t)&&!ne(n)&&r.push({key:t,prop:n});return r}function Z(e,n,r){var i=this.jquery&&(this[0]||I("Unknown template")),o=i.getAttribute(Oe);return S.call(o&&t.data(i)[Ue]||ie(i),e,n,r)}function z(e){return void 0!=e?$e.test(e)&&(""+e).replace(Ne,H)||e:""}var G=t===!1;t=t&&t.fn?t:e.jQuery;var W,X,Y,ee,te,ne,re,ie,oe,ae,se,de,le,ue,pe,ce,fe,ge,ve,he,me,we,xe="v0.9.90",_e="_ocp",be=/^(!*?)(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,ye=/(\()(?=\s*\()|(?:([([])\s*)?(?:(\^?)(!*?[#~]?[\w$.^]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*:?\/]|(=))\s*|(!*?[#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*(([)\]])(?=\s*[.^]|\s*$|[^([])|[)\]])([([]?))|(\s+)/g,ke=/[ \t]*(\r\n|\n|\r)/g,Ce=/\\(['"])/g,Te=/['"\\]/g,je=/(?:\x08|^)(onerror:)?(?:(~?)(([\w$_\.]+):)?([^\x08]+))\x08(,)?([^\x08]+)/gi,Ae=/^if\s/,Re=/<(\w+)[>\s]/,Ve=/[\x00`><"'&=]/g,$e=/[\x00`><\"'&=]/,Ee=/^on[A-Z]|^convert(Back)?$/,Me=/^\#\d+_`[\s\S]*\/\d+_`$/,Ne=Ve,Se=0,Fe={"&":"&amp;","<":"&lt;",">":"&gt;","\0":"&#0;","'":"&#39;",'"':"&#34;","`":"&#96;","=":"&#61;"},Pe="html",Ie="object",Oe="data-jsv-tmpl",Ue="jsvTmpl",qe="For #index in nested block use #getIndex().",Je={},Ke=e.jsrender,Be=Ke&&t&&!t.render,Le={template:{compile:j},tag:{compile:C},viewModel:{compile:V},helper:{},converter:{}};if(ee={jsviews:xe,sub:{View:y,Err:d,tmplFn:U,parse:B,extend:l,extendCtx:Q,syntaxErr:O,onStore:{template:function(e,t){null===t?delete Je[e]:Je[e]=t}},addSetting:M,settings:{allowCode:!1},advSet:a,_ths:i,_gm:r,_tg:function(){},_cnvt:h,_tag:b,_er:I,_err:P,_cp:o,_sq:function(e){return"constructor"===e&&O(""),e}},settings:{delimiters:u,advanced:function(e){return e?(l(ue,e),de.advSet(),pe):ue}},map:N},(d.prototype=new Error).constructor=d,c.depends=function(){return[this.get("item"),"index"]},f.depends="index",y.prototype={get:p,getIndex:f,getRsc:_,getTmpl:v,ctxPrm:g,_is:"view"},de=ee.sub,pe=ee.settings,!(Ke||t&&t.render)){for(W in Le)E(W,Le[W]);oe=ee.converters,ae=ee.helpers,se=ee.tags,de._tg.prototype={baseApply:T,cvtArgs:m,bndArgs:x,ctxPrm:g},Y=de.topView=new y,t?(t.fn.render=Z,te=t.expando,t.observable&&(l(de,t.views.sub),ee.map=t.views.map)):(t={},G&&(e.jsrender=t),t.renderFile=t.__express=t.compile=function(){throw"Node.js: use npm jsrender, or jsrender-node.js"},t.isFunction=function(e){return"function"==typeof e},t.isArray=Array.isArray||function(e){return"[object Array]"==={}.toString.call(e)},de._jq=function(e){e!==t&&(l(e,t),t=e,t.fn.render=Z,delete t.jsrender,te=t.expando)},t.jsrender=xe),le=de.settings,le.allowCode=!1,ne=t.isFunction,t.render=Je,t.views=ee,t.templates=ie=ee.templates;for(me in le)M(me);(pe.debugMode=function(e){return void 0===e?le.debugMode:(le.debugMode=e,le.onError=e+""===e?new Function("","return '"+e+"';"):ne(e)?e:void 0,pe)})(!1),ue=le.advanced={useViews:!1,_jsv:!1},se({"if":{render:function(e){var t=this,n=t.tagCtx,r=t.rendering.done||!e&&(arguments.length||!n.index)?"":(t.rendering.done=!0,void(t.selected=n.index));return r},contentCtx:!0,flow:!0},"for":{render:function(e){var t,n=!arguments.length,r=this,i=r.tagCtx,o="",a=0;return r.rendering.done||(t=n?i.view.data:e,void 0!==t&&(o+=i.render(t,n),a+=re(t)?t.length:1),(r.rendering.done=a)&&(r.selected=i.index)),o},flow:!0},props:{baseTag:"for",dataMap:N(D),flow:!0},include:{flow:!0},"*":{render:o,flow:!0},":*":{render:o,flow:!0},dbg:ae.dbg=oe.dbg=s}),oe({html:z,attr:z,url:function(e){return void 0!=e?encodeURI(""+e):null===e?e:""}})}return le=de.settings,re=(t||Ke).isArray,pe.delimiters("{{","}}","^"),Be&&Ke.views.sub._jq(t),t||Ke},window);


/*Type Ahead*/
/*!
 * typeahead.js 0.11.1
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2015 Twitter, Inc. and other contributors; Licensed MIT
 */
!function(a,b){"function"==typeof define&&define.amd?define("bloodhound",["jquery"],function(c){return a.Bloodhound=b(c)}):"object"==typeof exports?module.exports=b(require("jquery")):a.Bloodhound=b(jQuery)}(this,function(a){var b=function(){"use strict";return{isMsie:function(){return/(msie|trident)/i.test(navigator.userAgent)?navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]:!1},isBlankString:function(a){return!a||/^\s*$/.test(a)},escapeRegExChars:function(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},isString:function(a){return"string"==typeof a},isNumber:function(a){return"number"==typeof a},isArray:a.isArray,isFunction:a.isFunction,isObject:a.isPlainObject,isUndefined:function(a){return"undefined"==typeof a},isElement:function(a){return!(!a||1!==a.nodeType)},isJQuery:function(b){return b instanceof a},toStr:function(a){return b.isUndefined(a)||null===a?"":a+""},bind:a.proxy,each:function(b,c){function d(a,b){return c(b,a)}a.each(b,d)},map:a.map,filter:a.grep,every:function(b,c){var d=!0;return b?(a.each(b,function(a,e){return(d=c.call(null,e,a,b))?void 0:!1}),!!d):d},some:function(b,c){var d=!1;return b?(a.each(b,function(a,e){return(d=c.call(null,e,a,b))?!1:void 0}),!!d):d},mixin:a.extend,identity:function(a){return a},clone:function(b){return a.extend(!0,{},b)},getIdGenerator:function(){var a=0;return function(){return a++}},templatify:function(b){function c(){return String(b)}return a.isFunction(b)?b:c},defer:function(a){setTimeout(a,0)},debounce:function(a,b,c){var d,e;return function(){var f,g,h=this,i=arguments;return f=function(){d=null,c||(e=a.apply(h,i))},g=c&&!d,clearTimeout(d),d=setTimeout(f,b),g&&(e=a.apply(h,i)),e}},throttle:function(a,b){var c,d,e,f,g,h;return g=0,h=function(){g=new Date,e=null,f=a.apply(c,d)},function(){var i=new Date,j=b-(i-g);return c=this,d=arguments,0>=j?(clearTimeout(e),e=null,g=i,f=a.apply(c,d)):e||(e=setTimeout(h,j)),f}},stringify:function(a){return b.isString(a)?a:JSON.stringify(a)},noop:function(){}}}(),c="0.11.1",d=function(){"use strict";function a(a){return a=b.toStr(a),a?a.split(/\s+/):[]}function c(a){return a=b.toStr(a),a?a.split(/\W+/):[]}function d(a){return function(c){return c=b.isArray(c)?c:[].slice.call(arguments,0),function(d){var e=[];return b.each(c,function(c){e=e.concat(a(b.toStr(d[c])))}),e}}}return{nonword:c,whitespace:a,obj:{nonword:d(c),whitespace:d(a)}}}(),e=function(){"use strict";function c(c){this.maxSize=b.isNumber(c)?c:100,this.reset(),this.maxSize<=0&&(this.set=this.get=a.noop)}function d(){this.head=this.tail=null}function e(a,b){this.key=a,this.val=b,this.prev=this.next=null}return b.mixin(c.prototype,{set:function(a,b){var c,d=this.list.tail;this.size>=this.maxSize&&(this.list.remove(d),delete this.hash[d.key],this.size--),(c=this.hash[a])?(c.val=b,this.list.moveToFront(c)):(c=new e(a,b),this.list.add(c),this.hash[a]=c,this.size++)},get:function(a){var b=this.hash[a];return b?(this.list.moveToFront(b),b.val):void 0},reset:function(){this.size=0,this.hash={},this.list=new d}}),b.mixin(d.prototype,{add:function(a){this.head&&(a.next=this.head,this.head.prev=a),this.head=a,this.tail=this.tail||a},remove:function(a){a.prev?a.prev.next=a.next:this.head=a.next,a.next?a.next.prev=a.prev:this.tail=a.prev},moveToFront:function(a){this.remove(a),this.add(a)}}),c}(),f=function(){"use strict";function c(a,c){this.prefix=["__",a,"__"].join(""),this.ttlKey="__ttl__",this.keyMatcher=new RegExp("^"+b.escapeRegExChars(this.prefix)),this.ls=c||h,!this.ls&&this._noop()}function d(){return(new Date).getTime()}function e(a){return JSON.stringify(b.isUndefined(a)?null:a)}function f(b){return a.parseJSON(b)}function g(a){var b,c,d=[],e=h.length;for(b=0;e>b;b++)(c=h.key(b)).match(a)&&d.push(c.replace(a,""));return d}var h;try{h=window.localStorage,h.setItem("~~~","!"),h.removeItem("~~~")}catch(i){h=null}return b.mixin(c.prototype,{_prefix:function(a){return this.prefix+a},_ttlKey:function(a){return this._prefix(a)+this.ttlKey},_noop:function(){this.get=this.set=this.remove=this.clear=this.isExpired=b.noop},_safeSet:function(a,b){try{this.ls.setItem(a,b)}catch(c){"QuotaExceededError"===c.name&&(this.clear(),this._noop())}},get:function(a){return this.isExpired(a)&&this.remove(a),f(this.ls.getItem(this._prefix(a)))},set:function(a,c,f){return b.isNumber(f)?this._safeSet(this._ttlKey(a),e(d()+f)):this.ls.removeItem(this._ttlKey(a)),this._safeSet(this._prefix(a),e(c))},remove:function(a){return this.ls.removeItem(this._ttlKey(a)),this.ls.removeItem(this._prefix(a)),this},clear:function(){var a,b=g(this.keyMatcher);for(a=b.length;a--;)this.remove(b[a]);return this},isExpired:function(a){var c=f(this.ls.getItem(this._ttlKey(a)));return b.isNumber(c)&&d()>c?!0:!1}}),c}(),g=function(){"use strict";function c(a){a=a||{},this.cancelled=!1,this.lastReq=null,this._send=a.transport,this._get=a.limiter?a.limiter(this._get):this._get,this._cache=a.cache===!1?new e(0):h}var d=0,f={},g=6,h=new e(10);return c.setMaxPendingRequests=function(a){g=a},c.resetCache=function(){h.reset()},b.mixin(c.prototype,{_fingerprint:function(b){return b=b||{},b.url+b.type+a.param(b.data||{})},_get:function(a,b){function c(a){b(null,a),k._cache.set(i,a)}function e(){b(!0)}function h(){d--,delete f[i],k.onDeckRequestArgs&&(k._get.apply(k,k.onDeckRequestArgs),k.onDeckRequestArgs=null)}var i,j,k=this;i=this._fingerprint(a),this.cancelled||i!==this.lastReq||((j=f[i])?j.done(c).fail(e):g>d?(d++,f[i]=this._send(a).done(c).fail(e).always(h)):this.onDeckRequestArgs=[].slice.call(arguments,0))},get:function(c,d){var e,f;d=d||a.noop,c=b.isString(c)?{url:c}:c||{},f=this._fingerprint(c),this.cancelled=!1,this.lastReq=f,(e=this._cache.get(f))?d(null,e):this._get(c,d)},cancel:function(){this.cancelled=!0}}),c}(),h=window.SearchIndex=function(){"use strict";function c(c){c=c||{},c.datumTokenizer&&c.queryTokenizer||a.error("datumTokenizer and queryTokenizer are both required"),this.identify=c.identify||b.stringify,this.datumTokenizer=c.datumTokenizer,this.queryTokenizer=c.queryTokenizer,this.reset()}function d(a){return a=b.filter(a,function(a){return!!a}),a=b.map(a,function(a){return a.toLowerCase()})}function e(){var a={};return a[i]=[],a[h]={},a}function f(a){for(var b={},c=[],d=0,e=a.length;e>d;d++)b[a[d]]||(b[a[d]]=!0,c.push(a[d]));return c}function g(a,b){var c=0,d=0,e=[];a=a.sort(),b=b.sort();for(var f=a.length,g=b.length;f>c&&g>d;)a[c]<b[d]?c++:a[c]>b[d]?d++:(e.push(a[c]),c++,d++);return e}var h="c",i="i";return b.mixin(c.prototype,{bootstrap:function(a){this.datums=a.datums,this.trie=a.trie},add:function(a){var c=this;a=b.isArray(a)?a:[a],b.each(a,function(a){var f,g;c.datums[f=c.identify(a)]=a,g=d(c.datumTokenizer(a)),b.each(g,function(a){var b,d,g;for(b=c.trie,d=a.split("");g=d.shift();)b=b[h][g]||(b[h][g]=e()),b[i].push(f)})})},get:function(a){var c=this;return b.map(a,function(a){return c.datums[a]})},search:function(a){var c,e,j=this;return c=d(this.queryTokenizer(a)),b.each(c,function(a){var b,c,d,f;if(e&&0===e.length)return!1;for(b=j.trie,c=a.split("");b&&(d=c.shift());)b=b[h][d];return b&&0===c.length?(f=b[i].slice(0),void(e=e?g(e,f):f)):(e=[],!1)}),e?b.map(f(e),function(a){return j.datums[a]}):[]},all:function(){var a=[];for(var b in this.datums)a.push(this.datums[b]);return a},reset:function(){this.datums={},this.trie=e()},serialize:function(){return{datums:this.datums,trie:this.trie}}}),c}(),i=function(){"use strict";function a(a){this.url=a.url,this.ttl=a.ttl,this.cache=a.cache,this.prepare=a.prepare,this.transform=a.transform,this.transport=a.transport,this.thumbprint=a.thumbprint,this.storage=new f(a.cacheKey)}var c;return c={data:"data",protocol:"protocol",thumbprint:"thumbprint"},b.mixin(a.prototype,{_settings:function(){return{url:this.url,type:"GET",dataType:"json"}},store:function(a){this.cache&&(this.storage.set(c.data,a,this.ttl),this.storage.set(c.protocol,location.protocol,this.ttl),this.storage.set(c.thumbprint,this.thumbprint,this.ttl))},fromCache:function(){var a,b={};return this.cache?(b.data=this.storage.get(c.data),b.protocol=this.storage.get(c.protocol),b.thumbprint=this.storage.get(c.thumbprint),a=b.thumbprint!==this.thumbprint||b.protocol!==location.protocol,b.data&&!a?b.data:null):null},fromNetwork:function(a){function b(){a(!0)}function c(b){a(null,e.transform(b))}var d,e=this;a&&(d=this.prepare(this._settings()),this.transport(d).fail(b).done(c))},clear:function(){return this.storage.clear(),this}}),a}(),j=function(){"use strict";function a(a){this.url=a.url,this.prepare=a.prepare,this.transform=a.transform,this.transport=new g({cache:a.cache,limiter:a.limiter,transport:a.transport})}return b.mixin(a.prototype,{_settings:function(){return{url:this.url,type:"GET",dataType:"json"}},get:function(a,b){function c(a,c){b(a?[]:e.transform(c))}var d,e=this;if(b)return a=a||"",d=this.prepare(a,this._settings()),this.transport.get(d,c)},cancelLastRequest:function(){this.transport.cancel()}}),a}(),k=function(){"use strict";function d(d){var e;return d?(e={url:null,ttl:864e5,cache:!0,cacheKey:null,thumbprint:"",prepare:b.identity,transform:b.identity,transport:null},d=b.isString(d)?{url:d}:d,d=b.mixin(e,d),!d.url&&a.error("prefetch requires url to be set"),d.transform=d.filter||d.transform,d.cacheKey=d.cacheKey||d.url,d.thumbprint=c+d.thumbprint,d.transport=d.transport?h(d.transport):a.ajax,d):null}function e(c){var d;if(c)return d={url:null,cache:!0,prepare:null,replace:null,wildcard:null,limiter:null,rateLimitBy:"debounce",rateLimitWait:300,transform:b.identity,transport:null},c=b.isString(c)?{url:c}:c,c=b.mixin(d,c),!c.url&&a.error("remote requires url to be set"),c.transform=c.filter||c.transform,c.prepare=f(c),c.limiter=g(c),c.transport=c.transport?h(c.transport):a.ajax,delete c.replace,delete c.wildcard,delete c.rateLimitBy,delete c.rateLimitWait,c}function f(a){function b(a,b){return b.url=f(b.url,a),b}function c(a,b){return b.url=b.url.replace(g,encodeURIComponent(a)),b}function d(a,b){return b}var e,f,g;return e=a.prepare,f=a.replace,g=a.wildcard,e?e:e=f?b:a.wildcard?c:d}function g(a){function c(a){return function(c){return b.debounce(c,a)}}function d(a){return function(c){return b.throttle(c,a)}}var e,f,g;return e=a.limiter,f=a.rateLimitBy,g=a.rateLimitWait,e||(e=/^throttle$/i.test(f)?d(g):c(g)),e}function h(c){return function(d){function e(a){b.defer(function(){g.resolve(a)})}function f(a){b.defer(function(){g.reject(a)})}var g=a.Deferred();return c(d,e,f),g}}return function(c){var f,g;return f={initialize:!0,identify:b.stringify,datumTokenizer:null,queryTokenizer:null,sufficient:5,sorter:null,local:[],prefetch:null,remote:null},c=b.mixin(f,c||{}),!c.datumTokenizer&&a.error("datumTokenizer is required"),!c.queryTokenizer&&a.error("queryTokenizer is required"),g=c.sorter,c.sorter=g?function(a){return a.sort(g)}:b.identity,c.local=b.isFunction(c.local)?c.local():c.local,c.prefetch=d(c.prefetch),c.remote=e(c.remote),c}}(),l=function(){"use strict";function c(a){a=k(a),this.sorter=a.sorter,this.identify=a.identify,this.sufficient=a.sufficient,this.local=a.local,this.remote=a.remote?new j(a.remote):null,this.prefetch=a.prefetch?new i(a.prefetch):null,this.index=new h({identify:this.identify,datumTokenizer:a.datumTokenizer,queryTokenizer:a.queryTokenizer}),a.initialize!==!1&&this.initialize()}var e;return e=window&&window.Bloodhound,c.noConflict=function(){return window&&(window.Bloodhound=e),c},c.tokenizers=d,b.mixin(c.prototype,{__ttAdapter:function(){function a(a,b,d){return c.search(a,b,d)}function b(a,b){return c.search(a,b)}var c=this;return this.remote?a:b},_loadPrefetch:function(){function b(a,b){return a?c.reject():(e.add(b),e.prefetch.store(e.index.serialize()),void c.resolve())}var c,d,e=this;return c=a.Deferred(),this.prefetch?(d=this.prefetch.fromCache())?(this.index.bootstrap(d),c.resolve()):this.prefetch.fromNetwork(b):c.resolve(),c.promise()},_initialize:function(){function a(){b.add(b.local)}var b=this;return this.clear(),(this.initPromise=this._loadPrefetch()).done(a),this.initPromise},initialize:function(a){return!this.initPromise||a?this._initialize():this.initPromise},add:function(a){return this.index.add(a),this},get:function(a){return a=b.isArray(a)?a:[].slice.call(arguments),this.index.get(a)},search:function(a,c,d){function e(a){var c=[];b.each(a,function(a){!b.some(f,function(b){return g.identify(a)===g.identify(b)})&&c.push(a)}),d&&d(c)}var f,g=this;return f=this.sorter(this.index.search(a)),c(this.remote?f.slice():f),this.remote&&f.length<this.sufficient?this.remote.get(a,e):this.remote&&this.remote.cancelLastRequest(),this},all:function(){return this.index.all()},clear:function(){return this.index.reset(),this},clearPrefetchCache:function(){return this.prefetch&&this.prefetch.clear(),this},clearRemoteCache:function(){return g.resetCache(),this},ttAdapter:function(){return this.__ttAdapter()}}),c}();return l}),function(a,b){"function"==typeof define&&define.amd?define("typeahead.js",["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){var b=function(){"use strict";return{isMsie:function(){return/(msie|trident)/i.test(navigator.userAgent)?navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]:!1},isBlankString:function(a){return!a||/^\s*$/.test(a)},escapeRegExChars:function(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},isString:function(a){return"string"==typeof a},isNumber:function(a){return"number"==typeof a},isArray:a.isArray,isFunction:a.isFunction,isObject:a.isPlainObject,isUndefined:function(a){return"undefined"==typeof a},isElement:function(a){return!(!a||1!==a.nodeType)},isJQuery:function(b){return b instanceof a},toStr:function(a){return b.isUndefined(a)||null===a?"":a+""},bind:a.proxy,each:function(b,c){function d(a,b){return c(b,a)}a.each(b,d)},map:a.map,filter:a.grep,every:function(b,c){var d=!0;return b?(a.each(b,function(a,e){return(d=c.call(null,e,a,b))?void 0:!1}),!!d):d},some:function(b,c){var d=!1;return b?(a.each(b,function(a,e){return(d=c.call(null,e,a,b))?!1:void 0}),!!d):d},mixin:a.extend,identity:function(a){return a},clone:function(b){return a.extend(!0,{},b)},getIdGenerator:function(){var a=0;return function(){return a++}},templatify:function(b){function c(){return String(b)}return a.isFunction(b)?b:c},defer:function(a){setTimeout(a,0)},debounce:function(a,b,c){var d,e;return function(){var f,g,h=this,i=arguments;return f=function(){d=null,c||(e=a.apply(h,i))},g=c&&!d,clearTimeout(d),d=setTimeout(f,b),g&&(e=a.apply(h,i)),e}},throttle:function(a,b){var c,d,e,f,g,h;return g=0,h=function(){g=new Date,e=null,f=a.apply(c,d)},function(){var i=new Date,j=b-(i-g);return c=this,d=arguments,0>=j?(clearTimeout(e),e=null,g=i,f=a.apply(c,d)):e||(e=setTimeout(h,j)),f}},stringify:function(a){return b.isString(a)?a:JSON.stringify(a)},noop:function(){}}}(),c=function(){"use strict";function a(a){var g,h;return h=b.mixin({},f,a),g={css:e(),classes:h,html:c(h),selectors:d(h)},{css:g.css,html:g.html,classes:g.classes,selectors:g.selectors,mixin:function(a){b.mixin(a,g)}}}function c(a){return{wrapper:'<span class="'+a.wrapper+'"></span>',menu:'<div class="'+a.menu+'"></div>'}}function d(a){var c={};return b.each(a,function(a,b){c[b]="."+a}),c}function e(){var a={wrapper:{position:"relative",display:"inline-block"},hint:{position:"absolute",top:"0",left:"0",borderColor:"transparent",boxShadow:"none",opacity:"1"},input:{position:"relative",verticalAlign:"top",backgroundColor:"transparent"},inputWithNoHint:{position:"relative",verticalAlign:"top"},menu:{position:"absolute",top:"100%",left:"0",zIndex:"100",display:"none"},ltr:{left:"0",right:"auto"},rtl:{left:"auto",right:" 0"}};return b.isMsie()&&b.mixin(a.input,{backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"}),a}var f={wrapper:"twitter-typeahead",input:"tt-input",hint:"tt-hint",menu:"tt-menu",dataset:"tt-dataset",suggestion:"tt-suggestion",selectable:"tt-selectable",empty:"tt-empty",open:"tt-open",cursor:"tt-cursor",highlight:"tt-highlight"};return a}(),d=function(){"use strict";function c(b){b&&b.el||a.error("EventBus initialized without el"),this.$el=a(b.el)}var d,e;return d="typeahead:",e={render:"rendered",cursorchange:"cursorchanged",select:"selected",autocomplete:"autocompleted"},b.mixin(c.prototype,{_trigger:function(b,c){var e;return e=a.Event(d+b),(c=c||[]).unshift(e),this.$el.trigger.apply(this.$el,c),e},before:function(a){var b,c;return b=[].slice.call(arguments,1),c=this._trigger("before"+a,b),c.isDefaultPrevented()},trigger:function(a){var b;this._trigger(a,[].slice.call(arguments,1)),(b=e[a])&&this._trigger(b,[].slice.call(arguments,1))}}),c}(),e=function(){"use strict";function a(a,b,c,d){var e;if(!c)return this;for(b=b.split(i),c=d?h(c,d):c,this._callbacks=this._callbacks||{};e=b.shift();)this._callbacks[e]=this._callbacks[e]||{sync:[],async:[]},this._callbacks[e][a].push(c);return this}function b(b,c,d){return a.call(this,"async",b,c,d)}function c(b,c,d){return a.call(this,"sync",b,c,d)}function d(a){var b;if(!this._callbacks)return this;for(a=a.split(i);b=a.shift();)delete this._callbacks[b];return this}function e(a){var b,c,d,e,g;if(!this._callbacks)return this;for(a=a.split(i),d=[].slice.call(arguments,1);(b=a.shift())&&(c=this._callbacks[b]);)e=f(c.sync,this,[b].concat(d)),g=f(c.async,this,[b].concat(d)),e()&&j(g);return this}function f(a,b,c){function d(){for(var d,e=0,f=a.length;!d&&f>e;e+=1)d=a[e].apply(b,c)===!1;return!d}return d}function g(){var a;return a=window.setImmediate?function(a){setImmediate(function(){a()})}:function(a){setTimeout(function(){a()},0)}}function h(a,b){return a.bind?a.bind(b):function(){a.apply(b,[].slice.call(arguments,0))}}var i=/\s+/,j=g();return{onSync:c,onAsync:b,off:d,trigger:e}}(),f=function(a){"use strict";function c(a,c,d){for(var e,f=[],g=0,h=a.length;h>g;g++)f.push(b.escapeRegExChars(a[g]));return e=d?"\\b("+f.join("|")+")\\b":"("+f.join("|")+")",c?new RegExp(e):new RegExp(e,"i")}var d={node:null,pattern:null,tagName:"strong",className:null,wordsOnly:!1,caseSensitive:!1};return function(e){function f(b){var c,d,f;return(c=h.exec(b.data))&&(f=a.createElement(e.tagName),e.className&&(f.className=e.className),d=b.splitText(c.index),d.splitText(c[0].length),f.appendChild(d.cloneNode(!0)),b.parentNode.replaceChild(f,d)),!!c}function g(a,b){for(var c,d=3,e=0;e<a.childNodes.length;e++)c=a.childNodes[e],c.nodeType===d?e+=b(c)?1:0:g(c,b)}var h;e=b.mixin({},d,e),e.node&&e.pattern&&(e.pattern=b.isArray(e.pattern)?e.pattern:[e.pattern],h=c(e.pattern,e.caseSensitive,e.wordsOnly),g(e.node,f))}}(window.document),g=function(){"use strict";function c(c,e){c=c||{},c.input||a.error("input is missing"),e.mixin(this),this.$hint=a(c.hint),this.$input=a(c.input),this.query=this.$input.val(),this.queryWhenFocused=this.hasFocus()?this.query:null,this.$overflowHelper=d(this.$input),this._checkLanguageDirection(),0===this.$hint.length&&(this.setHint=this.getHint=this.clearHint=this.clearHintIfInvalid=b.noop)}function d(b){return a('<pre aria-hidden="true"></pre>').css({position:"absolute",visibility:"hidden",whiteSpace:"pre",fontFamily:b.css("font-family"),fontSize:b.css("font-size"),fontStyle:b.css("font-style"),fontVariant:b.css("font-variant"),fontWeight:b.css("font-weight"),wordSpacing:b.css("word-spacing"),letterSpacing:b.css("letter-spacing"),textIndent:b.css("text-indent"),textRendering:b.css("text-rendering"),textTransform:b.css("text-transform")}).insertAfter(b)}function f(a,b){return c.normalizeQuery(a)===c.normalizeQuery(b)}function g(a){return a.altKey||a.ctrlKey||a.metaKey||a.shiftKey}var h;return h={9:"tab",27:"esc",37:"left",39:"right",13:"enter",38:"up",40:"down"},c.normalizeQuery=function(a){return b.toStr(a).replace(/^\s*/g,"").replace(/\s{2,}/g," ")},b.mixin(c.prototype,e,{_onBlur:function(){this.resetInputValue(),this.trigger("blurred")},_onFocus:function(){this.queryWhenFocused=this.query,this.trigger("focused")},_onKeydown:function(a){var b=h[a.which||a.keyCode];this._managePreventDefault(b,a),b&&this._shouldTrigger(b,a)&&this.trigger(b+"Keyed",a)},_onInput:function(){this._setQuery(this.getInputValue()),this.clearHintIfInvalid(),this._checkLanguageDirection()},_managePreventDefault:function(a,b){var c;switch(a){case"up":case"down":c=!g(b);break;default:c=!1}c&&b.preventDefault()},_shouldTrigger:function(a,b){var c;switch(a){case"tab":c=!g(b);break;default:c=!0}return c},_checkLanguageDirection:function(){var a=(this.$input.css("direction")||"ltr").toLowerCase();this.dir!==a&&(this.dir=a,this.$hint.attr("dir",a),this.trigger("langDirChanged",a))},_setQuery:function(a,b){var c,d;c=f(a,this.query),d=c?this.query.length!==a.length:!1,this.query=a,b||c?!b&&d&&this.trigger("whitespaceChanged",this.query):this.trigger("queryChanged",this.query)},bind:function(){var a,c,d,e,f=this;return a=b.bind(this._onBlur,this),c=b.bind(this._onFocus,this),d=b.bind(this._onKeydown,this),e=b.bind(this._onInput,this),this.$input.on("blur.tt",a).on("focus.tt",c).on("keydown.tt",d),!b.isMsie()||b.isMsie()>9?this.$input.on("input.tt",e):this.$input.on("keydown.tt keypress.tt cut.tt paste.tt",function(a){h[a.which||a.keyCode]||b.defer(b.bind(f._onInput,f,a))}),this},focus:function(){this.$input.focus()},blur:function(){this.$input.blur()},getLangDir:function(){return this.dir},getQuery:function(){return this.query||""},setQuery:function(a,b){this.setInputValue(a),this._setQuery(a,b)},hasQueryChangedSinceLastFocus:function(){return this.query!==this.queryWhenFocused},getInputValue:function(){return this.$input.val()},setInputValue:function(a){this.$input.val(a),this.clearHintIfInvalid(),this._checkLanguageDirection()},resetInputValue:function(){this.setInputValue(this.query)},getHint:function(){return this.$hint.val()},setHint:function(a){this.$hint.val(a)},clearHint:function(){this.setHint("")},clearHintIfInvalid:function(){var a,b,c,d;a=this.getInputValue(),b=this.getHint(),c=a!==b&&0===b.indexOf(a),d=""!==a&&c&&!this.hasOverflow(),!d&&this.clearHint()},hasFocus:function(){return this.$input.is(":focus")},hasOverflow:function(){var a=this.$input.width()-2;return this.$overflowHelper.text(this.getInputValue()),this.$overflowHelper.width()>=a},isCursorAtEnd:function(){var a,c,d;return a=this.$input.val().length,c=this.$input[0].selectionStart,b.isNumber(c)?c===a:document.selection?(d=document.selection.createRange(),d.moveStart("character",-a),a===d.text.length):!0},destroy:function(){this.$hint.off(".tt"),this.$input.off(".tt"),this.$overflowHelper.remove(),this.$hint=this.$input=this.$overflowHelper=a("<div>")}}),c}(),h=function(){"use strict";function c(c,e){c=c||{},c.templates=c.templates||{},c.templates.notFound=c.templates.notFound||c.templates.empty,c.source||a.error("missing source"),c.node||a.error("missing node"),c.name&&!h(c.name)&&a.error("invalid dataset name: "+c.name),e.mixin(this),this.highlight=!!c.highlight,this.name=c.name||j(),this.limit=c.limit||5,this.displayFn=d(c.display||c.displayKey),this.templates=g(c.templates,this.displayFn),this.source=c.source.__ttAdapter?c.source.__ttAdapter():c.source,this.async=b.isUndefined(c.async)?this.source.length>2:!!c.async,this._resetLastSuggestion(),this.$el=a(c.node).addClass(this.classes.dataset).addClass(this.classes.dataset+"-"+this.name)}function d(a){function c(b){return b[a]}return a=a||b.stringify,b.isFunction(a)?a:c}function g(c,d){function e(b){return a("<div>").text(d(b))}return{notFound:c.notFound&&b.templatify(c.notFound),pending:c.pending&&b.templatify(c.pending),header:c.header&&b.templatify(c.header),footer:c.footer&&b.templatify(c.footer),suggestion:c.suggestion||e}}function h(a){return/^[_a-zA-Z0-9-]+$/.test(a)}var i,j;return i={val:"tt-selectable-display",obj:"tt-selectable-object"},j=b.getIdGenerator(),c.extractData=function(b){var c=a(b);return c.data(i.obj)?{val:c.data(i.val)||"",obj:c.data(i.obj)||null}:null},b.mixin(c.prototype,e,{_overwrite:function(a,b){b=b||[],b.length?this._renderSuggestions(a,b):this.async&&this.templates.pending?this._renderPending(a):!this.async&&this.templates.notFound?this._renderNotFound(a):this._empty(),this.trigger("rendered",this.name,b,!1)},_append:function(a,b){b=b||[],b.length&&this.$lastSuggestion.length?this._appendSuggestions(a,b):b.length?this._renderSuggestions(a,b):!this.$lastSuggestion.length&&this.templates.notFound&&this._renderNotFound(a),this.trigger("rendered",this.name,b,!0)},_renderSuggestions:function(a,b){var c;c=this._getSuggestionsFragment(a,b),this.$lastSuggestion=c.children().last(),this.$el.html(c).prepend(this._getHeader(a,b)).append(this._getFooter(a,b))},_appendSuggestions:function(a,b){var c,d;c=this._getSuggestionsFragment(a,b),d=c.children().last(),this.$lastSuggestion.after(c),this.$lastSuggestion=d},_renderPending:function(a){var b=this.templates.pending;this._resetLastSuggestion(),b&&this.$el.html(b({query:a,dataset:this.name}))},_renderNotFound:function(a){var b=this.templates.notFound;this._resetLastSuggestion(),b&&this.$el.html(b({query:a,dataset:this.name}))},_empty:function(){this.$el.empty(),this._resetLastSuggestion()},_getSuggestionsFragment:function(c,d){var e,g=this;return e=document.createDocumentFragment(),b.each(d,function(b){var d,f;f=g._injectQuery(c,b),d=a(g.templates.suggestion(f)).data(i.obj,b).data(i.val,g.displayFn(b)).addClass(g.classes.suggestion+" "+g.classes.selectable),e.appendChild(d[0])}),this.highlight&&f({className:this.classes.highlight,node:e,pattern:c}),a(e)},_getFooter:function(a,b){return this.templates.footer?this.templates.footer({query:a,suggestions:b,dataset:this.name}):null},_getHeader:function(a,b){return this.templates.header?this.templates.header({query:a,suggestions:b,dataset:this.name}):null},_resetLastSuggestion:function(){this.$lastSuggestion=a()},_injectQuery:function(a,c){return b.isObject(c)?b.mixin({_query:a},c):c},update:function(b){function c(a){g||(g=!0,a=(a||[]).slice(0,e.limit),h=a.length,e._overwrite(b,a),h<e.limit&&e.async&&e.trigger("asyncRequested",b))}function d(c){c=c||[],!f&&h<e.limit&&(e.cancel=a.noop,h+=c.length,e._append(b,c.slice(0,e.limit-h)),e.async&&e.trigger("asyncReceived",b))}var e=this,f=!1,g=!1,h=0;this.cancel(),this.cancel=function(){f=!0,e.cancel=a.noop,e.async&&e.trigger("asyncCanceled",b)},this.source(b,c,d),!g&&c([])},cancel:a.noop,clear:function(){this._empty(),this.cancel(),this.trigger("cleared")},isEmpty:function(){return this.$el.is(":empty")},destroy:function(){this.$el=a("<div>")}}),c}(),i=function(){"use strict";function c(c,d){function e(b){var c=f.$node.find(b.node).first();return b.node=c.length?c:a("<div>").appendTo(f.$node),new h(b,d)}var f=this;c=c||{},c.node||a.error("node is required"),d.mixin(this),this.$node=a(c.node),this.query=null,this.datasets=b.map(c.datasets,e)}return b.mixin(c.prototype,e,{_onSelectableClick:function(b){this.trigger("selectableClicked",a(b.currentTarget))},_onRendered:function(a,b,c,d){this.$node.toggleClass(this.classes.empty,this._allDatasetsEmpty()),this.trigger("datasetRendered",b,c,d)},_onCleared:function(){this.$node.toggleClass(this.classes.empty,this._allDatasetsEmpty()),this.trigger("datasetCleared")},_propagate:function(){this.trigger.apply(this,arguments)},_allDatasetsEmpty:function(){function a(a){return a.isEmpty()}return b.every(this.datasets,a)},_getSelectables:function(){return this.$node.find(this.selectors.selectable)},_removeCursor:function(){var a=this.getActiveSelectable();a&&a.removeClass(this.classes.cursor)},_ensureVisible:function(a){var b,c,d,e;b=a.position().top,c=b+a.outerHeight(!0),d=this.$node.scrollTop(),e=this.$node.height()+parseInt(this.$node.css("paddingTop"),10)+parseInt(this.$node.css("paddingBottom"),10),0>b?this.$node.scrollTop(d+b):c>e&&this.$node.scrollTop(d+(c-e))},bind:function(){var a,c=this;return a=b.bind(this._onSelectableClick,this),this.$node.on("click.tt",this.selectors.selectable,a),b.each(this.datasets,function(a){a.onSync("asyncRequested",c._propagate,c).onSync("asyncCanceled",c._propagate,c).onSync("asyncReceived",c._propagate,c).onSync("rendered",c._onRendered,c).onSync("cleared",c._onCleared,c)}),this},isOpen:function(){return this.$node.hasClass(this.classes.open)},open:function(){this.$node.addClass(this.classes.open)},close:function(){this.$node.removeClass(this.classes.open),this._removeCursor()},setLanguageDirection:function(a){this.$node.attr("dir",a)},selectableRelativeToCursor:function(a){var b,c,d,e;return c=this.getActiveSelectable(),b=this._getSelectables(),d=c?b.index(c):-1,e=d+a,e=(e+1)%(b.length+1)-1,e=-1>e?b.length-1:e,-1===e?null:b.eq(e)},setCursor:function(a){this._removeCursor(),(a=a&&a.first())&&(a.addClass(this.classes.cursor),this._ensureVisible(a))},getSelectableData:function(a){return a&&a.length?h.extractData(a):null},getActiveSelectable:function(){var a=this._getSelectables().filter(this.selectors.cursor).first();return a.length?a:null},getTopSelectable:function(){var a=this._getSelectables().first();return a.length?a:null},update:function(a){function c(b){b.update(a)}var d=a!==this.query;return d&&(this.query=a,b.each(this.datasets,c)),d},empty:function(){function a(a){a.clear()}b.each(this.datasets,a),this.query=null,this.$node.addClass(this.classes.empty)},destroy:function(){function c(a){a.destroy()}this.$node.off(".tt"),this.$node=a("<div>"),b.each(this.datasets,c)}}),c}(),j=function(){"use strict";function a(){i.apply(this,[].slice.call(arguments,0))}var c=i.prototype;return b.mixin(a.prototype,i.prototype,{open:function(){return!this._allDatasetsEmpty()&&this._show(),c.open.apply(this,[].slice.call(arguments,0))},close:function(){return this._hide(),c.close.apply(this,[].slice.call(arguments,0))},_onRendered:function(){return this._allDatasetsEmpty()?this._hide():this.isOpen()&&this._show(),c._onRendered.apply(this,[].slice.call(arguments,0))},_onCleared:function(){return this._allDatasetsEmpty()?this._hide():this.isOpen()&&this._show(),c._onCleared.apply(this,[].slice.call(arguments,0))},setLanguageDirection:function(a){return this.$node.css("ltr"===a?this.css.ltr:this.css.rtl),c.setLanguageDirection.apply(this,[].slice.call(arguments,0))},_hide:function(){this.$node.hide()},_show:function(){this.$node.css("display","block")}}),a}(),k=function(){"use strict";function c(c,e){var f,g,h,i,j,k,l,m,n,o,p;c=c||{},c.input||a.error("missing input"),c.menu||a.error("missing menu"),c.eventBus||a.error("missing event bus"),e.mixin(this),this.eventBus=c.eventBus,this.minLength=b.isNumber(c.minLength)?c.minLength:1,this.input=c.input,this.menu=c.menu,this.enabled=!0,this.active=!1,this.input.hasFocus()&&this.activate(),this.dir=this.input.getLangDir(),this._hacks(),this.menu.bind().onSync("selectableClicked",this._onSelectableClicked,this).onSync("asyncRequested",this._onAsyncRequested,this).onSync("asyncCanceled",this._onAsyncCanceled,this).onSync("asyncReceived",this._onAsyncReceived,this).onSync("datasetRendered",this._onDatasetRendered,this).onSync("datasetCleared",this._onDatasetCleared,this),f=d(this,"activate","open","_onFocused"),g=d(this,"deactivate","_onBlurred"),h=d(this,"isActive","isOpen","_onEnterKeyed"),i=d(this,"isActive","isOpen","_onTabKeyed"),j=d(this,"isActive","_onEscKeyed"),k=d(this,"isActive","open","_onUpKeyed"),l=d(this,"isActive","open","_onDownKeyed"),m=d(this,"isActive","isOpen","_onLeftKeyed"),n=d(this,"isActive","isOpen","_onRightKeyed"),o=d(this,"_openIfActive","_onQueryChanged"),p=d(this,"_openIfActive","_onWhitespaceChanged"),this.input.bind().onSync("focused",f,this).onSync("blurred",g,this).onSync("enterKeyed",h,this).onSync("tabKeyed",i,this).onSync("escKeyed",j,this).onSync("upKeyed",k,this).onSync("downKeyed",l,this).onSync("leftKeyed",m,this).onSync("rightKeyed",n,this).onSync("queryChanged",o,this).onSync("whitespaceChanged",p,this).onSync("langDirChanged",this._onLangDirChanged,this)}function d(a){var c=[].slice.call(arguments,1);return function(){var d=[].slice.call(arguments);b.each(c,function(b){return a[b].apply(a,d)})}}return b.mixin(c.prototype,{_hacks:function(){var c,d;c=this.input.$input||a("<div>"),d=this.menu.$node||a("<div>"),c.on("blur.tt",function(a){var e,f,g;
e=document.activeElement,f=d.is(e),g=d.has(e).length>0,b.isMsie()&&(f||g)&&(a.preventDefault(),a.stopImmediatePropagation(),b.defer(function(){c.focus()}))}),d.on("mousedown.tt",function(a){a.preventDefault()})},_onSelectableClicked:function(a,b){this.select(b)},_onDatasetCleared:function(){this._updateHint()},_onDatasetRendered:function(a,b,c,d){this._updateHint(),this.eventBus.trigger("render",c,d,b)},_onAsyncRequested:function(a,b,c){this.eventBus.trigger("asyncrequest",c,b)},_onAsyncCanceled:function(a,b,c){this.eventBus.trigger("asynccancel",c,b)},_onAsyncReceived:function(a,b,c){this.eventBus.trigger("asyncreceive",c,b)},_onFocused:function(){this._minLengthMet()&&this.menu.update(this.input.getQuery())},_onBlurred:function(){this.input.hasQueryChangedSinceLastFocus()&&this.eventBus.trigger("change",this.input.getQuery())},_onEnterKeyed:function(a,b){var c;(c=this.menu.getActiveSelectable())&&this.select(c)&&b.preventDefault()},_onTabKeyed:function(a,b){var c;(c=this.menu.getActiveSelectable())?this.select(c)&&b.preventDefault():(c=this.menu.getTopSelectable())&&this.autocomplete(c)&&b.preventDefault()},_onEscKeyed:function(){this.close()},_onUpKeyed:function(){this.moveCursor(-1)},_onDownKeyed:function(){this.moveCursor(1)},_onLeftKeyed:function(){"rtl"===this.dir&&this.input.isCursorAtEnd()&&this.autocomplete(this.menu.getTopSelectable())},_onRightKeyed:function(){"ltr"===this.dir&&this.input.isCursorAtEnd()&&this.autocomplete(this.menu.getTopSelectable())},_onQueryChanged:function(a,b){this._minLengthMet(b)?this.menu.update(b):this.menu.empty()},_onWhitespaceChanged:function(){this._updateHint()},_onLangDirChanged:function(a,b){this.dir!==b&&(this.dir=b,this.menu.setLanguageDirection(b))},_openIfActive:function(){this.isActive()&&this.open()},_minLengthMet:function(a){return a=b.isString(a)?a:this.input.getQuery()||"",a.length>=this.minLength},_updateHint:function(){var a,c,d,e,f,h,i;a=this.menu.getTopSelectable(),c=this.menu.getSelectableData(a),d=this.input.getInputValue(),!c||b.isBlankString(d)||this.input.hasOverflow()?this.input.clearHint():(e=g.normalizeQuery(d),f=b.escapeRegExChars(e),h=new RegExp("^(?:"+f+")(.+$)","i"),i=h.exec(c.val),i&&this.input.setHint(d+i[1]))},isEnabled:function(){return this.enabled},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},isActive:function(){return this.active},activate:function(){return this.isActive()?!0:!this.isEnabled()||this.eventBus.before("active")?!1:(this.active=!0,this.eventBus.trigger("active"),!0)},deactivate:function(){return this.isActive()?this.eventBus.before("idle")?!1:(this.active=!1,this.close(),this.eventBus.trigger("idle"),!0):!0},isOpen:function(){return this.menu.isOpen()},open:function(){return this.isOpen()||this.eventBus.before("open")||(this.menu.open(),this._updateHint(),this.eventBus.trigger("open")),this.isOpen()},close:function(){return this.isOpen()&&!this.eventBus.before("close")&&(this.menu.close(),this.input.clearHint(),this.input.resetInputValue(),this.eventBus.trigger("close")),!this.isOpen()},setVal:function(a){this.input.setQuery(b.toStr(a))},getVal:function(){return this.input.getQuery()},select:function(a){var b=this.menu.getSelectableData(a);return b&&!this.eventBus.before("select",b.obj)?(this.input.setQuery(b.val,!0),this.eventBus.trigger("select",b.obj),this.close(),!0):!1},autocomplete:function(a){var b,c,d;return b=this.input.getQuery(),c=this.menu.getSelectableData(a),d=c&&b!==c.val,d&&!this.eventBus.before("autocomplete",c.obj)?(this.input.setQuery(c.val),this.eventBus.trigger("autocomplete",c.obj),!0):!1},moveCursor:function(a){var b,c,d,e,f;return b=this.input.getQuery(),c=this.menu.selectableRelativeToCursor(a),d=this.menu.getSelectableData(c),e=d?d.obj:null,f=this._minLengthMet()&&this.menu.update(b),f||this.eventBus.before("cursorchange",e)?!1:(this.menu.setCursor(c),d?this.input.setInputValue(d.val):(this.input.resetInputValue(),this._updateHint()),this.eventBus.trigger("cursorchange",e),!0)},destroy:function(){this.input.destroy(),this.menu.destroy()}}),c}();!function(){"use strict";function e(b,c){b.each(function(){var b,d=a(this);(b=d.data(p.typeahead))&&c(b,d)})}function f(a,b){return a.clone().addClass(b.classes.hint).removeData().css(b.css.hint).css(l(a)).prop("readonly",!0).removeAttr("id name placeholder required").attr({autocomplete:"off",spellcheck:"false",tabindex:-1})}function h(a,b){a.data(p.attrs,{dir:a.attr("dir"),autocomplete:a.attr("autocomplete"),spellcheck:a.attr("spellcheck"),style:a.attr("style")}),a.addClass(b.classes.input).attr({autocomplete:"off",spellcheck:!1});try{!a.attr("dir")&&a.attr("dir","auto")}catch(c){}return a}function l(a){return{backgroundAttachment:a.css("background-attachment"),backgroundClip:a.css("background-clip"),backgroundColor:a.css("background-color"),backgroundImage:a.css("background-image"),backgroundOrigin:a.css("background-origin"),backgroundPosition:a.css("background-position"),backgroundRepeat:a.css("background-repeat"),backgroundSize:a.css("background-size")}}function m(a){var c,d;c=a.data(p.www),d=a.parent().filter(c.selectors.wrapper),b.each(a.data(p.attrs),function(c,d){b.isUndefined(c)?a.removeAttr(d):a.attr(d,c)}),a.removeData(p.typeahead).removeData(p.www).removeData(p.attr).removeClass(c.classes.input),d.length&&(a.detach().insertAfter(d),d.remove())}function n(c){var d,e;return d=b.isJQuery(c)||b.isElement(c),e=d?a(c).first():[],e.length?e:null}var o,p,q;o=a.fn.typeahead,p={www:"tt-www",attrs:"tt-attrs",typeahead:"tt-typeahead"},q={initialize:function(e,l){function m(){var c,m,q,r,s,t,u,v,w,x,y;b.each(l,function(a){a.highlight=!!e.highlight}),c=a(this),m=a(o.html.wrapper),q=n(e.hint),r=n(e.menu),s=e.hint!==!1&&!q,t=e.menu!==!1&&!r,s&&(q=f(c,o)),t&&(r=a(o.html.menu).css(o.css.menu)),q&&q.val(""),c=h(c,o),(s||t)&&(m.css(o.css.wrapper),c.css(s?o.css.input:o.css.inputWithNoHint),c.wrap(m).parent().prepend(s?q:null).append(t?r:null)),y=t?j:i,u=new d({el:c}),v=new g({hint:q,input:c},o),w=new y({node:r,datasets:l},o),x=new k({input:v,menu:w,eventBus:u,minLength:e.minLength},o),c.data(p.www,o),c.data(p.typeahead,x)}var o;return l=b.isArray(l)?l:[].slice.call(arguments,1),e=e||{},o=c(e.classNames),this.each(m)},isEnabled:function(){var a;return e(this.first(),function(b){a=b.isEnabled()}),a},enable:function(){return e(this,function(a){a.enable()}),this},disable:function(){return e(this,function(a){a.disable()}),this},isActive:function(){var a;return e(this.first(),function(b){a=b.isActive()}),a},activate:function(){return e(this,function(a){a.activate()}),this},deactivate:function(){return e(this,function(a){a.deactivate()}),this},isOpen:function(){var a;return e(this.first(),function(b){a=b.isOpen()}),a},open:function(){return e(this,function(a){a.open()}),this},close:function(){return e(this,function(a){a.close()}),this},select:function(b){var c=!1,d=a(b);return e(this.first(),function(a){c=a.select(d)}),c},autocomplete:function(b){var c=!1,d=a(b);return e(this.first(),function(a){c=a.autocomplete(d)}),c},moveCursor:function(a){var b=!1;return e(this.first(),function(c){b=c.moveCursor(a)}),b},val:function(a){var b;return arguments.length?(e(this,function(b){b.setVal(a)}),this):(e(this.first(),function(a){b=a.getVal()}),b)},destroy:function(){return e(this,function(a,b){m(b),a.destroy()}),this}},a.fn.typeahead=function(a){return q[a]?q[a].apply(this,[].slice.call(arguments,1)):q.initialize.apply(this,arguments)},a.fn.typeahead.noConflict=function(){return a.fn.typeahead=o,this}}()});

/*Slider*/
/*! =========================================================
 * bootstrap-slider.js
 * ========================================================= */
var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},windowIsDefined="object"==("undefined"==typeof window?"undefined":_typeof(window));!function(t){if("function"==typeof define&&define.amd)define(["jquery"],t);else if("object"==("undefined"==typeof module?"undefined":_typeof(module))&&module.exports){var e;try{e=require("jquery")}catch(t){e=null}module.exports=t(e)}else window&&(window.Slider=t(window.jQuery))}(function(t){var e;return windowIsDefined&&!window.console&&(window.console={}),windowIsDefined&&!window.console.log&&(window.console.log=function(){}),windowIsDefined&&!window.console.warn&&(window.console.warn=function(){}),function(t){function e(){}var i=Array.prototype.slice;!function(t){if(t){var s="undefined"==typeof console?e:function(t){console.error(t)};t.bridget=function(e,o){!function(e){e.prototype.option||(e.prototype.option=function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))})}(o),function(e,o){t.fn[e]=function(n){if("string"==typeof n){for(var a=i.call(arguments,1),h=0,l=this.length;h<l;h++){var r=this[h],d=t.data(r,e);if(d)if(t.isFunction(d[n])&&"_"!==n.charAt(0)){var p=d[n].apply(d,a);if(void 0!==p&&p!==d)return p}else s("no such method '"+n+"' for "+e+" instance");else s("cannot call methods on "+e+" prior to initialization; attempted to call '"+n+"'")}return this}var c=this.map(function(){var i=t.data(this,e);return i?(i.option(n),i._init()):(i=new o(this,n),t.data(this,e,i)),t(this)});return!c||c.length>1?c:c[0]}}(e,o)},t.bridget}}(t)}(t),function(t){function i(e,i){function s(t,e){var i="data-slider-"+e.replace(/_/g,"-"),s=t.getAttribute(i);try{return JSON.parse(s)}catch(t){return s}}this._state={value:null,enabled:null,offset:null,size:null,percentage:null,inDrag:!1,over:!1},this.ticksCallbackMap={},this.handleCallbackMap={},"string"==typeof e?this.element=document.querySelector(e):e instanceof HTMLElement&&(this.element=e),i=i||{};for(var n=Object.keys(this.defaultOptions),a=0;a<n.length;a++){var h=n[a],l=i[h];l=null!==(l=void 0!==l?l:s(this.element,h))?l:this.defaultOptions[h],this.options||(this.options={}),this.options[h]=l}"auto"===this.options.rtl&&(this.options.rtl="rtl"===window.getComputedStyle(this.element).direction),"vertical"!==this.options.orientation||"top"!==this.options.tooltip_position&&"bottom"!==this.options.tooltip_position?"horizontal"!==this.options.orientation||"left"!==this.options.tooltip_position&&"right"!==this.options.tooltip_position||(this.options.tooltip_position="top"):this.options.rtl?this.options.tooltip_position="left":this.options.tooltip_position="right";var r,d,p,c,u,m=this.element.style.width,v=!1,_=this.element.parentNode;if(this.sliderElem)v=!0;else{this.sliderElem=document.createElement("div"),this.sliderElem.className="slider";var f=document.createElement("div");f.className="slider-track",(d=document.createElement("div")).className="slider-track-low",(r=document.createElement("div")).className="slider-selection",(p=document.createElement("div")).className="slider-track-high",(c=document.createElement("div")).className="slider-handle min-slider-handle",c.setAttribute("role","slider"),c.setAttribute("aria-valuemin",this.options.min),c.setAttribute("aria-valuemax",this.options.max),(u=document.createElement("div")).className="slider-handle max-slider-handle",u.setAttribute("role","slider"),u.setAttribute("aria-valuemin",this.options.min),u.setAttribute("aria-valuemax",this.options.max),f.appendChild(d),f.appendChild(r),f.appendChild(p),this.rangeHighlightElements=[];var g=this.options.rangeHighlights;if(Array.isArray(g)&&g.length>0)for(var y=0;y<g.length;y++){var b=document.createElement("div"),k=g[y].class||"";b.className="slider-rangeHighlight slider-selection "+k,this.rangeHighlightElements.push(b),f.appendChild(b)}var E=Array.isArray(this.options.labelledby);if(E&&this.options.labelledby[0]&&c.setAttribute("aria-labelledby",this.options.labelledby[0]),E&&this.options.labelledby[1]&&u.setAttribute("aria-labelledby",this.options.labelledby[1]),!E&&this.options.labelledby&&(c.setAttribute("aria-labelledby",this.options.labelledby),u.setAttribute("aria-labelledby",this.options.labelledby)),this.ticks=[],Array.isArray(this.options.ticks)&&this.options.ticks.length>0){for(this.ticksContainer=document.createElement("div"),this.ticksContainer.className="slider-tick-container",a=0;a<this.options.ticks.length;a++){var C=document.createElement("div");if(C.className="slider-tick",this.options.ticks_tooltip){var w=this._addTickListener(),x=w.addMouseEnter(this,C,a),L=w.addMouseLeave(this,C);this.ticksCallbackMap[a]={mouseEnter:x,mouseLeave:L}}this.ticks.push(C),this.ticksContainer.appendChild(C)}r.className+=" tick-slider-selection"}if(this.tickLabels=[],Array.isArray(this.options.ticks_labels)&&this.options.ticks_labels.length>0)for(this.tickLabelContainer=document.createElement("div"),this.tickLabelContainer.className="slider-tick-label-container",a=0;a<this.options.ticks_labels.length;a++){var P=document.createElement("div"),T=0===this.options.ticks_positions.length,M=this.options.reversed&&T?this.options.ticks_labels.length-(a+1):a;P.className="slider-tick-label",P.innerHTML=this.options.ticks_labels[M],this.tickLabels.push(P),this.tickLabelContainer.appendChild(P)}var A=function(t){var e=document.createElement("div");e.className="tooltip-arrow";var i=document.createElement("div");i.className="tooltip-inner",t.appendChild(e),t.appendChild(i)},H=document.createElement("div");H.className="tooltip tooltip-main",H.setAttribute("role","presentation"),A(H);var N=document.createElement("div");N.className="tooltip tooltip-min",N.setAttribute("role","presentation"),A(N);var S=document.createElement("div");S.className="tooltip tooltip-max",S.setAttribute("role","presentation"),A(S),this.sliderElem.appendChild(f),this.sliderElem.appendChild(H),this.sliderElem.appendChild(N),this.sliderElem.appendChild(S),this.tickLabelContainer&&this.sliderElem.appendChild(this.tickLabelContainer),this.ticksContainer&&this.sliderElem.appendChild(this.ticksContainer),this.sliderElem.appendChild(c),this.sliderElem.appendChild(u),_.insertBefore(this.sliderElem,this.element),this.element.style.display="none"}if(t&&(this.$element=t(this.element),this.$sliderElem=t(this.sliderElem)),this.eventToCallbackMap={},this.sliderElem.id=this.options.id,this.touchCapable="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,this.touchX=0,this.touchY=0,this.tooltip=this.sliderElem.querySelector(".tooltip-main"),this.tooltipInner=this.tooltip.querySelector(".tooltip-inner"),this.tooltip_min=this.sliderElem.querySelector(".tooltip-min"),this.tooltipInner_min=this.tooltip_min.querySelector(".tooltip-inner"),this.tooltip_max=this.sliderElem.querySelector(".tooltip-max"),this.tooltipInner_max=this.tooltip_max.querySelector(".tooltip-inner"),o[this.options.scale]&&(this.options.scale=o[this.options.scale]),!0===v&&(this._removeClass(this.sliderElem,"slider-horizontal"),this._removeClass(this.sliderElem,"slider-vertical"),this._removeClass(this.sliderElem,"slider-rtl"),this._removeClass(this.tooltip,"hide"),this._removeClass(this.tooltip_min,"hide"),this._removeClass(this.tooltip_max,"hide"),["left","right","top","width","height"].forEach(function(t){this._removeProperty(this.trackLow,t),this._removeProperty(this.trackSelection,t),this._removeProperty(this.trackHigh,t)},this),[this.handle1,this.handle2].forEach(function(t){this._removeProperty(t,"left"),this._removeProperty(t,"right"),this._removeProperty(t,"top")},this),[this.tooltip,this.tooltip_min,this.tooltip_max].forEach(function(t){this._removeProperty(t,"left"),this._removeProperty(t,"right"),this._removeProperty(t,"top"),this._removeClass(t,"right"),this._removeClass(t,"left"),this._removeClass(t,"top")},this)),"vertical"===this.options.orientation?(this._addClass(this.sliderElem,"slider-vertical"),this.stylePos="top",this.mousePos="pageY",this.sizePos="offsetHeight"):(this._addClass(this.sliderElem,"slider-horizontal"),this.sliderElem.style.width=m,this.options.orientation="horizontal",this.options.rtl?this.stylePos="right":this.stylePos="left",this.mousePos="clientX",this.sizePos="offsetWidth"),this.options.rtl&&this._addClass(this.sliderElem,"slider-rtl"),this._setTooltipPosition(),Array.isArray(this.options.ticks)&&this.options.ticks.length>0&&(this.options.max=Math.max.apply(Math,this.options.ticks),this.options.min=Math.min.apply(Math,this.options.ticks)),Array.isArray(this.options.value)?(this.options.range=!0,this._state.value=this.options.value):this.options.range?this._state.value=[this.options.value,this.options.max]:this._state.value=this.options.value,this.trackLow=d||this.trackLow,this.trackSelection=r||this.trackSelection,this.trackHigh=p||this.trackHigh,"none"===this.options.selection?(this._addClass(this.trackLow,"hide"),this._addClass(this.trackSelection,"hide"),this._addClass(this.trackHigh,"hide")):"after"!==this.options.selection&&"before"!==this.options.selection||(this._removeClass(this.trackLow,"hide"),this._removeClass(this.trackSelection,"hide"),this._removeClass(this.trackHigh,"hide")),this.handle1=c||this.handle1,this.handle2=u||this.handle2,!0===v)for(this._removeClass(this.handle1,"round triangle"),this._removeClass(this.handle2,"round triangle hide"),a=0;a<this.ticks.length;a++)this._removeClass(this.ticks[a],"round triangle hide");if(-1!==["round","triangle","custom"].indexOf(this.options.handle))for(this._addClass(this.handle1,this.options.handle),this._addClass(this.handle2,this.options.handle),a=0;a<this.ticks.length;a++)this._addClass(this.ticks[a],this.options.handle);if(this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos],this.setValue(this._state.value),this.handle1Keydown=this._keydown.bind(this,0),this.handle1.addEventListener("keydown",this.handle1Keydown,!1),this.handle2Keydown=this._keydown.bind(this,1),this.handle2.addEventListener("keydown",this.handle2Keydown,!1),this.mousedown=this._mousedown.bind(this),this.touchstart=this._touchstart.bind(this),this.touchmove=this._touchmove.bind(this),this.touchCapable){var z=!1;try{var D=Object.defineProperty({},"passive",{get:function(){z=!0}});window.addEventListener("test",null,D)}catch(t){}var V=!!z&&{passive:!0};this.sliderElem.addEventListener("touchstart",this.touchstart,V),this.sliderElem.addEventListener("touchmove",this.touchmove,V)}if(this.sliderElem.addEventListener("mousedown",this.mousedown,!1),this.resize=this._resize.bind(this),window.addEventListener("resize",this.resize,!1),"hide"===this.options.tooltip)this._addClass(this.tooltip,"hide"),this._addClass(this.tooltip_min,"hide"),this._addClass(this.tooltip_max,"hide");else if("always"===this.options.tooltip)this._showTooltip(),this._alwaysShowTooltip=!0;else{if(this.showTooltip=this._showTooltip.bind(this),this.hideTooltip=this._hideTooltip.bind(this),this.options.ticks_tooltip){var F=this._addTickListener(),R=F.addMouseEnter(this,this.handle1),I=F.addMouseLeave(this,this.handle1);this.handleCallbackMap.handle1={mouseEnter:R,mouseLeave:I},R=F.addMouseEnter(this,this.handle2),I=F.addMouseLeave(this,this.handle2),this.handleCallbackMap.handle2={mouseEnter:R,mouseLeave:I}}else this.sliderElem.addEventListener("mouseenter",this.showTooltip,!1),this.sliderElem.addEventListener("mouseleave",this.hideTooltip,!1);this.handle1.addEventListener("focus",this.showTooltip,!1),this.handle1.addEventListener("blur",this.hideTooltip,!1),this.handle2.addEventListener("focus",this.showTooltip,!1),this.handle2.addEventListener("blur",this.hideTooltip,!1)}this.options.enabled?this.enable():this.disable()}var s=function(t){return"Invalid input value '"+t+"' passed in"},o={linear:{toValue:function(t){var e=t/100*(this.options.max-this.options.min),i=!0;if(this.options.ticks_positions.length>0){for(var s,o,n,a=0,h=1;h<this.options.ticks_positions.length;h++)if(t<=this.options.ticks_positions[h]){s=this.options.ticks[h-1],n=this.options.ticks_positions[h-1],o=this.options.ticks[h],a=this.options.ticks_positions[h];break}e=s+(t-n)/(a-n)*(o-s),i=!1}var l=(i?this.options.min:0)+Math.round(e/this.options.step)*this.options.step;return l<this.options.min?this.options.min:l>this.options.max?this.options.max:l},toPercentage:function(t){if(this.options.max===this.options.min)return 0;if(this.options.ticks_positions.length>0){for(var e,i,s,o=0,n=0;n<this.options.ticks.length;n++)if(t<=this.options.ticks[n]){e=n>0?this.options.ticks[n-1]:0,s=n>0?this.options.ticks_positions[n-1]:0,i=this.options.ticks[n],o=this.options.ticks_positions[n];break}if(n>0)return s+(t-e)/(i-e)*(o-s)}return 100*(t-this.options.min)/(this.options.max-this.options.min)}},logarithmic:{toValue:function(t){var e=0===this.options.min?0:Math.log(this.options.min),i=Math.log(this.options.max),s=Math.exp(e+(i-e)*t/100);return Math.round(s)===this.options.max?this.options.max:(s=this.options.min+Math.round((s-this.options.min)/this.options.step)*this.options.step)<this.options.min?this.options.min:s>this.options.max?this.options.max:s},toPercentage:function(t){if(this.options.max===this.options.min)return 0;var e=Math.log(this.options.max),i=0===this.options.min?0:Math.log(this.options.min);return 100*((0===t?0:Math.log(t))-i)/(e-i)}}};if((e=function(t,e){return i.call(this,t,e),this}).prototype={_init:function(){},constructor:e,defaultOptions:{id:"",min:0,max:10,step:1,precision:0,orientation:"horizontal",value:5,range:!1,selection:"before",tooltip:"show",tooltip_split:!1,handle:"round",reversed:!1,rtl:"auto",enabled:!0,formatter:function(t){return Array.isArray(t)?t[0]+" : "+t[1]:t},natural_arrow_keys:!1,ticks:[],ticks_positions:[],ticks_labels:[],ticks_snap_bounds:0,ticks_tooltip:!1,scale:"linear",focus:!1,tooltip_position:null,labelledby:null,rangeHighlights:[]},getElement:function(){return this.sliderElem},getValue:function(){return this.options.range?this._state.value:this._state.value[0]},setValue:function(t,e,i){t||(t=0);var s=this.getValue();this._state.value=this._validateInputValue(t);var o=this._applyPrecision.bind(this);this.options.range?(this._state.value[0]=o(this._state.value[0]),this._state.value[1]=o(this._state.value[1]),this._state.value[0]=Math.max(this.options.min,Math.min(this.options.max,this._state.value[0])),this._state.value[1]=Math.max(this.options.min,Math.min(this.options.max,this._state.value[1]))):(this._state.value=o(this._state.value),this._state.value=[Math.max(this.options.min,Math.min(this.options.max,this._state.value))],this._addClass(this.handle2,"hide"),"after"===this.options.selection?this._state.value[1]=this.options.max:this._state.value[1]=this.options.min),this.options.max>this.options.min?this._state.percentage=[this._toPercentage(this._state.value[0]),this._toPercentage(this._state.value[1]),100*this.options.step/(this.options.max-this.options.min)]:this._state.percentage=[0,0,100],this._layout();var n=this.options.range?this._state.value:this._state.value[0];return this._setDataVal(n),!0===e&&this._trigger("slide",n),s!==n&&!0===i&&this._trigger("change",{oldValue:s,newValue:n}),this},destroy:function(){this._removeSliderEventHandlers(),this.sliderElem.parentNode.removeChild(this.sliderElem),this.element.style.display="",this._cleanUpEventCallbacksMap(),this.element.removeAttribute("data"),t&&(this._unbindJQueryEventHandlers(),this.$element.removeData("slider"))},disable:function(){return this._state.enabled=!1,this.handle1.removeAttribute("tabindex"),this.handle2.removeAttribute("tabindex"),this._addClass(this.sliderElem,"slider-disabled"),this._trigger("slideDisabled"),this},enable:function(){return this._state.enabled=!0,this.handle1.setAttribute("tabindex",0),this.handle2.setAttribute("tabindex",0),this._removeClass(this.sliderElem,"slider-disabled"),this._trigger("slideEnabled"),this},toggle:function(){return this._state.enabled?this.disable():this.enable(),this},isEnabled:function(){return this._state.enabled},on:function(t,e){return this._bindNonQueryEventHandler(t,e),this},off:function(e,i){t?(this.$element.off(e,i),this.$sliderElem.off(e,i)):this._unbindNonQueryEventHandler(e,i)},getAttribute:function(t){return t?this.options[t]:this.options},setAttribute:function(t,e){return this.options[t]=e,this},refresh:function(){return this._removeSliderEventHandlers(),i.call(this,this.element,this.options),t&&t.data(this.element,"slider",this),this},relayout:function(){return this._resize(),this._layout(),this},_removeSliderEventHandlers:function(){if(this.handle1.removeEventListener("keydown",this.handle1Keydown,!1),this.handle2.removeEventListener("keydown",this.handle2Keydown,!1),this.options.ticks_tooltip){for(var t=this.ticksContainer.getElementsByClassName("slider-tick"),e=0;e<t.length;e++)t[e].removeEventListener("mouseenter",this.ticksCallbackMap[e].mouseEnter,!1),t[e].removeEventListener("mouseleave",this.ticksCallbackMap[e].mouseLeave,!1);this.handle1.removeEventListener("mouseenter",this.handleCallbackMap.handle1.mouseEnter,!1),this.handle2.removeEventListener("mouseenter",this.handleCallbackMap.handle2.mouseEnter,!1),this.handle1.removeEventListener("mouseleave",this.handleCallbackMap.handle1.mouseLeave,!1),this.handle2.removeEventListener("mouseleave",this.handleCallbackMap.handle2.mouseLeave,!1)}this.handleCallbackMap=null,this.ticksCallbackMap=null,this.showTooltip&&(this.handle1.removeEventListener("focus",this.showTooltip,!1),this.handle2.removeEventListener("focus",this.showTooltip,!1)),this.hideTooltip&&(this.handle1.removeEventListener("blur",this.hideTooltip,!1),this.handle2.removeEventListener("blur",this.hideTooltip,!1)),this.showTooltip&&this.sliderElem.removeEventListener("mouseenter",this.showTooltip,!1),this.hideTooltip&&this.sliderElem.removeEventListener("mouseleave",this.hideTooltip,!1),this.sliderElem.removeEventListener("touchstart",this.touchstart,!1),this.sliderElem.removeEventListener("touchmove",this.touchmove,!1),this.sliderElem.removeEventListener("mousedown",this.mousedown,!1),window.removeEventListener("resize",this.resize,!1)},_bindNonQueryEventHandler:function(t,e){void 0===this.eventToCallbackMap[t]&&(this.eventToCallbackMap[t]=[]),this.eventToCallbackMap[t].push(e)},_unbindNonQueryEventHandler:function(t,e){var i=this.eventToCallbackMap[t];if(void 0!==i)for(var s=0;s<i.length;s++)if(i[s]===e){i.splice(s,1);break}},_cleanUpEventCallbacksMap:function(){for(var t=Object.keys(this.eventToCallbackMap),e=0;e<t.length;e++){var i=t[e];delete this.eventToCallbackMap[i]}},_showTooltip:function(){!1===this.options.tooltip_split?(this._addClass(this.tooltip,"in"),this.tooltip_min.style.display="none",this.tooltip_max.style.display="none"):(this._addClass(this.tooltip_min,"in"),this._addClass(this.tooltip_max,"in"),this.tooltip.style.display="none"),this._state.over=!0},_hideTooltip:function(){!1===this._state.inDrag&&!0!==this.alwaysShowTooltip&&(this._removeClass(this.tooltip,"in"),this._removeClass(this.tooltip_min,"in"),this._removeClass(this.tooltip_max,"in")),this._state.over=!1},_setToolTipOnMouseOver:function(t){function e(t,e){return e?[100-t.percentage[0],this.options.range?100-t.percentage[1]:t.percentage[1]]:[t.percentage[0],t.percentage[1]]}var i=this.options.formatter(t?t.value[0]:this._state.value[0]),s=e(t||this._state,this.options.reversed);this._setText(this.tooltipInner,i),this.tooltip.style[this.stylePos]=s[0]+"%"},_addTickListener:function(){return{addMouseEnter:function(t,e,i){var s=function e(){var s=t._state,e=i>=0?i:this.attributes["aria-valuenow"].value,o=parseInt(e,10);s.value[0]=o,s.percentage[0]=t.options.ticks_positions[o],t._setToolTipOnMouseOver(s),t._showTooltip()};return e.addEventListener("mouseenter",s,!1),s},addMouseLeave:function(t,e){var i=function(){t._hideTooltip()};return e.addEventListener("mouseleave",i,!1),i}}},_layout:function(){var t,e;if(t=this.options.reversed?[100-this._state.percentage[0],this.options.range?100-this._state.percentage[1]:this._state.percentage[1]]:[this._state.percentage[0],this._state.percentage[1]],this.handle1.style[this.stylePos]=t[0]+"%",this.handle1.setAttribute("aria-valuenow",this._state.value[0]),isNaN(this.options.formatter(this._state.value[0]))&&this.handle1.setAttribute("aria-valuetext",this.options.formatter(this._state.value[0])),this.handle2.style[this.stylePos]=t[1]+"%",this.handle2.setAttribute("aria-valuenow",this._state.value[1]),isNaN(this.options.formatter(this._state.value[1]))&&this.handle2.setAttribute("aria-valuetext",this.options.formatter(this._state.value[1])),this.rangeHighlightElements.length>0&&Array.isArray(this.options.rangeHighlights)&&this.options.rangeHighlights.length>0)for(var i=0;i<this.options.rangeHighlights.length;i++){var s=this._toPercentage(this.options.rangeHighlights[i].start),o=this._toPercentage(this.options.rangeHighlights[i].end);if(this.options.reversed){var n=100-o;o=100-s,s=n}var a=this._createHighlightRange(s,o);a?"vertical"===this.options.orientation?(this.rangeHighlightElements[i].style.top=a.start+"%",this.rangeHighlightElements[i].style.height=a.size+"%"):(this.options.rtl?this.rangeHighlightElements[i].style.right=a.start+"%":this.rangeHighlightElements[i].style.left=a.start+"%",this.rangeHighlightElements[i].style.width=a.size+"%"):this.rangeHighlightElements[i].style.display="none"}if(Array.isArray(this.options.ticks)&&this.options.ticks.length>0){var h,l="vertical"===this.options.orientation?"height":"width";h="vertical"===this.options.orientation?"marginTop":this.options.rtl?"marginRight":"marginLeft";var r=this._state.size/(this.options.ticks.length-1);if(this.tickLabelContainer){var d=0;if(0===this.options.ticks_positions.length)"vertical"!==this.options.orientation&&(this.tickLabelContainer.style[h]=-r/2+"px"),d=this.tickLabelContainer.offsetHeight;else for(p=0;p<this.tickLabelContainer.childNodes.length;p++)this.tickLabelContainer.childNodes[p].offsetHeight>d&&(d=this.tickLabelContainer.childNodes[p].offsetHeight);"horizontal"===this.options.orientation&&(this.sliderElem.style.marginBottom=d+"px")}for(var p=0;p<this.options.ticks.length;p++){var c=this.options.ticks_positions[p]||this._toPercentage(this.options.ticks[p]);this.options.reversed&&(c=100-c),this.ticks[p].style[this.stylePos]=c+"%",this._removeClass(this.ticks[p],"in-selection"),this.options.range?c>=t[0]&&c<=t[1]&&this._addClass(this.ticks[p],"in-selection"):"after"===this.options.selection&&c>=t[0]?this._addClass(this.ticks[p],"in-selection"):"before"===this.options.selection&&c<=t[0]&&this._addClass(this.ticks[p],"in-selection"),this.tickLabels[p]&&(this.tickLabels[p].style[l]=r+"px","vertical"!==this.options.orientation&&void 0!==this.options.ticks_positions[p]?(this.tickLabels[p].style.position="absolute",this.tickLabels[p].style[this.stylePos]=c+"%",this.tickLabels[p].style[h]=-r/2+"px"):"vertical"===this.options.orientation&&(this.options.rtl?this.tickLabels[p].style.marginRight=this.sliderElem.offsetWidth+"px":this.tickLabels[p].style.marginLeft=this.sliderElem.offsetWidth+"px",this.tickLabelContainer.style[h]=this.sliderElem.offsetWidth/2*-1+"px"))}}if(this.options.range){e=this.options.formatter(this._state.value),this._setText(this.tooltipInner,e),this.tooltip.style[this.stylePos]=(t[1]+t[0])/2+"%";var u=this.options.formatter(this._state.value[0]);this._setText(this.tooltipInner_min,u);var m=this.options.formatter(this._state.value[1]);this._setText(this.tooltipInner_max,m),this.tooltip_min.style[this.stylePos]=t[0]+"%",this.tooltip_max.style[this.stylePos]=t[1]+"%"}else e=this.options.formatter(this._state.value[0]),this._setText(this.tooltipInner,e),this.tooltip.style[this.stylePos]=t[0]+"%";if("vertical"===this.options.orientation)this.trackLow.style.top="0",this.trackLow.style.height=Math.min(t[0],t[1])+"%",this.trackSelection.style.top=Math.min(t[0],t[1])+"%",this.trackSelection.style.height=Math.abs(t[0]-t[1])+"%",this.trackHigh.style.bottom="0",this.trackHigh.style.height=100-Math.min(t[0],t[1])-Math.abs(t[0]-t[1])+"%";else{"right"===this.stylePos?this.trackLow.style.right="0":this.trackLow.style.left="0",this.trackLow.style.width=Math.min(t[0],t[1])+"%","right"===this.stylePos?this.trackSelection.style.right=Math.min(t[0],t[1])+"%":this.trackSelection.style.left=Math.min(t[0],t[1])+"%",this.trackSelection.style.width=Math.abs(t[0]-t[1])+"%","right"===this.stylePos?this.trackHigh.style.left="0":this.trackHigh.style.right="0",this.trackHigh.style.width=100-Math.min(t[0],t[1])-Math.abs(t[0]-t[1])+"%";var v=this.tooltip_min.getBoundingClientRect(),_=this.tooltip_max.getBoundingClientRect();"bottom"===this.options.tooltip_position?v.right>_.left?(this._removeClass(this.tooltip_max,"bottom"),this._addClass(this.tooltip_max,"top"),this.tooltip_max.style.top="",this.tooltip_max.style.bottom="22px"):(this._removeClass(this.tooltip_max,"top"),this._addClass(this.tooltip_max,"bottom"),this.tooltip_max.style.top=this.tooltip_min.style.top,this.tooltip_max.style.bottom=""):v.right>_.left?(this._removeClass(this.tooltip_max,"top"),this._addClass(this.tooltip_max,"bottom"),this.tooltip_max.style.top="18px"):(this._removeClass(this.tooltip_max,"bottom"),this._addClass(this.tooltip_max,"top"),this.tooltip_max.style.top=this.tooltip_min.style.top)}},_createHighlightRange:function(t,e){return this._isHighlightRange(t,e)?t>e?{start:e,size:t-e}:{start:t,size:e-t}:null},_isHighlightRange:function(t,e){return 0<=t&&t<=100&&0<=e&&e<=100},_resize:function(t){this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos],this._layout()},_removeProperty:function(t,e){t.style.removeProperty?t.style.removeProperty(e):t.style.removeAttribute(e)},_mousedown:function(t){if(!this._state.enabled)return!1;t.preventDefault&&t.preventDefault(),this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos];var e=this._getPercentage(t);if(this.options.range){var i=Math.abs(this._state.percentage[0]-e),s=Math.abs(this._state.percentage[1]-e);this._state.dragged=i<s?0:1,this._adjustPercentageForRangeSliders(e)}else this._state.dragged=0;this._state.percentage[this._state.dragged]=e,this._layout(),this.touchCapable&&(document.removeEventListener("touchmove",this.mousemove,!1),document.removeEventListener("touchend",this.mouseup,!1)),this.mousemove&&document.removeEventListener("mousemove",this.mousemove,!1),this.mouseup&&document.removeEventListener("mouseup",this.mouseup,!1),this.mousemove=this._mousemove.bind(this),this.mouseup=this._mouseup.bind(this),this.touchCapable&&(document.addEventListener("touchmove",this.mousemove,!1),document.addEventListener("touchend",this.mouseup,!1)),document.addEventListener("mousemove",this.mousemove,!1),document.addEventListener("mouseup",this.mouseup,!1),this._state.inDrag=!0;var o=this._calculateValue();return this._trigger("slideStart",o),this._setDataVal(o),this.setValue(o,!1,!0),t.returnValue=!1,this.options.focus&&this._triggerFocusOnHandle(this._state.dragged),!0},_touchstart:function(t){if(void 0!==t.changedTouches){var e=t.changedTouches[0];this.touchX=e.pageX,this.touchY=e.pageY}else this._mousedown(t)},_triggerFocusOnHandle:function(t){0===t&&this.handle1.focus(),1===t&&this.handle2.focus()},_keydown:function(t,e){if(!this._state.enabled)return!1;var i;switch(e.keyCode){case 37:case 40:i=-1;break;case 39:case 38:i=1}if(i){if(this.options.natural_arrow_keys){var s="vertical"===this.options.orientation&&!this.options.reversed,o="horizontal"===this.options.orientation&&this.options.reversed;(s||o)&&(i=-i)}var n=this._state.value[t]+i*this.options.step,a=n/this.options.max*100;return this._state.keyCtrl=t,this.options.range&&(this._adjustPercentageForRangeSliders(a),n=[this._state.keyCtrl?this._state.value[0]:n,this._state.keyCtrl?n:this._state.value[1]]),this._trigger("slideStart",n),this._setDataVal(n),this.setValue(n,!0,!0),this._setDataVal(n),this._trigger("slideStop",n),this._layout(),this._pauseEvent(e),delete this._state.keyCtrl,!1}},_pauseEvent:function(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),t.cancelBubble=!0,t.returnValue=!1},_mousemove:function(t){if(!this._state.enabled)return!1;var e=this._getPercentage(t);this._adjustPercentageForRangeSliders(e),this._state.percentage[this._state.dragged]=e,this._layout();var i=this._calculateValue(!0);return this.setValue(i,!0,!0),!1},_touchmove:function(t){if(void 0!==t.changedTouches){var e=t.changedTouches[0],i=e.pageX-this.touchX,s=e.pageY-this.touchY;this._state.inDrag||("vertical"===this.options.orientation&&i<=5&&i>=-5&&(s>=15||s<=-15)?this._mousedown(t):s<=5&&s>=-5&&(i>=15||i<=-15)&&this._mousedown(t))}},_adjustPercentageForRangeSliders:function(t){if(this.options.range){var e=this._getNumDigitsAfterDecimalPlace(t);e=e?e-1:0;var i=this._applyToFixedAndParseFloat(t,e);0===this._state.dragged&&this._applyToFixedAndParseFloat(this._state.percentage[1],e)<i?(this._state.percentage[0]=this._state.percentage[1],this._state.dragged=1):1===this._state.dragged&&this._applyToFixedAndParseFloat(this._state.percentage[0],e)>i?(this._state.percentage[1]=this._state.percentage[0],this._state.dragged=0):0===this._state.keyCtrl&&this._state.value[1]/this.options.max*100<t?(this._state.percentage[0]=this._state.percentage[1],this._state.keyCtrl=1,this.handle2.focus()):1===this._state.keyCtrl&&this._state.value[0]/this.options.max*100>t&&(this._state.percentage[1]=this._state.percentage[0],this._state.keyCtrl=0,this.handle1.focus())}},_mouseup:function(){if(!this._state.enabled)return!1;this.touchCapable&&(document.removeEventListener("touchmove",this.mousemove,!1),document.removeEventListener("touchend",this.mouseup,!1)),document.removeEventListener("mousemove",this.mousemove,!1),document.removeEventListener("mouseup",this.mouseup,!1),this._state.inDrag=!1,!1===this._state.over&&this._hideTooltip();var t=this._calculateValue(!0);return this._layout(),this._setDataVal(t),this._trigger("slideStop",t),!1},_calculateValue:function(t){var e;if(this.options.range?(e=[this.options.min,this.options.max],0!==this._state.percentage[0]&&(e[0]=this._toValue(this._state.percentage[0]),e[0]=this._applyPrecision(e[0])),100!==this._state.percentage[1]&&(e[1]=this._toValue(this._state.percentage[1]),e[1]=this._applyPrecision(e[1]))):(e=this._toValue(this._state.percentage[0]),e=parseFloat(e),e=this._applyPrecision(e)),t){for(var i=[e,1/0],s=0;s<this.options.ticks.length;s++){var o=Math.abs(this.options.ticks[s]-e);o<=i[1]&&(i=[this.options.ticks[s],o])}if(i[1]<=this.options.ticks_snap_bounds)return i[0]}return e},_applyPrecision:function(t){var e=this.options.precision||this._getNumDigitsAfterDecimalPlace(this.options.step);return this._applyToFixedAndParseFloat(t,e)},_getNumDigitsAfterDecimalPlace:function(t){var e=(""+t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return e?Math.max(0,(e[1]?e[1].length:0)-(e[2]?+e[2]:0)):0},_applyToFixedAndParseFloat:function(t,e){var i=t.toFixed(e);return parseFloat(i)},_getPercentage:function(t){!this.touchCapable||"touchstart"!==t.type&&"touchmove"!==t.type||(t=t.touches[0]);var e=t[this.mousePos]-this._state.offset[this.stylePos];"right"===this.stylePos&&(e=-e);var i=e/this._state.size*100;return i=Math.round(i/this._state.percentage[2])*this._state.percentage[2],this.options.reversed&&(i=100-i),Math.max(0,Math.min(100,i))},_validateInputValue:function(t){if(isNaN(+t)){if(Array.isArray(t))return this._validateArray(t),t;throw new Error(s(t))}return+t},_validateArray:function(t){for(var e=0;e<t.length;e++){var i=t[e];if("number"!=typeof i)throw new Error(s(i))}},_setDataVal:function(t){this.element.setAttribute("data-value",t),this.element.setAttribute("value",t),this.element.value=t},_trigger:function(e,i){i=i||0===i?i:void 0;var s=this.eventToCallbackMap[e];if(s&&s.length)for(var o=0;o<s.length;o++)(0,s[o])(i);t&&this._triggerJQueryEvent(e,i)},_triggerJQueryEvent:function(t,e){var i={type:t,value:e};this.$element.trigger(i),this.$sliderElem.trigger(i)},_unbindJQueryEventHandlers:function(){this.$element.off(),this.$sliderElem.off()},_setText:function(t,e){void 0!==t.textContent?t.textContent=e:void 0!==t.innerText&&(t.innerText=e)},_removeClass:function(t,e){for(var i=e.split(" "),s=t.className,o=0;o<i.length;o++){var n=i[o],a=new RegExp("(?:\\s|^)"+n+"(?:\\s|$)");s=s.replace(a," ")}t.className=s.trim()},_addClass:function(t,e){for(var i=e.split(" "),s=t.className,o=0;o<i.length;o++){var n=i[o];new RegExp("(?:\\s|^)"+n+"(?:\\s|$)").test(s)||(s+=" "+n)}t.className=s.trim()},_offsetLeft:function(t){return t.getBoundingClientRect().left},_offsetRight:function(t){return t.getBoundingClientRect().right},_offsetTop:function(t){for(var e=t.offsetTop;(t=t.offsetParent)&&!isNaN(t.offsetTop);)e+=t.offsetTop,"BODY"!==t.tagName&&(e-=t.scrollTop);return e},_offset:function(t){return{left:this._offsetLeft(t),right:this._offsetRight(t),top:this._offsetTop(t)}},_css:function(e,i,s){if(t)t.style(e,i,s);else{var o=i.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(t,e){return e.toUpperCase()});e.style[o]=s}},_toValue:function(t){return this.options.scale.toValue.apply(this,[t])},_toPercentage:function(t){return this.options.scale.toPercentage.apply(this,[t])},_setTooltipPosition:function(){var t=[this.tooltip,this.tooltip_min,this.tooltip_max];if("vertical"===this.options.orientation){var e,i="left"===(e=this.options.tooltip_position?this.options.tooltip_position:this.options.rtl?"left":"right")?"right":"left";t.forEach(function(t){this._addClass(t,e),t.style[i]="100%"}.bind(this))}else"bottom"===this.options.tooltip_position?t.forEach(function(t){this._addClass(t,"bottom"),t.style.top="22px"}.bind(this)):t.forEach(function(t){this._addClass(t,"top"),t.style.top=-this.tooltip.outerHeight-14+"px"}.bind(this))}},t&&t.fn){var n=void 0;t.fn.slider?(windowIsDefined&&window.console.warn("bootstrap-slider.js - WARNING: $.fn.slider namespace is already bound. Use the $.fn.bootstrapSlider namespace instead."),n="aslSlider"):(t.bridget("bslider",e),n="bslider"),t.bridget("aslSlider",e),t(function(){t("input[data-provide=slider]")[n]()})}}(t),e});

/*Dropdown Selector*/
!function(t) {
    "use strict";
    function e(t, e) {
        for (var i = 0; i < t.length; ++i) e(t[i], i);
    }
    function i(e, i) {
        this.$select = t(e), this.$select.attr("data-placeholder") && (i.nonSelectedText = this.$select.data("placeholder")), 
        this.options = this.mergeOptions(t.extend({}, i, this.$select.data())), this.originalOptions = this.$select.clone()[0].options, 
        this.query = "", this.searchTimeout = null, this.lastToggledInput = null, this.options.multiple = "multiple" === this.$select.attr("multiple"), 
        this.options.onChange = t.proxy(this.options.onChange, this), this.options.onDropdownShow = t.proxy(this.options.onDropdownShow, this), 
        this.options.onDropdownHide = t.proxy(this.options.onDropdownHide, this), this.options.onDropdownShown = t.proxy(this.options.onDropdownShown, this), 
        this.options.onDropdownHidden = t.proxy(this.options.onDropdownHidden, this), this.options.onInitialized = t.proxy(this.options.onInitialized, this), 
        this.buildContainer(), this.buildButton(), this.buildDropdown(), this.buildSelectAll(), 
        this.buildDropdownOptions(), this.buildFilter(), this.updateButtonText(), this.updateSelectAll(!0), 
        this.options.disableIfEmpty && t("option", this.$select).length <= 0 && this.disable(), 
        this.$select.hide().after(this.$container), this.options.onInitialized(this.$select, this.$container);
    }
    "undefined" != typeof ko && ko.bindingHandlers && !ko.bindingHandlers.multiselect && (ko.bindingHandlers.multiselect = {
        after: [ "options", "value", "selectedOptions", "enable", "disable" ],
        init: function(e, i, n) {
            var r = t(e), s = ko.toJS(i());
            if (r.multiselect(s), n.has("options")) {
                var o = n.get("options");
                ko.isObservable(o) && ko.computed({
                    read: function() {
                        o(), setTimeout(function() {
                            var t = r.data("multiselect");
                            t && t.updateOriginalOptions(), r.multiselect("rebuild");
                        }, 1);
                    },
                    disposeWhenNodeIsRemoved: e
                });
            }
            if (n.has("value")) {
                var l = n.get("value");
                ko.isObservable(l) && ko.computed({
                    read: function() {
                        l(), setTimeout(function() {
                            r.multiselect("refresh");
                        }, 1);
                    },
                    disposeWhenNodeIsRemoved: e
                }).extend({
                    rateLimit: 100,
                    notifyWhenChangesStop: !0
                });
            }
            if (n.has("selectedOptions")) {
                var a = n.get("selectedOptions");
                ko.isObservable(a) && ko.computed({
                    read: function() {
                        a(), setTimeout(function() {
                            r.multiselect("refresh");
                        }, 1);
                    },
                    disposeWhenNodeIsRemoved: e
                }).extend({
                    rateLimit: 100,
                    notifyWhenChangesStop: !0
                });
            }
            var u = function(t) {
                setTimeout(function() {
                    r.multiselect(t ? "enable" : "disable");
                });
            };
            if (n.has("enable")) {
                var h = n.get("enable");
                ko.isObservable(h) ? ko.computed({
                    read: function() {
                        u(h());
                    },
                    disposeWhenNodeIsRemoved: e
                }).extend({
                    rateLimit: 100,
                    notifyWhenChangesStop: !0
                }) : u(h);
            }
            if (n.has("disable")) {
                var p = n.get("disable");
                ko.isObservable(p) ? ko.computed({
                    read: function() {
                        u(!p());
                    },
                    disposeWhenNodeIsRemoved: e
                }).extend({
                    rateLimit: 100,
                    notifyWhenChangesStop: !0
                }) : u(!p);
            }
            ko.utils.domNodeDisposal.addDisposeCallback(e, function() {
                r.multiselect("destroy");
            });
        },
        update: function(e, i) {
            var n = t(e), r = ko.toJS(i());
            n.multiselect("setOptions", r), n.multiselect("rebuild");
        }
    }), i.prototype = {
        defaults: {
            buttonText: function(e, i) {
                if (this.disabledText.length > 0 && (this.disableIfEmpty || i.prop("disabled")) && 0 == e.length) return this.disabledText;
                if (0 === e.length) return this.nonSelectedText;
                if (this.allSelectedText && e.length === t("option", t(i)).length && 1 !== t("option", t(i)).length && this.multiple) return this.selectAllNumber ? this.allSelectedText + " (" + e.length + ")" : this.allSelectedText;
                if (e.length > this.numberDisplayed) return e.length + " " + this.nSelectedText;
                var n = "", r = this.delimiterText;
                return e.each(function() {
                    var e = void 0 !== t(this).attr("label") ? t(this).attr("label") : t(this).text();
                    n += e + r;
                }), n.substr(0, n.length - 2);
            },
            buttonTitle: function(e) {
                if (0 === e.length) return this.nonSelectedText;
                var i = "", n = this.delimiterText;
                return e.each(function() {
                    var e = void 0 !== t(this).attr("label") ? t(this).attr("label") : t(this).text();
                    i += e + n;
                }), i.substr(0, i.length - 2);
            },
            optionLabel: function(e) {
                return t(e).attr("label") || t(e).text();
            },
            optionClass: function(e) {
                return t(e).attr("class") || "";
            },
            onChange: function() {},
            onDropdownShow: function() {},
            onDropdownHide: function() {},
            onDropdownShown: function() {},
            onDropdownHidden: function() {},
            onSelectAll: function() {},
            onInitialized: function() {},
            enableHTML: !1,
            buttonClass: "btn btn-default",
            inheritClass: !1,
            buttonWidth: "auto",
            buttonContainer: '<div class="btn-group" />',
            dropRight: !1,
            dropUp: !1,
            selectedClass: "active",
            maxHeight: !1,
            checkboxName: !1,
            includeSelectAllOption: !1,
            includeSelectAllIfMoreThan: 0,
            selectAllText: " Select all",
            selectAllValue: "multiselect-all",
            selectAllName: !1,
            selectAllNumber: !0,
            selectAllJustVisible: !0,
            enableFiltering: !1,
            enableCaseInsensitiveFiltering: !1,
            enableFullValueFiltering: !1,
            enableClickableOptGroups: !1,
            enableCollapsibelOptGroups: !1,
            filterPlaceholder: "Search",
            filterBehavior: "text",
            includeFilterClearBtn: !0,
            preventInputChangeEvent: !1,
            nonSelectedText: "None selected",
            nSelectedText: "selected",
            allSelectedText: "All selected",
            numberDisplayed: 3,
            disableIfEmpty: !1,
            disabledText: "",
            delimiterText: ", ",
            templates: {
                button: '<button type="button" class="multiselect adropdown-toggle style-btn" data-toggle="adropdown"><span class="multiselect-selected-text"></span> <b class="caret"></b></button>',
                ul: '<ul class="multiselect-container adropdown-menu"></ul>',
                filter: '<li class="multiselect-item filter"><div class="input-group"><span class="input-group-addon"><i class="icon-search-2"></i></span><input class="form-control multiselect-search" type="text"></div></li>',
                filterClearBtn: '<span class="input-group-btn"><button class="btn btn-default multiselect-clear-filter" type="button"><i class="icon-cancel-circled2"></i></button></span>',
                li: '<li><a tabindex="0"><label></label></a></li>',
                divider: '<li class="multiselect-item divider"></li>',
                liGroup: '<li class="multiselect-item multiselect-group"><label></label></li>'
            }
        },
        constructor: i,
        buildContainer: function() {
            this.$container = t(this.options.buttonContainer), this.$container.on("show.bs.adropdown", this.options.onDropdownShow), 
            this.$container.on("hide.bs.adropdown", this.options.onDropdownHide), this.$container.on("shown.bs.adropdown", this.options.onDropdownShown), 
            this.$container.on("hidden.bs.adropdown", this.options.onDropdownHidden);
        },
        buildButton: function() {
            this.$button = t(this.options.templates.button).addClass(this.options.buttonClass), 
            this.$select.attr("class") && this.options.inheritClass && this.$button.addClass(this.$select.attr("class")), 
            this.$select.prop("disabled") ? this.disable() : this.enable(), this.options.buttonWidth && "auto" !== this.options.buttonWidth && (this.$button.css({
                width: this.options.buttonWidth,
                overflow: "hidden",
                "text-overflow": "ellipsis"
            }), this.$container.css({
                width: this.options.buttonWidth
            }));
            var e = this.$select.attr("tabindex");
            e && this.$button.attr("tabindex", e), this.$container.prepend(this.$button);
        },
        buildDropdown: function() {
            if (this.$ul = t(this.options.templates.ul), this.options.dropRight && this.$ul.addClass("pull-right"), 
            this.options.maxHeight && this.$ul.css({
                "max-height": this.options.maxHeight + "px",
                "overflow-y": "auto",
                "overflow-x": "hidden"
            }), this.options.dropUp) {
                var e = Math.min(this.options.maxHeight, 26 * t('option[data-role!="divider"]', this.$select).length + 19 * t('option[data-role="divider"]', this.$select).length + (this.options.includeSelectAllOption ? 26 : 0) + (this.options.enableFiltering || this.options.enableCaseInsensitiveFiltering ? 44 : 0)), i = e + 34;
                this.$ul.css({
                    "max-height": e + "px",
                    "overflow-y": "auto",
                    "overflow-x": "hidden",
                    "margin-top": "-" + i + "px"
                });
            }
            this.$container.append(this.$ul);
        },
        buildDropdownOptions: function() {
            this.$select.children().each(t.proxy(function(e, i) {
                var n = t(i), r = n.prop("tagName").toLowerCase();
                n.prop("value") !== this.options.selectAllValue && ("optgroup" === r ? this.createOptgroup(i) : "option" === r && ("divider" === n.data("role") ? this.createDivider() : this.createOptionValue(i)));
            }, this)), t("li input", this.$ul).on("change", t.proxy(function(e) {
                var i = t(e.target), n = i.prop("checked") || !1, r = i.val() === this.options.selectAllValue;
                this.options.selectedClass && (n ? i.closest("li").addClass(this.options.selectedClass) : i.closest("li").removeClass(this.options.selectedClass));
                var s = i.val(), o = this.getOptionByValue(s), l = t("option", this.$select).not(o), a = t("input", this.$container).not(i);
                return r ? n ? this.selectAll(this.options.selectAllJustVisible) : this.deselectAll(this.options.selectAllJustVisible) : (n ? (o.prop("selected", !0), 
                this.options.multiple ? o.prop("selected", !0) : (this.options.selectedClass && t(a).closest("li").removeClass(this.options.selectedClass), 
                t(a).prop("checked", !1), l.prop("selected", !1), this.$button.click()), "active" === this.options.selectedClass && l.closest("a").css("outline", "")) : o.prop("selected", !1), 
                this.options.onChange(o, n)), this.$select.change(), this.updateButtonText(), this.updateSelectAll(), 
                this.options.preventInputChangeEvent ? !1 : void 0;
            }, this)), t("li a", this.$ul).on("mousedown", function(t) {
                return t.shiftKey ? !1 : void 0;
            }), t("li a", this.$ul).on("touchstart click", t.proxy(function(e) {
                e.stopPropagation();
                var i = t(e.target);
                if (e.shiftKey && this.options.multiple) {
                    i.is("label") && (e.preventDefault(), i = i.find("input"), i.prop("checked", !i.prop("checked")));
                    var n = i.prop("checked") || !1;
                    if (null !== this.lastToggledInput && this.lastToggledInput !== i) {
                        var r = i.closest("li").index(), s = this.lastToggledInput.closest("li").index();
                        if (r > s) {
                            var o = s;
                            s = r, r = o;
                        }
                        ++s;
                        var l = this.$ul.find("li").slice(r, s).find("input");
                        l.prop("checked", n), this.options.selectedClass && l.closest("li").toggleClass(this.options.selectedClass, n);
                        for (var a = 0, u = l.length; u > a; a++) {
                            var h = t(l[a]), p = this.getOptionByValue(h.val());
                            p.prop("selected", n);
                        }
                    }
                    i.trigger("change");
                }
                i.is("input") && !i.closest("li").is(".multiselect-item") && (this.lastToggledInput = i), 
                i.blur();
            }, this)), this.$container.off("keydown.multiselect").on("keydown.multiselect", t.proxy(function(e) {

                if (!t('input[type="text"]', this.$container).is(":focus")) if (9 === e.keyCode && this.$container.hasClass("open")) this.$button.click(); else {
                    var i = t(this.$container).find("li:not(.divider):not(.disabled) a").filter(":visible");
                    if (!i.length) return;
                    var n = i.index(i.filter(":focus"));
                    38 === e.keyCode && n > 0 ? n-- : 40 === e.keyCode && n < i.length - 1 ? n++ : ~n || (n = 0);
                    var r = i.eq(n);
                    if (r.focus(), 32 === e.keyCode || 13 === e.keyCode) {
                        var s = r.find("input");
                        s.prop("checked", !s.prop("checked")), s.change();
                    }
                    e.stopPropagation(), e.preventDefault();
                }
            }, this)), this.options.enableClickableOptGroups && this.options.multiple && t("li.multiselect-group", this.$ul).on("click", t.proxy(function(e) {
                e.stopPropagation();
                var i = t(e.target).parent(), n = i.nextUntil("li.multiselect-group"), r = n.filter(":visible:not(.disabled)"), s = !0, o = r.find("input"), l = [];
                o.each(function() {
                    s = s && t(this).prop("checked"), l.push(t(this).val());
                }), s ? this.deselect(l, !1) : this.select(l, !1), this.options.onChange(o, !s);
            }, this)), this.options.enableCollapsibleOptGroups && this.options.multiple && (t("li.multiselect-group input", this.$ul).off(), 
            t("li.multiselect-group", this.$ul).siblings().not("li.multiselect-group, li.multiselect-all", this.$ul).each(function() {
                t(this).toggleClass("hidden", !0);
            }), t("li.multiselect-group", this.$ul).on("click", t.proxy(function(t) {
                t.stopPropagation();
            }, this)), t("li.multiselect-group > a > b", this.$ul).on("click", t.proxy(function(e) {
                e.stopPropagation();
                var i = t(e.target).closest("li"), n = i.nextUntil("li.multiselect-group"), r = !0;
                n.each(function() {
                    r = r && t(this).hasClass("hidden");
                }), n.toggleClass("hidden", !r);
            }, this)), console.log(t("li.multiselect-group > a > input", this.$ul)), t("li.multiselect-group > a > input", this.$ul).on("change", t.proxy(function(e) {
                e.stopPropagation();
                var i = t(e.target).closest("li"), n = i.nextUntil("li.multiselect-group", ":not(.disabled)"), r = n.find("input"), s = !0;
                r.each(function() {
                    s = s && t(this).prop("checked");
                }), r.prop("checked", !s).trigger("change");
            }, this)), t("li.multiselect-group", this.$ul).each(function() {
                var e = t(this).nextUntil("li.multiselect-group", ":not(.disabled)"), i = e.find("input"), n = !0;
                i.each(function() {
                    n = n && t(this).prop("checked");
                }), t(this).find("input").prop("checked", n);
            }), t("li input", this.$ul).on("change", t.proxy(function(e) {
                e.stopPropagation();
                var i = t(e.target).closest("li"), n = i.prevUntil("li.multiselect-group", ":not(.disabled)"), r = i.nextUntil("li.multiselect-group", ":not(.disabled)"), s = n.find("input"), o = r.find("input"), l = t(e.target).prop("checked");
                s.each(function() {
                    l = l && t(this).prop("checked");
                }), o.each(function() {
                    l = l && t(this).prop("checked");
                }), i.prevAll(".multiselect-group").find("input").prop("checked", l);
            }, this)), t("li.multiselect-all", this.$ul).css("background", "#f3f3f3").css("border-bottom", "1px solid #eaeaea"), 
            t("li.multiselect-group > a, li.multiselect-all > a > label.checkbox", this.$ul).css("padding", "3px 20px 3px 35px"), 
            t("li.multiselect-group > a > input", this.$ul).css("margin", "4px 0px 5px -20px"));
        },
        createOptionValue: function(e) {
            var i = t(e);
            i.is(":selected") && i.prop("selected", !0);
            var n = this.options.optionLabel(e), r = this.options.optionClass(e), s = i.val(), o = this.options.multiple ? "checkbox" : "radio", l = t(this.options.templates.li), a = t("label", l);
            a.addClass(o), l.addClass(r), this.options.enableHTML ? a.html(" " + n) : a.text(" " + n);
            var u = t("<input/>").attr("type", o);
            this.options.checkboxName && u.attr("name", this.options.checkboxName), a.prepend(u);
            var h = i.prop("selected") || !1;
            u.val(s), s === this.options.selectAllValue && (l.addClass("multiselect-item multiselect-all"), 
            u.parent().parent().addClass("multiselect-all")), a.attr("title", i.attr("title")), 
            this.$ul.append(l), i.is(":disabled") && u.attr("disabled", "disabled").prop("disabled", !0).closest("a").attr("tabindex", "-1").closest("li").addClass("disabled"), 
            u.prop("checked", h), h && this.options.selectedClass && u.closest("li").addClass(this.options.selectedClass);
        },
        createDivider: function() {
            var e = t(this.options.templates.divider);
            this.$ul.append(e);
        },
        createOptgroup: function(e) {
            if (this.options.enableCollapsibleOptGroups && this.options.multiple) {
                var i = t(e).attr("label"), n = t(e).attr("value"), r = t('<li class="multiselect-item multiselect-group"><a href="javascript:void(0);"><input type="checkbox" value="' + n + '"/><b> ' + i + '<b class="caret"></b></b></a></li>');
                this.options.enableClickableOptGroups && r.addClass("multiselect-group-clickable"), 
                this.$ul.append(r), t(e).is(":disabled") && r.addClass("disabled"), t("option", e).each(t.proxy(function(t, e) {
                    this.createOptionValue(e);
                }, this));
            } else {
                var s = t(e).prop("label"), o = t(this.options.templates.liGroup);
                this.options.enableHTML ? t("label", o).html(s) : t("label", o).text(s), this.options.enableClickableOptGroups && o.addClass("multiselect-group-clickable"), 
                this.$ul.append(o), t(e).is(":disabled") && o.addClass("disabled"), t("option", e).each(t.proxy(function(t, e) {
                    this.createOptionValue(e);
                }, this));
            }
        },
        buildSelectAll: function() {
            "number" == typeof this.options.selectAllValue && (this.options.selectAllValue = this.options.selectAllValue.toString());
            var e = this.hasSelectAll();
            if (!e && this.options.includeSelectAllOption && this.options.multiple && t("option", this.$select).length > this.options.includeSelectAllIfMoreThan) {
                this.options.includeSelectAllDivider && this.$ul.prepend(t(this.options.templates.divider));
                var i = t(this.options.templates.li);
                t("label", i).addClass("checkbox"), this.options.enableHTML ? t("label", i).html(" " + this.options.selectAllText) : t("label", i).text(" " + this.options.selectAllText), 
                t("label", i).prepend(this.options.selectAllName ? '<input type="checkbox" name="' + this.options.selectAllName + '" />' : '<input type="checkbox" />');
                var n = t("input", i);
                n.val(this.options.selectAllValue), i.addClass("multiselect-item multiselect-all"), 
                n.parent().parent().addClass("multiselect-all"), this.$ul.prepend(i), n.prop("checked", !1);
            }
        },
        buildFilter: function() {
            if (this.options.enableFiltering || this.options.enableCaseInsensitiveFiltering) {
                var e = Math.max(this.options.enableFiltering, this.options.enableCaseInsensitiveFiltering);
                if (this.$select.find("option").length >= e) {
                    if (this.$filter = t(this.options.templates.filter), t("input", this.$filter).attr("placeholder", this.options.filterPlaceholder), 
                    this.options.includeFilterClearBtn) {
                        var i = t(this.options.templates.filterClearBtn);
                        i.on("click", t.proxy(function() {
                            clearTimeout(this.searchTimeout), this.$filter.find(".multiselect-search").val(""), 
                            t("li", this.$ul).show().removeClass("filter-hidden"), this.updateSelectAll();
                        }, this)), this.$filter.find(".input-group").append(i);
                    }
                    this.$ul.prepend(this.$filter), this.$filter.val(this.query).on("click", function(t) {
                        t.stopPropagation();
                    }).on("input keydown", t.proxy(function(e) {
                        13 === e.which && e.preventDefault(), clearTimeout(this.searchTimeout), this.searchTimeout = this.asyncFunction(t.proxy(function() {
                            if (this.query !== e.target.value) {
                                this.query = e.target.value;
                                var i, n;
                                t.each(t("li", this.$ul), t.proxy(function(e, r) {
                                    var s = t("input", r).length > 0 ? t("input", r).val() : "", o = t("label", r).text(), l = "";
                                    if ("text" === this.options.filterBehavior ? l = o : "value" === this.options.filterBehavior ? l = s : "both" === this.options.filterBehavior && (l = o + "\n" + s), 
                                    s !== this.options.selectAllValue && o) {
                                        var a = !1;
                                        if (this.options.enableCaseInsensitiveFiltering && (l = l.toLowerCase(), this.query = this.query.toLowerCase()), 
                                        this.options.enableFullValueFiltering && "both" !== this.options.filterBehavior) {
                                            var u = l.trim().substring(0, this.query.length);
                                            this.query.indexOf(u) > -1 && (a = !0);
                                        } else l.indexOf(this.query) > -1 && (a = !0);
                                        t(r).toggle(a).toggleClass("filter-hidden", !a), t(r).hasClass("multiselect-group") ? (i = r, 
                                        n = a) : (a && t(i).show().removeClass("filter-hidden"), !a && n && t(r).show().removeClass("filter-hidden"));
                                    }
                                }, this));
                            }
                            this.updateSelectAll();
                        }, this), 300, this);
                    }, this));
                }
            }
        },
        destroy: function() {
            this.$container.remove(), this.$select.show(), this.$select.data("multiselect", null);
        },
        refresh: function() {
            var e = t.map(t("li input", this.$ul), t);
            t("option", this.$select).each(t.proxy(function(i, n) {
                for (var r, s = t(n), o = s.val(), l = e.length; 0 < l--; ) if (o === (r = e[l]).val()) {
                    s.is(":selected") ? (r.prop("checked", !0), this.options.selectedClass && r.closest("li").addClass(this.options.selectedClass)) : (r.prop("checked", !1), 
                    this.options.selectedClass && r.closest("li").removeClass(this.options.selectedClass)), 
                    s.is(":disabled") ? r.attr("disabled", "disabled").prop("disabled", !0).closest("li").addClass("disabled") : r.prop("disabled", !1).closest("li").removeClass("disabled");
                    break;
                }
            }, this)), this.updateButtonText(), this.updateSelectAll();
        },
        select: function(e, i) {
            t.isArray(e) || (e = [ e ]);
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                if (null !== r && void 0 !== r) {
                    var s = this.getOptionByValue(r), o = this.getInputByValue(r);
                    void 0 !== s && void 0 !== o && (this.options.multiple || this.deselectAll(!1), 
                    this.options.selectedClass && o.closest("li").addClass(this.options.selectedClass), 
                    o.prop("checked", !0), s.prop("selected", !0), i && this.options.onChange(s, !0));
                }
            }
            this.updateButtonText(), this.updateSelectAll();
        },
        clearSelection: function() {
            this.deselectAll(!1), this.updateButtonText(), this.updateSelectAll();
        },
        deselect: function(e, i) {
            t.isArray(e) || (e = [ e ]);
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                if (null !== r && void 0 !== r) {
                    var s = this.getOptionByValue(r), o = this.getInputByValue(r);
                    void 0 !== s && void 0 !== o && (this.options.selectedClass && o.closest("li").removeClass(this.options.selectedClass), 
                    o.prop("checked", !1), s.prop("selected", !1), i && this.options.onChange(s, !1));
                }
            }
            this.updateButtonText(), this.updateSelectAll();
        },
        selectAll: function(e, i) {
            e = this.options.enableCollapsibleOptGroups && this.options.multiple ? !1 : e;
            var e = "undefined" == typeof e ? !0 : e, n = t("li input[type='checkbox']:enabled", this.$ul), r = n.filter(":visible"), s = n.length, o = r.length;
            if (e ? (r.prop("checked", !0), t("li:not(.divider):not(.disabled)", this.$ul).filter(":visible").addClass(this.options.selectedClass)) : (n.prop("checked", !0), 
            t("li:not(.divider):not(.disabled)", this.$ul).addClass(this.options.selectedClass)), 
            s === o || e === !1) t("option:not([data-role='divider']):enabled", this.$select).prop("selected", !0); else {
                var l = r.map(function() {
                    return t(this).val();
                }).get();
                t("option:enabled", this.$select).filter(function() {
                    return -1 !== t.inArray(t(this).val(), l);
                }).prop("selected", !0);
            }
            i && this.options.onSelectAll();
        },
        deselectAll: function(e) {
            if (e = this.options.enableCollapsibleOptGroups && this.options.multiple ? !1 : e, 
            e = "undefined" == typeof e ? !0 : e) {
                var i = t("li input[type='checkbox']:not(:disabled)", this.$ul).filter(":visible");
                i.prop("checked", !1);
                var n = i.map(function() {
                    return t(this).val();
                }).get();
                t("option:enabled", this.$select).filter(function() {
                    return -1 !== t.inArray(t(this).val(), n);
                }).prop("selected", !1), this.options.selectedClass && t("li:not(.divider):not(.disabled)", this.$ul).filter(":visible").removeClass(this.options.selectedClass);
            } else t("li input[type='checkbox']:enabled", this.$ul).prop("checked", !1), t("option:enabled", this.$select).prop("selected", !1), 
            this.options.selectedClass && t("li:not(.divider):not(.disabled)", this.$ul).removeClass(this.options.selectedClass);
        },
        rebuild: function() {
            this.$ul.html(""), this.options.multiple = "multiple" === this.$select.attr("multiple"), 
            this.buildSelectAll(), this.buildDropdownOptions(), this.buildFilter(), this.updateButtonText(), 
            this.updateSelectAll(!0), this.options.disableIfEmpty && t("option", this.$select).length <= 0 ? this.disable() : this.enable(), 
            this.options.dropRight && this.$ul.addClass("pull-right");
        },
        dataprovider: function(i) {
            var n = 0, r = this.$select.empty();
            t.each(i, function(i, s) {
                var o;
                t.isArray(s.children) ? (n++, o = t("<optgroup/>").attr({
                    label: s.label || "Group " + n,
                    disabled: !!s.disabled
                }), e(s.children, function(e) {
                    o.append(t("<option/>").attr({
                        value: e.value,
                        label: e.label || e.value,
                        title: e.title,
                        selected: !!e.selected,
                        disabled: !!e.disabled
                    }));
                })) : (o = t("<option/>").attr({
                    value: s.value,
                    label: s.label || s.value,
                    title: s.title,
                    class: s["class"],
                    selected: !!s.selected,
                    disabled: !!s.disabled
                }), o.text(s.label || s.value)), r.append(o);
            }), this.rebuild();
        },
        enable: function() {
            this.$select.prop("disabled", !1), this.$button.prop("disabled", !1).removeClass("disabled");
        },
        disable: function() {
            this.$select.prop("disabled", !0), this.$button.prop("disabled", !0).addClass("disabled");
        },
        setOptions: function(t) {
            this.options = this.mergeOptions(t);
        },
        mergeOptions: function(e) {
            return t.extend(!0, {}, this.defaults, this.options, e);
        },
        hasSelectAll: function() {
            return t("li.multiselect-all", this.$ul).length > 0;
        },
        updateSelectAll: function(e) {
            if (this.hasSelectAll()) {
                var i = t("li:not(.multiselect-item):not(.filter-hidden) input:enabled", this.$ul), n = i.length, r = i.filter(":checked").length, s = t("li.multiselect-all", this.$ul), o = s.find("input");
                r > 0 && r === n ? (o.prop("checked", !0), s.addClass(this.options.selectedClass), 
                this.options.onSelectAll(!0)) : (o.prop("checked", !1), s.removeClass(this.options.selectedClass), 
                0 === r && (e || this.options.onSelectAll(!1)));
            }
        },
        updateButtonText: function() {
            var e = this.getSelected();
            this.options.enableHTML ? t(".multiselect .multiselect-selected-text", this.$container).html(this.options.buttonText(e, this.$select)) : t(".multiselect .multiselect-selected-text", this.$container).text(this.options.buttonText(e, this.$select)), 
            t(".multiselect", this.$container).attr("title", this.options.buttonTitle(e, this.$select));
        },
        getSelected: function() {
            return t("option", this.$select).filter(":selected");
        },
        getOptionByValue: function(e) {
            for (var i = t("option", this.$select), n = e.toString(), r = 0; r < i.length; r += 1) {
                var s = i[r];
                if (s.value === n) return t(s);
            }
        },
        getInputByValue: function(e) {
            for (var i = t("li input", this.$ul), n = e.toString(), r = 0; r < i.length; r += 1) {
                var s = i[r];
                if (s.value === n) return t(s);
            }
        },
        updateOriginalOptions: function() {
            this.originalOptions = this.$select.clone()[0].options;
        },
        asyncFunction: function(t, e, i) {
            var n = Array.prototype.slice.call(arguments, 3);
            return setTimeout(function() {
                t.apply(i || window, n);
            }, e);
        },
        setAllSelectedText: function(t) {
            this.options.allSelectedText = t, this.updateButtonText();
        }
    }, t.fn.multiselect = function(e, n, r) {
        return this.each(function() {
            var s = t(this).data("multiselect"), o = "object" == typeof e && e;
            s || (s = new i(this, o), t(this).data("multiselect", s)), "string" == typeof e && (s[e](n, r), 
            "destroy" === e && t(this).data("multiselect", !1));
        });
    }, t.fn.multiselect.Constructor = i, t(function() {
        t("select[data-role=multiselect]").multiselect();
    });
}(jQuery);