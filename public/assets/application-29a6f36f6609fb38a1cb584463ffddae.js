/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */

!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});
/*
International Telephone Input v2.0.10
https://github.com/Bluefieldscom/intl-tel-input.git
*/
// wrap in UMD - see https://github.com/umdjs/umd/blob/master/jqueryPlugin.js
(function(factory) {
    if (typeof define === "function" && define.amd) {
        define([ "jquery" ], function($) {
            factory($, window, document);
        });
    } else {
        factory(jQuery, window, document);
    }
})(function($, window, document, undefined) {
    "use strict";
    var pluginName = "intlTelInput", id = 1, // give each instance it's own id for namespaced event handling
    defaults = {
        // automatically format the number according to the selected country
        autoFormat: false,
        // if there is just a dial code in the input: remove it on blur, and re-add it on focus
        autoHideDialCode: true,
        // default country
        defaultCountry: "",
        // don't insert international dial codes
        nationalMode: false,
        // display only these countries
        onlyCountries: [],
        // the countries at the top of the list. defaults to united states and united kingdom
        preferredCountries: [ "us", "gb" ],
        // make the dropdown the same width as the input
        responsiveDropdown: false,
        // specify the path to the libphonenumber script to enable validation/formatting
        utilsScript: ""
    }, keys = {
        UP: 38,
        DOWN: 40,
        ENTER: 13,
        ESC: 27,
        PLUS: 43,
        A: 65,
        Z: 90,
        ZERO: 48,
        NINE: 57,
        SPACE: 32,
        BSPACE: 8,
        DEL: 46,
        CTRL: 17,
        CMD1: 91,
        // Chrome
        CMD2: 224
    }, windowLoaded = false;
    // keep track of if the window.load event has fired as impossible to check after the fact
    $(window).load(function() {
        windowLoaded = true;
    });
    function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        // event namespace
        this.ns = "." + pluginName + id++;
        // Chrome, FF, Safari, IE9+
        this.isGoodBrowser = Boolean(element.setSelectionRange);
        this._name = pluginName;
        this.init();
    }
    Plugin.prototype = {
        init: function() {
            // if in nationalMode, disable options relating to dial codes
            if (this.options.nationalMode) {
                this.options.autoFormat = this.options.autoHideDialCode = false;
            }
            // chrome on android has issues with key events
            // backspace issues for inputs with type=text: https://code.google.com/p/chromium/issues/detail?id=184812
            // and improper key codes for keyup and keydown: https://code.google.com/p/chromium/issues/detail?id=118639
            if (navigator.userAgent.match(/Android/i) && navigator.userAgent.match(/Chrome/i)) {
                this.options.autoFormat = false;
            }
            // process all the data: onlyCounties, preferredCountries, defaultCountry etc
            this._processCountryData();
            // generate the markup
            this._generateMarkup();
            // set the initial state of the input value and the selected flag
            this._setInitialState();
            // start all of the event listeners: autoHideDialCode, input keydown, selectedFlag click
            this._initListeners();
        },
        /********************
     *  PRIVATE METHODS
     ********************/
        // prepare all of the country data, including onlyCountries, preferredCountries and
        // defaultCountry options
        _processCountryData: function() {
            // set the instances country data objects
            this._setInstanceCountryData();
            // set the preferredCountries property
            this._setPreferredCountries();
        },
        // process onlyCountries array if present
        _setInstanceCountryData: function() {
            var that = this;
            if (this.options.onlyCountries.length) {
                var newCountries = [], newCountryCodes = {}, dialCode, i;
                for (i = 0; i < this.options.onlyCountries.length; i++) {
                    var countryCode = this.options.onlyCountries[i], countryData = that._getCountryData(countryCode, true, false);
                    if (countryData) {
                        newCountries.push(countryData);
                        // add this country's dial code to the countryCodes
                        dialCode = countryData.dialCode;
                        if (newCountryCodes[dialCode]) {
                            newCountryCodes[dialCode].push(countryCode);
                        } else {
                            newCountryCodes[dialCode] = [ countryCode ];
                        }
                    }
                }
                // maintain country priority
                for (dialCode in newCountryCodes) {
                    if (newCountryCodes[dialCode].length > 1) {
                        var sortedCountries = [];
                        // go through all of the allCountryCodes countries for this dialCode and create a new (ordered) array of values (if they're in the newCountryCodes array)
                        for (i = 0; i < allCountryCodes[dialCode].length; i++) {
                            var country = allCountryCodes[dialCode][i];
                            if ($.inArray(newCountryCodes[dialCode], country)) {
                                sortedCountries.push(country);
                            }
                        }
                        newCountryCodes[dialCode] = sortedCountries;
                    }
                }
                this.countries = newCountries;
                this.countryCodes = newCountryCodes;
            } else {
                this.countries = allCountries;
                this.countryCodes = allCountryCodes;
            }
        },
        // process preferred countries - iterate through the preferences,
        // fetching the country data for each one
        _setPreferredCountries: function() {
            var that = this;
            this.preferredCountries = [];
            for (var i = 0; i < this.options.preferredCountries.length; i++) {
                var countryCode = this.options.preferredCountries[i], countryData = that._getCountryData(countryCode, false, true);
                if (countryData) {
                    that.preferredCountries.push(countryData);
                }
            }
        },
        // generate all of the markup for the plugin: the selected flag overlay, and the dropdown
        _generateMarkup: function() {
            // telephone input
            this.telInput = $(this.element);
            // containers (mostly for positioning)
            this.telInput.wrap($("<div>", {
                "class": "intl-tel-input"
            }));
            var flagsContainer = $("<div>", {
                "class": "flag-dropdown"
            }).insertAfter(this.telInput);
            // currently selected flag (displayed to left of input)
            var selectedFlag = $("<div>", {
                "class": "selected-flag"
            }).appendTo(flagsContainer);
            this.selectedFlagInner = $("<div>", {
                "class": "flag"
            }).appendTo(selectedFlag);
            // CSS triangle
            $("<div>", {
                "class": "arrow"
            }).appendTo(this.selectedFlagInner);
            // country list contains: preferred countries, then divider, then all countries
            this.countryList = $("<ul>", {
                "class": "country-list v-hide"
            }).appendTo(flagsContainer);
            if (this.preferredCountries.length) {
                this._appendListItems(this.preferredCountries, "preferred");
                $("<li>", {
                    "class": "divider"
                }).appendTo(this.countryList);
            }
            this._appendListItems(this.countries, "");
            // now we can grab the dropdown height, and hide it properly
            this.dropdownHeight = this.countryList.outerHeight();
            this.countryList.removeClass("v-hide").addClass("hide");
            // and set the width
            if (this.options.responsiveDropdown) {
                this.countryList.outerWidth(this.telInput.outerWidth());
            }
            // this is useful in lots of places
            this.countryListItems = this.countryList.children(".country");
        },
        // add a country <li> to the countryList <ul> container
        _appendListItems: function(countries, className) {
            // we create so many DOM elements, I decided it was faster to build a temp string
            // and then add everything to the DOM in one go at the end
            var tmp = "";
            // for each country
            for (var i = 0; i < countries.length; i++) {
                var c = countries[i];
                // open the list item
                tmp += "<li class='country " + className + "' data-dial-code='" + c.dialCode + "' data-country-code='" + c.iso2 + "'>";
                // add the flag
                tmp += "<div class='flag " + c.iso2 + "'></div>";
                // and the country name and dial code
                tmp += "<span class='country-name'>" + c.name + "</span>";
                tmp += "<span class='dial-code'>+" + c.dialCode + "</span>";
                // close the list item
                tmp += "</li>";
            }
            this.countryList.append(tmp);
        },
        // set the initial state of the input value and the selected flag
        _setInitialState: function() {
            var val = this.telInput.val();
            // if the input is not pre-populated, or if it doesn't contain a valid dial code, fall back to the default country
            // Note: calling setNumber will also format the number
            if (!val || !this.setNumber(val)) {
                // flag is not set, so set to the default country
                var defaultCountry;
                // check the defaultCountry option, else fall back to the first in the list
                if (this.options.defaultCountry) {
                    defaultCountry = this._getCountryData(this.options.defaultCountry, false, false);
                } else {
                    defaultCountry = this.preferredCountries.length ? this.preferredCountries[0] : this.countries[0];
                }
                this._selectFlag(defaultCountry.iso2);
                // if autoHideDialCode is disabled, insert the default dial code
                if (!val && !this.options.autoHideDialCode) {
                    this._resetToDialCode(defaultCountry.dialCode);
                }
            }
        },
        // initialise the main event listeners: input keydown, and click selected flag
        _initListeners: function() {
            var that = this;
            // auto hide dial code option
            if (this.options.autoHideDialCode) {
                this._initAutoHideDialCode();
            }
            // hack for input nested inside label: clicking the selected-flag to open the dropdown would then automatically trigger a 2nd click on the input which would close it again
            var label = this.telInput.closest("label");
            if (label.length) {
                label.on("click" + this.ns, function(e) {
                    // if the dropdown is closed, then focus the input, else ignore the click
                    if (that.countryList.hasClass("hide")) {
                        that.telInput.focus();
                    } else {
                        e.preventDefault();
                    }
                });
            }
            if (this.options.autoFormat) {
                // format number and update flag on keypress
                // use keypress event as we want to ignore all input except for a select few keys,
                // but we dont want to ignore the navigation keys like the arrows etc.
                // NOTE: no point in refactoring this to only bind these listeners on focus/blur because then you would need to have those 2 listeners running the whole time anyway...
                this.telInput.on("keypress" + this.ns, function(e) {
                    // 32 is space, and after that it's all chars (not meta/nav keys)
                    // this fix is needed for Firefox, which triggers keypress event for some meta/nav keys
                    if (e.which >= keys.SPACE) {
                        e.preventDefault();
                        // allowed keys are now just numeric keys
                        var isAllowed = e.which >= keys.ZERO && e.which <= keys.NINE, input = that.telInput[0], noSelection = that.isGoodBrowser && input.selectionStart == input.selectionEnd;
                        // still reformat even if not an allowed key as they could by typing a formatting char, but ignore if there's a selection as doesn't make sense to replace selection with illegal char and then immediately remove it
                        if (isAllowed || noSelection) {
                            var newChar = isAllowed ? String.fromCharCode(e.which) : null;
                            that._handleInputKey(newChar, true);
                        }
                    }
                });
            }
            // handle keyup event
            // for autoFormat: we use keyup to catch delete events after the fact
            this.telInput.on("keyup" + this.ns, function(e) {
                if (that.options.autoFormat) {
                    var isCtrl = e.which == keys.CTRL || e.which == keys.CMD1 || e.which == keys.CMD2, input = that.telInput[0], noSelection = that.isGoodBrowser && input.selectionStart == input.selectionEnd, cursorAtEnd = that.isGoodBrowser && input.selectionStart == that.telInput.val().length;
                    // if delete: format with suffix
                    // if backspace: format (if cursorAtEnd: no suffix)
                    // if ctrl and no selection (i.e. could be paste): format with suffix
                    if (e.which == keys.DEL || e.which == keys.BSPACE || isCtrl && noSelection) {
                        var addSuffix = !(e.which == keys.BSPACE && cursorAtEnd);
                        that._handleInputKey(null, addSuffix);
                    }
                    // prevent deleting the plus
                    var val = that.telInput.val();
                    if (val.substr(0, 1) != "+") {
                        // newCursorPos is current pos + 1 to account for the plus we are about to add
                        var newCursorPos = that.isGoodBrowser ? input.selectionStart + 1 : 0;
                        that.telInput.val("+" + val);
                        if (that.isGoodBrowser) {
                            input.setSelectionRange(newCursorPos, newCursorPos);
                        }
                    }
                } else {
                    // if no autoFormat, just update flag
                    that._updateFlag();
                }
            });
            // toggle country dropdown on click
            var selectedFlag = this.selectedFlagInner.parent();
            selectedFlag.on("click" + this.ns, function(e) {
                // only intercept this event if we're opening the dropdown
                // else let it bubble up to the top ("click-off-to-close" listener)
                // we cannot just stopPropagation as it may be needed to close another instance
                if (that.countryList.hasClass("hide") && !that.telInput.prop("disabled")) {
                    that._showDropdown();
                }
            });
            // if the user has specified the path to the utils script
            // inject a new script element for it at the end of the body
            if (this.options.utilsScript && !$.fn[pluginName].injectedUtilsScript) {
                // don't do this twice!
                $.fn[pluginName].injectedUtilsScript = true;
                var injectUtilsScript = function() {
                    $.getScript(that.options.utilsScript, function() {
                        // tell all instances the utils are ready
                        $(".intl-tel-input input").intlTelInput("utilsLoaded");
                    });
                };
                // if the plugin is being initialised after the window.load event has already been fired
                if (windowLoaded) {
                    injectUtilsScript();
                } else {
                    // wait until the load event so we don't block any other requests e.g. the flags image
                    $(window).load(injectUtilsScript);
                }
            }
        },
        // when autoFormat is enabled: handle various key events on the input: the 2 main situations are 1) adding a new number character, which will replace any selection, reformat, and try to preserve the cursor position. and 2) reformatting on backspace, or paste event
        _handleInputKey: function(newNumericChar, addSuffix) {
            var val = this.telInput.val(), newCursor = null, cursorAtEnd = false, // raw DOM element
            input = this.telInput[0];
            if (this.isGoodBrowser) {
                var selectionEnd = input.selectionEnd, originalLen = val.length;
                cursorAtEnd = selectionEnd == originalLen;
                // if handling a new number character: insert it in the right place and calculate the new cursor position
                if (newNumericChar) {
                    // replace any selection they may have made with the new char
                    val = val.substring(0, input.selectionStart) + newNumericChar + val.substring(selectionEnd, originalLen);
                    // if the cursor was not at the end then calculate it's new pos
                    if (!cursorAtEnd) {
                        newCursor = selectionEnd + (val.length - originalLen);
                    }
                } else {
                    // here we're not handling a new char, we're just doing a re-format, but we still need to maintain the cursor position
                    newCursor = input.selectionStart;
                }
            } else if (newNumericChar) {
                val += newNumericChar;
            }
            // update the number and flag
            this.setNumber(val, addSuffix);
            // update the cursor position
            if (this.isGoodBrowser) {
                // if it was at the end, keep it there
                if (cursorAtEnd) {
                    newCursor = this.telInput.val().length;
                }
                input.setSelectionRange(newCursor, newCursor);
            }
        },
        // on focus: if empty add dial code. on blur: if just dial code, then empty it
        _initAutoHideDialCode: function() {
            var that = this;
            // mousedown decides where the cursor goes, so if we're focusing
            // we must preventDefault as we'll be inserting the dial code,
            // and we want the cursor to be at the end no matter where they click
            this.telInput.on("mousedown" + this.ns, function(e) {
                if (!that.telInput.is(":focus") && !that.telInput.val()) {
                    e.preventDefault();
                    // but this also cancels the focus, so we must trigger that manually
                    that.telInput.focus();
                }
            });
            // on focus: if empty, insert the dial code for the currently selected flag
            this.telInput.on("focus" + this.ns, function() {
                if (!that.telInput.val()) {
                    that._updateVal("+" + that.selectedCountryData.dialCode, true);
                    // after auto-inserting a dial code, if the first key they hit is '+' then assume
                    // they are entering a new number, so remove the dial code.
                    // use keypress instead of keydown because keydown gets triggered for the shift key
                    // (required to hit the + key), and instead of keyup because that shows the new '+'
                    // before removing the old one
                    that.telInput.one("keypress.plus" + that.ns, function(e) {
                        if (e.which == keys.PLUS) {
                            that.telInput.val("+");
                        }
                    });
                    // after tabbing in, make sure the cursor is at the end
                    // we must use setTimeout to get outside of the focus handler as it seems the 
                    // selection happens after that
                    setTimeout(function() {
                        that._cursorToEnd();
                    });
                }
            });
            // on blur: if just a dial code then remove it
            this.telInput.on("blur" + this.ns, function() {
                var value = that.telInput.val(), startsPlus = value.substr(0, 1) == "+";
                if (startsPlus) {
                    var numeric = value.replace(/\D/g, ""), clean = "+" + numeric;
                    // if just a plus, or if just a dial code
                    if (!numeric || that.selectedCountryData.dialCode == numeric) {
                        that.telInput.val("");
                    }
                }
                // remove the keypress listener we added on focus
                that.telInput.off("keypress.plus" + that.ns);
            });
        },
        // put the cursor to the end of the input (usually after a focus event)
        _cursorToEnd: function() {
            var input = this.telInput[0];
            if (this.isGoodBrowser) {
                var len = this.telInput.val().length;
                input.setSelectionRange(len, len);
            }
        },
        // show the dropdown
        _showDropdown: function() {
            this._setDropdownPosition();
            // update highlighting and scroll to active list item
            var activeListItem = this.countryList.children(".active");
            this._highlightListItem(activeListItem);
            // show it
            this.countryList.removeClass("hide");
            this._scrollTo(activeListItem);
            // bind all the dropdown-related listeners: mouseover, click, click-off, keydown
            this._bindDropdownListeners();
            // update the arrow
            this.selectedFlagInner.children(".arrow").addClass("up");
        },
        // decide where to position dropdown (depends on position within viewport, and scroll)
        _setDropdownPosition: function() {
            var inputTop = this.telInput.offset().top, windowTop = $(window).scrollTop(), // dropdownFitsBelow = (dropdownBottom < windowBottom)
            dropdownFitsBelow = inputTop + this.telInput.outerHeight() + this.dropdownHeight < windowTop + $(window).height(), dropdownFitsAbove = inputTop - this.dropdownHeight > windowTop;
            // dropdownHeight - 1 for border
            var cssTop = !dropdownFitsBelow && dropdownFitsAbove ? "-" + (this.dropdownHeight - 1) + "px" : "";
            this.countryList.css("top", cssTop);
        },
        // we only bind dropdown listeners when the dropdown is open
        _bindDropdownListeners: function() {
            var that = this;
            // when mouse over a list item, just highlight that one
            // we add the class "highlight", so if they hit "enter" we know which one to select
            this.countryList.on("mouseover" + this.ns, ".country", function(e) {
                that._highlightListItem($(this));
            });
            // listen for country selection
            this.countryList.on("click" + this.ns, ".country", function(e) {
                that._selectListItem($(this));
            });
            // click off to close
            // (except when this initial opening click is bubbling up)
            // we cannot just stopPropagation as it may be needed to close another instance
            var isOpening = true;
            $("html").on("click" + this.ns, function(e) {
                if (!isOpening) {
                    that._closeDropdown();
                }
                isOpening = false;
            });
            // listen for up/down scrolling, enter to select, or letters to jump to country name.
            // use keydown as keypress doesn't fire for non-char keys and we want to catch if they
            // just hit down and hold it to scroll down (no keyup event).
            // listen on the document because that's where key events are triggered if no input has focus
            var query = "", queryTimer = null;
            $(document).on("keydown" + this.ns, function(e) {
                // prevent down key from scrolling the whole page,
                // and enter key from submitting a form etc
                e.preventDefault();
                if (e.which == keys.UP || e.which == keys.DOWN) {
                    // up and down to navigate
                    that._handleUpDownKey(e.which);
                } else if (e.which == keys.ENTER) {
                    // enter to select
                    that._handleEnterKey();
                } else if (e.which == keys.ESC) {
                    // esc to close
                    that._closeDropdown();
                } else if (e.which >= keys.A && e.which <= keys.Z || e.which == keys.SPACE) {
                    // upper case letters (note: keyup/keydown only return upper case letters)
                    // jump to countries that start with the query string
                    if (queryTimer) {
                        clearTimeout(queryTimer);
                    }
                    query += String.fromCharCode(e.which);
                    that._searchForCountry(query);
                    // if the timer hits 1 second, reset the query
                    queryTimer = setTimeout(function() {
                        query = "";
                    }, 1e3);
                }
            });
        },
        // highlight the next/prev item in the list (and ensure it is visible)
        _handleUpDownKey: function(key) {
            var current = this.countryList.children(".highlight").first();
            var next = key == keys.UP ? current.prev() : current.next();
            if (next.length) {
                // skip the divider
                if (next.hasClass("divider")) {
                    next = key == keys.UP ? next.prev() : next.next();
                }
                this._highlightListItem(next);
                this._scrollTo(next);
            }
        },
        // select the currently highlighted item
        _handleEnterKey: function() {
            var currentCountry = this.countryList.children(".highlight").first();
            if (currentCountry.length) {
                this._selectListItem(currentCountry);
            }
        },
        // find the first list item whose name starts with the query string
        _searchForCountry: function(query) {
            for (var i = 0; i < this.countries.length; i++) {
                if (this._startsWith(this.countries[i].name, query)) {
                    var listItem = this.countryList.children("[data-country-code=" + this.countries[i].iso2 + "]").not(".preferred");
                    // update highlighting and scroll
                    this._highlightListItem(listItem);
                    this._scrollTo(listItem, true);
                    break;
                }
            }
        },
        // check if (uppercase) string a starts with string b
        _startsWith: function(a, b) {
            return a.substr(0, b.length).toUpperCase() == b;
        },
        // update the input's value to the given val
        // if autoFormat=true, format it first according to the country-specific formatting rules
        _updateVal: function(val, addSuffix) {
            var formatted;
            if (this.options.autoFormat && window.intlTelInputUtils) {
                // don't try to add the suffix if we dont have a full dial code
                if (!this._getDialCode(val)) {
                    addSuffix = false;
                }
                formatted = intlTelInputUtils.formatNumber(val, addSuffix);
            } else {
                // no autoFormat, so just insert the original value
                formatted = val;
            }
            this.telInput.val(formatted);
        },
        // update the selected flag
        _updateFlag: function(number) {
            // try and extract valid dial code from input
            var dialCode = this._getDialCode(number);
            if (dialCode) {
                // check if one of the matching countries is already selected
                var countryCodes = this.countryCodes[dialCode.replace(/\D/g, "")], alreadySelected = false;
                // countries with area codes: we must always update the flag as if it's not an exact match
                // we should always default to the first country in the list. This is to avoid having to
                // explicitly define every possible area code in America (there are 999 possible area codes)
                if (!this.selectedCountryData || !this.selectedCountryData.hasAreaCodes) {
                    for (var i = 0; i < countryCodes.length; i++) {
                        if (this.selectedFlagInner.hasClass(countryCodes[i])) {
                            alreadySelected = true;
                        }
                    }
                }
                // else choose the first in the list
                if (!alreadySelected) {
                    this._selectFlag(countryCodes[0]);
                }
            }
            return dialCode;
        },
        // reset the input value to just a dial code
        _resetToDialCode: function(dialCode) {
            // if nationalMode is enabled then don't insert the dial code
            var value = this.options.nationalMode ? "" : "+" + dialCode;
            this.telInput.val(value);
        },
        // remove highlighting from other list items and highlight the given item
        _highlightListItem: function(listItem) {
            this.countryListItems.removeClass("highlight");
            listItem.addClass("highlight");
        },
        // find the country data for the given country code
        // the ignoreOnlyCountriesOption is only used during init() while parsing the onlyCountries array
        _getCountryData: function(countryCode, ignoreOnlyCountriesOption, allowFail) {
            var countryList = ignoreOnlyCountriesOption ? allCountries : this.countries;
            for (var i = 0; i < countryList.length; i++) {
                if (countryList[i].iso2 == countryCode) {
                    return countryList[i];
                }
            }
            if (allowFail) {
                return null;
            } else {
                throw new Error("No country data for '" + countryCode + "'");
            }
        },
        // update the selected flag and the active list item
        _selectFlag: function(countryCode) {
            this.selectedFlagInner.attr("class", "flag " + countryCode);
            // update the placeholder
            if (window.intlTelInputUtils) {
                this.telInput.attr("placeholder", intlTelInputUtils.getExampleNumber(countryCode));
            }
            // update the title attribute
            this.selectedCountryData = this._getCountryData(countryCode, false, false);
            var title = this.selectedCountryData.name + ": +" + this.selectedCountryData.dialCode;
            this.selectedFlagInner.parent().attr("title", title);
            // update the active list item
            var listItem = this.countryListItems.children(".flag." + countryCode).first().parent();
            this.countryListItems.removeClass("active");
            listItem.addClass("active");
        },
        // called when the user selects a list item from the dropdown
        _selectListItem: function(listItem) {
            // update selected flag and active list item
            var countryCode = listItem.attr("data-country-code");
            this._selectFlag(countryCode);
            this._closeDropdown();
            // update input value
            if (!this.options.nationalMode) {
                this._updateDialCode("+" + listItem.attr("data-dial-code"));
            }
            // always fire the change event as even if nationalMode=true (and we haven't updated
            // the input val), the system as a whole has still changed - see country-sync example
            this.telInput.trigger("change");
            // focus the input
            this.telInput.focus();
            this._cursorToEnd();
        },
        // close the dropdown and unbind any listeners
        _closeDropdown: function() {
            this.countryList.addClass("hide");
            // update the arrow
            this.selectedFlagInner.children(".arrow").removeClass("up");
            // unbind key events
            $(document).off(this.ns);
            // unbind click-off-to-close
            $("html").off(this.ns);
            // unbind hover and click listeners
            this.countryList.off(this.ns);
        },
        // check if an element is visible within it's container, else scroll until it is
        _scrollTo: function(element, middle) {
            var container = this.countryList, containerHeight = container.height(), containerTop = container.offset().top, containerBottom = containerTop + containerHeight, elementHeight = element.outerHeight(), elementTop = element.offset().top, elementBottom = elementTop + elementHeight, newScrollTop = elementTop - containerTop + container.scrollTop(), middleOffset = containerHeight / 2 - elementHeight / 2;
            if (elementTop < containerTop) {
                // scroll up
                if (middle) {
                    newScrollTop -= middleOffset;
                }
                container.scrollTop(newScrollTop);
            } else if (elementBottom > containerBottom) {
                // scroll down
                if (middle) {
                    newScrollTop += middleOffset;
                }
                var heightDifference = containerHeight - elementHeight;
                container.scrollTop(newScrollTop - heightDifference);
            }
        },
        // replace any existing dial code with the new one
        // currently this is only called from _selectListItem
        _updateDialCode: function(newDialCode) {
            var inputVal = this.telInput.val(), prevDialCode = this._getDialCode(), newNumber;
            // if the previous number contained a valid dial code, replace it
            // (if more than just a plus character)
            if (prevDialCode.length > 1) {
                newNumber = inputVal.replace(prevDialCode, newDialCode);
            } else {
                // if the previous number didn't contain a dial code, we should persist it
                var existingNumber = inputVal && inputVal.substr(0, 1) != "+" ? $.trim(inputVal) : "";
                newNumber = newDialCode + existingNumber;
            }
            this._updateVal(newNumber, true);
        },
        // try and extract a valid international dial code from a full telephone number
        // Note: returns the raw string inc plus character and any whitespace/dots etc
        _getDialCode: function(number) {
            var dialCode = "", inputVal = number || this.telInput.val();
            // only interested in international numbers (starting with a plus)
            if (inputVal.charAt(0) == "+") {
                var numericChars = "";
                // iterate over chars
                for (var i = 0; i < inputVal.length; i++) {
                    var c = inputVal.charAt(i);
                    // if char is number
                    if ($.isNumeric(c)) {
                        numericChars += c;
                        // if current numericChars make a valid dial code
                        if (this.countryCodes[numericChars]) {
                            // store the actual raw string (useful for matching later)
                            dialCode = inputVal.substring(0, i + 1);
                        }
                        // longest dial code is 4 chars
                        if (numericChars.length == 4) {
                            break;
                        }
                    }
                }
            }
            return dialCode;
        },
        /********************
     *  PUBLIC METHODS
     ********************/
        // remove plugin
        destroy: function() {
            // make sure the dropdown is closed (and unbind listeners)
            this._closeDropdown();
            // key events, and focus/blur events if autoHideDialCode=true
            this.telInput.off(this.ns);
            // click event to open dropdown
            this.selectedFlagInner.parent().off(this.ns);
            // label click hack
            this.telInput.closest("label").off(this.ns);
            // remove markup
            var container = this.telInput.parent();
            container.before(this.telInput).remove();
        },
        // get the country data for the currently selected flag
        getSelectedCountryData: function() {
            return this.selectedCountryData;
        },
        // validate the input val - assumes the global function isValidNumber
        // pass in true if you want to allow national numbers (no country dial code)
        isValidNumber: function(allowNational) {
            var val = $.trim(this.telInput.val()), countryCode = allowNational ? this.selectedCountryData.iso2 : "", // libphonenumber allows alpha chars, but in order to allow that, we'd need a method to retrieve the processed number, with letters replaced with numbers
            containsAlpha = /[a-zA-Z]/.test(val);
            return !containsAlpha && window.intlTelInputUtils && intlTelInputUtils.isValidNumber(val, countryCode);
        },
        // update the selected flag, and if the input is empty: insert the new dial code
        selectCountry: function(countryCode) {
            // check if already selected
            if (!this.selectedFlagInner.hasClass(countryCode)) {
                this._selectFlag(countryCode);
                if (!this.telInput.val() && !this.options.autoHideDialCode) {
                    this._resetToDialCode(this.selectedCountryData.dialCode);
                }
            }
        },
        // set the input value and update the flag
        setNumber: function(number, addSuffix) {
            // we must update the flag first, which updates this.selectedCountryData, which is used later for formatting the number before displaying it
            var dialCode = this._updateFlag(number);
            this._updateVal(number, addSuffix);
            return dialCode;
        },
        // this is called when the utils are ready
        utilsLoaded: function() {
            // if autoFormat is enabled and there's an initial value in the input, then format it
            if (this.options.autoFormat && this.telInput.val()) {
                this._updateVal(this.telInput.val());
            }
        }
    };
    // adapted to allow public functions
    // using https://github.com/jquery-boilerplate/jquery-boilerplate/wiki/Extending-jQuery-Boilerplate
    $.fn[pluginName] = function(options) {
        var args = arguments;
        // Is the first parameter an object (options), or was omitted,
        // instantiate a new instance of the plugin.
        if (options === undefined || typeof options === "object") {
            return this.each(function() {
                if (!$.data(this, "plugin_" + pluginName)) {
                    $.data(this, "plugin_" + pluginName, new Plugin(this, options));
                }
            });
        } else if (typeof options === "string" && options[0] !== "_" && options !== "init") {
            // If the first parameter is a string and it doesn't start
            // with an underscore or "contains" the `init`-function,
            // treat this as a call to a public method.
            // Cache the method call to make it possible to return a value
            var returns;
            this.each(function() {
                var instance = $.data(this, "plugin_" + pluginName);
                // Tests that there's already a plugin-instance
                // and checks that the requested public method exists
                if (instance instanceof Plugin && typeof instance[options] === "function") {
                    // Call the method of our plugin instance,
                    // and pass it the supplied arguments.
                    returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
                }
                // Allow instances to be destroyed via the 'destroy' method
                if (options === "destroy") {
                    $.data(this, "plugin_" + pluginName, null);
                }
            });
            // If the earlier cached method gives a value back return the value,
            // otherwise return this to preserve chainability.
            return returns !== undefined ? returns : this;
        }
    };
    /********************
   *  STATIC METHODS
   ********************/
    // get the country data object
    $.fn[pluginName].getCountryData = function() {
        return allCountries;
    };
    // set the country data object
    $.fn[pluginName].setCountryData = function(obj) {
        allCountries = obj;
    };
    // Tell JSHint to ignore this warning: "character may get silently deleted by one or more browsers"
    // jshint -W100
    // Array of country objects for the flag dropdown.
    // Each contains a name, country code (ISO 3166-1 alpha-2) and dial code.
    // Originally from https://github.com/mledoze/countries
    // then modified using the following JavaScript (NOW OUT OF DATE):
    /*
var result = [];
_.each(countries, function(c) {
  // ignore countries without a dial code
  if (c.callingCode[0].length) {
    result.push({
      // var locals contains country names with localised versions in brackets
      n: _.findWhere(locals, {
        countryCode: c.cca2
      }).name,
      i: c.cca2.toLowerCase(),
      d: c.callingCode[0]
    });
  }
});
JSON.stringify(result);
*/
    // then with a couple of manual re-arrangements to be alphabetical
    // then changed Kazakhstan from +76 to +7
    // and Vatican City from +379 to +39 (see issue 50)
    // and Caribean Netherlands from +5997 to +599
    // and Curacao from +5999 to +599
    // Removed: Åland Islands, Christmas Island, Cocos Islands, Guernsey, Isle of Man, Jersey, Kosovo, Mayotte, Pitcairn Islands, South Georgia, Svalbard, Western Sahara
    // Update: converted objects to arrays to save bytes!
    // Update: added "priority" for countries with the same dialCode as others
    // Update: added array of area codes for countries with the same dialCode as others
    // So each country array has the following information:
    // [
    //    Country name,
    //    iso2 code,
    //    International dial code,
    //    Order (if >1 country with same dial code),
    //    Area codes (if >1 country with same dial code)
    // ]
    var allCountries = [ [ "Afghanistan (‫افغانستان‬‎)", "af", "93" ], [ "Albania (Shqipëri)", "al", "355" ], [ "Algeria (‫الجزائر‬‎)", "dz", "213" ], [ "American Samoa", "as", "1684" ], [ "Andorra", "ad", "376" ], [ "Angola", "ao", "244" ], [ "Anguilla", "ai", "1264" ], [ "Antigua and Barbuda", "ag", "1268" ], [ "Argentina", "ar", "54" ], [ "Armenia (Հայաստան)", "am", "374" ], [ "Aruba", "aw", "297" ], [ "Australia", "au", "61" ], [ "Austria (Österreich)", "at", "43" ], [ "Azerbaijan (Azərbaycan)", "az", "994" ], [ "Bahamas", "bs", "1242" ], [ "Bahrain (‫البحرين‬‎)", "bh", "973" ], [ "Bangladesh (বাংলাদেশ)", "bd", "880" ], [ "Barbados", "bb", "1246" ], [ "Belarus (Беларусь)", "by", "375" ], [ "Belgium (België)", "be", "32" ], [ "Belize", "bz", "501" ], [ "Benin (Bénin)", "bj", "229" ], [ "Bermuda", "bm", "1441" ], [ "Bhutan (འབྲུག)", "bt", "975" ], [ "Bolivia", "bo", "591" ], [ "Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387" ], [ "Botswana", "bw", "267" ], [ "Brazil (Brasil)", "br", "55" ], [ "British Indian Ocean Territory", "io", "246" ], [ "British Virgin Islands", "vg", "1284" ], [ "Brunei", "bn", "673" ], [ "Bulgaria (България)", "bg", "359" ], [ "Burkina Faso", "bf", "226" ], [ "Burundi (Uburundi)", "bi", "257" ], [ "Cambodia (កម្ពុជា)", "kh", "855" ], [ "Cameroon (Cameroun)", "cm", "237" ], [ "Canada", "ca", "1", 1, [ "204", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905" ] ], [ "Cape Verde (Kabu Verdi)", "cv", "238" ], [ "Caribbean Netherlands", "bq", "599", "", 1 ], [ "Cayman Islands", "ky", "1345" ], [ "Central African Republic (République centrafricaine)", "cf", "236" ], [ "Chad (Tchad)", "td", "235" ], [ "Chile", "cl", "56" ], [ "China (中国)", "cn", "86" ], [ "Colombia", "co", "57" ], [ "Comoros (‫جزر القمر‬‎)", "km", "269" ], [ "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243" ], [ "Congo (Republic) (Congo-Brazzaville)", "cg", "242" ], [ "Cook Islands", "ck", "682" ], [ "Costa Rica", "cr", "506" ], [ "Côte d’Ivoire", "ci", "225" ], [ "Croatia (Hrvatska)", "hr", "385" ], [ "Cuba", "cu", "53" ], [ "Curaçao", "cw", "599", "", 0 ], [ "Cyprus (Κύπρος)", "cy", "357" ], [ "Czech Republic (Česká republika)", "cz", "420" ], [ "Denmark (Danmark)", "dk", "45" ], [ "Djibouti", "dj", "253" ], [ "Dominica", "dm", "1767" ], [ "Dominican Republic (República Dominicana)", "do", "1", "", 2, [ "809", "829", "849" ] ], [ "Ecuador", "ec", "593" ], [ "Egypt (‫مصر‬‎)", "eg", "20" ], [ "El Salvador", "sv", "503" ], [ "Equatorial Guinea (Guinea Ecuatorial)", "gq", "240" ], [ "Eritrea", "er", "291" ], [ "Estonia (Eesti)", "ee", "372" ], [ "Ethiopia", "et", "251" ], [ "Falkland Islands (Islas Malvinas)", "fk", "500" ], [ "Faroe Islands (Føroyar)", "fo", "298" ], [ "Fiji", "fj", "679" ], [ "Finland (Suomi)", "fi", "358" ], [ "France", "fr", "33" ], [ "French Guiana (Guyane française)", "gf", "594" ], [ "French Polynesia (Polynésie française)", "pf", "689" ], [ "Gabon", "ga", "241" ], [ "Gambia", "gm", "220" ], [ "Georgia (საქართველო)", "ge", "995" ], [ "Germany (Deutschland)", "de", "49" ], [ "Ghana (Gaana)", "gh", "233" ], [ "Gibraltar", "gi", "350" ], [ "Greece (Ελλάδα)", "gr", "30" ], [ "Greenland (Kalaallit Nunaat)", "gl", "299" ], [ "Grenada", "gd", "1473" ], [ "Guadeloupe", "gp", "590", "", 0 ], [ "Guam", "gu", "1671" ], [ "Guatemala", "gt", "502" ], [ "Guinea (Guinée)", "gn", "224" ], [ "Guinea-Bissau (Guiné Bissau)", "gw", "245" ], [ "Guyana", "gy", "592" ], [ "Haiti", "ht", "509" ], [ "Honduras", "hn", "504" ], [ "Hong Kong (香港)", "hk", "852" ], [ "Hungary (Magyarország)", "hu", "36" ], [ "Iceland (Ísland)", "is", "354" ], [ "India (भारत)", "in", "91" ], [ "Indonesia", "id", "62" ], [ "Iran (‫ایران‬‎)", "ir", "98" ], [ "Iraq (‫العراق‬‎)", "iq", "964" ], [ "Ireland", "ie", "353" ], [ "Israel (‫ישראל‬‎)", "il", "972" ], [ "Italy (Italia)", "it", "39", 0 ], [ "Jamaica", "jm", "1876" ], [ "Japan (日本)", "jp", "81" ], [ "Jordan (‫الأردن‬‎)", "jo", "962" ], [ "Kazakhstan (Казахстан)", "kz", "7", 1 ], [ "Kenya", "ke", "254" ], [ "Kiribati", "ki", "686" ], [ "Kuwait (‫الكويت‬‎)", "kw", "965" ], [ "Kyrgyzstan (Кыргызстан)", "kg", "996" ], [ "Laos (ລາວ)", "la", "856" ], [ "Latvia (Latvija)", "lv", "371" ], [ "Lebanon (‫لبنان‬‎)", "lb", "961" ], [ "Lesotho", "ls", "266" ], [ "Liberia", "lr", "231" ], [ "Libya (‫ليبيا‬‎)", "ly", "218" ], [ "Liechtenstein", "li", "423" ], [ "Lithuania (Lietuva)", "lt", "370" ], [ "Luxembourg", "lu", "352" ], [ "Macau (澳門)", "mo", "853" ], [ "Macedonia (FYROM) (Македонија)", "mk", "389" ], [ "Madagascar (Madagasikara)", "mg", "261" ], [ "Malawi", "mw", "265" ], [ "Malaysia", "my", "60" ], [ "Maldives", "mv", "960" ], [ "Mali", "ml", "223" ], [ "Malta", "mt", "356" ], [ "Marshall Islands", "mh", "692" ], [ "Martinique", "mq", "596" ], [ "Mauritania (‫موريتانيا‬‎)", "mr", "222" ], [ "Mauritius (Moris)", "mu", "230" ], [ "Mexico (México)", "mx", "52" ], [ "Micronesia", "fm", "691" ], [ "Moldova (Republica Moldova)", "md", "373" ], [ "Monaco", "mc", "377" ], [ "Mongolia (Монгол)", "mn", "976" ], [ "Montenegro (Crna Gora)", "me", "382" ], [ "Montserrat", "ms", "1664" ], [ "Morocco (‫المغرب‬‎)", "ma", "212" ], [ "Mozambique (Moçambique)", "mz", "258" ], [ "Myanmar (Burma) (မြန်မာ)", "mm", "95" ], [ "Namibia (Namibië)", "na", "264" ], [ "Nauru", "nr", "674" ], [ "Nepal (नेपाल)", "np", "977" ], [ "Netherlands (Nederland)", "nl", "31" ], [ "New Caledonia (Nouvelle-Calédonie)", "nc", "687" ], [ "New Zealand", "nz", "64" ], [ "Nicaragua", "ni", "505" ], [ "Niger (Nijar)", "ne", "227" ], [ "Nigeria", "ng", "234" ], [ "Niue", "nu", "683" ], [ "Norfolk Island", "nf", "672" ], [ "North Korea (조선 민주주의 인민 공화국)", "kp", "850" ], [ "Northern Mariana Islands", "mp", "1670" ], [ "Norway (Norge)", "no", "47" ], [ "Oman (‫عُمان‬‎)", "om", "968" ], [ "Pakistan (‫پاکستان‬‎)", "pk", "92" ], [ "Palau", "pw", "680" ], [ "Palestine (‫فلسطين‬‎)", "ps", "970" ], [ "Panama (Panamá)", "pa", "507" ], [ "Papua New Guinea", "pg", "675" ], [ "Paraguay", "py", "595" ], [ "Peru (Perú)", "pe", "51" ], [ "Philippines", "ph", "63" ], [ "Poland (Polska)", "pl", "48" ], [ "Portugal", "pt", "351" ], [ "Puerto Rico", "pr", "1", "", 3, [ "787", "939" ] ], [ "Qatar (‫قطر‬‎)", "qa", "974" ], [ "Réunion (La Réunion)", "re", "262" ], [ "Romania (România)", "ro", "40" ], [ "Russia (Россия)", "ru", "7", 0 ], [ "Rwanda", "rw", "250" ], [ "Saint Barthélemy (Saint-Barthélemy)", "bl", "590", "", 1 ], [ "Saint Helena", "sh", "290" ], [ "Saint Kitts and Nevis", "kn", "1869" ], [ "Saint Lucia", "lc", "1758" ], [ "Saint Martin (Saint-Martin (partie française))", "mf", "590", "", 2 ], [ "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508" ], [ "Saint Vincent and the Grenadines", "vc", "1784" ], [ "Samoa", "ws", "685" ], [ "San Marino", "sm", "378" ], [ "São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239" ], [ "Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966" ], [ "Senegal (Sénégal)", "sn", "221" ], [ "Serbia (Србија)", "rs", "381" ], [ "Seychelles", "sc", "248" ], [ "Sierra Leone", "sl", "232" ], [ "Singapore", "sg", "65" ], [ "Sint Maarten", "sx", "1721" ], [ "Slovakia (Slovensko)", "sk", "421" ], [ "Slovenia (Slovenija)", "si", "386" ], [ "Solomon Islands", "sb", "677" ], [ "Somalia (Soomaaliya)", "so", "252" ], [ "South Africa", "za", "27" ], [ "South Korea (대한민국)", "kr", "82" ], [ "South Sudan (‫جنوب السودان‬‎)", "ss", "211" ], [ "Spain (España)", "es", "34" ], [ "Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94" ], [ "Sudan (‫السودان‬‎)", "sd", "249" ], [ "Suriname", "sr", "597" ], [ "Swaziland", "sz", "268" ], [ "Sweden (Sverige)", "se", "46" ], [ "Switzerland (Schweiz)", "ch", "41" ], [ "Syria (‫سوريا‬‎)", "sy", "963" ], [ "Taiwan (台灣)", "tw", "886" ], [ "Tajikistan", "tj", "992" ], [ "Tanzania", "tz", "255" ], [ "Thailand (ไทย)", "th", "66" ], [ "Timor-Leste", "tl", "670" ], [ "Togo", "tg", "228" ], [ "Tokelau", "tk", "690" ], [ "Tonga", "to", "676" ], [ "Trinidad and Tobago", "tt", "1868" ], [ "Tunisia (‫تونس‬‎)", "tn", "216" ], [ "Turkey (Türkiye)", "tr", "90" ], [ "Turkmenistan", "tm", "993" ], [ "Turks and Caicos Islands", "tc", "1649" ], [ "Tuvalu", "tv", "688" ], [ "U.S. Virgin Islands", "vi", "1340" ], [ "Uganda", "ug", "256" ], [ "Ukraine (Україна)", "ua", "380" ], [ "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971" ], [ "United Kingdom", "gb", "44" ], [ "United States", "us", "1", 0 ], [ "Uruguay", "uy", "598" ], [ "Uzbekistan (Oʻzbekiston)", "uz", "998" ], [ "Vanuatu", "vu", "678" ], [ "Vatican City (Città del Vaticano)", "va", "39", 1 ], [ "Venezuela", "ve", "58" ], [ "Vietnam (Việt Nam)", "vn", "84" ], [ "Wallis and Futuna", "wf", "681" ], [ "Yemen (‫اليمن‬‎)", "ye", "967" ], [ "Zambia", "zm", "260" ], [ "Zimbabwe", "zw", "263" ] ];
    // we will build this in the loop below
    var allCountryCodes = {};
    var addCountryCode = function(iso2, dialCode, priority) {
        if (!(dialCode in allCountryCodes)) {
            allCountryCodes[dialCode] = [];
        }
        var index = priority || 0;
        allCountryCodes[dialCode][index] = iso2;
    };
    // loop over all of the countries above
    for (var i = 0; i < allCountries.length; i++) {
        // countries
        var c = allCountries[i];
        allCountries[i] = {
            name: c[0],
            iso2: c[1],
            dialCode: c[2]
        };
        // area codes
        if (c[4]) {
            allCountries[i].hasAreaCodes = true;
            for (var j = 0; j < c[4].length; j++) {
                // full dial code is country code + dial code
                var dialCode = c[2] + c[4][j];
                addCountryCode(c[1], dialCode);
            }
        }
        // dial codes
        addCountryCode(c[1], c[2], c[3]);
    }
});
(function(){var aa=this;function k(a,b){var c=a.split("."),d=aa;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var f;c.length&&(f=c.shift());)c.length||void 0===b?d=d[f]?d[f]:d[f]={}:d[f]=b}function m(a,b){function c(){}c.prototype=b.prototype;a.ya=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ea=function(a,c,e){return b.prototype[c].apply(a,Array.prototype.slice.call(arguments,2))}};function ba(a,b){this.oa=a;this.ka=!!b.ca;this.s=b.a;this.ma=b.type;this.ha=!1;switch(this.s){case ca:case da:case ea:case fa:case ga:this.ha=!0}this.q=b.defaultValue}var ca=3,da=4,ea=6,fa=16,ga=18;function ha(a,b){this.ua=a;this.l={};for(var c=0;c<b.length;c++){var d=b[c];this.l[d.oa]=d}};function n(){this.c={};this.l=this.t().l;this.j=this.la=null}n.prototype.t=function(){var a=this.constructor,b;if(!(b=a.qa)){var c;b=a.xa;var d=[];for(c in b)0!=c&&d.push(new ba(c,b[c]));c=new ha(a,d);b=a.qa=c}return b};n.prototype.set=function(a,b){p(this,a.oa,b)};n.prototype.clear=function(a){r(this,a.oa)};
function s(a,b){var c=a.c[b];if(null==c)return null;if(a.la){if(!(b in a.j)){var d=a.la,f=a.l[b];if(null!=c)if(f.ka){for(var e=[],g=0;g<c.length;g++)e[g]=d.ba(f,c[g]);c=e}else c=d.ba(f,c);return a.j[b]=c}return a.j[b]}return c}function t(a,b,c){var d=s(a,b);return a.l[b].ka?d[c||0]:d}
function u(a,b){var c;if(null!=a.c[b])c=t(a,b,void 0);else a:{c=a.l[b];if(void 0===c.q){var d=c.ma;if(d===Boolean)c.q=!1;else if(d===Number)c.q=0;else if(d===String)c.q=c.ha?"0":"";else{c=new d;break a}}c=c.q}return c}function v(a,b){return a.l[b].ka?null!=a.c[b]?a.c[b].length:0:null!=a.c[b]?1:0}function p(a,b,c){a.c[b]=c;a.j&&(a.j[b]=c)}function r(a,b){delete a.c[b];a.j&&delete a.j[b]}function w(a,b){a.xa=b;a.t=function(){return a.qa||(new a).t()}};function x(){}x.prototype.r=function(a){new a.ua;throw Error("Unimplemented");};x.prototype.ba=function(a,b){if(11==a.s||10==a.s)return b instanceof n?b:this.r(a.ma.t(),b);if(14==a.s||!a.ha)return b;var c=a.ma;if(c===String){if("number"==typeof b)return String(b)}else if(c===Number&&"string"==typeof b&&/^-?[0-9]+$/.test(b))return Number(b);return b};function z(){}m(z,x);z.prototype.r=function(a,b){var c=new a.ua;c.la=this;c.c=b;c.j={};return c};function A(){}m(A,z);A.prototype.za=!1;A.prototype.ba=function(a,b){return 8==a.s?!!b:x.prototype.ba.apply(this,arguments)};A.prototype.r=function(a,b){var c=b;if(this.za){var c=[],d;for(d in b)c[parseInt(d,10)+1]=b[d]}return A.ya.r.call(this,a,c)};function B(a,b){null!=a&&this.append.apply(this,arguments)}B.prototype.e="";B.prototype.set=function(a){this.e=""+a};B.prototype.append=function(a,b,c){this.e+=a;if(null!=b)for(var d=1;d<arguments.length;d++)this.e+=arguments[d];return this};B.prototype.clear=function(){this.e=""};B.prototype.toString=function(){return this.e};/*

 Protocol Buffer 2 Copyright 2008 Google Inc.
 All other code copyright its respective owners.
 Copyright (C) 2010 The Libphonenumber Authors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function C(){n.apply(this)}m(C,n);function D(){n.apply(this)}m(D,n);D.prototype.sa=function(){return t(this,6)};function E(){n.apply(this)}m(E,n);E.prototype.ra=function(){return t(this,10)};E.prototype.m=function(){return u(this,10)};E.prototype.w=function(a){p(this,10,a)};function F(){n.apply(this)}m(F,n);
w(C,{0:{name:"NumberFormat",aa:"i18n.phonenumbers.NumberFormat"},1:{name:"pattern",required:!0,a:9,type:String},2:{name:"format",required:!0,a:9,type:String},3:{name:"leading_digits_pattern",ca:!0,a:9,type:String},4:{name:"national_prefix_formatting_rule",a:9,type:String},6:{name:"national_prefix_optional_when_formatting",a:8,type:Boolean},5:{name:"domestic_carrier_code_formatting_rule",a:9,type:String}});
w(D,{0:{name:"PhoneNumberDesc",aa:"i18n.phonenumbers.PhoneNumberDesc"},2:{name:"national_number_pattern",a:9,type:String},3:{name:"possible_number_pattern",a:9,type:String},6:{name:"example_number",a:9,type:String}});
w(E,{0:{name:"PhoneMetadata",aa:"i18n.phonenumbers.PhoneMetadata"},1:{name:"general_desc",required:!0,a:11,type:D},2:{name:"fixed_line",required:!0,a:11,type:D},3:{name:"mobile",required:!0,a:11,type:D},4:{name:"toll_free",required:!0,a:11,type:D},5:{name:"premium_rate",required:!0,a:11,type:D},6:{name:"shared_cost",required:!0,a:11,type:D},7:{name:"personal_number",required:!0,a:11,type:D},8:{name:"voip",required:!0,a:11,type:D},21:{name:"pager",required:!0,a:11,type:D},25:{name:"uan",required:!0,
a:11,type:D},27:{name:"emergency",required:!0,a:11,type:D},28:{name:"voicemail",required:!0,a:11,type:D},24:{name:"no_international_dialling",required:!0,a:11,type:D},9:{name:"id",required:!0,a:9,type:String},10:{name:"country_code",required:!0,a:5,type:Number},11:{name:"international_prefix",required:!0,a:9,type:String},17:{name:"preferred_international_prefix",a:9,type:String},12:{name:"national_prefix",a:9,type:String},13:{name:"preferred_extn_prefix",a:9,type:String},15:{name:"national_prefix_for_parsing",
a:9,type:String},16:{name:"national_prefix_transform_rule",a:9,type:String},18:{name:"same_mobile_and_fixed_line_pattern",a:8,defaultValue:!1,type:Boolean},19:{name:"number_format",ca:!0,a:11,type:C},20:{name:"intl_number_format",ca:!0,a:11,type:C},22:{name:"main_country_for_code",a:8,defaultValue:!1,type:Boolean},23:{name:"leading_digits",a:9,type:String},26:{name:"leading_zero_possible",a:8,defaultValue:!1,type:Boolean}});
w(F,{0:{name:"PhoneMetadataCollection",aa:"i18n.phonenumbers.PhoneMetadataCollection"},1:{name:"metadata",ca:!0,a:11,type:E}});/*

 Protocol Buffer 2 Copyright 2008 Google Inc.
 All other code copyright its respective owners.
 Copyright (C) 2010 The Libphonenumber Authors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function G(){n.apply(this)}m(G,n);G.prototype.ra=function(){return t(this,1)};G.prototype.m=function(){return u(this,1)};G.prototype.w=function(a){p(this,1,a)};G.prototype.getExtension=function(){return t(this,3)};
w(G,{0:{name:"PhoneNumber",aa:"i18n.phonenumbers.PhoneNumber"},1:{name:"country_code",required:!0,a:5,type:Number},2:{name:"national_number",required:!0,a:4,type:Number},3:{name:"extension",a:9,type:String},4:{name:"italian_leading_zero",a:8,type:Boolean},8:{name:"number_of_leading_zeros",a:5,defaultValue:1,type:Number},5:{name:"raw_input",a:9,type:String},6:{name:"country_code_source",a:14,defaultValue:1,type:{Da:1,Ca:5,Ba:10,Aa:20}},7:{name:"preferred_domestic_carrier_code",a:9,type:String}});/*

 Copyright (C) 2010 The Libphonenumber Authors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var H={1:"US AG AI AS BB BM BS CA DM DO GD GU JM KN KY LC MP MS PR SX TC TT VC VG VI".split(" "),7:["RU","KZ"],20:["EG"],27:["ZA"],30:["GR"],31:["NL"],32:["BE"],33:["FR"],34:["ES"],36:["HU"],39:["IT"],40:["RO"],41:["CH"],43:["AT"],44:["GB","GG","IM","JE"],45:["DK"],46:["SE"],47:["NO","SJ"],48:["PL"],49:["DE"],51:["PE"],52:["MX"],53:["CU"],54:["AR"],55:["BR"],56:["CL"],57:["CO"],58:["VE"],60:["MY"],61:["AU","CC","CX"],62:["ID"],63:["PH"],64:["NZ"],65:["SG"],66:["TH"],81:["JP"],82:["KR"],84:["VN"],
86:["CN"],90:["TR"],91:["IN"],92:["PK"],93:["AF"],94:["LK"],95:["MM"],98:["IR"],211:["SS"],212:["MA","EH"],213:["DZ"],216:["TN"],218:["LY"],220:["GM"],221:["SN"],222:["MR"],223:["ML"],224:["GN"],225:["CI"],226:["BF"],227:["NE"],228:["TG"],229:["BJ"],230:["MU"],231:["LR"],232:["SL"],233:["GH"],234:["NG"],235:["TD"],236:["CF"],237:["CM"],238:["CV"],239:["ST"],240:["GQ"],241:["GA"],242:["CG"],243:["CD"],244:["AO"],245:["GW"],246:["IO"],247:["AC"],248:["SC"],249:["SD"],250:["RW"],251:["ET"],252:["SO"],
253:["DJ"],254:["KE"],255:["TZ"],256:["UG"],257:["BI"],258:["MZ"],260:["ZM"],261:["MG"],262:["RE","YT"],263:["ZW"],264:["NA"],265:["MW"],266:["LS"],267:["BW"],268:["SZ"],269:["KM"],290:["SH","TA"],291:["ER"],297:["AW"],298:["FO"],299:["GL"],350:["GI"],351:["PT"],352:["LU"],353:["IE"],354:["IS"],355:["AL"],356:["MT"],357:["CY"],358:["FI","AX"],359:["BG"],370:["LT"],371:["LV"],372:["EE"],373:["MD"],374:["AM"],375:["BY"],376:["AD"],377:["MC"],378:["SM"],379:["VA"],380:["UA"],381:["RS"],382:["ME"],385:["HR"],
386:["SI"],387:["BA"],389:["MK"],420:["CZ"],421:["SK"],423:["LI"],500:["FK"],501:["BZ"],502:["GT"],503:["SV"],504:["HN"],505:["NI"],506:["CR"],507:["PA"],508:["PM"],509:["HT"],590:["GP","BL","MF"],591:["BO"],592:["GY"],593:["EC"],594:["GF"],595:["PY"],596:["MQ"],597:["SR"],598:["UY"],599:["CW","BQ"],670:["TL"],672:["NF"],673:["BN"],674:["NR"],675:["PG"],676:["TO"],677:["SB"],678:["VU"],679:["FJ"],680:["PW"],681:["WF"],682:["CK"],683:["NU"],685:["WS"],686:["KI"],687:["NC"],688:["TV"],689:["PF"],690:["TK"],
691:["FM"],692:["MH"],800:["001"],808:["001"],850:["KP"],852:["HK"],853:["MO"],855:["KH"],856:["LA"],870:["001"],878:["001"],880:["BD"],881:["001"],882:["001"],883:["001"],886:["TW"],888:["001"],960:["MV"],961:["LB"],962:["JO"],963:["SY"],964:["IQ"],965:["KW"],966:["SA"],967:["YE"],968:["OM"],970:["PS"],971:["AE"],972:["IL"],973:["BH"],974:["QA"],975:["BT"],976:["MN"],977:["NP"],979:["001"],992:["TJ"],993:["TM"],994:["AZ"],995:["GE"],996:["KG"],998:["UZ"]},I={AC:[,[,,"[2-467]\\d{3}","\\d{4}"],[,,
"(?:[267]\\d|3[0-5]|4[4-69])\\d{2}","\\d{4}",,,"6889"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"AC",247,"00",,,,,,,,,,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],AD:[,[,,"(?:[346-9]|180)\\d{5}","\\d{6,8}"],[,,"[78]\\d{5}","\\d{6}",,,"712345"],[,,"[346]\\d{5}","\\d{6}",,,"312345"],[,,"180[02]\\d{4}","\\d{8}",,,"18001234"],[,,"9\\d{5}","\\d{6}",,,"912345"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"AD",376,"00",,,,,,,,[[,"(\\d{3})(\\d{3})",
"$1 $2",["[346-9]"],"","",0],[,"(180[02])(\\d{4})","$1 $2",["1"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],AE:[,[,,"[2-79]\\d{7,8}|800\\d{2,9}","\\d{5,12}"],[,,"[2-4679][2-8]\\d{6}","\\d{7,8}",,,"22345678"],[,,"5[0256]\\d{7}","\\d{9}",,,"501234567"],[,,"400\\d{6}|800\\d{2,9}","\\d{5,12}",,,"800123456"],[,,"900[02]\\d{5}","\\d{9}",,,"900234567"],[,,"700[05]\\d{5}","\\d{9}",,,"700012345"],[,,"NA","NA"],[,,"NA","NA"],"AE",971,"00","0",,,"0",,,,[[,"([2-4679])(\\d{3})(\\d{4})",
"$1 $2 $3",["[2-4679][2-8]"],"0$1","",0],[,"(5[0256])(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1","",0],[,"([479]00)(\\d)(\\d{5})","$1 $2 $3",["[479]0"],"$1","",0],[,"([68]00)(\\d{2,9})","$1 $2",["60|8"],"$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"600[25]\\d{5}","\\d{9}",,,"600212345"],,,[,,"NA","NA"]],AF:[,[,,"[2-7]\\d{8}","\\d{7,9}"],[,,"(?:[25][0-8]|[34][0-4]|6[0-5])[2-9]\\d{6}","\\d{7,9}",,,"234567890"],[,,"7(?:[05-9]\\d{7}|29\\d{6})","\\d{9}",,,"701234567"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA",
"NA"],[,,"NA","NA"],[,,"NA","NA"],"AF",93,"00","0",,,"0",,,,[[,"([2-7]\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2-6]|7[013-9]"],"0$1","",0],[,"(729)(\\d{3})(\\d{3})","$1 $2 $3",["729"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],AG:[,[,,"[2589]\\d{9}","\\d{7}(?:\\d{3})?"],[,,"268(?:4(?:6[0-38]|84)|56[0-2])\\d{4}","\\d{7}(?:\\d{3})?",,,"2684601234"],[,,"268(?:464|7(?:2[0-9]|64|7[0-689]|8[02-68]))\\d{4}","\\d{10}",,,"2684641234"],[,,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",
,,"8002123456"],[,,"900[2-9]\\d{6}","\\d{10}",,,"9002123456"],[,,"NA","NA"],[,,"5(?:00|33|44|66|77)[2-9]\\d{6}","\\d{10}",,,"5002345678"],[,,"26848[01]\\d{4}","\\d{10}",,,"2684801234"],"AG",1,"011","1",,,"1",,,,,,[,,"26840[69]\\d{4}","\\d{10}",,,"2684061234"],,"268",[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],AI:[,[,,"[2589]\\d{9}","\\d{7}(?:\\d{3})?"],[,,"2644(?:6[12]|9[78])\\d{4}","\\d{7}(?:\\d{3})?",,,"2644612345"],[,,"264(?:235|476|5(?:3[6-9]|8[1-4])|7(?:29|72))\\d{4}","\\d{10}",,,"2642351234"],
[,,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",,,"8002123456"],[,,"900[2-9]\\d{6}","\\d{10}",,,"9002123456"],[,,"NA","NA"],[,,"5(?:00|33|44|66|77)[2-9]\\d{6}","\\d{10}",,,"5002345678"],[,,"NA","NA"],"AI",1,"011","1",,,"1",,,,,,[,,"NA","NA"],,"264",[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],AL:[,[,,"[2-57]\\d{7}|6\\d{8}|8\\d{5,7}|9\\d{5}","\\d{5,9}"],[,,"(?:2(?:[168][1-9]|[247]\\d|9[1-7])|3(?:1[1-3]|[2-6]\\d|[79][1-8]|8[1-9])|4\\d{2}|5(?:1[1-4]|[2-578]\\d|6[1-5]|9[1-7])|8(?:[19][1-5]|[2-6]\\d|[78][1-7]))\\d{5}",
"\\d{5,8}",,,"22345678"],[,,"6[6-9]\\d{7}","\\d{9}",,,"661234567"],[,,"800\\d{4}","\\d{7}",,,"8001234"],[,,"900\\d{3}","\\d{6}",,,"900123"],[,,"808\\d{3}","\\d{6}",,,"808123"],[,,"700\\d{5}","\\d{8}",,,"70012345"],[,,"NA","NA"],"AL",355,"00","0",,,"0",,,,[[,"(4)(\\d{3})(\\d{4})","$1 $2 $3",["4[0-6]"],"0$1","",0],[,"(6[6-9])(\\d{3})(\\d{4})","$1 $2 $3",["6"],"0$1","",0],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2358][2-5]|4[7-9]"],"0$1","",0],[,"(\\d{3})(\\d{3,5})","$1 $2",["[235][16-9]|8[016-9]|[79]"],
"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],AM:[,[,,"[1-9]\\d{7}","\\d{5,8}"],[,,"(?:1[01]\\d|2(?:2[2-46]|3[1-8]|4[2-69]|5[2-7]|6[1-9]|8[1-7])|3[12]2|47\\d)\\d{5}","\\d{5,8}",,,"10123456"],[,,"(?:55|77|9[1-9])\\d{6}","\\d{8}",,,"77123456"],[,,"800\\d{5}","\\d{8}",,,"80012345"],[,,"90[016]\\d{5}","\\d{8}",,,"90012345"],[,,"80[1-4]\\d{5}","\\d{8}",,,"80112345"],[,,"NA","NA"],[,,"60[2-6]\\d{5}","\\d{8}",,,"60271234"],"AM",374,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{6})","$1 $2",
["1|47"],"(0$1)","",0],[,"(\\d{2})(\\d{6})","$1 $2",["[5-7]|9[1-9]"],"0$1","",0],[,"(\\d{3})(\\d{5})","$1 $2",["[23]"],"(0$1)","",0],[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["8|90"],"0 $1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],AO:[,[,,"[29]\\d{8}","\\d{9}"],[,,"2\\d(?:[26-9]\\d|\\d[26-9])\\d{5}","\\d{9}",,,"222123456"],[,,"9[1-49]\\d{7}","\\d{9}",,,"923123456"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"AO",244,"00",,,,,,,,[[,"(\\d{3})(\\d{3})(\\d{3})",
"$1 $2 $3",,"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],AR:[,[,,"[1-368]\\d{9}|9\\d{10}","\\d{6,11}"],[,,"11\\d{8}|(?:2(?:2(?:[013]\\d|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[067]\\d)|4(?:7[3-8]|9\\d)|6(?:[01346]\\d|2[24-6]|5[15-8])|80\\d|9(?:[0124789]\\d|3[1-6]|5[234]|6[2-46]))|3(?:3(?:2[79]|6\\d|8[2578])|4(?:[78]\\d|0[0124-9]|[1-35]\\d|4[24-7]|6[02-9]|9[123678])|5(?:[138]\\d|2[1245]|4[1-9]|6[2-4]|7[1-6])|6[24]\\d|7(?:[0469]\\d|1[1568]|2[013-9]|3[145]|5[14-8]|7[2-57]|8[0-24-9])|8(?:[013578]\\d|2[15-7]|4[13-6]|6[1-357-9]|9[124]))|670\\d)\\d{6}",
"\\d{6,10}",,,"1123456789"],[,,"675\\d{7}|9(?:11[2-9]\\d{7}|(?:2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[12358]|5[138]|6[24]|7[069]|8[013578]))[2-9]\\d{6}|\\d{4}[2-9]\\d{5})","\\d{6,11}",,,"91123456789"],[,,"800\\d{7}","\\d{10}",,,"8001234567"],[,,"60[04579]\\d{7}","\\d{10}",,,"6001234567"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"AR",54,"00","0",,,"0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[124-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:1[1568]|2[15]|3[145]|4[13]|5[14-8]|[069]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?",
"9$1",,,[[,"([68]\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[68]"],"0$1","",0],[,"(9)(11)(\\d{4})(\\d{4})","$2 15-$3-$4",["911"],"0$1","",0],[,"(9)(\\d{3})(\\d{3})(\\d{4})","$2 15-$3-$4",["9(?:2[234689]|3[3-8])","9(?:2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[12358]|5[138]|6[24]|7[069]|8[013578]))","9(?:2(?:2[013]|3[067]|49|6[01346]|80|9(?:[179]|4[13479]|8[0-24-9]))|3(?:36|4[12358]|5(?:[18]|3[014-689])|6[24]|7[069]|8(?:[01]|3[013469]|5[0-39]|7[0-2459]|8[0-49])))"],"0$1","",0],[,"(9)(\\d{4})(\\d{3})(\\d{3})",
"$2 15-$3-$4",["93[58]","9(?:3(?:53|8[78]))","9(?:3(?:537|8(?:73|88)))"],"0$1","",0],[,"(9)(\\d{4})(\\d{2})(\\d{4})","$2 15-$3-$4",["9[23]"],"0$1","",0],[,"(11)(\\d{4})(\\d{4})","$1 $2-$3",["1"],"0$1","",1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2-$3",["2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[12358]|5[138]|6[24]|7[069]|8[013578])","2(?:2[013]|3[067]|49|6[01346]|80|9(?:[17-9]|4[13479]))|3(?:36|4[12358]|5(?:[18]|3[0-689])|6[24]|7[069]|8(?:[01]|3[013469]|5[0-39]|7[0-2459]|8[0-49]))"],"0$1","",
1],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2-$3",["3(?:53|8[78])","3(?:537|8(?:73|88))"],"0$1","",1],[,"(\\d{4})(\\d{2})(\\d{4})","$1 $2-$3",["[23]"],"0$1","",1],[,"(\\d{3})","$1",["1[012]|911"],"$1","",0]],[[,"([68]\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[68]"],"0$1","",0],[,"(9)(11)(\\d{4})(\\d{4})","$1 $2 $3-$4",["911"]],[,"(9)(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3-$4",["9(?:2[234689]|3[3-8])","9(?:2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[12358]|5[138]|6[24]|7[069]|8[013578]))","9(?:2(?:2[013]|3[067]|49|6[01346]|80|9(?:[179]|4[13479]|8[0-24-9]))|3(?:36|4[12358]|5(?:[18]|3[014-689])|6[24]|7[069]|8(?:[01]|3[013469]|5[0-39]|7[0-2459]|8[0-49])))"]],
[,"(9)(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3-$4",["93[58]","9(?:3(?:53|8[78]))","9(?:3(?:537|8(?:73|88)))"]],[,"(9)(\\d{4})(\\d{2})(\\d{4})","$1 $2 $3-$4",["9[23]"]],[,"(11)(\\d{4})(\\d{4})","$1 $2-$3",["1"],"0$1","",1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2-$3",["2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[12358]|5[138]|6[24]|7[069]|8[013578])","2(?:2[013]|3[067]|49|6[01346]|80|9(?:[17-9]|4[13479]))|3(?:36|4[12358]|5(?:[18]|3[0-689])|6[24]|7[069]|8(?:[01]|3[013469]|5[0-39]|7[0-2459]|8[0-49]))"],
"0$1","",1],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2-$3",["3(?:53|8[78])","3(?:537|8(?:73|88))"],"0$1","",1],[,"(\\d{4})(\\d{2})(\\d{4})","$1 $2-$3",["[23]"],"0$1","",1]],[,,"NA","NA"],,,[,,"810\\d{7}","\\d{10}",,,"8101234567"],[,,"810\\d{7}","\\d{10}",,,"8101234567"],,,[,,"NA","NA"]],AS:[,[,,"[5689]\\d{9}","\\d{7}(?:\\d{3})?"],[,,"6846(?:22|33|44|55|77|88|9[19])\\d{4}","\\d{7}(?:\\d{3})?",,,"6846221234"],[,,"684(?:25[2468]|7(?:3[13]|70))\\d{4}","\\d{10}",,,"6847331234"],[,,"8(?:00|44|55|66|77|88)[2-9]\\d{6}",
"\\d{10}",,,"8002123456"],[,,"900[2-9]\\d{6}","\\d{10}",,,"9002123456"],[,,"NA","NA"],[,,"5(?:00|33|44|66|77)[2-9]\\d{6}","\\d{10}",,,"5002345678"],[,,"NA","NA"],"AS",1,"011","1",,,"1",,,,,,[,,"NA","NA"],,"684",[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],AT:[,[,,"[1-9]\\d{3,12}","\\d{3,13}"],[,,"1\\d{3,12}|(?:2(?:1[467]|2[13-8]|5[2357]|6[1-46-8]|7[1-8]|8[124-7]|9[1458])|3(?:1[1-8]|3[23568]|4[5-7]|5[1378]|6[1-38]|8[3-68])|4(?:2[1-8]|35|63|7[1368]|8[2457])|5(?:12|2[1-8]|3[357]|4[147]|5[12578]|6[37])|6(?:13|2[1-47]|4[1-35-8]|5[468]|62)|7(?:2[1-8]|3[25]|4[13478]|5[68]|6[16-8]|7[1-6]|9[45]))\\d{3,10}",
"\\d{3,13}",,,"1234567890"],[,,"6(?:44|5[0-3579]|6[013-9]|[7-9]\\d)\\d{4,10}","\\d{7,13}",,,"644123456"],[,,"80[02]\\d{6,10}","\\d{9,13}",,,"800123456"],[,,"(?:711|9(?:0[01]|3[019]))\\d{6,10}","\\d{9,13}",,,"900123456"],[,,"8(?:10|2[018])\\d{6,10}","\\d{9,13}",,,"810123456"],[,,"NA","NA"],[,,"780\\d{6,10}","\\d{9,13}",,,"780123456"],"AT",43,"00","0",,,"0",,,,[[,"(1)(\\d{3,12})","$1 $2",["1"],"0$1","",0],[,"(5\\d)(\\d{3,5})","$1 $2",["5[079]"],"0$1","",0],[,"(5\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["5[079]"],
"0$1","",0],[,"(5\\d)(\\d{4})(\\d{4,7})","$1 $2 $3",["5[079]"],"0$1","",0],[,"(\\d{3})(\\d{3,10})","$1 $2",["316|46|51|732|6(?:44|5[0-3579]|[6-9])|7(?:1|[28]0)|[89]"],"0$1","",0],[,"(\\d{4})(\\d{3,9})","$1 $2",["2|3(?:1[1-578]|[3-8])|4[2378]|5[2-6]|6(?:[12]|4[1-35-9]|5[468])|7(?:2[1-8]|35|4[1-8]|[5-79])"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"5(?:(?:0[1-9]|17)\\d{2,10}|[79]\\d{3,11})|720\\d{6,10}","\\d{5,13}",,,"50123"],,,[,,"NA","NA"]],AU:[,[,,"[1-578]\\d{5,9}","\\d{6,10}"],[,,"[237]\\d{8}|8(?:[68]\\d{3}|7[0-69]\\d{2}|9(?:[02-9]\\d{2}|1(?:[0-57-9]\\d|6[0135-9])))\\d{4}",
"\\d{8,9}",,,"212345678"],[,,"14(?:5\\d|71)\\d{5}|4(?:[0-2]\\d|3[0-57-9]|4[47-9]|5[0-25-9]|6[6-9]|7[0457-9]|8[17-9]|9[07-9])\\d{6}","\\d{9}",,,"412345678"],[,,"180(?:0\\d{3}|2)\\d{3}","\\d{7,10}",,,"1800123456"],[,,"190[0126]\\d{6}","\\d{10}",,,"1900123456"],[,,"13(?:00\\d{2})?\\d{4}","\\d{6,10}",,,"1300123456"],[,,"500\\d{6}","\\d{9}",,,"500123456"],[,,"550\\d{6}","\\d{9}",,,"550123456"],"AU",61,"(?:14(?:1[14]|34|4[17]|[56]6|7[47]|88))?001[14-689]","0",,,"0",,"0011",,[[,"([2378])(\\d{4})(\\d{4})",
"$1 $2 $3",["[2378]"],"(0$1)","",0],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[45]|14"],"0$1","",0],[,"(16)(\\d{3})(\\d{2,4})","$1 $2 $3",["16"],"0$1","",0],[,"(1[389]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:[38]0|90)","1(?:[38]00|90)"],"$1","",0],[,"(180)(2\\d{3})","$1 $2",["180","1802"],"$1","",0],[,"(19\\d)(\\d{3})","$1 $2",["19[13]"],"$1","",0],[,"(19\\d{2})(\\d{4})","$1 $2",["19[67]"],"$1","",0],[,"(13)(\\d{2})(\\d{2})","$1 $2 $3",["13[1-9]"],"$1","",0]],,[,,"16\\d{3,7}","\\d{5,9}",,,"1612345"],
1,,[,,"1(?:3(?:\\d{4}|00\\d{6})|80(?:0\\d{6}|2\\d{3}))","\\d{6,10}",,,"1300123456"],[,,"NA","NA"],,,[,,"NA","NA"]],AW:[,[,,"[25-9]\\d{6}","\\d{7}"],[,,"5(?:2\\d|8[1-9])\\d{4}","\\d{7}",,,"5212345"],[,,"(?:5(?:6\\d|9[2-478])|6(?:[039]0|22|4[01]|6[0-2])|7[34]\\d|9(?:6[45]|9[4-8]))\\d{4}","\\d{7}",,,"5601234"],[,,"800\\d{4}","\\d{7}",,,"8001234"],[,,"900\\d{4}","\\d{7}",,,"9001234"],[,,"NA","NA"],[,,"NA","NA"],[,,"28\\d{5}|501\\d{4}","\\d{7}",,,"5011234"],"AW",297,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",
,"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],AX:[,[,,"[135]\\d{5,9}|[27]\\d{4,9}|4\\d{5,10}|6\\d{7,8}|8\\d{6,9}","\\d{5,12}"],[,,"18[1-8]\\d{3,9}","\\d{6,12}",,,"1812345678"],[,,"4\\d{5,10}|50\\d{4,8}","\\d{6,11}",,,"412345678"],[,,"800\\d{4,7}","\\d{7,10}",,,"8001234567"],[,,"[67]00\\d{5,6}","\\d{8,9}",,,"600123456"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"AX",358,"00|99[049]","0",,,"0",,,,,,[,,"NA","NA"],,,[,,"[13]00\\d{3,7}|2(?:0(?:0\\d{3,7}|2[023]\\d{1,6}|9[89]\\d{1,6}))|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})",
"\\d{5,10}",,,"100123"],[,,"[13]0\\d{4,8}|2(?:0(?:[016-8]\\d{3,7}|[2-59]\\d{2,7})|9\\d{4,8})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})","\\d{5,10}",,,"10112345"],,,[,,"NA","NA"]],AZ:[,[,,"[1-9]\\d{8}","\\d{7,9}"],[,,"(?:1[28]\\d|2(?:02|1[24]|2[2-4]|33|[45]2|6[23])|365)\\d{6}","\\d{7,9}",,,"123123456"],[,,"(?:4[04]|5[015]|60|7[07])\\d{7}","\\d{9}",,,"401234567"],[,,"88\\d{7}","\\d{9}",,,"881234567"],[,,"900200\\d{3}","\\d{9}",,,"900200123"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA",
"NA"],"AZ",994,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["(?:1[28]|2(?:[45]2|[0-36])|365)"],"(0$1)","",0],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[4-8]"],"0$1","",0],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["9"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],BA:[,[,,"[3-9]\\d{7,8}","\\d{6,9}"],[,,"(?:[35]\\d|49)\\d{6}","\\d{6,8}",,,"30123456"],[,,"6(?:03|44|71|[1-356])\\d{6}","\\d{8,9}",,,"61123456"],[,,"8[08]\\d{6}",
"\\d{8}",,,"80123456"],[,,"9[0246]\\d{6}","\\d{8}",,,"90123456"],[,,"8[12]\\d{6}","\\d{8}",,,"82123456"],[,,"NA","NA"],[,,"NA","NA"],"BA",387,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2-$3",["[3-5]"],"0$1","",0],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["6[1-356]|[7-9]"],"0$1","",0],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["6[047]"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"70[23]\\d{5}","\\d{8}",,,"70223456"],,,[,,"NA","NA"]],BB:[,[,,"[2589]\\d{9}","\\d{7}(?:\\d{3})?"],
[,,"246[2-9]\\d{6}","\\d{7}(?:\\d{3})?",,,"2462345678"],[,,"246(?:(?:2[346]|45|82)\\d|25[0-4])\\d{4}","\\d{10}",,,"2462501234"],[,,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",,,"8002123456"],[,,"900[2-9]\\d{6}","\\d{10}",,,"9002123456"],[,,"NA","NA"],[,,"5(?:00|33|44|66|77)[2-9]\\d{6}","\\d{10}",,,"5002345678"],[,,"NA","NA"],"BB",1,"011","1",,,"1",,,,,,[,,"NA","NA"],,"246",[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],BD:[,[,,"[2-79]\\d{5,9}|1\\d{9}|8[0-7]\\d{4,8}","\\d{6,10}"],[,,"2(?:7(?:1[0-267]|2[0-289]|3[0-29]|[46][01]|5[1-3]|7[017]|91)|8(?:0[125]|[139][1-6]|2[0157-9]|6[1-35]|7[1-5]|8[1-8])|9(?:0[0-2]|1[1-4]|2[568]|3[3-6]|5[5-7]|6[0167]|7[15]|8[016-8]))\\d{4}|3(?:12?[5-7]\\d{2}|0(?:2(?:[025-79]\\d|[348]\\d{1,2})|3(?:[2-4]\\d|[56]\\d?))|2(?:1\\d{2}|2(?:[12]\\d|[35]\\d{1,2}|4\\d?))|3(?:1\\d{2}|2(?:[2356]\\d|4\\d{1,2}))|4(?:1\\d{2}|2(?:2\\d{1,2}|[47]|5\\d{2}))|5(?:1\\d{2}|29)|[67]1\\d{2}|8(?:1\\d{2}|2(?:2\\d{2}|3|4\\d)))\\d{3}|4(?:0(?:2(?:[09]\\d|7)|33\\d{2})|1\\d{3}|2(?:1\\d{2}|2(?:[25]\\d?|[348]\\d|[67]\\d{1,2}))|3(?:1\\d{2}(?:\\d{2})?|2(?:[045]\\d|[236-9]\\d{1,2})|32\\d{2})|4(?:[18]\\d{2}|2(?:[2-46]\\d{2}|3)|5[25]\\d{2})|5(?:1\\d{2}|2(?:3\\d|5))|6(?:[18]\\d{2}|2(?:3(?:\\d{2})?|[46]\\d{1,2}|5\\d{2}|7\\d)|5(?:3\\d?|4\\d|[57]\\d{1,2}|6\\d{2}|8))|71\\d{2}|8(?:[18]\\d{2}|23\\d{2}|54\\d{2})|9(?:[18]\\d{2}|2[2-5]\\d{2}|53\\d{1,2}))\\d{3}|5(?:02[03489]\\d{2}|1\\d{2}|2(?:1\\d{2}|2(?:2(?:\\d{2})?|[457]\\d{2}))|3(?:1\\d{2}|2(?:[37](?:\\d{2})?|[569]\\d{2}))|4(?:1\\d{2}|2[46]\\d{2})|5(?:1\\d{2}|26\\d{1,2})|6(?:[18]\\d{2}|2|53\\d{2})|7(?:1|24)\\d{2}|8(?:1|26)\\d{2}|91\\d{2})\\d{3}|6(?:0(?:1\\d{2}|2(?:3\\d{2}|4\\d{1,2}))|2(?:2[2-5]\\d{2}|5(?:[3-5]\\d{2}|7)|8\\d{2})|3(?:1|2[3478])\\d{2}|4(?:1|2[34])\\d{2}|5(?:1|2[47])\\d{2}|6(?:[18]\\d{2}|6(?:2(?:2\\d|[34]\\d{2})|5(?:[24]\\d{2}|3\\d|5\\d{1,2})))|72[2-5]\\d{2}|8(?:1\\d{2}|2[2-5]\\d{2})|9(?:1\\d{2}|2[2-6]\\d{2}))\\d{3}|7(?:(?:02|[3-589]1|6[12]|72[24])\\d{2}|21\\d{3}|32)\\d{3}|8(?:(?:4[12]|[5-7]2|1\\d?)|(?:0|3[12]|[5-7]1|217)\\d)\\d{4}|9(?:[35]1|(?:[024]2|81)\\d|(?:1|[24]1)\\d{2})\\d{3}",
"\\d{6,9}",,,"27111234"],[,,"(?:1[13-9]\\d|(?:3[78]|44)[02-9]|6(?:44|6[02-9]))\\d{7}","\\d{10}",,,"1812345678"],[,,"80[03]\\d{7}","\\d{10}",,,"8001234567"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"96(?:0[49]|1[0-4]|6[69])\\d{6}","\\d{10}",,,"9604123456"],"BD",880,"00[12]?","0",,,"0",,"00",,[[,"(2)(\\d{7})","$1-$2",["2"],"0$1","",0],[,"(\\d{2})(\\d{4,6})","$1-$2",["[3-79]1"],"0$1","",0],[,"(\\d{4})(\\d{3,6})","$1-$2",["1|3(?:0|[2-58]2)|4(?:0|[25]2|3[23]|[4689][25])|5(?:[02-578]2|6[25])|6(?:[0347-9]2|[26][25])|7[02-9]2|8(?:[023][23]|[4-7]2)|9(?:[02][23]|[458]2|6[016])"],
"0$1","",0],[,"(\\d{3})(\\d{3,7})","$1-$2",["[3-79][2-9]|8"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],BE:[,[,,"[1-9]\\d{7,8}","\\d{8,9}"],[,,"(?:1[0-69]|[49][23]|5\\d|6[013-57-9]|71|8[0-79])[1-9]\\d{5}|[23][2-8]\\d{6}","\\d{8}",,,"12345678"],[,,"4(?:[679]\\d|8[03-9])\\d{6}","\\d{9}",,,"470123456"],[,,"800\\d{5}","\\d{8}",,,"80012345"],[,,"(?:70[2-7]|90\\d)\\d{5}","\\d{8}",,,"90123456"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"BE",32,"00","0",,,"0",,,,[[,"(4[6-9]\\d)(\\d{2})(\\d{2})(\\d{2})",
"$1 $2 $3 $4",["4[6-9]"],"0$1","",0],[,"([2-49])(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[23]|[49][23]"],"0$1","",0],[,"([15-8]\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[156]|7[018]|8(?:0[1-9]|[1-79])"],"0$1","",0],[,"([89]\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["(?:80|9)0"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"78\\d{6}","\\d{8}",,,"78123456"],,,[,,"NA","NA"]],BF:[,[,,"[24-7]\\d{7}","\\d{8}"],[,,"(?:20(?:49|5[23]|9[016-9])|40(?:4[569]|5[4-6]|7[0179])|50(?:[34]\\d|50))\\d{4}","\\d{8}",
,,"20491234"],[,,"6(?:[0-689]\\d|7[0-5])\\d{5}|7\\d{7}","\\d{8}",,,"70123456"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"BF",226,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",,"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],BG:[,[,,"[23567]\\d{5,7}|[489]\\d{6,8}","\\d{5,9}"],[,,"2(?:[0-8]\\d{5,6}|9\\d{4,6})|(?:[36]\\d|5[1-9]|8[1-6]|9[1-7])\\d{5,6}|(?:4(?:[124-7]\\d|3[1-6])|7(?:0[1-9]|[1-9]\\d))\\d{4,5}","\\d{5,8}",,,"2123456"],
[,,"(?:8[7-9]|98)\\d{7}|4(?:3[0789]|8\\d)\\d{5}","\\d{8,9}",,,"48123456"],[,,"800\\d{5}","\\d{8}",,,"80012345"],[,,"90\\d{6}","\\d{8}",,,"90123456"],[,,"NA","NA"],[,,"700\\d{5}","\\d{5,9}",,,"70012345"],[,,"NA","NA"],"BG",359,"00","0",,,"0",,,,[[,"(2)(\\d{5})","$1 $2",["29"],"0$1","",0],[,"(2)(\\d{3})(\\d{3,4})","$1 $2 $3",["2"],"0$1","",0],[,"(\\d{3})(\\d{4})","$1 $2",["43[124-7]|70[1-9]"],"0$1","",0],[,"(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3",["43[124-7]|70[1-9]"],"0$1","",0],[,"(\\d{3})(\\d{2})(\\d{3})",
"$1 $2 $3",["[78]00"],"0$1","",0],[,"(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"],"0$1","",0],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["48|8[7-9]|9[08]"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],BH:[,[,,"[136-9]\\d{7}","\\d{8}"],[,,"(?:1(?:3[13-6]|6[0156]|7\\d)\\d|6(?:1[16]\\d|500|6(?:0\\d|3[12]|44|88)|9[69][69])|7(?:7\\d{2}|178))\\d{4}","\\d{8}",,,"17001234"],[,,"(?:3(?:[1-4679]\\d|5[0135]|8[0-48])\\d|6(?:3(?:00|33|6[16])|6(?:[69]\\d|3[03-9])))\\d{4}",
"\\d{8}",,,"36001234"],[,,"80\\d{6}","\\d{8}",,,"80123456"],[,,"(?:87|9[014578])\\d{6}","\\d{8}",,,"90123456"],[,,"84\\d{6}","\\d{8}",,,"84123456"],[,,"NA","NA"],[,,"NA","NA"],"BH",973,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",,"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],BI:[,[,,"[27]\\d{7}","\\d{8}"],[,,"22(?:2[0-7]|[3-5]0)\\d{4}","\\d{8}",,,"22201234"],[,,"(?:29|7[14-9])\\d{6}","\\d{8}",,,"79561234"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],
"BI",257,"00",,,,,,,,[[,"([27]\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",,"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],BJ:[,[,,"[2689]\\d{7}|7\\d{3}","\\d{4,8}"],[,,"2(?:02|1[037]|2[45]|3[68])\\d{5}","\\d{8}",,,"20211234"],[,,"(?:6[146-8]|9[03-9])\\d{6}","\\d{8}",,,"90011234"],[,,"7[3-5]\\d{2}","\\d{4}",,,"7312"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"857[58]\\d{4}","\\d{8}",,,"85751234"],"BJ",229,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",,
"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"81\\d{6}","\\d{8}",,,"81123456"],,,[,,"NA","NA"]],BL:[,[,,"[56]\\d{8}","\\d{9}"],[,,"590(?:2[7-9]|5[12]|87)\\d{4}","\\d{9}",,,"590271234"],[,,"690(?:0[0-7]|[1-9]\\d)\\d{4}","\\d{9}",,,"690301234"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"BL",590,"00","0",,,"0",,,,,,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],BM:[,[,,"[4589]\\d{9}","\\d{7}(?:\\d{3})?"],[,,"441(?:2(?:02|23|61|[3479]\\d)|[46]\\d{2}|5(?:4\\d|60|89)|824)\\d{4}",
"\\d{7}(?:\\d{3})?",,,"4412345678"],[,,"441(?:[37]\\d|5[0-39])\\d{5}","\\d{10}",,,"4413701234"],[,,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",,,"8002123456"],[,,"900[2-9]\\d{6}","\\d{10}",,,"9002123456"],[,,"NA","NA"],[,,"5(?:00|33|44|66|77)[2-9]\\d{6}","\\d{10}",,,"5002345678"],[,,"NA","NA"],"BM",1,"011","1",,,"1",,,,,,[,,"NA","NA"],,"441",[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],BN:[,[,,"[2-578]\\d{6}","\\d{7}"],[,,"[2-5]\\d{6}","\\d{7}",,,"2345678"],[,,"[78]\\d{6}","\\d{7}",,,"7123456"],
[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"BN",673,"00",,,,,,,,[[,"([2-578]\\d{2})(\\d{4})","$1 $2",,"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],BO:[,[,,"[23467]\\d{7}","\\d{7,8}"],[,,"(?:2(?:2\\d{2}|5(?:11|[258]\\d|9[67])|6(?:12|2\\d|9[34])|8(?:2[34]|39|62))|3(?:3\\d{2}|4(?:6\\d|8[24])|8(?:25|42|5[257]|86|9[25])|9(?:2\\d|3[234]|4[248]|5[24]|6[2-6]|7\\d))|4(?:4\\d{2}|6(?:11|[24689]\\d|72)))\\d{4}","\\d{7,8}",,,"22123456"],[,,"[67]\\d{7}","\\d{8}",
,,"71234567"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"BO",591,"00(1\\d)?","0",,,"0(1\\d)?",,,,[[,"([234])(\\d{7})","$1 $2",["[234]"],"","0$CC $1",0],[,"([67]\\d{7})","$1",["[67]"],"","0$CC $1",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],BQ:[,[,,"[347]\\d{6}","\\d{7}"],[,,"(?:318[023]|416[023]|7(?:1[578]|50)\\d)\\d{3}","\\d{7}",,,"7151234"],[,,"(?:318[14-68]|416[15-9]|7(?:0[01]|7[07]|[89]\\d)\\d)\\d{3}","\\d{7}",,,"3181234"],[,,"NA","NA"],[,,"NA",
"NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"BQ",599,"00",,,,,,,,,,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],BR:[,[,,"[1-46-9]\\d{7,10}|5\\d{8,9}","\\d{8,11}"],[,,"1[1-9][2-5]\\d{7}|(?:[4689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-5]\\d{7}","\\d{8,11}",,,"1123456789"],[,,"1[1-9](?:7|9\\d)\\d{7}|2[12478]9?[6-9]\\d{7}|(?:3[1-578]|[4689][1-9]|5[13-5]|7[13-579])[6-9]\\d{7}","\\d{10,11}",,,"11961234567"],[,,"800\\d{6,7}","\\d{8,11}",,,"800123456"],[,,"[359]00\\d{6,7}","\\d{8,11}",
,,"300123456"],[,,"[34]00\\d{5}","\\d{8}",,,"40041234"],[,,"NA","NA"],[,,"NA","NA"],"BR",55,"00(?:1[45]|2[135]|31|4[13])","0",,,"0(?:(1[245]|2[135]|31|4[13])(\\d{10,11}))?","$2",,,[[,"(\\d{4})(\\d{4})","$1-$2",["[2-9](?:[1-9]|0[1-9])"],"$1","",0],[,"(\\d{5})(\\d{4})","$1-$2",["9(?:[1-9]|0[1-9])"],"$1","",0],[,"(\\d{3,5})","$1",["1[125689]"],"$1","",0],[,"(\\d{2})(\\d{5})(\\d{4})","$1 $2-$3",["(?:1[1-9]|2[12478])9"],"($1)","0 $CC ($1)",0],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["[1-9][1-9]"],"($1)",
"0 $CC ($1)",0],[,"([34]00\\d)(\\d{4})","$1-$2",["[34]00"],"","",0],[,"([3589]00)(\\d{2,3})(\\d{4})","$1 $2 $3",["[3589]00"],"0$1","",0]],[[,"(\\d{2})(\\d{5})(\\d{4})","$1 $2-$3",["(?:1[1-9]|2[12478])9"],"($1)","0 $CC ($1)",0],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["[1-9][1-9]"],"($1)","0 $CC ($1)",0],[,"([34]00\\d)(\\d{4})","$1-$2",["[34]00"],"","",0],[,"([3589]00)(\\d{2,3})(\\d{4})","$1 $2 $3",["[3589]00"],"0$1","",0]],[,,"NA","NA"],,,[,,"[34]00\\d{5}","\\d{8}",,,"40041234"],[,,"NA","NA"],,,[,
,"NA","NA"]],BS:[,[,,"[2589]\\d{9}","\\d{7}(?:\\d{3})?"],[,,"242(?:3(?:02|[236][1-9]|4[0-24-9]|5[0-68]|7[3467]|8[0-4]|9[2-467])|461|502|6(?:0[12]|12|7[67]|8[78]|9[89])|702)\\d{4}","\\d{7}(?:\\d{3})?",,,"2423456789"],[,,"242(?:3(?:5[79]|[79]5)|4(?:[2-4][1-9]|5[1-8]|6[2-8]|7\\d|81)|5(?:2[45]|3[35]|44|5[1-9]|65|77)|6[34]6|727)\\d{4}","\\d{10}",,,"2423591234"],[,,"242300\\d{4}|8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",,,"8002123456"],[,,"900[2-9]\\d{6}","\\d{10}",,,"9002123456"],[,,"NA","NA"],[,,"5(?:00|33|44|66|77)[2-9]\\d{6}",
"\\d{10}",,,"5002345678"],[,,"NA","NA"],"BS",1,"011","1",,,"1",,,,,,[,,"NA","NA"],,"242",[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],BT:[,[,,"[1-8]\\d{6,7}","\\d{6,8}"],[,,"(?:2[3-6]|[34][5-7]|5[236]|6[2-46]|7[246]|8[2-4])\\d{5}","\\d{6,7}",,,"2345678"],[,,"[17]7\\d{6}","\\d{8}",,,"17123456"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"BT",975,"00",,,,,,,,[[,"([17]7)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1|77"],"","",0],[,"([2-8])(\\d{3})(\\d{3})","$1 $2 $3",["[2-68]|7[246]"],
"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],BW:[,[,,"[2-79]\\d{6,7}","\\d{7,8}"],[,,"(?:2(?:4[0-48]|6[0-24]|9[0578])|3(?:1[0235-9]|55|6\\d|7[01]|9[0-57])|4(?:6[03]|7[1267]|9[0-5])|5(?:3[0389]|4[0489]|7[1-47]|88|9[0-49])|6(?:2[1-35]|5[149]|8[067]))\\d{4}","\\d{7}",,,"2401234"],[,,"7(?:[1-356]\\d|4[0-7]|7[014-7])\\d{5}","\\d{8}",,,"71123456"],[,,"NA","NA"],[,,"90\\d{5}","\\d{7}",,,"9012345"],[,,"NA","NA"],[,,"NA","NA"],[,,"79[12][01]\\d{4}","\\d{8}",,,"79101234"],"BW",267,
"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[2-6]"],"","",0],[,"(7\\d)(\\d{3})(\\d{3})","$1 $2 $3",["7"],"","",0],[,"(90)(\\d{5})","$1 $2",["9"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],BY:[,[,,"[1-4]\\d{8}|[89]\\d{9,10}","\\d{7,11}"],[,,"(?:1(?:5(?:1[1-5]|[24]\\d|6[2-4]|9[1-7])|6(?:[235]\\d|4[1-7])|7\\d{2})|2(?:1(?:[246]\\d|3[0-35-9]|5[1-9])|2(?:[235]\\d|4[0-8])|3(?:[26]\\d|3[02-79]|4[024-7]|5[03-7])))\\d{5}","\\d{7,9}",,,"152450911"],[,,"(?:2(?:5[5679]|9[1-9])|33\\d|44\\d)\\d{6}",
"\\d{9}",,,"294911911"],[,,"8(?:0[13]|20\\d)\\d{7}","\\d{10,11}",,,"8011234567"],[,,"(?:810|902)\\d{7}","\\d{10}",,,"9021234567"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"BY",375,"810","8",,,"8?0?",,"8~10",,[[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["17[0-3589]|2[4-9]|[34]","17(?:[02358]|1[0-2]|9[0189])|2[4-9]|[34]"],"8 0$1","",0],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["1(?:5[24]|6[235]|7[467])|2(?:1[246]|2[25]|3[26])","1(?:5[24]|6(?:2|3[04-9]|5[0346-9])|7(?:[46]|7[37-9]))|2(?:1[246]|2[25]|3[26])"],
"8 0$1","",0],[,"(\\d{4})(\\d{2})(\\d{3})","$1 $2-$3",["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])","1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"],"8 0$1","",0],[,"([89]\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["8[01]|9"],"8 $1","",0],[,"(8\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["82"],"8 $1","",0]],,[,,"NA","NA"],,,[,,"8(?:[013]|[12]0)\\d{8}|902\\d{7}","\\d{10,11}",,,"82012345678"],[,,"NA","NA"],,,[,,"NA","NA"]],BZ:[,[,,"[2-8]\\d{6}|0\\d{10}","\\d{7}(?:\\d{4})?"],
[,,"[234578][02]\\d{5}","\\d{7}",,,"2221234"],[,,"6[0-367]\\d{5}","\\d{7}",,,"6221234"],[,,"0800\\d{7}","\\d{11}",,,"08001234123"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"BZ",501,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1-$2",["[2-8]"],"","",0],[,"(0)(800)(\\d{4})(\\d{3})","$1-$2-$3-$4",["0"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],1,,[,,"NA","NA"]],CA:[,[,,"[2-9]\\d{9}|3\\d{6}","\\d{7}(?:\\d{3})?"],[,,"(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|79|8[17])|6(?:0[04]|13|39|47)|7(?:0[59]|78|80)|8(?:[06]7|19|73)|90[25])[2-9]\\d{6}|310\\d{4}",
"\\d{7}(?:\\d{3})?",,,"2042345678"],[,,"(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|79|8[17])|6(?:0[04]|13|39|47)|7(?:0[59]|78|80)|8(?:[06]7|19|73)|90[25])[2-9]\\d{6}","\\d{7}(?:\\d{3})?",,,"2042345678"],[,,"8(?:00|44|55|66|77|88)[2-9]\\d{6}|310\\d{4}","\\d{7}(?:\\d{3})?",,,"8002123456"],[,,"900[2-9]\\d{6}","\\d{10}",,,"9002123456"],[,,"NA","NA"],[,,"5(?:00|33|44|66|77)[2-9]\\d{6}","\\d{10}",,,"5002345678"],[,,"NA","NA"],"CA",1,"011","1",,,"1",,,,,,[,,"NA","NA"],,
,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],CC:[,[,,"[1458]\\d{5,9}","\\d{6,10}"],[,,"89162\\d{4}","\\d{8,9}",,,"891621234"],[,,"4(?:[0-2]\\d|3[0-57-9]|4[47-9]|5[0-37-9]|6[6-9]|7[07-9]|8[7-9])\\d{6}","\\d{9}",,,"412345678"],[,,"1(?:80(?:0\\d{2})?|3(?:00\\d{2})?)\\d{4}","\\d{6,10}",,,"1800123456"],[,,"190[0126]\\d{6}","\\d{10}",,,"1900123456"],[,,"NA","NA"],[,,"500\\d{6}","\\d{9}",,,"500123456"],[,,"550\\d{6}","\\d{9}",,,"550123456"],"CC",61,"(?:14(?:1[14]|34|4[17]|[56]6|7[47]|88))?001[14-689]",
"0",,,"0",,"0011",,,,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],CD:[,[,,"[2-6]\\d{6}|[18]\\d{6,8}|9\\d{8}","\\d{7,9}"],[,,"1(?:2\\d{7}|\\d{6})|[2-6]\\d{6}","\\d{7,9}",,,"1234567"],[,,"8(?:[0-2459]\\d{2}|8)\\d{5}|9[7-9]\\d{7}","\\d{7,9}",,,"991234567"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"CD",243,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["12"],"0$1","",0],[,"([89]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["8[0-2459]|9"],"0$1","",0],[,
"(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["88"],"0$1","",0],[,"(\\d{2})(\\d{5})","$1 $2",["[1-6]"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],CF:[,[,,"[278]\\d{7}","\\d{8}"],[,,"2[12]\\d{6}","\\d{8}",,,"21612345"],[,,"7[0257]\\d{6}","\\d{8}",,,"70012345"],[,,"NA","NA"],[,,"8776\\d{4}","\\d{8}",,,"87761234"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"CF",236,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",,"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA",
"NA"],,,[,,"NA","NA"]],CG:[,[,,"[028]\\d{8}","\\d{9}"],[,,"222[1-589]\\d{5}","\\d{9}",,,"222123456"],[,,"0[14-6]\\d{7}","\\d{9}",,,"061234567"],[,,"800\\d{6}","\\d{9}",,,"800123456"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"CG",242,"00",,,,,,,,[[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[02]"],"","",0],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["8"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],1,,[,,"NA","NA"]],CH:[,[,,"[2-9]\\d{8}|860\\d{9}","\\d{9}(?:\\d{3})?"],[,,"(?:2[12467]|3[1-4]|4[134]|5[256]|6[12]|[7-9]1)\\d{7}",
"\\d{9}",,,"212345678"],[,,"7[5-9]\\d{7}","\\d{9}",,,"781234567"],[,,"800\\d{6}","\\d{9}",,,"800123456"],[,,"90[016]\\d{6}","\\d{9}",,,"900123456"],[,,"84[0248]\\d{6}","\\d{9}",,,"840123456"],[,,"878\\d{6}","\\d{9}",,,"878123456"],[,,"NA","NA"],"CH",41,"00","0",,,"0",,,,[[,"([2-9]\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-7]|[89]1"],"0$1","",0],[,"([89]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["8[047]|90"],"0$1","",0],[,"(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["860"],"0$1","",
0]],,[,,"74[0248]\\d{6}","\\d{9}",,,"740123456"],,,[,,"NA","NA"],[,,"5[18]\\d{7}","\\d{9}",,,"581234567"],,,[,,"860\\d{9}","\\d{12}",,,"860123456789"]],CI:[,[,,"[02-7]\\d{7}","\\d{8}"],[,,"(?:2(?:0[023]|1[02357]|[23][045]|4[03-5])|3(?:0[06]|1[069]|[2-4][07]|5[09]|6[08]))\\d{5}","\\d{8}",,,"21234567"],[,,"(?:0[1-9]|4[0-24-9]|5[4-9]|6[015-79]|77)\\d{6}","\\d{8}",,,"01234567"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"CI",225,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
"$1 $2 $3 $4",,"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],1,,[,,"NA","NA"]],CK:[,[,,"[2-57]\\d{4}","\\d{5}"],[,,"(?:2\\d|3[13-7]|4[1-5])\\d{3}","\\d{5}",,,"21234"],[,,"(?:5[0-68]|7\\d)\\d{3}","\\d{5}",,,"71234"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"CK",682,"00",,,,,,,,[[,"(\\d{2})(\\d{3})","$1 $2",,"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],CL:[,[,,"(?:[2-9]|600|123)\\d{7,8}","\\d{6,11}"],[,,"2(?:2\\d{7}|1962\\d{4})|(?:3[2-5]|[47][1-35]|5[1-3578]|6[1347])\\d{7}|65\\d{6,7}",
"\\d{6,9}",,,"221234567"],[,,"9[5-9]\\d{7}","\\d{8,9}",,,"961234567"],[,,"800\\d{6}|1230\\d{7}","\\d{9,11}",,,"800123456"],[,,"NA","NA"],[,,"600\\d{7,8}","\\d{10,11}",,,"6001234567"],[,,"NA","NA"],[,,"44\\d{7}","\\d{9}",,,"441234567"],"CL",56,"(?:0|1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))0","0",,,"0|(1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))",,,,[[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["22"],"($1)","$CC ($1)",0],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[357]|4[1-35]|6[13-57]"],"($1)",
"$CC ($1)",0],[,"(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["65"],"($1)","$CC ($1)",0],[,"(9)([5-9]\\d{3})(\\d{4})","$1 $2 $3",["9"],"0$1","",0],[,"(44)(\\d{3})(\\d{4})","$1 $2 $3",["44"],"0$1","",0],[,"([68]00)(\\d{3})(\\d{3,4})","$1 $2 $3",["60|8"],"$1","",0],[,"(600)(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3 $4",["60"],"$1","",0],[,"(1230)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"$1","",0],[,"(\\d{5})(\\d{4})","$1 $2",["219"],"($1)","$CC ($1)",0],[,"(\\d{4,5})","$1",["[1-9]"],"$1","",0]],[[,"(\\d)(\\d{4})(\\d{4})",
"$1 $2 $3",["22"],"($1)","$CC ($1)",0],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[357]|4[1-35]|6[13-57]"],"($1)","$CC ($1)",0],[,"(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["65"],"($1)","$CC ($1)",0],[,"(9)([5-9]\\d{3})(\\d{4})","$1 $2 $3",["9"],"0$1","",0],[,"(44)(\\d{3})(\\d{4})","$1 $2 $3",["44"],"0$1","",0],[,"([68]00)(\\d{3})(\\d{3,4})","$1 $2 $3",["60|8"],"$1","",0],[,"(600)(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3 $4",["60"],"$1","",0],[,"(1230)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"$1","",0],[,"(\\d{5})(\\d{4})",
"$1 $2",["219"],"($1)","$CC ($1)",0]],[,,"NA","NA"],,,[,,"600\\d{7,8}","\\d{10,11}",,,"6001234567"],[,,"NA","NA"],,,[,,"NA","NA"]],CM:[,[,,"[2357-9]\\d{7}","\\d{8}"],[,,"(?:22|33)\\d{6}","\\d{8}",,,"22123456"],[,,"[579]\\d{7}","\\d{8}",,,"71234567"],[,,"800\\d{5}","\\d{8}",,,"80012345"],[,,"88\\d{6}","\\d{8}",,,"88012345"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"CM",237,"00",,,,,,,,[[,"([2357-9]\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[23579]|88"],"","",0],[,"(800)(\\d{2})(\\d{3})","$1 $2 $3",
["80"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],CN:[,[,,"[1-7]\\d{6,11}|8[0-357-9]\\d{6,9}|9\\d{7,9}","\\d{4,12}"],[,,"21(?:100\\d{2}|95\\d{3,4}|\\d{8,10})|(?:10|2[02-57-9]|3(?:11|7[179])|4(?:[15]1|3[12])|5(?:1\\d|2[37]|3[12]|51|7[13-79]|9[15])|7(?:31|5[457]|6[09]|91)|8(?:71|98))(?:100\\d{2}|95\\d{3,4}|\\d{8})|(?:3(?:1[02-9]|35|49|5\\d|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|3[3-9]|5[2-9]|6[4789]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[17]\\d|2[248]|3[04-9]|4[3-6]|5[0-3689]|6[2368]|9[02-9])|8(?:1[236-8]|2[5-7]|3\\d|5[1-9]|7[02-9]|8[3678]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100\\d{2}|95\\d{3,4}|\\d{7})|80(?:29|6[03578]|7[018]|81)\\d{4}",
"\\d{4,12}",,,"1012345678"],[,,"1(?:[38]\\d|4[57]|5[0-35-9]|7[06-8])\\d{8}","\\d{11}",,,"13123456789"],[,,"(?:10)?800\\d{7}","\\d{10,12}",,,"8001234567"],[,,"16[08]\\d{5}","\\d{8}",,,"16812345"],[,,"400\\d{7}|(?:10|2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[4789]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[3678]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))96\\d{3,4}",
"\\d{7,10}",,,"4001234567"],[,,"NA","NA"],[,,"NA","NA"],"CN",86,"(1[1279]\\d{3})?00","0",,,"(1[1279]\\d{3})|0",,"00",,[[,"(80\\d{2})(\\d{4})","$1 $2",["80[2678]"],"0$1","$CC $1",1],[,"([48]00)(\\d{3})(\\d{4})","$1 $2 $3",["[48]00"],"","",0],[,"(\\d{5,6})","$1",["100|95"],"","",0],[,"(\\d{2})(\\d{5,6})","$1 $2",["(?:10|2\\d)[19]","(?:10|2\\d)(?:10|9[56])","(?:10|2\\d)(?:100|9[56])"],"0$1","$CC $1",0],[,"(\\d{3})(\\d{5,6})","$1 $2",["[3-9]","[3-9]\\d{2}[19]","[3-9]\\d{2}(?:10|9[56])"],"0$1","$CC $1",
0],[,"(\\d{3,4})(\\d{4})","$1 $2",["[2-9]"],"","",0],[,"(21)(\\d{4})(\\d{4,6})","$1 $2 $3",["21"],"0$1","$CC $1",1],[,"([12]\\d)(\\d{4})(\\d{4})","$1 $2 $3",["10[1-9]|2[02-9]","10[1-9]|2[02-9]","10(?:[1-79]|8(?:[1-9]|0[1-9]))|2[02-9]"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["3(?:11|7[179])|4(?:[15]1|3[12])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:31|5[457]|6[09]|91)|8(?:71|98)"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[4789]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[3678]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])"],
"0$1","$CC $1",1],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["1[3-578]"],"","$CC $1",0],[,"(10800)(\\d{3})(\\d{4})","$1 $2 $3",["108","1080","10800"],"","",0]],[[,"(80\\d{2})(\\d{4})","$1 $2",["80[2678]"],"0$1","$CC $1",1],[,"([48]00)(\\d{3})(\\d{4})","$1 $2 $3",["[48]00"],"","",0],[,"(\\d{2})(\\d{5,6})","$1 $2",["(?:10|2\\d)[19]","(?:10|2\\d)(?:10|9[56])","(?:10|2\\d)(?:100|9[56])"],"0$1","$CC $1",0],[,"(\\d{3})(\\d{5,6})","$1 $2",["[3-9]","[3-9]\\d{2}[19]","[3-9]\\d{2}(?:10|9[56])"],"0$1","$CC $1",
0],[,"(21)(\\d{4})(\\d{4,6})","$1 $2 $3",["21"],"0$1","$CC $1",1],[,"([12]\\d)(\\d{4})(\\d{4})","$1 $2 $3",["10[1-9]|2[02-9]","10[1-9]|2[02-9]","10(?:[1-79]|8(?:[1-9]|0[1-9]))|2[02-9]"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["3(?:11|7[179])|4(?:[15]1|3[12])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:31|5[457]|6[09]|91)|8(?:71|98)"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[4789]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[3678]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])"],
"0$1","$CC $1",1],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["1[3-578]"],"","$CC $1",0],[,"(10800)(\\d{3})(\\d{4})","$1 $2 $3",["108","1080","10800"],"","",0]],[,,"NA","NA"],,,[,,"(?:4|(?:10)?8)00\\d{7}","\\d{10,12}",,,"4001234567"],[,,"NA","NA"],,,[,,"NA","NA"]],CO:[,[,,"(?:[13]\\d{0,3}|[24-8])\\d{7}","\\d{7,11}"],[,,"[124-8][2-9]\\d{6}","\\d{8}",,,"12345678"],[,,"3(?:0[0-5]|1\\d|[25][01])\\d{7}","\\d{10}",,,"3211234567"],[,,"1800\\d{7}","\\d{11}",,,"18001234567"],[,,"19(?:0[01]|4[78])\\d{7}","\\d{11}",
,,"19001234567"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"CO",57,"00(?:4(?:[14]4|56)|[579])","0",,,"0([3579]|4(?:44|56))?",,,,[[,"(\\d)(\\d{7})","$1 $2",["1(?:8[2-9]|9[0-3]|[2-7])|[24-8]","1(?:8[2-9]|9(?:09|[1-3])|[2-7])|[24-8]"],"($1)","0$CC $1",0],[,"(\\d{3})(\\d{7})","$1 $2",["3"],"","0$CC $1",0],[,"(1)(\\d{3})(\\d{7})","$1-$2-$3",["1(?:80|9[04])","1(?:800|9(?:0[01]|4[78]))"],"0$1","",0]],[[,"(\\d)(\\d{7})","$1 $2",["1(?:8[2-9]|9[0-3]|[2-7])|[24-8]","1(?:8[2-9]|9(?:09|[1-3])|[2-7])|[24-8]"],
"($1)","0$CC $1",0],[,"(\\d{3})(\\d{7})","$1 $2",["3"],"","0$CC $1",0],[,"(1)(\\d{3})(\\d{7})","$1 $2 $3",["1(?:80|9[04])","1(?:800|9(?:0[01]|4[78]))"]]],[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],CR:[,[,,"[24-9]\\d{7,9}","\\d{8,10}"],[,,"2[24-7]\\d{6}","\\d{8}",,,"22123456"],[,,"57[0-3]\\d{5}|6(?:[0-2]\\d|30)\\d{5}|7[0-3]\\d{6}|8[3-9]\\d{6}","\\d{8}",,,"83123456"],[,,"800\\d{7}","\\d{10}",,,"8001234567"],[,,"90[059]\\d{7}","\\d{10}",,,"9001234567"],[,,"NA","NA"],[,,"NA","NA"],[,
,"210[0-6]\\d{4}|4(?:0(?:0[01]\\d{4}|10[0-3]\\d{3}|2900\\d{2}|3[01]\\d{4}|40\\d{4}|5\\d{5}|70[01]\\d{3}|8[0-2]\\d{4})|1[01]\\d{5}|20[0-3]\\d{4}|400\\d{4}|70[0-2]\\d{4})|5100\\d{4}","\\d{8}",,,"40001234"],"CR",506,"00",,,,"(19(?:0[01468]|19|20|66|77))",,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[24-7]|8[3-9]"],"","$CC $1",0],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[89]0"],"","$CC $1",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],CU:[,[,,"[2-57]\\d{5,7}","\\d{4,8}"],[,,"2[1-4]\\d{5,6}|3(?:1\\d{6}|[23]\\d{4,6})|4(?:[125]\\d{5,6}|[36]\\d{6}|[78]\\d{4,6})|7\\d{6,7}",
"\\d{4,8}",,,"71234567"],[,,"5\\d{7}","\\d{8}",,,"51234567"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"CU",53,"119","0",,,"0",,,,[[,"(\\d)(\\d{6,7})","$1 $2",["7"],"(0$1)","",0],[,"(\\d{2})(\\d{4,6})","$1 $2",["[2-4]"],"(0$1)","",0],[,"(\\d)(\\d{7})","$1 $2",["5"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],CV:[,[,,"[259]\\d{6}","\\d{7}"],[,,"2(?:2[1-7]|3[0-8]|4[12]|5[1256]|6\\d|7[1-3]|8[1-5])\\d{4}","\\d{7}",,,"2211234"],[,,"(?:9\\d|59)\\d{5}",
"\\d{7}",,,"9911234"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"CV",238,"0",,,,,,,,[[,"(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",,"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],CW:[,[,,"[169]\\d{6,7}","\\d{7,8}"],[,,"9(?:[48]\\d{2}|50\\d|7(?:2[0-24]|[34]\\d|6[35-7]|77|8[7-9]))\\d{4}","\\d{7,8}",,,"94151234"],[,,"9(?:5(?:[1246]\\d|3[01])|6(?:[16-9]\\d|3[01]))\\d{4}","\\d{7,8}",,,"95181234"],[,,"NA","NA"],[,,"NA","NA"],[,,"(?:10|69)\\d{5}","\\d{7}",,
,"1011234"],[,,"NA","NA"],[,,"NA","NA"],"CW",599,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[13-7]"],"","",0],[,"(9)(\\d{3})(\\d{4})","$1 $2 $3",["9"],"","",0]],,[,,"955\\d{5}","\\d{7,8}",,,"95581234"],1,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],CX:[,[,,"[1458]\\d{5,9}","\\d{6,10}"],[,,"89164\\d{4}","\\d{8,9}",,,"891641234"],[,,"4(?:[0-2]\\d|3[0-57-9]|4[47-9]|5[0-37-9]|6[6-9]|7[07-9]|8[7-9])\\d{6}","\\d{9}",,,"412345678"],[,,"1(?:80(?:0\\d{2})?|3(?:00\\d{2})?)\\d{4}","\\d{6,10}",,,"1800123456"],
[,,"190[0126]\\d{6}","\\d{10}",,,"1900123456"],[,,"NA","NA"],[,,"500\\d{6}","\\d{9}",,,"500123456"],[,,"550\\d{6}","\\d{9}",,,"550123456"],"CX",61,"(?:14(?:1[14]|34|4[17]|[56]6|7[47]|88))?001[14-689]","0",,,"0",,"0011",,,,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],CY:[,[,,"[257-9]\\d{7}","\\d{8}"],[,,"2[2-6]\\d{6}","\\d{8}",,,"22345678"],[,,"9[5-79]\\d{6}","\\d{8}",,,"96123456"],[,,"800\\d{5}","\\d{8}",,,"80001234"],[,,"90[09]\\d{5}","\\d{8}",,,"90012345"],[,,"80[1-9]\\d{5}","\\d{8}",
,,"80112345"],[,,"700\\d{5}","\\d{8}",,,"70012345"],[,,"NA","NA"],"CY",357,"00",,,,,,,,[[,"(\\d{2})(\\d{6})","$1 $2",,"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"(?:50|77)\\d{6}","\\d{8}",,,"77123456"],,,[,,"NA","NA"]],CZ:[,[,,"[2-8]\\d{8}|9\\d{8,11}","\\d{9,12}"],[,,"2\\d{8}|(?:3[1257-9]|4[16-9]|5[13-9])\\d{7}","\\d{9,12}",,,"212345678"],[,,"(?:60[1-8]|7(?:0[2-5]|[2379]\\d))\\d{6}","\\d{9,12}",,,"601123456"],[,,"800\\d{6}","\\d{9,12}",,,"800123456"],[,,"9(?:0[05689]|76)\\d{6}","\\d{9,12}",,,"900123456"],
[,,"8[134]\\d{7}","\\d{9,12}",,,"811234567"],[,,"70[01]\\d{6}","\\d{9,12}",,,"700123456"],[,,"9[17]0\\d{6}","\\d{9,12}",,,"910123456"],"CZ",420,"00",,,,,,,,[[,"([2-9]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]|9[015-7]"],"","",0],[,"(96\\d)(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["96"],"","",0],[,"(9\\d)(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9[36]"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"9(?:5\\d|7[234])\\d{6}","\\d{9,12}",,,"972123456"],,,[,,"9(?:3\\d{9}|6\\d{7,10})","\\d{9,12}",,,"93123456789"]],
DE:[,[,,"[1-35-9]\\d{3,14}|4(?:[0-8]\\d{4,12}|9(?:[0-37]\\d|4(?:[1-35-8]|4\\d?)|5\\d{1,2}|6[1-8]\\d?)\\d{2,7})","\\d{2,15}"],[,,"[246]\\d{5,13}|3(?:0\\d{3,13}|2\\d{9}|[3-9]\\d{4,13})|5(?:0[2-8]|[1256]\\d|[38][0-8]|4\\d{0,2}|[79][0-7])\\d{3,11}|7(?:0[2-8]|[1-9]\\d)\\d{3,10}|8(?:0[2-9]|[1-9]\\d)\\d{3,10}|9(?:0[6-9]\\d{3,10}|1\\d{4,12}|[2-9]\\d{4,11})","\\d{2,15}",,,"30123456"],[,,"1(?:5[0-2579]\\d{8}|6[023]\\d{7,8}|7(?:[0-57-9]\\d?|6\\d)\\d{7})","\\d{10,11}",,,"15123456789"],[,,"800\\d{7,12}","\\d{10,15}",
,,"8001234567890"],[,,"137[7-9]\\d{6}|900(?:[135]\\d{6}|9\\d{7})","\\d{10,11}",,,"9001234567"],[,,"1(?:3(?:7[1-6]\\d{6}|8\\d{4})|80\\d{5,11})","\\d{7,14}",,,"18012345"],[,,"700\\d{8}","\\d{11}",,,"70012345678"],[,,"NA","NA"],"DE",49,"00","0",,,"0",,,,[[,"(1\\d{2})(\\d{7,8})","$1 $2",["1[67]"],"0$1","",0],[,"(1\\d{3})(\\d{7})","$1 $2",["15"],"0$1","",0],[,"(\\d{2})(\\d{3,11})","$1 $2",["3[02]|40|[68]9"],"0$1","",0],[,"(\\d{3})(\\d{3,11})","$1 $2",["2(?:\\d1|0[2389]|1[24]|28|34)|3(?:[3-9][15]|40)|[4-8][1-9]1|9(?:06|[1-9]1)"],
"0$1","",0],[,"(\\d{4})(\\d{2,11})","$1 $2",["[24-6]|[7-9](?:\\d[1-9]|[1-9]\\d)|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])","[24-6]|[7-9](?:\\d[1-9]|[1-9]\\d)|3(?:3(?:0[1-467]|2[127-9]|3[124578]|[46][1246]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|3[1357]|4[13578]|6[1246]|7[1356]|9[1346])|5(?:0[14]|2[1-3589]|3[1357]|4[1246]|6[1-4]|7[1346]|8[13568]|9[1246])|6(?:0[356]|2[1-489]|3[124-6]|4[1347]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|3[1357]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|4[1347]|6[0135-9]|7[1467]|8[136])|9(?:0[12479]|2[1358]|3[1357]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))"],
"0$1","",0],[,"(3\\d{4})(\\d{1,10})","$1 $2",["3"],"0$1","",0],[,"(800)(\\d{7,12})","$1 $2",["800"],"0$1","",0],[,"(177)(99)(\\d{7,8})","$1 $2 $3",["177","1779","17799"],"0$1","",0],[,"(\\d{3})(\\d)(\\d{4,10})","$1 $2 $3",["(?:18|90)0|137","1(?:37|80)|900[1359]"],"0$1","",0],[,"(1\\d{2})(\\d{5,11})","$1 $2",["181"],"0$1","",0],[,"(18\\d{3})(\\d{6})","$1 $2",["185","1850","18500"],"0$1","",0],[,"(18\\d{2})(\\d{7})","$1 $2",["18[68]"],"0$1","",0],[,"(18\\d)(\\d{8})","$1 $2",["18[2-579]"],"0$1","",0],
[,"(700)(\\d{4})(\\d{4})","$1 $2 $3",["700"],"0$1","",0],[,"(138)(\\d{4})","$1 $2",["138"],"0$1","",0]],,[,,"16(?:4\\d{1,10}|[89]\\d{1,11})","\\d{4,14}",,,"16412345"],,,[,,"NA","NA"],[,,"18(?:1\\d{5,11}|[2-9]\\d{8})","\\d{8,14}",,,"18500123456"],,,[,,"17799\\d{7,8}","\\d{12,13}",,,"177991234567"]],DJ:[,[,,"[27]\\d{7}","\\d{8}"],[,,"2(?:1[2-5]|7[45])\\d{5}","\\d{8}",,,"21360003"],[,,"77[6-8]\\d{5}","\\d{8}",,,"77831001"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"DJ",253,
"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",,"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],DK:[,[,,"[2-9]\\d{7}","\\d{8}"],[,,"(?:[2-7]\\d|8[126-9]|9[126-9])\\d{6}","\\d{8}",,,"32123456"],[,,"(?:[2-7]\\d|8[126-9]|9[126-9])\\d{6}","\\d{8}",,,"20123456"],[,,"80\\d{6}","\\d{8}",,,"80123456"],[,,"90\\d{6}","\\d{8}",,,"90123456"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"DK",45,"00",,,,,,,1,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",,"","",0]],,[,
,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],DM:[,[,,"[57-9]\\d{9}","\\d{7}(?:\\d{3})?"],[,,"767(?:2(?:55|66)|4(?:2[01]|4[0-25-9])|50[0-4]|70[1-3])\\d{4}","\\d{7}(?:\\d{3})?",,,"7674201234"],[,,"767(?:2(?:[234689]5|7[5-7])|31[5-7]|61[2-7])\\d{4}","\\d{10}",,,"7672251234"],[,,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",,,"8002123456"],[,,"900[2-9]\\d{6}","\\d{10}",,,"9002123456"],[,,"NA","NA"],[,,"5(?:00|33|44|66|77)[2-9]\\d{6}","\\d{10}",,,"5002345678"],[,,"NA","NA"],"DM",1,"011",
"1",,,"1",,,,,,[,,"NA","NA"],,"767",[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],DO:[,[,,"[589]\\d{9}","\\d{7}(?:\\d{3})?"],[,,"8(?:[04]9[2-9]\\d{6}|29(?:2(?:[0-59]\\d|6[04-9]|7[0-27]|8[0237-9])|3(?:[0-35-9]\\d|4[7-9])|[45]\\d{2}|6(?:[0-27-9]\\d|[3-5][1-9]|6[0135-8])|7(?:0[013-9]|[1-37]\\d|4[1-35689]|5[1-4689]|6[1-57-9]|8[1-79]|9[1-8])|8(?:0[146-9]|1[0-48]|[248]\\d|3[1-79]|5[01589]|6[013-68]|7[124-8]|9[0-8])|9(?:[0-24]\\d|3[02-46-9]|5[0-79]|60|7[0169]|8[57-9]|9[02-9]))\\d{4})","\\d{7}(?:\\d{3})?",
,,"8092345678"],[,,"8[024]9[2-9]\\d{6}","\\d{7}(?:\\d{3})?",,,"8092345678"],[,,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",,,"8002123456"],[,,"900[2-9]\\d{6}","\\d{10}",,,"9002123456"],[,,"NA","NA"],[,,"5(?:00|33|44|66|77)[2-9]\\d{6}","\\d{10}",,,"5002345678"],[,,"NA","NA"],"DO",1,"011","1",,,"1",,,,,,[,,"NA","NA"],,"8[024]9",[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],DZ:[,[,,"(?:[1-4]|[5-9]\\d)\\d{7}","\\d{8,9}"],[,,"(?:1\\d|2[014-79]|3[0-8]|4[0135689])\\d{6}|9619\\d{5}","\\d{8,9}",,,"12345678"],
[,,"(?:5[4-6]|7[7-9])\\d{7}|6(?:[569]\\d|7[0-3])\\d{6}","\\d{9}",,,"551234567"],[,,"800\\d{6}","\\d{9}",,,"800123456"],[,,"80[3-689]1\\d{5}","\\d{9}",,,"808123456"],[,,"80[12]1\\d{5}","\\d{9}",,,"801123456"],[,,"NA","NA"],[,,"98[23]\\d{6}","\\d{9}",,,"983123456"],"DZ",213,"00","0",,,"0",,,,[[,"([1-4]\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-4]"],"0$1","",0],[,"([5-8]\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-8]"],"0$1","",0],[,"(9\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["9"],"0$1",
"",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],EC:[,[,,"1\\d{9,10}|[2-8]\\d{7}|9\\d{8}","\\d{7,11}"],[,,"[2-7][2-7]\\d{6}","\\d{7,8}",,,"22123456"],[,,"9(?:39|[45][89]|[67][7-9]|[89]\\d)\\d{6}","\\d{9}",,,"991234567"],[,,"1800\\d{6,7}","\\d{10,11}",,,"18001234567"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"[2-7]890\\d{4}","\\d{8}",,,"28901234"],"EC",593,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1 $2-$3",["[247]|[356][2-8]"],"(0$1)","",0],[,"(\\d{2})(\\d{3})(\\d{4})",
"$1 $2 $3",["9"],"0$1","",0],[,"(1800)(\\d{3})(\\d{3,4})","$1 $2 $3",["1"],"$1","",0]],[[,"(\\d)(\\d{3})(\\d{4})","$1-$2-$3",["[247]|[356][2-8]"]],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["9"],"0$1","",0],[,"(1800)(\\d{3})(\\d{3,4})","$1 $2 $3",["1"],"$1","",0]],[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],EE:[,[,,"1\\d{3,4}|[3-9]\\d{6,7}|800\\d{6,7}","\\d{4,10}"],[,,"(?:3[23589]|4(?:0\\d|[3-8])|6\\d|7[1-9]|88)\\d{5}","\\d{7,8}",,,"3212345"],[,,"(?:5\\d|8[1-5])\\d{6}|5(?:[02]\\d{2}|1(?:[0-8]\\d|95)|5[0-478]\\d|64[0-4]|65[1-589])\\d{3}",
"\\d{7,8}",,,"51234567"],[,,"800(?:0\\d{3}|1\\d|[2-9])\\d{3}","\\d{7,10}",,,"80012345"],[,,"900\\d{4}","\\d{7}",,,"9001234"],[,,"NA","NA"],[,,"70[0-2]\\d{5}","\\d{8}",,,"70012345"],[,,"NA","NA"],"EE",372,"00",,,,,,,,[[,"([3-79]\\d{2})(\\d{4})","$1 $2",["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]","[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]"],"","",0],[,"(70)(\\d{2})(\\d{4})","$1 $2 $3",["70"],"","",0],[,"(8000)(\\d{3})(\\d{3})","$1 $2 $3",["800","8000"],"","",0],
[,"([458]\\d{3})(\\d{3,4})","$1 $2",["40|5|8(?:00|[1-5])","40|5|8(?:00[1-9]|[1-5])"],"","",0]],,[,,"NA","NA"],,,[,,"1\\d{3,4}|800[2-9]\\d{3}","\\d{4,7}",,,"8002123"],[,,"1(?:2[01245]|3[0-6]|4[1-489]|5[0-59]|6[1-46-9]|7[0-27-9]|8[189]|9[012])\\d{1,2}","\\d{4,5}",,,"12123"],,,[,,"NA","NA"]],EG:[,[,,"1\\d{4,9}|[2456]\\d{8}|3\\d{7}|[89]\\d{8,9}","\\d{5,10}"],[,,"(?:1(?:3[23]\\d|5(?:[23]|9\\d))|2[2-4]\\d{2}|3\\d{2}|4(?:0[2-5]|[578][23]|64)\\d|5(?:0[2-7]|[57][23])\\d|6[24-689]3\\d|8(?:2[2-57]|4[26]|6[237]|8[2-4])\\d|9(?:2[27]|3[24]|52|6[2356]|7[2-4])\\d)\\d{5}|1[69]\\d{3}",
"\\d{5,9}",,,"234567890"],[,,"1(?:0[0-269]|1[0-245]|2[0-278])\\d{7}","\\d{10}",,,"1001234567"],[,,"800\\d{7}","\\d{10}",,,"8001234567"],[,,"900\\d{7}","\\d{10}",,,"9001234567"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"EG",20,"00","0",,,"0",,,,[[,"(\\d)(\\d{7,8})","$1 $2",["[23]"],"0$1","",0],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1[012]|[89]00"],"0$1","",0],[,"(\\d{2})(\\d{6,7})","$1 $2",["1[35]|[4-6]|[89][2-9]"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],EH:[,
[,,"[5689]\\d{8}","\\d{9}"],[,,"528[89]\\d{5}","\\d{9}",,,"528812345"],[,,"6(?:0[0-8]|[12-7]\\d|8[01]|9[2457-9])\\d{6}","\\d{9}",,,"650123456"],[,,"80\\d{7}","\\d{9}",,,"801234567"],[,,"89\\d{7}","\\d{9}",,,"891234567"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"EH",212,"00","0",,,"0",,,,,,[,,"NA","NA"],,"528[89]",[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],ER:[,[,,"[178]\\d{6}","\\d{6,7}"],[,,"1(?:1[12568]|20|40|55|6[146])\\d{4}|8\\d{6}","\\d{6,7}",,,"8370362"],[,,"17[1-3]\\d{4}|7\\d{6}","\\d{7}",
,,"7123456"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"ER",291,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",,"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],ES:[,[,,"[5-9]\\d{8}","\\d{9}"],[,,"8(?:[13]0|[28][0-8]|[47][1-9]|5[01346-9]|6[0457-9])\\d{6}|9(?:[1238][0-8]\\d{6}|4[1-9]\\d{6}|5\\d{7}|6(?:[0-8]\\d{6}|9(?:0(?:[0-57-9]\\d{4}|6(?:0[0-8]|1[1-9]|[2-9]\\d)\\d{2})|[1-9]\\d{5}))|7(?:[124-9]\\d{2}|3(?:[0-8]\\d|9[1-9]))\\d{4})","\\d{9}",
,,"810123456"],[,,"(?:6\\d{6}|7[1-4]\\d{5}|9(?:6906(?:09|10)|7390\\d{2}))\\d{2}","\\d{9}",,,"612345678"],[,,"[89]00\\d{6}","\\d{9}",,,"800123456"],[,,"80[367]\\d{6}","\\d{9}",,,"803123456"],[,,"90[12]\\d{6}","\\d{9}",,,"901123456"],[,,"70\\d{7}","\\d{9}",,,"701234567"],[,,"NA","NA"],"ES",34,"00",,,,,,,,[[,"([5-9]\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[568]|[79][0-8]"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"51\\d{7}","\\d{9}",,,"511234567"],,,[,,"NA","NA"]],ET:[,[,,"[1-59]\\d{8}","\\d{7,9}"],
[,,"(?:11(?:1(?:1[124]|2[2-57]|3[1-5]|5[5-8]|8[6-8])|2(?:13|3[6-8]|5[89]|7[05-9]|8[2-6])|3(?:2[01]|3[0-289]|4[1289]|7[1-4]|87)|4(?:1[69]|3[2-49]|4[0-3]|6[5-8])|5(?:1[57]|44|5[0-4])|6(?:18|2[69]|4[5-7]|5[1-5]|6[0-59]|8[015-8]))|2(?:2(?:11[1-9]|22[0-7]|33\\d|44[1467]|66[1-68])|5(?:11[124-6]|33[2-8]|44[1467]|55[14]|66[1-3679]|77[124-79]|880))|3(?:3(?:11[0-46-8]|22[0-6]|33[0134689]|44[04]|55[0-6]|66[01467])|4(?:44[0-8]|55[0-69]|66[0-3]|77[1-5]))|4(?:6(?:22[0-24-7]|33[1-5]|44[13-69]|55[14-689]|660|88[1-4])|7(?:11[1-9]|22[1-9]|33[13-7]|44[13-6]|55[1-689]))|5(?:7(?:227|55[05]|(?:66|77)[14-8])|8(?:11[149]|22[013-79]|33[0-68]|44[013-8]|550|66[1-5]|77\\d)))\\d{4}",
"\\d{7,9}",,,"111112345"],[,,"9(?:[1-3]\\d|5[89])\\d{6}","\\d{9}",,,"911234567"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"ET",251,"00","0",,,"0",,,,[[,"([1-59]\\d)(\\d{3})(\\d{4})","$1 $2 $3",,"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],FI:[,[,,"1\\d{4,11}|[2-9]\\d{4,10}","\\d{5,12}"],[,,"1(?:[3569][1-8]\\d{3,9}|[47]\\d{5,10})|2[1-8]\\d{3,9}|3(?:[1-8]\\d{3,9}|9\\d{4,8})|[5689][1-8]\\d{3,9}","\\d{5,12}",,,"1312345678"],[,,"4\\d{5,10}|50\\d{4,8}",
"\\d{6,11}",,,"412345678"],[,,"800\\d{4,7}","\\d{7,10}",,,"8001234567"],[,,"[67]00\\d{5,6}","\\d{8,9}",,,"600123456"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"FI",358,"00|99[049]","0",,,"0",,,,[[,"(\\d{3})(\\d{3,7})","$1 $2",["(?:[1-3]00|[6-8]0)"],"0$1","",0],[,"(\\d{2})(\\d{4,10})","$1 $2",["[14]|2[09]|50|7[135]"],"0$1","",0],[,"(\\d)(\\d{4,11})","$1 $2",["[25689][1-8]|3"],"0$1","",0]],,[,,"NA","NA"],1,,[,,"[13]00\\d{3,7}|2(?:0(?:0\\d{3,7}|2[023]\\d{1,6}|9[89]\\d{1,6}))|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})",
"\\d{5,10}",,,"100123"],[,,"[13]0\\d{4,8}|2(?:0(?:[016-8]\\d{3,7}|[2-59]\\d{2,7})|9\\d{4,8})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})","\\d{5,10}",,,"10112345"],,,[,,"NA","NA"]],FJ:[,[,,"[36-9]\\d{6}|0\\d{10}","\\d{7}(?:\\d{4})?"],[,,"(?:3[0-5]|6[25-7]|8[58])\\d{5}","\\d{7}",,,"3212345"],[,,"(?:7[0-8]|8[034679]|9\\d)\\d{5}","\\d{7}",,,"7012345"],[,,"0800\\d{7}","\\d{11}",,,"08001234567"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"FJ",679,"0(?:0|52)",,,,,,"00",
,[[,"(\\d{3})(\\d{4})","$1 $2",["[36-9]"],"","",0],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],1,,[,,"NA","NA"]],FK:[,[,,"[2-7]\\d{4}","\\d{5}"],[,,"[2-47]\\d{4}","\\d{5}",,,"31234"],[,,"[56]\\d{4}","\\d{5}",,,"51234"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"FK",500,"00",,,,,,,,,,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],FM:[,[,,"[39]\\d{6}","\\d{7}"],[,,"3[2357]0[1-9]\\d{3}|9[2-6]\\d{5}","\\d{7}",
,,"3201234"],[,,"3[2357]0[1-9]\\d{3}|9[2-7]\\d{5}","\\d{7}",,,"3501234"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"FM",691,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",,"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],FO:[,[,,"[2-9]\\d{5}","\\d{6}"],[,,"(?:20|[3-4]\\d|8[19])\\d{4}","\\d{6}",,,"201234"],[,,"(?:2[1-9]|5\\d|7[1-79])\\d{4}","\\d{6}",,,"211234"],[,,"80[257-9]\\d{3}","\\d{6}",,,"802123"],[,,"90(?:[1345][15-7]|2[125-7]|99)\\d{2}","\\d{6}",
,,"901123"],[,,"NA","NA"],[,,"NA","NA"],[,,"(?:6[0-36]|88)\\d{4}","\\d{6}",,,"601234"],"FO",298,"00",,,,"(10(?:01|[12]0|88))",,,,[[,"(\\d{6})","$1",,"","$CC $1",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],FR:[,[,,"[1-9]\\d{8}","\\d{9}"],[,,"[1-5]\\d{8}","\\d{9}",,,"123456789"],[,,"6\\d{8}|7[5-9]\\d{7}","\\d{9}",,,"612345678"],[,,"80\\d{7}","\\d{9}",,,"801234567"],[,,"89[1-37-9]\\d{6}","\\d{9}",,,"891123456"],[,,"8(?:1[019]|2[0156]|84|90)\\d{6}","\\d{9}",,,"810123456"],[,,"NA",
"NA"],[,,"9\\d{8}","\\d{9}",,,"912345678"],"FR",33,"00","0",,,"0",,,,[[,"([1-79])(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[1-79]"],"0$1","",0],[,"(1\\d{2})(\\d{3})","$1 $2",["11"],"$1","",0],[,"(8\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0 $1","",0]],[[,"([1-79])(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[1-79]"],"0$1","",0],[,"(8\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0 $1","",0]],[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],GA:[,[,
,"0?\\d{7}","\\d{7,8}"],[,,"01\\d{6}","\\d{8}",,,"01441234"],[,,"0?[2-7]\\d{6}","\\d{7,8}",,,"06031234"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"GA",241,"00",,,,,,,,[[,"(\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-7]"],"0$1","",0],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],1,,[,,"NA","NA"]],GB:[,[,,"\\d{7,10}","\\d{4,10}"],[,,"2(?:0[01378]|3[0189]|4[017]|8[0-46-9]|9[012])\\d{7}|1(?:(?:1(?:3[0-48]|[46][0-4]|5[012789]|7[0-49]|8[01349])|21[0-7]|31[0-8]|[459]1\\d|61[0-46-9]))\\d{6}|1(?:2(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-4789]|7[013-9]|9\\d)|3(?:0\\d|[25][02-9]|3[02-579]|[468][0-46-9]|7[1235679]|9[24578])|4(?:0[03-9]|[28][02-5789]|[37]\\d|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1235-9]|2[024-9]|3[015689]|4[02-9]|5[03-9]|6\\d|7[0-35-9]|8[0-468]|9[0-5789])|6(?:0[034689]|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0124578])|7(?:0[0246-9]|2\\d|3[023678]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-5789]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|2[02-689]|3[1-5789]|4[2-9]|5[0-579]|6[234789]|7[0124578]|8\\d|9[2-57]))\\d{6}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-4789]|8[345])))|3(?:638[2-5]|647[23]|8(?:47[04-9]|64[015789]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[123]))|5(?:24(?:3[2-79]|6\\d)|276\\d|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[567]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|955[0-4])|7(?:26(?:6[13-9]|7[0-7])|442\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|84(?:3[2-58]))|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}|176888[234678]\\d{2}|16977[23]\\d{3}",
"\\d{4,10}",,,"1212345678"],[,,"7(?:[1-4]\\d\\d|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[04-9]\\d|1[02-9]|2[0-35-9]|3[0-689]))\\d{6}","\\d{10}",,,"7400123456"],[,,"80(?:0(?:1111|\\d{6,7})|8\\d{7})|500\\d{6}","\\d{7}(?:\\d{2,3})?",,,"8001234567"],[,,"(?:87[123]|9(?:[01]\\d|8[2349]))\\d{7}","\\d{10}",,,"9012345678"],[,,"8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})","\\d{7}(?:\\d{3})?",,,"8431234567"],[,,"70\\d{8}","\\d{10}",,,"7012345678"],[,,"56\\d{8}",
"\\d{10}",,,"5612345678"],"GB",44,"00","0"," x",,"0",,,,[[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["2|5[56]|7(?:0|6[013-9])","2|5[56]|7(?:0|6(?:[013-9]|2[0-35-9]))"],"0$1","",0],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1(?:1|\\d1)|3|9[018]"],"0$1","",0],[,"(\\d{5})(\\d{4,5})","$1 $2",["1(?:38|5[23]|69|76|94)","1(?:387|5(?:24|39)|697|768|946)","1(?:3873|5(?:242|39[456])|697[347]|768[347]|9467)"],"0$1","",0],[,"(1\\d{3})(\\d{5,6})","$1 $2",["1"],"0$1","",0],[,"(7\\d{3})(\\d{6})","$1 $2",["7(?:[1-5789]|62)",
"7(?:[1-5789]|624)"],"0$1","",0],[,"(800)(\\d{4})","$1 $2",["800","8001","80011","800111","8001111"],"0$1","",0],[,"(845)(46)(4\\d)","$1 $2 $3",["845","8454","84546","845464"],"0$1","",0],[,"(8\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["8(?:4[2-5]|7[0-3])"],"0$1","",0],[,"(80\\d)(\\d{3})(\\d{4})","$1 $2 $3",["80"],"0$1","",0],[,"([58]00)(\\d{6})","$1 $2",["[58]00"],"0$1","",0]],,[,,"76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}","\\d{10}",,,"7640123456"],1,,[,,"NA","NA"],[,,"(?:3[0347]|55)\\d{8}",
"\\d{10}",,,"5512345678"],,,[,,"NA","NA"]],GD:[,[,,"[4589]\\d{9}","\\d{7}(?:\\d{3})?"],[,,"473(?:2(?:3[0-2]|69)|3(?:2[89]|86)|4(?:[06]8|3[5-9]|4[0-49]|5[5-79]|68|73|90)|63[68]|7(?:58|84)|800|938)\\d{4}","\\d{7}(?:\\d{3})?",,,"4732691234"],[,,"473(?:4(?:0[2-79]|1[04-9]|20|58)|5(?:2[01]|3[3-8])|901)\\d{4}","\\d{10}",,,"4734031234"],[,,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",,,"8002123456"],[,,"900[2-9]\\d{6}","\\d{10}",,,"9002123456"],[,,"NA","NA"],[,,"5(?:00|33|44|66|77)[2-9]\\d{6}","\\d{10}",
,,"5002345678"],[,,"NA","NA"],"GD",1,"011","1",,,"1",,,,,,[,,"NA","NA"],,"473",[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],GE:[,[,,"[34578]\\d{8}","\\d{6,9}"],[,,"(?:3(?:[256]\\d|4[124-9]|7[0-4])|4(?:1\\d|2[2-7]|3[1-79]|4[2-8]|7[239]|9[1-7]))\\d{6}","\\d{6,9}",,,"322123456"],[,,"5(?:14|5[01578]|68|7[0147-9]|9[0-35-9])\\d{6}","\\d{9}",,,"555123456"],[,,"800\\d{6}","\\d{9}",,,"800123456"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"706\\d{6}","\\d{9}",,,"706123456"],"GE",995,"00","0",,,"0",,,,[[,
"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[348]"],"0$1","",0],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["7"],"0$1","",0],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5"],"$1","",0]],,[,,"NA","NA"],,,[,,"706\\d{6}","\\d{9}",,,"706123456"],[,,"NA","NA"],,,[,,"NA","NA"]],GF:[,[,,"[56]\\d{8}","\\d{9}"],[,,"594(?:10|2[012457-9]|3[0-57-9]|4[3-9]|5[7-9]|6[0-3]|9[014])\\d{4}","\\d{9}",,,"594101234"],[,,"694(?:[04][0-7]|1[0-5]|3[018]|[29]\\d)\\d{4}","\\d{9}",,,"694201234"],[,,"NA","NA"],[,
,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"GF",594,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",,"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],GG:[,[,,"[135789]\\d{6,9}","\\d{6,10}"],[,,"1481\\d{6}","\\d{6,10}",,,"1481456789"],[,,"7(?:781|839|911)\\d{6}","\\d{10}",,,"7781123456"],[,,"80(?:0(?:1111|\\d{6,7})|8\\d{7})|500\\d{6}","\\d{7}(?:\\d{2,3})?",,,"8001234567"],[,,"(?:87[123]|9(?:[01]\\d|8[0-3]))\\d{7}","\\d{10}",,,"9012345678"],
[,,"8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})","\\d{7}(?:\\d{3})?",,,"8431234567"],[,,"70\\d{8}","\\d{10}",,,"7012345678"],[,,"56\\d{8}","\\d{10}",,,"5612345678"],"GG",44,"00","0"," x",,"0",,,,,,[,,"76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}","\\d{10}",,,"7640123456"],,,[,,"NA","NA"],[,,"(?:3[0347]|55)\\d{8}","\\d{10}",,,"5512345678"],,,[,,"NA","NA"]],GH:[,[,,"[235]\\d{8}|8\\d{7}","\\d{7,9}"],[,,"3(?:0[237]\\d|[167](?:2[0-6]|7\\d)|2(?:2[0-5]|7\\d)|3(?:2[0-3]|7\\d)|4(?:2[013-9]|3[01]|7\\d)|5(?:2[0-7]|7\\d)|8(?:2[0-2]|7\\d)|9(?:20|7\\d))\\d{5}",
"\\d{7,9}",,,"302345678"],[,,"(?:2[034678]\\d|5(?:[047]\\d|54))\\d{6}","\\d{9}",,,"231234567"],[,,"800\\d{5}","\\d{8}",,,"80012345"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"GH",233,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[235]"],"0$1","",0],[,"(\\d{3})(\\d{5})","$1 $2",["8"],"0$1","",0]],,[,,"NA","NA"],,,[,,"800\\d{5}","\\d{8}",,,"80012345"],[,,"NA","NA"],,,[,,"NA","NA"]],GI:[,[,,"[2568]\\d{7}","\\d{8}"],[,,"2(?:00\\d|1(?:6[24-7]|9\\d)|2(?:00|2[2457]))\\d{4}",
"\\d{8}",,,"20012345"],[,,"(?:5[46-8]|62)\\d{6}","\\d{8}",,,"57123456"],[,,"80\\d{6}","\\d{8}",,,"80123456"],[,,"8[1-689]\\d{6}","\\d{8}",,,"88123456"],[,,"87\\d{6}","\\d{8}",,,"87123456"],[,,"NA","NA"],[,,"NA","NA"],"GI",350,"00",,,,,,,,[[,"(\\d{3})(\\d{5})","$1 $2",["2"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],GL:[,[,,"[1-689]\\d{5}","\\d{6}"],[,,"(?:19|3[1-6]|6[14689]|8[14-79]|9\\d)\\d{4}","\\d{6}",,,"321000"],[,,"[245][2-9]\\d{4}","\\d{6}",,,"221234"],[,,"80\\d{4}",
"\\d{6}",,,"801234"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"3[89]\\d{4}","\\d{6}",,,"381234"],"GL",299,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",,"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],GM:[,[,,"[2-9]\\d{6}","\\d{7}"],[,,"(?:4(?:[23]\\d{2}|4(?:1[024679]|[6-9]\\d))|5(?:54[0-7]|6(?:[67]\\d)|7(?:1[04]|2[035]|3[58]|48))|8\\d{3})\\d{3}","\\d{7}",,,"5661234"],[,,"(?:2[0-6]|[3679]\\d)\\d{5}","\\d{7}",,,"3012345"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],
[,,"NA","NA"],[,,"NA","NA"],"GM",220,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",,"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],GN:[,[,,"[367]\\d{7,8}","\\d{8,9}"],[,,"30(?:24|3[12]|4[1-35-7]|5[13]|6[189]|[78]1|9[1478])\\d{4}","\\d{8}",,,"30241234"],[,,"6[02356]\\d{7}","\\d{9}",,,"601123456"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"722\\d{6}","\\d{9}",,,"722123456"],"GN",224,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["3"],"","",0],
[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[67]"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],GP:[,[,,"[56]\\d{8}","\\d{9}"],[,,"590(?:0[13468]|1[012]|2[0-68]|3[28]|4[0-8]|5[579]|6[0189]|70|8[0-689]|9\\d)\\d{4}","\\d{9}",,,"590201234"],[,,"690(?:0[0-7]|[1-9]\\d)\\d{4}","\\d{9}",,,"690301234"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"GP",590,"00","0",,,"0",,,,[[,"([56]90)(\\d{2})(\\d{4})","$1 $2-$3",,"0$1","",0]],,[,,"NA","NA"],1,
,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],GQ:[,[,,"[23589]\\d{8}","\\d{9}"],[,,"3(?:3(?:3\\d[7-9]|[0-24-9]\\d[46])|5\\d{2}[7-9])\\d{4}","\\d{9}",,,"333091234"],[,,"(?:222|551)\\d{6}","\\d{9}",,,"222123456"],[,,"80\\d[1-9]\\d{5}","\\d{9}",,,"800123456"],[,,"90\\d[1-9]\\d{5}","\\d{9}",,,"900123456"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"GQ",240,"00",,,,,,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235]"],"","",0],[,"(\\d{3})(\\d{6})","$1 $2",["[89]"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],
[,,"NA","NA"],,,[,,"NA","NA"]],GR:[,[,,"[26-9]\\d{9}","\\d{10}"],[,,"2(?:1\\d{2}|2(?:2[1-46-9]|3[1-8]|4[1-7]|5[1-4]|6[1-8]|7[1-5]|[89][1-9])|3(?:1\\d|2[1-57]|[35][1-3]|4[13]|7[1-7]|8[124-6]|9[1-79])|4(?:1\\d|2[1-8]|3[1-4]|4[13-5]|6[1-578]|9[1-5])|5(?:1\\d|[29][1-4]|3[1-5]|4[124]|5[1-6])|6(?:1\\d|3[1245]|4[1-7]|5[13-9]|[269][1-6]|7[14]|8[1-5])|7(?:1\\d|2[1-5]|3[1-6]|4[1-7]|5[1-57]|6[135]|9[125-7])|8(?:1\\d|2[1-5]|[34][1-4]|9[1-57]))\\d{6}","\\d{10}",,,"2123456789"],[,,"69\\d{8}","\\d{10}",,,"6912345678"],
[,,"800\\d{7}","\\d{10}",,,"8001234567"],[,,"90[19]\\d{7}","\\d{10}",,,"9091234567"],[,,"8(?:0[16]|12|25)\\d{7}","\\d{10}",,,"8011234567"],[,,"70\\d{8}","\\d{10}",,,"7012345678"],[,,"NA","NA"],"GR",30,"00",,,,,,,,[[,"([27]\\d)(\\d{4})(\\d{4})","$1 $2 $3",["21|7"],"","",0],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["2[2-9]1|[689]"],"","",0],[,"(2\\d{3})(\\d{6})","$1 $2",["2[2-9][02-9]"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],GT:[,[,,"[2-7]\\d{7}|1[89]\\d{9}","\\d{8}(?:\\d{3})?"],
[,,"[267][2-9]\\d{6}","\\d{8}",,,"22456789"],[,,"[345]\\d{7}","\\d{8}",,,"51234567"],[,,"18[01]\\d{8}","\\d{11}",,,"18001112222"],[,,"19\\d{9}","\\d{11}",,,"19001112222"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"GT",502,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[2-7]"],"","",0],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],GU:[,[,,"[5689]\\d{9}","\\d{7}(?:\\d{3})?"],[,,"671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:56|7[1-9]|8[236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[5-9])|7(?:[079]7|2[0167]|3[45]|8[789])|8(?:[2-5789]8|6[48])|9(?:2[29]|6[79]|7[179]|8[789]|9[78]))\\d{4}",
"\\d{7}(?:\\d{3})?",,,"6713001234"],[,,"671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:56|7[1-9]|8[236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[5-9])|7(?:[079]7|2[0167]|3[45]|8[789])|8(?:[2-5789]8|6[48])|9(?:2[29]|6[79]|7[179]|8[789]|9[78]))\\d{4}","\\d{7}(?:\\d{3})?",,,"6713001234"],[,,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",,,"8002123456"],[,,"900[2-9]\\d{6}","\\d{10}",,,"9002123456"],[,,"NA","NA"],[,,"5(?:00|33|44|66|77)[2-9]\\d{6}","\\d{10}",,,"5002345678"],[,,"NA","NA"],"GU",1,"011",
"1",,,"1",,,1,,,[,,"NA","NA"],,"671",[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],GW:[,[,,"[3-79]\\d{6}","\\d{7}"],[,,"3(?:2[0125]|3[1245]|4[12]|5[1-4]|70|9[1-467])\\d{4}","\\d{7}",,,"3201234"],[,,"(?:[5-7]\\d|9[012])\\d{5}","\\d{7}",,,"5012345"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"40\\d{5}","\\d{7}",,,"4012345"],"GW",245,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",,"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],GY:[,[,,"[2-4679]\\d{6}","\\d{7}"],[,,
"(?:2(?:1[6-9]|2[0-35-9]|3[1-4]|5[3-9]|6\\d|7[0-24-79])|3(?:2[25-9]|3\\d)|4(?:4[0-24]|5[56])|77[1-57])\\d{4}","\\d{7}",,,"2201234"],[,,"6\\d{6}","\\d{7}",,,"6091234"],[,,"(?:289|862)\\d{4}","\\d{7}",,,"2891234"],[,,"9008\\d{3}","\\d{7}",,,"9008123"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"GY",592,"001",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",,"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],HK:[,[,,"[235-7]\\d{7}|8\\d{7,8}|9\\d{4,10}","\\d{5,11}"],[,,"(?:[23]\\d|5[78])\\d{6}",
"\\d{8}",,,"21234567"],[,,"(?:5[1-69]\\d|6\\d{2}|9(?:0[1-9]|[1-8]\\d))\\d{5}","\\d{8}",,,"51234567"],[,,"800\\d{6}","\\d{9}",,,"800123456"],[,,"900(?:[0-24-9]\\d{7}|3\\d{1,4})","\\d{5,11}",,,"90012345678"],[,,"NA","NA"],[,,"8[1-3]\\d{6}","\\d{8}",,,"81123456"],[,,"NA","NA"],"HK",852,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[235-7]|[89](?:0[1-9]|[1-9])"],"","",0],[,"(800)(\\d{3})(\\d{3})","$1 $2 $3",["800"],"","",0],[,"(900)(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["900"],"","",0],[,"(900)(\\d{2,5})",
"$1 $2",["900"],"","",0]],,[,,"7\\d{7}","\\d{8}",,,"71234567"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],HN:[,[,,"[237-9]\\d{7}","\\d{8}"],[,,"2(?:2(?:0[019]|1[1-36]|[23]\\d|4[056]|5[57]|7[01389]|8[0146-9]|9[012])|4(?:2[3-59]|3[13-689]|4[0-68]|5[1-35])|5(?:4[3-5]|5\\d|6[56]|74)|6(?:[056]\\d|4[0-378]|[78][0-8]|9[01])|7(?:6[46-9]|7[02-9]|8[34])|8(?:79|8[0-35789]|9[1-57-9]))\\d{4}","\\d{8}",,,"22123456"],[,,"[37-9]\\d{7}","\\d{8}",,,"91234567"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA",
"NA"],[,,"NA","NA"],"HN",504,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1-$2",,"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],HR:[,[,,"[1-7]\\d{5,8}|[89]\\d{6,11}","\\d{6,12}"],[,,"1\\d{7}|(?:2[0-3]|3[1-5]|4[02-47-9]|5[1-3])\\d{6}","\\d{6,8}",,,"12345678"],[,,"9[1257-9]\\d{6,10}","\\d{8,12}",,,"912345678"],[,,"80[01]\\d{4,7}","\\d{7,10}",,,"8001234567"],[,,"6(?:[09]\\d{7}|[145]\\d{4,7})","\\d{6,9}",,,"611234"],[,,"NA","NA"],[,,"7[45]\\d{4,7}","\\d{6,9}",,,"741234567"],[,,"NA","NA"],
"HR",385,"00","0",,,"0",,,,[[,"(1)(\\d{4})(\\d{3})","$1 $2 $3",["1"],"0$1","",0],[,"(6[09])(\\d{4})(\\d{3})","$1 $2 $3",["6[09]"],"0$1","",0],[,"(62)(\\d{3})(\\d{3,4})","$1 $2 $3",["62"],"0$1","",0],[,"([2-5]\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[2-5]"],"0$1","",0],[,"(9\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1","",0],[,"(9\\d)(\\d{4})(\\d{4})","$1 $2 $3",["9"],"0$1","",0],[,"(9\\d)(\\d{3,4})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"],"0$1","",0],[,"(\\d{2})(\\d{2})(\\d{2,3})","$1 $2 $3",["6[145]|7"],
"0$1","",0],[,"(\\d{2})(\\d{3,4})(\\d{3})","$1 $2 $3",["6[145]|7"],"0$1","",0],[,"(80[01])(\\d{2})(\\d{2,3})","$1 $2 $3",["8"],"0$1","",0],[,"(80[01])(\\d{3,4})(\\d{3})","$1 $2 $3",["8"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"62\\d{6,7}","\\d{8,9}",,,"62123456"],,,[,,"NA","NA"]],HT:[,[,,"[2-489]\\d{7}","\\d{8}"],[,,"2(?:[24]\\d|5[1-5]|94)\\d{5}","\\d{8}",,,"22453300"],[,,"(?:3[1-9]|4\\d)\\d{6}","\\d{8}",,,"34101234"],[,,"8\\d{7}","\\d{8}",,,"80012345"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA",
"NA"],[,,"98[89]\\d{5}","\\d{8}",,,"98901234"],"HT",509,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",,"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],HU:[,[,,"[1-9]\\d{7,8}","\\d{6,9}"],[,,"(?:1\\d|2(?:1\\d|[2-9])|3[2-7]|4[24-9]|5[2-79]|6[23689]|7(?:1\\d|[2-9])|8[2-57-9]|9[2-69])\\d{6}","\\d{6,9}",,,"12345678"],[,,"(?:[27]0|3[01])\\d{7}","\\d{9}",,,"201234567"],[,,"80\\d{6}","\\d{8}",,,"80123456"],[,,"9[01]\\d{6}","\\d{8}",,,"90123456"],[,,"40\\d{6}","\\d{8}",,,"40123456"],
[,,"NA","NA"],[,,"NA","NA"],"HU",36,"00","06",,,"06",,,,[[,"(1)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"($1)","",0],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-9]"],"($1)","",0]],,[,,"NA","NA"],,,[,,"[48]0\\d{6}","\\d{8}",,,"80123456"],[,,"NA","NA"],,,[,,"NA","NA"]],ID:[,[,,"[1-9]\\d{6,10}","\\d{5,11}"],[,,"2(?:1(?:14\\d{3}|[0-8]\\d{6,7}|500\\d{3}|9\\d{6})|[24]\\d{7,8})|(?:2(?:[35][1-4]|6[0-8]|7[1-6]|8\\d|9[1-8])|3(?:1|2[1-578]|3[1-68]|4[1-3]|5[1-8]|6[1-3568]|7[0-46]|8\\d)|4(?:0[1-589]|1[01347-9]|2[0-36-8]|3[0-24-68]|5[1-378]|6[1-5]|7[134]|8[1245])|5(?:1[1-35-9]|2[25-8]|3[1246-9]|4[1-3589]|5[1-46]|6[1-8])|6(?:19?|[25]\\d|3[1-469]|4[1-6])|7(?:1[1-46-9]|2[14-9]|[36]\\d|4[1-8]|5[1-9]|7[0-36-9])|9(?:0[12]|1[013-8]|2[0-479]|5[125-8]|6[23679]|7[159]|8[01346]))\\d{5,8}",
"\\d{5,10}",,,"612345678"],[,,"(?:2(?:1(?:3[145]|4[01]|5[1-469]|60|8[0359]|9\\d)|2(?:88|9[1256])|3[1-4]9|4(?:36|91)|5(?:1[349]|[2-4]9)|6[0-7]9|7(?:[1-36]9|4[39])|8[1-5]9|9[1-48]9)|3(?:19[1-3]|2[12]9|3[13]9|4(?:1[69]|39)|5[14]9|6(?:1[69]|2[89])|709)|4[13]19|5(?:1(?:19|8[39])|4[129]9|6[12]9)|6(?:19[12]|2(?:[23]9|77))|7(?:1[13]9|2[15]9|419|5(?:1[89]|29)|6[15]9|7[178]9))\\d{5,6}|8[1-35-9]\\d{7,9}","\\d{9,11}",,,"812345678"],[,,"177\\d{6,8}|800\\d{5,7}","\\d{8,11}",,,"8001234567"],[,,"809\\d{7}","\\d{10}",
,,"8091234567"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"ID",62,"0(?:0[1789]|10(?:00|1[67]))","0",,,"0",,,,[[,"(\\d{2})(\\d{5,8})","$1 $2",["2[124]|[36]1"],"(0$1)","",0],[,"(\\d{3})(\\d{5,7})","$1 $2",["[4579]|2[035-9]|[36][02-9]"],"(0$1)","",0],[,"(8\\d{2})(\\d{3,4})(\\d{3,4})","$1-$2-$3",["8[1-35-9]"],"0$1","",0],[,"(177)(\\d{6,8})","$1 $2",["1"],"0$1","",0],[,"(800)(\\d{5,7})","$1 $2",["800"],"0$1","",0],[,"(80\\d)(\\d)(\\d{3})(\\d{3})","$1 $2 $3 $4",["80[79]"],"0$1","",0]],,[,,"NA","NA"],,,
[,,"8071\\d{6}","\\d{10}",,,"8071123456"],[,,"8071\\d{6}","\\d{10}",,,"8071123456"],,,[,,"NA","NA"]],IE:[,[,,"[124-9]\\d{6,9}","\\d{5,10}"],[,,"1\\d{7,8}|2(?:1\\d{6,7}|3\\d{7}|[24-9]\\d{5})|4(?:0[24]\\d{5}|[1-469]\\d{7}|5\\d{6}|7\\d{5}|8[0-46-9]\\d{7})|5(?:0[45]\\d{5}|1\\d{6}|[23679]\\d{7}|8\\d{5})|6(?:1\\d{6}|[237-9]\\d{5}|[4-6]\\d{7})|7[14]\\d{7}|9(?:1\\d{6}|[04]\\d{7}|[35-9]\\d{5})","\\d{5,10}",,,"2212345"],[,,"8(?:22\\d{6}|[35-9]\\d{7})","\\d{9}",,,"850123456"],[,,"1800\\d{6}","\\d{10}",,,"1800123456"],
[,,"15(?:1[2-8]|[2-8]0|9[089])\\d{6}","\\d{10}",,,"1520123456"],[,,"18[59]0\\d{6}","\\d{10}",,,"1850123456"],[,,"700\\d{6}","\\d{9}",,,"700123456"],[,,"76\\d{7}","\\d{9}",,,"761234567"],"IE",353,"00","0",,,"0",,,,[[,"(1)(\\d{3,4})(\\d{4})","$1 $2 $3",["1"],"(0$1)","",0],[,"(\\d{2})(\\d{5})","$1 $2",["2[24-9]|47|58|6[237-9]|9[35-9]"],"(0$1)","",0],[,"(\\d{3})(\\d{5})","$1 $2",["40[24]|50[45]"],"(0$1)","",0],[,"(48)(\\d{4})(\\d{4})","$1 $2 $3",["48"],"(0$1)","",0],[,"(818)(\\d{3})(\\d{3})","$1 $2 $3",
["81"],"(0$1)","",0],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[24-69]|7[14]"],"(0$1)","",0],[,"([78]\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["76|8[35-9]"],"0$1","",0],[,"(700)(\\d{3})(\\d{3})","$1 $2 $3",["70"],"0$1","",0],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:8[059]|5)","1(?:8[059]0|5)"],"$1","",0]],,[,,"NA","NA"],,,[,,"18[59]0\\d{6}","\\d{10}",,,"1850123456"],[,,"818\\d{6}","\\d{9}",,,"818123456"],,,[,,"8[35-9]\\d{8}","\\d{10}",,,"8501234567"]],IL:[,[,,"[17]\\d{6,9}|[2-589]\\d{3}(?:\\d{3,6})?|6\\d{3}",
"\\d{4,10}"],[,,"[2-489]\\d{7}","\\d{7,8}",,,"21234567"],[,,"5(?:[02347-9]\\d{2}|5(?:2[23]|3[34]|4[45]|5[5689]|6[67]|7[78]|8[89])|6[2-9]\\d)\\d{5}","\\d{9}",,,"501234567"],[,,"1(?:80[019]\\d{3}|255)\\d{3}","\\d{7,10}",,,"1800123456"],[,,"1(?:212|(?:9(?:0[01]|19)|200)\\d{2})\\d{4}","\\d{8,10}",,,"1919123456"],[,,"1700\\d{6}","\\d{10}",,,"1700123456"],[,,"NA","NA"],[,,"7(?:2[23]\\d|3[237]\\d|47\\d|6(?:5\\d|8[068])|7\\d{2}|8(?:33|55|77|81))\\d{5}","\\d{9}",,,"771234567"],"IL",972,"0(?:0|1[2-9])","0",
,,"0",,,,[[,"([2-489])(\\d{3})(\\d{4})","$1-$2-$3",["[2-489]"],"0$1","",0],[,"([57]\\d)(\\d{3})(\\d{4})","$1-$2-$3",["[57]"],"0$1","",0],[,"(1)([7-9]\\d{2})(\\d{3})(\\d{3})","$1-$2-$3-$4",["1[7-9]"],"$1","",0],[,"(1255)(\\d{3})","$1-$2",["125"],"$1","",0],[,"(1200)(\\d{3})(\\d{3})","$1-$2-$3",["120"],"$1","",0],[,"(1212)(\\d{2})(\\d{2})","$1-$2-$3",["121"],"$1","",0],[,"(1599)(\\d{6})","$1-$2",["15"],"$1","",0],[,"(\\d{4})","*$1",["[2-689]"],"$1","",0]],,[,,"NA","NA"],,,[,,"1700\\d{6}|[2-689]\\d{3}",
"\\d{4,10}",,,"1700123456"],[,,"[2-689]\\d{3}|1599\\d{6}","\\d{4}(?:\\d{6})?",,,"1599123456"],,,[,,"NA","NA"]],IM:[,[,,"[135789]\\d{6,9}","\\d{6,10}"],[,,"1624\\d{6}","\\d{6,10}",,,"1624456789"],[,,"7[569]24\\d{6}","\\d{10}",,,"7924123456"],[,,"808162\\d{4}","\\d{10}",,,"8081624567"],[,,"(?:872299|90[0167]624)\\d{4}","\\d{10}",,,"9016247890"],[,,"8(?:4(?:40[49]06|5624\\d)|70624\\d)\\d{3}","\\d{10}",,,"8456247890"],[,,"70\\d{8}","\\d{10}",,,"7012345678"],[,,"56\\d{8}","\\d{10}",,,"5612345678"],"IM",
44,"00","0"," x",,"0",,,,,,[,,"NA","NA"],,,[,,"NA","NA"],[,,"3(?:08162\\d|3\\d{5}|4(?:40[49]06|5624\\d)|7(?:0624\\d|2299\\d))\\d{3}|55\\d{8}","\\d{10}",,,"5512345678"],,,[,,"NA","NA"]],IN:[,[,,"1\\d{7,12}|[2-9]\\d{9,10}","\\d{6,13}"],[,,"(?:11|2[02]|33|4[04]|79)[2-7]\\d{7}|80[2-467]\\d{7}|(?:1(?:2[0-249]|3[0-25]|4[145]|[59][14]|6[014]|7[1257]|8[01346])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[126-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:[136][25]|22|4[28]|5[12]|[78]1|9[15])|6(?:12|[2345]1|57|6[13]|7[14]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91))[2-7]\\d{6}|(?:(?:1(?:2[35-8]|3[346-9]|4[236-9]|[59][0235-9]|6[235-9]|7[34689]|8[257-9])|2(?:1[134689]|3[24-8]|4[2-8]|5[25689]|6[2-4679]|7[13-79]|8[2-479]|9[235-9])|3(?:01|1[79]|2[1-5]|4[25-8]|5[125689]|6[235-7]|7[157-9]|8[2-467])|4(?:1[14578]|2[5689]|3[2-467]|5[4-7]|6[35]|73|8[2689]|9[2389])|5(?:[16][146-9]|2[14-8]|3[1346]|4[14-69]|5[46]|7[2-4]|8[2-8]|9[246])|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|[57][2-689]|6[24-578]|8[1-6])|8(?:1[1357-9]|2[235-8]|3[03-57-9]|4[0-24-9]|5\\d|6[2457-9]|7[1-6]|8[1256]|9[2-4]))\\d|7(?:(?:1[013-9]|2[0235-9]|3[2679]|4[1-35689]|5[2-46-9]|[67][02-9]|9\\d)\\d|8(?:2[0-6]|[013-8]\\d)))[2-7]\\d{5}",
"\\d{6,10}",,,"1123456789"],[,,"(?:7(?:0(?:2[2-9]|[3-6]\\d|7[01])|2(?:0[04-9]|5[09]|7[5-8]|9[389])|3(?:0[1-9]|[58]\\d|7[3679]|9[689])|4(?:0[1-9]|1[15-9]|[29][89]|39|8[389])|5(?:[034678]\\d|2[03-9]|5[017-9]|9[7-9])|6(?:0[0127]|1[0-257-9]|2[0-4]|3[19]|5[4589]|[6-9]\\d)|7(?:0[2-9]|[1-79]\\d|8[1-9])|8(?:[0-7]\\d|9[013-9]))|8(?:0(?:[01589]\\d|6[67])|1(?:[02-589]\\d|1[0135-9]|7[0-79])|2(?:[236-9]\\d|5[1-9])|3(?:[0357-9]\\d|4[1-9])|[45]\\d{2}|6[02457-9]\\d|7[1-69]\\d|8(?:[0-26-9]\\d|44|5[2-9])|9(?:[035-9]\\d|2[2-9]|4[0-8]))|9\\d{3})\\d{6}",
"\\d{10}",,,"9123456789"],[,,"1(?:600\\d{6}|80(?:0\\d{4,8}|3\\d{9}))","\\d{8,13}",,,"1800123456"],[,,"186[12]\\d{9}","\\d{13}",,,"1861123456789"],[,,"1860\\d{7}","\\d{11}",,,"18603451234"],[,,"NA","NA"],[,,"NA","NA"],"IN",91,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{2})(\\d{6})","$1 $2 $3",["7(?:0[2-7]|2[0579]|3[057-9]|4[0-389]|6[0-35-9]|[57]|8[0-79])|8(?:0[015689]|1[0-57-9]|2[2356-9]|3[0-57-9]|[45]|6[02457-9]|7[1-69]|8[0124-9]|9[02-9])|9","7(?:0(?:2[2-9]|[3-6]|7[01])|2(?:0[04-9]|5[09]|7[5-8]|9[389])|3(?:0[1-9]|[58]|7[3679]|9[689])|4(?:0[1-9]|1[15-9]|[29][89]|39|8[389])|5(?:[034678]|2[03-9]|5[017-9]|9[7-9])|6(?:0[0-27]|1[0-257-9]|2[0-4]|3[19]|5[4589]|[6-9])|7(?:0[2-9]|[1-79]|8[1-9])|8(?:[0-7]|9[013-9]))|8(?:0(?:[01589]|6[67])|1(?:[02-589]|1[0135-9]|7[0-79])|2(?:[236-9]|5[1-9])|3(?:[0357-9]|4[1-9])|[45]|6[02457-9]|7[1-69]|8(?:[0-26-9]|44|5[2-9])|9(?:[035-9]|2[2-9]|4[0-8]))|9"],
"0$1","",1],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["11|2[02]|33|4[04]|79|80[2-46]"],"0$1","",1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1(?:2[0-249]|3[0-25]|4[145]|[569][14]|7[1257]|8[1346]|[68][1-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[126-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:[136][25]|22|4[28]|5[12]|[78]1|9[15])|6(?:12|[2345]1|57|6[13]|7[14]|80)"],"0$1","",1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",
["7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1|88)","7(?:12|2[14]|3[134]|4[47]|5(?:1|5[2-6])|[67]1|88)"],"0$1","",1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)"],"0$1","",1],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:[23579]|[468][1-9])|[2-8]"],"0$1","",1],[,"(1600)(\\d{2})(\\d{4})","$1 $2 $3",["160","1600"],"$1","",1],[,"(1800)(\\d{4,5})","$1 $2",["180","1800"],"$1","",1],[,"(18[06]0)(\\d{2,4})(\\d{4})","$1 $2 $3",["18[06]","18[06]0"],"$1","",1],[,"(140)(\\d{3})(\\d{4})",
"$1 $2 $3",["140"],"$1","",1],[,"(\\d{4})(\\d{3})(\\d{4})(\\d{2})","$1 $2 $3 $4",["18[06]","18(?:03|6[12])"],"$1","",1]],,[,,"NA","NA"],,,[,,"1(?:600\\d{6}|8(?:0(?:0\\d{4,8}|3\\d{9})|6(?:0\\d{7}|[12]\\d{9})))","\\d{8,13}",,,"1800123456"],[,,"140\\d{7}","\\d{10}",,,"1409305260"],,,[,,"NA","NA"]],IO:[,[,,"3\\d{6}","\\d{7}"],[,,"37\\d{5}","\\d{7}",,,"3709100"],[,,"38\\d{5}","\\d{7}",,,"3801234"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"IO",246,"00",,,,,,,,[[,"(\\d{3})(\\d{4})",
"$1 $2",,"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],IQ:[,[,,"[1-7]\\d{7,9}","\\d{6,10}"],[,,"1\\d{7}|(?:2[13-5]|3[02367]|4[023]|5[03]|6[026])\\d{6,7}","\\d{6,9}",,,"12345678"],[,,"7[3-9]\\d{8}","\\d{10}",,,"7912345678"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"IQ",964,"00","0",,,"0",,,,[[,"(1)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1","",0],[,"([2-6]\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-6]"],"0$1","",0],[,"(7\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",
["7"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],IR:[,[,,"[14-8]\\d{6,9}|[23]\\d{4,9}|9(?:[1-4]\\d{8}|9\\d{2,8})","\\d{4,10}"],[,,"1(?:[13-589][12]|[27][1-4])\\d{7}|2(?:1\\d{3,8}|3[12]\\d{7}|4(?:1\\d{4,7}|2\\d{7})|5(?:1\\d{3,7}|[2356]\\d{7})|6\\d{8}|7[34]\\d{7}|[89][12]\\d{7})|3(?:1(?:1\\d{4,7}|2\\d{7})|2[1-4]\\d{7}|3(?:[125]\\d{7}|4\\d{6,7})|4(?:1\\d{6,7}[24-9]\\d{7})|5(?:1\\d{4,7}|[23]\\d{7})|[6-9][12]\\d{7})|4(?:[135-9][12]\\d{7}|2[1-467]\\d{7}|4(?:1\\d{4,7}|[2-4]\\d{7}))|5(?:1(?:1\\d{4,7}|2\\d{7})|2[89]\\d{7}|3[1-5]\\d{7}|4(?:1\\d{4,7}|[2-8]\\d{7})|[5-7][12]\\d{7}|8[1245]\\d{7})|6(?:1(?:1\\d{6,7}|2\\d{7})|[347-9][12]\\d{7}|5(?:1\\d{7}|2\\d{6,7})|6[1-6]\\d{7})|7(?:[13589][12]|2[1289]|4[1-4]|6[1-6]|7[1-3])\\d{7}|8(?:[145][12]|3[124578]|6[1256]|7[1245])\\d{7}",
"\\d{5,10}",,,"2123456789"],[,,"9[1-3]\\d{8}","\\d{10}",,,"9123456789"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"(?:[2-6]0\\d|993)\\d{7}","\\d{10}",,,"9932123456"],"IR",98,"00","0",,,"0",,,,[[,"(2[15])(\\d{3,5})","$1 $2",["2(?:1|5[0-47-9])"],"0$1","",0],[,"(2[15])(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:1|5[0-47-9])"],"0$1","",0],[,"(2\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2(?:[16]|5[0-47-9])"],"0$1","",0],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[13-9]|2[02-57-9]"],"0$1","",0],[,"(\\d{3})(\\d{2})(\\d{2,3})",
"$1 $2 $3",["[13-9]|2[02-57-9]"],"0$1","",0],[,"(\\d{3})(\\d{3})","$1 $2",["[13-9]|2[02-57-9]"],"0$1","",0]],,[,,"943\\d{7}","\\d{10}",,,"9432123456"],,,[,,"NA","NA"],[,,"9990\\d{0,6}","\\d{4,10}",,,"9990123456"],,,[,,"NA","NA"]],IS:[,[,,"[4-9]\\d{6}|38\\d{7}","\\d{7,9}"],[,,"(?:4(?:[14][0-245]|2[0-7]|[37][0-8]|5[0-3568]|6\\d|8[0-36-8])|5(?:05|[156]\\d|2[02578]|3[013-7]|4[03-7]|7[0-2578]|8[0-35-9]|9[013-689])|87[23])\\d{4}","\\d{7}",,,"4101234"],[,,"38[589]\\d{6}|(?:6(?:1[0-8]|3[0-27-9]|4[0-27]|5[0-29]|[67][0-69]|9\\d)|7(?:5[057]|7\\d|8[0-3])|8(?:2[0-5]|[469]\\d|5[1-9]))\\d{4}",
"\\d{7,9}",,,"6101234"],[,,"800\\d{4}","\\d{7}",,,"8001234"],[,,"90\\d{5}","\\d{7}",,,"9011234"],[,,"NA","NA"],[,,"NA","NA"],[,,"49[0-24-79]\\d{4}","\\d{7}",,,"4921234"],"IS",354,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[4-9]"],"","",0],[,"(3\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["3"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"(?:6(?:2[0-8]|49|8\\d)|8(?:2[6-9]|[38]\\d|50|7[014-9])|95[48])\\d{4}","\\d{7}",,,"6201234"]],IT:[,[,,"[01589]\\d{5,10}|3(?:[12457-9]\\d{8}|[36]\\d{7,9})",
"\\d{6,11}"],[,,"0(?:[26]\\d{4,9}|(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2346]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[34578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7})","\\d{6,11}",,,"0212345678"],[,,"3(?:[12457-9]\\d{8}|6\\d{7,8}|3\\d{7,9})","\\d{9,11}",,,"3123456789"],
[,,"80(?:0\\d{6}|3\\d{3})","\\d{6,9}",,,"800123456"],[,,"0878\\d{5}|1(?:44|6[346])\\d{6}|89(?:2\\d{3}|4(?:[0-4]\\d{2}|[5-9]\\d{4})|5(?:[0-4]\\d{2}|[5-9]\\d{6})|9\\d{6})","\\d{6,10}",,,"899123456"],[,,"84(?:[08]\\d{6}|[17]\\d{3})","\\d{6,9}",,,"848123456"],[,,"1(?:78\\d|99)\\d{6}","\\d{9,10}",,,"1781234567"],[,,"55\\d{8}","\\d{10}",,,"5512345678"],"IT",39,"00",,,,,,,,[[,"(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[26]|55"],"","",0],[,"(0[26])(\\d{4})(\\d{5})","$1 $2 $3",["0[26]"],"","",0],[,"(0[26])(\\d{4,6})",
"$1 $2",["0[26]"],"","",0],[,"(0\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[13-57-9][0159]"],"","",0],[,"(\\d{3})(\\d{3,6})","$1 $2",["0[13-57-9][0159]|8(?:03|4[17]|9[245])","0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"],"","",0],[,"(0\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["0[13-57-9][2-46-8]"],"","",0],[,"(0\\d{3})(\\d{2,6})","$1 $2",["0[13-57-9][2-46-8]"],"","",0],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[13]|8(?:00|4[08]|9[59])","[13]|8(?:00|4[08]|9(?:5[5-9]|9))"],"","",0],[,"(\\d{4})(\\d{4})",
"$1 $2",["894","894[5-9]"],"","",0],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["3"],"","",0]],,[,,"NA","NA"],,,[,,"848\\d{6}","\\d{9}",,,"848123456"],[,,"NA","NA"],1,,[,,"NA","NA"]],JE:[,[,,"[135789]\\d{6,9}","\\d{6,10}"],[,,"1534\\d{6}","\\d{6,10}",,,"1534456789"],[,,"7(?:509|7(?:00|97)|829|937)\\d{6}","\\d{10}",,,"7797123456"],[,,"80(?:07(?:35|81)|8901)\\d{4}","\\d{10}",,,"8007354567"],[,,"(?:871206|90(?:066[59]|1810|71(?:07|55)))\\d{4}","\\d{10}",,,"9018105678"],[,,"8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|70002)\\d{4}",
"\\d{10}",,,"8447034567"],[,,"701511\\d{4}","\\d{10}",,,"7015115678"],[,,"56\\d{8}","\\d{10}",,,"5612345678"],"JE",44,"00","0"," x",,"0",,,,,,[,,"76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}","\\d{10}",,,"7640123456"],,,[,,"NA","NA"],[,,"3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))\\d{4}|55\\d{8}","\\d{10}",,,"5512345678"],,,[,,"NA","NA"]],JM:[,[,,"[589]\\d{9}","\\d{7}(?:\\d{3})?"],[,,"876(?:5(?:0[12]|1[0-468]|2[35]|63)|6(?:0[1-3579]|1[027-9]|[23]\\d|40|5[06]|6[2-589]|7[05]|8[04]|9[4-9])|7(?:0[2-689]|[1-6]\\d|8[056]|9[45])|9(?:0[1-8]|1[02378]|[2-8]\\d|9[2-468]))\\d{4}",
"\\d{7}(?:\\d{3})?",,,"8765123456"],[,,"876(?:2[1789]\\d|[348]\\d{2}|5(?:08|27|6[0-24-9]|[3-578]\\d)|7(?:0[07]|7\\d|8[1-47-9]|9[0-36-9])|9(?:[01]9|9[0579]))\\d{4}","\\d{10}",,,"8762101234"],[,,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",,,"8002123456"],[,,"900[2-9]\\d{6}","\\d{10}",,,"9002123456"],[,,"NA","NA"],[,,"5(?:00|33|44|66|77)[2-9]\\d{6}","\\d{10}",,,"5002345678"],[,,"NA","NA"],"JM",1,"011","1",,,"1",,,,,,[,,"NA","NA"],,"876",[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],JO:[,[,,"[235-9]\\d{7,8}",
"\\d{7,9}"],[,,"(?:2(?:6(?:2[0-35-9]|3[0-57-8]|4[24-7]|5[0-24-8]|[6-8][02]|9[0-2])|7(?:0[1-79]|10|2[014-7]|3[0-689]|4[019]|5[0-3578]))|32(?:0[1-69]|1[1-35-7]|2[024-7]|3\\d|4[0-2]|[57][02]|60)|53(?:0[0-2]|[13][02]|2[0-59]|49|5[0-35-9]|6[15]|7[45]|8[1-6]|9[0-36-9])|6(?:2[50]0|300|4(?:0[0125]|1[2-7]|2[0569]|[38][07-9]|4[025689]|6[0-589]|7\\d|9[0-2])|5(?:[01][056]|2[034]|3[0-57-9]|4[17-8]|5[0-69]|6[0-35-9]|7[1-379]|8[0-68]|9[02-39]))|87(?:[02]0|7[08]|9[09]))\\d{4}","\\d{7,8}",,,"62001234"],[,,"7(?:55|7[25-9]|8[05-9]|9[015-9])\\d{6}",
"\\d{9}",,,"790123456"],[,,"80\\d{6}","\\d{8}",,,"80012345"],[,,"900\\d{5}","\\d{8}",,,"90012345"],[,,"85\\d{6}","\\d{8}",,,"85012345"],[,,"70\\d{7}","\\d{9}",,,"700123456"],[,,"NA","NA"],"JO",962,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2356]|87"],"(0$1)","",0],[,"(7)(\\d{4})(\\d{4})","$1 $2 $3",["7[457-9]"],"0$1","",0],[,"(\\d{3})(\\d{5,6})","$1 $2",["70|8[0158]|9"],"0$1","",0]],,[,,"74(?:66|77)\\d{5}","\\d{9}",,,"746612345"],,,[,,"NA","NA"],[,,"8(?:10|8\\d)\\d{5}","\\d{8}",,,
"88101234"],,,[,,"NA","NA"]],JP:[,[,,"[1-9]\\d{8,9}|00(?:[36]\\d{7,14}|7\\d{5,7}|8\\d{7})","\\d{8,17}"],[,,"(?:1(?:1[235-8]|2[3-6]|3[3-9]|4[2-6]|[58][2-8]|6[2-7]|7[2-9]|9[1-9])|2[2-9]\\d|[36][1-9]\\d|4(?:6[02-8]|[2-578]\\d|9[2-59])|5(?:6[1-9]|7[2-8]|[2-589]\\d)|7(?:3[4-9]|4[02-9]|[25-9]\\d)|8(?:3[2-9]|4[5-9]|5[1-9]|8[03-9]|[2679]\\d)|9(?:[679][1-9]|[2-58]\\d))\\d{6}","\\d{9}",,,"312345678"],[,,"[7-9]0[1-9]\\d{7}","\\d{10}",,,"7012345678"],[,,"120\\d{6}|800\\d{7}|00(?:37\\d{6,13}|66\\d{6,13}|777(?:[01]\\d{2}|5\\d{3}|8\\d{4})|882[1245]\\d{4})",
"\\d{8,17}",,,"120123456"],[,,"990\\d{6}","\\d{9}",,,"990123456"],[,,"NA","NA"],[,,"60\\d{7}","\\d{9}",,,"601234567"],[,,"50[1-9]\\d{7}","\\d{10}",,,"5012345678"],"JP",81,"010","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3",["(?:12|57|99)0"],"0$1","",0],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["800"],"0$1","",0],[,"(\\d{4})(\\d{4})","$1-$2",["0077"],"$1","",0],[,"(\\d{4})(\\d{2})(\\d{3,4})","$1-$2-$3",["0077"],"$1","",0],[,"(\\d{4})(\\d{2})(\\d{4})","$1-$2-$3",["0088"],"$1","",0],[,"(\\d{4})(\\d{3})(\\d{3,4})",
"$1-$2-$3",["00(?:37|66)"],"$1","",0],[,"(\\d{4})(\\d{4})(\\d{4,5})","$1-$2-$3",["00(?:37|66)"],"$1","",0],[,"(\\d{4})(\\d{5})(\\d{5,6})","$1-$2-$3",["00(?:37|66)"],"$1","",0],[,"(\\d{4})(\\d{6})(\\d{6,7})","$1-$2-$3",["00(?:37|66)"],"$1","",0],[,"(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[2579]0|80[1-9]"],"0$1","",0],[,"(\\d{4})(\\d)(\\d{4})","$1-$2-$3",["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|5(?:76|97)|499|746|8(?:3[89]|63|47|51)|9(?:49|80|9[16])","1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|5(?:76|97)9|499[2468]|7468|8(?:3(?:8[78]|96)|636|477|51[24])|9(?:496|802|9(?:1[23]|69))",
"1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|5(?:769|979[2-69])|499[2468]|7468|8(?:3(?:8[78]|96[2457-9])|636[2-57-9]|477|51[24])|9(?:496|802|9(?:1[23]|69))"],"0$1","",0],[,"(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["1(?:2[3-6]|3[3-9]|4[2-6]|5[2-8]|[68][2-7]|7[2-689]|9[1-578])|2(?:2[03-689]|3[3-58]|4[0-468]|5[04-8]|6[013-8]|7[06-9]|8[02-57-9]|9[13])|4(?:2[28]|3[689]|6[035-7]|7[05689]|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9[4-9])|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9[014-9])|8(?:2[49]|3[3-8]|4[5-8]|5[2-9]|6[35-9]|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9[3-7])",
"1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9[2-8])|3(?:7[2-6]|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5[4-7]|6[2-9]|8[2-8]|9[236-9])|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3[34]|[4-7]))",
"1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:[3578]|20|4[04-9]|6[56]))|3(?:7(?:[2-5]|6[0-59])|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))",
"1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:[3578]|20|4[04-9]|6(?:5[25]|60)))|3(?:7(?:[2-5]|6[0-59])|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))"],
"0$1","",0],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["1|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5(?:[2-589]|39)|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93)","1|2(?:2[37]|5(?:[57]|[68]0|9[19])|64|78|8[39]|917)|4(?:2(?:[68]|20|9[178])|64|7[347])|5(?:[2-589]|39[67])|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93[34])","1|2(?:2[37]|5(?:[57]|[68]0|9(?:17|99))|64|78|8[39]|917)|4(?:2(?:[68]|20|9[178])|64|7[347])|5(?:[2-589]|39[67])|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93(?:31|4))"],
"0$1","",0],[,"(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["2(?:9[14-79]|74|[34]7|[56]9)|82|993"],"0$1","",0],[,"(\\d)(\\d{4})(\\d{4})","$1-$2-$3",["3|4(?:2[09]|7[01])|6[1-9]"],"0$1","",0],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[2479][1-9]"],"0$1","",0]],[[,"(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3",["(?:12|57|99)0"],"0$1","",0],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["800"],"0$1","",0],[,"(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[2579]0|80[1-9]"],"0$1","",0],[,"(\\d{4})(\\d)(\\d{4})","$1-$2-$3",["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|5(?:76|97)|499|746|8(?:3[89]|63|47|51)|9(?:49|80|9[16])",
"1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|5(?:76|97)9|499[2468]|7468|8(?:3(?:8[78]|96)|636|477|51[24])|9(?:496|802|9(?:1[23]|69))","1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|5(?:769|979[2-69])|499[2468]|7468|8(?:3(?:8[78]|96[2457-9])|636[2-57-9]|477|51[24])|9(?:496|802|9(?:1[23]|69))"],"0$1","",0],[,"(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["1(?:2[3-6]|3[3-9]|4[2-6]|5[2-8]|[68][2-7]|7[2-689]|9[1-578])|2(?:2[03-689]|3[3-58]|4[0-468]|5[04-8]|6[013-8]|7[06-9]|8[02-57-9]|9[13])|4(?:2[28]|3[689]|6[035-7]|7[05689]|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9[4-9])|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9[014-9])|8(?:2[49]|3[3-8]|4[5-8]|5[2-9]|6[35-9]|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9[3-7])",
"1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9[2-8])|3(?:7[2-6]|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5[4-7]|6[2-9]|8[2-8]|9[236-9])|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3[34]|[4-7]))",
"1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:[3578]|20|4[04-9]|6[56]))|3(?:7(?:[2-5]|6[0-59])|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))",
"1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:[3578]|20|4[04-9]|6(?:5[25]|60)))|3(?:7(?:[2-5]|6[0-59])|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))"],
"0$1","",0],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["1|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5(?:[2-589]|39)|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93)","1|2(?:2[37]|5(?:[57]|[68]0|9[19])|64|78|8[39]|917)|4(?:2(?:[68]|20|9[178])|64|7[347])|5(?:[2-589]|39[67])|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93[34])","1|2(?:2[37]|5(?:[57]|[68]0|9(?:17|99))|64|78|8[39]|917)|4(?:2(?:[68]|20|9[178])|64|7[347])|5(?:[2-589]|39[67])|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93(?:31|4))"],
"0$1","",0],[,"(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["2(?:9[14-79]|74|[34]7|[56]9)|82|993"],"0$1","",0],[,"(\\d)(\\d{4})(\\d{4})","$1-$2-$3",["3|4(?:2[09]|7[01])|6[1-9]"],"0$1","",0],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[2479][1-9]"],"0$1","",0]],[,,"20\\d{8}","\\d{10}",,,"2012345678"],,,[,,"00(?:37\\d{6,13}|66\\d{6,13}|777(?:[01]\\d{2}|5\\d{3}|8\\d{4})|882[1245]\\d{4})","\\d{8,17}",,,"00777012"],[,,"570\\d{6}","\\d{9}",,,"570123456"],1,,[,,"NA","NA"]],KE:[,[,,"20\\d{6,7}|[4-9]\\d{6,9}","\\d{7,10}"],
[,,"20\\d{6,7}|4(?:[0136]\\d{7}|[245]\\d{5,7})|5(?:[08]\\d{7}|[1-79]\\d{5,7})|6(?:[01457-9]\\d{5,7}|[26]\\d{7})","\\d{7,9}",,,"202012345"],[,,"7(?:[0-3]\\d|5[0-6]|7[0-5]|8[0-25-9])\\d{6}","\\d{9}",,,"712123456"],[,,"800[24-8]\\d{5,6}","\\d{9,10}",,,"800223456"],[,,"900[02-9]\\d{5}","\\d{9}",,,"900223456"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"KE",254,"000","0",,,"0",,,,[[,"(\\d{2})(\\d{5,7})","$1 $2",["[24-6]"],"0$1","",0],[,"(\\d{3})(\\d{6,7})","$1 $2",["7"],"0$1","",0],[,"(\\d{3})(\\d{3})(\\d{3,4})",
"$1 $2 $3",["[89]"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],KG:[,[,,"[235-8]\\d{8,9}","\\d{5,10}"],[,,"(?:3(?:1(?:[256]\\d|3[1-9]|47)|2(?:22|3[0-479]|6[0-7])|4(?:22|5[6-9]|6\\d)|5(?:22|3[4-7]|59|6\\d)|6(?:22|5[35-7]|6\\d)|7(?:22|3[468]|4[1-9]|59|[67]\\d)|9(?:22|4[1-8]|6\\d))|6(?:09|12|2[2-4])\\d)\\d{5}","\\d{5,10}",,,"312123456"],[,,"(?:20[0-35]|5[124-7]\\d|7[07]\\d)\\d{6}","\\d{9}",,,"700123456"],[,,"800\\d{6,7}","\\d{9,10}",,,"800123456"],[,,"NA","NA"],[,,"NA",
"NA"],[,,"NA","NA"],[,,"NA","NA"],"KG",996,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[25-7]|31[25]"],"0$1","",0],[,"(\\d{4})(\\d{5})","$1 $2",["3(?:1[36]|[2-9])"],"0$1","",0],[,"(\\d{3})(\\d{3})(\\d)(\\d{3})","$1 $2 $3 $4",["8"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],KH:[,[,,"[1-9]\\d{7,9}","\\d{6,10}"],[,,"(?:2[3-6]|3[2-6]|4[2-4]|[5-7][2-5])(?:[237-9]|4[56]|5\\d|6\\d?)\\d{5}|23(?:4[234]|8\\d{2})\\d{4}","\\d{6,9}",,,"23756789"],[,,"(?:1(?:[013-9]|2\\d?)|3[18]\\d|6[016-9]|7(?:[07-9]|6\\d)|8(?:[013-79]|8\\d)|9(?:6\\d|7\\d?|[0-589]))\\d{6}",
"\\d{8,9}",,,"91234567"],[,,"1800(?:1\\d|2[019])\\d{4}","\\d{10}",,,"1800123456"],[,,"1900(?:1\\d|2[09])\\d{4}","\\d{10}",,,"1900123456"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"KH",855,"00[14-9]","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["1\\d[1-9]|[2-9]"],"0$1","",0],[,"(1[89]00)(\\d{3})(\\d{3})","$1 $2 $3",["1[89]0"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],KI:[,[,,"[2458]\\d{4}|3\\d{4,7}|7\\d{7}","\\d{5,8}"],[,,"(?:[24]\\d|3[1-9]|50|8[0-5])\\d{3}",
"\\d{5}",,,"31234"],[,,"7(?:[24]\\d|3[1-9]|8[0-5])\\d{5}","\\d{8}",,,"72012345"],[,,"NA","NA"],[,,"3001\\d{4}","\\d{5,8}",,,"30010000"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"KI",686,"00",,,,"0",,,,,,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],KM:[,[,,"[379]\\d{6}","\\d{7}"],[,,"7(?:6[0-37-9]|7[0-57-9])\\d{4}","\\d{7}",,,"7712345"],[,,"3[234]\\d{5}","\\d{7}",,,"3212345"],[,,"NA","NA"],[,,"(?:39[01]|9[01]0)\\d{4}","\\d{7}",,,"9001234"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],
"KM",269,"00",,,,,,,,[[,"(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",,"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],KN:[,[,,"[589]\\d{9}","\\d{7}(?:\\d{3})?"],[,,"869(?:2(?:29|36)|302|4(?:6[015-9]|70))\\d{4}","\\d{7}(?:\\d{3})?",,,"8692361234"],[,,"869(?:5(?:5[6-8]|6[5-7])|66\\d|76[02-6])\\d{4}","\\d{10}",,,"8697652917"],[,,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",,,"8002123456"],[,,"900[2-9]\\d{6}","\\d{10}",,,"9002123456"],[,,"NA","NA"],[,,"5(?:00|33|44|66|77)[2-9]\\d{6}",
"\\d{10}",,,"5002345678"],[,,"NA","NA"],"KN",1,"011","1",,,"1",,,,,,[,,"NA","NA"],,"869",[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],KP:[,[,,"1\\d{9}|[28]\\d{7}","\\d{6,8}|\\d{10}"],[,,"2\\d{7}|85\\d{6}","\\d{6,8}",,,"21234567"],[,,"19[123]\\d{7}","\\d{10}",,,"1921234567"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"KP",850,"00|99","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1","",0],[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"0$1","",0],[,"(\\d{2})(\\d{3})(\\d{3})",
"$1 $2 $3",["8"],"0$1","",0]],,[,,"NA","NA"],,,[,,"2(?:[0-24-9]\\d{2}|3(?:[0-79]\\d|8[02-9]))\\d{4}","\\d{8}",,,"23821234"],[,,"NA","NA"],,,[,,"NA","NA"]],KR:[,[,,"[1-7]\\d{3,9}|8\\d{8}","\\d{4,10}"],[,,"(?:2|3[1-3]|[46][1-4]|5[1-5])(?:1\\d{2,3}|[1-9]\\d{6,7})","\\d{4,10}",,,"22123456"],[,,"1[0-26-9]\\d{7,8}","\\d{9,10}",,,"1023456789"],[,,"80\\d{7}","\\d{9}",,,"801234567"],[,,"60[2-9]\\d{6}","\\d{9}",,,"602345678"],[,,"NA","NA"],[,,"50\\d{8}","\\d{10}",,,"5012345678"],[,,"70\\d{8}","\\d{10}",,,"7012345678"],
"KR",82,"00(?:[124-68]|[37]\\d{2})","0",,,"0(8[1-46-8]|85\\d{2})?",,,,[[,"(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["1(?:0|1[19]|[69]9|5[458])|[57]0","1(?:0|1[19]|[69]9|5(?:44|59|8))|[57]0"],"0$1","0$CC-$1",0],[,"(\\d{2})(\\d{3,4})(\\d{4})","$1-$2-$3",["1(?:[169][2-8]|[78]|5[1-4])|[68]0|[3-6][1-9][1-9]","1(?:[169][2-8]|[78]|5(?:[1-3]|4[56]))|[68]0|[3-6][1-9][1-9]"],"0$1","0$CC-$1",0],[,"(\\d{3})(\\d)(\\d{4})","$1-$2-$3",["131","1312"],"0$1","0$CC-$1",0],[,"(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["131",
"131[13-9]"],"0$1","0$CC-$1",0],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["13[2-9]"],"0$1","0$CC-$1",0],[,"(\\d{2})(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3-$4",["30"],"0$1","0$CC-$1",0],[,"(\\d)(\\d{3,4})(\\d{4})","$1-$2-$3",["2[1-9]"],"0$1","0$CC-$1",0],[,"(\\d)(\\d{3,4})","$1-$2",["21[0-46-9]"],"0$1","0$CC-$1",0],[,"(\\d{2})(\\d{3,4})","$1-$2",["[3-6][1-9]1","[3-6][1-9]1(?:[0-46-9])"],"0$1","0$CC-$1",0],[,"(\\d{4})(\\d{4})","$1-$2",["1(?:5[46-9]|6[04678])","1(?:5(?:44|66|77|88|99)|6(?:00|44|6[16]|70|88))"],
"$1","0$CC-$1",0]],,[,,"15\\d{7,8}","\\d{9,10}",,,"1523456789"],,,[,,"NA","NA"],[,,"1(?:5(?:44|66|77|88|99)|6(?:00|44|6[16]|70|88))\\d{4}","\\d{8}",,,"15441234"],,,[,,"NA","NA"]],KW:[,[,,"[12569]\\d{6,7}","\\d{7,8}"],[,,"(?:18\\d|2(?:[23]\\d{2}|4(?:[1-35-9]\\d|44)|5(?:0[034]|[2-46]\\d|5[1-3]|7[1-7])))\\d{4}","\\d{7,8}",,,"22345678"],[,,"(?:5(?:[05]\\d|1[0-6])|6(?:0[034679]|5[015-9]|6\\d|7[067]|9[0369])|9(?:0[09]|4[049]|55|6[069]|[79]\\d|8[089]))\\d{5}","\\d{8}",,,"50012345"],[,,"NA","NA"],[,,"NA",
"NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"KW",965,"00",,,,,,,,[[,"(\\d{4})(\\d{3,4})","$1 $2",["[1269]"],"","",0],[,"(5[015]\\d)(\\d{5})","$1 $2",["5"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],KY:[,[,,"[3589]\\d{9}","\\d{7}(?:\\d{3})?"],[,,"345(?:2(?:22|44)|444|6(?:23|38|40)|7(?:4[35-79]|6[6-9]|77)|8(?:00|1[45]|25|[48]8)|9(?:14|4[035-9]))\\d{4}","\\d{7}(?:\\d{3})?",,,"3452221234"],[,,"345(?:32[1-9]|5(?:1[67]|2[5-7]|4[6-8]|76)|9(?:1[67]|2[3-9]|3[689]))\\d{4}",
"\\d{10}",,,"3453231234"],[,,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",,,"8002345678"],[,,"900[2-9]\\d{6}|345976\\d{4}","\\d{10}",,,"9002345678"],[,,"NA","NA"],[,,"5(?:00|33|44|66|77)[2-9]\\d{6}","\\d{10}",,,"5002345678"],[,,"NA","NA"],"KY",1,"011","1",,,"1",,,,,,[,,"345849\\d{4}","\\d{10}",,,"3458491234"],,"345",[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],KZ:[,[,,"(?:33\\d|7\\d{2}|80[09])\\d{7}","\\d{10}"],[,,"33622\\d{5}|7(?:1(?:0(?:[23]\\d|4[023]|59|63)|1(?:[23]\\d|4[0-79]|59)|2(?:[23]\\d|59)|3(?:2\\d|3[1-79]|4[0-35-9]|59)|4(?:2\\d|3[013-79]|4[0-8]|5[1-79])|5(?:2\\d|3[1-8]|4[1-7]|59)|6(?:[234]\\d|5[19]|61)|72\\d|8(?:[27]\\d|3[1-46-9]|4[0-5]))|2(?:1(?:[23]\\d|4[46-9]|5[3469])|2(?:2\\d|3[0679]|46|5[12679])|3(?:[234]\\d|5[139])|4(?:2\\d|3[1235-9]|59)|5(?:[23]\\d|4[01246-8]|59|61)|6(?:2\\d|3[1-9]|4[0-4]|59)|7(?:[237]\\d|40|5[279])|8(?:[23]\\d|4[0-3]|59)|9(?:2\\d|3[124578]|59)))\\d{5}",
"\\d{10}",,,"7123456789"],[,,"7(?:0[01257]|47|6[02-4]|7[15-8]|85)\\d{7}","\\d{10}",,,"7710009998"],[,,"800\\d{7}","\\d{10}",,,"8001234567"],[,,"809\\d{7}","\\d{10}",,,"8091234567"],[,,"NA","NA"],[,,"NA","NA"],[,,"751\\d{7}","\\d{10}",,,"7511234567"],"KZ",7,"810","8",,,"8",,"8~10",,,,[,,"NA","NA"],,,[,,"751\\d{7}","\\d{10}",,,"7511234567"],[,,"NA","NA"],,,[,,"NA","NA"]],LA:[,[,,"[2-8]\\d{7,9}","\\d{6,10}"],[,,"(?:2[13]|3(?:0\\d|[14])|[5-7][14]|41|8[1468])\\d{6}","\\d{6,9}",,,"21212862"],[,,"20(?:2[2389]|5[4-689]|7[6-8]|9[57-9])\\d{6}",
"\\d{10}",,,"2023123456"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"LA",856,"00","0",,,"0",,,,[[,"(20)(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["20"],"0$1","",0],[,"([2-8]\\d)(\\d{3})(\\d{3})","$1 $2 $3",["2[13]|3[14]|[4-8]"],"0$1","",0],[,"(30)(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["30"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],LB:[,[,,"[13-9]\\d{6,7}","\\d{7,8}"],[,,"(?:[14-6]\\d{2}|7(?:[2-579]\\d|62|8[0-7])|[89][2-9]\\d)\\d{4}","\\d{7}",
,,"1123456"],[,,"(?:3\\d|7(?:[019]\\d|6[013-9]|8[89]))\\d{5}","\\d{7,8}",,,"71123456"],[,,"NA","NA"],[,,"9[01]\\d{6}","\\d{8}",,,"90123456"],[,,"8[01]\\d{6}","\\d{8}",,,"80123456"],[,,"NA","NA"],[,,"NA","NA"],"LB",961,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[13-6]|7(?:[2-579]|62|8[0-7])|[89][2-9]"],"0$1","",0],[,"([7-9]\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[89][01]|7(?:[019]|6[013-9]|8[89])"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],LC:[,[,,"[5789]\\d{9}",
"\\d{7}(?:\\d{3})?"],[,,"758(?:4(?:30|5[0-9]|6[2-9]|8[0-2])|57[0-2]|638)\\d{4}","\\d{7}(?:\\d{3})?",,,"7584305678"],[,,"758(?:28[4-7]|384|4(?:6[01]|8[4-9])|5(?:1[89]|20|84)|7(?:1[2-9]|2[0-8]))\\d{4}","\\d{10}",,,"7582845678"],[,,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",,,"8002123456"],[,,"900[2-9]\\d{6}","\\d{10}",,,"9002123456"],[,,"NA","NA"],[,,"5(?:00|33|44|66|77)[2-9]\\d{6}","\\d{10}",,,"5002345678"],[,,"NA","NA"],"LC",1,"011","1",,,"1",,,,,,[,,"NA","NA"],,"758",[,,"NA","NA"],[,,"NA","NA"],
,,[,,"NA","NA"]],LI:[,[,,"6\\d{8}|[23789]\\d{6}","\\d{7,9}"],[,,"(?:2(?:01|1[27]|3\\d|6[02-578]|96)|3(?:7[0135-7]|8[048]|9[0269]))\\d{4}","\\d{7}",,,"2345678"],[,,"6(?:51[01]|6(?:[01][0-4]|2[016-9]|88)|710)\\d{5}|7(?:36|4[25]|56|[7-9]\\d)\\d{4}","\\d{7,9}",,,"661234567"],[,,"80(?:0(?:2[238]|79)|9\\d{2})\\d{2}","\\d{7}",,,"8002222"],[,,"90(?:0(?:2[278]|79)|1(?:23|3[012])|6(?:4\\d|6[0126]))\\d{2}","\\d{7}",,,"9002222"],[,,"NA","NA"],[,,"701\\d{4}","\\d{7}",,,"7011234"],[,,"NA","NA"],"LI",423,"00","0",
,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[23]|7[3-57-9]|87"],"","",0],[,"(6\\d)(\\d{3})(\\d{3})","$1 $2 $3",["6"],"","",0],[,"(6[567]\\d)(\\d{3})(\\d{3})","$1 $2 $3",["6[567]"],"","",0],[,"(69)(7\\d{2})(\\d{4})","$1 $2 $3",["697"],"","",0],[,"([7-9]0\\d)(\\d{2})(\\d{2})","$1 $2 $3",["[7-9]0"],"","",0],[,"([89]0\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[89]0"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"87(?:0[128]|7[0-4])\\d{3}","\\d{7}",,,"8770123"],,,[,,"697(?:[35]6|4[25]|[7-9]\\d)\\d{4}",
"\\d{9}",,,"697361234"]],LK:[,[,,"[1-9]\\d{8}","\\d{7,9}"],[,,"(?:[189]1|2[13-7]|3[1-8]|4[157]|5[12457]|6[35-7])[2-57]\\d{6}","\\d{7,9}",,,"112345678"],[,,"7[125-8]\\d{7}","\\d{9}",,,"712345678"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"LK",94,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{1})(\\d{6})","$1 $2 $3",["[1-689]"],"0$1","",0],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],LR:[,[,,"2\\d{7}|[37-9]\\d{8}|[45]\\d{6}",
"\\d{7,9}"],[,,"2\\d{7}","\\d{8}",,,"21234567"],[,,"(?:330\\d|4[67]|5\\d|77\\d{2}|88\\d{2}|994\\d)\\d{5}","\\d{7,9}",,,"770123456"],[,,"NA","NA"],[,,"90[03]\\d{6}","\\d{9}",,,"900123456"],[,,"NA","NA"],[,,"NA","NA"],[,,"332(?:0[02]|5\\d)\\d{4}","\\d{9}",,,"332001234"],"LR",231,"00","0",,,"0",,,,[[,"(2\\d)(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1","",0],[,"([79]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[79]"],"0$1","",0],[,"([4-6])(\\d{3})(\\d{3})","$1 $2 $3",["[4-6]"],"0$1","",0],[,"(\\d{2})(\\d{3})(\\d{4})",
"$1 $2 $3",["[38]"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],LS:[,[,,"[2568]\\d{7}","\\d{8}"],[,,"2\\d{7}","\\d{8}",,,"22123456"],[,,"[56]\\d{7}","\\d{8}",,,"50123456"],[,,"800[256]\\d{4}","\\d{8}",,,"80021234"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"LS",266,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",,"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],LT:[,[,,"[3-9]\\d{7}","\\d{8}"],[,,"(?:3[1478]|4[124-6]|52)\\d{6}","\\d{8}",
,,"31234567"],[,,"6\\d{7}","\\d{8}",,,"61234567"],[,,"800\\d{5}","\\d{8}",,,"80012345"],[,,"9(?:0[0239]|10)\\d{5}","\\d{8}",,,"90012345"],[,,"808\\d{5}","\\d{8}",,,"80812345"],[,,"700\\d{5}","\\d{8}",,,"70012345"],[,,"NA","NA"],"LT",370,"00","8",,,"[08]",,,,[[,"([34]\\d)(\\d{6})","$1 $2",["37|4(?:1|5[45]|6[2-4])"],"(8-$1)","",1],[,"([3-6]\\d{2})(\\d{5})","$1 $2",["3[148]|4(?:[24]|6[09])|528|6"],"(8-$1)","",1],[,"([7-9]\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["[7-9]"],"8 $1","",1],[,"(5)(2\\d{2})(\\d{4})",
"$1 $2 $3",["52[0-79]"],"(8-$1)","",1]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"70[67]\\d{5}","\\d{8}",,,"70712345"],,,[,,"NA","NA"]],LU:[,[,,"[24-9]\\d{3,10}|3(?:[0-46-9]\\d{2,9}|5[013-9]\\d{1,8})","\\d{4,11}"],[,,"(?:2(?:2\\d{1,2}|3[2-9]|[67]\\d|4[1-8]\\d?|5[1-5]\\d?|9[0-24-9]\\d?)|3(?:[059][05-9]|[13]\\d|[26][015-9]|4[0-26-9]|7[0-389]|8[08])\\d?|4\\d{2,3}|5(?:[01458]\\d|[27][0-69]|3[0-3]|[69][0-7])\\d?|7(?:1[019]|2[05-9]|3[05]|[45][07-9]|[679][089]|8[06-9])\\d?|8(?:0[2-9]|1[0-36-9]|3[3-9]|[469]9|[58][7-9]|7[89])\\d?|9(?:0[89]|2[0-49]|37|49|5[0-27-9]|7[7-9]|9[0-478])\\d?)\\d{1,7}",
"\\d{4,11}",,,"27123456"],[,,"6(?:[269][18]|71)\\d{6}","\\d{9}",,,"628123456"],[,,"800\\d{5}","\\d{8}",,,"80012345"],[,,"90[01]\\d{5}","\\d{8}",,,"90012345"],[,,"801\\d{5}","\\d{8}",,,"80112345"],[,,"70\\d{6}","\\d{8}",,,"70123456"],[,,"20(?:1\\d{5}|[2-689]\\d{1,7})","\\d{4,10}",,,"20201234"],"LU",352,"00",,,,"(15(?:0[06]|1[12]|35|4[04]|55|6[26]|77|88|99)\\d)",,,,[[,"(\\d{2})(\\d{3})","$1 $2",["[2-5]|7[1-9]|[89](?:[1-9]|0[2-9])"],"","$CC $1",0],[,"(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[2-5]|7[1-9]|[89](?:[1-9]|0[2-9])"],
"","$CC $1",0],[,"(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["20"],"","$CC $1",0],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4",["2(?:[0367]|4[3-8])"],"","$CC $1",0],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["20"],"","$CC $1",0],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4 $5",["2(?:[0367]|4[3-8])"],"","$CC $1",0],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{1,4})","$1 $2 $3 $4",["2(?:[12589]|4[12])|[3-5]|7[1-9]|[89](?:[1-9]|0[2-9])"],"","$CC $1",0],[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",
["[89]0[01]|70"],"","$CC $1",0],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"],"","$CC $1",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],LV:[,[,,"[2689]\\d{7}","\\d{8}"],[,,"6[3-8]\\d{6}","\\d{8}",,,"63123456"],[,,"2\\d{7}","\\d{8}",,,"21234567"],[,,"80\\d{6}","\\d{8}",,,"80123456"],[,,"90\\d{6}","\\d{8}",,,"90123456"],[,,"81\\d{6}","\\d{8}",,,"81123456"],[,,"NA","NA"],[,,"NA","NA"],"LV",371,"00",,,,,,,,[[,"([2689]\\d)(\\d{3})(\\d{3})","$1 $2 $3",,"","",0]],,[,,"NA","NA"],,,[,,
"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],LY:[,[,,"[25679]\\d{8}","\\d{7,9}"],[,,"(?:2[1345]|5[1347]|6[123479]|71)\\d{7}","\\d{7,9}",,,"212345678"],[,,"9[1-6]\\d{7}","\\d{9}",,,"912345678"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"LY",218,"00","0",,,"0",,,,[[,"([25679]\\d)(\\d{7})","$1-$2",,"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],MA:[,[,,"[5689]\\d{8}","\\d{9}"],[,,"5(?:2(?:(?:[015-7]\\d|2[2-9]|3[2-57]|4[2-8]|8[235-7])\\d|9(?:0\\d|[89]0))|3(?:(?:[0-4]\\d|[57][2-9]|6[235-8]|9[3-9])\\d|8(?:0\\d|[89]0)))\\d{4}",
"\\d{9}",,,"520123456"],[,,"6(?:0[0-8]|[12-7]\\d|8[01]|9[2457-9])\\d{6}","\\d{9}",,,"650123456"],[,,"80\\d{7}","\\d{9}",,,"801234567"],[,,"89\\d{7}","\\d{9}",,,"891234567"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"MA",212,"00","0",,,"0",,,,[[,"([56]\\d{2})(\\d{6})","$1-$2",["5(?:2[015-7]|3[0-4])|6"],"0$1","",0],[,"([58]\\d{3})(\\d{5})","$1-$2",["5(?:2[2-489]|3[5-9])|892","5(?:2(?:[2-48]|90)|3(?:[5-79]|80))|892"],"0$1","",0],[,"(5\\d{4})(\\d{4})","$1-$2",["5(?:29|38)","5(?:29|38)[89]"],"0$1","",
0],[,"(8[09])(\\d{7})","$1-$2",["8(?:0|9[013-9])"],"0$1","",0]],,[,,"NA","NA"],1,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],MC:[,[,,"[4689]\\d{7,8}","\\d{8,9}"],[,,"9[2-47-9]\\d{6}","\\d{8}",,,"99123456"],[,,"6\\d{8}|4\\d{7}","\\d{8,9}",,,"612345678"],[,,"(?:8\\d|90)\\d{6}","\\d{8}",,,"90123456"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"MC",377,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[89]"],"$1","",0],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["4"],
"0$1","",0],[,"(6)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["6"],"0$1","",0]],,[,,"NA","NA"],,,[,,"8\\d{7}","\\d{8}"],[,,"NA","NA"],,,[,,"NA","NA"]],MD:[,[,,"[235-9]\\d{7}","\\d{8}"],[,,"(?:2(?:1[0569]|2\\d|3[015-7]|4[1-46-9]|5[0-24689]|6[2-589]|7[1-37]|9[1347-9])|5(?:33|5[257]))\\d{5}","\\d{8}",,,"22212345"],[,,"(?:562\\d|6(?:[089]\\d{2}|1[01]\\d|21\\d|50\\d|7(?:[1-6]\\d|7[0-4]))|7(?:6[07]|7[457-9]|[89]\\d)\\d)\\d{4}","\\d{8}",,,"65012345"],[,,"800\\d{5}","\\d{8}",,,"80012345"],[,,"90[056]\\d{5}",
"\\d{8}",,,"90012345"],[,,"808\\d{5}","\\d{8}",,,"80812345"],[,,"NA","NA"],[,,"3[08]\\d{6}","\\d{8}",,,"30123456"],"MD",373,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["22|3"],"0$1","",0],[,"([25-7]\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["2[13-79]|[5-7]"],"0$1","",0],[,"([89]\\d{2})(\\d{5})","$1 $2",["[89]"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"8(?:03|14)\\d{5}","\\d{8}",,,"80312345"],,,[,,"NA","NA"]],ME:[,[,,"[2-9]\\d{7,8}","\\d{6,9}"],[,,"(?:20[2-8]|3(?:0[2-7]|1[35-7]|2[3567]|3[4-7])|4(?:0[237]|1[27])|5(?:0[47]|1[27]|2[378]))\\d{5}",
"\\d{6,8}",,,"30234567"],[,,"6(?:32\\d|[89]\\d{2}|7(?:[0-8]\\d|9(?:[3-9]|[0-2]\\d)))\\d{4}","\\d{8,9}",,,"67622901"],[,,"800[28]\\d{4}","\\d{8}",,,"80080002"],[,,"(?:88\\d|9(?:4[13-8]|5[16-8]))\\d{5}","\\d{8}",,,"94515151"],[,,"NA","NA"],[,,"NA","NA"],[,,"78[1-9]\\d{5}","\\d{8}",,,"78108780"],"ME",382,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-57-9]|6[3789]","[2-57-9]|6(?:[389]|7(?:[0-8]|9[3-9]))"],"0$1","",0],[,"(67)(9)(\\d{3})(\\d{3})","$1 $2 $3 $4",["679","679[0-2]"],"0$1",
"",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"77\\d{6}","\\d{8}",,,"77273012"],,,[,,"NA","NA"]],MF:[,[,,"[56]\\d{8}","\\d{9}"],[,,"590(?:[02][79]|13|5[0-268]|[78]7)\\d{4}","\\d{9}",,,"590271234"],[,,"690(?:0[0-7]|[1-9]\\d)\\d{4}","\\d{9}",,,"690301234"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"MF",590,"00","0",,,"0",,,,,,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],MG:[,[,,"[23]\\d{8}","\\d{7,9}"],[,,"20(?:2\\d{2}|4[47]\\d|5[3467]\\d|6[279]\\d|7(?:2[29]|[35]\\d)|8[268]\\d|9[245]\\d)\\d{4}",
"\\d{7,9}",,,"202123456"],[,,"3[2-49]\\d{7}","\\d{9}",,,"321234567"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"22\\d{7}","\\d{9}",,,"221234567"],"MG",261,"00","0",,,"0",,,,[[,"([23]\\d)(\\d{2})(\\d{3})(\\d{2})","$1 $2 $3 $4",,"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],MH:[,[,,"[2-6]\\d{6}","\\d{7}"],[,,"(?:247|528|625)\\d{4}","\\d{7}",,,"2471234"],[,,"(?:235|329|45[56]|545)\\d{4}","\\d{7}",,,"2351234"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,
"NA","NA"],[,,"635\\d{4}","\\d{7}",,,"6351234"],"MH",692,"011","1",,,"1",,,,[[,"(\\d{3})(\\d{4})","$1-$2",,"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],MK:[,[,,"[2-578]\\d{7}","\\d{8}"],[,,"(?:2(?:[23]\\d|5[124578]|6[01])|3(?:1[3-6]|[23][2-6]|4[2356])|4(?:[23][2-6]|4[3-6]|5[256]|6[25-8]|7[24-6]|8[4-6]))\\d{5}","\\d{6,8}",,,"22212345"],[,,"7(?:[0-25-8]\\d{2}|32\\d|421)\\d{4}","\\d{8}",,,"72345678"],[,,"800\\d{5}","\\d{8}",,,"80012345"],[,,"5[02-9]\\d{6}","\\d{8}",,,"50012345"],
[,,"8(?:0[1-9]|[1-9]\\d)\\d{5}","\\d{8}",,,"80123456"],[,,"NA","NA"],[,,"NA","NA"],"MK",389,"00","0",,,"0",,,,[[,"(2)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"0$1","",0],[,"([347]\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[347]"],"0$1","",0],[,"([58]\\d{2})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["[58]"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],ML:[,[,,"[246-9]\\d{7}","\\d{8}"],[,,"(?:2(?:0(?:2[0-589]|7\\d)|1(?:2[5-7]|[3-689]\\d|7[2-4689]))|44[239]\\d)\\d{4}","\\d{8}",,,"20212345"],
[,,"[67]\\d{7}|9[0-25-9]\\d{6}","\\d{8}",,,"65012345"],[,,"800\\d{5}","\\d{8}",,,"80012345"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"ML",223,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[246-9]"],"","",0],[,"(\\d{4})","$1",["67|74"],"","",0]],[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[246-9]"],"","",0]],[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],MM:[,[,,"[14578]\\d{5,7}|[26]\\d{5,8}|9(?:2\\d{0,2}|[58]|3\\d|4\\d{1,2}|6\\d?|[79]\\d{0,2})\\d{6}",
"\\d{5,10}"],[,,"1(?:2\\d{1,2}|[3-5]\\d|6\\d?|[89][0-6]\\d)\\d{4}|2(?:[236-9]\\d{4}|4(?:0\\d{5}|\\d{4})|5(?:1\\d{3,6}|[02-9]\\d{3,5}))|4(?:2[245-8]|[346][2-6]|5[3-5])\\d{4}|5(?:2(?:20?|[3-8])|3[2-68]|4(?:21?|[4-8])|5[23]|6[2-4]|7[2-8]|8[24-7]|9[2-7])\\d{4}|6(?:0[23]|1[2356]|[24][2-6]|3[24-6]|5[2-4]|6[2-8]|7(?:[2367]|4\\d|5\\d?|8[145]\\d)|8[245]|9[24])\\d{4}|7(?:[04][24-8]|[15][2-7]|22|3[2-4])\\d{4}|8(?:1(?:2\\d?|[3-689])|2[2-8]|3[24]|4[24-7]|5[245]|6[23])\\d{4}","\\d{5,9}",,,"1234567"],[,,"17[01]\\d{4}|9(?:2(?:[0-4]|5\\d{2})|3[136]\\d|4(?:0[0-4]\\d|[1379]\\d|[24][0-589]\\d|5\\d{2}|88)|5[0-6]|61?\\d|7(?:3\\d|9\\d{2})|8\\d|9(?:1\\d|7\\d{2}|[089]))\\d{5}",
"\\d{7,10}",,,"92123456"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"1333\\d{4}","\\d{8}",,,"13331234"],"MM",95,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["1|2[45]"],"0$1","",0],[,"(2)(\\d{4})(\\d{4})","$1 $2 $3",["251"],"0$1","",0],[,"(\\d)(\\d{2})(\\d{3})","$1 $2 $3",["16|2"],"0$1","",0],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["67|81"],"0$1","",0],[,"(\\d{2})(\\d{2})(\\d{3,4})","$1 $2 $3",["[4-8]"],"0$1","",0],[,"(9)(\\d{3})(\\d{4,6})","$1 $2 $3",["9(?:2[0-4]|[35-9]|4[13789])"],
"0$1","",0],[,"(9)(4\\d{4})(\\d{4})","$1 $2 $3",["94[0245]"],"0$1","",0],[,"(9)(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["925"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],MN:[,[,,"[12]\\d{7,9}|[57-9]\\d{7}","\\d{6,10}"],[,,"[12](?:1\\d|2(?:[1-3]\\d?|7\\d)|3[2-8]\\d{1,2}|4[2-68]\\d{1,2}|5[1-4689]\\d{1,2})\\d{5}|5[0568]\\d{6}","\\d{6,10}",,,"50123456"],[,,"(?:8[689]|9[013-9])\\d{6}","\\d{8}",,,"88123456"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"7[05-8]\\d{6}",
"\\d{8}",,,"75123456"],"MN",976,"001","0",,,"0",,,,[[,"([12]\\d)(\\d{2})(\\d{4})","$1 $2 $3",["[12]1"],"0$1","",0],[,"([12]2\\d)(\\d{5,6})","$1 $2",["[12]2[1-3]"],"0$1","",0],[,"([12]\\d{3})(\\d{5})","$1 $2",["[12](?:27|[3-5])","[12](?:27|[3-5]\\d)2"],"0$1","",0],[,"(\\d{4})(\\d{4})","$1 $2",["[57-9]"],"$1","",0],[,"([12]\\d{4})(\\d{4,5})","$1 $2",["[12](?:27|[3-5])","[12](?:27|[3-5]\\d)[4-9]"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],MO:[,[,,"[268]\\d{7}","\\d{8}"],
[,,"(?:28[2-57-9]|8[2-57-9]\\d)\\d{5}","\\d{8}",,,"28212345"],[,,"6[236]\\d{6}","\\d{8}",,,"66123456"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"MO",853,"00",,,,,,,,[[,"([268]\\d{3})(\\d{4})","$1 $2",,"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],MP:[,[,,"[5689]\\d{9}","\\d{7}(?:\\d{3})?"],[,,"670(?:2(?:3[3-7]|56|8[5-8])|32[1238]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[589]|8[3-9]8|989)\\d{4}","\\d{7}(?:\\d{3})?",,,"6702345678"],[,,"670(?:2(?:3[3-7]|56|8[5-8])|32[1238]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[589]|8[3-9]8|989)\\d{4}",
"\\d{7}(?:\\d{3})?",,,"6702345678"],[,,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",,,"8002123456"],[,,"900[2-9]\\d{6}","\\d{10}",,,"9002123456"],[,,"NA","NA"],[,,"5(?:00|33|44|66|77)[2-9]\\d{6}","\\d{10}",,,"5002345678"],[,,"NA","NA"],"MP",1,"011","1",,,"1",,,1,,,[,,"NA","NA"],,"670",[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],MQ:[,[,,"[56]\\d{8}","\\d{9}"],[,,"596(?:0[2-5]|[12]0|3[05-9]|4[024-8]|[5-7]\\d|89|9[4-8])\\d{4}","\\d{9}",,,"596301234"],[,,"696(?:[0-479]\\d|5[01]|8[0-689])\\d{4}","\\d{9}",
,,"696201234"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"MQ",596,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",,"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],MR:[,[,,"[2-48]\\d{7}","\\d{8}"],[,,"25[08]\\d{5}|35\\d{6}|45[1-7]\\d{5}","\\d{8}",,,"35123456"],[,,"(?:2(?:2\\d|70)|3(?:3\\d|6[1-36]|7[1-3])|4(?:4\\d|6[0457-9]|7[4-9]|8[01346-8]))\\d{5}","\\d{8}",,,"22123456"],[,,"800\\d{5}","\\d{8}",,,"80012345"],[,,"NA","NA"],
[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"MR",222,"00",,,,,,,,[[,"([2-48]\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",,"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],MS:[,[,,"[5689]\\d{9}","\\d{7}(?:\\d{3})?"],[,,"664491\\d{4}","\\d{7}(?:\\d{3})?",,,"6644912345"],[,,"66449[2-6]\\d{4}","\\d{10}",,,"6644923456"],[,,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",,,"8002123456"],[,,"900[2-9]\\d{6}","\\d{10}",,,"9002123456"],[,,"NA","NA"],[,,"5(?:00|33|44|66|77)[2-9]\\d{6}","\\d{10}",
,,"5002345678"],[,,"NA","NA"],"MS",1,"011","1",,,"1",,,,,,[,,"NA","NA"],,"664",[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],MT:[,[,,"[2357-9]\\d{7}","\\d{8}"],[,,"2(?:0(?:1[0-6]|3[1-4]|[69]\\d)|[1-357]\\d{2})\\d{4}","\\d{8}",,,"21001234"],[,,"(?:7(?:210|[79]\\d{2})|9(?:2(?:1[01]|31)|696|8(?:1[1-3]|89|97)|9\\d{2}))\\d{4}","\\d{8}",,,"96961234"],[,,"800[3467]\\d{4}","\\d{8}",,,"80071234"],[,,"5(?:0(?:0(?:37|43)|6\\d{2}|70\\d|9[0168])|[12]\\d0[1-5])\\d{3}","\\d{8}",,,"50037123"],[,,"NA","NA"],[,,"NA",
"NA"],[,,"3550\\d{4}","\\d{8}",,,"35501234"],"MT",356,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",,"","",0]],,[,,"7117\\d{4}","\\d{8}",,,"71171234"],,,[,,"NA","NA"],[,,"501\\d{5}","\\d{8}",,,"50112345"],,,[,,"NA","NA"]],MU:[,[,,"[2-9]\\d{6,7}","\\d{7,8}"],[,,"(?:2(?:[03478]\\d|1[0-7]|6[1-69])|4(?:[013568]\\d|2[4-7])|5(?:44\\d|471)|6\\d{2}|8(?:14|3[129]))\\d{4}","\\d{7,8}",,,"2012345"],[,,"5(?:2[59]\\d|4(?:2[1-389]|4\\d|7[1-9]|9\\d)|7\\d{2}|8(?:[256]\\d|7[15-8])|9[0-8]\\d)\\d{4}","\\d{8}",,,"52512345"],
[,,"80[012]\\d{4}","\\d{7}",,,"8001234"],[,,"30\\d{5}","\\d{7}",,,"3012345"],[,,"NA","NA"],[,,"NA","NA"],[,,"3(?:20|9\\d)\\d{4}","\\d{7}",,,"3201234"],"MU",230,"0(?:0|[2-7]0|33)",,,,,,"020",,[[,"([2-46-9]\\d{2})(\\d{4})","$1 $2",["[2-46-9]"],"","",0],[,"(5\\d{3})(\\d{4})","$1 $2",["5"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],MV:[,[,,"[3467]\\d{6}|9(?:00\\d{7}|\\d{6})","\\d{7,10}"],[,,"(?:3(?:0[01]|3[0-59])|6(?:[567][02468]|8[024689]|90))\\d{4}","\\d{7}",,,"6701234"],
[,,"(?:46[46]|7[3-9]\\d|9[16-9]\\d)\\d{4}","\\d{7}",,,"7712345"],[,,"NA","NA"],[,,"900\\d{7}","\\d{10}",,,"9001234567"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"MV",960,"0(?:0|19)",,,,,,"00",,[[,"(\\d{3})(\\d{4})","$1-$2",["[3467]|9(?:[1-9]|0[1-9])"],"","",0],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["900"],"","",0]],,[,,"781\\d{4}","\\d{7}",,,"7812345"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],MW:[,[,,"(?:1(?:\\d{2})?|[2789]\\d{2})\\d{6}","\\d{7,9}"],[,,"(?:1[2-9]|21\\d{2})\\d{5}","\\d{7,9}",
,,"1234567"],[,,"(?:111|77\\d|88\\d|99\\d)\\d{6}","\\d{9}",,,"991234567"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"MW",265,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["1"],"0$1","",0],[,"(2\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1","",0],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1789]"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],MX:[,[,,"[1-9]\\d{9,10}","\\d{7,11}"],[,,"(?:33|55|81)\\d{8}|(?:2(?:2[2-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-6][1-9]|[37][1-8]|8[1-35-9]|9[2-689])|5(?:88|9[1-79])|6(?:1[2-68]|[234][1-9]|5[1-3689]|6[12457-9]|7[1-7]|8[67]|9[4-8])|7(?:[13467][1-9]|2[1-8]|5[13-9]|8[1-69]|9[17])|8(?:2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7}",
"\\d{7,10}",,,"2221234567"],[,,"1(?:(?:33|55|81)\\d{8}|(?:2(?:2[2-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-6][1-9]|[37][1-8]|8[1-35-9]|9[2-689])|5(?:88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[12457-9]|7[1-7]|8[67]|9[4-8])|7(?:[13467][1-9]|2[1-8]|5[13-9]|8[1-69]|9[17])|8(?:2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7})","\\d{11}",,,"12221234567"],[,,"800\\d{7}",
"\\d{10}",,,"8001234567"],[,,"900\\d{7}","\\d{10}",,,"9001234567"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"MX",52,"0[09]","01",,,"0[12]|04[45](\\d{10})","1$1",,,[[,"([358]\\d)(\\d{4})(\\d{4})","$1 $2 $3",["33|55|81"],"01 $1","",1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2467]|3[12457-9]|5[89]|8[02-9]|9[0-35-9]"],"01 $1","",1],[,"(1)([358]\\d)(\\d{4})(\\d{4})","044 $2 $3 $4",["1(?:33|55|81)"],"$1","",1],[,"(1)(\\d{3})(\\d{3})(\\d{4})","044 $2 $3 $4",["1(?:[2467]|3[12457-9]|5[89]|8[2-9]|9[1-35-9])"],
"$1","",1]],[[,"([358]\\d)(\\d{4})(\\d{4})","$1 $2 $3",["33|55|81"],"01 $1","",1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2467]|3[12457-9]|5[89]|8[02-9]|9[0-35-9]"],"01 $1","",1],[,"(1)([358]\\d)(\\d{4})(\\d{4})","$1 $2 $3 $4",["1(?:33|55|81)"]],[,"(1)(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3 $4",["1(?:[2467]|3[12457-9]|5[89]|8[2-9]|9[1-35-9])"]]],[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],1,,[,,"NA","NA"]],MY:[,[,,"[13-9]\\d{7,9}","\\d{6,10}"],[,,"(?:3[2-9]\\d|[4-9][2-9])\\d{6}","\\d{6,9}",,,"323456789"],
[,,"1(?:1[1-3]\\d{2}|[02-4679][2-9]\\d|59\\d{2}|8(?:1[23]|[2-9]\\d))\\d{5}","\\d{9,10}",,,"123456789"],[,,"1[378]00\\d{6}","\\d{10}",,,"1300123456"],[,,"1600\\d{6}","\\d{10}",,,"1600123456"],[,,"NA","NA"],[,,"NA","NA"],[,,"154\\d{7}","\\d{10}",,,"1541234567"],"MY",60,"00","0",,,"0",,,,[[,"([4-79])(\\d{3})(\\d{4})","$1-$2 $3",["[4-79]"],"0$1","",0],[,"(3)(\\d{4})(\\d{4})","$1-$2 $3",["3"],"0$1","",0],[,"([18]\\d)(\\d{3})(\\d{3,4})","$1-$2 $3",["1[02-46-9][1-9]|8"],"0$1","",0],[,"(1)([36-8]00)(\\d{2})(\\d{4})",
"$1-$2-$3-$4",["1[36-8]0"],"","",0],[,"(11)(\\d{4})(\\d{4})","$1-$2 $3",["11"],"0$1","",0],[,"(15[49])(\\d{3})(\\d{4})","$1-$2 $3",["15"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],MZ:[,[,,"[28]\\d{7,8}","\\d{8,9}"],[,,"2(?:[1346]\\d|5[0-2]|[78][12]|93)\\d{5}","\\d{8}",,,"21123456"],[,,"8[23467]\\d{7}","\\d{9}",,,"821234567"],[,,"800\\d{6}","\\d{9}",,,"800123456"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"MZ",258,"00",,,,,,,,[[,"([28]\\d)(\\d{3})(\\d{3,4})",
"$1 $2 $3",["2|8[2-7]"],"","",0],[,"(80\\d)(\\d{3})(\\d{3})","$1 $2 $3",["80"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],NA:[,[,,"[68]\\d{7,8}","\\d{8,9}"],[,,"6(?:1(?:17|2(?:[0189]\\d|[2-6]|7\\d?)|3(?:[01378]|2\\d)|4[01]|69|7[014])|2(?:17|5(?:[0-36-8]|4\\d?)|69|70)|3(?:17|2(?:[0237]\\d?|[14-689])|34|6[29]|7[01]|81)|4(?:17|2(?:[012]|7?)|4(?:[06]|1\\d)|5(?:[01357]|[25]\\d?)|69|7[01])|5(?:17|2(?:[0459]|[23678]\\d?)|69|7[01])|6(?:17|2(?:5|6\\d?)|38|42|69|7[01])|7(?:17|2(?:[569]|[234]\\d?)|3(?:0\\d?|[13])|69|7[01]))\\d{4}",
"\\d{8,9}",,,"61221234"],[,,"(?:60|8[125])\\d{7}","\\d{9}",,,"811234567"],[,,"NA","NA"],[,,"8701\\d{5}","\\d{9}",,,"870123456"],[,,"NA","NA"],[,,"NA","NA"],[,,"8(?:3\\d{2}|86)\\d{5}","\\d{8,9}",,,"88612345"],"NA",264,"00","0",,,"0",,,,[[,"(8\\d)(\\d{3})(\\d{4})","$1 $2 $3",["8[1235]"],"0$1","",0],[,"(6\\d)(\\d{2,3})(\\d{4})","$1 $2 $3",["6"],"0$1","",0],[,"(88)(\\d{3})(\\d{3})","$1 $2 $3",["88"],"0$1","",0],[,"(870)(\\d{3})(\\d{3})","$1 $2 $3",["870"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,
,"NA","NA"],,,[,,"NA","NA"]],NC:[,[,,"[2-57-9]\\d{5}","\\d{6}"],[,,"(?:2[03-9]|3[0-5]|4[1-7]|88)\\d{4}","\\d{6}",,,"201234"],[,,"(?:5[0-4]|[79]\\d|8[0-79])\\d{4}","\\d{6}",,,"751234"],[,,"NA","NA"],[,,"36\\d{4}","\\d{6}",,,"366711"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"NC",687,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})","$1.$2.$3",["[2-46-9]|5[0-4]"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],NE:[,[,,"[0289]\\d{7}","\\d{8}"],[,,"2(?:0(?:20|3[1-7]|4[134]|5[14]|6[14578]|7[1-578])|1(?:4[145]|5[14]|6[14-68]|7[169]|88))\\d{4}",
"\\d{8}",,,"20201234"],[,,"(?:89|9\\d)\\d{6}","\\d{8}",,,"93123456"],[,,"08\\d{6}","\\d{8}",,,"08123456"],[,,"09\\d{6}","\\d{8}",,,"09123456"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"NE",227,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[289]|09"],"","",0],[,"(08)(\\d{3})(\\d{3})","$1 $2 $3",["08"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],1,,[,,"NA","NA"]],NF:[,[,,"[13]\\d{5}","\\d{5,6}"],[,,"(?:1(?:06|17|28|39)|3[012]\\d)\\d{3}","\\d{5,6}",,,"106609"],[,,"38\\d{4}",
"\\d{5,6}",,,"381234"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"NF",672,"00",,,,,,,,[[,"(\\d{2})(\\d{4})","$1 $2",["1"],"","",0],[,"(\\d)(\\d{5})","$1 $2",["3"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],NG:[,[,,"[1-6]\\d{5,8}|9\\d{5,9}|[78]\\d{5,13}","\\d{5,14}"],[,,"[12]\\d{6,7}|9(?:0[3-9]|[1-9]\\d)\\d{5}|(?:3\\d|4[023568]|5[02368]|6[02-469]|7[4-69]|8[2-9])\\d{6}|(?:4[47]|5[14579]|6[1578]|7[0-357])\\d{5,6}|(?:78|41)\\d{5}","\\d{5,9}",,,
"12345678"],[,,"(?:1(?:7[34]\\d|8(?:04|[124579]\\d|8[0-3])|95\\d)|287[0-7]|3(?:18[1-8]|88[0-7]|9(?:8[5-9]|6[1-5]))|4(?:28[0-2]|6(?:7[1-9]|8[02-47])|88[0-2])|5(?:2(?:7[7-9]|8\\d)|38[1-79]|48[0-7]|68[4-7])|6(?:2(?:7[7-9]|8\\d)|4(?:3[7-9]|[68][129]|7[04-69]|9[1-8])|58[0-2]|98[7-9])|7(?:38[0-7]|69[1-8]|78[2-4])|8(?:28[3-9]|38[0-2]|4(?:2[12]|3[147-9]|5[346]|7[4-9]|8[014-689]|90)|58[1-8]|78[2-9]|88[5-7])|98[07]\\d)\\d{4}|(?:70(?:[13-9]\\d|2[1-9])|8(?:0[2-9]|1\\d)\\d|90[239]\\d)\\d{6}","\\d{8,10}",,,"8021234567"],
[,,"800\\d{7,11}","\\d{10,14}",,,"80017591759"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"NG",234,"009","0",,,"0",,,,[[,"([129])(\\d{3})(\\d{3,4})","$1 $2 $3",["[129]"],"0$1","",0],[,"(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[3-6]|7(?:[1-79]|0[1-9])|8[2-9]"],"0$1","",0],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["70|8[01]|90[239]"],"0$1","",0],[,"([78]00)(\\d{4})(\\d{4,5})","$1 $2 $3",["[78]00"],"0$1","",0],[,"([78]00)(\\d{5})(\\d{5,6})","$1 $2 $3",["[78]00"],"0$1","",0],[,"(78)(\\d{2})(\\d{3})",
"$1 $2 $3",["78"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"700\\d{7,11}","\\d{10,14}",,,"7001234567"],,,[,,"NA","NA"]],NI:[,[,,"[12578]\\d{7}","\\d{8}"],[,,"2\\d{7}","\\d{8}",,,"21234567"],[,,"5(?:500\\d{4}|7\\d{6})|7[5-8]\\d{6}|8\\d{7}","\\d{8}",,,"81234567"],[,,"1800\\d{4}","\\d{8}",,,"18001234"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"NI",505,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",,"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],NL:[,[,,"1\\d{4,8}|[2-7]\\d{8}|[89]\\d{6,9}",
"\\d{5,10}"],[,,"(?:1[0135-8]|2[02-69]|3[0-68]|4[0135-9]|[57]\\d|8[478])\\d{7}","\\d{9}",,,"101234567"],[,,"6[1-58]\\d{7}","\\d{9}",,,"612345678"],[,,"800\\d{4,7}","\\d{7,10}",,,"8001234"],[,,"90[069]\\d{4,7}","\\d{7,10}",,,"9061234"],[,,"NA","NA"],[,,"NA","NA"],[,,"85\\d{7}","\\d{9}",,,"851234567"],"NL",31,"00","0",,,"0",,,,[[,"([1-578]\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1[035]|2[0346]|3[03568]|4[0356]|5[0358]|7|8[4578]"],"0$1","",0],[,"([1-5]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"],
"0$1","",0],[,"(6)(\\d{8})","$1 $2",["6[0-57-9]"],"0$1","",0],[,"(66)(\\d{7})","$1 $2",["66"],"0$1","",0],[,"(14)(\\d{3,4})","$1 $2",["14"],"$1","",0],[,"([89]0\\d)(\\d{4,7})","$1 $2",["80|9"],"0$1","",0]],,[,,"66\\d{7}","\\d{9}",,,"662345678"],,,[,,"14\\d{3,4}","\\d{5,6}"],[,,"140(?:1(?:[035]|[16-8]\\d)|2(?:[0346]|[259]\\d)|3(?:[03568]|[124]\\d)|4(?:[0356]|[17-9]\\d)|5(?:[0358]|[124679]\\d)|7\\d|8[458])","\\d{5,6}",,,"14020"],,,[,,"NA","NA"]],NO:[,[,,"0\\d{4}|[2-9]\\d{7}","\\d{5}(?:\\d{3})?"],[,
,"(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\d{6}","\\d{8}",,,"21234567"],[,,"(?:4[015-8]|5[89]|9\\d)\\d{6}","\\d{8}",,,"41234567"],[,,"80[01]\\d{5}","\\d{8}",,,"80012345"],[,,"82[09]\\d{5}","\\d{8}",,,"82012345"],[,,"810(?:0[0-6]|[2-8]\\d)\\d{3}","\\d{8}",,,"81021234"],[,,"880\\d{5}","\\d{8}",,,"88012345"],[,,"85[0-5]\\d{5}","\\d{8}",,,"85012345"],"NO",47,"00",,,,,,,,[[,"([489]\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["[489]"],"","",0],[,"([235-7]\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[235-7]"],
"","",0]],,[,,"NA","NA"],1,,[,,"NA","NA"],[,,"0\\d{4}|81(?:0(?:0[7-9]|1\\d)|5\\d{2})\\d{3}","\\d{5}(?:\\d{3})?",,,"01234"],1,,[,,"81[23]\\d{5}","\\d{8}",,,"81212345"]],NP:[,[,,"[1-8]\\d{7}|9(?:[1-69]\\d{6}|7[2-6]\\d{5,7}|8\\d{8})","\\d{6,10}"],[,,"(?:1[0124-6]|2[13-79]|3[135-8]|4[146-9]|5[135-7]|6[13-9]|7[15-9]|8[1-46-9]|9[1-79])\\d{6}","\\d{6,8}",,,"14567890"],[,,"9(?:7[45]|8[01456])\\d{7}","\\d{10}",,,"9841234567"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"NP",977,"00",
"0",,,"0",,,,[[,"(1)(\\d{7})","$1-$2",["1[2-6]"],"0$1","",0],[,"(\\d{2})(\\d{6})","$1-$2",["1[01]|[2-8]|9(?:[1-69]|7[15-9])"],"0$1","",0],[,"(9\\d{2})(\\d{7})","$1-$2",["9(?:7[45]|8)"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],NR:[,[,,"[458]\\d{6}","\\d{7}"],[,,"(?:444|888)\\d{4}","\\d{7}",,,"4441234"],[,,"55[5-9]\\d{4}","\\d{7}",,,"5551234"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"NR",674,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",,"",
"",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],NU:[,[,,"[1-5]\\d{3}","\\d{4}"],[,,"[34]\\d{3}","\\d{4}",,,"4002"],[,,"[125]\\d{3}","\\d{4}",,,"1234"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"NU",683,"00",,,,,,,,,,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],NZ:[,[,,"6[235-9]\\d{6}|[2-57-9]\\d{7,10}","\\d{7,11}"],[,,"(?:3[2-79]|[49][2-689]|6[235-9]|7[2-5789])\\d{6}|24099\\d{3}","\\d{7,8}",,,"32345678"],[,,"2(?:[028]\\d{7,8}|1(?:[03]\\d{5,7}|[12457]\\d{5,6}|[689]\\d{5})|[79]\\d{7})",
"\\d{8,10}",,,"211234567"],[,,"508\\d{6,7}|80\\d{6,8}","\\d{8,10}",,,"800123456"],[,,"90\\d{7,9}","\\d{9,11}",,,"900123456"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"NZ",64,"0(?:0|161)","0",,,"0",,"00",,[[,"([34679])(\\d{3})(\\d{4})","$1-$2 $3",["[3467]|9[1-9]"],"0$1","",0],[,"(24099)(\\d{3})","$1 $2",["240","2409","24099"],"0$1","",0],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["21"],"0$1","",0],[,"(\\d{2})(\\d{3})(\\d{3,5})","$1 $2 $3",["2(?:1[1-9]|[69]|7[0-35-9])|86"],"0$1","",0],[,"(2\\d)(\\d{3,4})(\\d{4})",
"$1 $2 $3",["2[028]"],"0$1","",0],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:10|74)|5|[89]0"],"0$1","",0]],,[,,"[28]6\\d{6,7}","\\d{8,9}",,,"26123456"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],OM:[,[,,"(?:2[2-6]|5|9[1-9])\\d{6}|800\\d{5,6}","\\d{7,9}"],[,,"2[2-6]\\d{6}","\\d{8}",,,"23123456"],[,,"9[1-9]\\d{6}","\\d{8}",,,"92123456"],[,,"8007\\d{4,5}|500\\d{4}","\\d{7,9}",,,"80071234"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"OM",968,"00",,,,,,,,[[,"(2\\d)(\\d{6})","$1 $2",
["2"],"","",0],[,"(9\\d{3})(\\d{4})","$1 $2",["9"],"","",0],[,"([58]00)(\\d{4,6})","$1 $2",["[58]"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],PA:[,[,,"[1-9]\\d{6,7}","\\d{7,8}"],[,,"(?:1(?:0[02-579]|19|2[37]|3[03]|4[479]|57|65|7[016-8]|8[58]|9[1349])|2(?:[0235679]\\d|1[0-7]|4[04-9]|8[028])|3(?:[09]\\d|1[14-7]|2[0-3]|3[03]|4[0457]|5[56]|6[068]|7[06-8]|8[089])|4(?:3[013-69]|4\\d|7[0-689])|5(?:[01]\\d|2[0-7]|[56]0|79)|7(?:0[09]|2[0-267]|3[06]|[49]0|5[06-9]|7[0-24-7]|8[89])|8(?:[34]\\d|5[0-4]|8[02])|9(?:0[6-8]|1[016-8]|2[036-8]|3[3679]|40|5[0489]|6[06-9]|7[046-9]|8[36-8]|9[1-9]))\\d{4}",
"\\d{7}",,,"2001234"],[,,"(?:1[16]1|21[89]|8(?:1[01]|7[23]))\\d{4}|6(?:[024-9]\\d|1[0-5]|3[0-24-9])\\d{5}","\\d{7,8}",,,"60012345"],[,,"80[09]\\d{4}","\\d{7}",,,"8001234"],[,,"(?:779|8(?:2[235]|55|60|7[578]|86|95)|9(?:0[0-2]|81))\\d{4}","\\d{7}",,,"8601234"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"PA",507,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1-$2",["[1-57-9]"],"","",0],[,"(\\d{4})(\\d{4})","$1-$2",["6"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],PE:[,[,,"[14-9]\\d{7,8}",
"\\d{6,9}"],[,,"(?:1\\d|4[1-4]|5[1-46]|6[1-7]|7[2-46]|8[2-4])\\d{6}","\\d{6,8}",,,"11234567"],[,,"9\\d{8}","\\d{9}",,,"912345678"],[,,"800\\d{5}","\\d{8}",,,"80012345"],[,,"805\\d{5}","\\d{8}",,,"80512345"],[,,"801\\d{5}","\\d{8}",,,"80112345"],[,,"80[24]\\d{5}","\\d{8}",,,"80212345"],[,,"NA","NA"],"PE",51,"19(?:1[124]|77|90)00","0"," Anexo ",,"0",,,,[[,"(1)(\\d{7})","$1 $2",["1"],"(0$1)","",0],[,"([4-8]\\d)(\\d{6})","$1 $2",["[4-7]|8[2-4]"],"(0$1)","",0],[,"(\\d{3})(\\d{5})","$1 $2",["80"],"(0$1)",
"",0],[,"(9\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],PF:[,[,,"4\\d{5,7}|8\\d{7}","\\d{6}(?:\\d{2})?"],[,,"4(?:0[45689]\\d|4|99\\d)\\d{4}","\\d{6}(?:\\d{2})?",,,"40412345"],[,,"8[79]\\d{6}","\\d{8}",,,"87123456"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"PF",689,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4[09]|8[79]"],"","",0],[,"(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["44"],
"","",0]],,[,,"NA","NA"],,,[,,"44\\d{4}","\\d{6}",,,"441234"],[,,"NA","NA"],,,[,,"NA","NA"]],PG:[,[,,"[1-9]\\d{6,7}","\\d{7,8}"],[,,"(?:3[0-2]\\d|4[25]\\d|5[34]\\d|64[1-9]|77(?:[0-24]\\d|30)|85[02-46-9]|9[78]\\d)\\d{4}","\\d{7}",,,"3123456"],[,,"(?:20150|68\\d{2}|7(?:[0-369]\\d|75)\\d{2})\\d{3}","\\d{7,8}",,,"6812345"],[,,"180\\d{4}","\\d{7}",,,"1801234"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"275\\d{4}","\\d{7}",,,"2751234"],"PG",675,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[13-689]|27"],
"","",0],[,"(\\d{4})(\\d{4})","$1 $2",["20|7"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],PH:[,[,,"2\\d{5,7}|[3-9]\\d{7,9}|1800\\d{7,9}","\\d{5,13}"],[,,"2\\d{5}(?:\\d{2})?|(?:3[2-68]|4[2-9]|5[2-6]|6[2-58]|7[24578]|8[2-8])\\d{7}|88(?:22\\d{6}|42\\d{4})","\\d{5,10}",,,"21234567"],[,,"(?:81[37]|9(?:0[5-9]|1[024-9]|2[0-35-9]|3[02-9]|4[236-9]|7[34-79]|89|9[4-9]))\\d{7}","\\d{10}",,,"9051234567"],[,,"1800\\d{7,9}","\\d{11,13}",,,"180012345678"],[,,"NA","NA"],[,,"NA","NA"],
[,,"NA","NA"],[,,"NA","NA"],"PH",63,"00","0",,,"0",,,,[[,"(2)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"(0$1)","",0],[,"(2)(\\d{5})","$1 $2",["2"],"(0$1)","",0],[,"(\\d{4})(\\d{4,6})","$1 $2",["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|5(?:22|44)|642|8(?:62|8[245])","3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"],"(0$1)","",0],[,"(\\d{5})(\\d{4})","$1 $2",["346|4(?:27|9[35])|883","3469|4(?:279|9(?:30|56))|8834"],"(0$1)","",0],[,"([3-8]\\d)(\\d{3})(\\d{4})",
"$1 $2 $3",["[3-8]"],"(0$1)","",0],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["81|9"],"0$1","",0],[,"(1800)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"","",0],[,"(1800)(\\d{1,2})(\\d{3})(\\d{4})","$1 $2 $3 $4",["1"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],PK:[,[,,"1\\d{8}|[2-8]\\d{5,11}|9(?:[013-9]\\d{4,9}|2\\d(?:111\\d{6}|\\d{3,7}))","\\d{6,12}"],[,,"(?:21|42)[2-9]\\d{7}|(?:2[25]|4[0146-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]\\d{6}|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:1|2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8]))[2-9]\\d{5,6}|58[126]\\d{7}",
"\\d{6,10}",,,"2123456789"],[,,"3(?:0\\d|[12][0-5]|3[1-7]|4[0-7]|55|64)\\d{7}","\\d{10}",,,"3012345678"],[,,"800\\d{5}","\\d{8}",,,"80012345"],[,,"900\\d{5}","\\d{8}",,,"90012345"],[,,"NA","NA"],[,,"122\\d{6}","\\d{9}",,,"122044444"],[,,"NA","NA"],"PK",92,"00","0",,,"0",,,,[[,"(\\d{2})(111)(\\d{3})(\\d{3})","$1 $2 $3 $4",["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)1","(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)11","(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)111"],"(0$1)",
"",0],[,"(\\d{3})(111)(\\d{3})(\\d{3})","$1 $2 $3 $4",["2[349]|45|54|60|72|8[2-5]|9[2-9]","(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d1","(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d11","(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d111"],"(0$1)","",0],[,"(\\d{2})(\\d{7,8})","$1 $2",["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"],"(0$1)","",0],[,"(\\d{3})(\\d{6,7})","$1 $2",["2[349]|45|54|60|72|8[2-5]|9[2-9]","(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d[2-9]"],"(0$1)","",0],[,"(3\\d{2})(\\d{7})","$1 $2",
["3"],"0$1","",0],[,"([15]\\d{3})(\\d{5,6})","$1 $2",["58[12]|1"],"(0$1)","",0],[,"(586\\d{2})(\\d{5})","$1 $2",["586"],"(0$1)","",0],[,"([89]00)(\\d{3})(\\d{2})","$1 $2 $3",["[89]00"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"(?:2(?:[125]|3[2358]|4[2-4]|9[2-8])|4(?:[0-246-9]|5[3479])|5(?:[1-35-7]|4[2-467])|6(?:[1-8]|0[468])|7(?:[14]|2[236])|8(?:[16]|2[2-689]|3[23578]|4[3478]|5[2356])|9(?:1|22|3[27-9]|4[2-6]|6[3569]|9[2-7]))111\\d{6}","\\d{11,12}",,,"21111825888"],,,[,,"NA","NA"]],PL:[,[,,"[12]\\d{6,8}|[3-57-9]\\d{8}|6\\d{5,8}",
"\\d{6,9}"],[,,"(?:1[2-8]|2[2-59]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])\\d{7}|[12]2\\d{5}","\\d{6,9}",,,"123456789"],[,,"(?:5[0137]|6[069]|7[2389]|88)\\d{7}","\\d{9}",,,"512345678"],[,,"800\\d{6}","\\d{9}",,,"800123456"],[,,"70\\d{7}","\\d{9}",,,"701234567"],[,,"801\\d{6}","\\d{9}",,,"801234567"],[,,"NA","NA"],[,,"39\\d{7}","\\d{9}",,,"391234567"],"PL",48,"00",,,,,,,,[[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[124]|3[2-4]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]"],
"","",0],[,"(\\d{2})(\\d{1})(\\d{4})","$1 $2 $3",["[12]2"],"","",0],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["39|5[0137]|6[0469]|7[02389]|8[08]"],"","",0],[,"(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["64"],"","",0],[,"(\\d{3})(\\d{3})","$1 $2",["64"],"","",0]],,[,,"64\\d{4,7}","\\d{6,9}",,,"641234567"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],PM:[,[,,"[45]\\d{5}","\\d{6}"],[,,"41\\d{4}","\\d{6}",,,"411234"],[,,"55\\d{4}","\\d{6}",,,"551234"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],
[,,"NA","NA"],"PM",508,"00","0",,,"0",,,,[[,"([45]\\d)(\\d{2})(\\d{2})","$1 $2 $3",,"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],PR:[,[,,"[5789]\\d{9}","\\d{7}(?:\\d{3})?"],[,,"(?:787|939)[2-9]\\d{6}","\\d{7}(?:\\d{3})?",,,"7872345678"],[,,"(?:787|939)[2-9]\\d{6}","\\d{7}(?:\\d{3})?",,,"7872345678"],[,,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",,,"8002345678"],[,,"900[2-9]\\d{6}","\\d{10}",,,"9002345678"],[,,"NA","NA"],[,,"5(?:00|33|44|66|77)[2-9]\\d{6}","\\d{10}",
,,"5002345678"],[,,"NA","NA"],"PR",1,"011","1",,,"1",,,1,,,[,,"NA","NA"],,"787|939",[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],PS:[,[,,"[24589]\\d{7,8}|1(?:[78]\\d{8}|[49]\\d{2,3})","\\d{4,10}"],[,,"(?:22[234789]|42[45]|82[01458]|92[369])\\d{5}","\\d{7,8}",,,"22234567"],[,,"5[69]\\d{7}","\\d{9}",,,"599123456"],[,,"1800\\d{6}","\\d{10}",,,"1800123456"],[,,"1(?:4|9\\d)\\d{2}","\\d{4,5}",,,"19123"],[,,"1700\\d{6}","\\d{10}",,,"1700123456"],[,,"NA","NA"],[,,"NA","NA"],"PS",970,"00","0",,,"0",,,,[[,
"([2489])(2\\d{2})(\\d{4})","$1 $2 $3",["[2489]"],"0$1","",0],[,"(5[69]\\d)(\\d{3})(\\d{3})","$1 $2 $3",["5"],"0$1","",0],[,"(1[78]00)(\\d{3})(\\d{3})","$1 $2 $3",["1[78]"],"$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],PT:[,[,,"[2-46-9]\\d{8}","\\d{9}"],[,,"2(?:[12]\\d|[35][1-689]|4[1-59]|6[1-35689]|7[1-9]|8[1-69]|9[1256])\\d{6}","\\d{9}",,,"212345678"],[,,"9(?:[136]\\d{2}|2[0-79]\\d|480)\\d{5}","\\d{9}",,,"912345678"],[,,"80[02]\\d{6}","\\d{9}",,,"800123456"],[,,"76(?:0[1-57]|1[2-47]|2[237])\\d{5}",
"\\d{9}",,,"760123456"],[,,"80(?:8\\d|9[1579])\\d{5}","\\d{9}",,,"808123456"],[,,"884[128]\\d{5}","\\d{9}",,,"884123456"],[,,"30\\d{7}","\\d{9}",,,"301234567"],"PT",351,"00",,,,,,,,[[,"(2\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2[12]"],"","",0],[,"([2-46-9]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2[3-9]|[346-9]"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"70(?:7\\d|8[17])\\d{5}","\\d{9}",,,"707123456"],,,[,,"NA","NA"]],PW:[,[,,"[2-8]\\d{6}","\\d{7}"],[,,"2552255|(?:277|345|488|5(?:35|44|87)|6(?:22|54|79)|7(?:33|47)|8(?:24|55|76))\\d{4}",
"\\d{7}",,,"2771234"],[,,"(?:6[234689]0|77[45789])\\d{4}","\\d{7}",,,"6201234"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"PW",680,"01[12]",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",,"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],PY:[,[,,"5[0-5]\\d{4,7}|[2-46-9]\\d{5,8}","\\d{5,9}"],[,,"(?:[26]1|3[289]|4[124678]|7[123]|8[1236])\\d{5,7}|(?:2(?:2[4568]|7[15]|9[1-5])|3(?:18|3[167]|4[2357]|51)|4(?:18|2[45]|3[12]|5[13]|64|71|9[1-47])|5(?:[1-4]\\d|5[0234])|6(?:3[1-3]|44|7[1-4678])|7(?:17|4[0-4]|6[1-578]|75|8[0-8])|858)\\d{5,6}",
"\\d{5,9}",,,"212345678"],[,,"9(?:6[12]|[78][1-6]|9[1-5])\\d{6}","\\d{9}",,,"961456789"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"8700[0-4]\\d{4}","\\d{9}",,,"870012345"],"PY",595,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{5,7})","$1 $2",["(?:[26]1|3[289]|4[124678]|7[123]|8[1236])"],"($1)","",0],[,"(\\d{3})(\\d{3,6})","$1 $2",["[2-9]0"],"0$1","",0],[,"(\\d{3})(\\d{6})","$1 $2",["9[1-9]"],"0$1","",0],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["8700"],"","",0],[,"(\\d{3})(\\d{4,6})","$1 $2",
["[2-8][1-9]"],"($1)","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"[2-9]0\\d{4,7}","\\d{6,9}",,,"201234567"],,,[,,"NA","NA"]],QA:[,[,,"[2-8]\\d{6,7}","\\d{7,8}"],[,,"4[04]\\d{6}","\\d{7,8}",,,"44123456"],[,,"[3567]\\d{7}","\\d{7,8}",,,"33123456"],[,,"800\\d{4}","\\d{7,8}",,,"8001234"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"QA",974,"00",,,,,,,,[[,"([28]\\d{2})(\\d{4})","$1 $2",["[28]"],"","",0],[,"([3-7]\\d{3})(\\d{4})","$1 $2",["[3-7]"],"","",0]],,[,,"2(?:[12]\\d|61)\\d{4}","\\d{7}",
,,"2123456"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],RE:[,[,,"[268]\\d{8}","\\d{9}"],[,,"262\\d{6}","\\d{9}",,,"262161234"],[,,"6(?:9[23]|47)\\d{6}","\\d{9}",,,"692123456"],[,,"80\\d{7}","\\d{9}",,,"801234567"],[,,"89[1-37-9]\\d{6}","\\d{9}",,,"891123456"],[,,"8(?:1[019]|2[0156]|84|90)\\d{6}","\\d{9}",,,"810123456"],[,,"NA","NA"],[,,"NA","NA"],"RE",262,"00","0",,,"0",,,,[[,"([268]\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",,"0$1","",0]],,[,,"NA","NA"],1,"262|6[49]|8",[,,"NA","NA"],[,,"NA",
"NA"],,,[,,"NA","NA"]],RO:[,[,,"2\\d{5,8}|[37-9]\\d{8}","\\d{6,9}"],[,,"2(?:1(?:\\d{7}|9\\d{3})|[3-6](?:\\d{7}|\\d9\\d{2}))|3[13-6]\\d{7}","\\d{6,9}",,,"211234567"],[,,"7(?:000|[1-8]\\d{2}|99\\d)\\d{5}","\\d{9}",,,"712345678"],[,,"800\\d{6}","\\d{9}",,,"800123456"],[,,"90[036]\\d{6}","\\d{9}",,,"900123456"],[,,"801\\d{6}","\\d{9}",,,"801123456"],[,,"802\\d{6}","\\d{9}",,,"802123456"],[,,"NA","NA"],"RO",40,"00","0"," int ",,"0",,,,[[,"([237]\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[23]1"],"0$1","",0],[,
"(21)(\\d{4})","$1 $2",["21"],"0$1","",0],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[23][3-7]|[7-9]"],"0$1","",0],[,"(2\\d{2})(\\d{3})","$1 $2",["2[3-6]"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"37\\d{7}","\\d{9}",,,"372123456"],,,[,,"NA","NA"]],RS:[,[,,"[126-9]\\d{4,11}|3(?:[0-79]\\d{3,10}|8[2-9]\\d{2,9})","\\d{5,12}"],[,,"(?:1(?:[02-9][2-9]|1[1-9])\\d|2(?:[0-24-7][2-9]\\d|[389](?:0[2-9]|[2-9]\\d))|3(?:[0-8][2-9]\\d|9(?:[2-9]\\d|0[2-9])))\\d{3,8}","\\d{5,12}",,,"10234567"],[,,"6(?:[0-689]|7\\d)\\d{6,7}",
"\\d{8,10}",,,"601234567"],[,,"800\\d{3,9}","\\d{6,12}",,,"80012345"],[,,"(?:90[0169]|78\\d)\\d{3,7}","\\d{6,12}",,,"90012345"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"RS",381,"00","0",,,"0",,,,[[,"([23]\\d{2})(\\d{4,9})","$1 $2",["(?:2[389]|39)0"],"0$1","",0],[,"([1-3]\\d)(\\d{5,10})","$1 $2",["1|2(?:[0-24-7]|[389][1-9])|3(?:[0-8]|9[1-9])"],"0$1","",0],[,"(6\\d)(\\d{6,8})","$1 $2",["6"],"0$1","",0],[,"([89]\\d{2})(\\d{3,9})","$1 $2",["[89]"],"0$1","",0],[,"(7[26])(\\d{4,9})","$1 $2",["7[26]"],
"0$1","",0],[,"(7[08]\\d)(\\d{4,9})","$1 $2",["7[08]"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"7[06]\\d{4,10}","\\d{6,12}",,,"700123456"],,,[,,"NA","NA"]],RU:[,[,,"[3489]\\d{9}","\\d{10}"],[,,"(?:3(?:0[12]|4[1-35-79]|5[1-3]|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-7]|7[1-37-9]))\\d{7}","\\d{10}",,,"3011234567"],[,,"9\\d{9}","\\d{10}",,,"9123456789"],[,,"80[04]\\d{7}","\\d{10}",,,"8001234567"],[,,"80[39]\\d{7}","\\d{10}",
,,"8091234567"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"RU",7,"810","8",,,"8",,"8~10",,[[,"(\\d{3})(\\d{2})(\\d{2})","$1-$2-$3",["[1-79]"],"$1","",1],[,"([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[34689]"],"8 ($1)","",1],[,"(7\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"8 ($1)","",1]],[[,"([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[34689]"],"8 ($1)","",1],[,"(7\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"8 ($1)","",1]],[,,"NA","NA"],1,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA",
"NA"]],RW:[,[,,"[027-9]\\d{7,8}","\\d{8,9}"],[,,"2[258]\\d{7}|06\\d{6}","\\d{8,9}",,,"250123456"],[,,"7[238]\\d{7}","\\d{9}",,,"720123456"],[,,"800\\d{6}","\\d{9}",,,"800123456"],[,,"900\\d{6}","\\d{9}",,,"900123456"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"RW",250,"00","0",,,"0",,,,[[,"(2\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"$1","",0],[,"([7-9]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[7-9]"],"0$1","",0],[,"(0\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"],"","",0]],,[,,"NA","NA"],,,[,,"NA",
"NA"],[,,"NA","NA"],1,,[,,"NA","NA"]],SA:[,[,,"1\\d{7,8}|(?:[2-467]|92)\\d{7}|5\\d{8}|8\\d{9}","\\d{7,10}"],[,,"11\\d{7}|1?(?:2[24-8]|3[35-8]|4[3-68]|6[2-5]|7[235-7])\\d{6}","\\d{7,9}",,,"112345678"],[,,"(?:5[013-689]|811)\\d{7}","\\d{9,10}",,,"512345678"],[,,"800\\d{7}","\\d{10}",,,"8001234567"],[,,"NA","NA"],[,,"92[05]\\d{6}","\\d{9}",,,"920012345"],[,,"NA","NA"],[,,"NA","NA"],"SA",966,"00","0",,,"0",,,,[[,"([1-467])(\\d{3})(\\d{4})","$1 $2 $3",["[1-467]"],"0$1","",0],[,"(1\\d)(\\d{3})(\\d{4})",
"$1 $2 $3",["1[1-467]"],"0$1","",0],[,"(5\\d)(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1","",0],[,"(92\\d{2})(\\d{5})","$1 $2",["92"],"$1","",0],[,"(800)(\\d{3})(\\d{4})","$1 $2 $3",["80"],"$1","",0],[,"(811)(\\d{3})(\\d{3,4})","$1 $2 $3",["81"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],SB:[,[,,"[1-9]\\d{4,6}","\\d{5,7}"],[,,"(?:1[4-79]|[23]\\d|4[01]|5[03]|6[0-37])\\d{3}","\\d{5}",,,"40123"],[,,"48\\d{3}|7(?:[46-8]\\d|5[025-9]|90)\\d{4}|8[4-8]\\d{5}|9(?:[46]\\d|5[0-46-9]|7[0-689]|8[0-79]|9[0-8])\\d{4}",
"\\d{5,7}",,,"7421234"],[,,"1[38]\\d{3}","\\d{5}",,,"18123"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"5[12]\\d{3}","\\d{5}",,,"51123"],"SB",677,"0[01]",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[7-9]"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],SC:[,[,,"[24689]\\d{5,6}","\\d{6,7}"],[,,"4[2-46]\\d{5}","\\d{7}",,,"4217123"],[,,"2[5-8]\\d{5}","\\d{7}",,,"2510123"],[,,"8000\\d{2}","\\d{6}",,,"800000"],[,,"98\\d{4}","\\d{6}",,,"981234"],[,,"NA","NA"],[,,"NA","NA"],[,,"64\\d{5}",
"\\d{7}",,,"6412345"],"SC",248,"0[0-2]",,,,,,"00",,[[,"(\\d{3})(\\d{3})","$1 $2",["[89]"],"","",0],[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[246]"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],SD:[,[,,"[19]\\d{8}","\\d{9}"],[,,"1(?:[125]\\d|8[3567])\\d{6}","\\d{9}",,,"121231234"],[,,"9[012569]\\d{7}","\\d{9}",,,"911231234"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"SD",249,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",,"0$1","",0]],
,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],SE:[,[,,"[1-9]\\d{5,9}","\\d{5,10}"],[,,"1(?:0[1-8]\\d{6}|[136]\\d{5,7}|(?:2[0-35]|4[0-4]|5[0-25-9]|7[13-6]|[89]\\d)\\d{5,6})|2(?:[136]\\d{5,7}|(?:2[0-7]|4[0136-8]|5[0138]|7[018]|8[01]|9[0-57])\\d{5,6})|3(?:[356]\\d{5,7}|(?:0[0-4]|1\\d|2[0-25]|4[056]|7[0-2]|8[0-3]|9[023])\\d{5,6})|4(?:0[1-9]\\d{4,6}|[246]\\d{5,7}|(?:1[013-8]|3[0135]|5[14-79]|7[0-246-9]|8[0156]|9[0-689])\\d{5,6})|5(?:0[0-6]|[15][0-5]|2[0-68]|3[0-4]|4\\d|6[03-5]|7[013]|8[0-79]|9[01])\\d{5,6}|6(?:0[1-9]\\d{4,6}|3\\d{5,7}|(?:1[1-3]|2[0-4]|4[02-57]|5[0-37]|6[0-3]|7[0-2]|8[0247]|9[0-356])\\d{5,6})|8[1-9]\\d{5,7}|9(?:0[1-9]\\d{4,6}|(?:1[0-68]|2\\d|3[02-5]|4[0-3]|5[0-4]|[68][01]|7[0135-8])\\d{5,6})",
"\\d{5,9}",,,"8123456"],[,,"7[0236]\\d{7}","\\d{9}",,,"701234567"],[,,"20(?:0(?:0\\d{2}|[1-9](?:0\\d{1,4}|[1-9]\\d{4}))|1(?:0\\d{4}|[1-9]\\d{4,5})|[2-9]\\d{5})","\\d{6,9}",,,"20123456"],[,,"9(?:00|39|44)(?:1(?:[0-26]\\d{5}|[3-57-9]\\d{2})|2(?:[0-2]\\d{5}|[3-9]\\d{2})|3(?:[0139]\\d{5}|[24-8]\\d{2})|4(?:[045]\\d{5}|[1-36-9]\\d{2})|5(?:5\\d{5}|[0-46-9]\\d{2})|6(?:[679]\\d{5}|[0-58]\\d{2})|7(?:[078]\\d{5}|[1-69]\\d{2})|8(?:[578]\\d{5}|[0-469]\\d{2}))","\\d{7}(?:\\d{3})?",,,"9001234567"],[,,"77(?:0(?:0\\d{2}|[1-9](?:0\\d|[1-9]\\d{4}))|[1-6][1-9]\\d{5})",
"\\d{6}(?:\\d{3})?",,,"771234567"],[,,"75[1-8]\\d{6}","\\d{9}",,,"751234567"],[,,"NA","NA"],"SE",46,"00","0",,,"0",,,,[[,"(8)(\\d{2,3})(\\d{2,3})(\\d{2})","$1-$2 $3 $4",["8"],"0$1","",0],[,"([1-69]\\d)(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90"],"0$1","",0],[,"([1-69]\\d)(\\d{3})(\\d{2})","$1-$2 $3",["1[13689]|2[136]|3[1356]|4[0246]|54|6[03]|90"],"0$1","",0],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1-$2 $3 $4",["1[2457]|2[2457-9]|3[0247-9]|4[1357-9]|5[0-35-9]|6[124-9]|9(?:[125-8]|3[0-5]|4[0-3])"],
"0$1","",0],[,"(\\d{3})(\\d{2,3})(\\d{2})","$1-$2 $3",["1[2457]|2[2457-9]|3[0247-9]|4[1357-9]|5[0-35-9]|6[124-9]|9(?:[125-8]|3[0-5]|4[0-3])"],"0$1","",0],[,"(7\\d)(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["7"],"0$1","",0],[,"(77)(\\d{2})(\\d{2})","$1-$2$3",["7"],"0$1","",0],[,"(20)(\\d{2,3})(\\d{2})","$1-$2 $3",["20"],"0$1","",0],[,"(9[034]\\d)(\\d{2})(\\d{2})(\\d{3})","$1-$2 $3 $4",["9[034]"],"0$1","",0],[,"(9[034]\\d)(\\d{4})","$1-$2",["9[034]"],"0$1","",0]],[[,"(8)(\\d{2,3})(\\d{2,3})(\\d{2})",
"$1 $2 $3 $4",["8"]],[,"([1-69]\\d)(\\d{2,3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90"]],[,"([1-69]\\d)(\\d{3})(\\d{2})","$1 $2 $3",["1[13689]|2[136]|3[1356]|4[0246]|54|6[03]|90"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[2457]|2[2457-9]|3[0247-9]|4[1357-9]|5[0-35-9]|6[124-9]|9(?:[125-8]|3[0-5]|4[0-3])"]],[,"(\\d{3})(\\d{2,3})(\\d{2})","$1 $2 $3",["1[2457]|2[2457-9]|3[0247-9]|4[1357-9]|5[0-35-9]|6[124-9]|9(?:[125-8]|3[0-5]|4[0-3])"]],[,"(7\\d)(\\d{3})(\\d{2})(\\d{2})",
"$1 $2 $3 $4",["7"]],[,"(77)(\\d{2})(\\d{2})","$1 $2 $3",["7"]],[,"(20)(\\d{2,3})(\\d{2})","$1 $2 $3",["20"]],[,"(9[034]\\d)(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["9[034]"]],[,"(9[034]\\d)(\\d{4})","$1 $2",["9[034]"]]],[,,"74[02-9]\\d{6}","\\d{9}",,,"740123456"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],SG:[,[,,"[36]\\d{7}|[17-9]\\d{7,10}","\\d{8,11}"],[,,"6[1-9]\\d{6}","\\d{8}",,,"61234567"],[,,"(?:8[1-7]|9[0-8])\\d{6}","\\d{8}",,,"81234567"],[,,"1?800\\d{7}","\\d{10,11}",,,"18001234567"],
[,,"1900\\d{7}","\\d{11}",,,"19001234567"],[,,"NA","NA"],[,,"NA","NA"],[,,"3[12]\\d{6}","\\d{8}",,,"31234567"],"SG",65,"0[0-3]\\d",,,,,,,,[[,"([3689]\\d{3})(\\d{4})","$1 $2",["[369]|8[1-9]"],"","",0],[,"(1[89]00)(\\d{3})(\\d{4})","$1 $2 $3",["1[89]"],"","",0],[,"(7000)(\\d{4})(\\d{3})","$1 $2 $3",["70"],"","",0],[,"(800)(\\d{3})(\\d{4})","$1 $2 $3",["80"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"7000\\d{7}","\\d{11}",,,"70001234567"],,,[,,"NA","NA"]],SH:[,[,,"[2-79]\\d{3,4}","\\d{4,5}"],[,,"2(?:[0-57-9]\\d|6[4-9])\\d{2}|(?:[2-46]\\d|7[01])\\d{2}",
"\\d{4,5}",,,"2158"],[,,"NA","NA"],[,,"NA","NA"],[,,"(?:[59]\\d|7[2-9])\\d{2}","\\d{4,5}",,,"5012"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"SH",290,"00",,,,,,,,,,[,,"NA","NA"],1,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],SI:[,[,,"[1-7]\\d{6,7}|[89]\\d{4,7}","\\d{5,8}"],[,,"(?:1\\d|[25][2-8]|3[4-8]|4[24-8]|7[3-8])\\d{6}","\\d{7,8}",,,"11234567"],[,,"(?:[37][01]|4[0139]|51|6[48])\\d{6}","\\d{8}",,,"31234567"],[,,"80\\d{4,6}","\\d{6,8}",,,"80123456"],[,,"90\\d{4,6}|89[1-3]\\d{2,5}","\\d{5,8}",
,,"90123456"],[,,"NA","NA"],[,,"NA","NA"],[,,"(?:59|8[1-3])\\d{6}","\\d{8}",,,"59012345"],"SI",386,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[12]|3[4-8]|4[24-8]|5[2-8]|7[3-8]"],"(0$1)","",0],[,"([3-7]\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[37][01]|4[0139]|51|6"],"0$1","",0],[,"([89][09])(\\d{3,6})","$1 $2",["[89][09]"],"0$1","",0],[,"([58]\\d{2})(\\d{5})","$1 $2",["59|8[1-3]"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],SJ:[,[,,"0\\d{4}|[4789]\\d{7}",
"\\d{5}(?:\\d{3})?"],[,,"79\\d{6}","\\d{8}",,,"79123456"],[,,"(?:4[015-8]|5[89]|9\\d)\\d{6}","\\d{8}",,,"41234567"],[,,"80[01]\\d{5}","\\d{8}",,,"80012345"],[,,"82[09]\\d{5}","\\d{8}",,,"82012345"],[,,"810(?:0[0-6]|[2-8]\\d)\\d{3}","\\d{8}",,,"81021234"],[,,"880\\d{5}","\\d{8}",,,"88012345"],[,,"85[0-5]\\d{5}","\\d{8}",,,"85012345"],"SJ",47,"00",,,,,,,,,,[,,"NA","NA"],,,[,,"NA","NA"],[,,"0\\d{4}|81(?:0(?:0[7-9]|1\\d)|5\\d{2})\\d{3}","\\d{5}(?:\\d{3})?",,,"01234"],1,,[,,"81[23]\\d{5}","\\d{8}",,,"81212345"]],
SK:[,[,,"[2-689]\\d{8}","\\d{9}"],[,,"[2-5]\\d{8}","\\d{9}",,,"212345678"],[,,"9(?:0[1-8]|1[0-24-9]|4[0489])\\d{6}","\\d{9}",,,"912123456"],[,,"800\\d{6}","\\d{9}",,,"800123456"],[,,"9(?:[78]\\d{7}|00\\d{6})","\\d{9}",,,"900123456"],[,,"8[5-9]\\d{7}","\\d{9}",,,"850123456"],[,,"NA","NA"],[,,"6(?:5[0-4]|9[0-6])\\d{6}","\\d{9}",,,"690123456"],"SK",421,"00","0",,,"0",,,,[[,"(2)(\\d{3})(\\d{3})(\\d{2})","$1/$2 $3 $4",["2"],"0$1","",0],[,"([3-5]\\d)(\\d{3})(\\d{2})(\\d{2})","$1/$2 $3 $4",["[3-5]"],"0$1",
"",0],[,"([689]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[689]"],"0$1","",0]],,[,,"NA","NA"],,,[,,"(?:8(?:00|[5-9]\\d)|9(?:00|[78]\\d))\\d{6}","\\d{9}",,,"800123456"],[,,"96\\d{7}","\\d{9}",,,"961234567"],,,[,,"NA","NA"]],SL:[,[,,"[2-578]\\d{7}","\\d{6,8}"],[,,"[235]2[2-4][2-9]\\d{4}","\\d{6,8}",,,"22221234"],[,,"(?:2[15]|3[034]|4[04]|5[05]|7[6-9]|88)\\d{6}","\\d{6,8}",,,"25123456"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"SL",232,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{6})",
"$1 $2",,"(0$1)","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],SM:[,[,,"[05-7]\\d{7,9}","\\d{6,10}"],[,,"0549(?:8[0157-9]|9\\d)\\d{4}","\\d{6,10}",,,"0549886377"],[,,"6[16]\\d{6}","\\d{8}",,,"66661212"],[,,"NA","NA"],[,,"7[178]\\d{6}","\\d{8}",,,"71123456"],[,,"NA","NA"],[,,"NA","NA"],[,,"5[158]\\d{6}","\\d{8}",,,"58001110"],"SM",378,"00",,,,"(?:0549)?([89]\\d{5})","0549$1",,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-7]"],"","",0],[,"(0549)(\\d{6})","$1 $2",["0"],
"","",0],[,"(\\d{6})","0549 $1",["[89]"],"","",0]],[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-7]"],"","",0],[,"(0549)(\\d{6})","($1) $2",["0"]],[,"(\\d{6})","(0549) $1",["[89]"]]],[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],1,,[,,"NA","NA"]],SN:[,[,,"[3789]\\d{8}","\\d{9}"],[,,"3(?:0(?:1[0-2]|80)|2(?:11|82)|3(?:8[1-9]|9[3-9])|90[1-5])\\d{5}","\\d{9}",,,"301012345"],[,,"7(?:[067]\\d|8[0-26]|90)\\d{6}","\\d{9}",,,"701234567"],[,,"800\\d{6}","\\d{9}",,,"800123456"],[,,"88[4689]\\d{6}",
"\\d{9}",,,"884123456"],[,,"81[02468]\\d{6}","\\d{9}",,,"810123456"],[,,"NA","NA"],[,,"3392\\d{5}|93330\\d{4}","\\d{9}",,,"933301234"],"SN",221,"00",,,,,,,,[[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[379]"],"","",0],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],SO:[,[,,"[1-79]\\d{6,8}","\\d{7,9}"],[,,"(?:1\\d|2[0-79]|3[0-46-8]|4[0-7]|59)\\d{5}","\\d{7}",,,"4012345"],[,,"(?:15\\d|2(?:4\\d|8)|6[137-9]?\\d{2}|7[1-9]\\d)\\d{5}",
"\\d{7,9}",,,"71123456"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"SO",252,"00","0",,,"0",,,,[[,"(\\d)(\\d{6})","$1 $2",["2[0-79]|[13-5]"],"","",0],[,"(\\d)(\\d{7})","$1 $2",["24|[67]"],"","",0],[,"(\\d{2})(\\d{5,7})","$1 $2",["15|28|6[1378]"],"","",0],[,"(69\\d)(\\d{6})","$1 $2",["69"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],SR:[,[,,"[2-8]\\d{5,6}","\\d{6,7}"],[,,"(?:2[1-3]|3[0-7]|4\\d|5[2-58]|68\\d)\\d{4}","\\d{6,7}",,,"211234"],[,,"(?:7(?:[1-357]\\d|4[0-5])|8[1-9]\\d)\\d{4}",
"\\d{7}",,,"7412345"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"56\\d{4}","\\d{6}",,,"561234"],"SR",597,"00",,,,,,,,[[,"(\\d{3})(\\d{3})","$1-$2",["[2-4]|5[2-58]"],"","",0],[,"(\\d{2})(\\d{2})(\\d{2})","$1-$2-$3",["56"],"","",0],[,"(\\d{3})(\\d{4})","$1-$2",["[6-8]"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],SS:[,[,,"[19]\\d{8}","\\d{9}"],[,,"18\\d{7}","\\d{9}",,,"181234567"],[,,"(?:12|9[1257])\\d{7}","\\d{9}",,,"977123456"],[,,"NA","NA"],[,,"NA","NA"],
[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"SS",211,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",,"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],ST:[,[,,"[29]\\d{6}","\\d{7}"],[,,"22\\d{5}","\\d{7}",,,"2221234"],[,,"9[89]\\d{5}","\\d{7}",,,"9812345"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"ST",239,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",,"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],SV:[,[,,"[267]\\d{7}|[89]\\d{6}(?:\\d{4})?",
"\\d{7,8}|\\d{11}"],[,,"2[1-6]\\d{6}","\\d{8}",,,"21234567"],[,,"[67]\\d{7}","\\d{8}",,,"70123456"],[,,"800\\d{4}(?:\\d{4})?","\\d{7}(?:\\d{4})?",,,"8001234"],[,,"900\\d{4}(?:\\d{4})?","\\d{7}(?:\\d{4})?",,,"9001234"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"SV",503,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[267]"],"","",0],[,"(\\d{3})(\\d{4})","$1 $2",["[89]"],"","",0],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[89]"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],SX:[,
[,,"[5789]\\d{9}","\\d{7}(?:\\d{3})?"],[,,"7215(?:4[2-8]|8[239]|9[056])\\d{4}","\\d{7}(?:\\d{3})?",,,"7215425678"],[,,"7215(?:1[02]|2\\d|5[034679]|8[014-8])\\d{4}","\\d{10}",,,"7215205678"],[,,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",,,"8002123456"],[,,"900[2-9]\\d{6}","\\d{10}",,,"9002123456"],[,,"NA","NA"],[,,"5(?:00|33|44|66|77)[2-9]\\d{6}","\\d{10}",,,"5002345678"],[,,"NA","NA"],"SX",1,"011","1",,,"1",,,,,,[,,"NA","NA"],,"721",[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],SY:[,[,,"[1-59]\\d{7,8}",
"\\d{6,9}"],[,,"(?:1(?:1\\d?|4\\d|[2356])|2(?:1\\d?|[235])|3(?:[13]\\d|4)|4[13]|5[1-3])\\d{6}","\\d{6,9}",,,"112345678"],[,,"9(?:22|[35][0-8]|4\\d|6[024-9]|88|9[0-489])\\d{6}","\\d{9}",,,"944567890"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"SY",963,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-5]"],"0$1","",1],[,"(9\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1","",1]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],SZ:[,[,,"[027]\\d{7}",
"\\d{8}"],[,,"2(?:2(?:0[07]|[13]7|2[57])|3(?:0[34]|[1278]3|3[23]|[46][34])|(?:40[4-69]|67)|5(?:0[5-7]|1[6-9]|[23][78]|48|5[01]))\\d{4}","\\d{8}",,,"22171234"],[,,"7[6-8]\\d{6}","\\d{8}",,,"76123456"],[,,"0800\\d{4}","\\d{8}",,,"08001234"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"SZ",268,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[027]"],"","",0]],,[,,"NA","NA"],,,[,,"0800\\d{4}","\\d{8}",,,"08001234"],[,,"NA","NA"],1,,[,,"NA","NA"]],TA:[,[,,"8\\d{3}","\\d{4}"],[,,"8\\d{3}","\\d{4}",
,,"8999"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"TA",290,"00",,,,,,,,,,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],TC:[,[,,"[5689]\\d{9}","\\d{7}(?:\\d{3})?"],[,,"649(?:712|9(?:4\\d|50))\\d{4}","\\d{7}(?:\\d{3})?",,,"6497121234"],[,,"649(?:2(?:3[129]|4[1-7])|3(?:3[1-389]|4[1-7])|4[34][1-3])\\d{4}","\\d{10}",,,"6492311234"],[,,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",,,"8002345678"],[,,"900[2-9]\\d{6}","\\d{10}",,,"9002345678"],[,
,"NA","NA"],[,,"5(?:00|33|44|66|77)[2-9]\\d{6}","\\d{10}",,,"5002345678"],[,,"64971[01]\\d{4}","\\d{10}",,,"6497101234"],"TC",1,"011","1",,,"1",,,,,,[,,"NA","NA"],,"649",[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],TD:[,[,,"[2679]\\d{7}","\\d{8}"],[,,"22(?:[3789]0|5[0-5]|6[89])\\d{4}","\\d{8}",,,"22501234"],[,,"(?:6[02368]\\d|77\\d|9(?:5[0-4]|9\\d))\\d{5}","\\d{8}",,,"63012345"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"TD",235,"00|16",,,,,,"00",,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
"$1 $2 $3 $4",,"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],TG:[,[,,"[29]\\d{7}","\\d{8}"],[,,"2(?:2[2-7]|3[23]|44|55|66|77)\\d{5}","\\d{8}",,,"22212345"],[,,"9[0-289]\\d{6}","\\d{8}",,,"90112345"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"TG",228,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",,"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],TH:[,[,,"[2-9]\\d{7,8}|1\\d{3}(?:\\d{6})?","\\d{4}|\\d{8,10}"],
[,,"(?:2\\d|3[2-9]|4[2-5]|5[2-6]|7[3-7])\\d{6}","\\d{8}",,,"21234567"],[,,"[89]\\d{8}","\\d{9}",,,"812345678"],[,,"1800\\d{6}","\\d{10}",,,"1800123456"],[,,"1900\\d{6}","\\d{10}",,,"1900123456"],[,,"NA","NA"],[,,"NA","NA"],[,,"6[08]\\d{7}","\\d{9}",,,"601234567"],"TH",66,"00","0",,,"0",,,,[[,"(2)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"0$1","",0],[,"([3-9]\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[3-9]"],"0$1","",0],[,"(1[89]00)(\\d{3})(\\d{3})","$1 $2 $3",["1"],"$1","",0]],,[,,"NA","NA"],,,[,,"1\\d{3}","\\d{4}",
,,"1100"],[,,"1\\d{3}","\\d{4}",,,"1100"],,,[,,"NA","NA"]],TJ:[,[,,"[3-59]\\d{8}","\\d{3,9}"],[,,"(?:3(?:1[3-5]|2[245]|3[12]|4[24-7]|5[25]|72)|4(?:46|74|87))\\d{6}","\\d{3,9}",,,"372123456"],[,,"(?:50[15]|9[0-35-9]\\d)\\d{6}","\\d{9}",,,"917123456"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"TJ",992,"810","8",,,"8",,"8~10",,[[,"([349]\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[34]7|91[78]"],"(8) $1","",1],[,"([459]\\d)(\\d{3})(\\d{4})","$1 $2 $3",["4[48]|5|9(?:1[59]|[0235-9])"],
"(8) $1","",1],[,"(331700)(\\d)(\\d{2})","$1 $2 $3",["331","3317","33170","331700"],"(8) $1","",1],[,"(\\d{4})(\\d)(\\d{4})","$1 $2 $3",["3[1-5]","3(?:[1245]|3(?:[02-9]|1[0-589]))"],"(8) $1","",1]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],TK:[,[,,"[2-9]\\d{3}","\\d{4}"],[,,"[2-4]\\d{3}","\\d{4}",,,"3010"],[,,"[5-9]\\d{3}","\\d{4}",,,"5190"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"TK",690,"00",,,,,,,,,,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],
,,[,,"NA","NA"]],TL:[,[,,"[2-489]\\d{6}|7\\d{6,7}","\\d{7,8}"],[,,"(?:2[1-5]|3[1-9]|4[1-4])\\d{5}","\\d{7}",,,"2112345"],[,,"7[3-8]\\d{6}","\\d{8}",,,"77212345"],[,,"80\\d{5}","\\d{7}",,,"8012345"],[,,"90\\d{5}","\\d{7}",,,"9012345"],[,,"NA","NA"],[,,"70\\d{5}","\\d{7}",,,"7012345"],[,,"NA","NA"],"TL",670,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[2-489]"],"","",0],[,"(\\d{4})(\\d{4})","$1 $2",["7"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],TM:[,[,,"[1-6]\\d{7}","\\d{8}"],
[,,"(?:1(?:2\\d|3[1-9])|2(?:22|4[0-35-8])|3(?:22|4[03-9])|4(?:22|3[128]|4\\d|6[15])|5(?:22|5[7-9]|6[014-689]))\\d{5}","\\d{8}",,,"12345678"],[,,"6[2-8]\\d{6}","\\d{8}",,,"66123456"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"TM",993,"810","8",,,"8",,"8~10",,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["12"],"(8 $1)","",0],[,"(\\d{2})(\\d{6})","$1 $2",["6"],"8 $1","",0],[,"(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2-$3-$4",["13|[2-5]"],"(8 $1)","",0]],,[,,"NA","NA"],,
,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],TN:[,[,,"[2-57-9]\\d{7}","\\d{8}"],[,,"3[012]\\d{6}|7\\d{7}|81200\\d{3}","\\d{8}",,,"71234567"],[,,"(?:[259]\\d|4[0-2])\\d{6}","\\d{8}",,,"20123456"],[,,"8010\\d{4}","\\d{8}",,,"80101234"],[,,"88\\d{6}","\\d{8}",,,"88123456"],[,,"8[12]10\\d{4}","\\d{8}",,,"81101234"],[,,"NA","NA"],[,,"NA","NA"],"TN",216,"00",,,,,,,,[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",,"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],TO:[,[,,"[02-8]\\d{4,6}",
"\\d{5,7}"],[,,"(?:2\\d|3[1-8]|4[1-4]|[56]0|7[0149]|8[05])\\d{3}","\\d{5}",,,"20123"],[,,"(?:7[578]|8[7-9])\\d{5}","\\d{7}",,,"7715123"],[,,"0800\\d{3}","\\d{7}",,,"0800222"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"TO",676,"00",,,,,,,,[[,"(\\d{2})(\\d{3})","$1-$2",["[1-6]|7[0-4]|8[05]"],"","",0],[,"(\\d{3})(\\d{4})","$1 $2",["7[5-9]|8[7-9]"],"","",0],[,"(\\d{4})(\\d{3})","$1 $2",["0"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],1,,[,,"NA","NA"]],TR:[,[,,"[2-589]\\d{9}|444\\d{4}",
"\\d{7,10}"],[,,"(?:2(?:[13][26]|[28][2468]|[45][268]|[67][246])|3(?:[13][28]|[24-6][2468]|[78][02468]|92)|4(?:[16][246]|[23578][2468]|4[26]))\\d{7}","\\d{10}",,,"2123456789"],[,,"5(?:0[1-7]|22|[34]\\d|5[1-59]|9[246])\\d{7}","\\d{10}",,,"5012345678"],[,,"800\\d{7}","\\d{10}",,,"8001234567"],[,,"900\\d{7}","\\d{10}",,,"9001234567"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"TR",90,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[23]|4(?:[0-35-9]|4[0-35-9])"],"(0$1)","",1],[,"(\\d{3})(\\d{3})(\\d{4})",
"$1 $2 $3",["[589]"],"0$1","",1],[,"(444)(\\d{1})(\\d{3})","$1 $2 $3",["444"],"","",0]],,[,,"512\\d{7}","\\d{10}",,,"5123456789"],,,[,,"444\\d{4}","\\d{7}",,,"4441444"],[,,"444\\d{4}|850\\d{7}","\\d{7,10}",,,"4441444"],,,[,,"NA","NA"]],TT:[,[,,"[589]\\d{9}","\\d{7}(?:\\d{3})?"],[,,"868(?:2(?:01|2[1-5])|6(?:07|1[4-6]|2[1-9]|[3-6]\\d|7[0-79]|9[0-8])|82[12])\\d{4}","\\d{7}(?:\\d{3})?",,,"8682211234"],[,,"868(?:2(?:8[5-9]|9\\d)|3(?:0[1-9]|1[02-9]|[2-9]\\d)|4[6-9]\\d|6(?:20|78|8\\d)|7(?:1[02-9]|[02-9]\\d))\\d{4}",
"\\d{10}",,,"8682911234"],[,,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",,,"8002345678"],[,,"900[2-9]\\d{6}","\\d{10}",,,"9002345678"],[,,"NA","NA"],[,,"5(?:00|33|44|66|77)[2-9]\\d{6}","\\d{10}",,,"5002345678"],[,,"NA","NA"],"TT",1,"011","1",,,"1",,,,,,[,,"NA","NA"],,"868",[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],TV:[,[,,"[29]\\d{4,5}","\\d{5,6}"],[,,"2[02-9]\\d{3}","\\d{5}",,,"20123"],[,,"90\\d{4}","\\d{6}",,,"901234"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"TV",
688,"00",,,,,,,,,,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],TW:[,[,,"[2-689]\\d{7,8}|7\\d{7,9}","\\d{8,10}"],[,,"[2-8]\\d{7,8}","\\d{8,9}",,,"21234567"],[,,"9\\d{8}","\\d{9}",,,"912345678"],[,,"800\\d{6}","\\d{9}",,,"800123456"],[,,"900\\d{6}","\\d{9}",,,"900123456"],[,,"NA","NA"],[,,"NA","NA"],[,,"70\\d{8}","\\d{10}",,,"7012345678"],"TW",886,"0(?:0[25679]|19)","0","#",,"0",,,,[[,"([2-8])(\\d{3,4})(\\d{4})","$1 $2 $3",["[2-6]|[78][1-9]"],"0$1","",0],[,"([89]\\d{2})(\\d{3})(\\d{3})",
"$1 $2 $3",["80|9"],"0$1","",0],[,"(70)(\\d{4})(\\d{4})","$1 $2 $3",["70"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],TZ:[,[,,"\\d{9}","\\d{7,9}"],[,,"2[2-8]\\d{7}","\\d{7,9}",,,"222345678"],[,,"(?:6[158]|7[1-9])\\d{7}","\\d{9}",,,"612345678"],[,,"80[08]\\d{6}","\\d{9}",,,"800123456"],[,,"90\\d{7}","\\d{9}",,,"900123456"],[,,"8(?:40|6[01])\\d{6}","\\d{9}",,,"840123456"],[,,"NA","NA"],[,,"41\\d{7}","\\d{9}",,,"412345678"],"TZ",255,"00[056]","0",,,"0",,,,[[,"([24]\\d)(\\d{3})(\\d{4})",
"$1 $2 $3",["[24]"],"0$1","",0],[,"([67]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[67]"],"0$1","",0],[,"([89]\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[89]"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],UA:[,[,,"[3-689]\\d{8}","\\d{5,9}"],[,,"(?:3[1-8]|4[13-8]|5[1-7]|6[12459])\\d{7}","\\d{5,9}",,,"311234567"],[,,"(?:39|50|6[36-8]|9[1-9])\\d{7}","\\d{9}",,,"391234567"],[,,"800\\d{6}","\\d{9}",,,"800123456"],[,,"900\\d{6}","\\d{9}",,,"900123456"],[,,"NA","NA"],[,,"NA","NA"],[,
,"89\\d{7}","\\d{9}",,,"891234567"],"UA",380,"00","0",,,"0",,"0~0",,[[,"([3-689]\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[38]9|4(?:[45][0-5]|87)|5(?:0|6[37]|7[37])|6[36-8]|9[1-9]","[38]9|4(?:[45][0-5]|87)|5(?:0|6(?:3[14-7]|7)|7[37])|6[36-8]|9[1-9]"],"0$1","",0],[,"([3-689]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["3[1-8]2|4[13678]2|5(?:[12457]2|6[24])|6(?:[49]2|[12][29]|5[24])|8[0-8]|90","3(?:[1-46-8]2[013-9]|52)|4(?:[1378]2|62[013-9])|5(?:[12457]2|6[24])|6(?:[49]2|[12][29]|5[24])|8[0-8]|90"],"0$1","",0],[,
"([3-6]\\d{3})(\\d{5})","$1 $2",["3(?:5[013-9]|[1-46-8])|4(?:[137][013-9]|6|[45][6-9]|8[4-6])|5(?:[1245][013-9]|6[0135-9]|3|7[4-6])|6(?:[49][013-9]|5[0135-9]|[12][13-8])","3(?:5[013-9]|[1-46-8](?:22|[013-9]))|4(?:[137][013-9]|6(?:[013-9]|22)|[45][6-9]|8[4-6])|5(?:[1245][013-9]|6(?:3[02389]|[015689])|3|7[4-6])|6(?:[49][013-9]|5[0135-9]|[12][13-8])"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],UG:[,[,,"\\d{9}","\\d{5,9}"],[,,"20(?:[0147]\\d{2}|2(?:40|[5-9]\\d)|3[23]\\d|5[0-4]\\d|6[03]\\d|8[0-2]\\d)\\d{4}|[34]\\d{8}",
"\\d{5,9}",,,"312345678"],[,,"7(?:0[0-7]|[15789]\\d|[23]0|[46][0-4])\\d{6}","\\d{9}",,,"712345678"],[,,"800[123]\\d{5}","\\d{9}",,,"800123456"],[,,"90[123]\\d{6}","\\d{9}",,,"901123456"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"UG",256,"00[057]","0",,,"0",,,,[[,"(\\d{3})(\\d{6})","$1 $2",["[7-9]|20(?:[013-8]|2[5-9])|4(?:6[45]|[7-9])"],"0$1","",0],[,"(\\d{2})(\\d{7})","$1 $2",["3|4(?:[1-5]|6[0-36-9])"],"0$1","",0],[,"(2024)(\\d{5})","$1 $2",["2024"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,
,"NA","NA"],,,[,,"NA","NA"]],US:[,[,,"[2-9]\\d{9}","\\d{7}(?:\\d{3})?"],[,,"(?:2(?:0[1-35-9]|1[02-9]|2[4589]|3[149]|4[08]|5[1-46]|6[0279]|7[026]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[014679]|4[67]|5[12]|6[014]|8[56])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|69|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-37]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[036]|3[016]|4[16]|5[017]|6[0-279]|78|8[12])|7(?:0[1-46-8]|1[02-9]|2[0457]|3[1247]|4[07]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|28|3[0-25]|4[3578]|5[06-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[1678]|4[0179]|5[12469]|7[0-3589]|8[0459]))[2-9]\\d{6}",
"\\d{7}(?:\\d{3})?",,,"2015555555"],[,,"(?:2(?:0[1-35-9]|1[02-9]|2[4589]|3[149]|4[08]|5[1-46]|6[0279]|7[026]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[014679]|4[67]|5[12]|6[014]|8[56])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|69|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-37]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[036]|3[016]|4[16]|5[017]|6[0-279]|78|8[12])|7(?:0[1-46-8]|1[02-9]|2[0457]|3[1247]|4[07]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|28|3[0-25]|4[3578]|5[06-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[1678]|4[0179]|5[12469]|7[0-3589]|8[0459]))[2-9]\\d{6}",
"\\d{7}(?:\\d{3})?",,,"2015555555"],[,,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",,,"8002345678"],[,,"900[2-9]\\d{6}","\\d{10}",,,"9002345678"],[,,"NA","NA"],[,,"5(?:00|33|44|66|77)[2-9]\\d{6}","\\d{10}",,,"5002345678"],[,,"NA","NA"],"US",1,"011","1",,,"1",,,1,[[,"(\\d{3})(\\d{4})","$1-$2",,"","",1],[,"(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",,"","",1]],[[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3"]],[,,"NA","NA"],1,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],UY:[,[,,"[2489]\\d{6,7}","\\d{7,8}"],[,
,"2\\d{7}|4[2-7]\\d{6}","\\d{7,8}",,,"21231234"],[,,"9[1-9]\\d{6}","\\d{8}",,,"94231234"],[,,"80[05]\\d{4}","\\d{7}",,,"8001234"],[,,"90[0-8]\\d{4}","\\d{7}",,,"9001234"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"UY",598,"0(?:1[3-9]\\d|0)","0"," int. ",,"0",,"00",,[[,"(\\d{4})(\\d{4})","$1 $2",["[24]"],"","",0],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["9[1-9]"],"0$1","",0],[,"(\\d{3})(\\d{4})","$1 $2",["[89]0"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],UZ:[,[,,"[679]\\d{8}",
"\\d{7,9}"],[,,"(?:6(?:1(?:22|3[124]|4[1-4]|5[123578]|64)|2(?:22|3[0-57-9]|41)|5(?:22|3[3-7]|5[024-8])|6\\d{2}|7(?:[23]\\d|7[69])|9(?:22|4[1-8]|6[135]))|7(?:0(?:5[4-9]|6[0146]|7[12456]|9[135-8])|1[12]\\d|2(?:22|3[1345789]|4[123579]|5[14])|3(?:2\\d|3[1578]|4[1-35-7]|5[1-57]|61)|4(?:2\\d|3[1-579]|7[1-79])|5(?:22|5[1-9]|6[1457])|6(?:22|3[12457]|4[13-8])|9(?:22|5[1-9])))\\d{5}","\\d{7,9}",,,"662345678"],[,,"6(?:1(?:2(?:98|2[01])|35[0-4]|50\\d|61[23]|7(?:[01][017]|4\\d|55|9[5-9]))|2(?:11\\d|2(?:[12]1|9[01379])|5(?:[126]\\d|3[0-4])|7\\d{2})|5(?:19[01]|2(?:27|9[26])|30\\d|59\\d|7\\d{2})|6(?:2(?:1[5-9]|2[0367]|38|41|52|60)|3[79]\\d|4(?:56|83)|7(?:[07]\\d|1[017]|3[07]|4[047]|5[057]|67|8[0178]|9[79])|9[0-3]\\d)|7(?:2(?:24|3[237]|4[5-9]|7[15-8])|5(?:7[12]|8[0589])|7(?:0\\d|[39][07])|9(?:0\\d|7[079]))|9(?:2(?:1[1267]|5\\d|3[01]|7[0-4])|5[67]\\d|6(?:2[0-26]|8\\d)|7\\d{2}))\\d{4}|7(?:0\\d{3}|1(?:13[01]|6(?:0[47]|1[67]|66)|71[3-69]|98\\d)|2(?:2(?:2[79]|95)|3(?:2[5-9]|6[0-6])|57\\d|7(?:0\\d|1[17]|2[27]|3[37]|44|5[057]|66|88))|3(?:2(?:1[0-6]|21|3[469]|7[159])|33\\d|5(?:0[0-4]|5[579]|9\\d)|7(?:[0-3579]\\d|4[0467]|6[67]|8[078])|9[4-6]\\d)|4(?:2(?:29|5[0257]|6[0-7]|7[1-57])|5(?:1[0-4]|8\\d|9[5-9])|7(?:0\\d|1[024589]|2[0127]|3[0137]|[46][07]|5[01]|7[5-9]|9[079])|9(?:7[015-9]|[89]\\d))|5(?:112|2(?:0\\d|2[29]|[49]4)|3[1568]\\d|52[6-9]|7(?:0[01578]|1[017]|[23]7|4[047]|[5-7]\\d|8[78]|9[079]))|6(?:2(?:2[1245]|4[2-4])|39\\d|41[179]|5(?:[349]\\d|5[0-2])|7(?:0[017]|[13]\\d|22|44|55|67|88))|9(?:22[128]|3(?:2[0-4]|7\\d)|57[05629]|7(?:2[05-9]|3[37]|4\\d|60|7[2579]|87|9[07])))\\d{4}|9[0-57-9]\\d{7}",
"\\d{7,9}",,,"912345678"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"UZ",998,"810","8",,,"8",,"8~10",,[[,"([679]\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",,"8 $1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],VA:[,[,,"06\\d{8}","\\d{10}"],[,,"06698\\d{5}","\\d{10}",,,"0669812345"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"VA",379,"00",,,,,,,,[[,"(06)(\\d{4})(\\d{4})","$1 $2 $3",,"","",0]],,[,,"NA","NA"],
,,[,,"NA","NA"],[,,"NA","NA"],1,,[,,"NA","NA"]],VC:[,[,,"[5789]\\d{9}","\\d{7}(?:\\d{3})?"],[,,"784(?:266|3(?:6[6-9]|7\\d|8[0-24-6])|4(?:38|5[0-36-8]|8[0-8])|5(?:55|7[0-2]|93)|638|784)\\d{4}","\\d{7}(?:\\d{3})?",,,"7842661234"],[,,"784(?:4(?:3[0-4]|5[45]|89|9[0-5])|5(?:2[6-9]|3[0-4]))\\d{4}","\\d{10}",,,"7844301234"],[,,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",,,"8002345678"],[,,"900[2-9]\\d{6}","\\d{10}",,,"9002345678"],[,,"NA","NA"],[,,"5(?:00|33|44|66|77)[2-9]\\d{6}","\\d{10}",,,"5002345678"],
[,,"NA","NA"],"VC",1,"011","1",,,"1",,,,,,[,,"NA","NA"],,"784",[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],VE:[,[,,"[24589]\\d{9}","\\d{7,10}"],[,,"(?:2(?:12|3[457-9]|[58][1-9]|[467]\\d|9[1-6])|50[01])\\d{7}","\\d{7,10}",,,"2121234567"],[,,"4(?:1[24-8]|2[46])\\d{7}","\\d{10}",,,"4121234567"],[,,"800\\d{7}","\\d{10}",,,"8001234567"],[,,"900\\d{7}","\\d{10}",,,"9001234567"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"VE",58,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{7})","$1-$2",,"0$1","$CC $1",0]],,[,,"NA",
"NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],VG:[,[,,"[2589]\\d{9}","\\d{7}(?:\\d{3})?"],[,,"284(?:(?:229|4(?:22|9[45])|774|8(?:52|6[459]))\\d{4}|496[0-5]\\d{3})","\\d{7}(?:\\d{3})?",,,"2842291234"],[,,"284(?:(?:3(?:0[0-3]|4[0-367])|4(?:4[0-6]|68|99)|54[0-57])\\d{4}|496[6-9]\\d{3})","\\d{10}",,,"2843001234"],[,,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",,,"8002345678"],[,,"900[2-9]\\d{6}","\\d{10}",,,"9002345678"],[,,"NA","NA"],[,,"5(?:00|33|44|66|77)[2-9]\\d{6}","\\d{10}",,,"5002345678"],
[,,"NA","NA"],"VG",1,"011","1",,,"1",,,,,,[,,"NA","NA"],,"284",[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],VI:[,[,,"[3589]\\d{9}","\\d{7}(?:\\d{3})?"],[,,"340(?:2(?:01|2[0678]|44|77)|3(?:32|44)|4(?:22|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:1[2-589]|27|7\\d)|884|998)\\d{4}","\\d{7}(?:\\d{3})?",,,"3406421234"],[,,"340(?:2(?:01|2[0678]|44|77)|3(?:32|44)|4(?:22|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:1[2-589]|27|7\\d)|884|998)\\d{4}","\\d{7}(?:\\d{3})?",,,"3406421234"],[,,"8(?:00|44|55|66|77|88)[2-9]\\d{6}",
"\\d{10}",,,"8002345678"],[,,"900[2-9]\\d{6}","\\d{10}",,,"9002345678"],[,,"NA","NA"],[,,"5(?:00|33|44|66|77)[2-9]\\d{6}","\\d{10}",,,"5002345678"],[,,"NA","NA"],"VI",1,"011","1",,,"1",,,1,,,[,,"NA","NA"],,"340",[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],VN:[,[,,"[17]\\d{6,9}|[2-69]\\d{7,9}|8\\d{6,8}","\\d{7,10}"],[,,"(?:2(?:[025-79]|1[0189]|[348][01])|3(?:[0136-9]|[25][01])|4\\d|5(?:[01][01]|[2-9])|6(?:[0-46-8]|5[01])|7(?:[02-79]|[18][01])|8[1-9])\\d{7}","\\d{9,10}",,,"2101234567"],[,,"(?:9\\d|1(?:2\\d|6[2-9]|8[68]|99))\\d{7}",
"\\d{9,10}",,,"912345678"],[,,"1800\\d{4,6}","\\d{8,10}",,,"1800123456"],[,,"1900\\d{4,6}","\\d{8,10}",,,"1900123456"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"VN",84,"00","0",,,"0",,,,[[,"([17]99)(\\d{4})","$1 $2",["[17]99"],"0$1","",1],[,"([48])(\\d{4})(\\d{4})","$1 $2 $3",["[48]"],"0$1","",1],[,"([235-7]\\d)(\\d{4})(\\d{3})","$1 $2 $3",["2[025-79]|3[0136-9]|5[2-9]|6[0-46-8]|7[02-79]"],"0$1","",1],[,"(80)(\\d{5})","$1 $2",["80"],"0$1","",1],[,"(69\\d)(\\d{4,5})","$1 $2",["69"],"0$1","",1],[,"([235-7]\\d{2})(\\d{4})(\\d{3})",
"$1 $2 $3",["2[1348]|3[25]|5[01]|65|7[18]"],"0$1","",1],[,"(9\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["9"],"0$1","",1],[,"(1[2689]\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1(?:[26]|8[68]|99)"],"0$1","",1],[,"(1[89]00)(\\d{4,6})","$1 $2",["1[89]0"],"$1","",1]],,[,,"NA","NA"],,,[,,"[17]99\\d{4}|69\\d{5,6}","\\d{7,8}",,,"1992000"],[,,"[17]99\\d{4}|69\\d{5,6}|80\\d{5}","\\d{7,8}",,,"1992000"],,,[,,"NA","NA"]],VU:[,[,,"[2-57-9]\\d{4,6}","\\d{5,7}"],[,,"(?:2[02-9]\\d|3(?:[5-7]\\d|8[0-8])|48[4-9]|88\\d)\\d{2}",
"\\d{5}",,,"22123"],[,,"(?:5(?:7[2-5]|[3-69]\\d)|7[013-7]\\d)\\d{4}","\\d{7}",,,"5912345"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"VU",678,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[579]"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"3[03]\\d{3}|900\\d{4}","\\d{5,7}",,,"30123"],,,[,,"NA","NA"]],WF:[,[,,"[5-7]\\d{5}","\\d{6}"],[,,"(?:50|68|72)\\d{4}","\\d{6}",,,"501234"],[,,"(?:50|68|72)\\d{4}","\\d{6}",,,"501234"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA",
"NA"],[,,"NA","NA"],"WF",681,"00",,,,,,,1,[[,"(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",,"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],WS:[,[,,"[2-8]\\d{4,6}","\\d{5,7}"],[,,"(?:[2-5]\\d|6[1-9]|84\\d{2})\\d{3}","\\d{5,7}",,,"22123"],[,,"(?:60|7[25-7]\\d)\\d{4}","\\d{6,7}",,,"601234"],[,,"800\\d{3}","\\d{6}",,,"800123"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"WS",685,"0",,,,,,,,[[,"(8\\d{2})(\\d{3,4})","$1 $2",["8"],"","",0],[,"(7\\d)(\\d{5})","$1 $2",["7"],"",
"",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],YE:[,[,,"[1-7]\\d{6,8}","\\d{6,9}"],[,,"(?:1(?:7\\d|[2-68])|2[2-68]|3[2358]|4[2-58]|5[2-6]|6[3-58]|7[24-68])\\d{5}","\\d{6,8}",,,"1234567"],[,,"7[0137]\\d{7}","\\d{9}",,,"712345678"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"YE",967,"00","0",,,"0",,,,[[,"([1-7])(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-6]|7[24-68]"],"0$1","",0],[,"(7\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["7[0137]"],"0$1","",0]],,[,,"NA","NA"],
,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],YT:[,[,,"[268]\\d{8}","\\d{9}"],[,,"2696[0-4]\\d{4}","\\d{9}",,,"269601234"],[,,"639\\d{6}","\\d{9}",,,"639123456"],[,,"80\\d{7}","\\d{9}",,,"801234567"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"YT",262,"00","0",,,"0",,,,,,[,,"NA","NA"],,"269|63",[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],ZA:[,[,,"[1-79]\\d{8}|8(?:[067]\\d{7}|[1-4]\\d{3,7})","\\d{5,9}"],[,,"(?:1[0-8]|2[0-378]|3[1-69]|4\\d|5[1346-8])\\d{7}","\\d{9}",,,"101234567"],[,
,"(?:6[0-5]|7[0-46-9])\\d{7}|8[1-4]\\d{3,7}","\\d{5,9}",,,"711234567"],[,,"80\\d{7}","\\d{9}",,,"801234567"],[,,"86[2-9]\\d{6}|90\\d{7}","\\d{9}",,,"862345678"],[,,"860\\d{6}","\\d{9}",,,"860123456"],[,,"NA","NA"],[,,"87\\d{7}","\\d{9}",,,"871234567"],"ZA",27,"00","0",,,"0",,,,[[,"(860)(\\d{3})(\\d{3})","$1 $2 $3",["860"],"0$1","",0],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-79]|8(?:[0-47]|6[1-9])"],"0$1","",0],[,"(\\d{2})(\\d{3,4})","$1 $2",["8[1-4]"],"0$1","",0],[,"(\\d{2})(\\d{3})(\\d{2,3})",
"$1 $2 $3",["8[1-4]"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"861\\d{6}","\\d{9}",,,"861123456"],,,[,,"NA","NA"]],ZM:[,[,,"[289]\\d{8}","\\d{9}"],[,,"21[1-8]\\d{6}","\\d{9}",,,"211234567"],[,,"9(?:5[05]|6\\d|7[1-9])\\d{6}","\\d{9}",,,"955123456"],[,,"800\\d{6}","\\d{9}",,,"800123456"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"ZM",260,"00","0",,,"0",,,,[[,"([29]\\d)(\\d{7})","$1 $2",["[29]"],"0$1","",0],[,"(800)(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1","",0]],,[,,"NA","NA"],,
,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],ZW:[,[,,"2(?:[012457-9]\\d{3,8}|6\\d{3,6})|[13-79]\\d{4,8}|8[06]\\d{8}","\\d{3,10}"],[,,"(?:1[3-9]|2(?:0[45]|[16]|2[28]|[49]8?|58[23]|7[246]|8[1346-9])|3(?:08?|17?|3[78]|[2456]|7[1569]|8[379])|5(?:[07-9]|1[78]|483|5(?:7?|8))|6(?:0|28|37?|[45][68][78]|98?)|848)\\d{3,6}|(?:2(?:27|5|7[135789]|8[25])|3[39]|5[1-46]|6[126-8])\\d{4,6}|2(?:(?:0|70)\\d{5,6}|2[05]\\d{7})|(?:4\\d|9[2-8])\\d{4,7}","\\d{3,10}",,,"1312345"],[,,"7[1378]\\d{7}|86(?:22|44)\\d{6}","\\d{9,10}",
,,"711234567"],[,,"800\\d{7}","\\d{10}",,,"8001234567"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"86(?:1[12]|30|55|77|8[367]|99)\\d{6}","\\d{10}",,,"8686123456"],"ZW",263,"00","0",,,"0",,,,[[,"([49])(\\d{3})(\\d{2,5})","$1 $2 $3",["4|9[2-9]"],"0$1","",0],[,"([179]\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[19]1|7"],"0$1","",0],[,"(86\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["86[24]"],"0$1","",0],[,"([2356]\\d{2})(\\d{3,5})","$1 $2",["2(?:[278]|0[45]|[49]8)|3(?:08|17|3[78]|[78])|5[15][78]|6(?:[29]8|37|[68][78])"],
"0$1","",0],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:[278]|0[45]|48)|3(?:08|17|3[78]|[78])|5[15][78]|6(?:[29]8|37|[68][78])|80"],"0$1","",0],[,"([1-356]\\d)(\\d{3,5})","$1 $2",["1[3-9]|2(?:[1-469]|0[0-35-9]|[45][0-79])|3(?:0[0-79]|1[0-689]|[24-69]|3[0-69])|5(?:[02-46-9]|[15][0-69])|6(?:[0145]|[29][0-79]|3[0-689]|[68][0-69])"],"0$1","",0],[,"([1-356]\\d)(\\d{3})(\\d{3})","$1 $2 $3",["1[3-9]|2(?:[1-469]|0[0-35-9]|[45][0-79])|3(?:0[0-79]|1[0-689]|[24-69]|3[0-69])|5(?:[02-46-9]|[15][0-69])|6(?:[0145]|[29][0-79]|3[0-689]|[68][0-69])"],
"0$1","",0],[,"([25]\\d{3})(\\d{3,5})","$1 $2",["(?:25|54)8","258[23]|5483"],"0$1","",0],[,"([25]\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["(?:25|54)8","258[23]|5483"],"0$1","",0],[,"(8\\d{3})(\\d{6})","$1 $2",["86"],"0$1","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],800:[,[,,"\\d{8}","\\d{8}",,,"12345678"],[,,"NA","NA",,,"12345678"],[,,"NA","NA",,,"12345678"],[,,"\\d{8}","\\d{8}",,,"12345678"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"001",800,"",,,,,,,1,[[,"(\\d{4})(\\d{4})",
"$1 $2",,"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],1,,[,,"NA","NA"]],808:[,[,,"\\d{8}","\\d{8}",,,"12345678"],[,,"NA","NA",,,"12345678"],[,,"NA","NA",,,"12345678"],[,,"NA","NA"],[,,"NA","NA"],[,,"\\d{8}","\\d{8}",,,"12345678"],[,,"NA","NA"],[,,"NA","NA"],"001",808,"",,,,,,,1,[[,"(\\d{4})(\\d{4})","$1 $2",,"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],1,,[,,"NA","NA"]],870:[,[,,"[35-7]\\d{8}","\\d{9}",,,"301234567"],[,,"NA","NA",,,"301234567"],[,,"(?:[356]\\d|7[6-8])\\d{7}","\\d{9}",
,,"301234567"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"001",870,"",,,,,,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",,"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],878:[,[,,"1\\d{11}","\\d{12}",,,"101234567890"],[,,"NA","NA",,,"101234567890"],[,,"NA","NA",,,"101234567890"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"10\\d{10}","\\d{12}",,,"101234567890"],"001",878,"",,,,,,,1,[[,"(\\d{2})(\\d{5})(\\d{5})","$1 $2 $3",,"","",0]],
,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],881:[,[,,"[67]\\d{8}","\\d{9}",,,"612345678"],[,,"NA","NA",,,"612345678"],[,,"[67]\\d{8}","\\d{9}",,,"612345678"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"001",881,"",,,,,,,,[[,"(\\d)(\\d{3})(\\d{5})","$1 $2 $3",["[67]"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],882:[,[,,"[13]\\d{6,11}","\\d{7,12}",,,"3451234567"],[,,"NA","NA",,,"3451234567"],[,,"3(?:2\\d{3}|37\\d{2}|4(?:2|7\\d{3}))\\d{4}",
"\\d{7,10}",,,"3451234567"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15678]|9[0689])\\d{4}|6\\d{5,10})|345\\d{7}","\\d{7,12}",,,"3451234567"],"001",882,"",,,,,,,,[[,"(\\d{2})(\\d{4})(\\d{3})","$1 $2 $3",["3[23]"],"","",0],[,"(\\d{2})(\\d{5})","$1 $2",["16|342"],"","",0],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["34[57]"],"","",0],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["348"],"","",0],[,"(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",
["1"],"","",0],[,"(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["16"],"","",0],[,"(\\d{2})(\\d{4,5})(\\d{5})","$1 $2 $3",["16"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"348[57]\\d{7}","\\d{11}",,,"3451234567"]],883:[,[,,"51\\d{7}(?:\\d{3})?","\\d{9}(?:\\d{3})?",,,"510012345"],[,,"NA","NA",,,"510012345"],[,,"NA","NA",,,"510012345"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"51(?:00\\d{5}(?:\\d{3})?|[13]0\\d{8})","\\d{9}(?:\\d{3})?",,,"510012345"],"001",883,"",,,,,,,1,
[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["510"],"","",0],[,"(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["510"],"","",0],[,"(\\d{4})(\\d{4})(\\d{4})","$1 $2 $3",["51[13]"],"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],,,[,,"NA","NA"]],888:[,[,,"\\d{11}","\\d{11}",,,"12345678901"],[,,"NA","NA",,,"12345678901"],[,,"NA","NA",,,"12345678901"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"001",888,"",,,,,,,1,[[,"(\\d{3})(\\d{3})(\\d{5})","$1 $2 $3",,"","",0]],,[,
,"NA","NA"],,,[,,"NA","NA"],[,,"\\d{11}","\\d{11}",,,"12345678901"],1,,[,,"NA","NA"]],979:[,[,,"\\d{9}","\\d{9}",,,"123456789"],[,,"NA","NA",,,"123456789"],[,,"NA","NA",,,"123456789"],[,,"NA","NA"],[,,"\\d{9}","\\d{9}",,,"123456789"],[,,"NA","NA"],[,,"NA","NA"],[,,"NA","NA"],"001",979,"",,,,,,,1,[[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",,"","",0]],,[,,"NA","NA"],,,[,,"NA","NA"],[,,"NA","NA"],1,,[,,"NA","NA"]]};/*

 Copyright (C) 2010 The Libphonenumber Authors.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function J(){this.va={}}J.ia=function(){return J.ta?J.ta:J.ta=new J};
var K={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9"},ia={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",
7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9",A:"2",B:"2",C:"2",D:"3",E:"3",F:"3",G:"4",H:"4",I:"4",J:"5",K:"5",L:"5",M:"6",N:"6",O:"6",P:"7",
Q:"7",R:"7",S:"7",T:"8",U:"8",V:"8",W:"9",X:"9",Y:"9",Z:"9"},ja=RegExp("[+\uff0b]+"),L=RegExp("^[+\uff0b]+"),M=RegExp("([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9])"),ka=RegExp("[+\uff0b0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]"),la=/[\\\/] *x/,ma=RegExp("[^0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9A-Za-z#]+$"),na=/(?:.*?[A-Za-z]){3}.*/,oa=RegExp("(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|[,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\\.\uff0e]?[ \u00a0\\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)$",
"i"),pa=RegExp("^[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{2}$|^[+\uff0b]*(?:[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e*]*[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]){3,}[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e*A-Za-z0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]*(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|[,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\\.\uff0e]?[ \u00a0\\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)?$",
"i"),qa=/(\$\d)/,ra=/^\(?\$1\)?$/;function sa(a){var b=a.search(ka);0<=b?(a=a.substring(b),a=a.replace(ma,""),b=a.search(la),0<=b&&(a=a.substring(0,b))):a="";return a}function ta(a){return 2>a.length?!1:O(pa,a)}function ua(a){return O(na,a)?P(a,ia):P(a,K)}function va(a){var b=ua(a.toString());a.clear();a.append(b)}function P(a,b){for(var c=new B,d,f=a.length,e=0;e<f;++e)d=a.charAt(e),d=b[d.toUpperCase()],null!=d&&c.append(d);return c.toString()}
function Q(a){return null!=a&&isNaN(a)&&a.toUpperCase()in I}
J.prototype.format=function(a,b){if(0==t(a,2)&&null!=a.c[5]){var c=u(a,5);if(0<c.length)return c}var c=a.m(),d=R(a);if(0==b)return wa(c,0,d,"");if(!(c in H))return d;var f=S(this,c,T(c)),e;e=null!=a.c[3]&&0!=a.getExtension().length?3==b?";ext="+a.getExtension():null!=f.c[13]?t(f,13)+u(a,3):" ext. "+u(a,3):"";a:{for(var f=0==(s(f,20)||[]).length||2==b?s(f,19)||[]:s(f,20)||[],g,h=f.length,l=0;l<h;++l){g=f[l];var q=v(g,3);if(0==q||0==d.search(t(g,3,q-1)))if(q=new RegExp(t(g,1)),O(q,d)){f=g;break a}}f=
null}null!=f&&(h=f,f=u(h,2),g=new RegExp(t(h,1)),u(h,5),l="",h=u(h,4),l=2==b&&null!=h&&0<h.length?d.replace(g,f.replace(qa,h)):d.replace(g,f),3==b&&(l=l.replace(RegExp("^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]+"),""),l=l.replace(RegExp("[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]+","g"),"-")),d=l);return wa(c,b,d,e)};
function S(a,b,c){return"001"==c?U(a,""+b):U(a,c)}function R(a){var b=""+t(a,2);return null!=a.c[4]&&t(a,4)?Array(u(a,8)+1).join("0")+b:b}function wa(a,b,c,d){switch(b){case 0:return"+"+a+c+d;case 1:return"+"+a+" "+c+d;case 3:return"tel:+"+a+"-"+c+d;default:return c+d}}J.prototype.sa=function(a){var b;a:{if(Q(a)){var c=xa(U(this,a));try{if(null!=c.c[6]){b=this.parse(u(c,6),a);break a}}catch(d){}}b=null}return b};
function xa(a){switch(0){case 4:return t(a,5);case 3:return t(a,4);case 1:return t(a,3);case 0:case 2:return t(a,2);case 5:return t(a,6);case 6:return t(a,8);case 7:return t(a,7);case 8:return t(a,21);case 9:return t(a,25);case 10:return t(a,28);default:return t(a,1)}}
function ya(a,b){var c=t(b,1);return null!=c.c[2]&&X(a,c)?X(a,t(b,5))?4:X(a,t(b,4))?3:X(a,t(b,6))?5:X(a,t(b,8))?6:X(a,t(b,7))?7:X(a,t(b,21))?8:X(a,t(b,25))?9:X(a,t(b,28))?10:X(a,t(b,2))?t(b,18)||X(a,t(b,3))?2:0:!t(b,18)&&X(a,t(b,3))?1:-1:-1}function U(a,b){if(null==b)return null;b=b.toUpperCase();var c=a.va[b];if(null==c){c=I[b];if(null==c)return null;c=(new A).r(E.t(),c);a.va[b]=c}return c}function X(a,b){return O(u(b,3),a)&&O(u(b,2),a)}function T(a){a=H[a];return null==a?"ZZ":a[0]}
function Ca(a,b){var c=U(a,b);if(null==c)throw"Invalid region code: "+b;return c.m()}function Da(a,b){return O(a,b)?0:0==b.search(a)?3:2}function Ea(a,b){var c=a.toString();if(0==c.length||"0"==c.charAt(0))return 0;for(var d,f=c.length,e=1;3>=e&&e<=f;++e)if(d=parseInt(c.substring(0,e),10),d in H)return b.append(c.substring(e)),d;return 0}
function Fa(a,b,c,d,f){if(0==a.length)return 0;a=new B(a);var e;null!=b&&(e=t(b,11));null==e&&(e="NonMatch");var g=a.toString();if(0==g.length)e=20;else if(L.test(g))g=g.replace(L,""),a.clear(),a.append(ua(g)),e=1;else{g=new RegExp(e);va(a);e=a.toString();if(0==e.search(g)){var g=e.match(g)[0].length,h=e.substring(g).match(M);h&&null!=h[1]&&0<h[1].length&&"0"==P(h[1],K)?e=!1:(a.clear(),a.append(e.substring(g)),e=!0)}else e=!1;e=e?5:20}d&&p(f,6,e);if(20!=e){if(2>=a.e.length)throw"Phone number too short after IDD";
c=Ea(a,c);if(0!=c)return f.w(c),c;throw"Invalid country calling code";}if(null!=b&&(e=b.m(),g=""+e,h=a.toString(),0==h.lastIndexOf(g,0))){var l=new B(h.substring(g.length)),h=t(b,1),g=new RegExp(u(h,2));Ga(l,b,null);b=l.toString();h=u(h,3);if(!O(g,a.toString())&&O(g,b)||3==Da(h,a.toString()))return c.append(b),d&&p(f,6,10),f.w(e),e}f.w(0);return 0}
function Ga(a,b,c){var d=a.toString(),f=d.length,e=t(b,15);if(0!=f&&null!=e&&0!=e.length&&(e=new RegExp("^(?:"+e+")"),f=e.exec(d))){var g=RegExp,h;h=t(b,1);h=u(h,2);g=new g(h);h=O(g,d);var l=f.length-1;b=t(b,16);if(null==b||0==b.length||null==f[l]||0==f[l].length){if(!h||O(g,d.substring(f[0].length)))null!=c&&0<l&&null!=f[l]&&c.append(f[1]),a.set(d.substring(f[0].length))}else if(d=d.replace(e,b),!h||O(g,d))null!=c&&0<l&&c.append(f[1]),a.set(d)}}
J.prototype.parse=function(a,b){return Ha(this,a,b,!1)};
function Ha(a,b,c,d){if(null==b)throw"The string supplied did not seem to be a phone number";if(250<b.length)throw"The string supplied is too long to be a phone number";var f=new B,e=b.indexOf(";phone-context=");if(0<e){var g=e+15;if("+"==b.charAt(g)){var h=b.indexOf(";",g);0<h?f.append(b.substring(g,h)):f.append(b.substring(g))}g=b.indexOf("tel:");f.append(b.substring(0<=g?g+4:0,e))}else f.append(sa(b));e=f.toString();g=e.indexOf(";isub=");0<g&&(f.clear(),f.append(e.substring(0,g)));if(!ta(f.toString()))throw"The string supplied did not seem to be a phone number";
e=f.toString();if(!(Q(c)||null!=e&&0<e.length&&L.test(e)))throw"Invalid country calling code";e=new G;d&&p(e,5,b);a:{b=f.toString();g=b.search(oa);if(0<=g&&ta(b.substring(0,g)))for(var h=b.match(oa),l=h.length,q=1;q<l;++q)if(null!=h[q]&&0<h[q].length){f.clear();f.append(b.substring(0,g));b=h[q];break a}b=""}0<b.length&&p(e,3,b);g=U(a,c);b=new B;h=0;l=f.toString();try{h=Fa(l,g,b,d,e)}catch(y){if("Invalid country calling code"==y&&L.test(l)){if(l=l.replace(L,""),h=Fa(l,g,b,d,e),0==h)throw y;}else throw y;
}0!=h?(f=T(h),f!=c&&(g=S(a,h,f))):(va(f),b.append(f.toString()),null!=c?(h=g.m(),e.w(h)):d&&r(e,6));if(2>b.e.length)throw"The string supplied is too short to be a phone number";null!=g&&(a=new B,c=new B(b.toString()),Ga(c,g,a),f=c.toString(),g=t(g,1),g=u(g,3),2!=Da(g,f)&&(b=c,d&&p(e,7,a.toString())));d=b.toString();a=d.length;if(2>a)throw"The string supplied is too short to be a phone number";if(17<a)throw"The string supplied is too long to be a phone number";if(1<d.length&&"0"==d.charAt(0)){p(e,
4,!0);for(a=1;a<d.length-1&&"0"==d.charAt(a);)a++;1!=a&&p(e,8,a)}p(e,2,parseInt(d,10));return e}function O(a,b){var c="string"==typeof a?b.match("^(?:"+a+")$"):b.match(a);return c&&c[0].length==b.length?!0:!1};/*

 Copyright (C) 2010 The Libphonenumber Authors.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Ia(a){this.pa="\u2008";this.ea=new RegExp(this.pa);this.fa="";this.n=new B;this.$="";this.h=new B;this.p=new B;this.i=!0;this.u=this.o=this.ja=!1;this.na=J.ia();this.v=0;this.d=new B;this.da=!1;this.k="";this.b=new B;this.f=[];this.ga=a;this.wa=this.g=Y(this,this.ga)}var Ja=new E;p(Ja,11,"NA");
var Ka=/\[([^\[\]])*\]/g,La=/\d(?=[^,}][^,}])/g,Ma=RegExp("^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]*(\\$\\d[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]*)+$"),Na=/[- ]/;function Y(a,b){var c=Q(b)?Ca(a.na,b):0,c=U(a.na,T(c));return null!=c?c:Ja}
function Oa(a){for(var b=a.f.length,c=0;c<b;++c){var d=a.f[c],f=u(d,1);if(a.$==f)return!1;var e;e=a;var g=d,h=u(g,1);if(-1!=h.indexOf("|"))e=!1;else{h=h.replace(Ka,"\\d");h=h.replace(La,"\\d");e.n.clear();var l;l=e;var g=u(g,2),q="999999999999999".match(h)[0];q.length<l.b.e.length?l="":(h=q.replace(new RegExp(h,"g"),g),l=h=h.replace(RegExp("9","g"),l.pa));0<l.length?(e.n.append(l),e=!0):e=!1}if(e)return a.$=f,a.da=Na.test(t(d,4)),a.v=0,!0}return a.i=!1}
function Pa(a,b){for(var c=[],d=b.length-3,f=a.f.length,e=0;e<f;++e){var g=a.f[e];if(0==v(g,3))c.push(a.f[e]);else{var h=Math.min(d,v(g,3)-1),g=t(g,3,h);0==b.search(g)&&c.push(a.f[e])}}a.f=c}Ia.prototype.clear=function(){this.fa="";this.h.clear();this.p.clear();this.n.clear();this.v=0;this.$="";this.d.clear();this.k="";this.b.clear();this.i=!0;this.u=this.o=this.ja=!1;this.f=[];this.da=!1;this.g!=this.wa&&(this.g=Y(this,this.ga))};function Qa(a,b){a.fa=Ra(a,b);return a.fa}
function Ra(a,b){a.h.append(b);var c=b;if(M.test(c)||1==a.h.e.length&&ja.test(c)){var c=b,d;"+"==c?(d=c,a.p.append(c)):(d=K[c],a.p.append(d),a.b.append(d));b=d}else a.i=!1,a.ja=!0;if(!a.i){if(!a.ja)if(Sa(a)){if(Ta(a))return Ua(a)}else if(0<a.k.length&&(c=a.b.toString(),a.b.clear(),a.b.append(a.k),a.b.append(c),c=a.d.toString(),d=c.lastIndexOf(a.k),a.d.clear(),a.d.append(c.substring(0,d))),a.k!=Va(a))return a.d.append(" "),Ua(a);return a.h.toString()}switch(a.p.e.length){case 0:case 1:case 2:return a.h.toString();
case 3:if(Sa(a))a.u=!0;else return a.k=Va(a),Z(a);default:if(a.u)return Ta(a)&&(a.u=!1),a.d.toString()+a.b.toString();if(0<a.f.length){c=Wa(a,b);d=Xa(a);if(0<d.length)return d;Pa(a,a.b.toString());return Oa(a)?Ya(a):a.i?$(a,c):a.h.toString()}return Z(a)}}function Ua(a){a.i=!0;a.u=!1;a.f=[];return Z(a)}
function Xa(a){for(var b=a.b.toString(),c=a.f.length,d=0;d<c;++d){var f=a.f[d],e=u(f,1);if((new RegExp("^(?:"+e+")$")).test(b))return a.da=Na.test(t(f,4)),b=b.replace(new RegExp(e,"g"),t(f,2)),$(a,b)}return""}function $(a,b){var c=a.d.e.length;return a.da&&0<c&&" "!=a.d.toString().charAt(c-1)?a.d+" "+b:a.d+b}
function Z(a){var b=a.b.toString();if(3<=b.length){for(var c=a.o&&0<v(a.g,20)?s(a.g,20)||[]:s(a.g,19)||[],d=c.length,f=0;f<d;++f){var e=c[f],g;(g=null==a.g.c[12]||a.o||t(e,6))||(g=u(e,4),g=0==g.length||ra.test(g));g&&(g=u(e,2),Ma.test(g)&&a.f.push(e))}Pa(a,b);b=Xa(a);return 0<b.length?b:Oa(a)?Ya(a):a.h.toString()}return $(a,b)}function Ya(a){var b=a.b.toString(),c=b.length;if(0<c){for(var d="",f=0;f<c;f++)d=Wa(a,b.charAt(f));return a.i?$(a,d):a.h.toString()}return a.d.toString()}
function Va(a){var b=a.b.toString(),c=0,d;1!=a.g.ra()?d=!1:(d=a.b.toString(),d="1"==d.charAt(0)&&"0"!=d.charAt(1)&&"1"!=d.charAt(1));d?(c=1,a.d.append("1").append(" "),a.o=!0):null!=a.g.c[15]&&(d=new RegExp("^(?:"+t(a.g,15)+")"),d=b.match(d),null!=d&&null!=d[0]&&0<d[0].length&&(a.o=!0,c=d[0].length,a.d.append(b.substring(0,c))));a.b.clear();a.b.append(b.substring(c));return b.substring(0,c)}
function Sa(a){var b=a.p.toString(),c=new RegExp("^(?:\\+|"+t(a.g,11)+")"),c=b.match(c);return null!=c&&null!=c[0]&&0<c[0].length?(a.o=!0,c=c[0].length,a.b.clear(),a.b.append(b.substring(c)),a.d.clear(),a.d.append(b.substring(0,c)),"+"!=b.charAt(0)&&a.d.append(" "),!0):!1}function Ta(a){if(0==a.b.e.length)return!1;var b=new B,c=Ea(a.b,b);if(0==c)return!1;a.b.clear();a.b.append(b.toString());b=T(c);"001"==b?a.g=U(a.na,""+c):b!=a.ga&&(a.g=Y(a,b));a.d.append(""+c).append(" ");a.k="";return!0}
function Wa(a,b){var c=a.n.toString();if(0<=c.substring(a.v).search(a.ea)){var d=c.search(a.ea),c=c.replace(a.ea,b);a.n.clear();a.n.append(c);a.v=d;return c.substring(0,a.v+1)}1==a.f.length&&(a.i=!1);a.$="";return a.h.toString()};k("intlTelInputUtils",{});k("intlTelInputUtils.formatNumber",function(a,b){try{if("+"!=a.substr(0,1))return a;for(var c="+"+a.replace(/\D/g,""),d=new Ia(""),f,e=0;e<c.length;e++)f=Qa(d,c.charAt(e));" "==f.charAt(f.length-1)&&(f=f.substr(0,f.length-1));if(b){var g=Qa(d,"5");-1!==g.indexOf(" ")&&(f=g.substr(0,g.length-1))}return f}catch(h){return a}});
k("intlTelInputUtils.isValidNumber",function(a,b){try{var c=J.ia();if(!Q(b)&&0<a.length&&"+"!=a.charAt(0))throw"Invalid country calling code";var d=Ha(c,a,b,!0),f;if(null==d)f=null;else{var e=d.m(),g=H[e],h;if(null==g)h=null;else{var l;if(1==g.length)l=g[0];else b:{for(var q=R(d),y,Za=g.length,e=0;e<Za;e++){y=g[e];var V=U(c,y);if(null!=V.c[23]){if(0==q.search(t(V,23))){l=y;break b}}else if(-1!=ya(q,V)){l=y;break b}}l=null}h=l}f=h}var N;var za=d.m(),W=S(c,za,f);if(null==W||"001"!=f&&za!=Ca(c,f))N=
!1;else{var $a=t(W,1),Aa=R(d);if(null!=$a.c[2])N=-1!=ya(Aa,W);else{var Ba=Aa.length;N=2<Ba&&17>=Ba}}return N}catch(ab){return!1}});k("intlTelInputUtils.getExampleNumber",function(a){var b=J.ia();a=b.sa(a);return b.format(a,1)});})();
 (function () {
//時間を取得する
var timeData = $.ajax({
		url: '/assets/business_time.json',
		dataType: 'json'
	});

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var dayNames = ["sun","mon","tue","wed","thu","fri","sat"];

//normalTimerは、通常時の時間取得間隔
//beforeimerは、指定時直前の時間取得間隔
var d,
	todate,
	today,
	timenow,
	nowminute,
	updateTimer,
	normalTimer = 1000*60*20,
	beforeimer = 1000*60*5;

function dateString(d){
  function pad(n){return n<10 ? '0'+n : n;}
	return monthNames[d.getMonth()]+' ' + pad(d.getUTCDate())+', ' + d.getUTCFullYear();
}

function businessTimeFunc(timeDataArray){
//日付の配列
	var holidaysArray = timeDataArray['holidays'];
	var workWeekArray = timeDataArray['work_week'];
	var businessTimeArray = timeDataArray['business_time'];
	var workdayFlag = true;
	var workWeekFlag = false;
	var workTimeFlag = false;
//現在時刻
	d = new Date();

//日付の判定　今日は祝日に含まれていないか
	todate = dateString(d);
	$.each(holidaysArray,
		function(index, elem) {
			if( todate == elem ){
				workdayFlag = false;
				return false;
			}
		}
	);

//曜日の判定　今日は勤務曜日か
	today = dayNames[d.getDay()];
	$.each(workWeekArray,
		function(index, elem) {
			if( today == elem ){
				workWeekFlag = true;
				return false;
			}
		}
	);

//時間の判定　今は勤務時間か
	timenow = d.getHours();
	nowminute = d.getMinutes();
	if( businessTimeArray['beginning_of_workday_time'] <= timenow && timenow < businessTimeArray['end_of_workday_time']){
		if( businessTimeArray['beginning_of_workday_time'] == timenow){
			if( businessTimeArray['beginning_of_workday_minute'] <= nowminute){
				updateTimer = normalTimer;
				workTimeFlag = true;
			}else{
				updateTimer = beforeimer;
				workTimeFlag = false;
			}
		}else if( timenow == businessTimeArray['end_of_workday_time']){
			if(nowminute <= businessTimeArray['end_of_workday_minute']){
				updateTimer = normalTimer;
				workTimeFlag = false;
			}else{
				updateTimer = beforeimer;
				workTimeFlag = true;
			}
		}else{
			updateTimer = normalTimer;
			workTimeFlag = true;
		}
	}else if( businessTimeArray['beginning_of_workday_time']-1 == timenow){
		if( nowminute <= 40){
			updateTimer = beforeimer;
		}else{
			updateTimer = normalTimer;
		}
		workTimeFlag = false;
	}else if(businessTimeArray['end_of_workday_time']-1 == timenow){
		if( nowminute <= 40){
			updateTimer = beforeimer;
		}else{
			updateTimer = normalTimer;
		}
		workTimeFlag = true;
	}else{
		updateTimer = normalTimer;
		workTimeFlag = false;
	}


//表示設定
	if(workdayFlag){
		if(workWeekFlag){
			if(workTimeFlag){
				$('#sleep_wrapper_normal').hide();
				$('#active_wrapper_normal').show();
				console.log('勤務時間中です。ウェルカム！');
			}else{
				$('#active_wrapper_normal').hide();
				$('#sleep_wrapper_normal').show();
				console.log('勤務時間外');
			}
		}else{
			$('#active_wrapper_normal').hide();
			$('#sleep_wrapper_normal').show();
			console.log('今日は休みの曜日');
		}
	}else{
		$('#active_wrapper_normal').hide();
		$('#sleep_wrapper_normal').show();
		console.log('今日は祝日');
	}

	console.log(updateTimer);
	setTimeout(function(){
		businessTimeFunc(timeDataArray);
	},updateTimer);
}


//共通仕様フラグ
var callFlag = true;

//待機画面タイマー
var timerRefresh,
	timerWaiting01,
	timerMain01,
	timerMain02,
	timerSuccess01;

	$.extend({
		wait: function(waitTime){
			var dfd = $.Deferred();
			setTimeout(dfd.resolve, waitTime);
			return dfd;
		}
	});

	function changeLayer(hideLayer,showLayer){
		$(hideLayer).fadeOut(1000);
		$(showLayer).fadeIn(1000);
	}

//待機画面の予約(セット時点より60s後)
	function timerWaiting01Func(){
		timerWaiting01 = $.wait(60000).done(function(){
			changeLayer('#form_main','#waiting');
		}).fail(function(){
			console.log('timerWaiting01reject');
		});
	}


	$(function() {
//通常モードなら、時間を取得して表示を切り替える
		timeData.done(function(timeDataArray) {
			businessTimeFunc(timeDataArray);
		});
		timeData.fail(function() {
			alert('ファイルがうまく読み込めませんでした。お手数ですが再読み込みをお願いします。');
		});

//読み込み時の処理
//画面組み立て
		var wid = $(window).width() + 'px',
			hei = $(window).height(),
			headh = $('#header').height(),
			radioh = hei - headh,
			layer = $('#wrapper,#waiting,#modal_window,#alert_success,#alert_warning'),
			rects = document.getElementsByClassName('rect');

		hei = hei + 'px';
		radioh = radioh + 'px';

		layer.css('width', wid);
		layer.css('height', hei);

		$('#radio_area').css('height', radioh);

//読み込み終了直後の処理
		window.onload = function() {
			for(var i=0; i<rects.length; i++) {
				$(rects[i]).css('width', wid);
				$(rects[i]).css('height', hei);
			}
			$('.rect').show();
			$('#waiting,#modal_window,#alert_success,#alert_warning').hide();
			timerWaiting01Func();
		};

//待機画面メイン起動
		$('#waiting').on('touchstart', function(e) {
			e.preventDefault();
			timerWaiting01.reject();
			changeLayer('#waiting','#form_main');
			timerWaiting01Func();
		});

//呼び出し起動
var startLeft, startTop;
/* タッチできる環境なら true、そうでないなら false 。
   ここで先に判別しておきます。 */
var isTouch = ('ontouchstart' in window);

/* イベントを jQuery.on で捕獲します。 */
$('.form-group label').on({
	/* タッチの開始、マウスボタンを押したとき */
	'touchstart': function(e) {
		// 開始位置 X,Y 座標を覚えておく
		this.pageX = (isTouch ? event.changedTouches[0].pageX : e.pageX);
		this.pageY = (isTouch ? event.changedTouches[0].pageY : e.pageY);
		// 現在の場所を覚えておく
		startLeft = this.pageX
		startTop = this.pageY
		// タッチ処理を開始したフラグをたてる
		this.touched = true;
	},
	/* タッチしながら移動、マウスのドラッグ */
	'touchmove': function(e) {
		// 開始していない場合は動かないようにする
		// 過剰動作の防止
		if (!this.touched) {
			return;
		}
		// 位置 X,Y 座標を覚えておく
		this.pageX = (isTouch ? event.changedTouches[0].pageX : e.pageX);
		this.pageY = (isTouch ? event.changedTouches[0].pageY : e.pageY);
	},
	/* タッチの終了、マウスのドラッグの終了 */
	'touchend': function(e) {
		if (!this.touched) {
			return;
		}
		// タッチ処理は終了したため、フラグをたたむ
		this.touched = false;
		// 必要なら以下で最終の位置を取得し初期状態との差を出す。
		moveLeft = startLeft - this.pageX;
		moveTop = startTop - this.pageY;

		//タップ位置が動いているか判定し、動きが50px未満なら呼び出し動作に入る
		if( -50 <= moveLeft && moveLeft <= 50 && -50 <= moveTop && moveTop <= 50 ){
			var callName,
				callImg;
			timerWaiting01.reject();
			timerRefresh = $.wait(40000).done(function(){
				$('#modal_window').hide();
				timerWaiting01Func();
			}).fail(function(){
				console.log('timerRefreshreject');
			});
			callName = $(this).text().replace(/[\n\r]/g,'');
			callImg = $(this).find('img').attr('src');
			$('#modal_window p').html(callName+'を<br>呼び出しますか？');
			$('#alert_success .nametxt').text(callName);
			$('#alert_success .img-rounded').attr('src',callImg);
			$(this).find('input').prop('checked', true);
			$('#modal_window').show();
		}
	}
});
/*		$('.form-group label').on('touchend', function(e) {
			var callName,
				callImg;
			timerWaiting01.reject();
			timerRefresh = $.wait(40000).done(function(){
				$('#modal_window').hide();
				timerWaiting01Func();
			}).fail(function(){
				console.log('timerRefreshreject');
			});
			callName = $(this).text().replace(/[\n\r]/g,'');
			callImg = $(this).find('img').attr('src');
			$('#modal_window p').html(callName+'を<br>呼び出しますか？');
			$('#alert_success .nametxt').text(callName);
			$('#alert_success .img-rounded').attr('src',callImg);
			$(this).find('input').prop('checked', true);
			$('#modal_window').show();
		});
*/

		$('#modal_window #call').on('touchstart', function(e) {
			e.preventDefault();
			console.log('callFlag'+callFlag);
			if(callFlag == true){
				callFlag = false;
				console.log('callFlag'+callFlag);
				timerRefresh.reject();
				$('#modal_window').hide();
				console.log($("input[name='phone']:checked").val());
				$('#contactform').submit();
				timerSuccess01 = $.wait(2000).done(function(){
					changeLayer('#form_main','#alert_success');
					$('#alert_success .maintxt-response,#alert_success .img-response').hide();
					$('#alert_success .maintxt').fadeIn(1000);
				}).fail(function(){
					console.log('timerSuccess01reject');
				});
			}
		});

		$('#modal_window #cancel').on('touchstart', function(e) {
			e.preventDefault();
			timerRefresh.reject();
			$('#modal_window').hide();
			timerWaiting01Func();
		});


//呼び出し後キャンセルボタン
		$('#alert_success .cancelbtn').on('touchstart', function(e) {
			e.preventDefault();
			request.abort();
			changeLayer('#alert_success','#form_main');
			timerWaiting01Func();
		});

		$('#alert_warning .cancelbtn').on('touchstart', function(e) {
			e.preventDefault();
			request.abort();
			timerMain02.reject();
			changeLayer('#alert_warning','#form_main');
			timerWaiting01Func();
		});

//呼び出しフォームの設定
		$('#phoneNumber').intlTelInput({
			responsiveDropdown: true,
			autoFormat: true,
			utilsScript: 'assets/intl-phone/libphonenumber/build/utils.js'
		});

//呼び出し処理
		var $form = $('#contactform'),
			$submit = $('#contactform input[type=submit]'),
			request;

// Intercept form submission
		$form.on('submit', function(e) {
// Prevent form submission and repeat clicks
			e.preventDefault();
			$submit.attr('disabled', 'disabled');
// Submit the form via ajax
			request = $.ajax({
				url:'/call',
				method:'POST',
				data: $form.serialize()
			}).done(function(data) {
//呼び出し成功;
				console.log(data.message);
				if(data.message == 'yes'){
					$('#alert_success .maintxt').hide();
					$('#alert_success .maintxt-response,#alert_success .img-response').show();
					timerMain01 = $.wait(30000).done(function(){
						changeLayer('#alert_success','#form_main');
					}).fail(function(){
						console.log('timerMain01reject');
					});
					timerWaiting01Func();
				}else{
					$('#alert_warning .maintxt').html('誰もいないようです<br>弊社の営業時間は月曜日から金曜日の<br>10時半から20時までです');
					timerSuccess01.reject();
					changeLayer('#alert_success,#form_main','#alert_warning');
					timerMain02 = $.wait(30000).done(function(){
						changeLayer('#alert_warning','#form_main');
					}).fail(function(){
						console.log('timerMain02reject');
					});
					timerWaiting01Func();
				}
			}).fail(function(XMLHttpRequest) {
//エラー処理
				var errStatus = XMLHttpRequest.status;
				console.log(errStatus);
				if(errStatus == 503){
					$('#alert_warning .maintxt').html('誰もいないようです<br>弊社の営業時間は月曜日から金曜日の<br>10時半から20時までです');
				}else{
					$('#alert_warning .maintxt').html('うまくつながらないようです<br>あらためて呼び出してください<br>それでもつながらない場合はドアからお入りいただき、<br>エントランスの呼び鈴を鳴らしてください');
				}
				timerSuccess01.reject();
				if(errStatus == 0){
				}else{
					changeLayer('#alert_success,#form_main','#alert_warning');
					timerMain02 = $.wait(30000).done(function(){
						changeLayer('#alert_warning','#form_main');
					}).fail(function(){
						console.log('timerMain02reject');
					});
					timerWaiting01Func();
				}
			}).always(function() {
				$submit.removeAttr('disabled');
				callFlag = true;
				console.log('callFlag'+callFlag);
			});
		});

//ロゴをタップしたらリロード
		$('#waiting h1,#header h1,#sleep_attention h1').on('touchstart', function(e) {
			e.preventDefault();
			document.location.reload(true);
		});


//休止モード
		$('#sleep_wrapper,#sleep_status,#sleep_attention').css({
			'width': wid,
			'min-height': hei
		});


		$('#sleep_attention .cancelbtn').on('touchstart', function(e) {
			e.preventDefault();
			changeLayer('#sleep_attention','#sleep_status');
		});

		$('#sleep_status .cancelbtn').on('touchstart', function(e) {
			e.preventDefault();
			changeLayer('#sleep_status','#sleep_attention');
		});
	});
}());
// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
;
(function($, undefined) {

    /**
     * Unobtrusive scripting adapter for jQuery
     * https://github.com/rails/jquery-ujs
     *
     * Requires jQuery 1.8.0 or later.
     *
     * Released under the MIT license
     *
     */

        // Cut down on the number of issues from people inadvertently including jquery_ujs twice
        // by detecting and raising an error when it happens.
    'use strict';

    if ( $.rails !== undefined ) {
        $.error('jquery-ujs has already been loaded!');
    }

    // Shorthand to make it a little easier to call public rails functions from within rails.js
    var rails;
    var $document = $(document);

    $.rails = rails = {
        // Link elements bound by jquery-ujs
        linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]',

        // Button elements bound by jquery-ujs
        buttonClickSelector: 'button[data-remote]:not(form button), button[data-confirm]:not(form button)',

        // Select elements bound by jquery-ujs
        inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',

        // Form elements bound by jquery-ujs
        formSubmitSelector: 'form',

        // Form input elements bound by jquery-ujs
        formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',

        // Form input elements disabled during form submission
        disableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',

        // Form input elements re-enabled after form submission
        enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',

        // Form required input elements
        requiredInputSelector: 'input[name][required]:not([disabled]),textarea[name][required]:not([disabled])',

        // Form file input elements
        fileInputSelector: 'input[type=file]',

        // Link onClick disable selector with possible reenable after remote submission
        linkDisableSelector: 'a[data-disable-with], a[data-disable]',

        // Button onClick disable selector with possible reenable after remote submission
        buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]',

        // Up-to-date Cross-Site Request Forgery token
        csrfToken: function() {
            return $('meta[name=csrf-token]').attr('content');
        },

        // URL param that must contain the CSRF token
        csrfParam: function() {
            return $('meta[name=csrf-param]').attr('content');
        },

        // Make sure that every Ajax request sends the CSRF token
        CSRFProtection: function(xhr) {
            var token = rails.csrfToken();
            if (token) xhr.setRequestHeader('X-CSRF-Token', token);
        },

        // making sure that all forms have actual up-to-date token(cached forms contain old one)
        refreshCSRFTokens: function(){
            $('form input[name="' + rails.csrfParam() + '"]').val(rails.csrfToken());
        },

        // Triggers an event on an element and returns false if the event result is false
        fire: function(obj, name, data) {
            var event = $.Event(name);
            obj.trigger(event, data);
            return event.result !== false;
        },

        // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
        confirm: function(message) {
            return confirm(message);
        },

        // Default ajax function, may be overridden with custom function in $.rails.ajax
        ajax: function(options) {
            return $.ajax(options);
        },

        // Default way to get an element's href. May be overridden at $.rails.href.
        href: function(element) {
            return element[0].href;
        },

        // Checks "data-remote" if true to handle the request through a XHR request.
        isRemote: function(element) {
            return element.data('remote') !== undefined && element.data('remote') !== false;
        },

        // Submits "remote" forms and links with ajax
        handleRemote: function(element) {
            var method, url, data, withCredentials, dataType, options;

            if (rails.fire(element, 'ajax:before')) {
                withCredentials = element.data('with-credentials') || null;
                dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType);

                if (element.is('form')) {
                    method = element.attr('method');
                    url = element.attr('action');
                    data = element.serializeArray();
                    // memoized value from clicked submit button
                    var button = element.data('ujs:submit-button');
                    if (button) {
                        data.push(button);
                        element.data('ujs:submit-button', null);
                    }
                } else if (element.is(rails.inputChangeSelector)) {
                    method = element.data('method');
                    url = element.data('url');
                    data = element.serialize();
                    if (element.data('params')) data = data + '&' + element.data('params');
                } else if (element.is(rails.buttonClickSelector)) {
                    method = element.data('method') || 'get';
                    url = element.data('url');
                    data = element.serialize();
                    if (element.data('params')) data = data + '&' + element.data('params');
                } else {
                    method = element.data('method');
                    url = rails.href(element);
                    data = element.data('params') || null;
                }

                options = {
                    type: method || 'GET', data: data, dataType: dataType,
                    // stopping the "ajax:beforeSend" event will cancel the ajax request
                    beforeSend: function(xhr, settings) {
                        if (settings.dataType === undefined) {
                            xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
                        }
                        if (rails.fire(element, 'ajax:beforeSend', [xhr, settings])) {
                            element.trigger('ajax:send', xhr);
                        } else {
                            return false;
                        }
                    },
                    success: function(data, status, xhr) {
                        element.trigger('ajax:success', [data, status, xhr]);
                    },
                    complete: function(xhr, status) {
                        element.trigger('ajax:complete', [xhr, status]);
                    },
                    error: function(xhr, status, error) {
                        element.trigger('ajax:error', [xhr, status, error]);
                    },
                    crossDomain: rails.isCrossDomain(url)
                };

                // There is no withCredentials for IE6-8 when
                // "Enable native XMLHTTP support" is disabled
                if (withCredentials) {
                    options.xhrFields = {
                        withCredentials: withCredentials
                    };
                }

                // Only pass url to `ajax` options if not blank
                if (url) { options.url = url; }

                return rails.ajax(options);
            } else {
                return false;
            }
        },

        // Determines if the request is a cross domain request.
        isCrossDomain: function(url) {
            var originAnchor = document.createElement('a');
            originAnchor.href = location.href;
            var urlAnchor = document.createElement('a');

            try {
                urlAnchor.href = url;
                // This is a workaround to a IE bug.
                urlAnchor.href = urlAnchor.href;

                // Make sure that the browser parses the URL and that the protocols and hosts match.
                return !urlAnchor.protocol || !urlAnchor.host ||
                    (originAnchor.protocol + '//' + originAnchor.host !==
                    urlAnchor.protocol + '//' + urlAnchor.host);
            } catch (e) {
                // If there is an error parsing the URL, assume it is crossDomain.
                return true;
            }
        },

        // Handles "data-method" on links such as:
        // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
        handleMethod: function(link) {
            var href = rails.href(link),
                method = link.data('method'),
                target = link.attr('target'),
                csrfToken = rails.csrfToken(),
                csrfParam = rails.csrfParam(),
                form = $('<form method="post" action="' + href + '"></form>'),
                metadataInput = '<input name="_method" value="' + method + '" type="hidden" />';

            if (csrfParam !== undefined && csrfToken !== undefined && !rails.isCrossDomain(href)) {
                metadataInput += '<input name="' + csrfParam + '" value="' + csrfToken + '" type="hidden" />';
            }

            if (target) { form.attr('target', target); }

            form.hide().append(metadataInput).appendTo('body');
            form.submit();
        },

        // Helper function that returns form elements that match the specified CSS selector
        // If form is actually a "form" element this will return associated elements outside the from that have
        // the html form attribute set
        formElements: function(form, selector) {
            return form.is('form') ? $(form[0].elements).filter(selector) : form.find(selector);
        },

        /* Disables form elements:
         - Caches element value in 'ujs:enable-with' data store
         - Replaces element text with value of 'data-disable-with' attribute
         - Sets disabled property to true
         */
        disableFormElements: function(form) {
            rails.formElements(form, rails.disableSelector).each(function() {
                rails.disableFormElement($(this));
            });
        },

        disableFormElement: function(element) {
            var method, replacement;

            method = element.is('button') ? 'html' : 'val';
            replacement = element.data('disable-with');

            element.data('ujs:enable-with', element[method]());
            if (replacement !== undefined) {
                element[method](replacement);
            }

            element.prop('disabled', true);
        },

        /* Re-enables disabled form elements:
         - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
         - Sets disabled property to false
         */
        enableFormElements: function(form) {
            rails.formElements(form, rails.enableSelector).each(function() {
                rails.enableFormElement($(this));
            });
        },

        enableFormElement: function(element) {
            var method = element.is('button') ? 'html' : 'val';
            if (element.data('ujs:enable-with')) element[method](element.data('ujs:enable-with'));
            element.prop('disabled', false);
        },

        /* For 'data-confirm' attribute:
         - Fires `confirm` event
         - Shows the confirmation dialog
         - Fires the `confirm:complete` event

         Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
         Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
         Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
         return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
         */
        allowAction: function(element) {
            var message = element.data('confirm'),
                answer = false, callback;
            if (!message) { return true; }

            if (rails.fire(element, 'confirm')) {
                try {
                    answer = rails.confirm(message);
                } catch (e) {
                    (console.error || console.log).call(console, e.stack || e);
                }
                callback = rails.fire(element, 'confirm:complete', [answer]);
            }
            return answer && callback;
        },

        // Helper function which checks for blank inputs in a form that match the specified CSS selector
        blankInputs: function(form, specifiedSelector, nonBlank) {
            var inputs = $(), input, valueToCheck,
                selector = specifiedSelector || 'input,textarea',
                allInputs = form.find(selector);

            allInputs.each(function() {
                input = $(this);
                valueToCheck = input.is('input[type=checkbox],input[type=radio]') ? input.is(':checked') : !!input.val();
                if (valueToCheck === nonBlank) {

                    // Don't count unchecked required radio if other radio with same name is checked
                    if (input.is('input[type=radio]') && allInputs.filter('input[type=radio]:checked[name="' + input.attr('name') + '"]').length) {
                        return true; // Skip to next input
                    }

                    inputs = inputs.add(input);
                }
            });
            return inputs.length ? inputs : false;
        },

        // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
        nonBlankInputs: function(form, specifiedSelector) {
            return rails.blankInputs(form, specifiedSelector, true); // true specifies nonBlank
        },

        // Helper function, needed to provide consistent behavior in IE
        stopEverything: function(e) {
            $(e.target).trigger('ujs:everythingStopped');
            e.stopImmediatePropagation();
            return false;
        },

        //  replace element's html with the 'data-disable-with' after storing original html
        //  and prevent clicking on it
        disableElement: function(element) {
            var replacement = element.data('disable-with');

            element.data('ujs:enable-with', element.html()); // store enabled state
            if (replacement !== undefined) {
                element.html(replacement);
            }

            element.bind('click.railsDisable', function(e) { // prevent further clicking
                return rails.stopEverything(e);
            });
        },

        // restore element to its original state which was disabled by 'disableElement' above
        enableElement: function(element) {
            if (element.data('ujs:enable-with') !== undefined) {
                element.html(element.data('ujs:enable-with')); // set to old enabled state
                element.removeData('ujs:enable-with'); // clean up cache
            }
            element.unbind('click.railsDisable'); // enable element
        }
    };

    if (rails.fire($document, 'rails:attachBindings')) {

        $.ajaxPrefilter(function(options, originalOptions, xhr){ if ( !options.crossDomain ) { rails.CSRFProtection(xhr); }});

        // This event works the same as the load event, except that it fires every
        // time the page is loaded.
        //
        // See https://github.com/rails/jquery-ujs/issues/357
        // See https://developer.mozilla.org/en-US/docs/Using_Firefox_1.5_caching
        $(window).on('pageshow.rails', function () {
            $($.rails.enableSelector).each(function () {
                var element = $(this);

                if (element.data('ujs:enable-with')) {
                    $.rails.enableFormElement(element);
                }
            });

            $($.rails.linkDisableSelector).each(function () {
                var element = $(this);

                if (element.data('ujs:enable-with')) {
                    $.rails.enableElement(element);
                }
            });
        });

        $document.delegate(rails.linkDisableSelector, 'ajax:complete', function() {
            rails.enableElement($(this));
        });

        $document.delegate(rails.buttonDisableSelector, 'ajax:complete', function() {
            rails.enableFormElement($(this));
        });

        $document.delegate(rails.linkClickSelector, 'click.rails', function(e) {
            var link = $(this), method = link.data('method'), data = link.data('params'), metaClick = e.metaKey || e.ctrlKey;
            if (!rails.allowAction(link)) return rails.stopEverything(e);

            if (!metaClick && link.is(rails.linkDisableSelector)) rails.disableElement(link);

            if (rails.isRemote(link)) {
                if (metaClick && (!method || method === 'GET') && !data) { return true; }

                var handleRemote = rails.handleRemote(link);
                // response from rails.handleRemote() will either be false or a deferred object promise.
                if (handleRemote === false) {
                    rails.enableElement(link);
                } else {
                    handleRemote.fail( function() { rails.enableElement(link); } );
                }
                return false;

            } else if (method) {
                rails.handleMethod(link);
                return false;
            }
        });

        $document.delegate(rails.buttonClickSelector, 'click.rails', function(e) {
            var button = $(this);

            if (!rails.allowAction(button) || !rails.isRemote(button)) return rails.stopEverything(e);

            if (button.is(rails.buttonDisableSelector)) rails.disableFormElement(button);

            var handleRemote = rails.handleRemote(button);
            // response from rails.handleRemote() will either be false or a deferred object promise.
            if (handleRemote === false) {
                rails.enableFormElement(button);
            } else {
                handleRemote.fail( function() { rails.enableFormElement(button); } );
            }
            return false;
        });

        $document.delegate(rails.inputChangeSelector, 'change.rails', function(e) {
            var link = $(this);
            if (!rails.allowAction(link) || !rails.isRemote(link)) return rails.stopEverything(e);

            rails.handleRemote(link);
            return false;
        });

        $document.delegate(rails.formSubmitSelector, 'submit.rails', function(e) {
            var form = $(this),
                remote = rails.isRemote(form),
                blankRequiredInputs,
                nonBlankFileInputs;

            if (!rails.allowAction(form)) return rails.stopEverything(e);

            // skip other logic when required values are missing or file upload is present
            if (form.attr('novalidate') === undefined) {
                blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector, false);
                if (blankRequiredInputs && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
                    return rails.stopEverything(e);
                }
            }

            if (remote) {
                nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);
                if (nonBlankFileInputs) {
                    // slight timeout so that the submit button gets properly serialized
                    // (make it easy for event handler to serialize form without disabled values)
                    setTimeout(function(){ rails.disableFormElements(form); }, 13);
                    var aborted = rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);

                    // re-enable form elements if event bindings return false (canceling normal form submission)
                    if (!aborted) { setTimeout(function(){ rails.enableFormElements(form); }, 13); }

                    return aborted;
                }

                rails.handleRemote(form);
                return false;

            } else {
                // slight timeout so that the submit button gets properly serialized
                setTimeout(function(){ rails.disableFormElements(form); }, 13);
            }
        });

        $document.delegate(rails.formInputClickSelector, 'click.rails', function(event) {
            var button = $(this);

            if (!rails.allowAction(button)) return rails.stopEverything(event);

            // register the pressed submit button
            var name = button.attr('name'),
                data = name ? {name:name, value:button.val()} : null;

            button.closest('form').data('ujs:submit-button', data);
        });

        $document.delegate(rails.formSubmitSelector, 'ajax:send.rails', function(event) {
            if (this === event.target) rails.disableFormElements($(this));
        });

        $document.delegate(rails.formSubmitSelector, 'ajax:complete.rails', function(event) {
            if (this === event.target) rails.enableFormElements($(this));
        });

        $(function(){
            rails.refreshCSRFTokens();
        });
    }

})( jQuery );
// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
;
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//





;
