<template lang="pug">
.vc-drawer(:class="{ 'vc-drawer_collapsed' : collapsed }")
  .vc-drawer__top
    img.vc-drawer__top-image(:src="logo", height="30")
    .vc-drawer__top-version {{ version }}

  vc-drawer-toggler(@click="toggleCollapsed()")

  vc-container.vc-drawer__content
    vc-drawer-item(icon="home", to="/", sticky) Home
    vc-drawer-item(v-for="item in items", :key="item.id", :icon="item.icon", :to="item.to") {{ item.title }}
    vc-drawer-item(icon="more", sticky) More
</template>

<script>
export default {
  props: {
    logo: {
      type: String,
      default: require('~/assets/images/logo.svg')
    },

    version: {
      type: String,
      default: '1.0.0'
    },

    items: {
      type: Array,
      default: []
    }
  },

  data() {
    return {
      collapsed: false
    };
  },

  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    }
  }
}
</script>
