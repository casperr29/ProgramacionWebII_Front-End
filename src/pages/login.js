import React, { useState } from "react";
import axios from "axios";
import "../css/landing.css";
import api from "../api.json";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const url = api.link;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigateHOME = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(url + "users/login", {
        correo_usuario: email,
        password_usuario: password,
      });

      console.log(response.data);
      const cookies = new Cookies();

      cookies.set("token", response.data.token, { path: "/" });
      cookies.set("userId", response.data.data._id, { path: "/" });
      let pathHOME = "home";
      navigateHOME(`/${pathHOME}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="background">
      <div className="login-rectangle">
        <img className="loginlogo" src="assets/LogoFinal1.png"></img>
        <form onSubmit={handleSubmit}>
          <br></br>

          <input
            className="login-inputs"
            type="email"
            placeholder="Correo Electronico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>
          <br></br>
          <input
            className="login-inputs"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <br></br>
          <input
            className="login-submit"
            type="submit"
            value="Iniciar Sesión"
          />
        </form>
      </div>
      <br></br>
      <div className="login-rectangle2">
        <label className="paregistro">
          ¿No tienes Cuenta? <a href="crearcuenta">Regístrate</a>
        </label>
      </div>
    </div>
  );
};

export default Login;
