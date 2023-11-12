import { useNavigate } from "react-router-dom";
 
 
 

const NoticiasRow = ({ imagen_noticia, titulo_noticia, contenido_noticia }) => {
  /*funcion para ir al articulo*/
 let navigatearticulo = useNavigate();
 const routeChangearticulo = () => {
   let patharticulo = "articulo/";
   navigatearticulo(`/${patharticulo}`);
 };

  return (
    <div className="row news">
      <img
          className="noticias-img"
          src={imagen_noticia}
          alt="noticias-img"
             ></img>  
             <br></br>
             <label className="titulo" onClick={routeChangearticulo}>
                  {titulo_noticia}
              </label>
               <br></br>
              <label>{contenido_noticia}</label>
    </div>
  );
}

export default NoticiasRow;