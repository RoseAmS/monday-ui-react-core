/*! For license information please see TipseenImage.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports["monday-style"]=t(require("react")):e["monday-style"]=t(e.react)}(this,(e=>(()=>{var t={34043:(e,t,o)=>{"use strict";var n=o(8156),r=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;r=a("react.element"),t.Fragment=a("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,o){var n,a={},l=null,u=null;for(n in void 0!==o&&(l=""+o),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)T.call(t,n)&&!s.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:r,type:e,key:l,ref:u,props:a,_owner:i.current}}t.jsx=l,t.jsxs=l},33823:(e,t,o)=>{"use strict";e.exports=o(34043)},21977:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>n});const n={tipseenImage:"components-Tipseen-TipseenImage-module__tipseenImage--l8XzI"}},28734:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>n});const n={tipseenMedia:"components-Tipseen-TipseenMedia-TipseenMedia-module__tipseenMedia--ZfxE0"}},91510:(e,t,o)=>{"use strict";o.r(t)},75040:function(e,t,o){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(33823),a=n(o(68098)),i=n(o(21977)),T=n(o(44202));t.default=({src:e,alt:t,className:o,tipseenMediaClassName:n})=>(0,r.jsx)(T.default,Object.assign({className:n},{children:(0,r.jsx)("img",{src:e,alt:t,className:(0,a.default)(i.default.tipseenImage,o)})}))},44202:function(e,t,o){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(33823),a=o(8156),i=n(o(68098)),T=n(o(67438)),s=o(333),l=o(77347),u=n(o(28734)),E=(0,a.forwardRef)((({className:e,id:t,"data-testid":o,children:n},E)=>{const c=(0,a.useRef)(null),_=(0,T.default)(E,c);return(0,r.jsx)("div",Object.assign({ref:_,className:(0,i.default)(u.default.tipseenMedia,e),id:t,"data-testid":o||(0,s.getTestId)(l.ComponentDefaultTestId.TIPSEEN_MEDIA,t)},{children:n}))}));t.default=E},67438:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(8156);t.default=function(...e){const t=(0,n.useRef)(null);return(0,n.useLayoutEffect)((()=>{e.forEach((e=>{e&&("function"==typeof e?e(t.current):e.current=t.current)}))}),[e]),t}},41921:(e,t,o)=>{"use strict";o(91510)},77347:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NavigationCommand=t.ComponentDefaultTestId=void 0,function(e){e.EDITABLE_TEXT="editable-text",e.TIPSEEN_MEDIA="tipseen-media",e.INDICATOR="indicator",e.BADGE="badge",e.TITLE="title",e.TEXT="text",e.COMBOBOX="combobox",e.COMBOBOX_CATEGORY="combobox-category",e.COMBOBOX_OPTION="combobox-option",e.COLOR_PICKER="color-picker",e.CHECKBOX="checkbox",e.CHECKBOX_LABEL="checkbox-label",e.CHECKBOX_CHECKBOX="checkbox-checkbox",e.DROPDOWN="dropdown",e.DROPDOWN_OPTION_CONTENT="dropdown-option-content",e.BUTTON="button",e.BUTTON_GROUP="button-group",e.CLICKABLE="clickable",e.VIRTUALIZED_LIST="virtualized-list",e.VIRTUALIZED_GRID="virtualized-grid",e.TEXT_FIELD="text-field",e.TEXT_FIELD_SECONDARY_BUTTON="text-field-secondary-button",e.SEARCH="search",e.CLEAN_SEARCH_BUTTON="clean-search-button",e.COLOR_PICKER_ITEM="color-picker-item",e.ICON_BUTTON="icon-button",e.SVG_ICON="svg-icon",e.CHIP="chip",e.RADIO_BUTTON="radio-button",e.RADIO_BUTTON_LABEL="radio-button-label",e.RADIO_BUTTON_CONTROL="radio-button-control",e.TAB="tab",e.TAB_PANEL="tab-panel",e.TAB_PANELS="tab-panels",e.TAB_LIST="tab-list",e.TABS_CONTEXT="tabs-context",e.ALERT_BANNER="alert-banner",e.ALERT_BANNER_BUTTON="alert-banner-button",e.ALERT_BANNER_LINK="alert-banner-link",e.ALERT_BANNER_TEXT="alert-banner-text",e.ATTENTION_BOX="attention-box",e.AVATAR="avatar",e.AVATAR_BADGE="avatar-badge",e.AVATAR_CONTENT="avatar-content",e.BREADCRUMB_ITEM="breadcrumb-item",e.BREADCRUMBS_BAR="breadcrumbs-bar",e.LINEAR_PROGRESS_BAR="linear-progress-bar",e.BAR="bar",e.BAR_PRIMARY="bar-primary",e.BAR_SECONDARY="bar-secondary",e.COLOR_PICKER_ITEM_COMPONENT="color-picker-item-component",e.COUNTER="counter",e.MENU="menu",e.OPTION="option",e.EXPAND_COLLAPSE="expand-collapse",e.EDITABLE_INPUT="editable-input",e.EDITABLE_HEADING="editable-heading",e.HEADING="heading",e.LABEL="label",e.LINK="link",e.MENU_DIVIDER="menu-divider",e.MENU_ITEM="menu-item",e.MENU_ITEM_BUTTON="menu-item-button",e.MENU_TITLE="menu-title",e.MENU_TITLE_CAPTION="menu-title-caption",e.MENU_GRID_ITEM="menu-grid-item",e.MENU_BUTTON="menu-button",e.STEP_INDICATOR="step-indicator",e.STEPS="steps",e.STEPS_FORWARD_COMMAND="steps-forward-command",e.STEPS_BACKWARD_COMMAND="steps-backward-command",e.MULTI_STEP_INDICATOR="multi-step-indicator",e.SKELETON="skeleton",e.SPLIT_BUTTON="split-button",e.SPLIT_BUTTON_PRIMARY_BUTTON="split-button-primary-button",e.SPLIT_BUTTON_SECONDARY_BUTTON="split-button-secondary-button",e.TEXT_WITH_HIGHLIGHT="text-with-highlight",e.TOAST="toast",e.TOAST_CONTENT="toast-content",e.TOAST_LINK="toast-link",e.TOAST_BUTTON="toast-button",e.TOAST_CLOSE_BUTTON="toast-close-button",e.TOGGLE="toggle",e.TIPSEEN="tipseen",e.TIPSEEN_CONTENT="tipseen-content",e.TIPSEEN_CONTENT_SUBMIT="tipseen-content-submit",e.TIPSEEN_CONTENT_DISMISS="tipseen-content-dismiss",e.TIPSEEN_TITLE="tipseen-title",e.DIVIDER="divider",e.DATEPICKER="date-picker",e.DATEPICKER_HEADER="date-picker-header",e.DATEPICKER_YEAR_SELECTION="date-picker-year-selection",e.LOADER="loader",e.ICON="icon",e.RESPONSIVE_LIST="responsive-list",e.LIST="list",e.MODAL="monday-dialog-container",e.MODAL_OVERLAY="monday-modal-overlay",e.MODAL_CONTENT="modal-content",e.MODAL_HEADER="modal-header",e.MODAL_FOOTER_BUTTONS="modal-footer-buttons",e.FORMATTED_NUMBER="formatted-number",e.HIDDEN_TEXT="hidden-text",e.DIALOG_CONTENT_CONTAINER="dialog-content-container",e.FLEX="flex",e.TOOLTIP="tooltip",e.DIALOG="dialog",e.TABLE="table",e.TABLE_BODY="table-body",e.TABLE_CELL="table-cell",e.TABLE_HEADER="table-header",e.TABLE_HEADER_CELL="table-header-cell",e.TABLE_ROW="table-row"}(t.ComponentDefaultTestId||(t.ComponentDefaultTestId={})),function(e){e.RIGHT_ARROW="{arrowright}",e.LEFT_ARROW="{arrowleft}",e.UP_ARROW="{arrowup}",e.DOWN_ARROW="{arrowdown}",e.TAB="#TAB#",e.ENTER="{enter}",e.PAGE_UP="{pageup}",e.PAGE_DOWN="{pagedown}"}(t.NavigationCommand||(t.NavigationCommand={}))},333:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTestId=t.ComponentDefaultTestId=void 0;const n=o(77347);t.ComponentDefaultTestId=n.ComponentDefaultTestId;t.getTestId=(e,t)=>{const o=(null!=t?t:"").toString();return`${e}${o&&`_${o}`}`}},8156:t=>{"use strict";t.exports=e},68098:(e,t,o)=>{var n;function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}!function(){"use strict";var a={}.hasOwnProperty;function i(){for(var e="",t=0;t<arguments.length;t++){var o=arguments[t];o&&(e=s(e,T(o)))}return e}function T(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!==r(e))return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var o in e)a.call(e,o)&&e[o]&&(t=s(t,o));return t}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(i.default=i,e.exports=i):"object"===r(o.amdO)&&o.amdO?void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n):window.classNames=i}()}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var a=o[e]={exports:{}};return t[e].call(a.exports,a,a.exports,n),a.exports}return n.amdO={},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(41921),n(75040)})()));
//# sourceMappingURL=TipseenImage.js.map