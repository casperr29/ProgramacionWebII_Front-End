import React from 'react';
import '../css/AprobarArticulo.css';
import { useCallback, useEffect, useState } from 'react';
import { Header } from '../components/header/header';
import axios from 'axios';
import api from '../utilities/api.json';
import Cookies from 'universal-cookie';
import { Navigate } from 'react-router-dom';

const AprobarArticulo = () => {
  const [validated, HasBeenValidated] = useState(false);
  const [auth, IsAuthorized] = useState(false);
  const [permission, HasPermission] = useState('not-authorized');

  const url = api.link;

  const cookies = new Cookies();
  const config = {
    headers: { Authorization: `Bearer ${cookies.get('token')}` },
  };

  const ValidateSession = useCallback(() => {
    HasBeenValidated(true);
  }, []);

  useEffect(() => {
    onLoad();
  });

  // AL CARGAR LA PAGINA
  async function onLoad() {
    await axios
      .get(url + 'users/' + cookies.get('userId'), config)
      .then((response) => {
        HasPermission(response.data.data.tipo_usuario ? 'admin' : 'user');
        IsAuthorized(true);
        ValidateSession();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  if (!validated || permission !== 'admin') {
    return null;
  }

  return (
    <div className="background">
      <Header permission={permission} />
      <div className="container-centered-r">
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
                  ></img>{' '}
                  Aprobar
                </button>
                <button className="btn-submit">
                  <img
                    className="catpaw"
                    src="/assets/CatFootprint.png"
                    alt="catpaw"
                  ></img>{' '}
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
                  ></img>{' '}
                  Aprobar
                </button>
                <button className="btn-submit">
                  <img
                    className="catpaw"
                    src="/assets/CatFootprint.png"
                    alt="catpaw"
                  ></img>{' '}
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
                  ></img>{' '}
                  Aprobar
                </button>
                <button className="btn-submit">
                  <img
                    className="catpaw"
                    src="/assets/CatFootprint.png"
                    alt="catpaw"
                  ></img>{' '}
                  Borrar
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};
export default AprobarArticulo;
