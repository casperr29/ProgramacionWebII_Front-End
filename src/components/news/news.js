import styled from 'styled-components';
import React, { Component } from 'react';
import { NewsCreateForm } from './newsCreateForm';
import { NewsEditForm } from './newsEditForm';

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

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: props.status || false,
      type: props.type || 'detail',
      news: props.news || {
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
      <NewsCreateForm />
    ) : this.state.type === TYPE_EDIT ? (
      <NewsEditForm news={this.state.news} />
    ) : (
      <div></div>
    );
  }
}
