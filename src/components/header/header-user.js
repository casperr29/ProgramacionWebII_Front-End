import React from 'react';
import { useNavigate } from 'react-router-dom';

function HeaderUser() {
  let navigateTo = useNavigate();
  return (
    <div className="header-1">
      <img
        className="header-logo"
        src="/assets/LogoFinal1.png"
        onClick={() => {
          useNavigate('/home');
        }}
        alt="header-logo"
      ></img>

      <input
        className="header-inputs"
        type="text"
        placeholder="Buscar..."
      ></input>

      <img
        className="header-icon"
        src="/assets/page.png"
        onClick={() => {
          navigateTo('/escribirarticulo');
        }}
        alt="Crear-Publicacion-img"
      ></img>

      <img
        className="header-icon"
        src="/assets/newusericon.png"
        onClick={() => {
          navigateTo('/perfil');
        }}
        alt="Perfil-de-usuario-img"
      ></img>

      <img
        className="header-icon"
        src="/assets/cerrar-sesion.png"
        onClick={() => {
          navigateTo('/login');
        }}
        alt="Cerrar-sesion-img"
      ></img>
    </div>
  );
}

export default HeaderUser;
