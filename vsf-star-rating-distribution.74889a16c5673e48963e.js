(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{1353:function(t,a,s){"use strict";var i=s(978);s.n(i).a},1354:function(t,a,s){(t.exports=s(695)(!1)).push([t.i,".star-rating[data-v-61bac5a2]{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.star-rating .star-container[data-v-61bac5a2]{display:-ms-flexbox;display:flex}.star-rating .indicator[data-v-61bac5a2]{text-align:left;font-size:18px;color:#727983;opacity:1}@media screen and (max-width: 767px){.star-rating .indicator[data-v-61bac5a2]{font-size:13px}}.star-rating .star-container[data-v-61bac5a2]:not(:last-child){margin-right:5px}.reviews[data-v-61bac5a2]{white-space:nowrap;text-decoration:underline;padding:0px 10px;font-size:18px;color:#505257;opacity:1}@media screen and (max-width: 767px){.reviews[data-v-61bac5a2]{font-size:14px}}.label-left[data-v-61bac5a2]{font-size:14px;white-space:nowrap;width:30%}@media screen and (max-width: 767px){.label-left[data-v-61bac5a2]{width:50%}}.label-right[data-v-61bac5a2]{font-size:14px;width:30%}\n",""])},1406:function(t,a,s){"use strict";s.r(a);var i={name:"stars-rating-distribution",components:{ProgressBar:function(){return s.e(72).then(s.bind(null,1418))}},props:{distribution:{type:Object}},data:function(){return{distributiondemo:{five_star:1232,four_star:345,three_star:12,two_star:2,one_star:0}}},directives:{},computed:{percentage:function(){var t=this.distribution.one_star+this.distribution.two_star+this.distribution.three_star+this.distribution.four_star+this.distribution.five_star;return{five_star:this.distribution.five_star/t*100,four_star:this.distribution.four_star/t*100,three_star:this.distribution.three_star/t*100,two_star:this.distribution.two_star/t*100,one_star:this.distribution.one_star/t*100}}},methods:{test:function(){}}},r=(s(1353),s(170)),e=Object(r.a)(i,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"mt15 tk-basic-sans",attrs:{id:"pbd"}},[s("div",{staticClass:"flex pt10"},[s("span",{staticClass:"label-left"},[t._v("5 Stars")]),t._v(" "),s("progress-bar",{attrs:{percent:t.percentage.five_star}}),s("span",{staticClass:"label-right"},[t._v(t._s(t.distribution.five_star))])],1),t._v(" "),s("div",{staticClass:"flex pt10"},[s("span",{staticClass:"label-left"},[t._v("4 Stars")]),t._v(" "),s("progress-bar",{attrs:{percent:t.percentage.four_star}}),s("span",{staticClass:"label-right"},[t._v(t._s(t.distribution.four_star))])],1),t._v(" "),s("div",{staticClass:"flex pt10"},[s("span",{staticClass:"label-left"},[t._v("3 Stars")]),t._v(" "),s("progress-bar",{attrs:{percent:t.percentage.three_star}}),s("span",{staticClass:"label-right"},[t._v(t._s(t.distribution.three_star))])],1),t._v(" "),s("div",{staticClass:"flex pt10"},[s("span",{staticClass:"label-left"},[t._v("2 Stars")]),t._v(" "),s("progress-bar",{attrs:{percent:t.percentage.two_star}}),s("span",{staticClass:"label-right"},[t._v(t._s(t.distribution.two_star))])],1),t._v(" "),s("div",{staticClass:"flex pt10"},[s("span",{staticClass:"label-left"},[t._v("1 Star ")]),t._v(" "),s("progress-bar",{attrs:{percent:t.percentage.one_star}}),s("span",{staticClass:"label-right"},[t._v(t._s(t.distribution.one_star))])],1)])}),[],!1,null,"61bac5a2",null);a.default=e.exports},978:function(t,a,s){var i=s(1354);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,s(696).default)("27dc03c4",i,!0,{})}}]);
//# sourceMappingURL=vsf-star-rating-distribution.74889a16c5673e48963e.js.map