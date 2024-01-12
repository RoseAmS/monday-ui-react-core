/*! For license information please see Loader.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports["monday-style"]=t(require("react")):e["monday-style"]=t(e.react)}(this,(e=>(()=>{var t={34043:(e,t,o)=>{"use strict";var r=o(8156),n=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;n=a("react.element"),t.Fragment=a("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,o){var r,a={},l=null,d=null;for(r in void 0!==o&&(l=""+o),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,r)&&!c.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:n,type:e,key:l,ref:d,props:a,_owner:i.current}}t.jsx=l,t.jsxs=l},33823:(e,t,o)=>{"use strict";e.exports=o(34043)},32635:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>r});const r={loaderContainer:"components-Loader-Loader-module__loaderContainer--b4urL",circleLoaderSpinnerBackground:"components-Loader-Loader-module__circleLoaderSpinnerBackground--yu16v",circleLoaderSpinner:"components-Loader-Loader-module__circleLoaderSpinner--D1sDW",rotate:"components-Loader-Loader-module__rotate--YqdGl",circleLoaderSpinnerPath:"components-Loader-Loader-module__circleLoaderSpinnerPath--rYkAr",dash:"components-Loader-Loader-module__dash--t9lWN"}},91510:(e,t,o)=>{"use strict";o.r(t)},47048:function(e,t,o){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=o(33823),a=o(8156),i=r(o(68098)),s=o(86762),c=o(66465),l=o(333),d=o(96678),u=o(77347),T=r(o(32635)),_=(0,a.forwardRef)((({svgClassName:e,className:t,wrapperClassName:o,size:r,color:c,hasBackground:d=!1,id:_,"data-testid":E},O)=>{const p=(0,s.backwardCompatibilityForProperties)([t,e],""),b=(0,a.useMemo)((()=>{if("number"==typeof r)return{width:r,height:r}}),[r]);return(0,n.jsx)("div",Object.assign({className:(0,i.default)(T.default.loaderContainer,o),ref:O,role:"alert",title:"loading",style:b,id:_,"data-testid":E||(0,l.getTestId)(u.ComponentDefaultTestId.LOADER,_)},{children:(0,n.jsxs)("svg",Object.assign({className:(0,i.default)(T.default.circleLoaderSpinner,p),viewBox:"0 0 50 50",color:c,"aria-hidden":!0},{children:[d&&(0,n.jsx)("circle",{className:T.default.circleLoaderSpinnerBackground,cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"}),(0,n.jsx)("circle",{className:T.default.circleLoaderSpinnerPath,cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"})]}))}))}));t.default=(0,d.withStaticProps)(_,{sizes:c.LoaderSizes,colors:c.LoaderColors})},66465:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoaderSizes=t.LoaderColors=void 0,function(e){e.PRIMARY="var(--primary-color)",e.SECONDARY="var(--secondary-text-color)",e.ON_PRIMARY="var(--text-color-on-inverted)",e.DARK="var(--primary-text-color)"}(t.LoaderColors||(t.LoaderColors={})),function(e){e[e.XS=16]="XS",e[e.SMALL=24]="SMALL",e[e.MEDIUM=40]="MEDIUM",e[e.LARGE=64]="LARGE"}(t.LoaderSizes||(t.LoaderSizes={}))},86762:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.backwardCompatibilityForProperties=void 0,t.backwardCompatibilityForProperties=function(e=[],t){const o=e.find((e=>void 0!==e));return void 0===o?t:o}},41921:(e,t,o)=>{"use strict";o(91510)},77347:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NavigationCommand=t.ComponentDefaultTestId=void 0,function(e){e.EDITABLE_TEXT="editable-text",e.TIPSEEN_MEDIA="tipseen-media",e.INDICATOR="indicator",e.BADGE="badge",e.TITLE="title",e.TEXT="text",e.COMBOBOX="combobox",e.COMBOBOX_CATEGORY="combobox-category",e.COMBOBOX_OPTION="combobox-option",e.COLOR_PICKER="color-picker",e.CHECKBOX="checkbox",e.CHECKBOX_LABEL="checkbox-label",e.CHECKBOX_CHECKBOX="checkbox-checkbox",e.DROPDOWN="dropdown",e.DROPDOWN_OPTION_CONTENT="dropdown-option-content",e.BUTTON="button",e.BUTTON_GROUP="button-group",e.CLICKABLE="clickable",e.VIRTUALIZED_LIST="virtualized-list",e.VIRTUALIZED_GRID="virtualized-grid",e.TEXT_FIELD="text-field",e.TEXT_FIELD_SECONDARY_BUTTON="text-field-secondary-button",e.SEARCH="search",e.CLEAN_SEARCH_BUTTON="clean-search-button",e.COLOR_PICKER_ITEM="color-picker-item",e.ICON_BUTTON="icon-button",e.SVG_ICON="svg-icon",e.CHIP="chip",e.RADIO_BUTTON="radio-button",e.RADIO_BUTTON_LABEL="radio-button-label",e.RADIO_BUTTON_CONTROL="radio-button-control",e.TAB="tab",e.TAB_PANEL="tab-panel",e.TAB_PANELS="tab-panels",e.TAB_LIST="tab-list",e.TABS_CONTEXT="tabs-context",e.ALERT_BANNER="alert-banner",e.ALERT_BANNER_BUTTON="alert-banner-button",e.ALERT_BANNER_LINK="alert-banner-link",e.ALERT_BANNER_TEXT="alert-banner-text",e.ATTENTION_BOX="attention-box",e.AVATAR="avatar",e.AVATAR_BADGE="avatar-badge",e.AVATAR_CONTENT="avatar-content",e.BREADCRUMB_ITEM="breadcrumb-item",e.BREADCRUMBS_BAR="breadcrumbs-bar",e.LINEAR_PROGRESS_BAR="linear-progress-bar",e.BAR="bar",e.BAR_PRIMARY="bar-primary",e.BAR_SECONDARY="bar-secondary",e.COLOR_PICKER_ITEM_COMPONENT="color-picker-item-component",e.COUNTER="counter",e.MENU="menu",e.OPTION="option",e.EXPAND_COLLAPSE="expand-collapse",e.EDITABLE_INPUT="editable-input",e.EDITABLE_HEADING="editable-heading",e.HEADING="heading",e.LABEL="label",e.LINK="link",e.MENU_DIVIDER="menu-divider",e.MENU_ITEM="menu-item",e.MENU_ITEM_BUTTON="menu-item-button",e.MENU_TITLE="menu-title",e.MENU_TITLE_CAPTION="menu-title-caption",e.MENU_GRID_ITEM="menu-grid-item",e.MENU_BUTTON="menu-button",e.STEP_INDICATOR="step-indicator",e.STEPS="steps",e.STEPS_FORWARD_COMMAND="steps-forward-command",e.STEPS_BACKWARD_COMMAND="steps-backward-command",e.MULTI_STEP_INDICATOR="multi-step-indicator",e.SKELETON="skeleton",e.SPLIT_BUTTON="split-button",e.SPLIT_BUTTON_PRIMARY_BUTTON="split-button-primary-button",e.SPLIT_BUTTON_SECONDARY_BUTTON="split-button-secondary-button",e.TEXT_WITH_HIGHLIGHT="text-with-highlight",e.TOAST="toast",e.TOAST_CONTENT="toast-content",e.TOAST_LINK="toast-link",e.TOAST_BUTTON="toast-button",e.TOAST_CLOSE_BUTTON="toast-close-button",e.TOGGLE="toggle",e.TIPSEEN="tipseen",e.TIPSEEN_CONTENT="tipseen-content",e.TIPSEEN_CONTENT_SUBMIT="tipseen-content-submit",e.TIPSEEN_CONTENT_DISMISS="tipseen-content-dismiss",e.TIPSEEN_TITLE="tipseen-title",e.DIVIDER="divider",e.DATEPICKER="date-picker",e.DATEPICKER_HEADER="date-picker-header",e.DATEPICKER_YEAR_SELECTION="date-picker-year-selection",e.LOADER="loader",e.ICON="icon",e.RESPONSIVE_LIST="responsive-list",e.LIST="list",e.MODAL="monday-dialog-container",e.MODAL_OVERLAY="monday-modal-overlay",e.MODAL_CONTENT="modal-content",e.MODAL_HEADER="modal-header",e.MODAL_FOOTER_BUTTONS="modal-footer-buttons",e.FORMATTED_NUMBER="formatted-number",e.HIDDEN_TEXT="hidden-text",e.DIALOG_CONTENT_CONTAINER="dialog-content-container",e.FLEX="flex",e.TOOLTIP="tooltip",e.DIALOG="dialog",e.TABLE="table",e.TABLE_BODY="table-body",e.TABLE_CELL="table-cell",e.TABLE_HEADER="table-header",e.TABLE_HEADER_CELL="table-header-cell",e.TABLE_ROW="table-row"}(t.ComponentDefaultTestId||(t.ComponentDefaultTestId={})),function(e){e.RIGHT_ARROW="{arrowright}",e.LEFT_ARROW="{arrowleft}",e.UP_ARROW="{arrowup}",e.DOWN_ARROW="{arrowdown}",e.TAB="#TAB#",e.ENTER="{enter}",e.PAGE_UP="{pageup}",e.PAGE_DOWN="{pagedown}"}(t.NavigationCommand||(t.NavigationCommand={}))},333:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTestId=t.ComponentDefaultTestId=void 0;const r=o(77347);t.ComponentDefaultTestId=r.ComponentDefaultTestId;t.getTestId=(e,t)=>{const o=(null!=t?t:"").toString();return`${e}${o&&`_${o}`}`}},645:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},86537:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},23672:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},64459:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},44457:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},46809:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},96678:function(e,t,o){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,o,r){void 0===r&&(r=o);var n=Object.getOwnPropertyDescriptor(t,o);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(e,r,n)}:function(e,t,o,r){void 0===r&&(r=o),e[r]=t[o]}),n=this&&this.__exportStar||function(e,t){for(var o in e)"default"===o||Object.prototype.hasOwnProperty.call(t,o)||r(t,e,o)};Object.defineProperty(t,"__esModule",{value:!0}),n(o(46809),t),n(o(21238),t),n(o(64459),t),n(o(92983),t),n(o(645),t),n(o(23672),t),n(o(86537),t),n(o(44457),t)},21238:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},92983:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withStaticProps=void 0;t.withStaticProps=(e,t)=>Object.assign(e,t)},8156:t=>{"use strict";t.exports=e},68098:(e,t,o)=>{var r;function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}!function(){"use strict";var a={}.hasOwnProperty;function i(){for(var e="",t=0;t<arguments.length;t++){var o=arguments[t];o&&(e=c(e,s(o)))}return e}function s(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!==n(e))return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var o in e)a.call(e,o)&&e[o]&&(t=c(t,o));return t}function c(e,t){return t?e?e+" "+t:e+t:e}e.exports?(i.default=i,e.exports=i):"object"===n(o.amdO)&&o.amdO?void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r):window.classNames=i}()}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var a=o[e]={exports:{}};return t[e].call(a.exports,a,a.exports,r),a.exports}return r.amdO={},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(41921),r(47048)})()));
//# sourceMappingURL=Loader.js.map