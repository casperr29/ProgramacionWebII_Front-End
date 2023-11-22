import React from 'react';
import '../css/home.css';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import api from '../utilities/api.json';
import Cookies from 'universal-cookie';
import { Navigate } from 'react-router-dom';
import { Header } from '../components/header/index';
import NoticiasList from '../components/NoticiasList';

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
        <div>
          <img
            className="background"
            src="/assets/Backgroundimg.png"
            alt="background"
          ></img>
          <Header permission={permission}></Header>
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
