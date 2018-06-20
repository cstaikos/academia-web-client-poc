<template lang="html">
  <li class="manuscript-preview">
    <router-link :to="{ name: 'manuscript-detail', params: {manuscriptId: manuscript.id} }">
      {{ manuscript.title }}
      </router-link>
  </li>
</template>

<script>
export default {
  name: 'manuscript-preview',
  props: {
    manuscript: {type: Object, required: true}
  }
}
</script>

<style lang="scss">
  @import 'styles/global-settings.scss';

  .manuscript-preview {
    height: 50px;
    padding: 15px;
    margin: 15px;
    border: 1px solid $color-primary-2;
    border-radius: 5px;
    background-color: $color-primary-0;
    list-style-type: none;
  }
</style>
