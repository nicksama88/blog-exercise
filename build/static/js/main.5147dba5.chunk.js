(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{17:function(e,t,n){e.exports=n(40)},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(15),c=n.n(u),o=n(16),l=n(1),i=n.n(l),s=n(4),m=n(2),p=function(e){var t=e.blog,n=e.addLike,u=e.removeBlog,c=e.currentUser,o=Object(a.useState)(!0),l=Object(m.a)(o,2),i=l[0],s=l[1],p=Object(a.useState)(t.likes),d=Object(m.a)(p,2),f=d[0],b=d[1],v={display:i?"none":""};return r.a.createElement("div",{style:{paddingTop:10,paddingLeft:2,paddingBottom:10,border:"solid",borderWidth:1,marginBottom:5}},r.a.createElement("div",null,t.title,", by ",t.author,r.a.createElement("button",{onClick:function(){s(!i)}},i?"show details":"hide details")),r.a.createElement("div",{style:v},r.a.createElement("ul",{style:{listStyleType:"none"}},r.a.createElement("li",null,t.url),r.a.createElement("li",null,"likes ",t.likes,r.a.createElement("button",{onClick:function(){var e={title:t.title,author:t.author,url:t.url,likes:f+1};n(e,t.id),b(f+1)}},"like")),r.a.createElement("li",null,"saved by ",t.user.name?t.user.name:t.user.username)),r.a.createElement("button",{onClick:function(){window.confirm("Do you really want to delete ".concat(t.title,", by ").concat(t.author,"?"))&&u(t)},style:{display:c.username===t.user.username?"":"none"}},"remove")))},d=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"error"},t)},f=function(e){var t=e.handleLogin,n=Object(a.useState)(""),u=Object(m.a)(n,2),c=u[0],o=u[1],l=Object(a.useState)(""),i=Object(m.a)(l,2),s=i[0],p=i[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(c,s),o(""),p("")}},r.a.createElement("h2",null,"log in to application"),r.a.createElement("div",null,"username",r.a.createElement("input",{type:"text",value:c,name:"Username",onChange:function(e){return o(e.target.value)}})),r.a.createElement("div",null,"password",r.a.createElement("input",{type:"password",value:s,name:"Password",onChange:function(e){return p(e.target.value)}})),r.a.createElement("button",{type:"submit"},"login"))},b=function(e){var t=e.createBlog,n=Object(a.useState)(""),u=Object(m.a)(n,2),c=u[0],o=u[1],l=Object(a.useState)(""),i=Object(m.a)(l,2),s=i[0],p=i[1],d=Object(a.useState)(""),f=Object(m.a)(d,2),b=f[0],v=f[1];return r.a.createElement("div",null,r.a.createElement("h2",null,"Create new entry"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({title:""===c?void 0:c,author:""===s?void 0:s,url:""===b?void 0:b}),o(""),p(""),v("")}},r.a.createElement("div",null,"title:",r.a.createElement("input",{type:"text",value:c,name:"Title",onChange:function(e){return o(e.target.value)}})),r.a.createElement("div",null,"author:",r.a.createElement("input",{type:"text",value:s,name:"Author",onChange:function(e){return p(e.target.value)}})),r.a.createElement("div",null,"url:",r.a.createElement("input",{type:"url",value:b,name:"Url",onChange:function(e){return v(e.target.value)}})),r.a.createElement("button",{type:"submit"},"create entry")))},v=Object(a.forwardRef)((function(e,t){var n=Object(a.useState)(!1),u=Object(m.a)(n,2),c=u[0],o=u[1],l={display:c?"none":""},i={display:c?"":"none"},s=function(){o(!c)};return Object(a.useImperativeHandle)(t,(function(){return{toggleVisibility:s}})),r.a.createElement("div",{style:{paddingBottom:10}},r.a.createElement("div",{style:l},r.a.createElement("button",{onClick:s},e.buttonLabel)),r.a.createElement("div",{style:i},e.children,r.a.createElement("button",{onClick:s},"cancel")))})),g=n(5),h=n.n(g),E=null,y={getAll:function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/api/blogs");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),setToken:function(e){E="bearer ".concat(e)},create:function(){var e=Object(s.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:E}},e.next=3,h.a.post("/api/blogs",t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addLike:function(){var e=Object(s.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.put("".concat("/api/blogs","/").concat(n),t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(s.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:E}},e.next=3,h.a.delete("".concat("/api/blogs","/").concat(t.id),n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k={login:function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],u=t[1],c=Object(a.useState)(null),l=Object(m.a)(c,2),g=l[0],h=l[1],E=Object(a.useState)(""),w=Object(m.a)(E,2),O=w[0],j=w[1];Object(a.useEffect)((function(){y.getAll().then((function(e){return u(e)}))}),[]),Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedBlogappUser");if(e){var t=JSON.parse(e);h(t),y.setToken(t.token)}}),[]);var x=function(){var e=Object(s.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.login({username:t,password:n});case 3:a=e.sent,window.localStorage.setItem("loggedBlogappUser",JSON.stringify(a)),y.setToken(a.token),h(a),j("".concat(a.name?a.name:a.username," successfully logged in")),setTimeout((function(){j(null)}),5e3),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),j("Wrong credentials"),setTimeout((function(){j(null)}),5e3);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}(),S=function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return B.current.toggleVisibility(),e.prev=1,e.next=4,y.create(t);case 4:a=e.sent,u(n.concat(a)),j("A new blog ".concat(a.title," by ").concat(a.author," added")),setTimeout((function(){j(null)}),5e3),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),j("error in adding new blog"),setTimeout((function(){j(null)}),5e3);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(s.a)(i.a.mark((function e(t,a){var r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.addLike(t,a);case 3:r=n.findIndex((function(e){return e.id===a})),(c=Object(o.a)(n))[r].likes+=1,u(c),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),j("error in updating like"),setTimeout((function(){j(null)}),5e3);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),C=function(){var e=Object(s.a)(i.a.mark((function e(t){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.remove(t);case 3:a=n.findIndex((function(e){return e.id===t.id})),r=n.slice(0,a).concat(n.slice(a+1,n.length)),u(r),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),g.username!==t.user.username?j("blog can only be deleted by user who saved it"):j("error in removing blog"),setTimeout((function(){j(null)}),5e3);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),B=Object(a.useRef)();return r.a.createElement("div",null,r.a.createElement(d,{message:O}),r.a.createElement("div",null,!g&&r.a.createElement(f,{handleLogin:x}),g&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"blogs"),r.a.createElement("p",null,g.name?g.name:g.username," logged-in",r.a.createElement("button",{onClick:function(e){window.localStorage.removeItem("loggedBlogappUser");var t=g.name?g.name:g.username;h(null),j("".concat(t," logged out")),setTimeout((function(){j(null)}),5e3)}},"logout")),r.a.createElement(v,{buttonLabel:"create new blog entry",ref:B},r.a.createElement(b,{createBlog:S})),n.sort((function(e,t){return t.likes-e.likes})).map((function(e){return r.a.createElement(p,{key:e.id,blog:e,addLike:T,removeBlog:C,currentUser:g})})))))};c.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.5147dba5.chunk.js.map