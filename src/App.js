import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Landing from './pages/Landing';
import Home from './pages/Home';
import { Articulo } from './pages/Articulo';
import NewsLinker from './components/news/newsLinker';
import Login from './pages/login';
import CrearCuenta from './pages/CrearCuenta';
import Perfil from './pages/Perfil';
import CrearVideojuego from './pages/CrearVideojuego';
import EscribirArticulo from './pages/EscribirArticulo';
import EliminarUsuario from './pages/EliminarUsuario';
import AprobarArticulo from './pages/AprobarArticulo';
import EditaPerfil from './pages/EditaPerfil';
import Probarhome from './pages/probarhome';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="home" element={<Home />} />
      <Route path="redirect/:id" element={<NewsLinker />} />
      <Route path="articulo/:id" element={<Articulo />} />
      <Route path="login" element={<Login />} />
      <Route path="crearcuenta" element={<CrearCuenta />} />
      <Route path="perfil" element={<Perfil />} />
      <Route path="crearvideojuego" element={<CrearVideojuego />} />
      <Route path="escribirarticulo" element={<EscribirArticulo />} />
      <Route path="eliminarusuario" element={<EliminarUsuario />} />
      <Route path="aprobararticulo" element={<AprobarArticulo />} />
      <Route path="editprofile" element={<EditaPerfil />} />
      <Route path="try" element={<Probarhome />} />
    </Routes>
  );
}

export default App;
