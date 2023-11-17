import React from "react";
import "../Components/Perfil.css";
import "../css/editarcuenta.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import api from "../api.json";
import Cookies from "universal-cookie";

const url = api.link;
const storageUrl = api.storageUrl;

const EditaPerfil = () => {
  let user = {
    _id: "null",
    nombre_usuario: "null",
    correo_usuario: "null",
    imagen_usuario: "null",
  };

  const [validated, HasBeenValidated] = useState(false);
  const [auth, IsAuthorized] = useState(false);

  const [profileData, setData] = useState(user);

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [profileImage, setprofileImage] = useState("");

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    const cookies = new Cookies();

    const config = {
      headers: { Authorization: `Bearer ${cookies.get("token")}` },
    };

    await axios
      .get(url + "users/" + cookies.get("userId"), config)
      .then((response) => {
        IsAuthorized(true);
        user._id = response.data.data._id;
        user.nombre_usuario = response.data.data.nombre_usuario;
        user.correo_usuario = response.data.data.correo_usuario;
        user.imagen_usuario =
          storageUrl + response.data.data.foto_usuario.file_name;

        setData(user);

        setUserName(user.nombre_usuario);
        setEmail(user.correo_usuario);
        setprofileImage(user.imagen_usuario);
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });

    HasBeenValidated(true);
  }

  const handleEditProfileImageSubmit = async (e) => {
    e.preventDefault();

    try {
      if (password != cPassword) {
        console.log("Las contraseñas no coinciden");
        return;
      }

      const response = await axios.patch(
        url + "update_prof_pic/" + profileData._id,
        {
          correo_usuario: email,
          password_usuario: password,
          nombre_usuario: userName,
        }
      );

      console.log(response.data);

      let pathProfile = "Perfil";
      navigateHOME(`/${pathProfile}`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    try {
      const cookies = new Cookies();

      const config = {
        headers: { Authorization: `Bearer ${cookies.get("token")}` },
      };

      if (password != cPassword) {
        return;
      }

      const response = await axios.patch(
        url + "users/" + profileData._id,
        {
          correo_usuario: email,
          password_usuario: password === "" ? undefined : password,
          nombre_usuario: userName,
        },
        config
      );

      console.log(response.data);

      let pathProfile = "Perfil";
      navigateHOME(`/${pathProfile}`);
    } catch (error) {
      console.error(error);
    }
  };

  /*funcion para ir al home*/
  let navigateHOME = useNavigate();
  const routeChange = () => {
    let pathHOME = "home";
    navigateHOME(`/${pathHOME}`);
  };
  /*funcion para ir al eliminarusuario*/
  let navigateeliminarusuario = useNavigate();
  const routeChangeeliminarusuario = () => {
    let patheliminarusuario = "eliminarusuario";
    navigateeliminarusuario(`/${patheliminarusuario}`);
  };

  /*funcion para ir al crearvideojuego*/
  let navigatecrearv = useNavigate();
  const routeChangcrearv = () => {
    let pathcrearv = "crearvideojuego";
    navigatecrearv(`/${pathcrearv}`);
  };

  /*funcion para ir al cerrarsesión*/
  let navigatebye = useNavigate();
  const routeChangebye = () => {
    let pathbye = "login";
    navigatebye(`/${pathbye}`);
  };

  /*funcion para ir al perfil*/
  let navigateuser = useNavigate();
  const routeChangeuser = () => {
    let pathuser = "perfil";
    navigateuser(`/${pathuser}`);
  };
  return (
    <div>
      <div>
        <img
          className="backgroundeliminate"
          src="/assets/Backgroundimg.png"
          alt="Backgroundimg"
        ></img>
        <div className="header-1">
          <img
            className="header-logo"
            src="/assets/LogoFinal1.png"
            onClick={routeChange}
            alt="header-logo"
          ></img>
          <a href="home" className="btn">
            {" "}
          </a>
          <input
            className="header-inputs"
            type="text"
            placeholder="Buscar..."
          ></input>
          <img
            className="header-icon"
            src="/assets/block-user.png"
            onClick={routeChangeeliminarusuario}
            alt="header-icon"
          ></img>
          <a href="eliminarusuario" className="btn">
            {" "}
          </a>
          <img
            className="header-icon"
            src="/assets/page.png"
            onClick={routeChangcrearv}
            alt="header-icon"
          ></img>
          <a href="crearvideojuego" className="btn">
            {" "}
          </a>
          <img
            className="header-icon"
            src="/assets/newusericon.png"
            onClick={routeChangeuser}
            alt="Perfil-de-usuario"
          ></img>
          <a href="login" className="btn">
            {" "}
          </a>
          <img
            className="header-icon"
            src="/assets/cerrar-sesion.png"
            onClick={routeChangebye}
            alt="header-icon"
          ></img>
          <a href="login" className="btn">
            {" "}
          </a>
        </div>

        <form onSubmit={handleEditSubmit}>
          <div className="container-perfil">
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
                <br></br>
                <label className="usuario"></label>
                <br></br>
                <label className="correo"></label>
              </div>
            </div>
            <div className="noticias-perfil">
              <h3>Editar Usuario</h3>

              <br></br>
              <input
                className="Editarcuentainputs"
                type="email"
                placeholder="Correo Electronico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <br></br>
              <br></br>
              <br></br>
              <input
                className="Editarcuentainputstext"
                id="nombreusuarioEditar"
                type="text"
                placeholder="Nombre de Usuario"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              ></input>
              <br></br>
              <br></br>
              <input
                className="Editarcuentainputs"
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <br></br>
              <br></br>
              <input
                className="Editarcuentainputs"
                type="password"
                placeholder="Confirmar Contraseña"
                value={cPassword}
                onChange={(e) => setCPassword(e.target.value)}
              ></input>
              <br></br>
              <br></br>
              <input
                className="Editarcuentasubmit"
                type="submit"
                placeholder="Confirmar Cambios"
              ></input>
            </div>
          </div>
        </form>
      </div>
      {/* {auth? (): (
        <Navigate to={"/login"} replace={true} />
      )} */}
    </div>
  );
};

export default EditaPerfil;
