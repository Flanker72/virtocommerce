<template>
  <vc-blade
    icon="cloud"
    title="B2B-mixed (virtual)"
    width="600"
    :toolbarItems="toolbarItems"
    :breadcrumbs="breadcrumbs"
    :searchable="true"
    :filterable="true"
    @close="$store.commit('closeBlade')"
  >
    <vc-table :headers="headers" :items="items" :multiselect="true">
      <template v-slot:item_actions>
        <vc-icon icon="ellipsis-v" style="color: #43b0e6"></vc-icon>
      </template>

      <template v-slot:item_img="itemData">
        <img :src="itemData.item.img" class="vc-fill_width" />
      </template>

      <template v-slot:item_name="itemData">
        <div class="vc-flex vc-flex-column">
          <div class="vc-font-size_m vc-ellipsis">{{ itemData.item.name }}</div>
          <div class="vc-font-size_s vc-ellipsis">{{ itemData.item.description }}</div>
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

        breadcrumbs: [
          {
            id: 0,
            title: "Back",
            icon: "arrow-left",
          },
          {
            id: 1,
            title: "Electronics",
          },
          {
            id: 2,
            title: "Desktop",
          },
        ],

        headers: [
          {
            id: "actions",
            title: "",
            width: 30,
            class: "vc-table__body-cell_bordered",
          },
          {
            id: "img",
            title: "Pic",
            width: 60,
            class: "vc-padding-right_none",
          },
          {
            id: "name",
            title: "Name",
            sortable: true,
          },
          {
            id: "sku",
            title: "SKU",
            sortable: true,
            width: 100,
          },
        ],

        items: [
          {
            id: 1,
            img: "/images/1.jpg",
            name: "Lenovo IdeaCentre 310S-08",
            description: "Physical",
            sku: "990555005",
          },
          {
            id: 2,
            img: "/images/2.jpg",
            name: "BLU Win HD LTE X150Q 8GB",
            description: "Physical",
            sku: "003578948",
          },
          {
            id: 3,
            img: "/images/3.jpg",
            name: "Samsung Galaxy S6 SM-G920F 32GB",
            description: "Physical",
            sku: "334590-095",
          },
          {
            id: 4,
            img: "/images/4.jpg",
            name: "DJI Phantom 3 Professional Quadcopter",
            description: "Physical",
            sku: "000545432",
          },
          {
            id: 5,
            img: "/images/5.jpg",
            name: "3DR X8-M Octocopter for Visual-Spectr",
            description: "Physical",
            sku: "435344443",
          },
        ],
      };
    },
  };
</script>
