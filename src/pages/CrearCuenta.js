import React, { useState } from 'react';
import axios from 'axios';
import '../css/landing.css';
import api from '../utilities/api.json';
import Utilities from '../utilities/utilities.services';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

const url = api.link;

const CrearCuenta = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();

  function validateRegisterForm() {
    let email = document.forms['registerForm']['registerIEmail'].value,
      username = document.forms['registerForm']['registerIUsername'].value,
      pass = document.forms['registerForm']['registerIPass'].value;

    if (!Utilities.REGEX_VALD_EMAIL.pattern.test(email)) {
      alert('Ingrese un email valido');
      return false;
    }
    if (username === '') {
      alert('Ingrese un nombre de usuario valido');
      return false;
    }
    if (!Utilities.REGEX_VALD_PASSWORD.pattern.test(pass)) {
      alert(Utilities.MSG_NOT_VALID_PASSWORD);
      return false;
    }

    return true;
  }

  const registerUser = async (e) => {
    e.preventDefault();

    if (!validateRegisterForm()) return;

    try {
      const response = await axios.post(url + 'users/register', {
        correo_usuario: email,
        nombre_usuario: username,
        password_usuario: password,
        tipo_usuario: false,
      });

      console.log(response.data);

      const cookies = new Cookies();
      cookies.set('token', response.data.token, { path: '/' });
      cookies.set('userId', response.data.data._id, { path: '/' });

      navigate('/login');
    } catch (error) {
      /*MANEJO DE ERRORES Y ADVERTENCIAS*/
      const status = error.response.status;

      if (status !== 200 && status) {
        if (status === 404) {
          alert('El correo ingresado no está asociado a ninguna cuenta');
        }
        if (status === 401) {
          alert(Utilities.MSG_ALREADY_REGISTERED_USER);
        }
      }
      console.error(error.response.data.message);
    }
  };

  return (
    <div className="background">
      <div className="Crearcuentarectangle">
        <img
          className="Crearcuenta-logo"
          src="assets/LogoFinal1.png"
          alt="LogoMewNews"
        ></img>
        <form id="registerForm" name="registerForm" onSubmit={registerUser}>
          <input
            name="registerIEmail"
            id="registerIEmail"
            onChange={(e) => setEmail(e.target.value)}
            className="Crearcuenta-inputs"
            type="email"
            placeholder="Correo Electronico"
          ></input>

          <input
            name="registerIUsername"
            id="registerIUsername"
            onChange={(e) => setUsername(e.target.value)}
            className="Crearcuenta-inputs"
            placeholder="Nombre de Usuario"
          ></input>

          <input
            name="registerIPass"
            id="registerIPass"
            onChange={(e) => setPassword(e.target.value)}
            className="Crearcuenta-inputs"
            type="password"
            placeholder="Contraseña"
          ></input>

          <input
            className="Crearcuenta-submit"
            type="submit"
            placeholder="Registrate"
          ></input>
        </form>
        <label className="toggleLR">
          ¿Ya tienes una Cuenta?
          <p
            onClick={() => {
              navigate('/login');
            }}
          >
            Inicia sesión
          </p>
        </label>
      </div>
    </div>
  );
};

export default CrearCuenta;
