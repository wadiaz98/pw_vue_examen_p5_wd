<template>
  <div>
    <router-link to="/token">Token</router-link>
    <router-link to="/guardar">Guardar</router-link>
  </div>
</template>

<script>
import router from "../router/router";
export default {
  components: {
    router,
  },
};
</script>

<style>
div a {
  color: #2c3e50;
  margin: 0px 10px;
  font-weight: bold;
  border: solid;
  padding: 10px 10px;
  border-radius: 10px;
  background: orange;
}

.router-link-exact-active {
  background: rgb(240, 184, 240);
}
</style>