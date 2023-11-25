import React, { Component } from 'react';

export class VideogameCreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
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
