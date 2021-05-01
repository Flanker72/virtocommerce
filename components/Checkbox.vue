<template>
  <div class="vc-checkbox">
    <label class="vc-checkbox__label">
      <input type="checkbox" class="vc-checkbox__input" />
    </label>
  </div>
</template>

<script>
  export default {
    props: {
      checked: {
        type: Boolean,
      },
    },
  };
</script>
