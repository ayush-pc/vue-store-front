(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{691:function(e,r,t){"use strict";t.r(r),t.d(r,"SearchAdapter",(function(){return g}));var n=t(825),o=t(171),i=t.n(o),s=t(3),u=t(116),c=t.n(u),a=t(7),l=t(16),p=t(0),h=t(15),f=function(e,r,t,n){return new(t||(t=Promise))((function(o,i){function s(e){try{c(n.next(e))}catch(e){i(e)}}function u(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var r;e.done?o(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(s,u)}c((n=n.apply(e,r||[])).next())}))},y=function(e,r){var t,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;s;)try{if(t=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=r.call(e,s)}catch(e){i=[6,e],n=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},d=function(e,r){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var n,o,i=t.call(e),s=[];try{for(;(void 0===r||r-- >0)&&!(n=i.next()).done;)s.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return s},g=function(){function e(){this.entities=[],this.initBaseTypes()}return e.prototype.decompactItem=function(e,r){for(var t in r){var n=r[t];void 0!==e[n]&&(e[t]=e[n],delete e[n])}return e},e.prototype.search=function(e){return f(this,void 0,void 0,(function(){var r,t,n,o,u,f,g,w;return y(this,(function(y){switch(y.label){case 0:if(r=e.searchQuery,!this.entities[e.type])throw new Error("No entity type registered for "+e.type);if(!(e.searchQuery instanceof l.SearchQuery))throw new Error('The only supported type of the "Request.searchQuery" is "SearchQuery"');return e.hasOwnProperty("groupId")&&null!==e.groupId&&(r.groupId=e.groupId),e.hasOwnProperty("groupToken")&&null!==e.groupToken&&(r.groupToken=e.groupToken),e.sort&&(t=d(e.sort.split(":"),2),n=t[0],o=t[1],r.applySort({field:n,options:o}),delete e.sort),null!==e.store?[3,1]:(f=Object(a.b)(),[3,3]);case 1:return[4,Object(a.f)(e.store)];case 2:f=y.sent(),y.label=3;case 3:if(u=f,e.index=u.elasticsearch.index,g=Object(s.j)(Object(h.a)(u.elasticsearch,"host")),this.entities[e.type].url&&(g=Object(h.a)(this.entities[e.type],"url")),w={size:e.size,from:e.from,sort:e.sort,request_format:"search-query",response_format:"compact"},e._sourceExclude&&(w._source_exclude=e._sourceExclude.join(",")),e._sourceInclude&&(w._source_include=e._sourceInclude.join(",")),e.q&&(w.q=e.q),!e.index||!e.type)throw new Error("Query.index and Query.type are required arguments for executing ElasticSearch query");return"GET"===p.elasticsearch.queryMethod&&(w.request=JSON.stringify(r)),g=(g=g+"/"+encodeURIComponent(e.index)+"/"+encodeURIComponent(e.type)+"/_search")+"?"+c.a.stringify(w),[2,i()(g,{method:p.elasticsearch.queryMethod,mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json"},body:"POST"===p.elasticsearch.queryMethod?JSON.stringify(r):null}).then((function(e){return e.json()})).catch((function(e){throw new Error("FetchError in request to API: "+e.toString())}))]}}))}))},e.prototype.handleResult=function(e,r,t,o){var i=this;if(void 0===t&&(t=0),void 0===o&&(o=50),null===e)throw new Error("Invalid API result - null not exepcted");if(e.hasOwnProperty("hits"))return{items:Object(n.a)(e.hits,(function(e){return"product"===r&&(e=i.decompactItem(e,p.products.fieldsToCompact)).configurable_children&&(e.configurable_children=e.configurable_children.map((function(e){return i.decompactItem(e,p.products.fieldsToCompact)}))),Object.assign(e,{slug:e.slug?e.slug:e.hasOwnProperty("url_key")&&p.products.useMagentoUrlKeys?e.url_key:e.hasOwnProperty("name")?Object(s.o)(e.name)+"-"+e.id:""})})),total:e.total,start:t,perPage:o,aggregations:e.aggregations,attributeMetadata:e.attribute_metadata,suggestions:e.suggest};throw e.error?new Error(JSON.stringify(e.error)):new Error("Unknown error with API catalog result in resultProcessor for entity type '"+r+"'")},e.prototype.registerEntityType=function(e,r){var t=r.url,n=void 0===t?"":t,o=r.url_ssr,i=void 0===o?"":o,s=r.queryProcessor,u=r.resultProcessor;return this.entities[e]={queryProcessor:s,resultProcessor:u},""!==n&&(this.entities[e].url=n),""!==i&&(this.entities[e].url_ssr=i),this},e.prototype.initBaseTypes=function(){var e=this;["product","attribute","category","taxrule","review","cms_page","cms_block","cms_hierarchy"].forEach((function(r){e.registerEntityType(r,{queryProcessor:function(e){return e},resultProcessor:function(t,n,o){return e.handleResult(t,r,n,o)}})}))},e}()}}]);
//# sourceMappingURL=vsf-search-adapter-api-search-query-searchAdapter.74889a16c5673e48963e.js.map