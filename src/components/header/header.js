import React, { Component } from 'react';
import '../../css/Header.css';
import HeaderAdmin from './header-admin';
import HeaderUser from './header-user';

const TYPE_ADMIN = 'admin',
  TYPE_USER = 'user';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
      permission: props.permission,
    };
  }

  componentWillMount() {} // SE EJECUTA ANTES EL MONTAJE

  componentDidMount() {} // SE EJECUTA DESPUES EL MONTAJE

  componentWillReceiveProps(nextProps) {} // SE EJECUTA CUANDO LOS PROPS CAMBIAN

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.status === true;
  } // CONDICION PARA SABER SI SE VUELVE A TYPE_ADMINRENDEREAR O ACTUALIZAR UN COMPONENTE

  componentWillUpdate(nextProps, nextState) {
    // CONSOLE LOGS
  }

  componentDidUpdate(prevProps, prevState) {
    // NOTIFICAR
  }

  componentWillUnmount() {}

  render() {
    return this.state.permission === TYPE_ADMIN ? (
      <HeaderAdmin />
    ) : this.state.permission === TYPE_USER ? (
      <HeaderUser />
    ) : (
      <div>Sin permisos</div>
    );
  }
}
