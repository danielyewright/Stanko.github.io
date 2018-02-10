!function(e){function t(s){if(n[s])return n[s].exports;var a=n[s]={i:s,l:!1,exports:{}};return e[s].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,s){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:s})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){(function(){"use strict";function n(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];if(e instanceof HTMLElement)if(t.element&&t.element instanceof HTMLElement)e=e.getBoundingClientRect().top+t.element.scrollTop-t.element.getBoundingClientRect().top;else{var n=window.scrollY||document.documentElement.scrollTop;e=n+e.getBoundingClientRect().top}for(var s={speed:500,minDuration:250,maxDuration:1500,cancelOnUserAction:!0,element:window,onComplete:void 0},a=Object.keys(s),o=0;o<a.length;o++){var l=a[o];void 0!==t[l]&&(s[l]=t[l])}s.isWindow=s.element===window;var c=null,r=null;s.isWindow?(c=window.scrollY||document.documentElement.scrollTop,r=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-window.innerHeight):(c=s.element.scrollTop,r=s.element.scrollHeight-s.element.clientHeight),e>r&&(e=r);var i=e-c;if(0===i)return void(s.onComplete&&"function"==typeof s.onComplete&&s.onComplete());var u=Math.abs(Math.round(i/1e3*s.speed));u<s.minDuration?u=s.minDuration:u>s.maxDuration&&(u=s.maxDuration);var m=Date.now(),d=null,f=null;s.cancelOnUserAction?(f=function(){v(),cancelAnimationFrame(d)},window.addEventListener("keydown",f),window.addEventListener("mousedown",f)):(f=function(e){e.preventDefault()},window.addEventListener("scroll",f)),window.addEventListener("wheel",f),window.addEventListener("touchstart",f);var v=function(){window.removeEventListener("wheel",f),window.removeEventListener("touchstart",f),s.cancelOnUserAction?(window.removeEventListener("keydown",f),window.removeEventListener("mousedown",f)):window.removeEventListener("scroll",f)},p=function(){var t=Date.now()-m,n=t/u-1,a=n*n*n+1,o=Math.round(c+i*a);t<u&&o!==e?(s.isWindow?s.element.scrollTo(0,o):s.element.scrollTop=o,d=requestAnimationFrame(p)):(s.isWindow?s.element.scrollTo(0,e):s.element.scrollTop=e,cancelAnimationFrame(d),v(),s.onComplete&&"function"==typeof s.onComplete&&s.onComplete())};d=requestAnimationFrame(p)}void 0!==e&&e.exports&&(e.exports=n,t=e.exports),t.default=n}).call(this)},function(e,t,n){"use strict";n(2),n(3),n(4),n(5),n(6),n(7),n(8),n(9),n(11)},function(e,t,n){"use strict";function s(e,t,n,s){var a=new XMLHttpRequest;a.open("POST",e),a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.onload=function(){200===a.status?n(a.responseText):200!==a.status&&s(a.responseText)},a.send(encodeURI(t))}var a=document.querySelector(".CommentForm"),o=document.querySelectorAll(".CommentForm-input"),l=document.querySelector(".CommentForm-input--slug"),c=document.querySelector(".CommentForm-input--optionsSlug"),r=document.querySelector(".CommentForm-input--name"),i=document.querySelector(".CommentForm-input--catch"),u=document.querySelector(".CommentForm-input--email"),m=document.querySelector(".CommentForm-input--message"),d=document.querySelector(".CommentForm-errorMessages"),f=document.querySelector(".CommentForm-sendFailed"),v=document.querySelector(".CommentForm-sendSucceeded"),p=document.querySelector(".CommentForm-overlay");a&&a.addEventListener("submit",function(e){e.preventDefault(),d.innerHTML="",f.style.display="none",v.style.display="none";var t=l.value.trim(),n=c.value.trim(),N=r.value.trim(),y=i.value.trim(),h=u.value.trim(),g=m.value.trim(),w=!1,S=!1,E=[];if(""!==t&&t===n&&""===y||(S=!0),N.length<2&&(w=!0,E.push("Please enter name")),-1===h.search(/^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)&&(w=!0,E.push("Please enter valid email")),g.length<2&&(w=!0,E.push("Please enter message")),S)return!1;if(w)return d.innerHTML=E.join("<br>"),!1;for(var b=[],L=0;L<o.length;L++){var q=o[L];b.push(q.name+"="+q.value)}p.style.display="flex",s(e.target.getAttribute("data-action"),b.join("&"),function(e){a.reset(),v.style.display="block",p.style.display="none"},function(e){f.style.display="block",p.style.display="none"})})},function(e,t,n){"use strict";!function(){var e={};window.fuzzy=e;var t="<strong>",n=function(e){return e.split(t).length-1+10*(e.split("</strong>"+t).length-1)},s=function e(n,s,a){if(0===n.length||0===s.length||n.length>s.length)return[s];for(var o=[],l=0;l<s.length;l++)if(n[0]===a[l]){var c=t+s[l]+"</strong>",r=e(n.slice(1),s.slice(l+1),a.slice(l+1));r=r.map(function(e){return s.slice(0,l)+c+e}),o[o.length]=r}return[].concat.apply([],o)};e.simpleFilter=function(t,n){return n.filter(function(n){return e.test(t,n)})},e.test=function(t,n){return null!==e.match(t,n)},e.match=function(e,a,o){o=o||{};var l=o.pre||"<strong>",c=o.post||"</strong>",r=o.caseSensitive&&a||a.toLowerCase();e=o.caseSensitive&&e||e.toLowerCase();var i=s(e,a,r).filter(function(n){return n.split(t).length-1===e.length});return 0===i.length?null:i.map(function(e){return{rendered:e.split(t).join(l).split("</strong>").join(c),score:n(e)}}).reduce(function(e,t){return e.score>t.score?e:t})},e.filter=function(t,n,s){return n&&0!==n.length?"string"!=typeof t?n:(s=s||{},n.reduce(function(n,a,o,l){var c=a;s.extract&&(c=s.extract(a));var r=e.match(t,c,s);return null!=r&&(n[n.length]={string:r.rendered,score:r.score,index:o,original:a}),n},[]).sort(function(e,t){var n=t.score-e.score;return n||e.index-t.index})):[]}}()},function(e,t,n){"use strict";var s=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(s),o=document.querySelector(".Header-jumpToContent"),l=document.querySelector(".Footer-jumpToTop");o&&o.addEventListener("click",function(e){(0,a.default)(document.querySelector(".Header").offsetHeight,{maxDuration:500})}),l&&l.addEventListener("click",function(e){(0,a.default)(0,{maxDuration:500})})},function(e,t,n){"use strict";function s(e){var t=o[e.keyCode];if(t&&t.className){var n="#Key--"+t.className;t.checkSide&&KeyboardEvent&&(e.location===KeyboardEvent.DOM_KEY_LOCATION_LEFT?n+="Left":e.location===KeyboardEvent.DOM_KEY_LOCATION_RIGHT&&(n+="Right"));return document.querySelector(n)}}function a(){for(var e=document.querySelectorAll(".Key--active"),t=0;t<e.length;t++)e[t].setAttribute("class","Key")}var o={8:{className:"delete"},9:{className:"tab"},13:{className:"enter"},16:{className:"shift",checkSide:!0},17:{className:"control",checkSide:!0},18:{className:"alt",checkSide:!0},20:{className:"capsLock"},27:{className:"esc"},32:{className:"space"},37:{className:"arrowLeft"},38:{className:"arrowUp"},39:{className:"arrowRight"},40:{className:"arrowDown"},46:{className:"delete"},48:{className:"0"},49:{className:"1"},50:{className:"2"},51:{className:"3"},52:{className:"4"},53:{className:"5"},54:{className:"6"},55:{className:"7"},56:{className:"8"},57:{className:"9"},58:{className:"semicolon"},59:{className:"equals"},60:{className:"comma"},61:{className:"equals"},64:{className:"2"},65:{className:"a"},66:{className:"b"},67:{className:"c"},68:{className:"d"},69:{className:"e"},70:{className:"f"},71:{className:"g"},72:{className:"h"},73:{className:"i"},74:{className:"j"},75:{className:"k"},76:{className:"l"},77:{className:"m"},78:{className:"n"},79:{className:"o"},80:{className:"p"},81:{className:"q"},82:{className:"r"},83:{className:"s"},84:{className:"t"},85:{className:"u"},86:{className:"v"},87:{className:"w"},88:{className:"x"},89:{className:"y"},90:{className:"z"},91:{className:"cmdLeft"},92:{className:"cmdRight"},93:{className:"cmdRight"},96:{className:"0"},97:{className:"1"},98:{className:"2"},99:{className:"3"},100:{className:"4"},101:{className:"5"},102:{className:"6"},103:{className:"7"},104:{className:"8"},105:{className:"9"},106:{className:"8"},107:{className:"equals"},108:{className:"dot"},109:{className:"minus"},110:{className:"dot"},111:{className:"slash"},112:{className:"f1"},113:{className:"f2"},114:{className:"f3"},115:{className:"f4"},116:{className:"f5"},117:{className:"f6"},118:{className:"f7"},119:{className:"f8"},120:{className:"f9"},121:{className:"f10"},122:{className:"f11"},123:{className:"f12"},124:{className:"f13"},125:{className:"f14"},126:{className:"f15"},127:{className:"f16"},128:{className:"f17"},129:{className:"f18"},130:{className:"f19"},131:{className:"f20"},132:{className:"f21"},133:{className:"f22"},134:{className:"f23"},135:{className:"f24"},160:{className:"6"},161:{className:"1"},163:{className:"3"},164:{className:"4"},165:{className:"u"},168:{className:"f5"},169:{className:"0"},170:{className:"8"},171:{className:"tilde"},173:{className:"minus"},174:{className:"f10"},175:{className:"f11"},179:{className:"f8"},181:{className:"f10"},182:{className:"f11"},183:{className:"f12"},186:{className:"semicolon"},187:{className:"equals"},188:{className:"comma"},189:{className:"minus"},190:{className:"dot"},191:{className:"slash"},192:{className:"tilde"},193:{className:"slash"},194:{className:"dot"},219:{className:"squareBracketLeft"},220:{className:"backslash"},221:{className:"squareBracketRight"},222:{className:"apostrophe"},223:{className:"tilde"},224:{className:"cmd",checkSide:!0},225:{className:"altRight"},231:{className:"c"}};document.addEventListener("keydown",function(e){var t=s(e);t&&t.setAttribute("class","Key Key--active")}),document.addEventListener("keyup",function(e){var t=s(e);t&&t.setAttribute("class","Key")}),window.addEventListener("blur",a)},function(e,t,n){"use strict";var s=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(s),o=document.querySelector(".Post-commentsLink"),l=document.querySelector(".Post-bg--archive"),c=document.querySelectorAll(".Expandable-toggle"),r=document.querySelectorAll(".SideNote-trigger");if(o&&o.addEventListener("click",function(e){e.preventDefault(),(0,a.default)(document.querySelector("#comments"),{maxDuration:500})}),l){var i=Math.floor(2*Math.random())+0,u=l.getAttribute("data-src").replace("ID",i);l.setAttribute("src",u)}for(var m=0;m<c.length;++m){c[m].addEventListener("click",function(e){var t=e.currentTarget,n=t.parentElement.nextElementSibling.style;"none"===n.display||""===n.display?(t.classList.add("Expandable-toggle--open"),n.display="block"):(t.classList.remove("Expandable-toggle--open"),n.display="none")})}for(var d=0;d<r.length;++d){r[d].addEventListener("click",function(e){var t=e.currentTarget;-1===t.className.search("SideNote-toggle--open")?t.classList.add("SideNote-toggle--open"):t.classList.remove("SideNote-toggle--open")})}},function(e,t,n){"use strict";function s(e,t){return"<a href='"+t+"' class='MenuModal-result'><div class='Container'>"+e+"</div></a>"}for(var a={extract:function(e){return e.title}},o=document.querySelector(".MenuModal"),l=document.querySelector(".MenuModal-input"),c=document.querySelector(".MenuModal-menu"),r=document.querySelectorAll(".MenuModal-toggle"),i=document.querySelector(".MenuModal-results"),u=document.querySelector("html"),m="",d=null,f=0,v=0;v<r.length;v++){r[v].addEventListener("click",function(){clearTimeout(d),"none"!==o.style.display&&o.style.display?(u.classList.remove("Html--menuActive"),u.classList.remove("Html--overflowHidden"),window.scrollTo(0,f),d=setTimeout(function(){o.style.display="none"},500)):(o.style.display="block",f=window.pageYOffset||document.documentElement.scrollTop,d=setTimeout(function(){u.classList.toggle("Html--menuActive"),l.focus(),d=setTimeout(function(){u.classList.toggle("Html--overflowHidden")},500)},30))})}var p={UP:38,DOWN:40};l.addEventListener("keydown",function(e){var t=null;e.keyCode===p.DOWN?t=i.querySelector("a:first-child"):e.keyCode===p.UP&&(t=i.querySelector("a:last-child")),t&&(e.preventDefault(),t.focus())}),l.addEventListener("keyup",function(e){var t=l.value.trim();if(m!==t){if(c.style.display=t.length>0?"none":"",t.length<1)return i.innerHTML="",void(m="");var n=fuzzy.filter(t,posts,a);n.length?function(){var e=n.map(function(e){return s(e.string,e.original.url)}).join("");i.innerHTML=e;for(var t=document.querySelectorAll(".MenuModal-result"),a=0;a<t.length;a++)!function(e){t[e].addEventListener("keydown",function(n){var s=null;n.keyCode===p.DOWN?s=t[e+1]:n.keyCode===p.UP&&(s=t[e-1]),s&&(n.preventDefault(),s.focus())})}(a)}():i.innerHTML='<div class="MenuModal-noResults"><div class="Container">No results</div></div>',m=t}})},function(e,t,n){"use strict";function s(e,t){var n="1"===e.getAttribute("open");"1"===e.getAttribute("animating")||(e.style.height=t.offsetHeight+"px",e.setAttribute("animating",1),n?(setTimeout(function(){e.style.height=0,setTimeout(function(){e.setAttribute("animating",0)},l)},30),e.setAttribute("open",0)):(e.setAttribute("open",1),setTimeout(function(){e.style.height="auto",e.setAttribute("animating",0)},l)))}var a=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(a);!function(){var e=window.location.hash.replace("#/","");if(e){var t=document.querySelector("#posts-"+e),n=document.querySelector("#section-"+e);t&&(t.style.height="auto",t.setAttribute("open",1),window.location.hash="",(0,o.default)(n))}}();for(var l=500,c=document.querySelectorAll(".Archive-title a"),r=0;r<c.length;r++){c[r].addEventListener("click",function(e){e.preventDefault();var t=e.currentTarget,n=t.parentElement.nextElementSibling;s(n,n.querySelector(".Archive-postsContent"))})}},function(e,t,n){"use strict";var s=n(10),a=function(e){return e&&e.__esModule?e:{default:e}}(s),o=(new a.default,document.querySelector(".Header-title")),l=document.querySelector(".Header-about");window.addEventListener("window-scroll",function(e){var t=window.innerHeight;if(e.detail.scrollPosition<t){var n="translateY(-"+e.detail.scrollPosition/4+"px)",s=1-e.detail.scrollPosition/t;o.style.transform=n,o.style.opacity=s,l&&(l.style.transform=n)}})},function(e,t,n){"use strict";var s,a;(function(){function n(){return"undefined"==typeof window?null:(l++,o||(o=this,this.handleScroll=this.handleScroll.bind(this),void window.addEventListener("scroll",this.handleScroll)))}var o=null,l=0,c=!1;if("undefined"!=typeof window&&"function"!=typeof window.CustomEvent){var r=function(e,t){var n={bubbles:t.bubbles||!1,cancelable:t.cancelable||!1,detail:t.detail||void 0},s=document.createEvent("CustomEvent");return s.initCustomEvent(e,n.bubbles,n.cancelable,n.detail),s};r.prototype=window.Event.prototype,window.CustomEvent=r}n.prototype.removeListener=function(){0===--l&&this.destroy()},n.prototype.destroy=function(){window.removeEventListener("scroll",this.handleScroll),o=null,l=0},n.prototype.getScrollPosition=function(){return window.scrollY||document.documentElement.scrollTop},n.prototype.handleScroll=function(){if(!c){c=!0;var e=this;window.requestAnimationFrame(function(){e.scrollPosition=e.getScrollPosition();var t=new CustomEvent("window-scroll",{detail:{scrollPosition:e.scrollPosition}});window.dispatchEvent(t),c=!1})}},void 0!==e&&e.exports?(n.default=n,e.exports=n):(s=[],void 0!==(a=function(){return n}.apply(t,s))&&(e.exports=a))}).call(this)},function(e,t){}]);