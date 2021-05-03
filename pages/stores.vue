<template>
  <div class="vc-flex vc-flex-grow_1">
    <component v-for="blade in $store.state.blades" :key="blade.id" :is="blade.component"></component>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$store.commit("resetBlades");
      this.$store.commit("openBlade", {
        component: () => import("@/components/blade/StoreList.vue"),
      });
    },
  };
</script>
