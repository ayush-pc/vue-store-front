(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{706:function(t,e,i){var a=i(742);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i(696).default)("c1f2acf2",a,!0,{})},741:function(t,e,i){"use strict";var a=i(706);i.n(a).a},742:function(t,e,i){(t.exports=i(695)(!1)).push([t.i,".highlighted[data-v-5d459299]{margin-left:5px}.highlighted[data-v-5d459299]:hover{border:2px solid #ff8300}.product-image[data-v-5d459299]{position:relative;max-width:100%;height:0;mix-blend-mode:multiply}.product-image__placeholder[data-v-5d459299],.product-image__thumb[data-v-5d459299]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}.product-image__placeholder[data-v-5d459299]{max-width:50%}.product-image--height .product-image__thumb[data-v-5d459299]{height:100%}.product-image--width .product-image__thumb[data-v-5d459299]{width:100%}\n",""])},748:function(t,e,i){"use strict";i.r(e);var a=i(3),h={props:{calcRatio:{type:Boolean,default:!0},image:{type:Object,default:function(){return{src:"",loading:""}}},alt:{type:String,default:""},widthLength:{type:String,required:!0,default:"100%"},heightLength:{type:String,required:!0,default:"100%"},highlighted:{type:Boolean,default:!1}},data:function(){return{lowerQualityImage:!1,lowerQualityImageError:!1,highQualityImage:!1,highQualityImageError:!1,basic:!0}},watch:{lowerQualityImage:function(t){t&&(this.basic=this.$refs.lQ.naturalWidth<this.$refs.lQ.naturalHeight)}},computed:{showPlaceholder:function(){return!this.showLowerQuality&&!this.showHighQuality},showLowerQuality:function(){return this.lowerQualityImage&&!this.showHighQuality},showHighQuality:function(){return this.highQualityImage},imageRatio:function(){var t=this.$store.state.config.products.gallery,e=t.width,i=t.height;return"".concat(i/(e/100),"%")},style:function(){return window&&window.innerWidth<767?this.calcRatio?{paddingBottom:"85%",height:this.heightLength,width:this.widthLength}:{}:this.calcRatio?{paddingBottom:"100%",height:this.heightLength,width:this.widthLength}:{}},isOnline:function(t){return a.h.isOnline}},methods:{imageLoaded:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this["".concat(t,"QualityImage")]=e,this["".concat(t,"QualityImageError")]=!e}}},r=(i(741),i(170)),o=Object(r.a)(h,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._g({staticClass:"product-image",class:{"product-image--height":t.basic,"product-image--width":!t.basic},style:t.style},t.$listeners),[i("img",{directives:[{name:"show",rawName:"v-show",value:t.showPlaceholder,expression:"showPlaceholder"}],staticClass:"product-image__placeholder",class:{highlighted:t.highlighted},attrs:{src:"/assets/placeholder.svg",alt:t.alt,width:t.widthLength,height:t.heightLength}}),t._v(" "),!t.lowerQualityImageError||t.isOnline?i("img",{directives:[{name:"show",rawName:"v-show",value:t.showLowerQuality,expression:"showLowerQuality"},{name:"lazy",rawName:"v-lazy",value:t.image.loading,expression:"image.loading"}],ref:"lQ",staticClass:"product-image__thumb",class:{highlighted:t.highlighted},attrs:{alt:t.alt,width:t.widthLength,height:t.heightLength},on:{load:function(e){return t.imageLoaded("lower",!0)},error:function(e){return t.imageLoaded("lower",!1)}}}):t._e(),t._v(" "),!t.highQualityImageError||t.isOnline?i("img",{directives:[{name:"show",rawName:"v-show",value:t.showHighQuality,expression:"showHighQuality"},{name:"lazy",rawName:"v-lazy",value:t.image.src,expression:"image.src"}],staticClass:"product-image__thumb",class:{highlighted:t.highlighted},attrs:{alt:t.alt,width:t.widthLength,height:t.heightLength},on:{load:function(e){return t.imageLoaded("high",!0)},error:function(e){return t.imageLoaded("high",!1)}}}):t._e()])}),[],!1,null,"5d459299",null);e.default=o.exports}}]);
//# sourceMappingURL=vsf-product-image.74889a16c5673e48963e.js.map