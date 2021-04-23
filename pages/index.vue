<template>
  <vc-app>
    <template slot="top">Banner, Top menu</template>
    <vc-drawer slot="left" :items="menuItems"></vc-drawer>

    <span>Placeholder</span>
  </vc-app>
</template>

<script>
  export default {
    data() {
      return {
        menuItems: [
          {
            id: 1,
            title: "Stores",
            icon: "stores",
            to: "/stores",
          },
          {
            id: 2,
            title: "Catalog",
            icon: "catalog",
            to: "/catalog",
          },
          {
            id: 3,
            title: "Contacts",
            icon: "contacts",
            to: "/contacts",
          },
          {
            id: 4,
            title: "Search index",
            icon: "search-index",
            to: "/search-index",
          },
        ],
      };
    },
  };
</script>
