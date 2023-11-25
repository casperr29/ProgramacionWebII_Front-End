import React from 'react';
import '../css/CrearVideojuego.css';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import api from '../utilities/api.json';
import Cookies from 'universal-cookie';
import { Navigate } from 'react-router-dom';
import { Header } from '../components/header/header';
import { Videogame } from '../components/videogame/videogame';
import { ListOfVideogameElements } from '../components/videogame/listOfVideogameElements';

const CrearVideojuego = () => {
  const [validated, HasBeenValidated] = useState(false);
  const [auth, IsAuthorized] = useState(false);
  const [permission, HasPermission] = useState('not-authorized');
  const [formType, setFormType] = useState('create');
  const [selVideogame, setSelVideogame] = useState({});

  const url = api.link;

  const cookies = new Cookies();
  const config = {
    headers: { Authorization: `Bearer ${cookies.get('token')}` },
  };

  const pull_FormType = (data) => {
    setFormType(data);
    console.log(data);
  };

  const pull_SelVideogame = (data) => {
    setSelVideogame(data);
    console.log(data);
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
          <Header permission={permission} />
          <div className="container-centered-r">
            <Videogame type={formType} videogame={selVideogame} />
            <ListOfVideogameElements
              funcType={pull_FormType}
              funSelVid={pull_SelVideogame}
            />
          </div>
        </div>
      ) : (
        <Navigate to={'/login'} replace={true} />
      )}
    </div>
  );
};

export default CrearVideojuego;
