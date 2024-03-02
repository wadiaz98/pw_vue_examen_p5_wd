import axios from "axios";

//Funciones
const insertar = async (body, token) => {
  const data = axios
    .post(`http://localhost:8080/API/v1.0/Inscripcion/estudiantes`, body,{
      headers:{
        'Authorization' : `Bearer ${token}`
      }
    })
    .then((r) => r.data);
  console.log(data);
};

const consultar = async (id,token) => {
  const data = axios
    .get(`http://localhost:8080/API/v1.0/Inscripcion/estudiantes/${id}`,{
      headers:{
        'Authorization' : `Bearer ${token}`
      }
    })
    .then((r) => r.data);
  console.log(data);
};

const consultarTodos = async (token) => {
  const data = axios
    .get(`http://localhost:8080/API/v1.0/Inscripcion/estudiantes`,{
      headers:{
        'Authorization' : `Bearer ${token}`
      }
    })
    .then((r) => r.data);
  console.log(data);
  return data
};

//Fachadas
export const insertarFachada = async (body, token) => {
  return await insertar(body, token);
};

export const consultarFachada = async (id, token) => {
  return await consultar(id,token);
};

export const consultarTodosFachada = async (token) => {
  return await this.consultarTodos(token);
};
