<template>
  <div class="vc-table">
    <div v-if="columns" class="vc-table__header">
      <div v-if="multiselect" class="vc-table__header-cell">
        <vc-checkbox></vc-checkbox>
      </div>
      <div
        v-for="item in columns"
        :key="item.id"
        class="vc-table__header-cell vc-flex vc-flex-justify_start vc-flex-align_center vc-flex-nowrap"
      >
        <div>{{ item.title }}</div>
        <div v-if="item.sortable" class="vc-table__header-cell_sort">
          <vc-icon size="xs" icon="sort-up"></vc-icon>
        </div>
      </div>
    </div>
    <div v-if="data" class="vc-table__content"></div>
  </div>
</template>

<script>
  export default {
    props: {
      columns: {
        type: Array,
      },

      data: {
        type: Array,
      },

      sortable: {
        type: Array,
      },

      multiselect: {
        type: Boolean,
      },
    },
  };
</script>
