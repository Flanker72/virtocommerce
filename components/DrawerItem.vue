<template lang="pug">
.vc-drawer-item(@click="$emit('click')")
  .vc-drawer-item__handler(:class="{ 'vc-drawer-item__handler_enabled' : !sticky }") :
  .vc-drawer-item__icon(v-if="icon") {{ icon }}
  .vc-drawer-item__title
    slot
</template>

<script>
export default {
  props: {
    sticky: {
      type: Boolean,
      default: false
    },

    icon: {
      type: String
    },

    title: {
      type: String
    }
  }
}
</script>
