<template>
  <div class="vc-blade" :style="{ width: `${width}px` }" :class="{ 'vc-blade_expanded': expanded }">
    <div class="vc-blade__topbar">
      <div class="vc-blade__topbar-button" v-if="expanded" @click="expanded = false">
        <vc-icon icon="window-minimize" size="s"></vc-icon>
      </div>
      <div class="vc-blade__topbar-button" v-else @click="expanded = true">
        <vc-icon icon="window-maximize" size="s"></vc-icon>
      </div>
      <div class="vc-blade__topbar-button" :class="{ 'vc-blade__topbar-button_disabled': !closable }">
        <vc-icon icon="times"></vc-icon>
      </div>
    </div>

    <div class="vc-blade__header">
      <div class="vc-blade__header-icon"><vc-icon :icon="icon" size="xxl"></vc-icon></div>
      <div class="vc-blade__header-info">
        <div class="vc-blade__header-title">{{ title }}</div>
        <div class="vc-blade__header-subtitle">{{ subtitle }}</div>
      </div>
    </div>

    <div v-if="toolbarItems" class="vc-blade__toolbar"></div>

    <div v-if="breadcrumbs" class="vc-blade__breadcrumbs"></div>

    <div v-if="searchable || filterable" class="vc-blade__searchbar">
      <div v-if="filterable" class="vc-blade__searchbar-filter"></div>
      <div class="vc-blade__searchbar-search"></div>
      <div v-if="filterable" class="vc-blade__searchbar-counter"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      icon: {
        type: String,
      },

      title: {
        type: String,
      },

      subtitle: {
        type: String,
      },

      width: {
        type: Number | String,
        default: 300,
      },

      closable: {
        type: Boolean,
        default: true,
      },

      toolbarItems: {
        type: Array,
        default: () => [
          {
            id: 1,
            icon: "sync-alt",
            title: "Refresh",
          },
        ],
      },

      breadcrumbs: {
        type: Array,
        default: () => [
          {
            id: 1,
            title: "Electronics",
          },
          {
            id: 2,
            title: "Desktop",
          },
        ],
      },

      searchable: {
        type: Boolean,
        default: true,
      },

      filterable: {
        type: Boolean,
        default: true,
      },
    },

    data() {
      return {
        expanded: false,
      };
    },
  };
</script>
