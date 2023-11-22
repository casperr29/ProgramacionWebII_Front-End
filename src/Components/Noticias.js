import React from 'react';
import "../css/home.css";
import { useNavigate } from "react-router-dom";



const Noticias=()=> {

    /*funcion para ir al articulo*/
  let navigatearticulo = useNavigate();
  const routeChangearticulo = () => {
    let patharticulo = "articulo/";
    navigatearticulo(`/${patharticulo}`);
  };
  return (
    //Algo que vi es que puedes usar un for each desde el div className="noticias-table-rectangle-component" para ir llenando los datos
    <section className="noticias-table">

        <div className="noticias-table-rectangle-component">
           <img
               className="noticias-img"
               src="/assets/imagen1.png"
               alt="noticias-img"
             ></img>
             <br></br>
             <label className="titulo" onClick={routeChangearticulo}>
                  Titulo 1
              </label>
               <br></br>
              <label>Descripción...</label>
          </div>
    </section>

  )
}

export default Noticias
