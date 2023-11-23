import React, { useState } from 'react';
import axios from 'axios';
import api from '../utilities/api.json';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import '../css/landing.css';

const url = api.link;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();

  function validateLoginForm() {
    let email = document.forms['loginForm']['loginIEmail'].value,
      pass = document.forms['loginForm']['loginIPass'].value;

    if (email === '') {
      alert('Ingrese un email valido');
      return false;
    }
    if (pass === '') {
      alert('Ingrese la contraseña');
      return false;
    }

    return true;
  }

  const loginUser = async (e) => {
    e.preventDefault();

    if (!validateLoginForm()) return;

    try {
      const response = await axios.post(url + 'users/login', {
        correo_usuario: email,
        password_usuario: password,
      });

      const cookies = new Cookies();
      cookies.set('token', response.data.token, { path: '/' });
      cookies.set('userId', response.data.data._id, { path: '/' });

      navigate('/home');
    } catch (error) {
      /*MANEJO DE ERRORES Y ADVERTENCIAS*/
      const status = error.response.status;

      if (status !== 200 && status) {
        if (status === 404) {
          alert('El correo ingresado no está asociado a ninguna cuenta');
        }
        if (status === 401) {
          alert('El correo o la contraseña son incorrectos');
        }
      }
    }
  };

  return (
    <div className="background">
      <div className="login-rectangle">
        <img
          className="loginlogo"
          src="assets/LogoFinal1.png"
          alt="LogoMewNews"
        ></img>
        <form id="loginForm" name="loginForm" onSubmit={loginUser}>
          <input
            name="loginIEmail"
            id="loginIEmail"
            className="login-inputs"
            type="email"
            placeholder="Correo Electronico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            name="loginIPass"
            id="loginIPass"
            className="login-inputs"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            className="login-submit"
            type="submit"
            value="Iniciar Sesión"
          />
        </form>
        <label className="toggleLR">
          ¿No tienes Cuenta?
          <p
            onClick={() => {
              navigate('/crearcuenta');
            }}
          >
            Regístrate
          </p>
        </label>
      </div>
    </div>
  );
};

export default Login;
