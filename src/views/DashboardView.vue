<!-- eslint-disable prettier/prettier -->
<template>
  <main class="bg-white">
    <div class="g-padding flex">
      <aside id="sidebar-multi-level-sidebar" class="top-0 left-0 z-10 p-2 h-[72vh] mb-2 mt-1 transition-transform -translate-x-full sm:translate-x-0 " aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto rounded-[10px] border border-gray-200 transition delay-150 duration-700 ease-in-out bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:bg-gray-800">
          <!-- Side bar contain all collection folders -->
          <FoldersList />
        </div>
      </aside>
      
      <!-- Middle bar contain all folder's requets -->
      <div class="diff-requests-container"><RequestsList /></div>

      <!-- Right bar contains clicked single request vuew -->
      <div class="single-request-container"><SingleRequest /></div>
    </div>
  </main>
</template>

<style>
@import "../assets/css/bash.css";
@import "../assets/css/dashboard.css";
</style>

<script>
export default {
  components: {
    FoldersList: () => import("../components/CollectionItems/FoldersList.vue"),
    RequestsList: () =>
      import("../components/CollectionItems/RequestsList.vue"),
    SingleRequest: () =>
      import("../components/CollectionItems/SingleRequest.vue"),
  },
};
</script>
