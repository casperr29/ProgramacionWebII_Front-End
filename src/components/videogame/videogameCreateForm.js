import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import api from '../../utilities/api.json';
import Cookies from 'universal-cookie';

const url = api.link;
const cookies = new Cookies();

const config = {
  headers: { Authorization: `Bearer ${cookies.get('token')}` },
};

const ErrorMsg = styled.span`
  color: 'red' !important;
  margin-bottom: '0.4rem';
  padding: '0.2rem';
  background-color: '#ff8f8f';
  border-radius: '10px';
`;

export class VideogameCreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: { title: '', description: '' },
      errors: {},
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

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields['title']) {
      formIsValid = false;
      errors['title'] = 'Cannot be empty';
      alert('Ingrese un título');
    }

    //Email
    if (!fields['description']) {
      formIsValid = false;
      errors['description'] = 'Cannot be empty';
      alert('Ingrese una descripción');
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  async createVideogame(e) {
    e.preventDefault();

    let fields = this.state.fields;

    if (this.handleValidation()) {
      await axios
        .post(
          url + 'videogames/',
          {
            nombre_videojuego: fields['title'],
            descripcion_videojuego: fields['description'],
          },
          config
        )
        .then((response) => {
          this.setState({
            status: true,
          });

          alert('Videojuego creado con exito');
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      //alert('Form has errors.');
    }
  }

  render() {
    return (
      <div className="container-videogame">
        <form
          name="videogame-form"
          className="videogame-form"
          onSubmit={this.createVideogame.bind(this)}
        >
          <div className="videogame-content">
            <div className="inputBox-title">
              <ErrorMsg>{this.state.errors['title']}</ErrorMsg>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Titulo"
                onChange={this.handleChange.bind(this, 'title')}
                value={this.state.fields['title']}
              ></input>
            </div>
            <div className="inputBox-desc">
              <h3>Descripción</h3>
              <ErrorMsg>{this.state.errors['description']}</ErrorMsg>
              <textarea
                id="description"
                name="description"
                placeholder="¿De qué trata el juego?"
                onChange={this.handleChange.bind(this, 'description')}
                value={this.state.fields['description']}
              ></textarea>
            </div>
          </div>
          <button className="btn-submit" type="submit">
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
