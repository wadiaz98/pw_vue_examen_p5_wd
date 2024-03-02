<template>
  <h1>Insertar Estudiante</h1>
  <div class="container">
    <div class="token">
        <label>Token</label>
        <input type="text" v-model="token" placeholder="Inserte su token aqui">
    </div>
    <div class="formularioInsertar">
      <form class="form">
        <p type="Nombre:">
          <input v-model="nombre" type="text" placeholder="Nombre" />
        </p>
        <p type="Apellido:">
          <input v-model="apellido" type="text" placeholder="Apellido" />
        </p>
        <p type="Cedula:">
          <input v-model="cedula" type="text" placeholder="Cedula" />
        </p>

        <button @click="insertar">Guardar</button>
      </form>
    </div>
  </div>
</template>

<script>
import { insertarFachada } from "../helpers/clienteEstudiante.js";
export default {
  components: {
    insertarFachada,
  },
  data() {
    return {
      id: null,
      nombre: null,
      apellido: null,
      cedula: null,
      token: null
    };
  },

  methods: {
    async insertar() {
      const estuBody = {
        nombre: this.nombre,
        apellido: this.apellido,
      };

      await insertarFachada(estuBody, this.token);
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(1, 450px);
}

input {
  width: 100%;
  border: 0;
  border-bottom: 2px solid #bebed2;
  background: none;
}

input:focus {
  border-bottom: 3px solid #78788c;
}

h2 {
  margin: 10px 0px;
  padding-bottom: 10px;
  width: 310px;
  color: #78788c;
  border-bottom: 3px solid #78788c;
}

p:before {
  content: attr(type);
  display: block;
  margin: 5px 2px;
  font-size: 16px;
  color: #5a5a5a;
}

.form {
  margin-top: 20px;
  width: 380px;
  height: 250px;
  background: #e6e6e6;
  border-radius: 8px;
  padding: 20px 30px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  box-shadow: 0 0 40px -10px #000;
}

button {
  border-radius: 5px;
  width: 80px;
  margin-top: 10px;
  justify-content: center;
}

button:hover {
  background-color: #d2d3d3;
}

</style>