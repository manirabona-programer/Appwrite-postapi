import{n as s,u as n,A as a,_ as c,t as r,Q as d}from"./index.33ed05e9.js";import{a as _}from"./services.3795b00f.js";import{u as f}from"./CollectionStore.2fd3b3fa.js";const h={data(){return{loadedCollection:{},user:n().get,storage:a().storage(),database:a().database(),owner:!1,author:{}}},components:{CollectionContentsCompiler:()=>c(()=>import("./CollectionContentsCompiler.cf5c2825.js"),["assets/CollectionContentsCompiler.cf5c2825.js","assets/index.33ed05e9.js","assets/index.c24085a0.css","assets/moment.9709ab41.js","assets/CollectionStore.2fd3b3fa.js","assets/axios.1cbd2f54.js","assets/services.3795b00f.js"])},watch:{loadedCollection:{handler(o){f().store(o)},immediate:!0}},mounted(){const o=this.$route.params.collection;this.$root.$emit("set_loader_on"),r(()=>{this.database.collection(_.collection_table),this.database.index([d.equal("$id",[o])]).then(t=>{t.documents&&this.database.show(o).then(async e=>{const i=this.storage.view(e.storage_file_id);(await fetch(i.href,{method:"GET",headers:{"X-Appwrite-Project":"64762d3a9c27d51cb3b9","Content-Type":"application/json","X-Appwrite-Key":"27ffa0ee64d40883866462d167aa076e9a7352cd324c6441d24ed3624f0d031230d9ab7c03d0c6780c6cca2036245873203524e099c560f9c81d42412082bc51dc20954b80ade15d1f232194636fba50b37360121bddb9ee36d2fc47686c14d8fb98cd21925cdb0a752d09a8fc3e50531758ee3d53a73a86955dee556c14065e"}})).json().then(l=>{this.loadedCollection={...e,file:l,file_id:e.storage_file_id},this.$root.$emit("set_loader_off")})})})})}};var p=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"downloadable"}},[e("div",{staticClass:"section no-bottom-padding wf-section"},[e("CollectionContentsCompiler",{attrs:{collection:t.loadedCollection,owner:t.owner,author:t.author}})],1)])},u=[],m=s(h,p,u,!1,null,null,null,null);const g=m.exports;export{g as default};
