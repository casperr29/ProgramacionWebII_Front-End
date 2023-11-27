import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HeaderAdmin({funTitleFilter}) {
  let navigateTo = useNavigate();

  const [searchText, setSearchText] = useState('');

  function setTitleFilter(e){
    e.preventDefault();
    funTitleFilter(searchText);
  }


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

      <form className="header-form flex-fill" onSubmit={(e) => setTitleFilter(e)}>
        <input
          className="flex-fill"
          type="text"
          placeholder="Buscar..."
          onChange={(e) => setSearchText(e.target.value)}
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
          src="/assets/approve-news.png"
          onClick={() => {
            navigateTo('/aprobararticulo');
          }}
          alt="Crear-Publicacion-img"
        ></img>

        <img
          className="header-icon"
          src="/assets/videogame.png"
          onClick={() => {
            navigateTo('/crearvideojuego');
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
          className="header-icon admin-only"
          src="/assets/block-user.png"
          onClick={() => {
            navigateTo('/eliminarusuario');
          }}
          alt="Eliminar-Usuario-img"
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
export default HeaderAdmin;
