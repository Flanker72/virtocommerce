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
        <div class="vc-blade__header-title" :class="{ 'vc-blade__header-title_only': !subtitle }">{{ title }}</div>
        <div class="vc-blade__header-subtitle" v-if="subtitle">{{ subtitle }}</div>
      </div>
    </div>

    <div v-if="toolbarItems" class="vc-blade__toolbar">
      <template v-for="item in toolbarItems">
        <div
          class="vc-blade__toolbar-item"
          :class="{ 'vc-blade__toolbar-item_disabled': item.disabled }"
          :key="item.id"
        >
          <vc-icon :icon="item.icon" size="s"></vc-icon>
          <div class="vc-blade__toolbar-item-title">{{ item.title }}</div>
        </div>
      </template>
    </div>

    <div v-if="breadcrumbs" class="vc-blade__breadcrumbs">
      <template v-for="(item, i) in breadcrumbs">
        <div
          class="vc-blade__breadcrumbs-item"
          :class="{
            'vc-blade__breadcrumbs-item_disabled': item.disabled,
            'vc-blade__breadcrumbs-item_current': i === breadcrumbs.length - 1,
          }"
          :key="item.id"
        >
          <vc-icon class="vc-blade__breadcrumbs-item-icon" v-if="item.icon" :icon="item.icon" size="s"></vc-icon>
          <div class="vc-blade__breadcrumbs-item-title">{{ item.title }}</div>
        </div>
      </template>
    </div>

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
      },

      breadcrumbs: {
        type: Array,
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
