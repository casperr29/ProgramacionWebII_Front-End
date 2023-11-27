import React, { Component } from 'react';
import '../../css/Header.css';
import HeaderAdmin from './header-admin';
import HeaderUser from './header-user';

const TYPE_ADMIN = 'admin',
  TYPE_USER = 'user';

export class Header extends Component {
  constructor(props) {
    // OBJETO QUE CONTIENE LAS PROPIEDADES QUE SE LE PASAN COMO PARAMETROS AL COMPONENTE CUANDO SE MANDA A RENDEREAR
    super(props);
    this.state = {
      // EL STATE CONFORMA EL CONJUNTO DE CARACTERISTICAS Y VARIABLES DE UN COMPONENTE
      status: false, // CONTROLA CUANDO DEBE ACTUALIZARSE UN COMPOENENTE
      permission: props.permission, // LE PASAMOS LOS PERMISOS MEDIANTE EL OBJETO DE PROPS
      funTitleFilter: props.funTitleFilter,
    };
  }

  componentWillMount() {} // SE EJECUTA ANTES EL MONTAJE

  componentDidMount() {
    // PETICIONES A LA API

    // SETEAMOS TRUE AL STATUS PARA QUE SE VUELVA A ACTUALIZAR EL COMPONENTE
    this.setState({
      status: true,
    });
  } // SE EJECUTA DESPUES EL MONTAJE

  componentWillReceiveProps(nextProps) {} // SE EJECUTA CUANDO LOS PROPS CAMBIAN -- CASI NO SE USA

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.status === true;
  } // CONDICION PARA SABER SI SE VUELVE A RENDEREAR O ACTUALIZAR UN COMPONENTE

  componentWillUpdate(nextProps, nextState) {
    // CONSOLE LOGS
  }

  componentDidUpdate(prevProps, prevState) {
    // NOTIFICAR CUANDO HAYA OCURRIDO UN CAMBIO
  }

  componentWillUnmount() {}

  render() {
    // LA PARTE QUE SE DIBUJA EN PANTALLA
    return this.state.permission === TYPE_ADMIN ? ( // SI EL PERMISO ES TIPO ADMINISTRADOR, RENDERIZARA EL HEADER CORRESPONDIENTE
      <HeaderAdmin funTitleFilter={this.props.funTitleFilter}/>
    ) : this.state.permission === TYPE_USER ? ( // LO MISMO SI EL PERMISO ES DE TIPO USUARIO
      <HeaderUser funTitleFilter={this.props.funTitleFilter} />
    ) : (
      <div>Sin permisos</div>
    );
  }
}
