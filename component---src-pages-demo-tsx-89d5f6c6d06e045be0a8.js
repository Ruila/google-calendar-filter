"use strict";(self.webpackChunkgoogle_calendar_filter=self.webpackChunkgoogle_calendar_filter||[]).push([[514],{7047:function(e,t,n){n.d(t,{Z:function(){return o}});var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)};Object.create;Object.create;var a=n(7294);function o(e,t,n){void 0===t&&(t=[]),void 0===n&&(n={loading:!1});var o,c,i=(0,a.useRef)(0),u=(o=(0,a.useRef)(!1),c=(0,a.useCallback)((function(){return o.current}),[]),(0,a.useEffect)((function(){return o.current=!0,function(){o.current=!1}}),[]),c),l=(0,a.useState)(n),d=l[0],s=l[1],f=(0,a.useCallback)((function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var a=++i.current;return d.loading||s((function(e){return r(r({},e),{loading:!0})})),e.apply(void 0,t).then((function(e){return u()&&a===i.current&&s({value:e,loading:!1}),e}),(function(e){return u()&&a===i.current&&s({error:e,loading:!1}),e}))}),t);return[d,f]}},8336:function(e,t,n){n.r(t),n.d(t,{default:function(){return K}});var r=n(7294),a=n(2982),o=n(5861),c=n(7757),i=n.n(c),u=n(5652),l=n(7047);var d=n(4942),s=n(3366),f=n(7462),m=n(9408),p=n(7663),v=n(885),h=n(5505),g=n(9240),b=n(8348),k=n(6127),x=n(8230),Z=n(3679),w=n(8416),S=n(2194);function y(e){return(0,w.Z)("PrivateSwitchBase",e)}(0,S.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var C=n(5893),E=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],D=(0,b.ZP)(Z.Z)((function(e){var t=e.ownerState;return(0,f.Z)({padding:9,borderRadius:"50%"},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})})),I=(0,b.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),R=r.forwardRef((function(e,t){var n=e.autoFocus,r=e.checked,a=e.checkedIcon,o=e.className,c=e.defaultChecked,i=e.disabled,u=e.disableFocusRipple,l=void 0!==u&&u,d=e.edge,p=void 0!==d&&d,b=e.icon,Z=e.id,w=e.inputProps,S=e.inputRef,R=e.name,F=e.onBlur,j=e.onChange,z=e.onFocus,B=e.readOnly,O=e.required,P=e.tabIndex,N=e.type,M=e.value,T=(0,s.Z)(e,E),H=(0,k.Z)({controlled:r,default:Boolean(c),name:"SwitchBase",state:"checked"}),L=(0,v.Z)(H,2),q=L[0],G=L[1],V=(0,x.Z)(),_=i;V&&void 0===_&&(_=V.disabled);var A="checkbox"===N||"radio"===N,J=(0,f.Z)({},e,{checked:q,disabled:_,disableFocusRipple:l,edge:p}),K=function(e){var t=e.classes,n=e.checked,r=e.disabled,a=e.edge,o={root:["root",n&&"checked",r&&"disabled",a&&"edge".concat((0,g.Z)(a))],input:["input"]};return(0,m.Z)(o,y,t)}(J);return(0,C.jsxs)(D,(0,f.Z)({component:"span",className:(0,h.Z)(K.root,o),centerRipple:!0,focusRipple:!l,disabled:_,tabIndex:null,role:void 0,onFocus:function(e){z&&z(e),V&&V.onFocus&&V.onFocus(e)},onBlur:function(e){F&&F(e),V&&V.onBlur&&V.onBlur(e)},ownerState:J,ref:t},T,{children:[(0,C.jsx)(I,(0,f.Z)({autoFocus:n,checked:r,defaultChecked:c,className:K.input,disabled:_,id:A&&Z,name:R,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var t=e.target.checked;G(t),j&&j(e,t)}},readOnly:B,ref:S,required:O,ownerState:J,tabIndex:P,type:N},"checkbox"===N&&void 0===M?{}:{value:M},w)),q?a:b]}))})),F=n(2067),j=(0,F.Z)((0,C.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),z=(0,F.Z)((0,C.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),B=(0,F.Z)((0,C.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),O=n(2371);function P(e){return(0,w.Z)("MuiCheckbox",e)}var N=(0,S.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),M=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],T=(0,b.ZP)(R,{shouldForwardProp:function(e){return(0,b.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.indeterminate&&t.indeterminate,"default"!==n.color&&t["color".concat((0,g.Z)(n.color))]]}})((function(e){var t,n=e.theme,r=e.ownerState;return(0,f.Z)({color:n.palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:(0,p.Fq)("default"===r.color?n.palette.action.active:n.palette[r.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&(t={},(0,d.Z)(t,"&.".concat(N.checked,", &.").concat(N.indeterminate),{color:n.palette[r.color].main}),(0,d.Z)(t,"&.".concat(N.disabled),{color:n.palette.action.disabled}),t))})),H=(0,C.jsx)(z,{}),L=(0,C.jsx)(j,{}),q=(0,C.jsx)(B,{}),G=r.forwardRef((function(e,t){var n,a,o=(0,O.Z)({props:e,name:"MuiCheckbox"}),c=o.checkedIcon,i=void 0===c?H:c,u=o.color,l=void 0===u?"primary":u,d=o.icon,p=void 0===d?L:d,v=o.indeterminate,h=void 0!==v&&v,b=o.indeterminateIcon,k=void 0===b?q:b,x=o.inputProps,Z=o.size,w=void 0===Z?"medium":Z,S=(0,s.Z)(o,M),y=h?k:p,E=h?k:i,D=(0,f.Z)({},o,{color:l,indeterminate:h,size:w}),I=function(e){var t=e.classes,n=e.indeterminate,r=e.color,a={root:["root",n&&"indeterminate","color".concat((0,g.Z)(r))]},o=(0,m.Z)(a,P,t);return(0,f.Z)({},t,o)}(D);return(0,C.jsx)(T,(0,f.Z)({type:"checkbox",inputProps:(0,f.Z)({"data-indeterminate":h},x),icon:r.cloneElement(y,{fontSize:null!=(n=y.props.fontSize)?n:w}),checkedIcon:r.cloneElement(E,{fontSize:null!=(a=E.props.fontSize)?a:w}),ownerState:D,ref:t},S,{classes:I}))})),V=function(e){var t=e.data,n=e.startTime,a=e.endTime,c=e.currentDay,d=(0,r.useState)(!1),s=d[0],f=d[1],m=(0,l.Z)(function(){var e=(0,o.Z)(i().mark((function e(n,r){var a,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.G.GoogleCalendarFilterExecutor.getCalendarById(t.id,n,r);case 2:return a=e.sent,o=a.items.filter((function(e){return new Date(e.start.dateTime).getMonth()===new Date(c).getMonth()&&new Date(e.start.dateTime).getDate()===new Date(c).getDate()})),l=void 0,l=(i=o).sort((function(e,t){return new Date(t.start.dateTime)-new Date(e.start.dateTime)})),console.info("sortBusySlot",i,l),e.abrupt("return",a);case 6:case"end":return e.stop()}var i,l}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[]),p=m[1];return(0,r.useEffect)((function(){if(s){var e=new Date(a).getTime()+864e5;p(new Date(n).toISOString(),new Date(e).toISOString()).catch()}}),[s]),r.createElement("div",{className:"my-4"},r.createElement("div",{className:"flex items-center"},r.createElement(G,{checked:s,onChange:function(e){f(e.target.checked)},className:"mr-2"}),r.createElement("div",{className:"mx-4"},t.summary)))},_=n(3209),A=function(e){return r.createElement(_.Z,Object.assign({},e,{label:e.label,type:"date",sx:{width:220,marginRight:"12px"},InputLabelProps:{shrink:!0}}))},J=function(){var e=(0,r.useState)(""),t=e[0],n=e[1],c=(0,r.useState)([]),d=c[0],s=c[1],f=(0,r.useState)(""),m=f[0],p=f[1],v=(0,r.useState)(""),h=v[0],g=v[1],b=(0,r.useState)([]),k=b[0],x=b[1];!function(e,t){void 0===t&&(t=[]);var n=(0,l.Z)(e,t,{loading:!0}),a=n[0],o=n[1];(0,r.useEffect)((function(){o()}),[o])}((0,o.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.G.GoogleCalendarFilterExecutor.getCalendarList();case 2:return t=e.sent,x(t.items),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)}))),[]);(0,r.useEffect)((function(){if(m.length>0&&h.length>0){var e=function(e,t){for(var n=[],r=new Date(e);r<=new Date(t);r.setDate(r.getDate()+1))n.push(new Date(r));return n}(new Date(m),new Date(h)).map((function(e){return e.toISOString().slice(0,10)}));s((0,a.Z)(e)),n(e[0])}}),[m,h]);var Z=k.map((function(e,n){return r.createElement(V,{data:e,startTime:m,endTime:h,key:n,currentDay:t})})),w=d.map((function(e){return r.createElement("div",{className:"h-[60px] w-[120px] flex items-center justify-center rounded-2xl cursor-pointer shadow-lg m-4 "+(t===e?"bg-[#cbe0f2]":""),onClick:function(){n(e)}},e)}));return r.createElement("div",{className:"p-4"},r.createElement("div",{className:"flex"},r.createElement(A,{value:m,onChange:function(e){p(e.target.value)},label:"start"}),r.createElement(A,{value:h,onChange:function(e){g(e.target.value)},label:"end"})),r.createElement("div",{className:"flex"},r.createElement("div",null,Z),r.createElement("div",{className:"flex"},w)))},K=function(){return r.createElement(J,null)}}}]);
//# sourceMappingURL=component---src-pages-demo-tsx-89d5f6c6d06e045be0a8.js.map