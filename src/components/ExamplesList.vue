<template>
  <div class="list row">
    <div class="col-md-6">
      <h4> Examples Inscritos </h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(explorer, index) in explorers"
          :key="index"
          @click="setActiveExplorer(explorer, index)"
        >
          {{ explorer.name }}
        </li>

      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentExplorer">
        <h4>Example</h4>
        <div>
          <br><label><strong>Nombre:</strong></label> {{ currentExplorer.name}}
          <br><label><strong>Language:</strong></label> {{ currentExplorer.lang}}
          <br><label><strong>Mission Commander:</strong></label> {{ currentExplorer.missionCommander}}
          <br><label><strong>Enrollments:</strong></label> {{ currentExplorer.enrollments}}
          <br><label><strong>Certification:</strong></label> {{ currentExplorer.hasCertification}}
        </div>
        <router-link :to="'/example/' + currentExplorer.id" class="btn btn-info"> Editar</router-link>
      </div>
      <div v-else>
        <br />
        <p> Selecciona un explorer.</p>
      </div>
    </div>
  </div>
</template>
<script>

import ExampleService from "../services/ExampleService";

export default {
  name: "explorer-list",
  data() {
    return {
      tutorials: [],
      explorers: [],
      currentTutorial: null,
      currentExplorer: null,
      currentIndex: -1,
      title: "",
      explorerId: ""
    };
  },
  methods: {
    getAllExplorers(){
      ExampleService.getAll()
        .then(response => {
          this.explorers = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    setActiveExplorer(explorer, index) {
      this.currentExplorer= explorer;
      this.currentIndex = explorer? index : -1;
    }
  },
  mounted() {
    this.getAllExplorers();
  }
};
</script>
