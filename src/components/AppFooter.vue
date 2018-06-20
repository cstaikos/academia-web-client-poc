<template>
  <footer class="footer">
    <div class="row">
      <div class="col-xs-6 col-sm-4 col-md-3">
        Link 1
      </div>
      <div class="col-xs-6 col-sm-4 col-md-3">
        Link 2
      </div>
      <div class="col-xs-6 col-sm-4 col-md-3">
        Link 3
      </div>
      <div class="col-xs-6 col-sm-4 col-md-3">
        Link 4
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'app-footer'
}
</script>

<style lang="scss">
  @import 'styles/global-settings.scss';

  .footer {
    background-color: $color-complement-3;
  }
</style>
