import styled from 'styled-components';

import React, { Component } from 'react';

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

const TYPE_EDIT = 'edit',
  TYPE_DETAIL = 'detail';

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
    return (
      <div className="container-videogame">
        <form>
          <div className="inputBox-image">
            <label htmlFor="file" className="file-style">
              <img
                className="img"
                src="/assets/upload+to+cloud.png"
                width="50"
                alt="upload-img"
              ></img>
              <p>Subir foto</p>
            </label>
            <input type="file" id="file"></input>
          </div>
          <div className="videogame-content">
            <div className="inputBox-title">
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Titulo"
              ></input>
            </div>
            <div className="inputBox-desc">
              <h3>Descripción</h3>
              <textarea
                id="description"
                name="description"
                placeholder="¿De qué trata el juego?"
              ></textarea>
            </div>
          </div>
          <button className="Borrar">
            <img
              className="catpaw"
              src="/assets/CatFootprint.png"
              alt="catpaw"
            ></img>{' '}
            Crear
          </button>
        </form>
      </div>
    );
  }
}
