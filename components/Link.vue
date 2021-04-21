<template lang="pug">
nuxt-link.vc-Link(:to="to")
  slot
</template>

<script>
  export default {
    props: ["to"],
  };
</script>
