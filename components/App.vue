<template>
  <div class="vc-app">
    <div class="vc-app__left">
      <slot name="left"></slot>
    </div>
    <div class="vc-app__right">
      <vc-app-bar>
        <template v-slot:banner>
          <slot name="banner"></slot>
        </template>
        <template v-slot:notification>
          <slot name="notification"></slot>
        </template>
      </vc-app-bar>

      <div class="vc-app__right-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
