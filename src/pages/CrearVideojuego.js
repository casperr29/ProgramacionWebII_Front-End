import React from "react";
import axios from "axios";
import "../Components/CrearVideojuego.css";
import api from "../api.json";
import { useNavigate } from "react-router-dom";

const CrearVideojuego = () => {
 

  /*funcion para ir al home*/
  let navigateHOME = useNavigate();
  const routeChange = () => {
    let pathHOME = "home";
    navigateHOME(`/${pathHOME}`);
  };
  /*funcion para ir al eliminarusuario*/
  let navigateeliminarusuario = useNavigate();
  const routeChangeeliminarusuario = () => {
    let patheliminarusuario = "eliminarusuario";
    navigateeliminarusuario(`/${patheliminarusuario}`);
  };

  /*funcion para ir al crearvideojuego*/
  let navigatecrearv = useNavigate();
  const routeChangcrearv = () => {
    let pathcrearv = "crearvideojuego";
    navigatecrearv(`/${pathcrearv}`);
  };

  /*funcion para ir al cerrarsesión*/
  let navigatebye = useNavigate();
  const routeChangebye = () => {
    let pathbye = "login";
    navigatebye(`/${pathbye}`);
  };

   /*funcion para ir al perfil*/
   let navigateuser = useNavigate();
   const routeChangeuser = () => {
     let pathuser = "perfil";
     navigateuser(`/${pathuser}`);
   };

  return (
    <div>
      <img
        className="backgroundeliminate"
        src="/assets/Backgroundimg.png"
        alt="Backgroundimg"
      ></img>
      <div className="header-1">
        <img
          className="header-logo"
          src="/assets/LogoFinal1.png"
          onClick={routeChange}
          alt="header-logo"
        ></img>
        <a href="home" className="btn">
          {" "}
        </a>
        <input
          className="header-inputs"
          type="text"
          placeholder="Buscar..."
        ></input>
        <img
          className="header-icon"
          src="/assets/block-user.png"
          onClick={routeChangeeliminarusuario}
          alt="header-icon"
        ></img>
        <a href="eliminarusuario" className="btn">
          {" "}
        </a>
        <img
          className="header-icon"
          src="/assets/page.png"
          onClick={routeChangcrearv}
          alt="header-icon"
        ></img>
        <a href="crearvideojuego" className="btn">
          {" "}
        </a>
        <img
          className="header-icon"
          src="/assets/newusericon.png"
          onClick={routeChangeuser}
          alt="Perfil-de-usuario"
        ></img>
        <a href="login" className="btn">
          {" "}
        </a>
        <img
          className="header-icon"
          src="/assets/cerrar-sesion.png"
          onClick={routeChangebye}
          alt="header-icon"
        ></img>
        <a href="login" className="btn">
          {" "}
        </a>
      </div>
      <div className="container">
        <div className="container-newarticle">
          <form>
            <div className="inputBox-image">
              <label htmlFor="file" className="file-style">
                <img
                  className="img"
                  src="/assets/upload+to+cloud.png"
                  width="50"
                  alt="upload-img"
                ></img>
                <p>Subir foto</p>
              </label>
              <input type="file" id="file"></input>
            </div>
            <div className="content">
              <div className="inputBox-title">
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Titulo"
                ></input>
              </div>
              <div className="inputBox">
                <h3>Descripción</h3>
                <input
                  type="texttarea"
                  id="description"
                  name="description"
                  placeholder="¿Qué vas a contar?"
                ></input>
              </div>
            </div>
          </form>
        </div>

        <div className="noticias-container">
          <button className="Aprobar">
            <img
              className="catpaw"
              src="/assets/CatFootprint.png"
              alt="catpaw"
            ></img>{" "}
            Publicar
          </button>
          <button className="Borrar">
            <img
              className="catpaw"
              src="/assets/CatFootprint.png"
              alt="catpaw"
            ></img>{" "}
            Borrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CrearVideojuego;
