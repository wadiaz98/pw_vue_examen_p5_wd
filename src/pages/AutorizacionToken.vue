<template>
  <h1>Generar Token</h1>
  <div class="container">
    <div class="token">
      <label>Semilla</label>
      <input type="text" v-model="semilla" placeholder="Ingrese su semilla" />
      <label>Tiempo de expiración</label>
      <input type="text" v-model="tiempo" placeholder="Ingrese el tiempo" />
      <label>Token:</label>
      <label id="idToken">{{ token }}</label>
      <button @click="obtenerToken">Generar</button>
    </div>
  </div>
</template>

<script>
import { obtenerTokenFachada } from "../helpers/clienteAutorizacion.js";
export default {
  components: {
    obtenerTokenFachada,
  },
  data() {
    return {
      semilla: null,
      tiempo: null,
      token: null,
    };
  },
  methods: {
    async obtenerToken() {
      const tokenBody = {
        jwtSemilla: this.semilla,
        jwtExpirationMs: this.tiempo,
      };
      this.token = await obtenerTokenFachada(tokenBody);
      console.log("Se obtuvo el token", this.token);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.token {
  display: grid;
  align-items: center;
  margin-bottom: 20px;
  background: rgb(5, 255, 222);
  padding: 20px
}

label {
  display: inline-block;
  width: 200px;
  margin-bottom: 5px;
  white-space: pre-line;
  
}

#idToken {
  
  height: 200px;
  border: 2px solid black;
  background: #fff;
  padding: 5px;
  
  word-wrap: break-word;
}
input {
  margin-bottom: 10px;
  padding: 5px;
  width: 200px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

* {
  border-radius: 10px;
}
</style>