<template lang="html">
  <div class="manuscript-preview">
    <span class="manuscript-title">{{ manuscript.title }}</span>
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
    .manuscript-title {
      
    }
  }
</style>
