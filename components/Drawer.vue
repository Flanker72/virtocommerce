<template>
  <div class="vc-drawer" :class="{ 'vc-drawer_collapsed': collapsed }">
    <div class="vc-drawer__top">
      <div class="vc-drawer__top-image" :style="{ 'background-image': `url(${logo})` }"></div>
      <div class="vc-drawer__top-version">{{ version }}</div>
    </div>
    <vc-drawer-toggler @click="toggleCollapsed()"></vc-drawer-toggler>
    <vc-container class="vc-drawer__content">
      <vc-drawer-item icon="home" to="/" sticky="sticky" :title="$t('Home')" />
      <vc-drawer-item v-for="item in items" :key="item.id" :icon="item.icon" :to="item.to" :title="$t(item.title)" />
      <vc-drawer-item icon="ellipsis-h" sticky="sticky" :title="$t('More')" />
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
        this.$emit(this.collapsed ? "collapse" : "expand");
      },
    },
  };
</script>
