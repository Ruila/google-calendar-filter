"use strict";(self.webpackChunkgoogle_calendar_filter=self.webpackChunkgoogle_calendar_filter||[]).push([[514],{7047:function(e,t,n){n.d(t,{Z:function(){return o}});var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)};Object.create;Object.create;var a=n(7294);function o(e,t,n){void 0===t&&(t=[]),void 0===n&&(n={loading:!1});var o,c,i=(0,a.useRef)(0),u=(o=(0,a.useRef)(!1),c=(0,a.useCallback)((function(){return o.current}),[]),(0,a.useEffect)((function(){return o.current=!0,function(){o.current=!1}}),[]),c),l=(0,a.useState)(n),d=l[0],s=l[1],f=(0,a.useCallback)((function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var a=++i.current;return d.loading||s((function(e){return r(r({},e),{loading:!0})})),e.apply(void 0,t).then((function(e){return u()&&a===i.current&&s({value:e,loading:!1}),e}),(function(e){return u()&&a===i.current&&s({error:e,loading:!1}),e}))}),t);return[d,f]}},3265:function(e,t,n){n.r(t),n.d(t,{default:function(){return Q}});var r=n(7294),a=n(5861),o=n(7757),c=n.n(o),i=n(5652),u=n(7047);var l=n(4942),d=n(3366),s=n(7462),f=n(9408),p=n(7663),h=n(885),v=n(5505),m=n(9240),g=n(8348),b=n(6127),k=n(8230),Z=n(3679),x=n(8416),C=n(2194);function w(e){return(0,x.Z)("PrivateSwitchBase",e)}(0,C.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var y=n(5893),E=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],S=(0,g.ZP)(Z.Z)((function(e){var t=e.ownerState;return(0,s.Z)({padding:9,borderRadius:"50%"},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})})),R=(0,g.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),F=r.forwardRef((function(e,t){var n=e.autoFocus,r=e.checked,a=e.checkedIcon,o=e.className,c=e.defaultChecked,i=e.disabled,u=e.disableFocusRipple,l=void 0!==u&&u,p=e.edge,g=void 0!==p&&p,Z=e.icon,x=e.id,C=e.inputProps,F=e.inputRef,z=e.name,I=e.onBlur,P=e.onChange,j=e.onFocus,B=e.readOnly,O=e.required,M=e.tabIndex,N=e.type,H=e.value,L=(0,d.Z)(e,E),q=(0,b.Z)({controlled:r,default:Boolean(c),name:"SwitchBase",state:"checked"}),G=(0,h.Z)(q,2),V=G[0],_=G[1],A=(0,k.Z)(),D=i;A&&void 0===D&&(D=A.disabled);var J="checkbox"===N||"radio"===N,K=(0,s.Z)({},e,{checked:V,disabled:D,disableFocusRipple:l,edge:g}),Q=function(e){var t=e.classes,n=e.checked,r=e.disabled,a=e.edge,o={root:["root",n&&"checked",r&&"disabled",a&&"edge".concat((0,m.Z)(a))],input:["input"]};return(0,f.Z)(o,w,t)}(K);return(0,y.jsxs)(S,(0,s.Z)({component:"span",className:(0,v.Z)(Q.root,o),centerRipple:!0,focusRipple:!l,disabled:D,tabIndex:null,role:void 0,onFocus:function(e){j&&j(e),A&&A.onFocus&&A.onFocus(e)},onBlur:function(e){I&&I(e),A&&A.onBlur&&A.onBlur(e)},ownerState:K,ref:t},L,{children:[(0,y.jsx)(R,(0,s.Z)({autoFocus:n,checked:r,defaultChecked:c,className:Q.input,disabled:D,id:J&&x,name:z,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var t=e.target.checked;_(t),P&&P(e,t)}},readOnly:B,ref:F,required:O,ownerState:K,tabIndex:M,type:N},"checkbox"===N&&void 0===H?{}:{value:H},C)),V?a:Z]}))})),z=n(2067),I=(0,z.Z)((0,y.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),P=(0,z.Z)((0,y.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),j=(0,z.Z)((0,y.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),B=n(2371);function O(e){return(0,x.Z)("MuiCheckbox",e)}var M=(0,C.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),N=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],H=(0,g.ZP)(F,{shouldForwardProp:function(e){return(0,g.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.indeterminate&&t.indeterminate,"default"!==n.color&&t["color".concat((0,m.Z)(n.color))]]}})((function(e){var t,n=e.theme,r=e.ownerState;return(0,s.Z)({color:n.palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:(0,p.Fq)("default"===r.color?n.palette.action.active:n.palette[r.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&(t={},(0,l.Z)(t,"&.".concat(M.checked,", &.").concat(M.indeterminate),{color:n.palette[r.color].main}),(0,l.Z)(t,"&.".concat(M.disabled),{color:n.palette.action.disabled}),t))})),L=(0,y.jsx)(P,{}),q=(0,y.jsx)(I,{}),G=(0,y.jsx)(j,{}),V=r.forwardRef((function(e,t){var n,a,o=(0,B.Z)({props:e,name:"MuiCheckbox"}),c=o.checkedIcon,i=void 0===c?L:c,u=o.color,l=void 0===u?"primary":u,p=o.icon,h=void 0===p?q:p,v=o.indeterminate,g=void 0!==v&&v,b=o.indeterminateIcon,k=void 0===b?G:b,Z=o.inputProps,x=o.size,C=void 0===x?"medium":x,w=(0,d.Z)(o,N),E=g?k:h,S=g?k:i,R=(0,s.Z)({},o,{color:l,indeterminate:g,size:C}),F=function(e){var t=e.classes,n=e.indeterminate,r=e.color,a={root:["root",n&&"indeterminate","color".concat((0,m.Z)(r))]},o=(0,f.Z)(a,O,t);return(0,s.Z)({},t,o)}(R);return(0,y.jsx)(H,(0,s.Z)({type:"checkbox",inputProps:(0,s.Z)({"data-indeterminate":g},Z),icon:r.cloneElement(E,{fontSize:null!=(n=E.props.fontSize)?n:C}),checkedIcon:r.cloneElement(S,{fontSize:null!=(a=S.props.fontSize)?a:C}),ownerState:R,ref:t},w,{classes:F}))})),_=n(3209),A=function(e){return r.createElement(_.Z,Object.assign({},e,{label:e.label,type:"date",sx:{width:220,marginRight:"12px"},InputLabelProps:{shrink:!0}}))},D=function(e){var t=e.data,n=(0,r.useState)(""),o=n[0],l=n[1],d=(0,r.useState)(""),s=d[0],f=d[1],p=(0,r.useState)(!1),h=p[0],v=p[1],m=(0,u.Z)((0,a.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.G.GoogleCalendarFilterExecutor.getCalendarById(t.id,o,s);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),[])[1];(0,r.useEffect)((function(){h&&m().catch()}),[h]);return r.createElement("div",null,r.createElement("div",{className:"flex items-center"},r.createElement(V,{checked:h,onChange:function(e){v(e.target.checked)},className:"mr-2"}),r.createElement("div",null,t.summary,", ",o,", ",s),r.createElement(A,{value:o,onChange:function(e){l(e.target.value)},label:"start"}),r.createElement(A,{value:s,onChange:function(e){f(e.target.value)},label:"end"})))},J=function(){var e=(0,r.useState)([]),t=e[0],n=e[1];!function(e,t){void 0===t&&(t=[]);var n=(0,u.Z)(e,t,{loading:!0}),a=n[0],o=n[1];(0,r.useEffect)((function(){o()}),[o])}((0,a.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.G.GoogleCalendarFilterExecutor.getCalendarList();case 2:return t=e.sent,n(t.items),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)}))),[]);var o=t.map((function(e){return r.createElement(D,{data:e})}));return r.createElement("div",null,o)},K=n(5214),Q=function(){return r.createElement(K.A,null,r.createElement(J,null))}}}]);
//# sourceMappingURL=component---src-pages-demo-tsx-7874f7446b7dfde58801.js.map