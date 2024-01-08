/*! For license information please see Accordion.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports["monday-style"]=t(require("react")):e["monday-style"]=t(e.react)}(this,(e=>(()=>{var t={68029:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});const o={accordion:"components-Accordion-Accordion-Accordion-module__accordion--cCf1A",accordionItemExpandCollapse:"components-Accordion-Accordion-Accordion-module__accordionItemExpandCollapse--_tngd",accordionItemExpandCollapseLast:"components-Accordion-Accordion-Accordion-module__accordionItemExpandCollapseLast--GXBol"}},91510:(e,t,r)=>{"use strict";r.r(t)},75251:(e,t,r)=>{"use strict";var o=r(8156),n=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;n=c("react.element"),t.Fragment=c("react.fragment")}var a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var o,c={},u=null,s=null;for(o in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(s=t.ref),t)i.call(t,o)&&!l.hasOwnProperty(o)&&(c[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===c[o]&&(c[o]=t[o]);return{$$typeof:n,type:e,key:u,ref:s,props:c,_owner:a.current}}t.jsx=u,t.jsxs=u},85893:(e,t,r)=>{"use strict";e.exports=r(75251)},10702:function(e,t,r){"use strict";var o=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,n)}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&o(t,e,r);return n(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(85893),l=a(r(93967)),u=c(r(8156)),s=a(r(67438)),d=a(r(68029)),f="monday-accordion";const p=(0,u.forwardRef)((({children:e=null,allowMultiple:t=!1,"data-testid":r=f,defaultIndex:o=[],className:n="",id:c},a)=>{const p=(0,u.useRef)(null),y=(0,s.default)(a,p),[m,_]=(0,u.useState)(o),b=(0,u.useMemo)((()=>u.default.Children.toArray(e)),[e]),v=(0,u.useCallback)((e=>m.includes(e)),[m]),O=(0,u.useCallback)((e=>{if(t){const t=[...m];if(v(e)){const r=t.indexOf(e);r>-1&&t.splice(r,1)}else t.push(e);_(t)}else v(e)?_([]):_([e])}),[v,m,t]),g=(0,u.useMemo)((()=>u.default.Children.map(b,((e,t)=>{const r=Object.assign({},null==e?void 0:e.props),o=(n=t,i=c,(a=r).id?a.id:i?`${i}--item-${n}`:`${f}--item-${n}`);var n,a,i;return u.default.cloneElement(e,Object.assign(Object.assign({},r),{id:o,onClickAccordionCallback:()=>{O(t)},open:v(t),expandCollapseComponentClassName:(0,l.default)(d.default.accordionItemExpandCollapse,{[d.default.accordionItemExpandCollapseLast]:t===b.length-1})}))}))),[b,c,v,O]);return(0,i.jsx)("div",Object.assign({ref:y,className:(0,l.default)(d.default.accordion,n),"data-testid":r,id:c},{children:b&&g}))}));t.default=p},67438:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r(8156);t.default=function(...e){const t=(0,o.useRef)(null);return(0,o.useLayoutEffect)((()=>{e.forEach((e=>{e&&("function"==typeof e?e(t.current):e.current=t.current)}))}),[e]),t}},41921:(e,t,r)=>{"use strict";r(91510)},8156:t=>{"use strict";t.exports=e},93967:(e,t)=>{var r;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=a(e,c(r)))}return e}function c(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)o.call(e,r)&&e[r]&&(t=a(t,r));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var c=r[e]={exports:{}};return t[e].call(c.exports,c,c.exports,o),c.exports}return o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o(41921),o(10702)})()));
//# sourceMappingURL=Accordion.js.map