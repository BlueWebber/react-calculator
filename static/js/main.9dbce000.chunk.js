(this.webpackJsonpreact_calculator=this.webpackJsonpreact_calculator||[]).push([[0],{56:function(n,t){},57:function(n,t,e){"use strict";e.r(t);var r=e(1),o=e.n(r),c=e(29),i=e.n(c),a=e(8),u=e(5),l=e(3),s={status:"dark",colors:{appBackground:{main:"#181a1b",dark:"#1b1e1f",mid:"#343434",darkMid:"#303030"},text:{primary:"rgba(232, 230, 227, 0.95)",secondary:"#afafaf",tooltip:"white"},shadow:{primary:"rgba(0, 0, 0, 0.2)"},button:{primary:"#484848",danger:"#ed4245",secondary:"rgb(0, 98, 204)",success:"#0d761d",hover:{success:"#0e801f",primary:"#4d4d4d",secondary:"rgb(0, 109, 227)",danger:"#c03537"},active:{primary:"#262626",success:"#0b6318",secondary:"rgb(0, 82, 171)"},text:{primary:"rgba(232, 230, 227, 0.95)",secondary:"white",success:"white"}},border:{primary:"#000000",mid:"#343434"},nav:"#1b1e1f",scrollbar:"#666666",tooltip:"black"}},d={status:"light",colors:Object(l.a)(Object(l.a)({},s.colors),{},{appBackground:Object(l.a)(Object(l.a)({},s.colors.appBackground),{},{main:"#dedede",dark:"#c9c9c9",mid:"#ffffff",darkMid:"#f3f3f3"}),text:Object(l.a)(Object(l.a)({},s.colors.text),{},{primary:"#313131",secondary:"#575757"}),button:Object(l.a)(Object(l.a)({},s.colors.button),{},{primary:"#fcfcfc",success:"#11a428",hover:Object(l.a)(Object(l.a)({},s.colors.button.hover),{},{primary:"#ededed",success:"#0f9925"}),active:Object(l.a)(Object(l.a)({},s.colors.button.active),{},{primary:"#dbdbdb",success:"#0c7d1e"}),text:Object(l.a)(Object(l.a)({},s.colors.button.text),{},{primary:"#313131"})}),border:Object(l.a)(Object(l.a)({},s.colors.border),{},{primary:"#9e9e9e",mid:"#bababa"}),shadow:Object(l.a)(Object(l.a)({},s.colors.shadow),{},{primary:"#ababab"}),nav:"#e8e8e8",scrollbar:"#6d7a7a"})},p=e(0),b=o.a.createContext();b.displayName="ThemeContext";var h,x,j,f=function(n){var t=n.children,e=o.a.useRef(!1),r=o.a.useState((function(){return localStorage.getItem("theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")})),c=Object(a.a)(r,2),i=c[0],l=c[1];return o.a.useEffect((function(){e.current?localStorage.setItem("theme",i):e.current=!0}),[i]),Object(p.jsx)(b.Provider,{value:[i,l],children:Object(p.jsx)(u.a,{theme:"dark"===i?s:d,children:t})})},m=e(6),y=Object(u.b)(h||(h=Object(m.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n  }\n\n  :root {\n    background-color: ",';\n  }\n\n  html, body, #root {\n    @media only screen and (max-width: 600px), \n      only screen and (max-height: 700px) {\n      height: 100%;\n    };\n  }\n\n  main {\n    @media only screen and (max-width: 600px) {\n      height: 85%;\n      margin-top: 5px;\n    }\n    @media only screen and (max-height: 600px) {\n      height: 97%;\n      padding-top: 5px;\n    }\n  }\n\n  body {\n    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n    line-height: 1.5;\n    font-size: 16px;\n    color: ',";\n  }\n\n  main {\n    display: flex;\n    flex-grow: 1;\n    justify-content: center;\n  }\n\n  a {\n    color: ",";\n    text-decoration: none;\n  }\n\n  button {\n    transition: 0.15s ease-in-out;\n    &:hover {\n      cursor: pointer;\n    }\n  }\n\n  ::-webkit-scrollbar {\n    width: 7px;\n  }\n\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 6px ",";\n  }\n \n  ::-webkit-scrollbar-thumb {\n    background-color: ",";\n    border-radius: 10px;\n  }\n"])),(function(n){return n.theme.colors.appBackground.main}),(function(n){return n.theme.colors.text.primary}),(function(n){return n.theme.colors.text.primary}),(function(n){return n.theme.colors.shadow.primary}),(function(n){return n.theme.colors.scrollbar})),O=u.c.nav(x||(x=Object(m.a)(["\n  background-color: ",";\n  text-align: center;\n  padding: 1rem;\n  box-shadow: 0px 0px 5px 2px ",";\n\n  @media only screen and (max-height: 600px) {\n    display: none;\n  }\n"])),(function(n){return n.theme.colors.nav}),(function(n){return n.theme.colors.shadow.primary})),g=u.c.button(j||(j=Object(m.a)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  height: 35px;\n  width: 35px;\n  font-size: 20px;\n  text-align: center;\n  border-radius: 50%;\n  border: 0;\n  padding: 5px;\n  background-color: ",";\n"])),(function(n){return n.theme.colors.button.primary})),v=function(){var n=function(){var n=o.a.useContext(b);if(!n)throw new Error("ThemeProvider consumer must be in a ThemeProvider");return n}(),t=Object(a.a)(n,2),e=t[0],r=t[1];return Object(p.jsxs)(O,{children:[Object(p.jsx)("strong",{children:"React Calculator App"}),Object(p.jsx)(g,{onClick:function(){return r("dark"===e?"light":"dark")},children:"dark"===e?"\u2600\ufe0f":"\ud83c\udf19"})]})},k=e(33),w=function(){return!!/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(navigator.userAgent)},C=o.a.createContext();C.displayName="IsMobileContext";var I,E=function(n){var t=n.children,e=o.a.useMemo(w,[]);return Object(p.jsx)(C.Provider,{value:e,children:t})},A=function(){var n=o.a.useContext(C);if(null===n)throw new Error("IsMobileProvider consumer must be in a IsMobileProvider");return n},M=function(n){var t=n.children,e=n.id,r=Object(u.d)(),o=A();return Object(p.jsx)(k.a,{id:e||t,place:"bottom",effect:"solid",arrowColor:"transparent",backgroundColor:r.colors.tooltip,textColor:r.colors.text.tooltip,offset:{top:7},globalEventOff:o?"click":void 0,children:t})},S=u.c.button(I||(I=Object(m.a)(["\n  background-color: ",";\n  color: ",";\n  border: 1px solid ",";\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: 0px 0px 5px 0px\n    ",";\n  grid-column: ",";\n  font-size: inherit;\n\n  &:hover {\n    background-color: ",";\n  }\n\n  &:active {\n    background-color: ",";\n  }\n\n  @media only screen and (max-width: 600px) {\n    transition: 0s;\n  } ;\n"])),(function(n){var t=n.theme,e=n.type;return t.colors.button[e||"primary"]}),(function(n){var t=n.theme,e=n.type;return t.colors.button.text[e||"primary"]}),(function(n){return n.theme.colors.border.primary}),(function(n){var t=n.theme;return n.disabled?"null":t.colors.shadow.primary}),(function(n){var t=n.column;return t?t.start+" / span "+t.end:0}),(function(n){var t=n.theme,e=n.type;return t.colors.button.hover[e||"primary"]}),(function(n){var t=n.theme,e=n.type;return t.colors.button.active[e||"primary"]})),H=function(n){var t=A(),e=o.a.useMemo((function(){return n.tooltip?t?n.tooltip:"".concat(n.tooltip," [").concat(n.shortcut,"]"):null}),[t,n.shortcut,n.tooltip]);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(S,Object(l.a)(Object(l.a)({},n),n.tooltip?{"data-tip":!0,"data-for":e}:null)),n.tooltip&&Object(p.jsx)(M,{children:e})]})},B=Object(r.memo)(H),D={changeInput:"change_input",incrementInput:"increment_input",decrementInput:"decrement_input",incrementInputWithParentheses:"increment_input_with_parentheses",resolveCalculation:"add_calculation",undoAction:"undo_action",redoAction:"redo_action",setError:"set_error",clearInput:"clear_input"},_=e(7);var P=function(n,t){switch(t.type){case D.changeInput:return Object(l.a)(Object(l.a)({},n),{},{input:t.payload.input,inputHistory:[].concat(Object(_.a)(n.inputHistory.slice(0,n.actionIndex+1)),[t.payload.input]),actionIndex:n.actionIndex+1,error:""});case D.incrementInput:var e=n.input+t.payload.char;return Object(l.a)(Object(l.a)({},n),{},{input:e,inputHistory:[].concat(Object(_.a)(n.inputHistory.slice(0,n.actionIndex+1)),[e]),actionIndex:n.actionIndex+1,error:""});case D.decrementInput:var r=Array.isArray(n.input)?n.input[0].slice(0,-1):n.input.slice(0,-1);return Object(l.a)(Object(l.a)({},n),{},{input:r,inputHistory:[].concat(Object(_.a)(n.inputHistory.slice(0,n.actionIndex+1)),[r]),actionIndex:n.actionIndex+1,error:""});case D.resolveCalculation:return Object(l.a)(Object(l.a)({},n),{},{input:[t.payload.result],results:[].concat(Object(_.a)(n.results),[[n.input,t.payload.result,Math.random().toString(),Math.random().toString()]]),inputHistory:[].concat(Object(_.a)(n.inputHistory.slice(0,n.actionIndex+1)),[[t.payload.result]]),actionIndex:n.actionIndex+1});case D.undoAction:return Object(l.a)(Object(l.a)({},n),{},{input:n.inputHistory[n.actionIndex-1],actionIndex:n.actionIndex-1,error:""});case D.redoAction:return Object(l.a)(Object(l.a)({},n),{},{input:n.inputHistory[n.actionIndex+1],actionIndex:n.actionIndex+1,error:""});case D.setError:return Object(l.a)(Object(l.a)({},n),{},{error:t.payload.error});case D.clearInput:return Object(l.a)(Object(l.a)({},n),{},{input:"",inputHistory:[].concat(Object(_.a)(n.inputHistory.slice(0,n.actionIndex+1)),[""]),actionIndex:n.actionIndex+1,error:""});default:throw new Error("unknown action of type"+t.type)}},N=o.a.createContext();N.displayName="CalculatorContext";var z=N,R=function(n){var t=n.children,e=o.a.useReducer(P,{input:"",error:"",results:[],inputHistory:[""],actionIndex:0}),r=Object(a.a)(e,2),c=r[0],i=r[1];return Object(p.jsx)(z.Provider,{value:[c,i],children:t})},F=function(){var n=o.a.useContext(z);if(!n)throw new Error("CalculatorProvider consumer must be in a CalculatorProvider");return n},K=e(61);var q,L,T,G,J,W,U,V,Z,Q,X,Y,$,nn,tn,en={"\u221a":"sqrt","\xb2":"^2","\xd7":"*","\xf7":"/"},rn=function(n,t){var e=n.input,r=n.results;if(e){if(Array.isArray(e))return t({type:D.undoAction});if(r.length&&r[r.length-1][0]===e)return t({type:D.changeInput,payload:{input:[r[r.length-1][1]]}});try{var o=function(n){var t=n.replace(/\u221a|\xb2|\xd7|\xf7/gi,(function(n){return en[n]})),e=Object(K.a)(t);return e%1!==0?e.toFixed(4):e}(e).toString();if("Infinity"===o)return t({type:D.setError,payload:{error:"Overflow: result couldn't be calculated"}}),t({type:D.resolveCalculation,payload:{result:"0"}});t({type:D.resolveCalculation,payload:{result:o}})}catch(c){t({type:D.setError,payload:{error:"Syntax Error"}})}}},on=function(n,t){0!==n.actionIndex?t({type:D.undoAction}):t({type:D.setError,payload:{error:"No undo history"}})},cn=function(n,t){var e=n.input,r=n.char,o=Array.isArray(e);if(!o){var c=e.slice(-1);if(c===r&&"."===r)return;if(c===r&&"\xd7"===r)return t({type:D.changeInput,payload:{input:e.slice(0,-1)+"^"}})}o&&!isNaN(r)?t({type:D.changeInput,payload:{input:r}}):t({type:D.incrementInput,payload:{char:r}})},an=function(n,t){var e=n.input,r=e.slice(-2);if(".."!==r)return"\xd7\xd7"===r?t({type:D.changeInput,payload:{input:e.slice(0,-1)+"^"}}):void t({type:D.changeInput,payload:{input:e}})},un=u.c.div(q||(q=Object(m.a)(["\n  display: grid;\n  grid-template-columns: repeat(6, auto);\n  grid-template-rows: repeat(4, minmax(37px, 50px));\n  grid-gap: 5px;\n  resize: vertical;\n  overflow: auto;\n  max-height: 215px;\n  min-height: 163px;\n\n  @media only screen and (max-height: 600px) {\n    grid-template-rows: repeat(4, minmax(37px, 40px));\n    max-height: 175px;\n    height: 175px;\n  }\n"]))),ln=u.c.label(L||(L=Object(m.a)(["\n  font-size: 110%;\n"]))),sn=function(){var n=F(),t=Object(a.a)(n,2),e=t[0],r=t[1],o=function(n){cn({input:e.input,char:n},r)};return Object(p.jsxs)(un,{children:[Object(p.jsx)(B,{onClick:function(){return o("7")},children:"7"}),Object(p.jsx)(B,{onClick:function(){return o("8")},children:"8"}),Object(p.jsx)(B,{onClick:function(){return o("9")},children:"9"}),Object(p.jsx)(B,{onClick:function(){return o("\xf7")},tooltip:"Divide",shortcut:"/",children:"\xf7"}),Object(p.jsx)(B,{onClick:function(){return on(e,r)},tooltip:"Undo",shortcut:"Ctrl+Z",children:Object(p.jsx)(ln,{children:"\u238c"})}),Object(p.jsx)(B,{onClick:function(){return r({type:D.clearInput})},tooltip:"Clear Display",shortcut:"Escape",children:"C"}),Object(p.jsx)(B,{onClick:function(){return o("4")},children:"4"}),Object(p.jsx)(B,{onClick:function(){return o("5")},children:"5"}),Object(p.jsx)(B,{onClick:function(){return o("6")},children:"6"}),Object(p.jsx)(B,{onClick:function(){return o("\xd7")},tooltip:"Multiply",shortcut:"*",children:"\xd7"}),Object(p.jsx)(B,{onClick:function(){return o("(")},tooltip:"Start Group",shortcut:"(",children:"("}),Object(p.jsx)(B,{onClick:function(){return o(")")},tooltip:"End Group",shortcut:")",children:")"}),Object(p.jsx)(B,{onClick:function(){return o("1")},children:"1"}),Object(p.jsx)(B,{onClick:function(){return o("2")},children:"2"}),Object(p.jsx)(B,{onClick:function(){return o("3")},children:"3"}),Object(p.jsx)(B,{onClick:function(){return o("-")},tooltip:"Subtract",shortcut:"-",children:"-"}),Object(p.jsx)(B,{onClick:function(){return o("\xb2")},tooltip:"Square",shortcut:"Ctrl+2",children:Object(p.jsxs)("i",{children:["x",Object(p.jsx)("sup",{children:"2"})]})}),Object(p.jsx)(B,{onClick:function(){return o("\u221a(")},tooltip:"Square root",shortcut:"Ctrl+R",children:"\u221a"}),Object(p.jsx)(B,{onClick:function(){return o("0")},children:"0"}),Object(p.jsx)(B,{onClick:function(){return o(".")},children:"."}),Object(p.jsx)(B,{onClick:function(){return o("%")},tooltip:"Percentage",shortcut:"%",children:"%"}),Object(p.jsx)(B,{onClick:function(){return o("+")},tooltip:"Add",shortcut:"+",children:"+"}),Object(p.jsx)(B,{onClick:function(){return rn(e,r)},column:{start:5,end:2},type:"success",tooltip:"Calculate Result",shortcut:"Enter",children:"="})]})},dn=u.c.div(T||(T=Object(m.a)(["\n  background-color: ",";\n  margin-bottom: 0.5rem;\n  min-height: 4rem;\n  border-top: 1px solid ",";\n  display: flex;\n  align-items: flex-start;\n  align-content: flex-start;\n  padding: 10px;\n  flex-direction: column;\n  justify-content: space-between;\n\n  @media only screen and (max-height: 600px) {\n    min-height: 2.6rem;\n  }\n"])),(function(n){return n.theme.colors.appBackground.mid}),(function(n){return n.theme.colors.border.primary})),pn=u.c.form(G||(G=Object(m.a)(["\n  align-self: stretch;\n"]))),bn=u.c.input(J||(J=Object(m.a)(["\n  outline: 0;\n  border: 0;\n  background-color: transparent;\n  color: ",";\n  font-size: 1.5rem;\n  width: 100%;\n  font-weight: ",";\n"])),(function(n){return n.theme.colors.text.primary}),(function(n){return n.bold?"bold":"normal"})),hn=u.c.button(W||(W=Object(m.a)(["\n  display: none;\n  position: absolute;\n"]))),xn=u.c.label(U||(U=Object(m.a)(["\n  text-align: left;\n  @media only screen and (max-height: 600px) {\n    font-size: 90%;\n  }\n"]))),jn=function(){var n=F(),t=Object(a.a)(n,2),e=t[0],r=t[1],c=o.a.useRef(),i=A();o.a.useLayoutEffect((function(){i&&(c.current.scrollLeft=c.current.scrollWidth)}),[i,e.input]);var u=Array.isArray(e.input);return Object(p.jsxs)(dn,{children:[Object(p.jsxs)(pn,{onSubmit:function(n){n.preventDefault(),rn(e,r)},spellCheck:!1,children:[Object(p.jsx)(bn,{ref:c,type:"text",autoFocus:!0,readOnly:i,onBlur:i?null:function(){return c.current.focus()},value:u?e.input[0]:e.input,onChange:function(n){var t,e=n.target.value;return t=e,void an({input:u&&!isNaN(t)?t.slice(-1):t},r)},bold:u}),Object(p.jsx)(hn,{type:"submit"})]}),e.error&&Object(p.jsx)(xn,{children:e.error})]})},fn=u.c.label(V||(V=Object(m.a)(["\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n"]))),mn=function(n){var t=n.children,e=n.isAdd,r=n.id,o=F(),c=Object(a.a)(o,2),i=c[0],u=c[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(fn,{"data-tip":!0,"data-for":r,onClick:function(){return e?cn({input:i.input,char:t},u):an({input:t},u)},children:t}),Object(p.jsx)(M,{id:r,children:t})]})},yn=o.a.memo(mn),On=u.c.div(Z||(Z=Object(m.a)(["\n  background-color: ",";\n  display: flex;\n  flex-grow: 0;\n  border-top: 1px solid ",";\n  padding: 5px 20px;\n  justify-content: space-between;\n"])),(function(n){return n.theme.colors.appBackground.darkMid}),(function(n){return n.theme.colors.border.mid})),gn=u.c.label(Q||(Q=Object(m.a)(["\n  color: ",";\n  margin-left: 10vw;\n  margin-right: 5vw;\n"])),(function(n){return n.theme.colors.text.secondary})),vn=function(n){var t=n.input,e=n.result,r=n.ids;return Object(p.jsxs)(On,{children:[Object(p.jsx)(yn,{id:r[0],children:t}),Object(p.jsx)(gn,{children:"="}),Object(p.jsx)(yn,{id:r[1],isAdd:!0,children:e})]})},kn=o.a.memo(vn),wn=u.c.div(X||(X=Object(m.a)(["\n  background-color: ",";\n  overflow-y: auto;\n  display: flex;\n  flex-flow: column nowrap;\n  height: 30vh;\n\n  & > :first-child {\n    margin-top: auto;\n  }\n\n  @media only screen and (max-width: 600px),\n    only screen and (max-height: 700px) {\n    flex-grow: 1;\n  }\n"])),(function(n){return n.theme.colors.appBackground.darkMid})),Cn=function(){var n=F(),t=Object(a.a)(n,1)[0].results,e=o.a.useRef();return o.a.useLayoutEffect((function(){e.current.scrollIntoView()}),[t]),Object(p.jsxs)(wn,{children:[t.map((function(n){var t=Object(a.a)(n,4),e=t[0],r=t[1],o=t[2],c=t[3];return Object(p.jsx)(kn,{ids:[o,c],input:e,result:r},o)})),Object(p.jsx)("div",{ref:e})]})},In=function(n){var t=n.children,e=F(),r=Object(a.a)(e,2),c=r[0],i=r[1],u=o.a.useCallback((function(n){cn({input:c.input,char:n},i)}),[c,i]);return o.a.useEffect((function(){window.onkeydown=function(n){if(8===n.keyCode){if(!Array.isArray(c.input))return;n.preventDefault(),i({type:D.decrementInput})}13===n.keyCode?(n.preventDefault(),rn(c,i)):27===n.keyCode?(n.preventDefault(),i({type:D.clearInput})):191===n.keyCode?(n.preventDefault(),u("\xf7")):n.ctrlKey&&n.shiftKey?90===n.keyCode&&(n.preventDefault(),function(n,t){n.actionIndex!==n.inputHistory.length-1?t({type:D.redoAction}):t({type:D.setError,payload:{error:"No redo history"}})}(c,i)):n.ctrlKey?(90===n.keyCode&&(n.preventDefault(),on(c,i)),98===n.keyCode&&(n.preventDefault(),u("\xb2")),82===n.keyCode&&(n.preventDefault(),u("\u221a("))):n.shiftKey&&56===n.keyCode&&(n.preventDefault(),u("\xd7"))}}),[c,i,u]),o.a.useEffect((function(){return function(){window.onkeydown=void 0}}),[]),t},En=e(21),An=e(22),Mn=e(36),Sn=e(35),Hn=e.p+"static/media/calcErr.ccb825a4.svg",Bn=u.c.img.attrs({src:Hn,alt:"calculator with an error"})(Y||(Y=Object(m.a)(["\n  width: 200px;\n  height: 200px;\n  box-shadow: 0px 0px 10px 2px ",";\n"])),(function(n){return n.theme.colors.shadow.primary})),Dn=u.c.div($||($=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  & > :nth-child(2) {\n    margin: 15px 0;\n  }\n"]))),_n=function(n){Object(Mn.a)(e,n);var t=Object(Sn.a)(e);function e(n){var r;return Object(En.a)(this,e),(r=t.call(this,n)).state={hasError:!1},r}return Object(An.a)(e,[{key:"render",value:function(){var n=this;return this.state.hasError?Object(p.jsxs)(Dn,{children:[Object(p.jsx)(Bn,{}),Object(p.jsx)("label",{children:"Aw snap! you broke the calculator!"}),Object(p.jsx)(B,{onClick:function(){return n.setState({hasError:!1})},type:"secondary",children:"Reload"})]}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(n){return{hasError:!0}}}]),e}(o.a.Component),Pn=u.c.div(nn||(nn=Object(m.a)(["\n  background-color: ",";\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  justify-content: center;\n  text-align: center;\n  z-index: 10;\n  margin: 30px 0;\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: 0px 0px 7px 1px\n    ",";\n  font-size: 1.2rem;\n  max-width: 90vw;\n\n  @media only screen and (max-width: 600px),\n    only screen and (max-height: 600px) {\n    margin: 0;\n    padding: 0;\n    background-color: ",";\n    box-shadow: none;\n    max-width: 98vw;\n  }\n"])),(function(n){return n.theme.colors.appBackground.dark}),(function(n){var t=n.theme;return n.disabled?"null":t.colors.shadow.primary}),(function(n){return n.theme.colors.appBackground.main})),Nn=function(){return Object(p.jsx)(Pn,{children:Object(p.jsx)(_n,{children:Object(p.jsx)(R,{children:Object(p.jsxs)(In,{children:[Object(p.jsx)(Cn,{}),Object(p.jsx)(jn,{}),Object(p.jsx)(sn,{})]})})})})},zn=u.c.footer(tn||(tn=Object(m.a)(["\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 20px;\n  text-align: center;\n  padding-bottom: 5px;\n\n  @media only screen and (max-height: 600px) {\n    display: none;\n  }\n"]))),Rn=function(){return Object(p.jsx)(zn,{children:"Made with \u2764\ufe0f by BlueForced"})};var Fn=function(){return Object(p.jsx)(E,{children:Object(p.jsxs)(f,{children:[Object(p.jsx)(y,{}),Object(p.jsx)(v,{}),Object(p.jsx)("main",{children:Object(p.jsx)(Nn,{})}),Object(p.jsx)(Rn,{})]})})};i.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(Fn,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.9dbce000.chunk.js.map