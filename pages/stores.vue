<template>
  <vc-blade
    icon="archive"
    title="Stores"
    subtitle="Manage stores"
    width="400"
    :closable="false"
    :toolbarItems="toolbarItems"
    :searchable="true"
  >
    <vc-table :headers="headers" :items="items" :multiselect="true">
      <template v-slot:item_actions>
        <vc-icon icon="ellipsis-v" style="color: #43b0e6"></vc-icon>
      </template>

      <template v-slot:item_name="itemData">
        <div class="vc-flex vc-flex vc-flex-align_center vc-fill_width">
          <vc-icon :icon="itemData.item.icon" size="xl" style="color: #a5a5a5"></vc-icon>
          <div class="vc-font-size_m vc-font-weight_bold vc-flex-grow_1 vc-margin-horizontal_m">
            {{ itemData.item.name }}
          </div>
          <vc-icon icon="chevron-right" style="color: #a5a5a5"></vc-icon>
        </div>
      </template>
    </vc-table>
  </vc-blade>
</template>

<script>
  export default {
    data() {
      return {
        toolbarItems: [
          { id: 1, icon: "sync-alt", title: "Refresh" },
          { id: 2, icon: "plus", title: "Add" },
        ],

        headers: [
          {
            id: "actions",
            title: "",
            width: 30,
            class: "vc-table__body-cell_bordered",
          },
          {
            id: "name",
            title: "Name",
            sortable: true,
          },
        ],

        items: [
          {
            id: 1,
            icon: "cloud",
            name: "B2B-mixed (virtual)",
          },
          {
            id: 2,
            icon: "folder",
            name: "Clothing",
          },
          {
            id: 3,
            icon: "folder",
            name: "Desktops",
          },
        ],
      };
    },
  };
</script>
