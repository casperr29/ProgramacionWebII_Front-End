import React from "react";
import "../css/home.css";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import api from "../api.json";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import NoticiasList from "../Components/NoticiasList";

const Home = () => {
  let news = [];
  const [validated, HasBeenValidated] = useState(false);
  const [auth, IsAuthorized] = useState(false);
  const [newsData, setData] = useState(news);

  const url = api.link;
  const storageUrl = api.storageUrl;

  const ValidateSession = useCallback(() => {
    HasBeenValidated(true);
  }, []);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    const cookies = new Cookies();

    const config = {
      headers: { Authorization: `Bearer ${cookies.get("token")}` },
    };

    await axios
      .get(url + "users/" + cookies.get("userId"), config)
      .then((response) => {
        IsAuthorized(true);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    ValidateSession();
  }

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

  /*funcion para ir al articulo*/
  let navigatearticulo = useNavigate();
  const routeChangearticulo = () => {
    let patharticulo = "articulo/";
    navigatearticulo(`/${patharticulo}`);
  };

  if (!validated) {
    return null;
  }

  return (
    <div>
      {auth ? (
        <div>
          <img
            className="background"
            src="/assets/Backgroundimg.png"
            alt="background"
          ></img>
          <div className="header-1">
            <img
              className="header-logo"
              src="/assets/LogoFinal1.png"
              onClick={routeChange}
              alt="header-logo"
            ></img>

            <input
              className="header-inputs"
              type="text"
              placeholder="Buscar..."
            ></input>

            <img
              className="header-icon"
              src="/assets/block-user.png"
              onClick={routeChangeeliminarusuario}
              alt="Eliminar-Usuario-img"
            ></img>

            <img
              className="header-icon"
              src="/assets/page.png"
              onClick={routeChangcrearv}
              alt="Crear-Publicacion-img"
            ></img>

            <img
              className="header-icon"
              src="/assets/newusericon.png"
              onClick={routeChangeuser}
              alt="Perfil-de-usuario-img"
            ></img>

            <img
              className="header-icon"
              src="/assets/cerrar-sesion.png"
              onClick={routeChangebye}
              alt="Cerrar-sesion-img"
            ></img>
          </div>
          <div className="div-container1">
            <div className="categories">
              <table className="categoria-table">
                <tbody>
                  <tr>
                    <th>Categoria1</th>
                    <th>Categoria2</th>
                    <th>Categoria3</th>
                    <th>Categoria4</th>
                    <th>Categoria5</th>
                  </tr>
                </tbody>
              </table>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="noticiashome">
              <section className="noticias-table">
                <NoticiasList />
              </section>
            </div>
          </div>
        </div>
      ) : (
        <Navigate to={"/login"} replace={true} />
      )}
    </div>
  );
};
export default Home;
