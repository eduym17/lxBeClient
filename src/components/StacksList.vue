<template>
<div class="list row">
  <div class="col-md-6">
    <h4>Users inscritos</h4>
    <ul class="list-group">
      <li class="list-group-item"
      :class="{ active: index == currentIndex }"
      v-for="(user, index) in users"
      :key="index"
      @click="setActiveUser(user, index)"
      >
        {{ user.username }}
      </li>
    </ul>
  </div>
  <div class="col-md-6">
    <div v-if="currentUser">
      <h4>Stack user</h4>
      <div>
        <br><label><strong>Nombre:</strong></label> {{ currentUser.name}}
        <br><label><strong>Username:</strong></label> {{ currentUser.username}}
        <br><label><strong>Main stack:</strong></label> {{ currentUser.mainStack}}
        <br><label><strong>Enrollment:</strong></label> {{ currentUser.currentEnrollment}}
        <br><label><strong>Azure certification:</strong></label> {{ currentUser.hasAzureCertification}}
      </div>
      <router-link :to="'/stack/' + currentUser.id" class="btn btn-info">Editar</router-link>
    </div>
    <div v-else>
      <br />
      <p>Selecciona un user.</p>
    </div>
  </div>
</div>
</template>
<script>
import StackService from "../services/StackService";

export default {
  name: "stacks",
  data() {
    return {
      tutorials: [],
      users: [],
      currentTutorial: null,
      currentUser: null,
      currentIndex: -1,
      title: "",
      userId: ""
    };
  },
  methods: {
    getAllUsers() {
      StackService.getAll()
      .then(response => {
        this.users = response.data;
      })
      .catch(e => {
        console.log(e);
      })
    },
    setActiveUser(user, index) {
      this.currentUser = user;
      this.currentIndex = user ? index : -1;
    }
  },
  mounted() {
    this.getAllUsers();
  }
}
</script>
