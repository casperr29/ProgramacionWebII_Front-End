import React from 'react'
import "../css/home.css";
import "../components/Noticias.js";
import Noticias from '../components/Noticias.js';
const Probarhome = () => {

//puedes ignorar este js, era solo para probarlo


  return (
    <div>

        <div>
          {" "}
          <img
            className="background"
            src="/assets/Backgroundimg.png"
            alt="background"
          ></img>
          <div className="header-1">
            <img
              className="header-logo"
              src="/assets/LogoFinal1.png"
              //onClick={routeChange}
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
              //onClick={routeChangeeliminarusuario}
              alt="header-icon"
            ></img>
            <a href="login" className="btn">
              {" "}
            </a>
            <img
              className="header-icon"
              src="/assets/page.png"
              //onClick={routeChangcrearv}
              alt="header-icon"
            ></img>
            <a href="login" className="btn">
              {" "}
            </a>
            <img
              className="header-icon"
              src="/assets/newusericon.png"
              //onClick={routeChangeuser}
              alt="Perfil-de-usuario"
            ></img>
            <a href="login" className="btn">
              {" "}
            </a>
            <img
              className="header-icon"
              src="/assets/cerrar-sesion.png"
              //onClick={routeChangebye}
              alt="header-icon"
            ></img>
          </div>
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
                <Noticias/>
              </section>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Probarhome
