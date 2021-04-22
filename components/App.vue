<template lang="pug">
.vc-app
  .vc-app__left
    slot(name="left")

  .vc-app__right
    vc-app-bar
      slot(name="top")

    vc-container
      slot
</template>
