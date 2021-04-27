<template>
  <vc-blade
    icon="archive"
    title="Stores"
    subtitle="Manage stores"
    width="400"
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
        ],
      };
    },
  };
</script>
