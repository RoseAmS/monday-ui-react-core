/*! For license information please see MenuDivider.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports["monday-style"]=t(require("react")):e["monday-style"]=t(e.react)}(this,(e=>(()=>{var t={51906:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>r});const r={divider:"components-Divider-Divider-module__divider--ifKDT",withoutMargin:"components-Divider-Divider-module__withoutMargin--i3y5O",horizontal:"components-Divider-Divider-module__horizontal--ZiLdy",vertical:"components-Divider-Divider-module__vertical--BULwz"}},91655:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>r});const r={menuChildDivider:"components-Menu-MenuDivider-MenuDivider-module__menuChildDivider--AFZ32"}},91510:(e,t,o)=>{"use strict";o.r(t)},75251:(e,t,o)=>{"use strict";var r=o(8156),i=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var n=Symbol.for;i=n("react.element"),t.Fragment=n("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,o){var r,n={},u=null,l=null;for(r in void 0!==o&&(u=""+o),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)d.call(t,r)&&!s.hasOwnProperty(r)&&(n[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===n[r]&&(n[r]=t[r]);return{$$typeof:i,type:e,key:u,ref:l,props:n,_owner:a.current}}t.jsx=u,t.jsxs=u},85893:(e,t,o)=>{"use strict";e.exports=o(75251)},15034:function(e,t,o){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=o(85893),n=o(333),a=r(o(93967)),d=o(86762),s=o(66889),u=o(95777),l=o(96678),c=r(o(51906));t.default=(0,l.withStaticProps)((({classname:e,className:t,withoutMargin:o=!1,direction:r=s.DirectionType.HORIZONTAL,id:l,"data-testid":T})=>{const _=(0,d.backwardCompatibilityForProperties)([t,e]);return(0,i.jsx)("div",{id:l,"data-testid":T||(0,n.getTestId)(n.ComponentDefaultTestId.DIVIDER,l),className:(0,a.default)(c.default.divider,_,(0,u.getStyle)(c.default,r),{[c.default.withoutMargin]:o})})}),{directions:s.DirectionType})},66889:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DirectionType=void 0,function(e){e.VERTICAL="vertical",e.HORIZONTAL="horizontal"}(t.DirectionType||(t.DirectionType={}))},89745:function(e,t,o){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=o(85893),n=o(333),a=r(o(93967)),d=r(o(15034)),s=o(86762),u=r(o(91655)),l=({classname:e,className:t,id:o,"data-testid":r})=>{const l=(0,s.backwardCompatibilityForProperties)([t,e]);return(0,i.jsx)(d.default,{className:(0,a.default)(u.default.menuChildDivider,l),"data-testid":r||(0,n.getTestId)(n.ComponentDefaultTestId.MENU_DIVIDER,o)})};Object.assign(l,{isMenuChild:!0}),t.default=l},86762:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.backwardCompatibilityForProperties=void 0,t.backwardCompatibilityForProperties=function(e=[],t){const o=e.find((e=>void 0!==e));return void 0===o?t:o}},95777:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getStyle=void 0,t.getStyle=function(e,t){return t&&e[t]?e[t]:""}},41921:(e,t,o)=>{"use strict";o(91510)},77347:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NavigationCommand=t.ComponentDefaultTestId=void 0,function(e){e.EDITABLE_TEXT="editable-text",e.TIPSEEN_MEDIA="tipseen-media",e.INDICATOR="indicator",e.BADGE="badge",e.TITLE="title",e.TEXT="text",e.COMBOBOX="combobox",e.COMBOBOX_CATEGORY="combobox-category",e.COMBOBOX_OPTION="combobox-option",e.COLOR_PICKER="color-picker",e.CHECKBOX="checkbox",e.CHECKBOX_LABEL="checkbox-label",e.CHECKBOX_CHECKBOX="checkbox-checkbox",e.DROPDOWN="dropdown",e.DROPDOWN_OPTION_CONTENT="dropdown-option-content",e.BUTTON="button",e.BUTTON_GROUP="button-group",e.CLICKABLE="clickable",e.VIRTUALIZED_LIST="virtualized-list",e.VIRTUALIZED_GRID="virtualized-grid",e.TEXT_FIELD="text-field",e.TEXT_FIELD_SECONDARY_BUTTON="text-field-secondary-button",e.SEARCH="search",e.CLEAN_SEARCH_BUTTON="clean-search-button",e.COLOR_PICKER_ITEM="color-picker-item",e.ICON_BUTTON="icon-button",e.SVG_ICON="svg-icon",e.CHIP="chip",e.RADIO_BUTTON="radio-button",e.RADIO_BUTTON_LABEL="radio-button-label",e.RADIO_BUTTON_CONTROL="radio-button-control",e.TAB="tab",e.TAB_PANEL="tab-panel",e.TAB_PANELS="tab-panels",e.TAB_LIST="tab-list",e.TABS_CONTEXT="tabs-context",e.ALERT_BANNER="alert-banner",e.ALERT_BANNER_BUTTON="alert-banner-button",e.ALERT_BANNER_LINK="alert-banner-link",e.ALERT_BANNER_TEXT="alert-banner-text",e.ATTENTION_BOX="attention-box",e.AVATAR="avatar",e.AVATAR_BADGE="avatar-badge",e.AVATAR_CONTENT="avatar-content",e.BREADCRUMB_ITEM="breadcrumb-item",e.BREADCRUMBS_BAR="breadcrumbs-bar",e.LINEAR_PROGRESS_BAR="linear-progress-bar",e.BAR="bar",e.BAR_PRIMARY="bar-primary",e.BAR_SECONDARY="bar-secondary",e.COLOR_PICKER_ITEM_COMPONENT="color-picker-item-component",e.COUNTER="counter",e.MENU="menu",e.OPTION="option",e.EXPAND_COLLAPSE="expand-collapse",e.EDITABLE_INPUT="editable-input",e.EDITABLE_HEADING="editable-heading",e.HEADING="heading",e.LABEL="label",e.LINK="link",e.MENU_DIVIDER="menu-divider",e.MENU_ITEM="menu-item",e.MENU_ITEM_BUTTON="menu-item-button",e.MENU_TITLE="menu-title",e.MENU_TITLE_CAPTION="menu-title-caption",e.MENU_GRID_ITEM="menu-grid-item",e.MENU_BUTTON="menu-button",e.STEP_INDICATOR="step-indicator",e.STEPS="steps",e.STEPS_FORWARD_COMMAND="steps-forward-command",e.STEPS_BACKWARD_COMMAND="steps-backward-command",e.MULTI_STEP_INDICATOR="multi-step-indicator",e.SKELETON="skeleton",e.SPLIT_BUTTON="split-button",e.SPLIT_BUTTON_PRIMARY_BUTTON="split-button-primary-button",e.SPLIT_BUTTON_SECONDARY_BUTTON="split-button-secondary-button",e.TEXT_WITH_HIGHLIGHT="text-with-highlight",e.TOAST="toast",e.TOAST_CONTENT="toast-content",e.TOAST_LINK="toast-link",e.TOAST_BUTTON="toast-button",e.TOAST_CLOSE_BUTTON="toast-close-button",e.TOGGLE="toggle",e.TIPSEEN="tipseen",e.TIPSEEN_CONTENT="tipseen-content",e.TIPSEEN_CONTENT_SUBMIT="tipseen-content-submit",e.TIPSEEN_CONTENT_DISMISS="tipseen-content-dismiss",e.TIPSEEN_TITLE="tipseen-title",e.DIVIDER="divider",e.DATEPICKER="date-picker",e.DATEPICKER_HEADER="date-picker-header",e.DATEPICKER_YEAR_SELECTION="date-picker-year-selection",e.LOADER="loader",e.ICON="icon",e.RESPONSIVE_LIST="responsive-list",e.LIST="list",e.MODAL="monday-dialog-container",e.MODAL_OVERLAY="monday-modal-overlay",e.MODAL_CONTENT="modal-content",e.MODAL_HEADER="modal-header",e.MODAL_FOOTER_BUTTONS="modal-footer-buttons",e.FORMATTED_NUMBER="formatted-number",e.HIDDEN_TEXT="hidden-text",e.DIALOG_CONTENT_CONTAINER="dialog-content-container",e.FLEX="flex",e.TOOLTIP="tooltip",e.DIALOG="dialog",e.TABLE="table",e.TABLE_BODY="table-body",e.TABLE_CELL="table-cell",e.TABLE_HEADER="table-header",e.TABLE_HEADER_CELL="table-header-cell",e.TABLE_ROW="table-row"}(t.ComponentDefaultTestId||(t.ComponentDefaultTestId={})),function(e){e.RIGHT_ARROW="{arrowright}",e.LEFT_ARROW="{arrowleft}",e.UP_ARROW="{arrowup}",e.DOWN_ARROW="{arrowdown}",e.TAB="#TAB#",e.ENTER="{enter}",e.PAGE_UP="{pageup}",e.PAGE_DOWN="{pagedown}"}(t.NavigationCommand||(t.NavigationCommand={}))},333:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTestId=t.ComponentDefaultTestId=void 0;const r=o(77347);t.ComponentDefaultTestId=r.ComponentDefaultTestId;t.getTestId=(e,t)=>{const o=(null!=t?t:"").toString();return`${e}${o&&`_${o}`}`}},645:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},86537:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},23672:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},64459:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},44457:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},46809:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},96678:function(e,t,o){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,o,r){void 0===r&&(r=o);var i=Object.getOwnPropertyDescriptor(t,o);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(e,r,i)}:function(e,t,o,r){void 0===r&&(r=o),e[r]=t[o]}),i=this&&this.__exportStar||function(e,t){for(var o in e)"default"===o||Object.prototype.hasOwnProperty.call(t,o)||r(t,e,o)};Object.defineProperty(t,"__esModule",{value:!0}),i(o(46809),t),i(o(21238),t),i(o(64459),t),i(o(92983),t),i(o(645),t),i(o(23672),t),i(o(86537),t),i(o(44457),t)},21238:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},92983:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withStaticProps=void 0;t.withStaticProps=(e,t)=>Object.assign(e,t)},8156:t=>{"use strict";t.exports=e},93967:(e,t)=>{var o;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e="",t=0;t<arguments.length;t++){var o=arguments[t];o&&(e=a(e,n(o)))}return e}function n(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var o in e)r.call(e,o)&&e[o]&&(t=a(t,o));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(i.default=i,e.exports=i):void 0===(o=function(){return i}.apply(t,[]))||(e.exports=o)}()}},o={};function r(e){var i=o[e];if(void 0!==i)return i.exports;var n=o[e]={exports:{}};return t[e].call(n.exports,n,n.exports,r),n.exports}return r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(41921),r(89745)})()));
//# sourceMappingURL=MenuDivider.js.map