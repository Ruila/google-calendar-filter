"use strict";(self.webpackChunkgoogle_calendar_filter=self.webpackChunkgoogle_calendar_filter||[]).push([[691],{7047:function(e,n,t){t.d(n,{Z:function(){return c}});var r=function(){return r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},r.apply(this,arguments)};Object.create;Object.create;var a=t(7294);function c(e,n,t){void 0===n&&(n=[]),void 0===t&&(t={loading:!1});var c,o,u=(0,a.useRef)(0),s=(c=(0,a.useRef)(!1),o=(0,a.useCallback)((function(){return c.current}),[]),(0,a.useEffect)((function(){return c.current=!0,function(){c.current=!1}}),[]),o),l=(0,a.useState)(t),i=l[0],f=l[1],d=(0,a.useCallback)((function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var a=++u.current;return i.loading||f((function(e){return r(r({},e),{loading:!0})})),e.apply(void 0,n).then((function(e){return s()&&a===u.current&&f({value:e,loading:!1}),e}),(function(e){return s()&&a===u.current&&f({error:e,loading:!1}),e}))}),n);return[i,d]}},7361:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(7294),a=t(5861),c=t(7757),o=t.n(c),u=t(1597),s=t(5652),l=t(7047),i=function(){var e=(0,l.Z)((0,a.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.G.GoogleCalendarFilterExecutor.getGoogleAccessToken(s.G.getClientId(),s.G.getAuthCode(),s.G.getClientSecret());case 2:return n=e.sent,console.info("asas",n),n.data.access_token&&(console.info("asas",n.data.access_token),sessionStorage.setItem("access-token",n.data.access_token),s.G.setAccessToken(n.data.access_token)),console.info("asasas"),e.abrupt("return",n.data);case 7:case"end":return e.stop()}}),e)}))),[])[1];return(0,r.useEffect)((function(){var n=new URLSearchParams(window.location.search).get("code");n?(s.G.setAuthCode(n),e().catch()):(0,u.c4)("/login")}),[]),r.createElement(r.Fragment,null)},f=function(){return r.createElement(r.Fragment,null,r.createElement(i,null))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-9b4241e7655cf7496f00.js.map