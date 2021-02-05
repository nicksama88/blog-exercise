(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{17:function(e,t,n){e.exports=n(41)},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),c=n.n(o),l=n(16),u=n(1),i=n.n(u),s=n(4),p=n(2),m=function(e){var t=e.blog,n=e.addLike,o=e.removeBlog,c=e.currentUser,l=Object(a.useState)(!0),u=Object(p.a)(l,2),i=u[0],s=u[1],m=Object(a.useState)(t.likes),d=Object(p.a)(m,2),f=d[0],b=d[1],v={display:i?"none":""};return r.a.createElement("div",{style:{paddingTop:10,paddingLeft:2,paddingBottom:10,border:"solid",borderWidth:1,marginBottom:5}},r.a.createElement("div",null,t.title,", by ",t.author,r.a.createElement("button",{onClick:function(){s(!i)}},i?"show details":"hide details")),r.a.createElement("div",{style:v},r.a.createElement("ul",{style:{listStyleType:"none"}},r.a.createElement("li",null,t.url),r.a.createElement("li",null,"likes ",t.likes,r.a.createElement("button",{onClick:function(){var e={title:t.title,author:t.author,url:t.url,likes:f+1};n(e,t.id),b(f+1)}},"like")),r.a.createElement("li",null,"saved by ",t.user.name?t.user.name:t.user.username)),r.a.createElement("button",{onClick:function(){window.confirm("Do you really want to delete ".concat(t.title,", by ").concat(t.author,"?"))&&o(t)},style:{display:c.username===t.user.username?"":"none"}},"remove")))},d=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"notification"},t)},f=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"error"},t)},b=function(e){var t=e.handleLogin,n=Object(a.useState)(""),o=Object(p.a)(n,2),c=o[0],l=o[1],u=Object(a.useState)(""),i=Object(p.a)(u,2),s=i[0],m=i[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(c,s),l(""),m("")}},r.a.createElement("h2",null,"log in to blog application"),r.a.createElement("div",null,"username",r.a.createElement("input",{type:"text",value:c,name:"Username",onChange:function(e){return l(e.target.value)}})),r.a.createElement("div",null,"password",r.a.createElement("input",{type:"password",value:s,name:"Password",onChange:function(e){return m(e.target.value)}})),r.a.createElement("button",{type:"submit"},"login"),r.a.createElement("div",null,"Feel free to login with the following credentials:",r.a.createElement("ul",null,r.a.createElement("li",null,"Username: guest"),r.a.createElement("li",null,"Password: gimmieblogs")),"Also, please don't save anything too weird while you are here!"))},v=function(e){var t=e.createBlog,n=Object(a.useState)(""),o=Object(p.a)(n,2),c=o[0],l=o[1],u=Object(a.useState)(""),i=Object(p.a)(u,2),s=i[0],m=i[1],d=Object(a.useState)(""),f=Object(p.a)(d,2),b=f[0],v=f[1];return r.a.createElement("div",null,r.a.createElement("h2",null,"Create new entry"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({title:""===c?void 0:c,author:""===s?void 0:s,url:""===b?void 0:b}),l(""),m(""),v("")}},r.a.createElement("div",null,"title:",r.a.createElement("input",{type:"text",value:c,name:"Title",onChange:function(e){return l(e.target.value)}})),r.a.createElement("div",null,"author:",r.a.createElement("input",{type:"text",value:s,name:"Author",onChange:function(e){return m(e.target.value)}})),r.a.createElement("div",null,"url:",r.a.createElement("input",{type:"url",value:b,name:"Url",onChange:function(e){return v(e.target.value)}})),r.a.createElement("button",{type:"submit"},"create entry")))},g=Object(a.forwardRef)((function(e,t){var n=Object(a.useState)(!1),o=Object(p.a)(n,2),c=o[0],l=o[1],u={display:c?"none":""},i={display:c?"":"none"},s=function(){l(!c)};return Object(a.useImperativeHandle)(t,(function(){return{toggleVisibility:s}})),r.a.createElement("div",{style:{paddingBottom:10}},r.a.createElement("div",{style:u},r.a.createElement("button",{onClick:s},e.buttonLabel)),r.a.createElement("div",{style:i},e.children,r.a.createElement("button",{onClick:s},"cancel")))})),h=n(5),y=n.n(h),E=null,w={getAll:function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/api/blogs");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),setToken:function(e){E="bearer ".concat(e)},create:function(){var e=Object(s.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:E}},e.next=3,y.a.post("/api/blogs",t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addLike:function(){var e=Object(s.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.put("".concat("/api/blogs","/").concat(n),t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(s.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:E}},e.next=3,y.a.delete("".concat("/api/blogs","/").concat(t.id),n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O={login:function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.post("api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(null),u=Object(p.a)(c,2),h=u[0],y=u[1],E=Object(a.useState)(null),j=Object(p.a)(E,2),k=j[0],x=j[1],S=Object(a.useState)(null),C=Object(p.a)(S,2),B=C[0],L=C[1];Object(a.useEffect)((function(){w.getAll().then((function(e){return o(e)}))}),[]),Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedBlogappUser");if(e){var t=JSON.parse(e);y(t),w.setToken(t.token)}}),[]);var T=function(e){var t=e.text,n=void 0===t?"":t,a=e.type;"notification"===a?(x(n),setTimeout((function(){x(null)}),5e3)):"error"===a&&(L(n),setTimeout((function(){L(null)}),5e3))},U=function(){var e=Object(s.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.login({username:t,password:n});case 3:a=e.sent,window.localStorage.setItem("loggedBlogappUser",JSON.stringify(a)),w.setToken(a.token),y(a),T({text:"".concat(a.name?a.name:a.username," successfully logged in"),type:"notification"}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),T({text:e.t0.response.data.error,type:"error"}),console.log(e.t0.response.data.error);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}(),A=function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N.current.toggleVisibility(),e.prev=1,e.next=4,w.create(t);case 4:a=e.sent,o(n.concat(a)),T({text:"A new blog ".concat(a.title," by ").concat(a.author," added"),type:"notification"}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),T({text:e.t0.response.data.error,type:"error"}),console.log(e.t0.response.data.error);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(s.a)(i.a.mark((function e(t,a){var r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.addLike(t,a);case 3:r=n.findIndex((function(e){return e.id===a})),(c=Object(l.a)(n))[r].likes+=1,o(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),T({text:e.t0.response.data.error,type:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),J=function(){var e=Object(s.a)(i.a.mark((function e(t){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.remove(t);case 3:a=n.findIndex((function(e){return e.id===t.id})),r=n.slice(0,a).concat(n.slice(a+1,n.length)),o(r),T({text:"blog deleted",type:"notification"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),h.username!==t.user.username?T({text:"blog can only be deleted by user who saved it",type:"error"}):T({text:e.t0.response.data.error,type:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),N=Object(a.useRef)();return r.a.createElement("div",null,r.a.createElement(d,{message:k}),r.a.createElement(f,{message:B}),r.a.createElement("div",null,!h&&r.a.createElement(b,{handleLogin:U}),h&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"blogs"),r.a.createElement("p",null,h.name?h.name:h.username," logged-in",r.a.createElement("button",{onClick:function(e){window.localStorage.removeItem("loggedBlogappUser");var t=h.name?h.name:h.username;y(null),T({text:"".concat(t," logged out"),type:"notification"})}},"logout")),r.a.createElement(g,{buttonLabel:"create new blog entry",ref:N},r.a.createElement(v,{createBlog:A})),n.sort((function(e,t){return t.likes-e.likes})).map((function(e){return r.a.createElement(m,{key:e.id,blog:e,addLike:I,removeBlog:J,currentUser:h})})))))};n(40);c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.5aa8fe84.chunk.js.map