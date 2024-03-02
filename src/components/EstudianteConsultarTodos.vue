<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Cédula</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="estudiante in estudiantes" :key="estudiante.id">
          <td>{{ estudiante.id }}</td>
          <td>{{ estudiante.nombre }}</td>
          <td>{{ estudiante.apellido }}</td>
          <td>{{ estudiante.cedula }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import consultarFachada from "../helpers/clienteEstudiante.js";
import consultarTodosFachada from "../helpers/clienteEstudiante.js";
export default {
  components: {
    consultarFachada,
    consultarTodosFachada,
  },
  data() {
    return {
      estudiantes: [],
      id: null,
    };
  },
  methods: {
    async obtenerEstudiantes(token) {
      this.estudiantes = await consultarTodosFachada(token);
    },

    async insertarEstudiante(token) {
      this.estudiantes.push(
        await consultarFachada(this.estudiantes.length + 1, token)
      );
    },
  },
};
</script>

<style>

table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  border: 1px solid #000000;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
</style>