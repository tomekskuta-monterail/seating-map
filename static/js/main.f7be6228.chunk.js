(this["webpackJsonpseating-map"]=this["webpackJsonpseating-map"]||[]).push([[0],{33:function(e,n,t){},54:function(e,n,t){"use strict";t.r(n);var r,c=t(0),o=t.n(c),a=t(23),i=t.n(a),l=(t(33),t(10)),d=t.n(l),s=t(24),u=t(8),v=t(2),f=t(3),j=t(11),b=t.n(j),p=t(1),h=f.a.div(r||(r=Object(v.a)(["\n  margin: 0 40px;\n\n  & div:first-child {\n    margin-bottom: 8px;\n  }\n\n  & span {\n    margin-right: 10px;\n  }\n"])));var g,x=function(e){var n=e.hoveredSector,t=e.selectedSector;return Object(p.jsxs)(h,{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{children:"Hovered Sector:"}),Object(p.jsx)("strong",{children:n})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{children:"Selected Sector:"}),Object(p.jsx)("strong",{children:t})]})]})},S=t(28),m=["Sector A","Sector B","Sector C","Sector D","Sector E","Sector F","Vip Sector","Grouped Sectors"],O="#e07a5f",E="#f6deb6",k="#ecb45b",y="#d9d9d9",G="seating-map--active-sector",L="seating-map--hover-sector",C="seating-map--selected-sector",w="seating-map--cloned-sector",V=function(e){return(null===e||void 0===e?void 0:e.replace(/(_x5F_)|(_)/g," "))||null},_=function(e,n){return(null===e||void 0===e?void 0:e.querySelector("#".concat(null===n||void 0===n?void 0:n.replace(/ /g,"_"))))||(null===e||void 0===e?void 0:e.querySelector("#".concat(null===n||void 0===n?void 0:n.replace(/ /g,"_x5F_"))))},F=function(e,n){var t,r=null===e||void 0===e?void 0:e.cloneNode();(null===r||void 0===r||r.classList.add(w),(null===n||void 0===n?void 0:n.firstChild)instanceof SVGElement)&&(null===n||void 0===n||null===(t=n.firstChild)||void 0===t||t.appendChild(r));return r},H=function(e,n){var t;e&&(null===n||void 0===n?void 0:n.firstChild)instanceof SVGElement&&(null===n||void 0===n||null===(t=n.firstChild)||void 0===t||t.removeChild(e))},I=f.a.div(g||(g=Object(v.a)(["\n  & * {\n    transition: fill 0.2s;\n  }\n\n  & *.",", & *."," * {\n    fill: ",";\n    cursor: pointer;\n  }\n\n  & *.",", & *."," * {\n    fill: ",";\n  }\n\n  @media (hover: hover) {\n    & *.",", & *."," * {\n      fill: ",";\n    }\n  }\n\n  & *.",", & *."," * {\n    fill: transparent;\n    stroke: transparent;\n  }\n"])),G,G,O,C,C,k,L,L,E,w,w);var M,T,A=function(e){var n=e.map,t=e.hoveredSector,r=e.selectedSector,o=e.setHoveredSector,a=e.setSelectedSector,i=Object(c.useRef)(null),l=i.current;return Object(c.useLayoutEffect)((function(){n&&i.current&&m.forEach((function(e){var n,t=_(i.current,e);t instanceof SVGElement&&(t.classList.add(G),t.dataset.active="true",t instanceof SVGGElement&&(null===(n=t.children)||void 0===n?void 0:n.length)&&Array.from(t.children).forEach((function(e){e instanceof SVGElement&&(e.classList.add(G),e.dataset.active="true",e.dataset.groupId=t.id)})))}))}),[n,i]),Object(c.useLayoutEffect)((function(){var e;if(t&&l){var n,r,c=_(l,t);return null===c||void 0===c||c.classList.add(L),c instanceof SVGGElement&&(null===(e=c.children)||void 0===e?void 0:e.length)?r=Array.from(c.children).reduce((function(e,n){return n instanceof SVGElement?[].concat(Object(S.a)(e),[F(n,l)]):e}),[]):c instanceof SVGElement&&(n=F(c,l)),function(){var e,t;H(n,l),(null===(e=r)||void 0===e?void 0:e.length)&&(null===(t=r)||void 0===t||t.forEach((function(e){return H(e,l)}))),null===c||void 0===c||c.classList.remove(L)}}}),[t,l]),Object(c.useLayoutEffect)((function(){if(r&&l){var e=_(l,r);return null===e||void 0===e||e.classList.add(C),function(){null===e||void 0===e||e.classList.remove(C)}}}),[r,l]),n?Object(p.jsx)(I,{ref:i,dangerouslySetInnerHTML:{__html:n},onMouseOver:function(e){var n;e.target instanceof SVGElement&&"true"===(null===(n=e.target)||void 0===n?void 0:n.dataset.active)?o(V(e.target.dataset.groupId||e.target.id)):o(null)},onClick:function(e){var n;if(e.target instanceof SVGElement&&"true"===(null===(n=e.target)||void 0===n?void 0:n.dataset.active)){var t=V(e.target.dataset.groupId||e.target.id);a(t===r?null:t)}}}):null},B=f.a.div(M||(M=Object(v.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  max-width: 900px;\n  margin: 20px auto;\n"]))),q=f.a.button(T||(T=Object(v.a)(["\n  padding: 5px;\n  margin-bottom: 10px;\n  background-color: ",";\n  border: 1px black solid;\n  border-radius: 50px;\n  transition: background-color 0.2s;\n  cursor: pointer;\n\n  &:not(:last-of-type) {\n    margin-right: 10px;\n  }\n\n  @media (hover: hover) {\n    ","\n  }\n"])),(function(e){return e.selected?k:"transparent"}),(function(e){return e.hovered&&"background-color: ".concat(E,";")}));var D,J,P=function(e){var n=e.hoveredSector,t=e.selectedSector,r=e.setHoveredSector,c=e.setSelectedSector;return Object(p.jsx)(B,{children:m.map((function(e){return Object(p.jsx)(q,{hovered:e===n,selected:e===t,onMouseEnter:function(){return r(e)},onMouseLeave:function(){return r(null)},onClick:function(){return function(e){c(t===e?null:e)}(e)},children:e},e)}))})},N=f.a.ul(D||(D=Object(v.a)(["\n  padding-left: 0;\n"]))),R=f.a.li(J||(J=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 5px;\n\n  & div {\n    width: 8px;\n    height: 8px;\n    background-color: ",";\n    margin-right: 8px;\n  }\n"])),(function(e){return e.color}));var U,z,K,Q,W=function(){return Object(p.jsxs)(N,{children:[Object(p.jsxs)(R,{color:k,children:[Object(p.jsx)("div",{}),"Selected"]}),Object(p.jsxs)(R,{color:O,children:[Object(p.jsx)("div",{}),"Available"]}),Object(p.jsxs)(R,{color:y,children:[Object(p.jsx)("div",{}),"Unavailable"]})]})},X=t.p+"static/media/seating-map.12c478b1.svg",Y=f.a.header(U||(U=Object(v.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 20px 40px 40px;\n"]))),Z=f.a.h1(z||(z=Object(v.a)(["\n  margin: 0;\n"]))),$=f.a.a(K||(K=Object(v.a)(["\n  color: black;\n  font-weight: bold;\n"]))),ee=f.a.div(Q||(Q=Object(v.a)(["\n  margin: 40px auto;\n  max-width: 600px;\n"])));var ne=function(){var e=Object(c.useState)(null),n=Object(u.a)(e,2),t=n[0],r=n[1],o=Object(c.useState)(null),a=Object(u.a)(o,2),i=a[0],l=a[1],v=Object(c.useState)(null),f=Object(u.a)(v,2),j=f[0],h=f[1],g=function(){var e=Object(s.a)(d.a.mark((function e(n){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(X,{cancelToken:n});case 2:t=e.sent.data,r(t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){var e=b.a.CancelToken.source();return g(e.token),function(){e.cancel()}}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(Y,{children:[Object(p.jsx)(Z,{children:"Seating Map"}),Object(p.jsx)($,{href:"https://github.com/tomekskuta-monterail/seating-map",target:"_blank",rel:"noopener noreferrer",children:"Go to the repo"})]}),Object(p.jsx)(x,{hoveredSector:i,selectedSector:j}),Object(p.jsx)(P,{hoveredSector:i,selectedSector:j,setHoveredSector:l,setSelectedSector:h}),Object(p.jsxs)(ee,{children:[Object(p.jsx)(A,{map:t,hoveredSector:i,selectedSector:j,setHoveredSector:l,setSelectedSector:h}),Object(p.jsx)(W,{})]})]})},te=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,55)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,o=n.getLCP,a=n.getTTFB;t(e),r(e),c(e),o(e),a(e)}))};i.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(ne,{})}),document.getElementById("root")),te()}},[[54,1,2]]]);
//# sourceMappingURL=main.f7be6228.chunk.js.map