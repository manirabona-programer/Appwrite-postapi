import{n as s}from"./index.33ed05e9.js";const n={props:["auths"],data(){return{authsToken:""}},methods:{openActiveTab(t){document.querySelectorAll('[role="tree-2-tabs"]').forEach(e=>{e.classList.add("hidden")}),document.getElementById(t).classList.remove("hidden")}},watch:{auths:{handler(t){this.authsToken=(t==null?void 0:t.bearer)!==void 0?t.bearer[0].value:"",this.$root.$emit("new_auth",{key:t.type,value:(t==null?void 0:t.bearer)!==void 0?t.bearer[0].value:""})},immediate:!0},authsToken:{handler(t){this.$root.$emit("new_auth",{key:"bearer",value:t})},immediate:!0}}};var o=function(){var e=this,a=e._self._c;return a("div",[a("div",{staticClass:"mb-4 border-b border-gray-200 pb-2 dark:border-gray-700"},[a("ul",{staticClass:"flex flex-wrap text-md font-bold font-anek text-left p-0 m-0",attrs:{id:"myTab","data-tabs-toggle":"#myTabContent",role:"tablist"}},[a("li",{staticClass:"mr-2",attrs:{role:"presentation"}},[a("button",{staticClass:"inline-block py-2 px-4 rounded hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",attrs:{id:"none-auth-tab","data-tabs-target":"#none-auth",type:"button",role:"tab","aria-controls":"none-auth","aria-selected":"true"},on:{click:function(r){return e.openActiveTab("none-auth-content-tab")}}},[e._v(" None ")])]),a("li",{staticClass:"mr-2",attrs:{role:"presentation"}},[a("button",{staticClass:"inline-block py-2 px-4 rounded",attrs:{id:"basic-auth-tab","data-tabs-target":"#basic-auth",type:"button",role:"tab","aria-controls":"basic-auth","aria-selected":"false"},on:{click:function(r){return e.openActiveTab("basic-auth-content-tab")}}},[e._v(" Basic Auth ")])]),a("li",{staticClass:"mr-2",attrs:{role:"presentation"}},[a("button",{staticClass:"inline-block p-3 py-2 px-4 rounded hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",attrs:{id:"bearer-auth-tab","data-tabs-target":"#bearer-auth",type:"button",role:"tab","aria-controls":"bearer-auth","aria-selected":"false"},on:{click:function(r){return e.openActiveTab("bearer-auth-content-tab")}}},[e._v(" Bearer Token ")])])])]),a("div",{attrs:{id:"myTabContent"}},[a("div",{class:e.auths?"hidden rounded-lg bg-gray-50 dark:bg-gray-800":"",attrs:{id:"none-auth-content-tab",role:"tree-2-tabs","aria-labelledby":"none-auth-tab"}},[a("span",{staticClass:"text-gray-300"},[e._v("No authorization was set for this request.")])]),a("div",{class:e.auths&&e.auths.type=="basic"?"":"hidden rounded-lg bg-gray-50 dark:bg-gray-800",attrs:{id:"basic-auth-content-tab",role:"tree-2-tabs","aria-labelledby":"basic-auth-tab"}},[e._m(0),e._m(1)]),a("div",{class:e.auths&&e.auths.type=="bearer"?"":"hidden rounded-lg bg-gray-50 dark:bg-gray-800",attrs:{id:"bearer-auth-content-tab",role:"tree-2-tabs","aria-labelledby":"bearer-auth-tab"}},[a("div",{staticClass:"mb-6"},[a("label",{staticClass:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"default-input"}},[e._v("Type: "+e._s(e.auths.type))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.authsToken,expression:"authsToken"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{type:"text",id:"default-input"},domProps:{value:e.authsToken},on:{input:function(r){r.target.composing||(e.authsToken=r.target.value)}}})])])])])},l=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-6"},[e("label",{staticClass:"block mb-2 text-sm font-medium text-green-700 dark:text-green-500",attrs:{for:"success"}},[t._v("Username")]),e("input",{staticClass:"bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500",attrs:{type:"text",id:"success"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-6"},[e("label",{staticClass:"block mb-2 text-sm font-medium text-green-700 dark:text-green-500",attrs:{for:"success"}},[t._v("Password")]),e("input",{staticClass:"bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500",attrs:{type:"text",id:"success"}})])}],d=s(n,o,l,!1,null,null,null,null);const b=d.exports;export{b as default};
