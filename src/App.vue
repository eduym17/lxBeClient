<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-light bg-white">
      <router-link to="/" class="navbar-brand">LaunchX</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/explorers" class="nav-link">Explorers</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Agregar Explorer</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/stacks" class="nav-link">Stacks Feature</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/addstack" class="nav-link">Agregar stack user</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/examples" class="nav-link">Extras (useless)</router-link>
        </li>
      </div>
    </nav>
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "app"
};
</script>
