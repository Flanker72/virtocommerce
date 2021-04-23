<template>
  <nuxt-link class="vc-link" :to="to">
    <slot></slot>
  </nuxt-link>
</template>

<script>
  export default {
    props: ["to"],
  };
</script>
