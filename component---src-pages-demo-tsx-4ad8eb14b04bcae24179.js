"use strict";(self.webpackChunkgoogle_calendar_filter=self.webpackChunkgoogle_calendar_filter||[]).push([[514],{7047:function(e,t,n){n.d(t,{Z:function(){return o}});var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)};Object.create;Object.create;var a=n(7294);function o(e,t,n){void 0===t&&(t=[]),void 0===n&&(n={loading:!1});var o,c,i=(0,a.useRef)(0),u=(o=(0,a.useRef)(!1),c=(0,a.useCallback)((function(){return o.current}),[]),(0,a.useEffect)((function(){return o.current=!0,function(){o.current=!1}}),[]),c),l=(0,a.useState)(n),d=l[0],s=l[1],f=(0,a.useCallback)((function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var a=++i.current;return d.loading||s((function(e){return r(r({},e),{loading:!0})})),e.apply(void 0,t).then((function(e){return u()&&a===i.current&&s({value:e,loading:!1}),e}),(function(e){return u()&&a===i.current&&s({error:e,loading:!1}),e}))}),t);return[d,f]}},3265:function(e,t,n){n.r(t),n.d(t,{default:function(){return J}});var r=n(7294),a=n(5861),o=n(7757),c=n.n(o),i=n(5652),u=n(7047);var l=n(4942),d=n(3366),s=n(7462),f=n(9408),p=n(7663),m=n(885),v=n(5505),h=n(9240),g=n(8348),b=n(6127),k=n(8230),Z=n(3679),x=n(8416),C=n(2194);function w(e){return(0,x.Z)("PrivateSwitchBase",e)}(0,C.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var S=n(5893),y=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],E=(0,g.ZP)(Z.Z)((function(e){var t=e.ownerState;return(0,s.Z)({padding:9,borderRadius:"50%"},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})})),I=(0,g.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),R=r.forwardRef((function(e,t){var n=e.autoFocus,r=e.checked,a=e.checkedIcon,o=e.className,c=e.defaultChecked,i=e.disabled,u=e.disableFocusRipple,l=void 0!==u&&u,p=e.edge,g=void 0!==p&&p,Z=e.icon,x=e.id,C=e.inputProps,R=e.inputRef,F=e.name,z=e.onBlur,P=e.onChange,j=e.onFocus,B=e.readOnly,O=e.required,N=e.tabIndex,M=e.type,H=e.value,L=(0,d.Z)(e,y),T=(0,b.Z)({controlled:r,default:Boolean(c),name:"SwitchBase",state:"checked"}),q=(0,m.Z)(T,2),G=q[0],V=q[1],_=(0,k.Z)(),D=i;_&&void 0===D&&(D=_.disabled);var A="checkbox"===M||"radio"===M,J=(0,s.Z)({},e,{checked:G,disabled:D,disableFocusRipple:l,edge:g}),K=function(e){var t=e.classes,n=e.checked,r=e.disabled,a=e.edge,o={root:["root",n&&"checked",r&&"disabled",a&&"edge".concat((0,h.Z)(a))],input:["input"]};return(0,f.Z)(o,w,t)}(J);return(0,S.jsxs)(E,(0,s.Z)({component:"span",className:(0,v.Z)(K.root,o),centerRipple:!0,focusRipple:!l,disabled:D,tabIndex:null,role:void 0,onFocus:function(e){j&&j(e),_&&_.onFocus&&_.onFocus(e)},onBlur:function(e){z&&z(e),_&&_.onBlur&&_.onBlur(e)},ownerState:J,ref:t},L,{children:[(0,S.jsx)(I,(0,s.Z)({autoFocus:n,checked:r,defaultChecked:c,className:K.input,disabled:D,id:A&&x,name:F,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var t=e.target.checked;V(t),P&&P(e,t)}},readOnly:B,ref:R,required:O,ownerState:J,tabIndex:N,type:M},"checkbox"===M&&void 0===H?{}:{value:H},C)),G?a:Z]}))})),F=n(2067),z=(0,F.Z)((0,S.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),P=(0,F.Z)((0,S.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),j=(0,F.Z)((0,S.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),B=n(2371);function O(e){return(0,x.Z)("MuiCheckbox",e)}var N=(0,C.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),M=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],H=(0,g.ZP)(R,{shouldForwardProp:function(e){return(0,g.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.indeterminate&&t.indeterminate,"default"!==n.color&&t["color".concat((0,h.Z)(n.color))]]}})((function(e){var t,n=e.theme,r=e.ownerState;return(0,s.Z)({color:n.palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:(0,p.Fq)("default"===r.color?n.palette.action.active:n.palette[r.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&(t={},(0,l.Z)(t,"&.".concat(N.checked,", &.").concat(N.indeterminate),{color:n.palette[r.color].main}),(0,l.Z)(t,"&.".concat(N.disabled),{color:n.palette.action.disabled}),t))})),L=(0,S.jsx)(P,{}),T=(0,S.jsx)(z,{}),q=(0,S.jsx)(j,{}),G=r.forwardRef((function(e,t){var n,a,o=(0,B.Z)({props:e,name:"MuiCheckbox"}),c=o.checkedIcon,i=void 0===c?L:c,u=o.color,l=void 0===u?"primary":u,p=o.icon,m=void 0===p?T:p,v=o.indeterminate,g=void 0!==v&&v,b=o.indeterminateIcon,k=void 0===b?q:b,Z=o.inputProps,x=o.size,C=void 0===x?"medium":x,w=(0,d.Z)(o,M),y=g?k:m,E=g?k:i,I=(0,s.Z)({},o,{color:l,indeterminate:g,size:C}),R=function(e){var t=e.classes,n=e.indeterminate,r=e.color,a={root:["root",n&&"indeterminate","color".concat((0,h.Z)(r))]},o=(0,f.Z)(a,O,t);return(0,s.Z)({},t,o)}(I);return(0,S.jsx)(H,(0,s.Z)({type:"checkbox",inputProps:(0,s.Z)({"data-indeterminate":g},Z),icon:r.cloneElement(y,{fontSize:null!=(n=y.props.fontSize)?n:C}),checkedIcon:r.cloneElement(E,{fontSize:null!=(a=E.props.fontSize)?a:C}),ownerState:I,ref:t},w,{classes:R}))})),V=function(e){var t=e.data,n=e.startTime,o=e.endTime,l=(0,r.useState)(!1),d=l[0],s=l[1],f=(0,u.Z)(function(){var e=(0,a.Z)(c().mark((function e(n,r){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.G.GoogleCalendarFilterExecutor.getCalendarById(t.id,n,r);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[]),p=f[1];return(0,r.useEffect)((function(){if(d){var e=new Date(o).getTime()+864e5;p(new Date(n).toISOString(),new Date(e).toISOString()).catch()}}),[d]),r.createElement("div",{className:"my-4"},r.createElement("div",{className:"flex items-center"},r.createElement(G,{checked:d,onChange:function(e){s(e.target.checked)},className:"mr-2"}),r.createElement("div",{className:"mx-4"},t.summary)))},_=n(3209),D=function(e){return r.createElement(_.Z,Object.assign({},e,{label:e.label,type:"date",sx:{width:220,marginRight:"12px"},InputLabelProps:{shrink:!0}}))},A=function(){var e=(0,r.useState)(""),t=e[0],n=e[1],o=(0,r.useState)(""),l=o[0],d=o[1],s=(0,r.useState)([]),f=s[0],p=s[1];!function(e,t){void 0===t&&(t=[]);var n=(0,u.Z)(e,t,{loading:!0}),a=n[0],o=n[1];(0,r.useEffect)((function(){o()}),[o])}((0,a.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.G.GoogleCalendarFilterExecutor.getCalendarList();case 2:return t=e.sent,p(t.items),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)}))),[]);var m=f.map((function(e,n){return r.createElement(V,{data:e,startTime:t,endTime:l,key:n})}));return r.createElement("div",{className:"p-4"},r.createElement("div",{className:"flex"},r.createElement(D,{value:t,onChange:function(e){n(e.target.value)},label:"start"}),r.createElement(D,{value:l,onChange:function(e){d(e.target.value)},label:"end"})),r.createElement("div",null,m))},J=function(){return r.createElement(A,null)}}}]);
//# sourceMappingURL=component---src-pages-demo-tsx-4ad8eb14b04bcae24179.js.map