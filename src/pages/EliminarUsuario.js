import React from 'react';
import '../css/EliminarUsuario.css';
import { useNavigate } from 'react-router-dom';

const EliminarUsuario = () => {
  /*funcion para ir al home*/
  let navigateHOME = useNavigate();
  const routeChange = () => {
    let pathHOME = 'home';
    navigateHOME(`/${pathHOME}`);
  };
  /*funcion para ir al eliminarusuario*/
  let navigateeliminarusuario = useNavigate();
  const routeChangeeliminarusuario = () => {
    let patheliminarusuario = 'eliminarusuario';
    navigateeliminarusuario(`/${patheliminarusuario}`);
  };

  /*funcion para ir al crearvideojuego*/
  let navigatecrearv = useNavigate();
  const routeChangcrearv = () => {
    let pathcrearv = 'crearvideojuego';
    navigatecrearv(`/${pathcrearv}`);
  };

  /*funcion para ir al cerrarsesión*/
  let navigatebye = useNavigate();
  const routeChangebye = () => {
    let pathbye = 'login';
    navigatebye(`/${pathbye}`);
  };

  /*funcion para ir al perfil*/
  let navigateuser = useNavigate();
  const routeChangeuser = () => {
    let pathuser = 'perfil';
    navigateuser(`/${pathuser}`);
  };

  return (
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
          {' '}
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
          {' '}
        </a>
        <img
          className="header-icon"
          src="/assets/page.png"
          onClick={routeChangcrearv}
          alt="header-icon"
        ></img>
        <a href="crearvideojuego" className="btn">
          {' '}
        </a>
        <img
          className="header-icon"
          src="/assets/newusericon.png"
          onClick={routeChangeuser}
          alt="Perfil-de-usuario"
        ></img>
        <a href="login" className="btn">
          {' '}
        </a>
        <img
          className="header-icon"
          src="/assets/cerrar-sesion.png"
          onClick={routeChangebye}
          alt="header-icon"
        ></img>
        <a href="login" className="btn">
          {' '}
        </a>
      </div>
      <div className="usuarios">
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
  );
};

export default EliminarUsuario;
