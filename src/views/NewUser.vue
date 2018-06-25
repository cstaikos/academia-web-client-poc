<template lang="html">
  <div>
    <div class="row">
      <div class="col-12">
        <h1>Sign Up</h1>
        <form v-on:submit="createUser">
          <div class="form-group">
            <label for="firstName">First Name:</label>
            <input class="form-control" type="text" name="firstName">
            <label for="lastName">Last Name:</label>
            <input class="form-control" type="text" name="lastName">
            <label for="email">Email:</label>
            <input class="form-control" type="text" name="email">
            <label for="password">Password:</label>
            <input class="form-control" type="password" name="password">
          </div>
          <div class="form-group">
            <input class="form-control btn btn-primary" type="submit" name="submit" value="Sign Up">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ApiService from '../common/api.service'
import router from '../router'

export default {
  name: 'new-user',

  methods: {
    createUser(event) {
      event.preventDefault();
      let elements = event.target.elements;

      let user = {
        first_name: elements.firstName.value,
        last_name: elements.lastName.value,
        email: elements.email.value,
        password: elements.password.value
      };

      let credentials = {
        user: elements.email.value,
        password: elements.password.value
      }

      ApiService.createUser({user})
      .then(() => {
        this.$store.dispatch('login', credentials)
        .then(() => {
          router.push({name: 'home'})
        });
      })
    }
  }
}
</script>

<style lang="css">
</style>
