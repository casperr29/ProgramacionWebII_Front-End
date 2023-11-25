import React from 'react';
import '../css/EscribirArticulo.css';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import api from '../utilities/api.json';
import Cookies from 'universal-cookie';
import { Navigate } from 'react-router-dom';
import { Header } from '../components/header/header';
import { News } from '../components/news/news';

const url = api.link;

const cookies = new Cookies();
const config = {
  headers: { Authorization: `Bearer ${cookies.get('token')}` },
};

const EscribirArticulo = () => {
  const [validated, HasBeenValidated] = useState(false);
  const [auth, IsAuthorized] = useState(false);
  const [permission, HasPermission] = useState('not-authorized');

  const [newsTitle, setNewsTitle] = useState('');
  const [newsDesc, setNewsDesc] = useState('');

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
          <Header permission={permission} />
          <div className="container-centered-r">
            <News type="create" />
          </div>
        </div>
      ) : (
        <Navigate to={'/login'} replace={true} />
      )}
    </div>
  );
};
export default EscribirArticulo;
