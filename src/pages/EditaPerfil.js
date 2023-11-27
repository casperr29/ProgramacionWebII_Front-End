import React from 'react';
import '../css/Perfil.css';
import '../css/editarcuenta.css';
import { useCallback, useEffect, useState } from 'react';
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

const EditaPerfil = () => {
  let user = {
    _id: 'null',
    nombre_usuario: 'null',
    correo_usuario: 'null',
    imagen_usuario: 'null',
  };

  const [validated, HasBeenValidated] = useState(true);
  const [auth, IsAuthorized] = useState(true);
  const [permission, HasPermission] = useState('not-authorized');

  const [profileData, setData] = useState(user);

  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [profileImage, setprofileImage] = useState('');

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

        setUserName(user.nombre_usuario);
        setEmail(user.correo_usuario);
        setprofileImage(user.imagen_usuario);

        console.log(response.data.data);

        ValidateSession();
      })
      .catch((error) => {
        IsAuthorized(false);
        HasBeenValidated(false);

        console.error(error);
      });
  }

  // const handleEditProfileImageSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     if (password != cPassword) {
  //       console.log("Las contraseñas no coinciden");
  //       return;
  //     }

  //     const response = await axios.patch(
  //       url + "update_prof_pic/" + profileData._id,
  //       {
  //         correo_usuario: email,
  //         password_usuario: password,
  //         nombre_usuario: userName,
  //       }
  //     );

  //     console.log(response.data);

  //     let pathProfile = "Perfil";
  //     navigateHOME(`/${pathProfile}`);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    try {
      const cookies = new Cookies();

      const config = {
        headers: { Authorization: `Bearer ${cookies.get('token')}` },
      };

      if (password != cPassword) {
        return;
      }

      const response = await axios.patch(
        url + 'users/' + profileData._id,
        {
          correo_usuario: email,
          password_usuario: password === '' ? undefined : password,
          nombre_usuario: userName,
        },
        config
      );

      console.log(response.data);

      let pathProfile = 'Perfil';
      navigateHOME(`/${pathProfile}`);
    } catch (error) {
      console.error(error);
    }
  };

  if (!validated) {
    return null;
  }

  return auth ? (
    <div className="background">
      <Header permission={permission} />
      <div className="container-begin">
        <div className="usuarios-table-rectangle-perfil">
          <div className="usuario-info-perfil">
            <img
              className="usuarios-img-perfil"
              src={profileImage}
              alt="usuarios-img-perfil"
            ></img>
            <input
              type="file"
              id="image_input"
              accept="image/*"
              className=""
              onChange={(e) => {
                setprofileImage(e.target.files);
              }}
            />
            <label htmlFor="image_input">
              Seleccionar foto a la cual quiera cambiar
            </label>
            <label className="usuario"></label>
            <label className="correo"></label>
          </div>
        </div>

        <div className="noticias-perfil">
          <form onSubmit={handleEditSubmit}>
            <h3>Editar Usuario</h3>

            <input
              className="Editarcuentainputs"
              type="email"
              placeholder="Correo Electronico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>

            <input
              className="Editarcuentainputstext"
              id="nombreusuarioEditar"
              type="text"
              placeholder="Nombre de Usuario"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            ></input>

            <input
              className="Editarcuentainputs"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>

            <input
              className="Editarcuentainputs"
              type="password"
              placeholder="Confirmar Contraseña"
              value={cPassword}
              onChange={(e) => setCPassword(e.target.value)}
            ></input>

            <input
              className="Editarcuentasubmit"
              type="submit"
              placeholder="Confirmar Cambios"
            ></input>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to={'/login'} replace={true} />
  );
};

export default EditaPerfil;
