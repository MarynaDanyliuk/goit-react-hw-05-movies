"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[948],{830:function(e,t,n){n.d(t,{Eb:function(){return p},Hu:function(){return l},XT:function(){return o},Yp:function(){return i},z1:function(){return s}});var r=n(861),a=n(757),u=n.n(a),c=n(912).Z.create({baseURL:"https://api.themoviedb.org/3/"}),o=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/movie/day?api_key=6de1479941bef67a0c224787b78603f1");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"?api_key=6de1479941bef67a0c224787b78603f1"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function s(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=6de1479941bef67a0c224787b78603f1&language=en-US&query=".concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/credits?api_key=6de1479941bef67a0c224787b78603f1"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/reviews?api_key=6de1479941bef67a0c224787b78603f1"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},948:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(413),a=n(861),u=n(439),c=n(757),o=n.n(c),i=n(791),s=n(689),f=n(830),p={section_data:"MovieReviews_section_data__v4JhD",author_data:"MovieReviews_author_data__EEjaj"},l=n(184),v=function(){var e=(0,i.useState)({items:[],loading:!1,error:null}),t=(0,u.Z)(e,2),n=t[0],c=t[1],v=(0,s.UO)().movieId;console.log(v),(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c((function(e){return(0,r.Z)((0,r.Z)({},e),{},{loading:!0,error:null})})),e.next=4,(0,f.Hu)(v);case 4:t=e.sent,console.log(t),c((function(e){return(0,r.Z)((0,r.Z)({},e),{},{items:t.results})})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),c((function(t){return(0,r.Z)((0,r.Z)({},t),{},{error:e.t0})}));case 12:return e.prev=12,c((function(e){return(0,r.Z)((0,r.Z)({},e),{},{loading:!1})})),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e(),console.log("\u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0454\u043c\u043e useEffect")}),[v]);var d=n.items;console.log(d);var h=d.map((function(e){var t=e.id,n=e.author,r=e.content;return(0,l.jsxs)("li",{children:[(0,l.jsxs)("p",{className:p.author_data,children:["Author: ",n]}),(0,l.jsxs)("p",{className:p.section_data,children:["Review: ",r]})]},t)}));return(0,l.jsx)("div",{children:d.length>0?(0,l.jsx)("ul",{className:p.movie_list,children:h}):(0,l.jsx)("p",{children:"There is no feedback for this movie"})})}}}]);
//# sourceMappingURL=948.c3746df4.chunk.js.map