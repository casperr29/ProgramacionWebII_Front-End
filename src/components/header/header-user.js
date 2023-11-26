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
          navigateTo('/home');
        }}
        alt="header-logo"
      ></img>

      <form className="header-form flex-fill">
        <input
          className="flex-fill"
          type="text"
          placeholder="Buscar..."
        ></input>
        <button className="search-btn" type="submit">
          <img src="/assets/search.png"></img>
        </button>
      </form>

      <div className="header-icon-container">
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
    </div>
  );
}

export default HeaderUser;
