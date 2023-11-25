import styled from 'styled-components';
import React, { Component } from 'react';
import { VideogameCreateForm } from './videogameCreateForm';
import { VideogameViewForm } from './videogameViewForm';
import { VideogameEditForm } from './videogameEditForm';

const Button = styled.button`
  display: flex;
  color: #ffffff;
  font-family: 'Inter', Helvetica;
  font-size: 1.3rem;
  font-weight: 400;
  margin: 0.5rem;
  padding: 0.25rem 1rem;
  background-color: transparent;
`;

const TYPE_CREATE = 'create';
const TYPE_EDIT = 'edit';
const TYPE_DETAIL = 'detail';

export class Videogame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      type: props.type || 'detail',
      videogame: props.videogame || {
        _id: '',
        nombre_videojuego: '',
        imagen_videojuego: '',
        descripcion_videojuego: '',
      },
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.status === true;
  }

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    return this.state.type === TYPE_CREATE ? (
      <VideogameCreateForm />
    ) : this.state.type === TYPE_DETAIL ? (
      <VideogameViewForm videogame={this.state.videogame} />
    ) : this.state.type === TYPE_EDIT ? (
      <VideogameEditForm videogame={this.state.videogame} />
    ) : (
      <div></div>
    );
  }
}
