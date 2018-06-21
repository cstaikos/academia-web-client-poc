<template lang="html">
  <div class="new-manuscript">
    <h1>New Manuscript</h1>
    <form>
      <div class="form-group">
        <label for="title">
          Title:
        </label>
        <input v-model="title" type="text" name="title" class="form-control">
      </div>
      <div class="form-group">
        <label for="primary-discipline">Discipline</label>
        <select
          class="form-control"
          name="discipline"
          v-model="selectedPrimaryDiscipline"
          v-on:change="fetchSecondaryDisciplines($event)">
          <option value="">-- Select One -- </option>
          <option v-for="discipline in primaryDisciplines" :value="discipline.id">{{ discipline.name }}</option>
        </select>
      </div>
      <div class="form-group" v-if="primaryDisciplineSelected">
        <label for="secondary-discipline">Secondary Discipline</label>
        <select
          class="form-control"
          name="secondary-discipline"
          v-model="selectedSecondaryDiscipline">
          <option value="">-- Select One -- </option>
          <option v-for="secondaryDiscipline in secondaryDisciplines" :value="secondaryDiscipline.id">{{ secondaryDiscipline.name }}</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary" v-on:click="submitManuscript($event)">Submit</button>
    </form>
  </div>
</template>

<script>
import ApiService from '../common/api.service'
import router from '../router'

export default {
  name: 'new-manuscript',

  computed: {
    primaryDisciplineSelected() {
      return this.selectedPrimaryDiscipline != "";
    },

    getDiscipline() {
      if (this.$data.selectedSecondaryDiscipline != "") {
        return this.$data.selectedSecondaryDiscipline;
      }
      else {
        return this.$data.selectedPrimaryDiscipline;
      }
    }
  },

  data () {
    return {
      //TODO Use a full manuscript model and work with its props
      title: "",
      selectedPrimaryDiscipline: "",
      selectedSecondaryDiscipline: "",
      primaryDisciplines: [],
      secondaryDisciplines: []
    }
  },

  methods: {
    submitManuscript(event) {
      event.preventDefault();
      ApiService.createManuscript({
        title: this.$data.title,
        discipline_id: this.getDiscipline
      })
      .then(({ data }) => {
        router.push({name: 'home'})
      })
    },

    fetchPrimaryDisciplines() {
      ApiService.getPrimaryDisciplines()
      .then(({ data }) => {
        this.primaryDisciplines = data;
      })
    },

    fetchSecondaryDisciplines(event) {
      let disciplineId = event.target.value;
      ApiService.getSecondaryDisciplines(disciplineId)
      .then(({ data }) => {
        this.secondaryDisciplines = data;
      })
    }
  },

  created() {
    this.fetchPrimaryDisciplines();
  }
}
</script>

<style lang="scss">
  @import 'styles/global-settings.scss';

</style>
