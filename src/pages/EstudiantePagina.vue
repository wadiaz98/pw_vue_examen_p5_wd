<template>
  <h1>Guardar</h1>
  <EstudianteGaurdar />
  <EstudianteConsultar />
</template>

<script>
import EstudianteGaurdar from "../components/EstudianteInsertar.vue";
import EstudianteConsultar from "../components/EstudianteConsultarTodos.vue";
export default {
  components: {
    EstudianteGaurdar,
    EstudianteConsultar,
  },
};
</script>

<style>
</style>