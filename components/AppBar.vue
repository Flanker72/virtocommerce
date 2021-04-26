<template>
  <div class="vc-app-bar">
    <div v-if="$slots['banner']" class="vc-app-bar__banner">
      <slot name="banner"></slot>
    </div>
    <div v-if="$slots['notification']" class="vc-app-bar__notification">
      <slot name="notification"></slot>
    </div>
    <vc-spacer v-else />
    <div v-if="toolbar" class="vc-app-bar__toolbar">
      <div v-for="item in toolbar" :key="item.id" class="vc-app-bar__toolbar-item">
        <vc-icon :icon="item.icon" size="xl"></vc-icon>
      </div>
    </div>
    <div class="vc-app-bar__account">
      <div class="vc-app-bar__account-image"></div>
      <div class="vc-app-bar__account-info">
        <div class="vc-app-bar__account-info-name">admin</div>
        <div class="vc-app-bar__account-info-role">Administrator</div>
      </div>
      <div class="vc-app-bar__account-chevron">
        <vc-icon icon="chevron-down" size="xl"></vc-icon>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      toolbar: {
        type: Array,
        default: [
          {
            id: "settings",
            icon: "cog",
          },
          {
            id: "help",
            icon: "life-ring",
          },
          {
            id: "bell",
            icon: "bell",
          },
        ],
      },
    },
  };
</script>
