<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <h3>Nuevo user</h3>
      <div class="form-group">
        <label for="name">Nombre</label>
        <input type="text"
        class="form-control"
        id="name"
        required
        v-model="user.name"
        name="name"
        >
      </div>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text"
        class="form-control"
        id="username"
        required
        v-model="user.username"
        name="username"
        >
      </div>
      <div class="form-group">
        <label for="mainStack">Main stack</label>
        <input type="text"
        class="form-control"
        id="mainStack"
        required
        v-model="user.mainStack"
        name="mainStack"
        >
      </div>
      <button @click="saveUser" class="btn btn-success">Agregar user</button>
    </div>
    <div v-else>
      <h4>User creado exitosamente.</h4>
      <button @click="newUser" class="btn btn-success">Add</button>
    </div>
  </div>
</template>

<script>
import StackService from "../services/StackService";
export default {
  name: "add-user",
  data() {
    return {
      user: {
        id: null,
        name: "",
        username: "",
        mainStack: ""
      },
      submitted: false
    };
  },
  methods: {
    saveUser() {
      var data = {
        name: this.user.name,
        username: this.user.username,
        mainStack: this.user.mainStack
      };
      StackService.create(data)
        .then(response => {
          this.user.id = response.data.id;
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    newUser() {
      this.submitted = false;
      this.user = {};
    }
  }
};
</script>

