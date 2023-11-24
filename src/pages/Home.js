import React from 'react';
import '../css/home.css';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import api from '../utilities/api.json';
import Cookies from 'universal-cookie';
import { Navigate } from 'react-router-dom';
import { Header } from '../components/header/header';
import NoticiasList from '../components/NoticiasList';
import { ListOfVideogameFilter } from '../components/videogame/listOfVideogameFilters';

const Home = () => {
  const [validated, HasBeenValidated] = useState(false);
  const [auth, IsAuthorized] = useState(false);
  const [permission, HasPermission] = useState('not-authorized');
  // const [newsData, setData] = useState(news);
  const [videogames, setVideogames] = useState([]);
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
          <div className="container-begin">
            <Header permission={permission}></Header>
            <ListOfVideogameFilter
              Videogames={videogames}
            ></ListOfVideogameFilter>
          </div>

          {/* <div className="noticiashome">
            <section className="noticias-table">
              <NoticiasList />
            </section>
          </div> */}
        </div>
      ) : (
        <Navigate to={'/login'} replace={true} />
      )}
    </div>
  );
};
export default Home;
