import React, { Component } from 'react';
import api from '../../utilities/api.json';

const storageUrl = api.storageUrl;

export class VideogameViewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
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
          <img
            src={storageUrl + this.state.videogame.imagen_videojuego.file_name}
          ></img>
          <div className="videogame-content">
            <div className="inputBox-title">
              <h3>{this.state.videogame.nombre_videojuego}</h3>
            </div>
            <div className="inputBox-desc">
              <h3>{this.state.videogame.descripcion_videojuego}</h3>
            </div>
          </div>
          <button className="btn-submit">
            <img
              className="catpaw"
              src="/assets/CatFootprint.png"
              alt="catpaw"
            ></img>{' '}
            Editar
          </button>
        </form>
      </div>
    );
  }
}
