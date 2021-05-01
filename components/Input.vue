<template>
  <div class="vc-input">
    <input class="vc-input__field" :class="{ 'vc-input__field_clearable': clearable }" :placeholder="placeholder" />
  </div>
</template>

<script>
  export default {
    props: {
      placeholder: {
        type: String,
      },

      value: {
        type: String,
      },

      clearable: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>
