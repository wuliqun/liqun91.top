webpackJsonp([21],{Df9h:function(t,a){},GoxZ:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=s("lC5x"),r=s.n(i),e=s("J0Oq"),n=s.n(e),c=s("4YfN"),l=s.n(c),o=s("i84Q"),d=s("2bvH"),u={data:function(){return{programs:null}},methods:l()({},Object(d.b)("playlist",["insertListIntoPlaylistById"]),{initData:function(){var t=this;Object(o.i)().then(function(a){t.programs=a.data.programs})},play:function(t){var a=this;return n()(r.a.mark(function s(){return r.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,a.insertListIntoPlaylistById(t);case 2:a.$message.playerMessage("已开始播放");case 3:case"end":return s.stop()}},s,a)}))()}}),created:function(){this.initData()}},v={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"dj-recommend"},[s("div",{staticClass:"wrapper"},[t._m(0),t._v(" "),t.programs?s("div",{staticClass:"program-wrapper"},[s("ul",{staticClass:"program-list"},t._l(t.programs,function(a){return s("li",{key:a.id,staticClass:"program-item clearfix"},[s("div",{staticClass:"img"},[s("img",{attrs:{src:a.coverUrl,alt:""}}),t._v(" "),s("i",{staticClass:"icon-play",on:{click:function(s){return t.play(a.id)}}})]),t._v(" "),s("div",{staticClass:"name f-thide"},[s("router-link",{staticClass:"link",attrs:{to:{name:"program",query:{id:a.id}}}},[t._v("\n                            "+t._s(a.name)+"\n                        ")])],1),t._v(" "),s("div",{staticClass:"dj f-thide"},[s("router-link",{staticClass:"link",attrs:{to:{name:"dj",query:{id:a.dj.userId}}}},[t._v("\n                            "+t._s(a.dj.brand)+"\n                        ")])],1),t._v(" "),s("div",{staticClass:"play-count"},[t._v("播放"+t._s(a.listenerCount))]),t._v(" "),s("div",{staticClass:"zan"},[t._v("赞"+t._s(a.likedCount))]),t._v(" "),s("div",{staticClass:"cat"},[s("router-link",{staticClass:"link",attrs:{to:{name:"discoverDjRadioCategory",query:{id:a.radio.categoryId}}}},[t._v(t._s(a.radio.category))])],1)])}),0)]):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"title clearfix"},[a("h1",{staticClass:"main"},[this._v("推荐节目")]),this._v(" "),a("span",{staticClass:"sub"},[this._v("(每日更新)")])])}]};var _=s("C7Lr")(u,v,!1,function(t){s("Df9h")},"data-v-d7e7ffe2",null).exports;a.default=_}});
//# sourceMappingURL=21.49e509fa73282fb5c046.js.map