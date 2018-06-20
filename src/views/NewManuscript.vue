<template lang="html">
  <div class="new-manuscript">
    <form class="">
      <label for="title">
        Title:
        <input v-model="title" type="text" name="title" value="">
      </label>
      <button type="button" class="btn btn-primary" v-on:click="submitManuscript">Submit</button>
    </form>
  </div>
</template>

<script>
import ApiService from '../common/api.service'
import router from '../router'

export default {
  name: 'new-manuscript',
  data () {
    return {
      "title": null //TODO Use a full model where title etc are props
    }
  },
  methods: {
    submitManuscript() {
      ApiService.createManuscript({title: this.$data.title})
      .then(({data}) => {
        router.push({name: 'home'})
      })
    }
  }
}
</script>

<style lang="scss">
  
</style>
