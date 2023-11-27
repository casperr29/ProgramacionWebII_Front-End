import React from 'react';
import '../css/EliminarUsuario.css';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import api from '../utilities/api.json';
import Cookies from 'universal-cookie';
import { Navigate } from 'react-router-dom';
import { Header } from '../components/header/header';

const EliminarUsuario = () => {
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

  if (!validated) {
    return null;
  }

  return auth ? (
    <div className="background">
      <Header permission={permission}></Header>
      <div className="container-centered-c">
        <table className="usuarios-table">
          <tr>
            <td>
              <div className="usuarios-table-rectangle">
                <img
                  className="usuarios-img"
                  src="/assets/Man_1.jpg"
                  alt="usuarios-img"
                ></img>
                <br></br>
                <label className="usuario">Nombre Usuario</label>
                <br></br>
                <label className="correo">correo.usuario@example.com</label>
              </div>
              <button className="Aprobar">
                <img
                  className="catpaw"
                  src="/assets/CatFootprint.png"
                  alt="catpaw"
                ></img>{' '}
                Restaurar cuenta
              </button>
              <button className="btn-submit">
                <img
                  className="catpaw"
                  src="/assets/CatFootprint.png"
                  alt="catpaw"
                ></img>{' '}
                Eliminar Cuenta
              </button>
            </td>
            <td>
              <div className="usuarios-table-rectangle">
                <img
                  className="usuarios-img"
                  src="/assets/Woman_1.jpg"
                  alt="usuarios-img"
                ></img>
                <br></br>
                <label className="usuario">Nombre Usuario</label>
                <br></br>
                <label className="correo">correo.usuario@example.com</label>
              </div>
              <button className="Aprobar">
                <img
                  className="catpaw"
                  src="/assets/CatFootprint.png"
                  alt="catpaw"
                ></img>{' '}
                Restaurar cuenta
              </button>
              <button className="btn-submit">
                <img
                  className="catpaw"
                  src="/assets/CatFootprint.png"
                  alt="catpaw"
                ></img>{' '}
                Eliminar Cuenta
              </button>
            </td>
            <td>
              <div className="usuarios-table-rectangle">
                <img
                  className="usuarios-img"
                  src="/assets/Woman_2.jpg"
                  alt="usuarios-img"
                ></img>
                <br></br>
                <label className="usuario">Nombre Usuario</label>
                <br></br>
                <label className="correo">correo.usuario@example.com</label>
              </div>
              <button className="Aprobar">
                <img
                  className="catpaw"
                  src="/assets/CatFootprint.png"
                  alt="catpaw"
                ></img>{' '}
                Restaurar cuenta
              </button>
              <button className="btn-submit">
                <img
                  className="catpaw"
                  src="/assets/CatFootprint.png"
                  alt="catpaw"
                ></img>{' '}
                Eliminar Cuenta
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  ) : (
    <Navigate to={'/login'} replace={true} />
  );
};

export default EliminarUsuario;
