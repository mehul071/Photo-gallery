(this["webpackJsonpphoto-gallary"]=this["webpackJsonpphoto-gallary"]||[]).push([[0],{17:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(9),r=c.n(a),o=(c(17),c(12)),i=c(8),l=c.n(i),u=c(4),j=c(10),h=c(5),b=c(11),d=c(0),p=function(e){var t=e.urls.regular,c=e.alt_description,n=e.likes,s=e.user,a=s.name,r=s.portfolio_url,o=s.profile_image.medium;return Object(d.jsxs)("article",{className:"photo",children:[Object(d.jsx)("img",{src:t,alt:c}),Object(d.jsxs)("div",{className:"photo-info",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{children:a}),Object(d.jsxs)("p",{children:[n," likes"]})]}),Object(d.jsx)("a",{href:r,children:Object(d.jsx)("img",{src:o,alt:a,className:"user-img "})})]})]})},O="?client_id=".concat("15evqcoPslf8oIjGcCHg2czeQ_CLoqwVue0de0UX9Wo");var f=function(){var e=Object(n.useState)(!1),t=Object(h.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([]),r=Object(h.a)(a,2),i=r[0],f=r[1],m=Object(n.useState)(0),x=Object(h.a)(m,2),v=x[0],g=x[1],w=Object(n.useState)(""),N=Object(h.a)(w,2),y=N[0],k=N[1],S=function(){var e=Object(j.a)(l.a.mark((function e(){var t,c,n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),c="&page=".concat(v),n="&query=".concat(y),t=y?"".concat("https://api.unsplash.com/search/photos/").concat(O).concat(c).concat(n):"".concat("https://api.unsplash.com/photos/").concat(O).concat(c),e.prev=4,e.next=7,fetch(t);case 7:return a=e.sent,e.next=10,a.json();case 10:r=e.sent,f((function(e){return y&&1===v?r.results:[].concat(Object(u.a)(e),y?Object(u.a)(r.results):Object(u.a)(r))})),s(!1),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(4),s(!1),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){S()}),[v]),Object(n.useEffect)((function(){var e=window.addEventListener("scroll",(function(){!c&&window.innerHeight+window.scrollY>=document.body.scrollHeight-2&&g((function(e){return e+1}))}));return function(){return window.removeEventListener("scroll",e)}}),[]),Object(d.jsxs)("main",{children:[Object(d.jsx)("section",{className:"search",children:Object(d.jsxs)("form",{className:"search-form",children:[Object(d.jsx)("input",{type:"text",placeholder:"Search",className:"form-input",value:y,onChange:function(e){k(e.target.value)}}),Object(d.jsx)("button",{type:"submit",className:"submit-btn",onClick:function(e){e.preventDefault(),g(1)},children:Object(d.jsx)(b.a,{})})]})}),Object(d.jsxs)("section",{className:"photos",children:[Object(d.jsx)("div",{className:"photos-center",children:i.map((function(e,t){return Object(d.jsx)(p,Object(o.a)({},e),e.id)}))}),c&&Object(d.jsx)("h2",{className:"loading",children:"Loading..."})]})]})};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.7a12fab1.chunk.js.map