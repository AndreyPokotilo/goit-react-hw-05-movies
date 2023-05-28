"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[680],{560:function(n,t,r){r.d(t,{O:function(){return _}});var e,a,c,o,i,u,s,p,f=r(689),l=r(168),d=r(87),x=r(444),h=x.ZP.ul(e||(e=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 0px;\n  padding: 75px 0px 0px 0px;\n"]))),v=x.ZP.li(a||(a=(0,l.Z)(["\n  position: relative;\n  width: calc((100% - 10px * 8) / 4);\n  margin: 10px;\n  background-color: black;\n  box-shadow: 0px 0px 5px 2px;\n  border-radius: 5px;\n  list-style: none;\n  :hover,\n  :focus{\n    transform: scale(1.03);\n    cursor: zoom-in;\n  };\n"]))),m=(0,x.ZP)(d.rU)(c||(c=(0,l.Z)(["\n  display: inline-block;\n  flex-direction: column;\n  text-decoration: none;\n"]))),g=x.ZP.img(o||(o=(0,l.Z)(["\n  width: 100%;\n  border-radius: 5px;\n"]))),Z=x.ZP.div(i||(i=(0,l.Z)(["\n  border-radius: 5px;\n  background-color: #000;\n"]))),b=x.ZP.h2(u||(u=(0,l.Z)(["\n  font-size: 25px;\n  color: #fff;\n  text-align: center;\n"]))),w=x.ZP.div(s||(s=(0,l.Z)(["\n  position: absolute;\n  display: flex;\n  top: 10px;\n  right: 10px;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  vertical-align: bottom;\n  justify-content: center;\n  border-radius: 50px;\n  border: #00ff01 solid 1px;\n  background-color: black;\n"]))),y=x.ZP.span(p||(p=(0,l.Z)(["\n  font-size: 23px;\n  margin-top: auto;\n  margin-bottom: auto;\n  color: #ffd300;\n"]))),k=r(184);function _(n){var t=n.movies,r=(0,f.TH)();return(0,k.jsx)(h,{children:t.map((function(n){var t=n.id,e=n.poster_path,a=n.name,c=n.title,o=n.vote_average;return(0,k.jsx)(v,{children:(0,k.jsx)(m,{to:"/movies/".concat(t),state:{from:r},children:(0,k.jsxs)(Z,{children:[(0,k.jsx)(g,{src:e?"https://image.tmdb.org/t/p/original/".concat(e):"https://cdn.pixabay.com/photo/2014/03/25/16/27/movie-297135_960_720.png",alt:null!==c&&void 0!==c?c:a}),(0,k.jsx)(b,{children:null!==c&&void 0!==c?c:a}),(0,k.jsx)(w,{children:(0,k.jsx)(y,{children:o.toFixed(1)})})]})})},t)}))})}},680:function(n,t,r){r.r(t),r.d(t,{default:function(){return f}});var e=r(861),a=r(439),c=r(757),o=r.n(c),i=r(791),u=r(273),s=r(560),p=r(184);function f(){var n=(0,i.useState)([]),t=(0,a.Z)(n,2),r=t[0],c=t[1];return(0,i.useEffect)((function(){function n(){return(n=(0,e.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,u.ID)();case 3:t=n.sent,c(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),alert(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,p.jsx)("div",{children:r.length>0&&(0,p.jsx)(s.O,{movies:r})})}},273:function(n,t,r){r.d(t,{ID:function(){return s},Pt:function(){return h},gA:function(){return m},mJ:function(){return f},uM:function(){return d}});var e=r(861),a=r(757),c=r.n(a),o=r(243),i="?api_key=1119a115908e1b3ec65f53aa52c34c18",u="https://api.themoviedb.org/3/";function s(){return p.apply(this,arguments)}function p(){return(p=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"trending/movie/day").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"search/movie").concat(i,"&query=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"movie/").concat(t).concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"movie/").concat(t,"/credits").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return g.apply(this,arguments)}function g(){return(g=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"movie/").concat(t,"/reviews").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=680.df03f191.chunk.js.map