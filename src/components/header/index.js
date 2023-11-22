import React, { Component } from 'react';
import HeaderAdmin from '../header-admin/index';
import HeaderUser from '../header-user/index';

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
  } // CONDICION PARA SABER SI SE VUELVE A RENDEREAR O ACTUALIZAR UN COMPONENTE

  componentWillUpdate(nextProps, nextState) {
    // CONSOLE LOGS
  }

  componentDidUpdate(prevProps, prevState) {
    // NOTIFICAR
  }

  componentWillUnmount() {}

  render() {
    return this.state.permission === 'admin' ? (
      <HeaderAdmin />
    ) : this.state.permission === 'user' ? (
      <HeaderUser />
    ) : (
      <div>Sin permisos</div>
    );
  }
}
