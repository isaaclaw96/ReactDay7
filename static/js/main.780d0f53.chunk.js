(this["webpackJsonpday7-lesson"]=this["webpackJsonpday7-lesson"]||[]).push([[0],{19:function(e,t,n){e.exports={register_section:"register_register_section__1Jj_1",form_section:"register_form_section__P08wE"}},21:function(e,t,n){e.exports={login_section:"login_login_section__3L7j1"}},29:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),a=n(15),c=n.n(a),i=(n(29),n(6)),o=n(7),u=n(12),j=n(10),l=n(1),d=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(l.jsx)("h1",{children:" This is Home Page"})}}]),n}(s.a.Component),b=d,h=n(9),p="REGISTER_USER",O="REGISTER_USER_SUCCESS",f="REGISTER_USER_FAIL",g=n(21),x=n.n(g),_=n(2),m=n(11),v=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={status:!1},r}return Object(o.a)(n,[{key:"loginUser",value:function(){var e=this,t=this._nameInput.value,n=this._passInput.value;console.log(this.props.userData.data),this.props.userData.data.map((function(r){r.name===t&&r.pass===n&&e.setState({status:!0})}))}},{key:"render",value:function(){var e=this;return this.state.status?Object(l.jsx)(_.a,{to:"/homepage"}):Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:x.a.login_section,children:[Object(l.jsx)("h1",{children:"Login"}),Object(l.jsxs)("form",{children:[Object(l.jsx)("h3",{children:"Username"}),Object(l.jsx)("input",{type:"text",placeholder:"Insert Username...",ref:function(t){return e._nameInput=t}}),Object(l.jsx)("h3",{children:"Password"}),Object(l.jsx)("input",{type:"password",placeholder:"Insert Password...",ref:function(t){return e._passInput=t}})]}),Object(l.jsx)("button",{onClick:function(){return e.loginUser()},children:"Submit"}),Object(l.jsx)(m.b,{to:"/register",children:"Sign Up!"})]})})}}]),n}(s.a.Component),y={loginUser:function(e){return{type:"LOGIN_USER",payload:e}}},U=Object(h.b)((function(e){return{userData:e.user}}),y)(v),S=n(19),I=n.n(S),E=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"addUser",value:function(){var e=this._inputVal.value,t=this._inputPass.value;if(""!==e&&""!==t){var n={name:e,pass:t,key:Date.now()};this.props.registerUser(n)}this._inputVal.value="",this._inputPass.value=""}},{key:"render",value:function(){var e=this;return Object(l.jsxs)("div",{className:I.a.register_section,children:[Object(l.jsx)("h1",{children:"Register"}),Object(l.jsxs)("div",{className:I.a.form_section,children:[Object(l.jsx)("h3",{children:"Username"}),Object(l.jsx)("input",{type:"text",placeholder:"Insert Username",ref:function(t){return e._inputVal=t}}),Object(l.jsx)("h3",{children:"Password"}),Object(l.jsx)("input",{type:"password",placeholder:"Insert Password",ref:function(t){return e._inputPass=t}}),Object(l.jsxs)(m.b,{to:"/",children:[Object(l.jsx)("button",{onClick:function(){return e.addUser()},children:"Sign Up!"})," "]})]})]})}}]),n}(s.a.Component),k={registerUser:function(e){return function(t){try{t({type:p}),setTimeout((function(){t({type:O,payload:e})}),2e3)}catch(n){t({type:f,error:n})}}}},w=Object(h.b)((function(e){return{userData:e.user}}),k)(E);var R=function(){return Object(l.jsx)(m.a,{basename:"/ReactDay7",children:Object(l.jsxs)(_.d,{children:[Object(l.jsx)(_.b,{path:"/",element:Object(l.jsx)(U,{})}),Object(l.jsx)(_.b,{path:"/register",element:Object(l.jsx)(w,{})}),Object(l.jsx)(_.b,{path:"/homepage",element:Object(l.jsx)(b,{})})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),s(e),a(e),c(e)}))},P=n(22),L=n(24),D=n(5),T=n(23),F=n.n(T),G=n(3),N=n(16),J={isLoading:!1,data:[],error:null},V=function(e,t){switch(t.type){case p:return{isLoading:!0,data:Object(N.a)(e.data),error:null};case O:return{isLoading:!1,data:[].concat(Object(N.a)(e.data),[t.payload]),error:null};case f:return{isLoading:!1,data:Object(N.a)(e.data),error:t.error};default:return J}},A=Object(G.b)({user:V}),B={key:"root",version:1,storage:F.a},z=Object(D.g)(B,A),H=Object(L.a)({reducer:z,middleware:function(e){return e({serializableCheck:{ignoredActions:[D.a,D.f,D.b,D.c,D.d,D.e]}})}}),M=Object(D.h)(H);c.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(h.a,{store:H,children:Object(l.jsx)(P.a,{loading:null,persistor:M,children:Object(l.jsx)(R,{})})})}),document.getElementById("root")),C()}},[[39,1,2]]]);
//# sourceMappingURL=main.780d0f53.chunk.js.map