import React from "react";
import "../Components/AprobarArticulo.css";
import { useNavigate } from "react-router-dom";

const AprobarArticulo = () => {
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
      <div className="noticias">
        <table className="noticias-table">
          <tr>
            <td>
              <div className="noticias-table-rectangle">
                <img
                  className="noticias-img"
                  src="/assets/imagen1.png"
                  alt="noticias-img"
                ></img>
                <br></br>
                <label className="titulo">Titulo 1</label>
                <br></br>
                <label>Descripción...</label>
              </div>
              <button className="Aprobar">
                <img
                  className="catpaw"
                  src="/assets/CatFootprint.png"
                  alt="catpaw"
                ></img>{" "}
                Aprobar
              </button>
              <button className="Borrar">
                <img
                  className="catpaw"
                  src="/assets/CatFootprint.png"
                  alt="catpaw"
                ></img>{" "}
                Borrar
              </button>
            </td>
            <td>
              <div className="noticias-table-rectangle">
                <img
                  className="noticias-img"
                  src="/assets/imagen3.png"
                  alt="noticias-img"
                ></img>
                <br></br>
                <label className="titulo">Titulo 1</label>
                <br></br>
                <label>Descripción...</label>
              </div>
              <button className="Aprobar">
                <img
                  className="catpaw"
                  src="/assets/CatFootprint.png"
                  alt="catpaw"
                ></img>{" "}
                Aprobar
              </button>
              <button className="Borrar">
                <img
                  className="catpaw"
                  src="/assets/CatFootprint.png"
                  alt="catpaw"
                ></img>{" "}
                Borrar
              </button>
            </td>
            <td>
              <div className="noticias-table-rectangle">
                <img
                  className="noticias-img"
                  src="/assets/image2.png"
                  alt="noticias-img"
                ></img>
                <br></br>
                <label className="titulo">Titulo 1</label>
                <br></br>
                <label>Descripción...</label>
              </div>
              <button className="Aprobar">
                <img
                  className="catpaw"
                  src="/assets/CatFootprint.png"
                  alt="catpaw"
                ></img>{" "}
                Aprobar
              </button>
              <button className="Borrar">
                <img
                  className="catpaw"
                  src="/assets/CatFootprint.png"
                  alt="catpaw"
                ></img>{" "}
                Borrar
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default AprobarArticulo;
