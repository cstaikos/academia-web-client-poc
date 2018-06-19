<template lang="html">
  <div class="manuscript-preview">
    <router-link :to="{ name: 'manuscript-detail', params: {manuscriptId: manuscript.id} }">
      {{ manuscript.title }}
      </router-link>
  </div>
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
    border: 1px solid black;

    .manuscript-title {
      text-align: left;
      font-size: 30px;
      display: block;
    }
  }
</style>
