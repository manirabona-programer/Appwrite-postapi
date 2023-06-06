import{n as _,u as d,A as m,i as y,t as l,Q as h,r,s as p,b as w}from"./index.33ed05e9.js";import{a as c}from"./services.3795b00f.js";import{a as f}from"./AccountHeader.53eda97e.js";import{a as C,c as x,_ as v}from"./folder.408c3fd1.js";import{h as u}from"./moment.9709ab41.js";import"./UrlUtils.917df06f.js";const E={data(){return{isOpen:!1,auth:!1,newCollection:{},model:{importedCollection:"",collectionName:""},user:d().get,storage:m().storage(),database:m().database(),items:{},collections:{},isLoading:!1,isEmpty:y,activeProject:{},urlParams:new URLSearchParams(window.location.search),activeElement:C,colors:x}},methods:{closeCollections(){this.isOpen=!1},isActiveCollection(s){return this.urlParams.has("collection")?this.urlParams.get("collection")==s:!1},async getCollections(){this.isLoading=!0,this.collections=[],l(()=>{this.database.collection(c.collection_table),this.database.index([h.equal("project_id",[this.activeProject.$id]),h.orderDesc("$createdAt")]).then(async s=>{this.isEmpty(s.documents)?this.isLoading=!1:await s.documents.map(async e=>{const t=this.storage.view(e.storage_file_id);fetch(t.href,{method:"GET",headers:{"X-Appwrite-Project":"64762d3a9c27d51cb3b9","Content-Type":"application/json","X-Appwrite-Key":"27ffa0ee64d40883866462d167aa076e9a7352cd324c6441d24ed3624f0d031230d9ab7c03d0c6780c6cca2036245873203524e099c560f9c81d42412082bc51dc20954b80ade15d1f232194636fba50b37360121bddb9ee36d2fc47686c14d8fb98cd21925cdb0a752d09a8fc3e50531758ee3d53a73a86955dee556c14065e"}}).then(o=>o.json()).then(o=>{o.hasOwnProperty("code")&&o.code=="404"||this.collections.push({...e,file:o,file_id:e.storage_file_id}),this.isLoading=!1}).catch(()=>this.isLoading=!1)})}).catch(()=>this.isLoading=!1)})},loadCollection(s,e){this.$root.$emit("refresh_collections",s),document.querySelectorAll('[role="ctl-collection"]').forEach(t=>{t.classList.remove(this.colors.Cyan),t.classList.add(this.colors.Teal),t.classList.remove("text-gray-100"),t.classList.add("text-gray-900")}),document.getElementById(e).classList.remove(this.colors.Teal),document.getElementById(e).classList.add(this.colors.Cyan),document.getElementById(e).classList.add("text-gray-100"),document.getElementById(e).classList.remove("text-gray-900")},importFile(){this.isEmpty(this.activeProject)?this.$root.$emit("new_message",{responseType:"error",response:"Set Active Porject and Try again",hasResponse:!0}):document.getElementById("custom_file").click()},openCollectionCreator(){document.getElementById("collection-form").classList.remove("hidden")},onFileChange(s){this.model.importedCollection=s.target.files[0],this.submitImportedCollection()},async submitImportedCollection(){l(()=>{this.isLoading=!0,this.$root.$emit("set_loader_on"),new Blob([this.model.importedCollection],{type:"application/json"}).text().then(e=>{const t=JSON.parse(e);this.newCollection.info=t.info,this.newCollection.event=t.event,this.newCollection.auth=t.auth;const o=this.recursiveMap(t.item,i=>({...i,id:Math.random().toString(16).slice(2),description:i!=null&&i.description?i.description:""}));this.newCollection.item=o;const a=new Blob([JSON.stringify(this.newCollection)],{type:"application/json"}),n=new File([a],"patienceman_"+r(10)+".json",{type:a.type});this.storage.store(n).then(i=>{const g={project_id:this.activeProject.$id,slug:p(r(10)+" "+this.user.name+"collection"),storage_file_id:i.$id,collection_url:i.name,published:!1,published_at:u()};this.database.collection(c.collection_table),this.database.create(g).then(b=>{this.$root.$emit("new_message",{responseType:"success",response:"File imported successfully",hasResponse:!0}),this.$root.$emit("set_loader_off"),this.isLoading=!1,this.$root.$emit("refresh_collections",{...b,file:this.newCollection,file_id:i.$id})})}).catch(()=>this.isLoading=!1)})})},recursiveMap(s,e){return s.forEach((t,o,a)=>{t.hasOwnProperty("item")?typeof t.item=="object"&&(s[o]={name:t.name,id:Math.random().toString(16).slice(2),item:this.recursiveMap(t.item,e),description:t!=null&&t.description?t.description:""}):s[o]=e(t)}),s},submitNewCollection(){this.isEmpty(this.activeProject)?this.$root.$emit("new_message",{responseType:"error",response:"Set Active Project and Try again",hasResponse:!0}):(l(()=>{this.isLoading=!0,this.$root.$emit("set_loader_on");let s={info:{name:this.model.collectionName},item:[],auth:{},event:{}};const e=new Blob([JSON.stringify(s)],{type:"application/json"}),t=new File([e],"patienceman_"+r(10)+".json",{type:e.type});this.storage.store(t).then(o=>{const a={project_id:this.activeProject.$id,slug:p(r(10)+" "+this.user.name+"collection"),storage_file_id:o.$id,collection_url:o.name,published:!1,published_at:u()};this.database.collection(c.collection_table),this.database.create(a).then(n=>{this.$root.$emit("new_message",{responseType:"success",response:"Collection created successfully",hasResponse:!0}),this.$root.$emit("refresh_collections",{...n,file:s,file_id:o.$id}),this.$root.$emit("set_loader_off"),this.isLoading=!1,this.$root.$emit("reload_collections")})}).catch(()=>this.isLoading=!1)}),document.getElementById("collection-form").classList.add("hidden"))}},async mounted(){w().user().then(async s=>{d().store(s),this.user=s,this.auth=!0}).catch(()=>this.auth=!1),this.$root.$on("reload_collections",async()=>{this.activeProject=f().get,await this.getCollections()}),this.$root.$on("open-collections",async()=>{this.activeProject=f().get,this.isOpen=!0,await this.getCollections()})}};var I=function(){var e=this,t=e._self._c;return e.isOpen?t("div",{staticClass:"fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-0 bg-white w-[30vw] shadow-lg border border-gray-200 dark:bg-gray-800",attrs:{tabindex:"-1","aria-labelledby":"drawer-right-label"}},[e._m(0),t("button",{staticClass:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white",attrs:{type:"button","data-drawer-hide":"drawer-right-example","aria-controls":"drawer-right-example"},on:{click:e.closeCollections}},[t("svg",{staticClass:"w-5 h-5",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})]),t("span",{staticClass:"sr-only"},[e._v("Close menu")])]),t("div",{staticClass:"border border-x-0 mt-4 border-t-0 border-gray-200"}),t("div",{staticClass:"flex items-center mt-4 justify-center"},[t("input",{staticStyle:{display:"none"},attrs:{id:"custom_file",type:"file"},on:{change:e.onFileChange}}),t("button",{staticClass:"text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2",attrs:{type:"button"},on:{click:e.importFile}},[t("svg",{staticClass:"w-5 h-5 mr-3",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"}})]),e._v(" Import Collection ")]),t("button",{staticClass:"text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2",attrs:{type:"button"},on:{click:e.openCollectionCreator}},[t("svg",{staticClass:"w-5 h-5 mr-3",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6v12m6-6H6"}})]),e._v(" Create New Collection ")])]),t("div",{staticClass:"border border-x-0 border-b-0 border-gray-200 mt-4"}),t("div",{staticClass:"collection-form mt-3 hidden",attrs:{id:"collection-form"}},[t("div",[t("label",{staticClass:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"helper-text"}},[e._v("Collection Name")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.model.collectionName,expression:"model.collectionName"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{type:"text",id:"helper-text","aria-describedby":"helper-text-explanation",placeholder:"Example-API-Collection"},domProps:{value:e.model.collectionName},on:{input:function(o){o.target.composing||e.$set(e.model,"collectionName",o.target.value)}}}),t("p",{staticClass:"mt-2 text-sm text-gray-500 dark:text-gray-400",attrs:{id:"helper-text-explanation"}},[e._v("We\u2019ll never share your Collection until you publish it.")])]),t("button",{staticClass:"mt-3 text-white bg-green-800 hover:bg-green-800/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2",attrs:{type:"button"},on:{click:e.submitNewCollection}},[e._v(" create now ")])]),t("div",{staticClass:"border border-gray-200 mt-4 rounded-[10px] bg-clip-border bg-[#f5f7fe] shadow-3xl shadow-shadow-500 p-2 overflow-y-auto h-auto"},[!e.isEmpty(e.collections)&&!e.isLoading?t("ul",{staticClass:"p-0 m-0"},e._l(e.collections,function(o){return t("li",{key:o.$id,staticClass:"cursor-pointer mb-2"},[t("a",{staticClass:"hover:bg-gray-300 border border-gray-200 flex items-center p-2 text-gray-900 rounded-lg dark:text-white bg-gray-50 dark:hover:bg-gray-700",on:{click:function(a){return e.loadCollection(o,o.$id)}}},[t("div",{class:e.isActiveCollection(o.$id)?e.activeElement.active:e.activeElement.default,attrs:{role:"ctl-collection",id:o.$id}},[t("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"}})])]),t("span",{staticClass:"flex-1 ml-3 truncate"},[e._v(" "+e._s(o.file.info.name)+" ")])])])}),0):e._e(),e.isEmpty(e.collections)&&!e.isLoading?t("div",{staticClass:"flex items-center grayscale justify-center"},[t("img",{staticClass:"w-32",attrs:{src:v,alt:""}})]):e._e(),e.isLoading?t("div",{staticClass:"flex justify-center items-center"},[t("span",{staticClass:"inline-flex h-6 w-6 animate-spin rounded-full border-4 border-dotted border-indigo-600"})]):e._e()])]):e._e()},$=[function(){var s=this,e=s._self._c;return e("div",{staticClass:"flex items-center justify-center"},[e("h3",{staticClass:"mt-4 text-center inline-flex items-center mb-4 text-md font-semibold text-gray-500 dark:text-gray-400",attrs:{id:"drawer-right-label"}},[s._v(" Manage Your Collections ")])])}],k=_(E,I,$,!1,null,null,null,null);const S=k.exports;export{S as default};
