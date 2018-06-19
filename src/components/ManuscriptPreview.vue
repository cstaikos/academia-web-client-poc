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
  .manuscript-preview {
    height: 50px;
    padding: 15px;
    margin: 15px;
    border: 2px solid #c9c7c7;
    border-radius: 5px;
    background-color: #e8e8e8;
    list-style-type: none;
  }
</style>
