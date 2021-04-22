<template lang="pug">
nuxt-link.vc-link(:to="to")
  slot
</template>

<script>
  export default {
    props: ["to"],
  };
</script>
