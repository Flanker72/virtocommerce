<template>
  <vc-blade
    icon="folder"
    title="Catalog"
    subtitle="Manage catalogs"
    width="600"
    :closable="false"
    :toolbarItems="toolbarItems"
  ></vc-blade>
</template>

<script>
  export default {
    data() {
      return {
        toolbarItems: [
          { id: 1, icon: "sync-alt", title: "Refresh" },
          { id: 2, icon: "plus", title: "Add" },
          { id: 3, icon: "trash", title: "Delete", disabled: true },
          { id: 4, icon: "download", title: "Import" },
          { id: 5, icon: "upload", title: "Export" },
          { id: 6, icon: "cut", title: "Cut", disabled: true },
          { id: 7, icon: "paste", title: "Paste", disabled: true },
          { id: 8, icon: "cubes", title: "Bulk export", disabled: true },
        ],
      };
    },
  };
</script>
