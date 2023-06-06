import{n as o,i as a}from"./index.33ed05e9.js";import{u as i}from"./UrlUtils.917df06f.js";const l="/assets/file.da78b45e.png",n={data(){return{folderId:null,folderName:null,requests:{},methodsSymbols:{POST:"bg-indigo-500",GET:"bg-green-500",PUT:"bg-gray-500",DELETE:"bg-red-500"},isLoading:!1,model:{requestName:"",requestDescription:""},isEmpty:a}},methods:{openRequestCreator(){document.getElementById("request-name-form").classList.remove("hidden")},closeRequestCreator(){document.getElementById("request-name-form").classList.add("hidden")},submitNewRequest(){this.closeRequestCreator(),this.$root.$emit("new_request",{alertMessage:"Submit new request'",data:{folderId:this.folderId,name:this.model.requestName,description:this.model.requestDescription,id:Math.random().toString(16).slice(2),request:{method:"GET",header:[],url:{raw:"https://example.com/api",host:["https://example.com"],path:[this.folderName]}},response:[]}})},viewRequest(s){i("request_tab",s.id),this.$root.$emit("single_request",s)},isActiveTab(s){let t=new URLSearchParams(window.location.search);if(t.has("request_tab")&&t.get("request_tab")==s.id)return this.$root.$emit("single_request",s),"render"}},mounted(){this.$root.$on("list_requests",s=>{this.isLoading=!0,a(s)||(this.requests={},this.folderId=s.id,this.folderName=s.name,this.requests=s.requests),this.isLoading=!1})}};var d=function(){var t=this,e=t._self._c;return e("aside",{staticClass:"top-0 left-0 z-40 p-2 h-[72vh] mb-2 mt-1 transition-transform -translate-x-full sm:translate-x-0",staticStyle:{width:"100%"},attrs:{"aria-label":"Sidebar"}},[e("div",{staticClass:"h-full px-3 py-4 overflow-y-auto dark:bg-gray-800 rounded-[10px] border border-gray-200 transition delay-150 duration-700 ease-in-out bg-white bg-clip-border shadow-3xl shadow-shadow-500"},[e("div",{staticClass:"flex"},[e("aside",{staticClass:"mb-5"},[e("a",{staticClass:"inline-flex border border-gray-200 items-center justify-between px-1 py-1 pr-4 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"},[e("span",{staticClass:"text-xs bg-deep-green-900 rounded-full text-white px-3 py-1.5 mr-3"},[e("svg",{staticClass:"w-4 h-4",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"}})])]),e("span",{staticClass:"text-sm font-semibold"},[t.folderName?e("span",[t._v(t._s(t.folderName))]):e("span",[t._v("Active Folder")])])])]),t.folderId?e("aside",{staticClass:"mb-5 ml-2 cursor-pointer",on:{click:t.openRequestCreator}},[e("a",{staticClass:"inline-flex border border-gray-200 items-center justify-between px-1 py-1 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"},[e("span",{staticClass:"text-xs bg-gray-600 rounded-full text-white px-3 py-1.5"},[e("svg",{staticClass:"w-4 h-4",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6v12m6-6H6"}})])])])]):e("aside",{staticClass:"mb-5 ml-2 cursor-pointer disabled"},[e("a",{staticClass:"inline-flex border border-gray-200 items-center justify-between px-1 py-1 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"},[e("span",{staticClass:"text-xs bg-gray-400 rounded-full text-white px-3 py-1.5"},[e("svg",{staticClass:"w-4 h-4",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6v12m6-6H6"}})])])])])]),e("div",{staticClass:"request-name-form relative hidden",attrs:{id:"request-name-form"}},[e("button",{staticClass:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute -top-2 right-0 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white",attrs:{type:"button"},on:{click:t.closeRequestCreator}},[e("svg",{staticClass:"w-5 h-5",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})]),e("span",{staticClass:"sr-only"},[t._v("Close menu")])]),e("div",[e("label",{staticClass:"block mb-2 text-sm text-gray-900 dark:text-white font-semibold",attrs:{for:"helper-text"}},[t._v("Request Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.model.requestName,expression:"model.requestName"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{type:"text",id:"helper-text","aria-describedby":"helper-text-explanation",placeholder:"Get all users"},domProps:{value:t.model.requestName},on:{input:function(r){r.target.composing||t.$set(t.model,"requestName",r.target.value)}}})]),e("div",{staticClass:"mt-2"},[e("label",{staticClass:"block mb-2 text-sm text-gray-900 dark:text-white font-semibold",attrs:{for:"message"}},[t._v("Description")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.model.requestDescription,expression:"model.requestDescription"}],staticClass:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{id:"message",rows:"2",placeholder:"Some Description..."},domProps:{value:t.model.requestDescription},on:{input:function(r){r.target.composing||t.$set(t.model,"requestDescription",r.target.value)}}})]),e("button",{staticClass:"mt-2 w-full justify-center text-white bg-green-800 hover:bg-green-800/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2",attrs:{type:"button"},on:{click:t.submitNewRequest}},[t._v(" save changes ")])]),e("div",{staticStyle:{"margin-top":".7rem"}},[t.requests?e("ul",{staticClass:"space-y-2 font-medium p-0 m-0 cursor-pointer"},t._l(t.requests,function(r){return e("li",{key:r.name+Math.random().toString(16).slice(2)},[e("a",{staticClass:"border border-gray-200 flex items-center justify-between p-2 text-gray-900 rounded-[10px] bg-clip-border shadow-3xl shadow-shadow-500 dark:text-white bg-gray-100 dark:hover:bg-gray-700",attrs:{"render-request":t.isActiveTab(r),id:r.id},on:{click:function(c){return t.viewRequest(r)}}},[e("div",{staticClass:"flex items-center"},[e("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"}})]),e("div",{staticClass:"text-left ml-2 w-36 overflow-hidden"},[e("div",{staticClass:"text-left truncate"},[t._v(t._s(r.name))]),e("div",{staticClass:"text-sm text-left text-gray-500 truncate"},[t._v(t._s(r.request.url.raw))])])]),e("span",{class:t.methodsSymbols[r.request.method]+" inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-50 rounded-full dark:bg-gray-700 dark:text-gray-300"},[t._v(" "+t._s(r.request.method)+" ")])])])}),0):t._e()]),t.isEmpty(t.requests)?e("div",{staticClass:"h-32"}):t._e(),t.isEmpty(t.requests)?e("div",{staticClass:"flex grayscale flex-col items-center justify-center"},[e("img",{staticClass:"w-32",attrs:{src:l,alt:""}}),e("h4",{staticClass:"mt-4 text-center inline-flex items-center mb-4 text-md font-semibold text-gray-500 dark:text-gray-400"},[t._v(" Requests ")])]):t._e(),t.isLoading?e("div",[e("span",{staticClass:"inline-flex h-6 w-6 animate-spin rounded-full border-4 border-dotted border-indigo-600"})]):t._e()])])},u=[],m=o(n,d,u,!1,null,null,null,null);const h=m.exports;export{h as default};
