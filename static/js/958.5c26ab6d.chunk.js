"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[958],{830:function(e,t,r){r.d(t,{Eb:function(){return l},Hu:function(){return f},XT:function(){return c},Yp:function(){return o},z1:function(){return u}});var n=r(861),a=r(757),i=r.n(a),s=r(912).Z.create({baseURL:"https://api.themoviedb.org/3/"}),c=function(){var e=(0,n.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/trending/movie/day?api_key=6de1479941bef67a0c224787b78603f1");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"?api_key=6de1479941bef67a0c224787b78603f1"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/search/movie/",{params:{query:t,api_key:"6de1479941bef67a0c224787b78603f1"}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"/credits?api_key=6de1479941bef67a0c224787b78603f1"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"/reviews?api_key=6de1479941bef67a0c224787b78603f1"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},958:function(e,t,r){r.r(t),r.d(t,{default:function(){return Z}});var n=r(413),a=r(861),i=r(439),s=r(757),c=r.n(s),o=r(791),u=r(87),l=r(689),f="MovieDetails_container__rZCdL",v="MovieDetails_page_title__CHPaH",p="MovieDetails_section_title__vXK55",d="MovieDetails_section_data__vEEV2",_="MovieDetails_genres__2ERh5",m="MovieDetails_genre_item__aF+Lx",h="MovieDetails_goback_button__QOK9Y",x="MovieDetails_wrapper_link__AXEkr",b="MovieDetails_wrapper_movie__xVwZn",w="MovieDetails_link__E3pMX",k="MovieDetails_active__YpE2D",g=r(830),j=r(184),Z=function(){var e,t=(0,o.useState)({item:{},loading:!1,error:null}),r=(0,i.Z)(t,2),s=r[0],Z=r[1],y=(0,l.UO)().movieId;console.log(y);var N=(null===(e=(0,l.TH)().state)||void 0===e?void 0:e.from)||"/movies";(0,o.useEffect)((function(){console.log("\u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0454\u043c\u043e useEffect");var e=function(){var e=(0,a.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,Z((function(e){return(0,n.Z)((0,n.Z)({},e),{},{loading:!0,error:null})})),e.next=4,(0,g.Yp)(y);case 4:t=e.sent,Z((function(e){return(0,n.Z)((0,n.Z)({},e),{},{item:t})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),Z((function(t){return(0,n.Z)((0,n.Z)({},t),{},{error:e.t0})}));case 11:return e.prev=11,Z((function(e){return(0,n.Z)((0,n.Z)({},e),{},{loading:!1})})),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[y,Z]);var D=s.item,M=D.title,E=D.release_date,C=D.poster_path,L=D.overview,O=D.vote_average,Y=D.genres,H=function(e){return e.isActive?"".concat(w," ").concat(k):w},X=(0,l.s0)(),A=Y||[],F=A.map((function(e){var t=e.id,r=e.name;return(0,j.jsx)("li",{className:m,children:r},t)})),R=(10*O).toFixed(),U=new Date(E).getFullYear();return(0,j.jsxs)("div",{className:f,children:[(0,j.jsx)("button",{className:h,onClick:function(){return X(N)},type:"button",children:"Go back"}),(0,j.jsxs)("div",{className:b,children:[(0,j.jsx)("img",{src:C,alt:"pic"}),(0,j.jsxs)("div",{children:[(0,j.jsxs)("h2",{className:v,children:[M," (",U,")"]}),(0,j.jsxs)("p",{className:d,children:["User score: ",R,"%"]}),(0,j.jsx)("h3",{className:p,children:"Overview:"}),(0,j.jsx)("p",{className:d,children:L}),(0,j.jsx)("h3",{className:p,children:"Genres:"}),A.length>0&&(0,j.jsx)("ul",{className:_,children:F})]})]}),(0,j.jsxs)("div",{className:x,children:[(0,j.jsx)("h3",{className:p,children:"Additional information:"}),(0,j.jsx)(u.OL,{state:{from:N},className:H,to:"/movies/".concat(y,"/cast"),children:"Cast"}),(0,j.jsx)(u.OL,{state:{from:N},className:H,to:"/movies/".concat(y,"/reviews"),children:"Reviews"}),(0,j.jsx)(l.j3,{})]})]})}}}]);
//# sourceMappingURL=958.5c26ab6d.chunk.js.map