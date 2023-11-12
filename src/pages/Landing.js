import React from 'react';
import '../css/landing.css';
import { useNavigate } from 'react-router-dom';


const Landing=()=> {
  /*funcion para ir al login*/
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = 'login'; 
    navigate(path);
  }
  /*funcion para ir al crearcuenta*/
  let navigate2=useNavigate();
  const routeChange2=()=>{
    let path2='crearcuenta';
    navigate2(path2);
  }
  return (

    <div className='background'>
        <div className='desktop-overlap-group2'>
            <h1 className='desktop-noticias-para-gamers' >Noticias para Gamers </h1>
            <img className='desktop-logo-final' src='/assets/LogoFinal1.png' />
          </div>
          <div className='desktop-group'>
            <button className='desktop-button' onClick={routeChange} > Iniciar Sesión </button>
          </div>
          
          <div className='desktop-group2'>
              <button className='desktop-button' onClick={routeChange2} >Regístrate</button>
          </div>
    </div>  
  ) 
}

export default Landing;