<template>
  <div class="vc-drawer" :class="{ 'vc-drawer_collapsed': collapsed }">
    <div class="vc-drawer__top">
      <img class="vc-drawer__top-image" :src="logo" height="30" />
      <div class="vc-drawer__top-version">{{ version }}</div>
    </div>
    <vc-drawer-toggler @click="toggleCollapsed()"></vc-drawer-toggler>
    <vc-container class="vc-drawer__content">
      <vc-drawer-item icon="home" to="/" sticky="sticky">Home</vc-drawer-item>
      <vc-drawer-item v-for="item in items" :key="item.id" :icon="item.icon" :to="item.to">{{ item.title }}</vc-drawer-item>
      <vc-drawer-item icon="more" sticky="sticky">More</vc-drawer-item>
    </vc-container>
  </div>
</template>

<script>
  export default {
    props: {
      logo: {
        type: String,
        default: require("~/assets/images/logo.svg"),
      },

      version: {
        type: String,
        default: "1.0.0",
      },

      items: {
        type: Array,
        default: [],
      },
    },

    data() {
      return {
        collapsed: false,
      };
    },

    methods: {
      toggleCollapsed() {
        this.collapsed = !this.collapsed;
      },
    },
  };
</script>
