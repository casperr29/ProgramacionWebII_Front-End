import React from 'react';
import '../css/Perfil.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import api from '../utilities/api.json';
import Cookies from 'universal-cookie';

const Perfil = () => {
  let user = {
    _id: 'null',
    nombre_usuario: 'null',
    correo_usuario: 'null',
    imagen_usuario: 'null',
  };

  const [validated, HasBeenValidated] = useState(false);

  const [auth, IsAuthorized] = useState(false);

  const [profileData, setData] = useState(user);

  const url = api.link;
  const storageUrl = api.storageUrl;

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    const cookies = new Cookies();

    const config = {
      headers: { Authorization: `Bearer ${cookies.get('token')}` },
    };

    await axios
      .get(url + 'users/' + cookies.get('userId'), config)
      .then((response) => {
        IsAuthorized(true);
        user._id = response.data.data._id;
        user.nombre_usuario = response.data.data.nombre_usuario;
        user.correo_usuario = response.data.data.correo_usuario;
        user.imagen_usuario =
          storageUrl + response.data.data.foto_usuario.file_name;
        setData(user);
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });

    HasBeenValidated(true);
  }

  /*funcion para ir al home*/
  let navigateHOME = useNavigate();
  const routeChange = () => {
    let pathHOME = 'home';
    navigateHOME(`/${pathHOME}`);
  };
  /*funcion para ir al eliminarusuario*/
  let navigateeliminarusuario = useNavigate();
  const routeChangeeliminarusuario = () => {
    let patheliminarusuario = 'eliminarusuario';
    navigateeliminarusuario(`/${patheliminarusuario}`);
  };

  /*funcion para ir al crearvideojuego*/
  let navigatecrearv = useNavigate();
  const routeChangcrearv = () => {
    let pathcrearv = 'crearvideojuego';
    navigatecrearv(`/${pathcrearv}`);
  };

  /*funcion para ir al cerrarsesión*/
  let navigatebye = useNavigate();
  const routeChangebye = () => {
    let pathbye = 'login';
    navigatebye(`/${pathbye}`);
  };

  /*funcion para ir al perfil*/
  let navigateuser = useNavigate();
  const routeChangeuser = () => {
    let pathuser = 'perfil';
    navigateuser(`/${pathuser}`);
  };

  /*funcion para ir al edithperfil*/
  let navigateedituser = useNavigate();
  const routeChangeedituser = () => {
    let pathedituser = 'editprofile';
    navigateedituser(`/${pathedituser}`);
  };

  if (!validated) {
    return null;
  }

  return (
    <div>
      {auth ? (
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
              {' '}
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
              {' '}
            </a>
            <img
              className="header-icon"
              src="/assets/page.png"
              onClick={routeChangcrearv}
              alt="header-icon"
            ></img>
            <a href="crearvideojuego" className="btn">
              {' '}
            </a>
            <img
              className="header-icon"
              src="/assets/newusericon.png"
              onClick={routeChangeuser}
              alt="Perfil-de-usuario"
            ></img>
            <a href="login" className="btn">
              {' '}
            </a>
            <img
              className="header-icon"
              src="/assets/cerrar-sesion.png"
              onClick={routeChangebye}
              alt="header-icon"
            ></img>
            <a href="login" className="btn">
              {' '}
            </a>
          </div>
          <div className="container-perfil">
            <div className="usuarios-table-rectangle-perfil">
              <div className="usuario-info-perfil">
                <img
                  className="usuarios-img-perfil"
                  src={
                    validated
                      ? profileData.imagen_usuario
                      : '/assets/Woman_1.jpg'
                  }
                  alt="usuarios-img-perfil"
                ></img>
                <br></br>
                <label className="usuario">
                  {validated ? profileData.nombre_usuario : 'Nombre Usuario'}
                </label>
                <br></br>
                <label className="correo">
                  {validated
                    ? profileData.correo_usuario
                    : 'correo.usuario@example.com'}{' '}
                </label>
              </div>

              <div className="noticias-container-perfil">
                <button className="AprobarPerfil">
                  <img
                    className="catpaw"
                    src="/assets/CatFootprint.png"
                    alt="catpaw"
                  ></img>{' '}
                  <a href="EscribirArticulo" className="btn">
                    Crear Publicacion
                  </a>
                </button>
                <button className="Borrarperfil" onClick={routeChangeedituser}>
                  <img
                    className="catpaw"
                    src="/assets/CatFootprint.png"
                    alt="catpaw"
                  ></img>{' '}
                  Editar Perfil
                </button>
              </div>
            </div>
            <div className="noticias-perfil">
              <h3>Noticias Publicadas</h3>
              <table className="noticias-table-perfil">
                <tbody>
                  <tr>
                    <td>
                      <div className="noticias-table-rectangle">
                        <img
                          className="noticias-img-perfil"
                          src="/assets/imagen1.png"
                          alt="noticias-img-perfil"
                        ></img>
                        <br></br>
                        <label className="titulo">Titulo 1</label>
                        <br></br>
                        <label>Descripción...</label>
                      </div>
                    </td>
                    <td>
                      <div className="noticias-table-rectangle">
                        <img
                          className="noticias-img-perfil"
                          src="/assets/imagen3.png"
                          alt="noticias-img-perfil"
                        ></img>
                        <br></br>
                        <label className="titulo">Titulo 1</label>
                        <br></br>
                        <label>Descripción...</label>
                      </div>
                    </td>
                    <td>
                      <div className="noticias-table-rectangle">
                        <img
                          className="noticias-img-perfil"
                          src="/assets/image2.png"
                          alt="noticias-img-perfil"
                        ></img>
                        <br></br>
                        <label className="titulo">Titulo 1</label>
                        <br></br>
                        <label>Descripción...</label>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <Navigate to={'/login'} replace={true} />
      )}
    </div>
  );
};
export default Perfil;
