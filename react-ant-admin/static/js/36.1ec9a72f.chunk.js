(this["webpackJsonpreact-ant-admin-ts"]=this["webpackJsonpreact-ant-admin-ts"]||[]).push([[36],{1078:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));a(890);var r=a(892),n=a.n(r),c=(a(151),a(88)),s=a.n(c),i=a(19),u=a(36),o=a(17),l=a(350),p=a(0),b=a(1097),h=a(12);function d(e){var t=function(e){var t=e.status,a=void 0===t?"404":t,r=e.errTitle,n=void 0===r?"404":r,c=e.subTitle,s=void 0===c?"Sorry, the page you visited does not exist.":c,h=Object(b.e)(),d=Object(l.k)(),f=Object(b.a)().stateFilterOpenMenuKey;return{status:a,errTitle:n,subTitle:s,back:Object(p.useCallback)(Object(u.a)(Object(i.a)().mark((function e(){var t,a,r,n,c,s,u;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=d.location.pathname+(d.location.hash||d.location.search),!(h.length<=1)){e.next=11;break}return f([t]),e.next=5,Object(o.h)();case 5:if(0!==(a=e.sent).openedMenu.length){e.next=8;break}return e.abrupt("return",d.replace("/"));case 8:return r=a.openedMenu[0],n=r.parentPath,c=r.path,d.replace(n+c),e.abrupt("return");case 11:s=h.filter((function(e){return e.path!==t})),f([t]),u=s[s.length-1],d.replace(u.path);case 15:case"end":return e.stop()}}),e)}))),[d,h,f])}}(e),a=t.status,r=t.errTitle,c=t.subTitle,d=t.back;return Object(h.jsx)(n.a,{status:a,title:r,subTitle:c,extra:Object(h.jsx)(s.a,{type:"primary",onClick:d,children:"Go Back"})})}}}]);