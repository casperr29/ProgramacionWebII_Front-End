import React from 'react';
import '../css/Perfil.css';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import api from '../utilities/api.json';
import Cookies from 'universal-cookie';
import { Navigate } from 'react-router-dom';
import { Header } from '../components/header/header';

const url = api.link;
const storageUrl = api.storageUrl;

const cookies = new Cookies();

const config = {
  headers: { Authorization: `Bearer ${cookies.get('token')}` },
};

const Perfil = () => {
  let user = {
    _id: 'null',
    nombre_usuario: 'null',
    correo_usuario: 'null',
    imagen_usuario: 'null',
  };

  let navigateTo = useNavigate();

  const [validated, HasBeenValidated] = useState(false);
  const [auth, IsAuthorized] = useState(false);
  const [permission, HasPermission] = useState('not-authorized');

  const [profileData, setData] = useState(user);

  const ValidateSession = useCallback(() => {
    HasBeenValidated(true);
  }, []);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    await axios
      .get(url + 'users/' + cookies.get('userId'), config)
      .then((response) => {
        IsAuthorized(true);
        HasPermission(response.data.data.tipo_usuario ? 'admin' : 'user');

        user._id = response.data.data._id;
        user.nombre_usuario = response.data.data.nombre_usuario;
        user.correo_usuario = response.data.data.correo_usuario;
        user.imagen_usuario =
          storageUrl + response.data.data.foto_usuario.file_name;

        setData(user);

        ValidateSession();
      })
      .catch((error) => {
        IsAuthorized(false);
        HasBeenValidated(false);

        console.error(error);
      });
  }

  if (!validated) {
    return null;
  }

  return auth ? (
    <div className="background">
      <Header permission={permission} />
      <div className="container-centered-c">
        <div className="usuarios-table-rectangle-perfil">
          <div className="usuario-info-perfil">
            <img
              className="usuarios-img-perfil"
              src={
                validated ? profileData.imagen_usuario : '/assets/Woman_1.jpg'
              }
              alt="usuarios-img-perfil"
            ></img>
            <div className="d-flex flex-column justify-center align-items-center mb-3">
              <label className="usuario">
                {validated ? profileData.nombre_usuario : 'Nombre Usuario'}
              </label>
              <label className="correo">
                {validated
                  ? profileData.correo_usuario
                  : 'correo.usuario@example.com'}{' '}
              </label>
            </div>
          </div>

          <div className="submit-container-perfil">
            <button className="btn-light">
              <img
                className="catpaw"
                src="/assets/CatFootprint.png"
                alt="catpaw"
              ></img>{' '}
              <a href="EscribirArticulo" className="btn">
                Crear Publicacion
              </a>
            </button>
            <button
              className="btn-dark"
              onClick={() => {
                navigateTo('/editprofile');
              }}
            >
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
                    <label className="titulo">Titulo 1</label>
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
                    <label className="titulo">Titulo 1</label>
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
                    <label className="titulo">Titulo 1</label>
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
  );
};
export default Perfil;
