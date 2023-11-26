import React from 'react';
import '../css/home.css';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import api from '../utilities/api.json';
import Cookies from 'universal-cookie';
import { Navigate } from 'react-router-dom';
import { Header } from '../components/header/header';
import { ListOfVideogameFilter } from '../components/videogame/listOfVideogameFilters';
import { ListOfNewsElements } from '../components/news/listOfNewsElements';

const Home = () => {
  const [validated, HasBeenValidated] = useState(false);
  const [auth, IsAuthorized] = useState(false);
  const [permission, HasPermission] = useState('not-authorized');
  const [videogames, setVideogames] = useState([]);
  const [selVideogame, setSelVideogame] = useState('');

  const url = api.link;

  const cookies = new Cookies();

  const config = {
    headers: { Authorization: `Bearer ${cookies.get('token')}` },
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
    loadVideogames();
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

  async function loadVideogames() {
    await axios
      .get(url + 'videogames/', config)
      .then((response) => {
        setVideogames(response.data.data ? response.data.data : []);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  if (!validated) {
    return null;
  }

  return (
    <div>
      {auth ? (
        <div className="background">
          <Header permission={permission}></Header>
          <div className="container-begin">
            <ListOfVideogameFilter
              Videogames={videogames}
              funSelVid={pull_SelVideogame}
              selVideogame={selVideogame}
            ></ListOfVideogameFilter>
            <ListOfNewsElements selVideogame={selVideogame} />
          </div>
        </div>
      ) : (
        <Navigate to={'/login'} replace={true} />
      )}
    </div>
  );
};
export default Home;
