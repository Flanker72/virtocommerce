<template>
  <div class="vc-app">
    <div class="vc-app__left">
      <slot name="left"></slot>
    </div>
    <div class="vc-app__right">
      <vc-app-bar>
        <slot name="banner" slot="banner"></slot>
        <slot name="notification" slot="notification"></slot>
      </vc-app-bar>
      <vc-container>
        <slot></slot>
      </vc-container>
    </div>
  </div>
</template>
