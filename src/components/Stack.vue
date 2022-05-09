<template>
<h4>Stack user</h4>
  <div v-if="currentUser" class="edit-form">
    <form>
      <div class="form-group">
        <label for="username">Username</label>
        <input disabled type="text" class="form-control" id="username"
          v-model="currentUser.username"
        />
      </div>
      <div class="form-group">
        <label for="name">Nombre</label>
        <input type="text" class="form-control" id="name"
          v-model="currentUser.name"
        />
      </div>
      <div class="form-group">
        <label for="mainStack">Main stack</label>
        <input type="text" class="form-control" id="mainStack"
          v-model="currentUser.mainStack"
        />
      </div>
      <div class="form-group">
        <label for="enrollment">Current enrollment</label>
        <input disabled type="text" class="form-control" id="enrollment"
          v-model="currentUser.currentEnrollment"
        />
      </div>
      <div class="form-group">
        <label for="certification">Azure certification </label>
        <input disabled type="text" class="form-control" id="certification"
          v-model="currentUser.hasAzureCertification"
        />
      </div>
    </form>
    <button class="btn btn-danger mr-2" @click="deleteUser">
      Eliminar user
    </button>
    <button type="submit" class="btn btn-info mr-2" @click="updateUser">
      Actualizar
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p> Selecciona un user. </p>
  </div>
</template>
<script>
import StackService from "../services/StackService";
export default {
  name: "user",
  data() {
    return {
      currentUser: null,
      message: ''
    };
  },
  methods: {
    getUser(id) {
      StackService.get(id)
        .then(response => {
          this.currentUser= response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteUser() {
      StackService.delete(this.currentUser.id)
      .then(response => {
        console.log(response.data);
        this.$router.push({ name: "stacks" });
      })
      .catch(e => {
          console.log(e);
      });
    },
    updateUser() {
      StackService.update(this.currentUser.id, this.currentUser)
        .then(response => {
          console.log(response.data);
          this.message = 'Se actualizó correctamente';
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getUser(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
