(this["webpackJsonpreact-ant-admin-ts"]=this["webpackJsonpreact-ant-admin-ts"]||[]).push([[22],{1091:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ut}));n(370);var c=n(371),a=n.n(c),r=n(5),s=n(0),i=n(394),o=(n(410),n(411)),u=n.n(o),l=(n(495),n(498)),b=n.n(l),j=(n(446),n(422)),O=n.n(j),p=n.p+"static/media/logo.51586d6b.svg",d=n(91),f=n(17),h=n(42),m=n(86),x=function(e){return{type:m.b,info:e}},v=function(){return{type:m.a}},y=function(e){return e.user},g=function(){return Object(h.d)(y)};function k(){var e=Object(h.c)();return{stateSetUser:Object(s.useCallback)((function(t){return e(x(t))}),[e]),stateClearUser:Object(s.useCallback)((function(){return e(v())}),[e])}}var C=n(12),w=u.a.Header,M=function(e){var t=e.logout;return Object(C.jsx)(O.a,{className:"right-down",children:Object(C.jsx)(O.a.Item,{onClick:t,icon:Object(C.jsx)(d.a,{type:"icon_disconnectdevice"}),children:"\u9000\u51fa\u767b\u5f55"},"logout")})},N=function(e){return e};function S(e){var t=e.children,n=g(),c=k().stateClearUser,a=Object(s.useCallback)((function(){Object(f.d)([f.c,f.b,f.a]),window.location.reload(),c()}),[c]);return Object(C.jsxs)(w,{className:"header",children:[Object(C.jsxs)("div",{className:"logo",children:[Object(C.jsx)("img",{src:p,alt:"logo"}),Object(C.jsx)("span",{children:"react-ant-admin"})]}),t,Object(C.jsx)("div",{className:"right",children:Object(C.jsx)(b.a,{placement:"bottomCenter",getPopupContainer:N,overlay:Object(C.jsx)(M,{logout:a}),children:Object(C.jsxs)("div",{children:["\u7ba1\u7406\u5458\uff1a",n&&n.username]})})})]})}n(760);var P=n(762),K=n.n(P),I=(n(151),n(88)),L=n.n(I),E=(n(351),n(352)),U=n.n(E),_=n(38),q=n(1097),T=n(320),A=u.a.Sider,F=O.a.SubMenu,z=function e(t,n){return!1===t.isShowOnMenu?null:t.children?Object(C.jsx)(F,{title:t.title,icon:Object(C.jsx)(d.a,{type:t.icon}),children:t.children.map((function(c){return e(c,n+t.path)}))},t.key):Object(C.jsx)(O.a.Item,{icon:Object(C.jsx)(d.a,{type:t.icon}),children:Object(C.jsx)(i.Link,{to:n+t.path,children:t.title})},t.key)},R=function(e){var t=e.children;return Object(C.jsx)(U.a,{sm:6,md:10,lg:15,className:"fl",children:t})},D=function(e){var t=e.children,n=Object(s.useState)(!1),c=Object(r.a)(n,2),a=c[0],i=c[1];return Object(C.jsx)(K.a,{children:Object(C.jsxs)(A,{width:200,collapsed:a,children:[t,Object(C.jsx)("div",{className:"fold-control fixed",children:Object(C.jsxs)(L.a,{onClick:function(e){i(!a),Object(f.x)(e)},children:[a?"\u5c55\u5f00":"\u6536\u8d77",Object(C.jsx)(d.a,{type:a?"icon_next":"icon_back"})]})})]})})};function H(){var e=Object(q.d)(),t=Object(q.f)(),n=Object(T.b)(),c=Object(q.c)(),a=Object(q.a)().stateSetOpenMenuKey,r=Object(s.useMemo)((function(){return c.map((function(e){return z(e,"")}))}),[c]),i=Object(s.useMemo)((function(){return n===_.a?R:D}),[n]),o=Object(s.useMemo)((function(){return n!==_.a?"layout-silder-menu hide-scrollbar":"layout-silder-menu col"}),[n]),u=Object(s.useMemo)((function(){return n===_.a?"horizontal":"inline"}),[n]);return Object(C.jsx)(i,{children:Object(C.jsx)(O.a,{mode:u,triggerSubMenuAction:"click",className:o,onOpenChange:a,openKeys:e,selectedKeys:t,children:r})})}n(765);var W=n(767),B=n.n(W),V=n(19),J=n(36),X=n(2),Y=(n(64),n(31)),Z=n.n(Y),G=n(4),Q=n(1070),$=n(350),ee=(n(773),n(774),function(e){e.stopPropagation(),e.preventDefault()});function te(e){var t=e.isCurrent,n=e.visible,c=e.x,a=e.y,i=e.setVisible,o=e.onClose,u=Object(s.useRef)(null),l=Object(s.useState)({}),b=Object(r.a)(l,2),j=b[0],O=b[1],p=Object(s.useMemo)((function(){return n?"block":"none"}),[n]),d=Object(s.useMemo)((function(){return n?(document.body.style.overflow="hidden","visible"):(document.body.style.overflow="unset","hidden")}),[n]);Object(s.useEffect)((function(){var e,t=window.screen.availWidth||document.body.offsetWidth,n=(null===(e=u.current)||void 0===e?void 0:e.offsetWidth)||0,r=c;c+n>t&&(r=c-n),O({left:r,top:a,visibility:d})}),[c,a,d,u]);var f=Object(s.useCallback)((function(){return"visible"===d&&(console.log("\u5173\u95ed\u5f39\u7a97"),i(!1)),!1}),[i,d]),h=Object(s.useCallback)((function(e){e.stopPropagation(),console.log("\u5173\u95ed\u5168\u90e8"),o("all"),f()}),[f,o]),m=Object(s.useCallback)((function(e){e.stopPropagation(),console.log("\u53f3"),o("right"),f()}),[f,o]),x=Object(s.useCallback)((function(e){e.stopPropagation(),console.log("\u5de6"),o("left"),f()}),[f,o]),v=Object(s.useCallback)((function(e){e.stopPropagation(),console.log("\u5f53\u524d"),o("current"),f()}),[f,o]);return Object(C.jsx)("div",{onContextMenu:ee,onMouseUp:f,style:{display:p},className:"centext-menu",children:Object(C.jsxs)("ul",{style:j,ref:u,children:[Object(C.jsx)("li",{onMouseUp:h,children:"\u5173\u95ed\u6240\u6709"}),Object(C.jsx)("li",{onMouseUp:m,children:"\u5173\u95ed\u53f3\u4fa7"}),Object(C.jsx)("li",{onMouseUp:x,children:"\u5173\u95ed\u5de6\u4fa7"}),t&&Object(C.jsx)("li",{onMouseUp:v,children:"\u5173\u95ed\u5f53\u524d"})]})})}var ne=function(e,t,n){var c=Array.from(e),a=c.splice(t,1),s=Object(r.a)(a,1)[0];return c.splice(n,0,s),c};function ce(){var e=Object($.k)(),t=Object(s.useState)([]),n=Object(r.a)(t,2),c=n[0],a=n[1],o=Object(s.useState)(!1),u=Object(r.a)(o,2),l=u[0],b=u[1],j=Object(s.useState)(null),O=Object(r.a)(j,2),p=O[0],f=O[1],h=Object(s.useState)({x:0,y:0}),m=Object(r.a)(h,2),x=m[0],v=m[1],y=Object(q.e)(),g=Object(q.b)(),k=Object(q.a)().stateFilterOpenMenuKey;Object(s.useEffect)((function(){if(c.length!==y.length){var e=Object(G.a)(c);y.forEach((function(t){c.find((function(e){return e.path===t.path}))||e.push(t)})),e=e.filter((function(e){return y.find((function(t){return t.path===e.path}))})),a(e)}}),[y,c]);var w=Object(s.useCallback)((function(e){if(e.destination){var t=ne(c,e.source.index,e.destination.index);a(t)}}),[c]),M=Object(s.useCallback)((function(t){var n=c.filter((function(e){return e.path!==t.path})),r=n[n.length-1];r&&a(n);var s=t.path===g;k([t.path]),r&&s?e.replace(r.path):s&&!r&&e.replace("/")}),[c,g,k,e]),N=Object(s.useCallback)((function(){if(p){var t=c.findIndex((function(e){return e.path===p.path}));if(console.log(t),t===c.length-1)return Z.a.warn("\u53f3\u4fa7\u65e0\u5173\u95ed\u9879");var n=c.slice(t+1).map((function(e){return e.path}));console.log(n),k(n),e.replace(p.path)}}),[p,c,k,e]),S=Object(s.useCallback)((function(){if(p){var t=c.findIndex((function(e){return e.path===p.path}));if(console.log(t),0===t)return Z.a.warn("\u5de6\u4fa7\u65e0\u5173\u95ed\u9879");var n=c.slice(0,t).map((function(e){return e.path}));console.log(n),k(n),e.replace(p.path)}}),[p,c,k,e]),P=Object(s.useCallback)((function(){var t=c.map((function(e){return e.path}));console.log(t),k(t),e.replace("/")}),[c,k,e]),K=Object(s.useCallback)((function(e,t){var n=e.clientX,c=e.clientY;return e.stopPropagation(),e.preventDefault(),b(!0),f(t),v({x:n,y:c}),!1}),[]),I=Object(s.useCallback)((function(e){switch(e){case"current":M(p);break;case"right":N();break;case"left":S();break;case"all":P()}}),[M,p,N,S,P]),L=Object(s.useMemo)((function(){return c.length?c.map((function(e,t){var n=g===e.path?"dnd-items active":"dnd-items",c=function(t){t.preventDefault(),t.stopPropagation(),M(e)};return Object(C.jsx)(Q.b,{index:t,draggableId:e.path,children:function(t){return Object(C.jsxs)(i.Link,Object(X.a)(Object(X.a)(Object(X.a)({className:n,ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{onContextMenu:function(t){return K(t,e)},style:Object(X.a)({},t.draggableProps.style),to:e.path,children:[e.title,Object(C.jsx)(d.a,{className:"anticon-close",type:"icon_close",onClick:c})]}))}},e.path)})):null}),[c,g,K,M]);return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(Q.a,{onDragEnd:w,children:Object(C.jsx)(Q.c,{droppableId:"droppable",direction:"horizontal",children:function(e){return Object(C.jsxs)("div",Object(X.a)(Object(X.a)({},e.droppableProps),{},{ref:e.innerRef,className:"dnd-body hide-scrollbar",children:[L,e.placeholder]}))}})}),Object(C.jsx)(te,Object(X.a)(Object(X.a)({},x),{},{isCurrent:Boolean(p&&p.path===g),onClose:I,visible:l,setVisible:b}))]})}var ae=n(115);function re(e,t){return e.find((function(e){return e.key===t}))}function se(e){return ie.apply(this,arguments)}function ie(){return(ie=Object(J.a)(Object(V.a)().mark((function e(t){var n,c,a,r,s;return Object(V.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f.p,e.next=3,Object(ae.a)();case 3:if(e.t1=e.sent,n=(0,e.t0)(e.t1),c=[],a=n.find((function(e){return e.key===t}))){e.next=9;break}return e.abrupt("return",[]);case 9:for(c.unshift(a),r=a.parentKey;s=re(n,r);)c.unshift(s),r=s.parentKey;return e.abrupt("return",c);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oe(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(q.f)();return Object(s.useEffect)((function(){function e(){return(e=Object(J.a)(Object(V.a)().mark((function e(){var t;return Object(V.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se(a[0]);case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]),Object(C.jsxs)("div",{className:"top-menu-wrapper",children:[n.length>0&&Object(C.jsx)(B.a,{className:"top-breadcrumb",children:n.map((function(e){return Object(C.jsxs)(B.a.Item,{children:[Object(C.jsx)(d.a,{type:e.icon}),Object(C.jsx)("span",{className:"title",children:e.title})]},e.key)}))}),Object(C.jsx)("div",{className:"top-menu",children:Object(C.jsx)(ce,{})})]})}var ue=u.a.Footer;function le(){return Object(C.jsxs)(ue,{className:"footer",children:[Object(C.jsx)("p",{children:Object(C.jsx)("a",{href:"https://azhengpersonalblog.top/doc-react-ant-admin",target:"_blank",rel:"noreferrer",children:"react-ant-admin\u6587\u6863\u5730\u5740"})}),Object(C.jsx)("p",{children:Object(C.jsx)("a",{href:"https://qm.qq.com/cgi-bin/qm/qr?k=Wo_kXUOA-mTBviZ6gF4H912AKdE5vTML&jump_from=webapi",target:"_blank",rel:"noreferrer",children:"qq\u4ea4\u6d41\u7fa4"})}),Object(C.jsx)("p",{children:"\u5907\u6848/\u8bb8\u53ef\u8bc1\u7f16\u53f7\uff1a\u6e58ICP\u590720007569\u53f7"}),Object(C.jsx)("p",{children:"react-ant-admin \xa92021 Created by azheng"})]})}var be,je,Oe,pe,de,fe,he,me,xe,ve,ye,ge,ke,Ce,we,Me,Ne,Se,Pe=n(775),Ke=n(1),Ie=[(be={},Object(Ke.a)(be,"path","/form/index"),Object(Ke.a)(be,"components",(function(){return Promise.all([n.e(0),n.e(21),n.e(30)]).then(n.bind(null,1079))})),be),(je={},Object(Ke.a)(je,"path","/details/person"),Object(Ke.a)(je,"components",(function(){return Promise.all([n.e(0),n.e(2),n.e(5),n.e(24),n.e(29)]).then(n.bind(null,1080))})),je),(Oe={},Object(Ke.a)(Oe,"path","/icons"),Object(Ke.a)(Oe,"components",(function(){return n.e(28).then(n.bind(null,1081))})),Oe),(pe={},Object(Ke.a)(pe,"path","/statistics/visitor"),Object(Ke.a)(pe,"components",(function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(11)]).then(n.bind(null,1100))})),pe),(de={},Object(Ke.a)(de,"path","/list/box-list"),Object(Ke.a)(de,"components",(function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(16)]).then(n.bind(null,1082))})),de),(fe={},Object(Ke.a)(fe,"path","/list/card"),Object(Ke.a)(fe,"components",(function(){return Promise.all([n.e(5),n.e(12),n.e(31)]).then(n.bind(null,1083))})),fe),(he={},Object(Ke.a)(he,"path","/list/search"),Object(Ke.a)(he,"components",(function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(17)]).then(n.bind(null,1084))})),he),(me={},Object(Ke.a)(me,"path","/list/university-list"),Object(Ke.a)(me,"components",(function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(18)]).then(n.bind(null,1085))})),me),(xe={},Object(Ke.a)(xe,"path","/list/user-list"),Object(Ke.a)(xe,"components",(function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(19)]).then(n.bind(null,1086))})),xe),(ve={},Object(Ke.a)(ve,"path","/list/wall-list"),Object(Ke.a)(ve,"components",(function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(20)]).then(n.bind(null,1087))})),ve),(ye={},Object(Ke.a)(ye,"path","/power/menu"),Object(Ke.a)(ye,"components",(function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(13)]).then(n.bind(null,1101))})),ye),(ge={},Object(Ke.a)(ge,"path","/power/type"),Object(Ke.a)(ge,"components",(function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(15)]).then(n.bind(null,1102))})),ge),(ke={},Object(Ke.a)(ke,"path","/power/user"),Object(Ke.a)(ke,"components",(function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(14)]).then(n.bind(null,1103))})),ke)],Le=n(73),Ee=Object(Le.a)((function(){return Promise.all([n.e(23),n.e(36)]).then(n.bind(null,1078))})),Ue=[(Ce={},Object(Ke.a)(Ce,"path","/"),Object(Ke.a)(Ce,"key","index"),Object(Ke.a)(Ce,"to","/details/person"),Object(Ke.a)(Ce,"components",$.c),Ce),(we={},Object(Ke.a)(we,"path","/result/404"),Object(Ke.a)(we,"components",Ee),we),(Me={},Object(Ke.a)(Me,"path","/result/403"),Object(Ke.a)(Me,"status","403"),Object(Ke.a)(Me,"errTitle","403"),Object(Ke.a)(Me,"subTitle","Sorry, you don't have access to this page."),Object(Ke.a)(Me,"components",Ee),Me),(Ne={},Object(Ke.a)(Ne,"path","/result/500"),Object(Ke.a)(Ne,"status","500"),Object(Ke.a)(Ne,"errTitle","500"),Object(Ke.a)(Ne,"subTitle","Sorry, the server is reporting an error."),Object(Ke.a)(Ne,"components",Ee),Ne),(Se={},Object(Ke.a)(Se,"path","*"),Object(Ke.a)(Se,"title","\u9875\u9762\u4e0d\u5b58\u5728"),Object(Ke.a)(Se,"key","404"),Object(Ke.a)(Se,"keepAlive","true"),Object(Ke.a)(Se,"components",Ee),Se)],_e=Ie.map((function(e){return Object(X.a)(Object(X.a)({},e),{},{components:Object(Le.a)(e.components)})}));_e.push.apply(_e,Ue);var qe=_e,Te=n(15),Ae=n(59),Fe=Object(C.jsx)(a.a,{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:500,fontSize:24},tip:"\u9875\u9762\u52a0\u8f7d\u4e2d...."});var ze=function(e){var t="title",n="path",c=e.menuList,a=e.components,i=e[t],o=e[n],u=e.pageKey,l=Object(Te.a)(e,["menuList","components",t,n,"pageKey"].map(Ae.a)),b=Object(s.useState)(!1),j=Object(r.a)(b,2),O=j[0],p=j[1],d=Object($.l)(),h=Object(q.a)(),m=h.stateSetOpenMenuKey,x=h.stateSetSelectMenuKey,v=h.stateAddOpenedMenu,y=h.stateSetCurrentPath,g=Object(s.useMemo)((function(){return d.pathname+d.search}),[d]),k=Object(s.useCallback)((function(){y(g),v({key:u,path:g,title:i||"\u672a\u8bbe\u7f6e\u6807\u9898\u4fe1\u606f"})}),[g,u,i,y,v]),w=Object(s.useCallback)((function(){if(i){document.title=i,x([String(u)]);var e=Object(f.m)(c,u);m(e),v({key:u,path:g,title:i})}}),[g,c,i,u,m,x,v]),M=Object(s.useCallback)((function(){w(),window.scrollTo({top:0,left:0,behavior:"smooth"})}),[w]);return Object(s.useEffect)((function(){M&&!O&&(M(),p(!0))}),[M,O]),Object(s.useEffect)((function(){O&&k()}),[k,O]),c.find((function(e){return(e.parentPath||"")+e.path===o})),Object(C.jsx)(a,Object(X.a)(Object(X.a)({},l),{},{fallback:Fe}))};function Re(){var e=Object(q.a)().stateSetMenuList,t=Object(s.useState)([]),n=Object(r.a)(t,2),c=n[0],a=n[1],i=Object(s.useState)([]),o=Object(r.a)(i,2),u=o[0],l=o[1];Object(s.useEffect)((function(){e&&"function"===typeof e&&Object(ae.a)().then((function(t){var n=Object(f.f)(t),c=Object(f.p)(n),r=qe.map((function(e){var t=c.find((function(t){return(t.parentPath||"")+t.path===e.path}));return t?e=Object(X.a)(Object(X.a)({},t),e):e.key=e.path,e}));t&&t.length&&(e(n),l(c),a(r))}))}),[e]);var b=Object(s.useMemo)((function(){if(c.length)return c.map((function(e){var t=e.key,n=e.path,c="true"===e.keepAlive?Pe.CacheRoute:$.d;return Object(C.jsx)(c,{exact:!0,path:n,render:function(n){return Object(C.jsx)(ze,Object(X.a)(Object(X.a)(Object(X.a)({},n),e),{},{menuList:u,pageKey:t}))}},t)}))}),[u,c]);return Object(C.jsx)(Pe.CacheSwitch,{children:b})}var De=u.a.Content,He=function(e){var t=e.visible;return Object(C.jsxs)(u.a,{className:"my-layout-body",children:[Object(C.jsx)(S,{children:Object(C.jsx)(H,{})}),Object(C.jsx)(u.a,{children:Object(C.jsxs)(u.a,{className:"layout-content-wrap",children:[t.topMenu&&Object(C.jsx)(oe,{}),Object(C.jsx)(De,{className:" layout-content-body",children:Object(C.jsx)(Re,{})}),t.footer&&Object(C.jsx)(le,{})]})})]})},We=u.a.Content,Be=function(e){var t=e.visible;return Object(C.jsxs)(u.a,{className:"my-layout-body",children:[Object(C.jsx)(S,{children:null}),Object(C.jsxs)(u.a,{children:[Object(C.jsx)(H,{}),Object(C.jsxs)(u.a,{className:"layout-content-wrap",children:[t.topMenu&&Object(C.jsx)(oe,{}),Object(C.jsx)(We,{className:" layout-content-body",children:Object(C.jsx)(Re,{})}),t.footer&&Object(C.jsx)(le,{})]})]})]})},Ve=u.a.Content,Je=function(e){var t=e.visible;return Object(C.jsxs)(u.a,{className:"my-layout-body twoflanks",children:[Object(C.jsx)(H,{}),Object(C.jsxs)(u.a,{className:"layout-content-wrap reset-padding",children:[Object(C.jsx)(S,{children:null}),t.topMenu&&Object(C.jsx)(oe,{}),Object(C.jsx)(Ve,{className:"layout-content-body",children:Object(C.jsx)(Re,{})}),t.footer&&Object(C.jsx)(le,{})]})]})},Xe=(n(742),n(321));function Ye(){var e=Object(T.b)(),t=Object(Xe.b)();switch(e){case _.a:return Object(C.jsx)(He,{visible:t});case _.b:return Object(C.jsx)(Be,{visible:t});case _.c:return Object(C.jsx)(Je,{visible:t});default:return null}}n(487);var Ze=n(443),Ge=n.n(Ze),Qe=(n(364),n(365)),$e=n.n(Qe),et=(n(354),n(356)),tt=n.n(et),nt=n(97),ct=(n(711),Object(X.a)({remember:!0},Object(f.l)())),at=[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"}],rt=[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"}];function st(){var e=Object(h.c)(),t=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1];return{btnLoad:c,onFinish:function(t){a(!0),Object(nt.D)(t).then((function(n){var c=n.data,r=n.msg,s=n.status,i=n.token;if(a(!1),1!==s||c){var o=Object.assign({isLogin:!0},c);Object(f.s)(i),Z.a.success(r),t.remember&&Object(f.t)(o),e(o)}})).catch((function(){a(!1)}))}}}(Object(s.useCallback)((function(t){return e(x(t))}),[e])),n=t.btnLoad,c=t.onFinish;return Object(C.jsx)("div",{className:"login-container",children:Object(C.jsxs)("div",{className:"wrapper",children:[Object(C.jsx)("div",{className:"title",children:"react-ant-admin"}),Object(C.jsx)("div",{className:"welcome",children:"\u6b22\u8fce\u4f7f\u7528\uff0c\u8bf7\u5148\u767b\u5f55"}),Object(C.jsxs)($e.a,{className:"login-form",initialValues:ct,onFinish:c,children:[Object(C.jsx)($e.a.Item,{name:"account",rules:at,children:Object(C.jsx)(tt.a,{prefix:Object(C.jsx)(d.a,{type:"icon_nickname"}),placeholder:"\u8d26\u53f7:admin/user"})}),Object(C.jsx)($e.a.Item,{name:"pswd",rules:rt,children:Object(C.jsx)(tt.a,{prefix:Object(C.jsx)(d.a,{type:"icon_locking"}),type:"password",autoComplete:"off",placeholder:"\u5bc6\u7801:admin123/user123"})}),Object(C.jsx)($e.a.Item,{children:Object(C.jsx)($e.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0,children:Object(C.jsx)(Ge.a,{children:"\u8bb0\u4f4f\u6211"})})}),Object(C.jsxs)($e.a.Item,{className:"btns",children:[Object(C.jsx)(L.a,{type:"primary",htmlType:"submit",className:"login-form-button",loading:n,children:"\u767b\u5f55"}),Object(C.jsx)(L.a,{htmlType:"reset",children:"\u91cd\u7f6e"})]})]})]})})}var it=!0,ot="/";function ut(){var e=Object(s.useState)(!0),t=Object(r.a)(e,2),n=t[0],c=t[1],o=k().stateSetUser,u=g();return Object(s.useEffect)((function(){if(!u){var e=Object(f.l)();return e&&!0===e.isLogin&&o(e),c(!1)}c(!1)}),[o,u]),n?Object(C.jsx)(a.a,{size:"large",wrapperClassName:"loading-page",tip:"Loading...",children:Object(C.jsx)("div",{className:"loading-page"})}):u?it?Object(C.jsx)(i.HashRouter,{basename:ot,children:Object(C.jsx)(Ye,{})}):Object(C.jsx)(i.BrowserRouter,{basename:ot,children:Object(C.jsx)(Ye,{})}):Object(C.jsx)(st,{})}},1097:function(e,t,n){"use strict";n.d(t,"f",(function(){return h})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return x})),n.d(t,"b",(function(){return v})),n.d(t,"c",(function(){return y})),n.d(t,"a",(function(){return g}));var c=n(0),a=n(42),r=n(46),s=function(e){return{type:r.a,menuItem:e}},i=function(e){return{type:r.d,keys:e}},o=function(e){return{type:r.e,keys:e}},u=function(e){return{type:r.b,keys:e}},l=function(e){return{type:r.f,list:e}},b=function(e){return{type:r.c,path:e}},j=function(e){return e.menu.openedMenu},O=function(e){return e.menu.currentPath},p=function(e){return e.menu.menuList},d=function(e){return e.menu.selectMenuKey},f=function(e){return e.menu.openMenuKey},h=function(){return Object(a.d)(d)},m=function(){return Object(a.d)(f)},x=function(){return Object(a.d)(j)},v=function(){return Object(a.d)(O)},y=function(){return Object(a.d)(p)};function g(){var e=Object(a.c)();return{stateSetOpenMenuKey:Object(c.useCallback)((function(t){return e(i(t))}),[e]),stateSetSelectMenuKey:Object(c.useCallback)((function(t){return e(o(t))}),[e]),stateFilterOpenMenuKey:Object(c.useCallback)((function(t){return e(u(t))}),[e]),stateAddOpenedMenu:Object(c.useCallback)((function(t){return e(s(t))}),[e]),stateSetMenuList:Object(c.useCallback)((function(t){return e(l(t))}),[e]),stateSetCurrentPath:Object(c.useCallback)((function(t){return e(b(t))}),[e])}}},711:function(e,t,n){},742:function(e,t,n){},773:function(e,t,n){},774:function(e,t,n){}}]);