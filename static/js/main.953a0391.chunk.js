/*! For license information please see main.953a0391.chunk.js.LICENSE.txt */
(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{23:function(t,r,e){"use strict";e.r(r);var n,c,o,i,a,u,s=e(1),l=e.n(s),b=e(10),d=e.n(b),p=e(8),j=e(2),O=e(4),h=e(3),g=Object(h.b)(n||(n=Object(O.a)(["\n\n@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');\n\n    * {\n        box-sizing: border-box;\n    }\n    body {\n         background-color: ",";\n         margin: 0;\n         font-family: 'Poppins', sans-serif;\n    }\n"])),(function(t){return t.theme.colors.bg})),f=h.c.div(c||(c=Object(O.a)(["\n   display: grid;\n   margin-top: 2rem;\n   grid-template-columns: repeat(4, 6rem);\n   grid-template-rows: minmax(7rem, auto) repeat(5, 6rem);\n   justify-content: center;\n"]))),m=h.c.button(o||(o=Object(O.a)(["\n    grid-column: span 2;\n    background-color: ",";\n    border: 1.4px solid ",";\n    outline: none;\n    cursor: pointer;\n    font-size: 1.4rem;\n    color: ",";\n    font-weight: 500;\n    &:hover, :focus {\n        background-color: ","\n    }\n"])),(function(t){return t.theme.colors.btn}),(function(t){return t.theme.colors.output}),(function(t){return t.theme.colors.btntext}),(function(t){return t.theme.colors.hover})),x=h.c.div(i||(i=Object(O.a)(["\n    grid-column: 1 / -1;\n    background-color: ",";\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    justify-content: space-around;\n    padding: .75rem;\n    word-wrap: break-word;\n    word-break: break-all;\n    .prev {\n        color: ",";\n        font-size: 1.5rem;\n    }\n    .curr {\n        color: ",";\n        font-size: 2.5rem;\n    }\n"])),(function(t){return t.theme.colors.output}),(function(t){return t.theme.colors.prev}),(function(t){return t.theme.colors.curr})),v=(h.c.div(a||(a=Object(O.a)([" \n    color: ",";\n"])),(function(t){return t.theme.colors.input})),h.c.button(u||(u=Object(O.a)(["\n    background-color: ",";\n    border: 1.4px solid ",";\n    outline: none;\n    cursor: pointer;\n    font-size: 1.4rem;\n    color: ",";\n    font-weight: 500;\n    &:hover, :focus {\n        background-color: ","\n    }\n"])),(function(t){return t.theme.colors.btn}),(function(t){return t.theme.colors.output}),(function(t){return t.theme.colors.btntext}),(function(t){return t.theme.colors.hover}))),E=e(0);var k=function(t){var r=t.dispatch,e=t.digit;return Object(E.jsx)(v,{onClick:function(){return r({type:y.ADD_DIGIT,payload:{digit:e}})},children:e})};var w=function(t){var r=t.dispatch,e=t.operation;return Object(E.jsx)(v,{onClick:function(){return r({type:y.CHOOSE_OPERATION,payload:{operation:e}})},children:e})},y={ADD_DIGIT:"add-digit",CHOOSE_OPERATION:"choose-operation",CLEAR:"clear",DELETE_DIGIT:"delete-digit",EVALUATE:"evaluate"};function D(t,r){var e=r.type,n=r.payload;switch(e){case y.ADD_DIGIT:return t.overwrite?Object(j.a)(Object(j.a)({},t),{},{curr:n.digit,overwrite:!1}):"0"===n.digit&&"0"===t.curr||"."===n.digit&&t.curr.includes(".")?t:Object(j.a)(Object(j.a)({},t),{},{curr:"".concat(t.curr||"").concat(n.digit)});case y.CLEAR:return{};case y.CHOOSE_OPERATION:return null==t.curr&&null==t.prev?t:null==t.curr?Object(j.a)(Object(j.a)({},t),{},{operation:n.operation}):null==t.prev?Object(j.a)(Object(j.a)({},t),{},{operation:n.operation,prev:t.curr,curr:null}):Object(j.a)(Object(j.a)({},t),{},{prev:I(t),operation:n.operation,curr:null});case y.DELETE_DIGIT:return t.overwrite?Object(j.a)(Object(j.a)({},t),{},{overwrite:!1,curr:null}):null==t.curr?t:"1"===t.curr.length?Object(j.a)(Object(j.a)({},t),{},{curr:null}):Object(j.a)(Object(j.a)({},t),{},{curr:t.curr.slice(0,-1)});case y.EVALUATE:return null==t.curr||null==t.prev||null==t.operation?t:Object(j.a)(Object(j.a)({},t),{},{prev:null,overwrite:!0,operation:null,curr:I(t)});default:return t}}function I(t){var r=t.curr,e=t.prev,n=t.operation,c=parseFloat(e),o=parseFloat(r);if(isNaN(c)||isNaN(o))return"";var i="";switch(n){case"+":i=c+o;break;case"-":i=c-o;break;case"*":i=c*o;break;case"\xf7":i=c/o;break;default:return""}return i.toString()}var A=new Intl.NumberFormat("en-us",{maximumFractionDigits:0});function T(t){if(null!=t){var r=t.split("."),e=Object(p.a)(r,2),n=e[0],c=e[1];return null==c?A.format(n):"".concat(A.format(n),".").concat(c)}}var C=function(){var t=Object(s.useReducer)(D,{}),r=Object(p.a)(t,2),e=r[0],n=e.curr,c=e.prev,o=e.operation,i=r[1];return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(g,{}),Object(E.jsxs)(f,{children:[Object(E.jsxs)(x,{children:[Object(E.jsxs)("div",{className:"prev",children:[T(c)," ",o]}),Object(E.jsx)("div",{className:"curr",children:T(n)})]}),Object(E.jsx)(m,{onClick:function(){return i({type:y.CLEAR})},children:"AC"}),Object(E.jsx)(v,{onClick:function(){return i({type:y.DELETE_DIGIT})},children:"DEL"}),Object(E.jsx)(w,{operation:"\xf7",dispatch:i}),Object(E.jsx)(k,{digit:"1",dispatch:i}),Object(E.jsx)(k,{digit:"2",dispatch:i}),Object(E.jsx)(k,{digit:"3",dispatch:i}),Object(E.jsx)(w,{operation:"*",dispatch:i}),Object(E.jsx)(k,{digit:"4",dispatch:i}),Object(E.jsx)(k,{digit:"5",dispatch:i}),Object(E.jsx)(k,{digit:"6",dispatch:i}),Object(E.jsx)(w,{operation:"+",dispatch:i}),Object(E.jsx)(k,{digit:"7",dispatch:i}),Object(E.jsx)(k,{digit:"8",dispatch:i}),Object(E.jsx)(k,{digit:"9",dispatch:i}),Object(E.jsx)(w,{operation:"-",dispatch:i}),Object(E.jsx)(k,{digit:".",dispatch:i}),Object(E.jsx)(k,{digit:"0",dispatch:i}),Object(E.jsx)(m,{onClick:function(){return i({type:y.EVALUATE})},children:"="})]})]})},L={colors:{bg:"rgb(136, 172, 238)",output:"rgb(71, 92, 148, 0.65)",prev:"rgb(230, 230, 250, 0.75)",curr:"rgb(230, 230, 250)",btn:"rgb(194, 206, 237, 0.75)",btntext:"rgb(12, 38, 107)",hover:"rgb(194, 206, 237)"}},N=function(t){var r=t.children;return Object(E.jsx)(h.a,{theme:L,children:r})};d.a.render(Object(E.jsx)(l.a.StrictMode,{children:Object(E.jsx)(N,{children:Object(E.jsx)(C,{})})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.953a0391.chunk.js.map