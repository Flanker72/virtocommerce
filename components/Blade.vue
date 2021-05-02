<template>
  <div class="vc-blade" :style="{ width: `${width}px` }" :class="{ 'vc-blade_expanded': expanded }">
    <div class="vc-blade__topbar vc-flex-shrink_0">
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

    <div class="vc-blade__header vc-flex-shrink_0">
      <div class="vc-blade__header-icon"><vc-icon :icon="icon" size="xxl"></vc-icon></div>
      <div class="vc-blade__header-info">
        <div class="vc-blade__header-title" :class="{ 'vc-blade__header-title_only': !subtitle }">{{ title }}</div>
        <div class="vc-blade__header-subtitle" v-if="subtitle">{{ subtitle }}</div>
      </div>
    </div>

    <div v-if="toolbarItems" class="vc-blade__toolbar vc-flex-shrink_0">
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

    <vc-breadcrumbs
      v-if="breadcrumbs"
      class="vc-padding_l vc-padding-bottom_none vc-flex-shrink_0"
      :items="breadcrumbs"
    ></vc-breadcrumbs>

    <div v-if="searchable || filterable" class="vc-blade__searchbar vc-padding_l vc-flex-shrink_0">
      <div v-if="filterable" class="vc-blade__searchbar-filter"></div>
      <div class="vc-blade__searchbar-search">
        <vc-input placeholder="Search keywords" clearable="clearable"></vc-input>
      </div>
      <div v-if="filterable" class="vc-blade__searchbar-counter">
        <span class="vc-blade__searchbar-counter-label">Count:</span>
        <span class="vc-blade__searchbar-counter-value">4</span>
      </div>
    </div>

    <slot></slot>
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
      },

      filterable: {
        type: Boolean,
      },
    },

    data() {
      return {
        expanded: false,
      };
    },
  };
</script>
