<template>
  <div class="vc-drawer-item" @click="$emit('click')">
    <div class="vc-drawer-item__handler" :class="{ 'vc-drawer-item__handler_enabled': !sticky }">
      <vc-icon icon="ellipsis-v" size="m" />
    </div>
    <div class="vc-drawer-item__icon" v-if="icon">
      <vc-icon :icon="icon" size="m" />
    </div>
    <div class="vc-drawer-item__title">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      sticky: {
        type: Boolean,
        default: false,
      },

      icon: {
        type: String,
      },

      title: {
        type: String,
      },
    },
  };
</script>
