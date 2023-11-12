import React, { useState } from "react";
import axios from "axios";
import "../css/createcuenta.css";
import api from "../api.json";
import { useNavigate } from "react-router-dom";

const url = api.link;

const CrearCuenta = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigateLogin = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(url + "users/register", {
        correo_usuario: email,
        nombre_usuario: username,
        password_usuario: password,
        tipo_usuario: false,
      });
      console.log(response.data);
      let pathLogin = "login";
      navigateLogin(`/${pathLogin}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="background">
      <div className="Crearcuentarectangle">
        <img className="Crearcuentalogo" src="assets/LogoFinal1.png"></img>
        <form onSubmit={registerUser}>
          <br></br>

          <input
            onChange={(e) => setEmail(e.target.value)}
            className="Crearcuentainputs"
            type="email"
            placeholder="Correo Electronico"
          ></input>
          <br></br>
          <br></br>
          <br></br>
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="Crearcuentainputstext"
            id="nombreusuarioregistro"
            type="text"
            placeholder="Nombre de Usuario"
          ></input>
          <br></br>
          <br></br>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="Crearcuentainputs"
            type="password"
            placeholder="Contraseña"
          ></input>
          <br></br>
          <br></br>
          <input
            className="Crearcuentasubmit"
            type="submit"
            placeholder="Registrate"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default CrearCuenta;
