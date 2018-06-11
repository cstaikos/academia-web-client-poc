<template lang="html">
  <div v-if="isLoading" class="loading-bar">
    Loading content...
  </div>
</template>

<script>
export default {
  name: 'loading-bar',
  computed: {
    isLoading() {
      return this.$store.state.isLoading
    }
  }
}
</script>

<style lang="css">
  .loading-bar {
    background-color: azure;
    height: 30px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  }
</style>
