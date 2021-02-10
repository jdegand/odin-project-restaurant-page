(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>s});var a=t(645),r=t.n(a)()((function(n){return n[1]}));r.push([n.id,"*{\n  box-sizing: border-box;\n}\n\nh1 {\n  text-align: center;\n}\n\n.nav {\n  display: flex;\n  align-items: center;\n  list-style-type: none;\n  justify-content: center;\n}\n\n.nav li {\n  margin: 20px;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 20px;\n  text-decoration: underline;\n  text-decoration-color: red;\n  text-decoration-style: solid;\n}\n\n.tab {\n  margin: 0 auto;\n}\n\nhr {\n  width: 30%;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.description {\n  margin-left: auto;\n  margin-right: auto;\n  width: 600px;\n}\n",""]);const s=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,a){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(a)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(r[i]=!0)}for(var o=0;o<n.length;o++){var c=[].concat(n[o]);a&&r[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},379:(n,e,t)=>{var a,r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),s=[];function i(n){for(var e=-1,t=0;t<s.length;t++)if(s[t].identifier===n){e=t;break}return e}function o(n,e){for(var t={},a=[],r=0;r<n.length;r++){var o=n[r],c=e.base?o[0]+e.base:o[0],l=t[c]||0,d="".concat(c," ").concat(l);t[c]=l+1;var u=i(d),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(s[u].references++,s[u].updater(p)):s.push({identifier:d,updater:f(p,e),references:1}),a.push(d)}return a}function c(n){var e=document.createElement("style"),a=n.attributes||{};if(void 0===a.nonce){var s=t.nc;s&&(a.nonce=s)}if(Object.keys(a).forEach((function(n){e.setAttribute(n,a[n])})),"function"==typeof n.insert)n.insert(e);else{var i=r(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var l,d=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function u(n,e,t,a){var r=t?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(n.styleSheet)n.styleSheet.cssText=d(e,r);else{var s=document.createTextNode(r),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(s,i[e]):n.appendChild(s)}}function p(n,e,t){var a=t.css,r=t.media,s=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),n.styleSheet)n.styleSheet.cssText=a;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(a))}}var h=null,m=0;function f(n,e){var t,a,r;if(e.singleton){var s=m++;t=h||(h=c(e)),a=u.bind(null,t,s,!1),r=u.bind(null,t,s,!0)}else t=c(e),a=p.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return a(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;a(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a));var t=o(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var a=0;a<t.length;a++){var r=i(t[a]);s[r].references--}for(var c=o(n,e),l=0;l<t.length;l++){var d=i(t[l]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}t=c}}}}},e={};function t(a){if(e[a])return e[a].exports;var r=e[a]={id:a,exports:{}};return n[a](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),a=t(426);e()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;const r=function(){const n=document.createElement("div");return n.classList.add("tab"),n.innerHTML='\n  <div class="text-center">\n    <h1>Shakespeare and Company Cafe</h1>\n    <ul class="nav">\n      <li>HOME</li>\n      <li>MENU</li>\n      <li>CONTACT</li>\n    </ul>\n    <h2>Cities: Philadelphia and New York</h2>\n    <img src="./images/tabitha-turner-k48c--P5MnQ-unsplash.jpg" height="600px" width="600px">\n    <div>Photo by <a href="https://unsplash.com/@tabithabrooke?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">tabitha turner</a> on <a href="https://unsplash.com/s/photos/shakespeare?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></div>\n</div>\n<br>\n<div class="description">\n<p>Found  picture on Unsplash looking around for inspiration.  Went to companies\' real website and the cafe link just returns the homepage. The site, <a href="https://shop.shakeandco.com/">Shakespeare and Company</a> , is centered around its book business.\nWith Covid, I\'d wager that the cafe is probably in deep trouble.\n</p>\n</div>',n};document.body.appendChild(function(){let n=document.getElementById("content");return document.addEventListener("click",(e=>{const t=e.target.innerText;if("HOME"===t){for(;n.firstChild;)n.removeChild(n.lastChild);n.appendChild(r())}if("MENU"===t){for(;n.firstChild;)n.removeChild(n.lastChild);n.appendChild(function(){const n=document.createElement("div");return n.classList.add("tab"),n.innerHTML='\n  <div class="text-center">\n    <h1>Shakespeare and Company Cafe</h1>\n    <ul class="nav">\n      <li>HOME</li>\n      <li>MENU</li>\n      <li>CONTACT</li>\n    </ul>\n    <h2>Menu Items</h2>\n    <div class="menu-item-container">\n    <img src="./images/nikldn-qp7WA8AV2x0-unsplash.jpg" alt="pancakes">\n    <div class="item">\n      <h3>Pancakes <span>$3.99 - $6.99</span></h3>\n      <p>Short stack or piled high.  Pancakes come with blueberries or bananas or both.</p>\n      <span>Photo by <a href="https://unsplash.com/@nikldn?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">nikldn</a> on <a href="https://unsplash.com/@nikldn?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>\n    </div>\n  </div>\n  <br>\n  <div class="menu-item-container">\n  <img src="./images/christine-siracusa-bypcCMcIoVE-unsplash.jpg" alt="bagel">\n  <div class="item">\n    <h3>Bagel <span>$2.99 - $7.99</span></h3>\n    <p>Whether you want cream cheese or not, our bagels can paired with fish, lunch meat or lox. </p>\n    <span>Photo by <a href="https://unsplash.com/@christine_siracusa?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Christine Siracusa</a> on <a href="https://unsplash.com/@christine_siracusa?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>\n  </div>\n</div>\n<br>\n<div class="menu-item-container">\n<img src="./images/nathan-dumlao-Ax_jEc1Gs1k-unsplash.jpg" alt="omelet">\n<div class="item">\n  <h3>Omelet <span>$4.99</span></h3>\n  <p>Omelet wrap. Compact and packed with a day\'s worth of energy. You won\'t snack during work day.</p>\n  <span>Photo by <a href="https://unsplash.com/@nate_dumlao?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Nathan Dumlao</a> on <a href="https://unsplash.com/s/photos/omelette?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>\n</div>\n</div>\n<br>\n<div class="menu-item-container">\n<img src="./images/joseph-gonzalez-6WaevlPxFdw-unsplash.jpg" alt="cupcake">\n  <div class="item">\n    <h3>Cupcake <span>$2.99</span></h3>\n    <p>Get a sugar high with our fresh-baked cupcakes.  Perfect with coffee and as a desert.</p>\n    <span>Photo by <a href="https://unsplash.com/@miracletwentyone?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Joseph Gonzalez</a> on <a href="https://unsplash.com/@miracletwentyone?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>\n  </div>\n</div>\n</div>',n}())}if("CONTACT"===t){for(;n.firstChild;)n.removeChild(n.lastChild);n.appendChild(function(){const n=document.createElement("div");return n.classList.add("tab"),n.innerHTML='\n  <div class="text-center">\n    <h1>Shakespeare and Company Cafe</h1>\n    <ul class="nav">\n      <li>HOME</li>\n      <li>MENU</li>\n      <li>CONTACT</li>\n    </ul>\n    <h2>3 Locations - 2 Cities</h2>\n    <div class="new-york">\n    <h3>New York, New York</h3>\n    <div class="address">939 Lexington Ave</div>\n    <div class="phone-number">(212) 772 - 3400</div>\n    <br>\n    <div class="hours">\n        <span>Mon - Thurs: </span>8am - 5pm<br><span> Fri - Sun: </span>8am - 6pm\n    </div>\n    <br>\n    <hr>\n    <br>\n    <div class="address">2020 Broadway</div>\n    <div class="phone-number">(212) 738 - 0001</div>\n    <br>\n    <div class="hours">\n        <span>Mon - Thurs: </span>7am - 6pm<br><span> Fri - Sun: </span>7am - 7pm\n    </div>\n    </div>\n    <br>\n    <hr>\n    <br>\n    <div class="philly">\n    <h3>Philadelphia, PA</h3>\n    <div class="address">1632 Walnut Street</div>\n    <div class="phone-number">(215) 486 - 2106</div>\n    <br>\n    <div class="hours">\n        <span>Mon - Thurs: </span>8am - 5pm<br><span> Fri - Sun: </span>8am - 6pm\n    </div>\n    </div>\n    <br>\n    <hr>\n    <br>\n    </div>',n}())}})),n.appendChild(r()),n}())})()})();