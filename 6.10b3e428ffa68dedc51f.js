(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{331:function(e,t,n){"use strict";n.r(t);var f=n(0),s=n.n(f);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var u,c=e[Symbol.iterator]();!(r=(u=c.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var p=Object(f.forwardRef)(function(e,t){var n=e.value,r=e.onChange,a=c(Object(f.useState)(n||""),2),o=a[0],u=a[1];return s.a.createElement("input",{type:"text",value:o,onChange:function(e){var t=e.target;u(t.value),r&&r(t.value)},ref:t})});function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var u,c=e[Symbol.iterator]();!(r=(u=c.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var r={};[{name:"Alice",age:21},{name:"Max",age:20},{name:"Jane",age:20}].forEach(function(e){r[e.age]||(r[e.age]=[]),r[e.age].push(e)});t.default=function(){var e=Object(f.useRef)(null),t=m(Object(f.useState)(""),2),n=t[0],r=t[1],a=m(Object(f.useState)([]),2),o=a[0],u=a[1],c=m(Object(f.useState)(!1),2),l=c[0],i=c[1];return Object(f.useEffect)(function(){e.current.focus(),console.log("获取数据的更改不会引发这里更新")},[n]),s.a.createElement("div",null,s.a.createElement("h1",null,"fetch lottery-- ",n),s.a.createElement(p,{value:n,onChange:function(e){r(e)},ref:e}),s.a.createElement("ul",null,l?s.a.createElement("span",null,"loading..."):o.length?o.map(function(e){return s.a.createElement("li",{key:e.typeCode},e.openTime)}):s.a.createElement("span",null,"error data")),s.a.createElement("button",{type:"button",onClick:function(){fetch("https://www.mxnzp.com/api/lottery/common/types").then(function(e){return i(!0),e.json()}).then(function(e){setTimeout(function(){i(!1)},500),u(e.data)})}},"查看json数据"))}}}]);
//# sourceMappingURL=6.10b3e428ffa68dedc51f.js.map