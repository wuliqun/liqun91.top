webpackJsonp([2],{"8Rgw":function(t,s){},EiPU:function(t,s){},FEky:function(t,s){},QtRn:function(t,s){},RyTC:function(t,s){},T8jw:function(t,s){},XWl9:function(t,s){},dDWc:function(t,s){},"fT+f":function(t,s){},hXju:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e("lC5x"),i=e.n(n),a=e("J0Oq"),r=e.n(a),l={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"download"}},[s("router-link",{staticClass:"download-btn",attrs:{to:{name:"download"}}}),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",{staticClass:"desc"},[e("span",[t._v("PC")]),t._v(" "),e("span",[t._v("安卓")]),t._v(" "),e("span",[t._v("iPhone")]),t._v(" "),e("span",[t._v("WP")]),t._v(" "),e("span",[t._v("iPad")]),t._v(" "),e("span",[t._v("Mac")]),t._v(" "),e("span",[t._v("六大客户端")])])}]};var c=e("C7Lr")(null,l,!1,function(t){e("rRHf")},"data-v-2a1516c2",null).exports,o=e("i84Q"),u={data:function(){return{banners:null,activeIndex:0,bgColors:null,bannerTimer:null}},computed:{currentUrl:function(){var t=this.banners[this.activeIndex].url,s=!1;if(!t){s=!0;var e=this.banners[this.activeIndex].targetId;t={name:{1:"song",10:"album",100:"artist",1000:"playlist",1002:"userHome",1004:"mv",1005:"dj"}[this.banners[this.activeIndex].targetType],query:{id:e}}}return{url:t,inner:s}}},components:{DownloadAd:c},methods:{initData:function(){var t=this;return r()(i.a.mark(function s(){var e,n;return i.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Object(o.e)().then(function(s){t.banners=s.data.banners});case 2:t.bgColors=new Array(t.banners.length),e=i.a.mark(function s(e){return i.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Object(o.m)(t.banners[e].imageUrl).then(function(s){t.bgColors[e]=s[0].color});case 2:case"end":return s.stop()}},s,t)}),n=0;case 5:if(!(n<t.banners.length)){s.next=10;break}return s.delegateYield(e(n),"t0",7);case 7:n++,s.next=5;break;case 10:t.autoplay();case 11:case"end":return s.stop()}},s,t)}))()},active:function(t){this.activeIndex=t},move:function(t){var s=this.activeIndex+t;s<0?s=this.banners.length-1:s>=this.banners.length&&(s=0),this.activeIndex=s},cancelAutoplay:function(){clearInterval(this.bannerTimer)},autoplay:function(){var t=this;clearInterval(this.bannerTimer),this.bannerTimer=setInterval(function(){t.move(1)},5e3)}},created:function(){this.initData()}},d={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.bgColors?e("div",{style:{"background-color":t.bgColors[t.activeIndex]},attrs:{id:"banner"},on:{mouseover:t.cancelAutoplay,mouseout:t.autoplay}},[e("div",{staticClass:"bn-wrapper clearfix"},[e("div",{staticClass:"banner-container"},[t.currentUrl.inner?e("router-link",{staticClass:"banner-url",attrs:{to:t.currentUrl.url}},[e("transition",[e("img",{key:t.banners[t.activeIndex].imageUrl,staticClass:"banner-img",attrs:{src:t.banners[t.activeIndex].imageUrl}})])],1):t._e(),t._v(" "),t.currentUrl.inner?t._e():e("a",{staticClass:"banner-url",attrs:{href:t.currentUrl.url,target:"_blank"}},[e("img",{key:t.banners[t.activeIndex].imageUrl,staticClass:"banner-img",attrs:{src:t.banners[t.activeIndex].imageUrl}})]),t._v(" "),e("a",{staticClass:"l-ctrl",on:{click:function(s){return t.move(-1)}}}),t._v(" "),e("a",{staticClass:"r-ctrl",on:{click:function(s){return t.move(1)}}}),t._v(" "),e("div",{staticClass:"cursor"},[e("ul",{staticClass:"cursor-list"},t._l(t.banners.length,function(s){return e("li",{key:s,class:{active:s-1===t.activeIndex},on:{click:function(e){return t.active(s-1)}}},[e("i")])}),0)])],1),t._v(" "),e("div",{staticClass:"ad-area"},[e("download-ad")],1)])]):t._e()},staticRenderFns:[]};var v=e("C7Lr")(u,d,!1,function(t){e("FEky")},"data-v-ada671b0",null).exports,m={data:function(){return{show:!1}},mounted:function(){var t=this;(document.documentElement.scrollTop||document.body.scrollTop)>0&&(this.show=!0),document.addEventListener("scroll",function(){var s=document.documentElement.scrollTop||document.body.scrollTop;t.show=s>0})},methods:{toTop:function(){document.documentElement.scrollTop=0,document.body.scrollTop=0}}},f={render:function(){var t=this.$createElement,s=this._self._c||t;return s("a",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"to-top",on:{click:this.toTop}},[s("i",{staticClass:"icon-up"}),this._v(" "),s("span",[this._v("TOP")])])},staticRenderFns:[]};var _=e("C7Lr")(m,f,!1,function(t){e("dDWc")},"data-v-d31ea7c6",null).exports,p=e("4YfN"),h=e.n(p),C={props:{name:String,routerName:String,sublinks:{type:Array,default:function(){return[]}},sublinkRouterName:String}},b={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"section-title"},[e("div",{staticClass:"section-title-wrapper clearfix"},[e("i",{staticClass:"circle"}),t._v(" "),e("h2",[e("router-link",{attrs:{to:{name:t.routerName}}},[t._v(t._s(t.name))])],1),t._v(" "),t.sublinks.length?e("ul",{staticClass:"sublinks"},[t._l(t.sublinks,function(s,n){return[e("li",{key:s.name,staticClass:"sublink"},[e("router-link",{attrs:{to:{name:t.sublinkRouterName,query:{id:s.id}}}},[t._v(t._s(s.name))])],1),t._v(" "),e("li",{key:s.name+n,staticClass:"seperator"})]})],2):t._e(),t._v(" "),e("div",{staticClass:"more"},[e("router-link",{attrs:{to:{name:t.routerName}}},[t._v("更多")]),t._v(" "),e("i",{staticClass:"arrow"})],1)])])},staticRenderFns:[]};var g=e("C7Lr")(C,b,!1,function(t){e("RyTC")},"data-v-4eceaf59",null).exports,y=e("2bvH"),w={data:function(){return{recommendList:null,tags:[]}},methods:h()({},Object(y.b)("playlist",["insertListIntoPlaylistById"]),{initData:function(){var t=this;Object(o.l)().then(function(s){t.recommendList=s.data.result.splice(0,8)}),Object(o.k)().then(function(s){t.tags=t.formatTags(s.data.tags,5)})},addToPlaylist:function(t){var s=this;return r()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.insertListIntoPlaylistById(t);case 2:s.$message.playerMessage("已开始播放");case 3:case"end":return e.stop()}},e,s)}))()},formatTags:function(t,s){for(var e=[],n=0;n<s;n++){var i=t[n];e.push({id:i.id,name:i.name})}return e}}),filters:{count2str:function(t){if(t<1e4)return""+t;var s=(t/1e4).toFixed(1)+"万";return s.length>=6&&(s=s.split(".")[0]+"万"),s}},created:function(){this.initData()},components:{SectionTitle:g}},k={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.recommendList?e("div",{attrs:{id:"recommend-list"}},[e("section-title",{attrs:{name:"热门推荐","router-name":"discoverPlaylist",sublinks:t.tags,"sublink-router-name":"playlist"}}),t._v(" "),e("ul",{staticClass:"song-list clearfix"},t._l(t.recommendList,function(s){return e("li",{key:s.id,staticClass:"recommend-song"},[e("div",{staticClass:"img-link"},[e("router-link",{staticClass:"link",attrs:{to:{name:"playlist",query:{id:s.id}},title:s.name}},[e("img",{attrs:{src:s.picUrl,alt:""}})]),t._v(" "),e("div",{staticClass:"bottom"},[e("div",{staticClass:"play-count"},[e("i",{staticClass:"icon"}),t._v(" "),e("i",{staticClass:"count"},[t._v(t._s(t._f("count2str")(s.playCount)))])]),t._v(" "),e("div",{staticClass:"play"},[e("a",{on:{click:function(e){return t.addToPlaylist(s.id)}}})])])],1),t._v(" "),e("router-link",{staticClass:"description",attrs:{title:s.name,to:{name:"playlist",query:{id:s.id}}}},[t._v("\n\t\t\t\t\t"+t._s(s.name)+"\n\t\t\t\t")])],1)}),0)],1):t._e()},staticRenderFns:[]};var x=e("C7Lr")(w,k,!1,function(t){e("XWl9")},"data-v-c7ae5910",null).exports,A={data:function(){return{showCount:5,width:void 0,index:1,move:!1}},computed:h()({rows:function(){return this.newAlbums.length/this.showCount}},Object(y.e)("album",["newAlbums"])),methods:h()({},Object(y.b)("album",["initNewAlbums"]),Object(y.b)("playlist",["insertListIntoPlaylistByAlbumId"]),{forward:function(){var t=this;this.move=!0,this.index++,this.index==this.rows+1&&setTimeout(function(){t.move=!1,t.index=1},1100)},back:function(){var t=this;this.move=!0,this.index--,0==this.index&&setTimeout(function(){t.move=!1,t.index=t.rows},1100)},initData:function(){this.initNewAlbums()},playAlbum:function(t){var s=this;return r()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.insertListIntoPlaylistByAlbumId(t);case 2:s.$message.playerMessage("已开始播放");case 3:case"end":return e.stop()}},e,s)}))()}}),filters:{joinNames:function(t){t.map(function(t){return t.name}).join("/")}},updated:function(){var t=document.querySelector(".new-list-container");this.width=t.offsetWidth},created:function(){this.initData()},components:{SectionTitle:g}},I={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.newAlbums?e("div",{attrs:{id:"new-list"}},[e("section-title",{attrs:{name:"新碟上架","router-name":"discoverNewAlbum"}}),t._v(" "),e("div",{staticClass:"new-list-wrapper"},[e("div",{staticClass:"new-list-container"},[e("transition",[e("ul",{staticClass:"new-list clearfix",class:{move:t.move},style:{"margin-left":-t.index*t.width+"px"}},[t._l(t.showCount,function(s){return e("li",{key:"prev"+s,staticClass:"new-list-item"},[e("div",{staticClass:"img-wrapper"},[e("router-link",{staticClass:"img-link",attrs:{to:{name:"album",query:{id:t.newAlbums[t.newAlbums.length-t.showCount+s-1].id}}}},[e("img",{attrs:{src:t.newAlbums[t.newAlbums.length-t.showCount+s-1].picUrl,alt:""}})]),t._v(" "),e("a",{staticClass:"play",on:{click:function(e){return t.playAlbum(t.newAlbums[t.newAlbums.length-t.showCount+s-1].id)}}})],1),t._v(" "),e("div",{staticClass:"infos"},[e("p",{staticClass:"name"},[e("router-link",{attrs:{to:{name:"album",query:{id:t.newAlbums[t.newAlbums.length-t.showCount+s-1].id}}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.newAlbums[t.newAlbums.length-t.showCount+s-1].name)+"\n\t\t\t\t\t\t\t\t\t")])],1),t._v(" "),e("p",{staticClass:"artist",attrs:{title:t._f("joinNames")(t.newAlbums[t.newAlbums.length-t.showCount+s-1].artists)}},[t._l(t.newAlbums[t.newAlbums.length-t.showCount+s-1].artists,function(s,n){return[e("router-link",{key:"prev"+s.id,attrs:{to:{name:"artist",query:{id:s.id}}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.name)+"\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("span",{key:"prev"+n,staticClass:"seperator"},[t._v("/")])]})],2)])])}),t._v(" "),t._l(t.newAlbums,function(s){return e("li",{key:s.id,staticClass:"new-list-item"},[e("div",{staticClass:"img-wrapper"},[e("router-link",{staticClass:"img-link",attrs:{to:{name:"album",query:{id:s.id}}}},[e("img",{attrs:{src:s.picUrl,alt:""}})]),t._v(" "),e("a",{staticClass:"play",on:{click:function(e){return t.playAlbum(s.id)}}})],1),t._v(" "),e("div",{staticClass:"infos"},[e("p",{staticClass:"name"},[e("router-link",{attrs:{to:{name:"album",query:{id:s.id}}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(s.name)+"\n\t\t\t\t\t\t\t\t\t")])],1),t._v(" "),e("p",{staticClass:"artist",attrs:{title:t._f("joinNames")(s.artists)}},[t._l(s.artists,function(s,n){return[e("router-link",{key:s.id,attrs:{to:{name:"artist",query:{id:s.id}}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.name)+"\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("span",{key:n,staticClass:"seperator"},[t._v("/")])]})],2)])])}),t._v(" "),t._l(t.showCount,function(s){return e("li",{key:"next"+s,staticClass:"new-list-item"},[e("div",{staticClass:"img-wrapper"},[e("router-link",{staticClass:"img-link",attrs:{to:{name:"album",query:{id:t.newAlbums[s-1].id}}}},[e("img",{attrs:{src:t.newAlbums[s-1].picUrl,alt:""}})]),t._v(" "),e("a",{staticClass:"play",on:{click:function(e){return t.playAlbum(t.newAlbums[s-1].id)}}})],1),t._v(" "),e("div",{staticClass:"infos"},[e("p",{staticClass:"name"},[e("router-link",{attrs:{to:{name:"album",query:{id:t.newAlbums[s-1].id}}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.newAlbums[s-1].name)+"\n\t\t\t\t\t\t\t\t\t")])],1),t._v(" "),e("p",{staticClass:"artist",attrs:{title:t._f("joinNames")(t.newAlbums[s-1].artists)}},[t._l(t.newAlbums[s-1].artists,function(s,n){return[e("router-link",{key:"next"+s.id,attrs:{to:{name:"artist",query:{id:s.id}}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.name)+"\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("span",{key:"next"+n,staticClass:"seperator"},[t._v("/")])]})],2)])])})],2)])],1),t._v(" "),e("a",{staticClass:"ctrl lctrl",on:{click:t.back}}),t._v(" "),e("a",{staticClass:"ctrl rctrl",on:{click:t.forward}})])],1):t._e()},staticRenderFns:[]};var T=e("C7Lr")(A,I,!1,function(t){e("8Rgw")},"data-v-5f208094",null).exports,L=e("HzJ8"),j=e.n(L),E={data:function(){return{toplist:[],topListId:[0,2,3]}},methods:h()({},Object(y.d)("playlist",["insertIntoPlaylist","pushIntoPlaylist"]),Object(y.d)("userDiyPlaylist",["showAddDiyListPanel","setSongWaitToAdd"]),Object(y.d)("collectionList",["addCollect"]),{initData:function(){var t=this;return r()(i.a.mark(function s(){var e,n,a,r,l,c,u;return i.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:e=!0,n=!1,a=void 0,s.prev=3,r=j()(t.topListId);case 5:if(e=(l=r.next()).done){s.next=14;break}return c=l.value,s.next=9,Object(o.y)(c);case 9:u=s.sent,t.toplist.push(u.data.playlist);case 11:e=!0,s.next=5;break;case 14:s.next=20;break;case 16:s.prev=16,s.t0=s.catch(3),n=!0,a=s.t0;case 20:s.prev=20,s.prev=21,!e&&r.return&&r.return();case 23:if(s.prev=23,!n){s.next=26;break}throw a;case 26:return s.finish(23);case 27:return s.finish(20);case 28:case"end":return s.stop()}},s,t,[[3,16,20,28],[21,,23,27]])}))()},playItem:function(t){this.insertIntoPlaylist(t),this.$message.playerMessage("已开始播放")},appendSong:function(t){this.pushIntoPlaylist(t),this.$message.playerMessage("已添加至播放列表")},collectTheList:function(t){-1!==this.collectionListIdArr.indexOf(t.id)?this.$message.success("您已收藏过该歌单"):(this.addCollect({id:t.id,name:t.name,coverImgUrl:t.coverImgUrl,counts:t.tracks.length}),this.$message.success("已添加至收藏夹"))},collectSong:function(t){this.setSongWaitToAdd(t),this.showAddDiyListPanel()}}),created:function(){this.initData()},computed:h()({},Object(y.e)("collectionList",["collectionListIdArr"])),components:{SectionTitle:g}},P={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.toplist.length>=3?e("div",{attrs:{id:"top-list"}},[e("section-title",{attrs:{name:"榜单","router-name":"discoverToplist"}}),t._v(" "),e("div",{staticClass:"top-list clearfix"},t._l(t.toplist,function(s){return e("dl",{key:s.id,staticClass:"top-list-column"},[e("dt",{staticClass:"title clearfix"},[e("div",{staticClass:"left"},[e("router-link",{staticClass:"title-img-wrapper",attrs:{to:{name:"discoverToplist",query:{id:s.id}},title:s.name}},[e("img",{attrs:{src:s.coverImgUrl,alt:""}})])],1),t._v(" "),e("div",{staticClass:"right"},[e("h3",{staticClass:"title-txt",attrs:{title:s.name}},[e("router-link",{attrs:{to:{name:"discoverToplist",query:{id:s.id}}}},[t._v(t._s(s.name))])],1),t._v(" "),e("div",{staticClass:"operate"},[e("a",{staticClass:"play",attrs:{title:"播放"},on:{click:function(e){return t.playItem(s.tracks)}}}),t._v(" "),e("a",{staticClass:"subscribe",attrs:{title:"收藏"},on:{click:function(e){return t.collectTheList(s)}}})])])]),t._v(" "),e("dd",[e("ol",{staticClass:"cate-list"},[t._l(10,function(n){return e("li",{key:n,staticClass:"list-item"},[e("div",{staticClass:"song",attrs:{title:s.tracks[n-1].name}},[e("span",{staticClass:"index",class:{top3:n<4}},[t._v(t._s(n))]),t._v(" "),e("router-link",{staticClass:"name",attrs:{to:{name:"song",query:{id:s.tracks[n-1].id}}}},[t._v(t._s(s.tracks[n-1].name))]),t._v(" "),e("div",{staticClass:"operate"},[e("a",{staticClass:"play",attrs:{title:"播放"},on:{click:function(e){return t.playItem(s.tracks[n-1])}}}),t._v(" "),e("a",{staticClass:"add-play-list",attrs:{title:"添加到播放列表"},on:{click:function(e){return t.appendSong(s.tracks[n-1])}}}),t._v(" "),e("a",{staticClass:"subscribe",attrs:{title:"收藏"},on:{click:function(e){return t.collectSong(s.tracks[n-1])}}})])],1)])}),t._v(" "),e("li",{staticClass:"see-all clearfix"},[e("router-link",{attrs:{to:{name:"discoverToplist",query:{id:s.id}}}},[t._v("查看全部>")])],1)],2)])])}),0)],1):t._e()},staticRenderFns:[]};var R={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"user-info-container"}},[t.logged?e("div",{staticClass:"user-info"}):t._e(),t._v(" "),t.logged?t._e():e("div",{staticClass:"user-login"},[e("p",{staticClass:"desc"},[t._v("登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机")]),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"login-btn-wrapper"},[s("a",{staticClass:"login-btn"},[this._v("用户登录")])])}]};var U={data:function(){return{singerList:null}},methods:{initData:function(){var t=this;Object(o.u)({cat:"5001",limit:5,offset:0}).then(function(s){t.singerList=s.data.artists})}},created:function(){this.initData()}},$={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.singerList?e("div",{attrs:{id:"singer-list-wrapper"}},[t._m(0),t._v(" "),e("ul",{staticClass:"singer-list"},t._l(t.singerList,function(s){return e("li",{key:s.id},[e("router-link",{staticClass:"singer-list-item clearfix",attrs:{to:{name:"userHome",query:{id:s.accountId}}}},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:s.img1v1Url,alt:""}})]),t._v(" "),e("div",{staticClass:"info"},[e("h4",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"desc"},[t._v(t._s(s.briefDesc))])])])],1)}),0),t._v(" "),e("a",{staticClass:"recruit",attrs:{href:"https://music.163.com/nmusician/web/recruit",target:"_blank"}},[t._v("申请成为网易音乐人")])]):t._e()},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"title clearfix"},[s("h4",{staticClass:"txt"},[this._v("入驻歌手")]),this._v(" "),s("a",{staticClass:"more",attrs:{href:""}},[this._v("查看全部>")])])}]};var q={data:function(){return{list:null}},methods:{initData:function(){var t=this;Object(o.o)().then(function(s){t.list=s.data.data.list.slice(0,10)})}},created:function(){this.initData()}},D={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.list?e("div",{attrs:{id:"dj-list-wrapper"}},[t._m(0),t._v(" "),e("ul",{staticClass:"dj-list"},t._l(t.list,function(s){return e("li",{key:s.id,staticClass:"dj-list-item clearfix"},[e("a",{staticClass:"avatar"},[e("img",{attrs:{src:s.picUrl,alt:""}})]),t._v(" "),e("div",{staticClass:"info"},[e("h4",{staticClass:"name-wrapper clearfix"},[e("a",{staticClass:"name",attrs:{href:"",title:s.name}},[t._v(t._s(s.name))])]),t._v(" "),e("p",{staticClass:"desc",attrs:{title:s.rcmdText}},[t._v(t._s(s.rcmdText))])])])}),0)]):t._e()},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"title clearfix"},[s("h4",{staticClass:"txt"},[this._v("付费精选")])])}]};var O={data:function(){return{}},components:{Banner:v,ToTop:_,RecommendList:x,AlbumList:T,TopList:e("C7Lr")(E,P,!1,function(t){e("QtRn")},"data-v-2044ba13",null).exports,UserInfo:e("C7Lr")({data:function(){return{logged:!1}}},R,!1,function(t){e("lIV9")},"data-v-63149700",null).exports,SingerList:e("C7Lr")(U,$,!1,function(t){e("fT+f")},"data-v-2f039a84",null).exports,DjList:e("C7Lr")(q,D,!1,function(t){e("EiPU")},"data-v-2d2fb664",null).exports}},F={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"recommend"}},[s("banner"),this._v(" "),s("div",{staticClass:"wrapper clearfix"},[s("div",{staticClass:"left-zone"},[s("div",{staticClass:"left-zone-wrapper"},[s("recommend-list"),this._v(" "),s("album-list"),this._v(" "),s("top-list")],1)]),this._v(" "),s("div",{staticClass:"right-zone"},[s("user-info"),this._v(" "),s("singer-list"),this._v(" "),s("dj-list")],1)]),this._v(" "),s("to-top")],1)},staticRenderFns:[]};var N=e("C7Lr")(O,F,!1,function(t){e("T8jw")},null,null).exports;s.default=N},lIV9:function(t,s){},rRHf:function(t,s){}});
//# sourceMappingURL=2.9007829f03c12faa7180.js.map