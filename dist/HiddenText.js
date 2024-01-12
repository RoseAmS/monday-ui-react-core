/*! For license information please see HiddenText.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define(["react"],e):"object"==typeof exports?exports["monday-style"]=e(require("react")):t["monday-style"]=e(t.react)}(this,(t=>(()=>{var e={34043:(t,e,o)=>{"use strict";var r=o(8156),n=60103;if(e.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;n=a("react.element"),e.Fragment=a("react.fragment")}var T=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function l(t,e,o){var r,a={},l=null,_=null;for(r in void 0!==o&&(l=""+o),void 0!==e.key&&(l=""+e.key),void 0!==e.ref&&(_=e.ref),e)i.call(e,r)&&!E.hasOwnProperty(r)&&(a[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps)void 0===a[r]&&(a[r]=e[r]);return{$$typeof:n,type:t,key:l,ref:_,props:a,_owner:T.current}}e.jsx=l,e.jsxs=l},33823:(t,e,o)=>{"use strict";t.exports=o(34043)},10508:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>r});const r={hiddenTextWrapper:"components-HiddenText-HiddenText-module__hiddenTextWrapper--QY5cR"}},91510:(t,e,o)=>{"use strict";o.r(e)},45038:function(t,e,o){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const n=o(33823),a=r(o(68098)),T=o(8156),i=r(o(67438)),E=o(333),l=r(o(10508)),_=(0,T.forwardRef)((({text:t,className:e="",id:o="hiddenText","data-testid":r},_)=>{const s=(0,T.useRef)(null),u=(0,i.default)(_,s);return(0,n.jsx)("span",Object.assign({ref:u,id:o,"data-testid":r||(0,E.getTestId)(E.ComponentDefaultTestId.HIDDEN_TEXT,o),className:(0,a.default)(l.default.hiddenTextWrapper,e)},{children:t}))}));e.default=_},67438:(t,e,o)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=o(8156);e.default=function(...t){const e=(0,r.useRef)(null);return(0,r.useLayoutEffect)((()=>{t.forEach((t=>{t&&("function"==typeof t?t(e.current):t.current=e.current)}))}),[t]),e}},41921:(t,e,o)=>{"use strict";o(91510)},77347:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.NavigationCommand=e.ComponentDefaultTestId=void 0,function(t){t.EDITABLE_TEXT="editable-text",t.TIPSEEN_MEDIA="tipseen-media",t.INDICATOR="indicator",t.BADGE="badge",t.TITLE="title",t.TEXT="text",t.COMBOBOX="combobox",t.COMBOBOX_CATEGORY="combobox-category",t.COMBOBOX_OPTION="combobox-option",t.COLOR_PICKER="color-picker",t.CHECKBOX="checkbox",t.CHECKBOX_LABEL="checkbox-label",t.CHECKBOX_CHECKBOX="checkbox-checkbox",t.DROPDOWN="dropdown",t.DROPDOWN_OPTION_CONTENT="dropdown-option-content",t.BUTTON="button",t.BUTTON_GROUP="button-group",t.CLICKABLE="clickable",t.VIRTUALIZED_LIST="virtualized-list",t.VIRTUALIZED_GRID="virtualized-grid",t.TEXT_FIELD="text-field",t.TEXT_FIELD_SECONDARY_BUTTON="text-field-secondary-button",t.SEARCH="search",t.CLEAN_SEARCH_BUTTON="clean-search-button",t.COLOR_PICKER_ITEM="color-picker-item",t.ICON_BUTTON="icon-button",t.SVG_ICON="svg-icon",t.CHIP="chip",t.RADIO_BUTTON="radio-button",t.RADIO_BUTTON_LABEL="radio-button-label",t.RADIO_BUTTON_CONTROL="radio-button-control",t.TAB="tab",t.TAB_PANEL="tab-panel",t.TAB_PANELS="tab-panels",t.TAB_LIST="tab-list",t.TABS_CONTEXT="tabs-context",t.ALERT_BANNER="alert-banner",t.ALERT_BANNER_BUTTON="alert-banner-button",t.ALERT_BANNER_LINK="alert-banner-link",t.ALERT_BANNER_TEXT="alert-banner-text",t.ATTENTION_BOX="attention-box",t.AVATAR="avatar",t.AVATAR_BADGE="avatar-badge",t.AVATAR_CONTENT="avatar-content",t.BREADCRUMB_ITEM="breadcrumb-item",t.BREADCRUMBS_BAR="breadcrumbs-bar",t.LINEAR_PROGRESS_BAR="linear-progress-bar",t.BAR="bar",t.BAR_PRIMARY="bar-primary",t.BAR_SECONDARY="bar-secondary",t.COLOR_PICKER_ITEM_COMPONENT="color-picker-item-component",t.COUNTER="counter",t.MENU="menu",t.OPTION="option",t.EXPAND_COLLAPSE="expand-collapse",t.EDITABLE_INPUT="editable-input",t.EDITABLE_HEADING="editable-heading",t.HEADING="heading",t.LABEL="label",t.LINK="link",t.MENU_DIVIDER="menu-divider",t.MENU_ITEM="menu-item",t.MENU_ITEM_BUTTON="menu-item-button",t.MENU_TITLE="menu-title",t.MENU_TITLE_CAPTION="menu-title-caption",t.MENU_GRID_ITEM="menu-grid-item",t.MENU_BUTTON="menu-button",t.STEP_INDICATOR="step-indicator",t.STEPS="steps",t.STEPS_FORWARD_COMMAND="steps-forward-command",t.STEPS_BACKWARD_COMMAND="steps-backward-command",t.MULTI_STEP_INDICATOR="multi-step-indicator",t.SKELETON="skeleton",t.SPLIT_BUTTON="split-button",t.SPLIT_BUTTON_PRIMARY_BUTTON="split-button-primary-button",t.SPLIT_BUTTON_SECONDARY_BUTTON="split-button-secondary-button",t.TEXT_WITH_HIGHLIGHT="text-with-highlight",t.TOAST="toast",t.TOAST_CONTENT="toast-content",t.TOAST_LINK="toast-link",t.TOAST_BUTTON="toast-button",t.TOAST_CLOSE_BUTTON="toast-close-button",t.TOGGLE="toggle",t.TIPSEEN="tipseen",t.TIPSEEN_CONTENT="tipseen-content",t.TIPSEEN_CONTENT_SUBMIT="tipseen-content-submit",t.TIPSEEN_CONTENT_DISMISS="tipseen-content-dismiss",t.TIPSEEN_TITLE="tipseen-title",t.DIVIDER="divider",t.DATEPICKER="date-picker",t.DATEPICKER_HEADER="date-picker-header",t.DATEPICKER_YEAR_SELECTION="date-picker-year-selection",t.LOADER="loader",t.ICON="icon",t.RESPONSIVE_LIST="responsive-list",t.LIST="list",t.MODAL="monday-dialog-container",t.MODAL_OVERLAY="monday-modal-overlay",t.MODAL_CONTENT="modal-content",t.MODAL_HEADER="modal-header",t.MODAL_FOOTER_BUTTONS="modal-footer-buttons",t.FORMATTED_NUMBER="formatted-number",t.HIDDEN_TEXT="hidden-text",t.DIALOG_CONTENT_CONTAINER="dialog-content-container",t.FLEX="flex",t.TOOLTIP="tooltip",t.DIALOG="dialog",t.TABLE="table",t.TABLE_BODY="table-body",t.TABLE_CELL="table-cell",t.TABLE_HEADER="table-header",t.TABLE_HEADER_CELL="table-header-cell",t.TABLE_ROW="table-row"}(e.ComponentDefaultTestId||(e.ComponentDefaultTestId={})),function(t){t.RIGHT_ARROW="{arrowright}",t.LEFT_ARROW="{arrowleft}",t.UP_ARROW="{arrowup}",t.DOWN_ARROW="{arrowdown}",t.TAB="#TAB#",t.ENTER="{enter}",t.PAGE_UP="{pageup}",t.PAGE_DOWN="{pagedown}"}(e.NavigationCommand||(e.NavigationCommand={}))},333:(t,e,o)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getTestId=e.ComponentDefaultTestId=void 0;const r=o(77347);e.ComponentDefaultTestId=r.ComponentDefaultTestId;e.getTestId=(t,e)=>{const o=(null!=e?e:"").toString();return`${t}${o&&`_${o}`}`}},8156:e=>{"use strict";e.exports=t},68098:(t,e,o)=>{var r;function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}!function(){"use strict";var a={}.hasOwnProperty;function T(){for(var t="",e=0;e<arguments.length;e++){var o=arguments[e];o&&(t=E(t,i(o)))}return t}function i(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!==n(t))return"";if(Array.isArray(t))return T.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var o in t)a.call(t,o)&&t[o]&&(e=E(e,o));return e}function E(t,e){return e?t?t+" "+e:t+e:t}t.exports?(T.default=T,t.exports=T):"object"===n(o.amdO)&&o.amdO?void 0===(r=function(){return T}.apply(e,[]))||(t.exports=r):window.classNames=T}()}},o={};function r(t){var n=o[t];if(void 0!==n)return n.exports;var a=o[t]={exports:{}};return e[t].call(a.exports,a,a.exports,r),a.exports}return r.amdO={},r.d=(t,e)=>{for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r(41921),r(45038)})()));
//# sourceMappingURL=HiddenText.js.map