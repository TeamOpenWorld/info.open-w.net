(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{176:function(t,e,n){var content=n(181);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("6759f5ab",content,!0,{sourceMap:!1})},180:function(t,e,n){"use strict";var r=n(176);n.n(r).a},181:function(t,e,n){(e=n(55)(!1)).push([t.i,"h1,h5{font-weight:900}.card-header,a,h1,h5,p{font-family:Noto Sans JP,sans-serif}.card-header,a,p{font-weight:300}",""]),t.exports=e},185:function(t,e,n){"use strict";n.r(e);n(72),n(39);var r=n(5),c={asyncData:function(t){var e=t.app;return Object(r.a)(regeneratorRuntime.mark((function t(){var r,c,o,l,i,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("https://open-w.net/assets/header/header.html");case 2:return r=t.sent,t.next=5,n.e(6).then(n.t.bind(null,183,3));case 5:for(i in c=t.sent,o=c.sourceFileArray,l=[],o)i=(i=o[i]).replace(/md/g,"json"),l.unshift(i);return d=c.fileMap,l=l.slice(0,4),t.abrupt("return",{resp:r,key_list:l,obj_list:d});case 12:case"end":return t.stop()}}),t)})))()},head:function(){return{title:"お知らせ"}}},o=(n(180),n(24)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"container"}},[n("section",{attrs:{id:"header"},domProps:{innerHTML:t._s(t.resp)}}),t._v(" "),n("section",{staticClass:"container py-5"},[n("h1",[t._v("お知らせ")]),t._v(" "),n("p",{staticClass:"mb-4"},[t._v("TeamOpenWorldや関連サービス・団体に関するお知らせを掲載しています。")]),t._v(" "),t._l(t.key_list,(function(e){return n("div",{staticClass:"card my-2"},[n("div",{staticClass:"card-header"},[t._v("\n                "+t._s(t.obj_list[e].tag)+"\n            ")]),t._v(" "),n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[t._v(t._s(t.obj_list[e].title)+" "),n("span",{staticClass:"badge badge-pill badge-dark"},[t._v(t._s(t.obj_list[e].date))])]),t._v(" "),n("p",{staticClass:"card-text"},[t._v(t._s(t.obj_list[e].description))]),t._v(" "),n("a",{staticClass:"btn btn-primary",attrs:{href:"/post/"+t.obj_list[e].sourceBase.slice(0,-3)}},[t._v("続きを読む")])])])}))],2),t._v(" "),n("div",{staticClass:"footer-copyright text-center mt-5 py-3"},[t._v("\n        © 2020 TeamOpenWorld\n    ")]),t._v(" "),n("script",[t._v("\n        $(function(){$('#info').addClass('active')});\n    ")])])}),[],!1,null,null,null);e.default=component.exports}}]);