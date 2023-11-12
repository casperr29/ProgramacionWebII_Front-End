import React from "react";
import "../Components/Articulo.css";
import { useNavigate } from "react-router-dom";

const Articulo = () => {
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
      <div class="header-1">
        <img
          className="header-logo"
          src="/assets/LogoFinal1.png"
          onClick={routeChange}
          alt="header-logo"
        ></img>
        <a href="home" class="btn">
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
        <a href="eliminarusuario" class="btn">
          {" "}
        </a>
        <img
          className="header-icon"
          src="/assets/page.png"
          onClick={routeChangcrearv}
          alt="header-icon"
        ></img>
        <a href="crearvideojuego" class="btn">
          {" "}
        </a>
        <img
          className="header-icon"
          src="/assets/newusericon.png"
          onClick={routeChangeuser}
          alt="Perfil-de-usuario"
        ></img>
        <a href="login" class="btn">
          {" "}
        </a>
        <img
          className="header-icon"
          src="/assets/cerrar-sesion.png"
          onClick={routeChangebye}
          alt="header-icon"
        ></img>
        <a href="login" class="btn">
          {" "}
        </a>
      </div>
      <div className="container">
        <div className="container-article-comments">
          <div className="container-article">
            <img
              className="noticia-img"
              src="/assets/imagen3.png"
              alt="noticias-img"
            ></img>
            <label className="titulo">What is Lorem Ipsum?</label>
            <label className="descripcion">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </label>
            <div className="valoracion-article">
              <button className="Likes">
                <img
                  className="catpaw"
                  src="/assets/CatFootprint.png"
                  alt="catpaw"
                ></img>{" "}
                7{" "}
              </button>
              <button className="Dislikes">
                <img
                  className="catpaw"
                  src="/assets/CatFootprint.png"
                  alt="catpaw"
                ></img>{" "}
                7{" "}
              </button>
            </div>
          </div>

          <div className="container-comments">
            <div className="inputComment">
              <h3>Comentarios</h3>
              <input
                type="texttarea"
                id="comment"
                name="comment"
                placeholder="Escribe un comentario..."
              ></input>
            </div>

            <div className="comments">
              <div className="comment-table-rectangle">
                <img
                  className="profile-img"
                  src="/assets/Woman_1.jpg"
                  alt="profile-img"
                ></img>
                <label className="comment">Why do we use it?</label>
              </div>
              <div className="comment-table-rectangle">
                <img
                  className="profile-img"
                  src="/assets/Woman_2.jpg"
                  alt="profile-img"
                ></img>
                <label className="comment">Where does it come from?</label>
              </div>
              <div className="comment-table-rectangle">
                <img
                  className="profile-img"
                  src="/assets/Man_1.jpg"
                  alt="profile-img"
                ></img>
                <label className="comment">Where can I get some?</label>
              </div>
            </div>
          </div>
        </div>

        <div className="noticias-container">
          <div className="noticias-table-rectangle">
            <img
              className="noticias-img"
              src="/assets/imagen1.png"
              alt="noticias-img"
            ></img>
            <label className="titulo">Titulo</label>
          </div>
          <div className="noticias-table-rectangle">
            <img
              className="noticias-img"
              src="/assets/imagen3.png"
              alt="noticias-img"
            ></img>
            <label className="titulo">Titulo</label>
          </div>
          <div className="noticias-table-rectangle">
            <img
              className="noticias-img"
              src="/assets/image2.png"
              alt="noticias-img"
            ></img>
            <label className="titulo">Titulo</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articulo;
