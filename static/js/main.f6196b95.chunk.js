(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{16:function(e,t,n){e.exports=n(25)},25:function(e,t,n){"use strict";n.r(t);var l=n(0),a=n.n(l),r=n(10),c=n.n(r),u=n(1),m=Object(l.createContext)(),E=function(e){var t=e.children,n=Object(l.useState)(""),r=Object(u.a)(n,2),c=r[0],E=r[1],o=Object(l.useState)(""),s=Object(u.a)(o,2),i=s[0],p=s[1];return a.a.createElement(m.Provider,{value:{posts:c,setPosts:E,comments:i,setComments:p}},t)},o=(n(9),n(4)),s=n.n(o),i=n(5),p=n(2),f=n(3);function b(){var e=Object(p.a)(["\n    margin-left: 3%;\n"]);return b=function(){return e},e}function d(){var e=Object(p.a)(["\n    margin-left: 1%;\n"]);return d=function(){return e},e}function v(){var e=Object(p.a)(["\n    color: #8f8f8f;\n"]);return v=function(){return e},e}function h(){var e=Object(p.a)(["\n    color: #bf66f2;\n"]);return h=function(){return e},e}function j(){var e=Object(p.a)(["\n    color: #65cf9f;\n"]);return j=function(){return e},e}function O(){var e=Object(p.a)(["\n    color: #cf74cf;\n"]);return O=function(){return e},e}function g(){var e=Object(p.a)(["\n    color: #55c5c9;\n"]);return g=function(){return e},e}function w(){var e=Object(p.a)(["\n    color: #e0bf3a;\n"]);return w=function(){return e},e}function x(){var e=Object(p.a)(["\n    color: #e0453a;\n"]);return x=function(){return e},e}function y(){var e=Object(p.a)(["\n    color: #dbac56;\n    font-style: italic;\n"]);return y=function(){return e},e}var k=f.a.span(y()),S=f.a.span(x()),C=f.a.span(w()),_=f.a.span(g()),B=f.a.span(O()),T=f.a.span(j()),q=f.a.span(h()),P=f.a.span(v()),M=f.a.div(d()),Y=f.a.div(b()),D=function(){var e=Object(l.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(l.useState)("relevance"),E=Object(u.a)(c,2),o=E[0],p=E[1],f=Object(l.useState)(5),b=Object(u.a)(f,2),d=b[0],v=b[1],h=Object(l.useContext)(m).setPosts,j=function(){var e=Object(i.a)(s.a.mark((function e(){var t,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.reddit.com/search.json?q=".concat(n.split(" ").join("+"),"&sort=").concat(o,"&limit=").concat(d,"&self:yes"));case 2:return t=e.sent,e.next=5,t.json();case 5:return l=e.sent,e.abrupt("return",l.data.children);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),n)try{j().then((function(e){h(e)}))}catch(t){console.log(t)}else alert("enter search text")}},a.a.createElement(S,null,"let "),a.a.createElement(C,null,"searchTerm "),a.a.createElement(B,null,"= "),a.a.createElement("input",{placeholder:"'enter a search term'",type:"text",value:n,onChange:function(e){return r(e.target.value)}}),a.a.createElement("br",null),a.a.createElement(S,null,"let "),a.a.createElement(C,null,"sortBy "),a.a.createElement(B,null,"= "),a.a.createElement("select",{onChange:function(e){return p(e.target.value)}},a.a.createElement("option",{value:"relevance"},"'relevance'"),a.a.createElement("option",{value:"top"},"'top'"),a.a.createElement("option",{value:"new"},"'new'"),a.a.createElement("option",{value:"comments"},"'comments'")),a.a.createElement("br",null),a.a.createElement(S,null,"let "),a.a.createElement(C,null,"limitTo "),a.a.createElement(B,null,"= "),a.a.createElement("select",{className:"select-num",onChange:function(e){return v(e.target.value)}},a.a.createElement("option",{value:5},"5"),a.a.createElement("option",{value:10},"10"),a.a.createElement("option",{value:25},"25"),a.a.createElement("option",{value:50},"50")),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("button",{type:"submit"},a.a.createElement(_,null,"ExecuteSearch",a.a.createElement(B,null,"("),a.a.createElement(k,null," searchTerm, sortBy, limitTo "),a.a.createElement(B,null,")"))))},N=function(){return a.a.createElement("div",null,a.a.createElement("p",null,a.a.createElement(S,null,"const "),a.a.createElement(C,null,"express "),a.a.createElement(B,null,"= "),a.a.createElement(_,null,"require"),a.a.createElement(B,null,"(",a.a.createElement(T,null,"'express'"),")"),";"),a.a.createElement("p",null,a.a.createElement(S,null,"const "),a.a.createElement(C,null,"app "),a.a.createElement(B,null,"= "),a.a.createElement(_,null,"express",a.a.createElement(B,null,"()")),";"),a.a.createElement("p",null,a.a.createElement(S,null,"const "),a.a.createElement(C,null,"mongoose "),a.a.createElement(B,null,"= "),a.a.createElement(_,null,"require"),a.a.createElement(B,null,"(",a.a.createElement(T,null,"'mongoose'"),")"),";"),a.a.createElement("p",null,a.a.createElement(S,null,"const "),a.a.createElement(C,null,"port "),a.a.createElement(B,null,"= "),a.a.createElement(_,null,"process",a.a.createElement(B,null,"."),"env",a.a.createElement(B,null,"."),"PORT"," ",a.a.createElement(B,null,"|| "),a.a.createElement(q,null,"3000")),";"),a.a.createElement("p",null,a.a.createElement(S,null,"const "),a.a.createElement(C,null,"{"," ExecuteSearch ","}"," "),a.a.createElement(B,null,"= "),a.a.createElement(_,null,"require"),a.a.createElement(B,null,"(",a.a.createElement(T,null,"'./routes/api/search/'"),")"),";"),a.a.createElement("p",null,a.a.createElement(_,null,"require"),a.a.createElement(B,null,"(",a.a.createElement(T,null,"'dotenv'"),")"),a.a.createElement(B,null,".",a.a.createElement(_,null,"config"),"()"),";"),a.a.createElement("br",null),a.a.createElement("p",null,a.a.createElement(_,null,"app"),a.a.createElement(B,null,"."),a.a.createElement(_,null,"use"),a.a.createElement(B,null,"("),a.a.createElement(C,null,"express"),a.a.createElement(B,null,"."),a.a.createElement(S,null,"urlencoded"),a.a.createElement(B,null,"("),"{"," ",a.a.createElement(C,null,"extended"),a.a.createElement(B,null,":")," ",a.a.createElement(T,null,"true")," ","}",a.a.createElement(B,null,"))"),";"),a.a.createElement("p",null,a.a.createElement(_,null,"app"),a.a.createElement(B,null,"."),a.a.createElement(_,null,"use"),a.a.createElement(B,null,"("),a.a.createElement(C,null,"express"),a.a.createElement(B,null,"."),a.a.createElement(_,null,"json"),a.a.createElement(B,null,"())"),";"),a.a.createElement("br",null),a.a.createElement("p",null,a.a.createElement(_,null,"mongoose"),a.a.createElement(B,null,"."),a.a.createElement(C,null,"connect"),a.a.createElement(B,null,"("),a.a.createElement(_,null,"process"),a.a.createElement(B,null,"."),a.a.createElement(_,null,"env"),a.a.createElement(B,null,"."),a.a.createElement(_,null,"DB_LINK"),a.a.createElement(B,null,", ","{"),a.a.createElement(C,null,"useNewUrlParser"),a.a.createElement(B,null,":")," ",a.a.createElement(T,null,"true"),a.a.createElement(B,null,",")," ",a.a.createElement(C,null,"useUnifiedTopology"),a.a.createElement(B,null,":")," ",a.a.createElement(T,null,"true"),a.a.createElement(B,null,"}",")"),";"),a.a.createElement("br",null),a.a.createElement(D,null),a.a.createElement("br",null),a.a.createElement("div",null,a.a.createElement(_,null,"module.exports "),a.a.createElement(B,null,"= "),a.a.createElement(B,null,"("),a.a.createElement(k,null," akaisore "),a.a.createElement(B,null,") "),a.a.createElement(B,null,"=> ","{")))},R=function(e){var t=e.comment;return a.a.createElement("div",null,t.data.body?a.a.createElement("div",null,a.a.createElement(S,null,"const "),a.a.createElement(C,null,t.data.author," "),a.a.createElement(B,null,"= "),a.a.createElement(T,null,"'",t.data.body,"'"),";"):null)},I=n(14),J=n.n(I),U=function(e){var t=e.post,n=Object(l.useState)(!1),r=Object(u.a)(n,2),c=r[0],m=r[1],E=Object(l.useState)(!1),o=Object(u.a)(E,2),p=o[0],f=o[1],b=Object(l.useState)(""),d=Object(u.a)(b,2),v=d[0],h=d[1],j=t.selftext?t.selftext:a.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},t.url);Object(l.useEffect)((function(){var e=function(){var e=Object(i.a)(s.a.mark((function e(){var n,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.reddit.com".concat(t.permalink,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:return l=e.sent,e.abrupt("return",l[1].data.children);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{e().then((function(e){h(e)}))}catch(n){console.log(n)}}),[t]);var O=t.title.split(" ").join(""),g=O.length>20?O.slice(0,20):O;return a.a.createElement(M,null,a.a.createElement("br",null),a.a.createElement("p",null,a.a.createElement(S,null,"const "),a.a.createElement(C,null,g," "),a.a.createElement(B,null,"= ( ",a.a.createElement(k,null,"author, ",t.author)," ) => ","{")),a.a.createElement(Y,null,a.a.createElement("p",null,a.a.createElement(P,null," // ",t.title)),a.a.createElement("p",null,a.a.createElement(S,null,"let "),a.a.createElement(C,null,"created "),a.a.createElement(B,null,"= "),a.a.createElement(T,null,"'",J()(1e3*t.created_utc).format("dddd, MMMM Do YYYY, h:mm:ss a"),"'"),";"),a.a.createElement("br",null),a.a.createElement("p",null,a.a.createElement("button",{onClick:function(){m(!c)}},a.a.createElement(_,null,"showBody"),a.a.createElement(B,null,"()")),";"),a.a.createElement("br",null),c?a.a.createElement("p",null,a.a.createElement(P,null," /* ",j," */")):null,a.a.createElement("p",null,a.a.createElement(S,null,"let "),a.a.createElement(C,null,"subReddit "),a.a.createElement(B,null,"= "),a.a.createElement(T,null,"'",t.subreddit_name_prefixed,"'"),";"),a.a.createElement("p",null,a.a.createElement(S,null,"let "),a.a.createElement(C,null,"subRedditSubs "),a.a.createElement(B,null,"= "),a.a.createElement(q,null,t.subreddit_subscribers),";"),a.a.createElement("br",null),a.a.createElement("p",null,a.a.createElement(P,null," // Gilded: ",t.gilded)),a.a.createElement("p",null,a.a.createElement(S,null,"let "),a.a.createElement(C,null,"score "),a.a.createElement(B,null,"= "),a.a.createElement(q,null,t.score),";"),a.a.createElement("p",null,a.a.createElement(S,null,"let "),a.a.createElement(C,null,"upVotes "),a.a.createElement(B,null,"= "),a.a.createElement(q,null,t.ups),";"),a.a.createElement("p",null,a.a.createElement(S,null,"let "),a.a.createElement(C,null,"downVotes "),a.a.createElement(B,null,"= "),a.a.createElement(q,null,t.downs),";"),a.a.createElement("br",null),a.a.createElement("p",null,a.a.createElement(S,null,"let "),a.a.createElement(C,null,"comments "),a.a.createElement(B,null,"= "),a.a.createElement(q,null,t.num_comments),";"),t.num_comments?a.a.createElement("p",null,a.a.createElement("button",{onClick:function(){f(!p)}},a.a.createElement(_,null,"showComments",a.a.createElement(B,null,"()"))),";"):null,p?v.map((function(e){return a.a.createElement(R,{key:e.data.id,comment:e})})):null),a.a.createElement("p",null,a.a.createElement(B,null,"}"),";"))},V=function(){var e=Object(l.useContext)(m).posts;return e.length?a.a.createElement(M,null,e.map((function(e){return a.a.createElement(U,{key:e.data.id,post:e.data})}))):null},W=function(){return a.a.createElement("div",null,a.a.createElement("p",null,a.a.createElement(B,null,"}")),a.a.createElement("br",null),a.a.createElement("p",null,a.a.createElement(_,null,"app"),a.a.createElement(B,null,"."),a.a.createElement(q,null,"listen"),a.a.createElement(B,null,"("),a.a.createElement(C,null,"port"),", ",a.a.createElement(B,null,"()")," ",a.a.createElement(B,null,"=> "),a.a.createElement(_,null,"console"),a.a.createElement(B,null,"."),a.a.createElement(_,null,"log"),a.a.createElement(B,null,"("),"`",a.a.createElement(T,null,"server up @ http://localhost:"),a.a.createElement(C,null,"$"),a.a.createElement(B,null,"{"),a.a.createElement(C,null,"port"),a.a.createElement(B,null,"}"),"`",a.a.createElement(B,null,")"),a.a.createElement(B,null,")"),";"))},$=function(){return a.a.createElement("div",null,a.a.createElement(N,null),a.a.createElement(M,null,a.a.createElement(V,null)),a.a.createElement(W,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(E,null,a.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.f6196b95.chunk.js.map