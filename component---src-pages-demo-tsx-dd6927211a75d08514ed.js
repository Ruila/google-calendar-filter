"use strict";(self.webpackChunkgoogle_calendar_filter=self.webpackChunkgoogle_calendar_filter||[]).push([[514],{7047:function(e,n,t){t.d(n,{Z:function(){return a}});var r=function(){return r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},r.apply(this,arguments)};Object.create;Object.create;var o=t(7294);function a(e,n,t){void 0===n&&(n=[]),void 0===t&&(t={loading:!1});var a,c,i=(0,o.useRef)(0),u=(a=(0,o.useRef)(!1),c=(0,o.useCallback)((function(){return a.current}),[]),(0,o.useEffect)((function(){return a.current=!0,function(){a.current=!1}}),[]),c),d=(0,o.useState)(t),l=d[0],s=d[1],f=(0,o.useCallback)((function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var o=++i.current;return l.loading||s((function(e){return r(r({},e),{loading:!0})})),e.apply(void 0,n).then((function(e){return u()&&o===i.current&&s({value:e,loading:!1}),e}),(function(e){return u()&&o===i.current&&s({error:e,loading:!1}),e}))}),n);return[l,f]}},7343:function(e,n,t){t.r(n),t.d(n,{default:function(){return D}});var r=t(7294),o=t(5861),a=t(7757),c=t.n(a),i=t(5652),u=t(7047);var d=t(4942),l=t(3366),s=t(7462),f=t(9408),p=t(7663),h=t(885),v=t(5505),m=t(9240),g=t(8348),k=t(6127),b=t(8230),Z=t(3679),x=t(8416),C=t(2194);function w(e){return(0,x.Z)("PrivateSwitchBase",e)}(0,C.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var y=t(5893),S=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],E=(0,g.ZP)(Z.Z)((function(e){var n=e.ownerState;return(0,s.Z)({padding:9,borderRadius:"50%"},"start"===n.edge&&{marginLeft:"small"===n.size?-3:-12},"end"===n.edge&&{marginRight:"small"===n.size?-3:-12})})),F=(0,g.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),R=r.forwardRef((function(e,n){var t=e.autoFocus,r=e.checked,o=e.checkedIcon,a=e.className,c=e.defaultChecked,i=e.disabled,u=e.disableFocusRipple,d=void 0!==u&&u,p=e.edge,g=void 0!==p&&p,Z=e.icon,x=e.id,C=e.inputProps,R=e.inputRef,z=e.name,B=e.onBlur,I=e.onChange,P=e.onFocus,j=e.readOnly,O=e.required,M=e.tabIndex,N=e.type,H=e.value,q=(0,l.Z)(e,S),G=(0,k.Z)({controlled:r,default:Boolean(c),name:"SwitchBase",state:"checked"}),L=(0,h.Z)(G,2),V=L[0],_=L[1],T=(0,b.Z)(),A=i;T&&void 0===A&&(A=T.disabled);var D="checkbox"===N||"radio"===N,J=(0,s.Z)({},e,{checked:V,disabled:A,disableFocusRipple:d,edge:g}),K=function(e){var n=e.classes,t=e.checked,r=e.disabled,o=e.edge,a={root:["root",t&&"checked",r&&"disabled",o&&"edge".concat((0,m.Z)(o))],input:["input"]};return(0,f.Z)(a,w,n)}(J);return(0,y.jsxs)(E,(0,s.Z)({component:"span",className:(0,v.Z)(K.root,a),centerRipple:!0,focusRipple:!d,disabled:A,tabIndex:null,role:void 0,onFocus:function(e){P&&P(e),T&&T.onFocus&&T.onFocus(e)},onBlur:function(e){B&&B(e),T&&T.onBlur&&T.onBlur(e)},ownerState:J,ref:n},q,{children:[(0,y.jsx)(F,(0,s.Z)({autoFocus:t,checked:r,defaultChecked:c,className:K.input,disabled:A,id:D&&x,name:z,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var n=e.target.checked;_(n),I&&I(e,n)}},readOnly:j,ref:R,required:O,ownerState:J,tabIndex:M,type:N},"checkbox"===N&&void 0===H?{}:{value:H},C)),V?o:Z]}))})),z=t(2067),B=(0,z.Z)((0,y.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),I=(0,z.Z)((0,y.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),P=(0,z.Z)((0,y.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),j=t(2371);function O(e){return(0,x.Z)("MuiCheckbox",e)}var M=(0,C.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),N=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],H=(0,g.ZP)(R,{shouldForwardProp:function(e){return(0,g.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.indeterminate&&n.indeterminate,"default"!==t.color&&n["color".concat((0,m.Z)(t.color))]]}})((function(e){var n,t=e.theme,r=e.ownerState;return(0,s.Z)({color:t.palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:(0,p.Fq)("default"===r.color?t.palette.action.active:t.palette[r.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&(n={},(0,d.Z)(n,"&.".concat(M.checked,", &.").concat(M.indeterminate),{color:t.palette[r.color].main}),(0,d.Z)(n,"&.".concat(M.disabled),{color:t.palette.action.disabled}),n))})),q=(0,y.jsx)(I,{}),G=(0,y.jsx)(B,{}),L=(0,y.jsx)(P,{}),V=r.forwardRef((function(e,n){var t,o,a=(0,j.Z)({props:e,name:"MuiCheckbox"}),c=a.checkedIcon,i=void 0===c?q:c,u=a.color,d=void 0===u?"primary":u,p=a.icon,h=void 0===p?G:p,v=a.indeterminate,g=void 0!==v&&v,k=a.indeterminateIcon,b=void 0===k?L:k,Z=a.inputProps,x=a.size,C=void 0===x?"medium":x,w=(0,l.Z)(a,N),S=g?b:h,E=g?b:i,F=(0,s.Z)({},a,{color:d,indeterminate:g,size:C}),R=function(e){var n=e.classes,t=e.indeterminate,r=e.color,o={root:["root",t&&"indeterminate","color".concat((0,m.Z)(r))]},a=(0,f.Z)(o,O,n);return(0,s.Z)({},n,a)}(F);return(0,y.jsx)(H,(0,s.Z)({type:"checkbox",inputProps:(0,s.Z)({"data-indeterminate":g},Z),icon:r.cloneElement(S,{fontSize:null!=(t=S.props.fontSize)?t:C}),checkedIcon:r.cloneElement(E,{fontSize:null!=(o=E.props.fontSize)?o:C}),ownerState:F,ref:n},w,{classes:R}))})),_=function(e){var n=e.data,t=(0,r.useState)(!1),a=t[0],d=t[1],l=(0,u.Z)((0,o.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.G.GoogleCalendarFilterExecutor.getCalendarById(n.id,"2022-03-01T08:00:00Z","2022-03-31T11:00:00Z");case 2:return t=e.sent,console.info("getCalendar",t),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)}))),[])[1];return(0,r.useEffect)((function(){a&&l().catch()}),[a]),r.createElement("div",null,r.createElement("div",{className:"flex items-center"},r.createElement(V,{checked:a,onChange:function(e){d(e.target.checked)},className:"mr-2"}),r.createElement("div",null,n.summary)))},T=function(){var e=(0,r.useState)([]),n=e[0],t=e[1];!function(e,n){void 0===n&&(n=[]);var t=(0,u.Z)(e,n,{loading:!0}),o=t[0],a=t[1];(0,r.useEffect)((function(){a()}),[a])}((0,o.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.G.GoogleCalendarFilterExecutor.getCalendarList();case 2:return n=e.sent,t(n.items),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)}))),[]);var a=n.map((function(e){return r.createElement(_,{data:e})}));return r.createElement("div",null,a)},A=t(5214),D=function(){return r.createElement(A.A,null,r.createElement(T,null))}}}]);
//# sourceMappingURL=component---src-pages-demo-tsx-dd6927211a75d08514ed.js.map