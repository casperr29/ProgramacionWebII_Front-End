import React from 'react';
import '../css/home.css';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import api from '../utilities/api.json';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import NoticiasList from '../components/NoticiasList';

const Home = () => {
  const [validated, HasBeenValidated] = useState(false);
  const [auth, IsAuthorized] = useState(false);
  // const [newsData, setData] = useState(news);

  const url = api.link;
  //const storageUrl = api.storageUrl;

  const ValidateSession = useCallback(() => {
    HasBeenValidated(true);
  }, []);

  useEffect(() => {
    onLoad();
  });

  // AL CARGAR LA PAGINA
  async function onLoad() {
    const cookies = new Cookies();

    const config = {
      headers: { Authorization: `Bearer ${cookies.get('token')}` },
    };

    await axios
      .get(url + 'users/' + cookies.get('userId'), config)
      .then((response) => {
        IsAuthorized(true);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    ValidateSession();
  }

  /* Navegacion generica */
  let navigateTo = useNavigate();

  /* funcion para ir al home */
  const routeChangeHome = () => {
    navigateTo(`/${'home'}`);
  };

  /* funcion para ir al eliminarusuario */
  const routeChangeeliminarusuario = () => {
    navigateTo(`/${'eliminarusuario'}`);
  };

  /* funcion para ir al crearvideojuego */
  const routeChangcrearv = () => {
    navigateTo(`/${'crearvideojuego'}`);
  };

  /* funcion para ir al cerrarsesión */
  const routeChangebye = () => {
    navigateTo(`/${'login'}`);
  };

  /* funcion para ir al perfil */
  const routeChangeuser = () => {
    navigateTo(`/${'perfil'}`);
  };

  /* funcion para ir al articulo */
  // const routeChangearticulo = () => {
  //   navigateTo(`/${'articulo/'}`);
  // };

  // En caso de no estar logeado, lo envia a logearse
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
              onClick={routeChangeHome}
              alt="header-logo"
            ></img>

            <input
              className="header-inputs"
              type="text"
              placeholder="Buscar..."
            ></input>

            <img
              className="header-icon admin-only"
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
        <Navigate to={'/login'} replace={true} />
      )}
    </div>
  );
};
export default Home;
