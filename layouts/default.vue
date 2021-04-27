<template>
  <vc-app>
    <template v-slot:banner>
      <div>Running community edition, click to request a commercial license.</div>
      <vc-button variant="special" title="Purchase"></vc-button>
    </template>

    <template v-slot:left>
      <vc-drawer :items="menuItems"></vc-drawer>
    </template>

    <nuxt />
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
