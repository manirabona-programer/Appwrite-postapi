import{n,_ as s,u as d,I as l,s as c}from"./index.33ed05e9.js";import{h as u}from"./moment.9709ab41.js";import{u as o}from"./CollectionStore.2fd3b3fa.js";import{a as f}from"./axios.1cbd2f54.js";import{b as m}from"./services.3795b00f.js";const p={props:{collection:{required:!0}},components:{TableOfContents:()=>s(()=>import("./TableOfContents.ff5d046d.js"),["assets/TableOfContents.ff5d046d.js","assets/index.33ed05e9.js","assets/index.c24085a0.css","assets/TableOfContents.a5a846ff.css"]),PublishCollection:()=>s(()=>import("./PublishCollection.002f7360.js"),["assets/PublishCollection.002f7360.js","assets/services.3795b00f.js","assets/index.33ed05e9.js","assets/index.c24085a0.css","assets/CollectionStore.2fd3b3fa.js","assets/moment.9709ab41.js"]),CollectionStructure:()=>s(()=>import("./CollectionStructure.ba4b5c58.js"),["assets/CollectionStructure.ba4b5c58.js","assets/index.33ed05e9.js","assets/index.c24085a0.css","assets/CollectionStructure.df1e427c.css","assets/sshpre.d9619936.css"])},data:()=>({info:{},items:{},preparedCollection:{},isLoading:!1,uniqueIdentifier:Math.random().toString(16).slice(2),data:{name:"",description:""},author:{},owner:!1,user:d().get,id:l,slugfi:c}),methods:{format(r){return u(r).format("MMMM Do YYYY")},openEditor(r){document.getElementById("#"+r).classList.remove("hidden"),document.getElementById("*"+r).classList.add("d-none")},closeEditor(r){document.getElementById("#"+r).classList.add("hidden"),document.getElementById("*"+r).classList.remove("d-none")},async submitDocTitle(){this.$root.$emit("save_collection_changes",{alertMessage:"Saving Collection title",data:{id:this.uniqueIdentifier,name:this.data.name,section:"info.name"},after:()=>this.$root.$emit("refresh_collection")})},async submitDocDesc(){this.$root.$emit("save_collection_changes",{alertMessage:"Saving Collection Description",data:{id:this.uniqueIdentifier,description:this.data.description,section:"info.description"},after:()=>this.$root.$emit("refresh_collection")})}},watch:{collection:{handler(r){var t,e;r&&r.file&&(this.data.name=((t=r.file.info)==null?void 0:t.name)!==void 0?r.file.info.name:"",this.data.description=((e=r.file.info)==null?void 0:e.description)!==void 0?r.file.info.description:"",this.info=r.file.info,this.items=r.file.item),o().store(r),r.user_id&&f(`https://cloud.appwrite.io/v1/users/${r.user_id}`,{headers:m.headers}).then(a=>{this.author=a.data,a.data.$id==this.user.$id?this.owner=!0:this.owner=!1})},immediate:!0}},async mounted(){this.$root.$on("refresh_collection",()=>{var t,e;const r=o().get;this.data.name=((t=r.file.info)==null?void 0:t.name)!==void 0?r.file.info.name:"",this.data.description=((e=r.file.info)==null?void 0:e.description)!==void 0?r.file.info.description:"",this.info=r.file.info,this.items=r.file.item})}};var g=function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex relative",attrs:{id:"downloadable"}},[e("div",[e("TableOfContents",{attrs:{page_description:t.info.description,page_title:t.info.name,collection_items:t.items}})],1),t.owner?e("div",[e("PublishCollection",{attrs:{collectionId:t.preparedCollection.id}})],1):t._e(),e("div",{staticClass:"post-contents-wrapper"},[e("div",{staticClass:"single-post-title"},[e("div",{staticClass:"post-date font-anek text-gray-500 capitalize",staticStyle:{"letter-spacing":"1"}},[t._v(" "+t._s(t.format(t.collection.$createdAt))+" ")]),e("div",{staticClass:"relative"},[e("h1",{staticClass:"flex"},[t._v(" "+t._s(t.data.name)+" "),t.owner?e("div",{staticClass:"cursor-pointer ml-3 h-10 inline-flex items-center justify-between px-1 py-1 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white",attrs:{id:"*_title_"},on:{click:function(i){return t.openEditor("_title_")}}},[e("span",{staticClass:"text-xs bg-white dark:bg-gray-900 rounded-full text-black px-3 py-1.5"},[e("svg",{staticClass:"w-4 h-4",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"}})])])]):t._e()]),e("div",{staticClass:"hidden",attrs:{id:"#_title_"}},[e("div",{staticClass:"absolute -bottom-14 z-20 w-auto border border-gray-100 rounded-[10px] bg-white px-3 py-2.5 shadow-md shadow-shadow-200 dark:!bg-navy-800 dark:shadow-none md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2"},[e("div",{staticClass:"flex flex-grow items-center justify-center relative"},[e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.name,expression:"data.name"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{type:"text",id:"helper-text","aria-describedby":"helper-text-explanation",placeholder:"Title..."},domProps:{value:t.data.name},on:{input:function(i){i.target.composing||t.$set(t.data,"name",i.target.value)}}})]),e("div",{staticClass:"ml-3"},[e("button",{staticClass:"relative cursor-pointer inline-flex h-10 w-20 items-center justify-center rounded-lg border border-transparent text-white bg-gray-800 hover:bg-gray-900 px-2 py-1 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-75",on:{click:t.submitDocTitle}},[e("svg",{staticClass:"w-4 h-4",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"}})])])]),e("div",{staticClass:"ml-2"},[e("button",{staticClass:"relative cursor-pointer inline-flex h-10 w-20 items-center justify-center rounded-lg border border-transparent text-white bg-gray-400 hover:bg-gray-900 px-2 py-1 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-75",on:{click:function(i){return t.closeEditor("_title_")}}},[e("svg",{staticClass:"w-4 h-4",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"}})])])]),e("div",{staticClass:"hidden",attrs:{id:"*_title_spinner_"+t.uniqueIdentifier}},[t._m(0)])])])])]),e("div",{staticClass:"post-author-container"},[e("div",{staticClass:"post-author"},[t._v("Collected")]),e("div",{staticClass:"by-text"},[t._v(" by")]),e("div",{staticClass:"post-author capitalize"},[t._v(" "+t._s(t.author.name)+" ")])]),e("div",{staticClass:"relative"},[e("p",{staticClass:"post-summary font-anek flex relative"},[t._v(" "+t._s(t.data.description)+" ")]),t.owner?e("div",{staticClass:"cursor-pointer absolute bottom-0 -right-3 ml-3 h-10 inline-flex items-center justify-between px-1 py-1 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white",attrs:{id:"*_desc_"},on:{click:function(i){return t.openEditor("_desc_")}}},[e("span",{staticClass:"text-xs bg-white dark:bg-gray-900 rounded-full text-black px-3 py-1.5"},[e("svg",{staticClass:"w-4 h-4",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"}})])])]):t._e(),e("div",{staticClass:"hidden",attrs:{id:"#_desc_"}},[e("div",{staticClass:"absolute -bottom-48 z-20 w-auto border border-gray-100 rounded-[10px] bg-white px-3 py-2.5 shadow-md shadow-shadow-200 dark:!bg-navy-800 dark:shadow-none md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2"},[e("div",{staticClass:"flex-grow items-center justify-center relative"},[e("div",[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.data.description,expression:"data.description"}],staticClass:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{rows:"5",placeholder:"Write your thoughts here..."},domProps:{value:t.data.description},on:{input:function(i){i.target.composing||t.$set(t.data,"description",i.target.value)}}})]),e("div",{staticClass:"flex justify-between mt-3"},[e("button",{staticClass:"relative cursor-pointer inline-flex h-10 w-20 items-center justify-center rounded-lg border border-transparent text-white bg-gray-800 hover:bg-gray-900 px-2 py-1 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-75",on:{click:t.submitDocDesc}},[e("svg",{staticClass:"w-4 h-4",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"}})])]),e("button",{staticClass:"relative cursor-pointer inline-flex h-10 w-20 items-center justify-center rounded-lg border border-transparent text-white bg-gray-400 hover:bg-gray-900 px-2 py-1 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-75",on:{click:function(i){return t.closeEditor("_desc_")}}},[e("svg",{staticClass:"w-4 h-4",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"}})])])]),e("div",{staticClass:"hidden",attrs:{id:"*_desc_spinner_"+t.uniqueIdentifier}},[t._m(1)])])])])])]),e("div",{staticClass:"main-container mt-3"},[e("div",{staticClass:"post-body w-richtext"},[e("ol",{staticClass:"relative border-l ml-3 border-gray-200 dark:border-gray-700"},t._l(t.items,function(i){return e("CollectionStructure",{key:t.slugfi(i.name+t.id.unique()),attrs:{folder:i,owner:t.owner}})}),1)])])])])},h=[function(){var r=this,t=r._self._c;return t("div",{staticClass:"absolute top-0 right-0 bottom-0 left-0 w-full h-full backdrop-blur-sm z-10 rounded-[10px] flex items-center justify-center"},[t("span",{staticClass:"relative inset-0 inline-flex h-6 w-6 animate-spin items-center justify-center rounded-full border-2 border-gray-300 after:absolute after:h-8 after:w-8 after:rounded-full after:border-2 after:border-y-indigo-500 after:border-x-transparent"})])},function(){var r=this,t=r._self._c;return t("div",{staticClass:"absolute top-0 right-0 bottom-0 left-0 w-full h-full backdrop-blur-sm z-10 rounded-[10px] flex items-center justify-center"},[t("span",{staticClass:"relative inset-0 inline-flex h-6 w-6 animate-spin items-center justify-center rounded-full border-2 border-gray-300 after:absolute after:h-8 after:w-8 after:rounded-full after:border-2 after:border-y-indigo-500 after:border-x-transparent"})])}],b=n(p,g,h,!1,null,null,null,null);const k=b.exports;export{k as default};
