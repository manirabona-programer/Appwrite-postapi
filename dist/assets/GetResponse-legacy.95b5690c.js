System.register(["./sshpre.es-legacy.24422d1a.js","./sshpre-legacy.f97c1290.js","./index-legacy.1849bda6.js"],(function(t,e){"use strict";var r,a,s=document.createElement("style");return s.textContent="pre.ssh-pre[data-v-9f727f6d]{position:relative;padding:.5em;margin:0!important;border:1px solid rgba(0,0,0,.06);background-color:rgba(0,0,0,.024);border-radius:4px;display:block;white-space:unset!important;word-break:normal!important}\n",document.head.appendChild(s),{setters:[function(t){r=t.default},function(){},function(t){a=t.n}],execute:function(){t("default",a({props:{response:{require:!0}},components:{SshPre:r},data:function(){return{body:this.response.body,headers:this.response.headers,ok:this.response.ok,redirected:this.response.redirected,status:this.response.status,statusText:this.response.statusText,type:this.response.type,url:this.response.url,params:this.response.params,state:{alertSuccess:"text-green-800 border-gray-300 bg-green-100 dark:text-green-400 dark:border-gray-800 flex p-3 mb-4 text-md border rounded-lg dark:bg-gray-800",alertError:"text-red-800 border-gray-300 bg-red-100 dark:text-red-400 dark:border-red-800 flex p-3 mb-4 text-md border rounded-lg dark:bg-gray-800",badgeSuccess:"bg-green-300 text-green-800 text-md font-bold ml-2 mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300",badgeError:"bg-red-300 text-red-800 text-md font-bold ml-2 mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300"}}},watch:{response:{handler:function(t){this.body=t.body,this.headers=t.headers,this.ok=t.ok,this.redirected=t.redirected,this.status=t.status,this.statusText=t.statusText,this.type=t.type,this.url=t.url,this.params=t.params},immediate:!0}},methods:{openActiveTab:function(t){document.querySelectorAll('[role="tree-4-tabs"]').forEach((function(t){t.classList.add("hidden")})),document.getElementById(t).classList.remove("hidden")},onCopiedDoSomething:function(){this.$root.$emit("new_message",{responseType:"success",response:"Body Copied",hasResponse:!0})}}},(function(){var t=this,e=t._self._c;return t.response?e("div",[e("div",{class:t.ok?t.state.alertSuccess:t.state.alertError,attrs:{role:"alert"}},[t.ok?e("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"}})]):t._e(),t.ok?t._e():e("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}})]),e("div",[e("span",{class:t.ok?t.state.badgeSuccess:t.state.badgeError},[t._v(" "+t._s(t.status)+" ")]),t._v(" "+t._s(t.statusText)+" ")])]),e("div",{staticClass:"mb-4 border-b border-t border-gray-200 py-2 dark:border-gray-700"},[e("ul",{staticClass:"flex flex-wrap text-md font-bold font-anek text-left p-0 m-0",attrs:{id:"responseTabContent","data-tabs-toggle":"#responseTab",role:"tablist"}},[e("li",{staticClass:"mr-2",attrs:{role:"presentation"}},[e("button",{staticClass:"inline-block py-2 px-4 rounded",attrs:{id:"headers-tab","data-tabs-target":"#headers",type:"button",role:"tab","aria-controls":"headers","aria-selected":"false"},on:{click:function(e){return t.openActiveTab("headers-response-tab")}}},[t._v(" Headers ")])]),e("li",{staticClass:"mr-2",attrs:{role:"presentation"}},[e("button",{staticClass:"inline-block p-3 py-2 px-4 rounded hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",attrs:{id:"body-tab","data-tabs-target":"#body",type:"button",role:"tab","aria-controls":"body","aria-selected":"false"},on:{click:function(e){return t.openActiveTab("body-response-tab")}}},[t._v(" Body ")])]),e("li",{attrs:{role:"presentation"}},[e("button",{staticClass:"inline-block py-2 px-4 rounded hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",attrs:{id:"params-tab","data-tabs-target":"#params",type:"button",role:"tab","aria-controls":"params","aria-selected":"false"},on:{click:function(e){return t.openActiveTab("params-response-tab")}}},[t._v(" Params ")])])])]),e("div",{attrs:{id:"myTabContent"}},[e("div",{staticClass:"p-1 rounded-lg bg-gray-50 dark:bg-gray-800",attrs:{id:"headers-response-tab",role:"tree-4-tabs","aria-labelledby":"headers-tab"}},[e("table",{staticClass:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},[e("caption",{staticClass:"p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"}),t._m(0),e("tbody",t._l(t.headers,(function(r){return e("tr",{key:r[0]+Math.random().toString(16).slice(2),staticClass:"bg-white border-b dark:bg-gray-800 dark:border-gray-700"},[e("th",{staticClass:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",attrs:{scope:"row"}},[t._v(" "+t._s(r[0])+" ")]),e("td",{staticClass:"px-6 py-4"},[t._v(t._s(r[1]))]),e("td",{staticClass:"px-6 py-4 text-right"},[e("div",{staticClass:"flex items-center"},[e("input",{staticClass:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",attrs:{id:"checked-checkbox",type:"checkbox",value:""},domProps:{checked:!1}})])])])})),0)])]),e("div",{staticClass:"hidden p-1 rounded-lg bg-gray-50 dark:bg-gray-800 text-sm",attrs:{id:"body-response-tab",role:"tree-4-tabs","aria-labelledby":"body-tab"}},[e("ssh-pre",{attrs:{language:"json",label:"body","copy-button":""},on:{copied:t.onCopiedDoSomething},scopedSlots:t._u([{key:"copy-button",fn:function(){return[e("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"}})])]},proxy:!0}],null,!1,2734495889)},[t._v(" "+t._s(t.body)+" ")])],1),e("div",{staticClass:"hidden p-1 rounded-lg bg-gray-50 dark:bg-gray-800",attrs:{id:"params-response-tab",role:"tree-4-tabs","aria-labelledby":"params-tab"}},[e("table",{staticClass:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},[e("caption",{staticClass:"p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"}),t._m(1),e("tbody",t._l(t.params,(function(r){return e("tr",{key:r[0]+Math.random().toString(16).slice(2),staticClass:"bg-white border-b dark:bg-gray-800 dark:border-gray-700"},[e("th",{staticClass:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",attrs:{scope:"row"}},[t._v(" "+t._s(r[0])+" ")]),e("td",{staticClass:"px-6 py-4"},[t._v(t._s(r[1]))]),e("td",{staticClass:"px-6 py-4 text-right"},[e("div",{staticClass:"flex items-center"},[e("input",{staticClass:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",attrs:{id:"checked-checkbox",type:"checkbox",value:""},domProps:{checked:!1}})])])])})),0)])])])]):t._e()}),[function(){var t=this,e=t._self._c;return e("thead",{staticClass:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[e("tr",[e("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[t._v("Header Name")]),e("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[t._v("Header Value")]),e("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[t._v("Disabled")])])])},function(){var t=this,e=t._self._c;return e("thead",{staticClass:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[e("tr",[e("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[t._v("Key")]),e("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[t._v("Value")]),e("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[t._v("Disabled")])])])}],!1,null,"9f727f6d",null,null).exports)}}}));
