/*! For license information please see Accordion.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports["monday-style"]=t(require("react")):e["monday-style"]=t(e.react)}(this,(e=>(()=>{var t={34043:(e,t,o)=>{"use strict";var r=o(8156),n=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;n=c("react.element"),t.Fragment=c("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,o){var r,c={},u=null,s=null;for(r in void 0!==o&&(u=""+o),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(s=t.ref),t)i.call(t,r)&&!l.hasOwnProperty(r)&&(c[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===c[r]&&(c[r]=t[r]);return{$$typeof:n,type:e,key:u,ref:s,props:c,_owner:a.current}}t.jsx=u,t.jsxs=u},33823:(e,t,o)=>{"use strict";e.exports=o(34043)},68029:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>r});const r={accordion:"components-Accordion-Accordion-Accordion-module__accordion--cCf1A",accordionItemExpandCollapse:"components-Accordion-Accordion-Accordion-module__accordionItemExpandCollapse--_tngd",accordionItemExpandCollapseLast:"components-Accordion-Accordion-Accordion-module__accordionItemExpandCollapseLast--GXBol"}},91510:(e,t,o)=>{"use strict";o.r(t)},10702:function(e,t,o){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,o,r){void 0===r&&(r=o);var n=Object.getOwnPropertyDescriptor(t,o);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(e,r,n)}:function(e,t,o,r){void 0===r&&(r=o),e[r]=t[o]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&r(t,e,o);return n(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=o(33823),l=a(o(68098)),u=c(o(8156)),s=a(o(67438)),d=a(o(68029)),f="monday-accordion";const p=(0,u.forwardRef)((({children:e=null,allowMultiple:t=!1,"data-testid":o=f,defaultIndex:r=[],className:n="",id:c},a)=>{const p=(0,u.useRef)(null),y=(0,s.default)(a,p),[m,b]=(0,u.useState)(r),_=(0,u.useMemo)((()=>u.default.Children.toArray(e)),[e]),v=(0,u.useCallback)((e=>m.includes(e)),[m]),O=(0,u.useCallback)((e=>{if(t){const t=[...m];if(v(e)){const o=t.indexOf(e);o>-1&&t.splice(o,1)}else t.push(e);b(t)}else v(e)?b([]):b([e])}),[v,m,t]),g=(0,u.useMemo)((()=>u.default.Children.map(_,((e,t)=>{const o=Object.assign({},null==e?void 0:e.props),r=(n=t,i=c,(a=o).id?a.id:i?`${i}--item-${n}`:`${f}--item-${n}`);var n,a,i;return u.default.cloneElement(e,Object.assign(Object.assign({},o),{id:r,onClickAccordionCallback:()=>{O(t)},open:v(t),expandCollapseComponentClassName:(0,l.default)(d.default.accordionItemExpandCollapse,{[d.default.accordionItemExpandCollapseLast]:t===_.length-1})}))}))),[_,c,v,O]);return(0,i.jsx)("div",Object.assign({ref:y,className:(0,l.default)(d.default.accordion,n),"data-testid":o,id:c},{children:_&&g}))}));t.default=p},67438:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o(8156);t.default=function(...e){const t=(0,r.useRef)(null);return(0,r.useLayoutEffect)((()=>{e.forEach((e=>{e&&("function"==typeof e?e(t.current):e.current=t.current)}))}),[e]),t}},41921:(e,t,o)=>{"use strict";o(91510)},8156:t=>{"use strict";t.exports=e},68098:(e,t,o)=>{var r;function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}!function(){"use strict";var c={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var o=arguments[t];o&&(e=l(e,i(o)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!==n(e))return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var o in e)c.call(e,o)&&e[o]&&(t=l(t,o));return t}function l(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):"object"===n(o.amdO)&&o.amdO?void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r):window.classNames=a}()}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var c=o[e]={exports:{}};return t[e].call(c.exports,c,c.exports,r),c.exports}return r.amdO={},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(41921),r(10702)})()));
//# sourceMappingURL=Accordion.js.map