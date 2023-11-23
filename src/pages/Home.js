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

  return (
    <div>
      {auth ? (
        <div className="background">
          <Header permission={permission}></Header>
          <ListOfVideogameFilter Videogames={null}></ListOfVideogameFilter>

          <div className="noticiashome">
            <section className="noticias-table">
              <NoticiasList />
            </section>
          </div>
        </div>
      ) : (
        <Navigate to={'/login'} replace={true} />
      )}
    </div>
  );
};
export default Home;
