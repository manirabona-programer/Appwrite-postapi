System.register(["./index-legacy.1849bda6.js","./UrlUtils-legacy.1f6f3074.js"],(function(e,t){"use strict";var r,n,s;return{setters:[function(e){r=e.n,n=e._},function(e){s=e.u}],execute:function(){var t=e("default",r({props:["forlder"],components:{SingleFolder:function(){return n((function(){return Promise.resolve().then((function(){return i}))}),void 0)}},data:function(){return{uniqueIdentifier:Math.random().toString(16).slice(2),nextGen:"dropdown-"+this.forlder.name+"-"+this.uniqueIdentifier,urlParams:new URLSearchParams(window.location.search)}},methods:{parseRequests:function(e,t){var r=[];for(var n in e.hasOwnProperty("request")&&this.$root.$emit("list_requests",{id:e.id,name:e.name,requests:e}),e.hasOwnProperty("item")&&(document.getElementById(t).classList.contains("hidden")?e.hasOwnProperty("item")&&document.getElementById(t).classList.remove("hidden"):document.getElementById(t).classList.add("hidden")),e.item)e.item[n].hasOwnProperty("request")&&r.push(e.item[n]);s("requests",e.id),this.$root.$emit("list_requests",{id:e.id,name:e.name,requests:r})}},mounted:function(){this.forlder&&this.urlParams.has("requests")&&this.forlder.id==this.urlParams.get("requests")&&document.getElementById(this.urlParams.get("requests")).click()}},(function(){var e,t=this,r=t._self._c;return t.forlder.hasOwnProperty("request")?t._e():r("li",[r("a",{staticClass:"border border-gray-200 mt-2 flex items-center cursor-pointer p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700",attrs:{id:t.forlder.id},on:{click:function(e){return t.parseRequests(t.forlder,t.nextGen)}}},[r("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"}})]),r("span",{staticClass:"flex-1 ml-3 whitespace-nowrap truncate"},[t._v(t._s(t.forlder.name))]),r("span",{staticClass:"inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-50 bg-green-500 rounded-full dark:bg-gray-700 dark:text-gray-300"},[t._v(t._s(t.forlder.item.length))])]),null!==(e=t.forlder)&&void 0!==e&&e.item?r("ul",{staticClass:"hidden",attrs:{id:t.nextGen}},t._l(t.forlder.item,(function(e){return r("SingleFolder",{key:e.name+Math.random().toString(16).slice(2),attrs:{forlder:e}})})),1):t._e()])}),[],!1,null,null,null,null).exports),i=Object.freeze(Object.defineProperty({__proto__:null,default:t},Symbol.toStringTag,{value:"Module"}))}}}));
