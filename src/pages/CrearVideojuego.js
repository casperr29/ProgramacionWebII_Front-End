import React from 'react';
import '../css/CrearVideojuego.css';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import api from '../utilities/api.json';
import Cookies from 'universal-cookie';
import { Navigate } from 'react-router-dom';
import { Header } from '../components/header/header';
import { Videogame } from '../components/videogame/videogame';

const CrearVideojuego = () => {
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
    <div>
      {auth ? (
        <div className="background">
          <Header permission={permission}></Header>
          <div className="container-centered">
            <Videogame />
          </div>
        </div>
      ) : (
        <Navigate to={'/login'} replace={true} />
      )}
    </div>
  );
};

export default CrearVideojuego;
