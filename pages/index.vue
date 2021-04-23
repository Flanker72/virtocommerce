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
            title: "Catalog",
            icon: "folder",
            to: "/catalog",
          },
          {
            id: 2,
            title: "Contacts",
            icon: "address-card",
            to: "/contacts",
          },
          {
            id: 3,
            title: "Marketing",
            icon: "flag",
            to: "/marketing",
          },
          {
            id: 4,
            title: "Thumbnails",
            icon: "image",
            to: "/thumbnails",
          },
          {
            id: 5,
            title: "Stores",
            icon: "archive",
            to: "/stores",
          },
        ],
      };
    },
  };
</script>
