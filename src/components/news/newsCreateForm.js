import React, { Component } from 'react';
import styled from 'styled-components';

import axios from 'axios';
import api from '../../utilities/api.json';
import Cookies from 'universal-cookie';

const url = api.link;

const cookies = new Cookies();
const author = cookies.get('userId');
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

export class NewsCreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: { title: '', description: '' },
      errors: {},
      status: false,
      videogames: [],
      sel_Videogame: '',
    };
  }

  componentWillMount() {}

  async componentDidMount() {
    await axios
      .get(url + 'videogames/', config)
      .then((response) => {
        this.setState({
          status: true,
          videogames: response.data.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.status === true;
  }

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  handleComboChange = (e) => {
    this.setState({ sel_Videogame: e.target.value });
    console.log(this.state.sel_Videogame);
  };

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

  async createNews(e) {
    e.preventDefault();

    let fields = this.state.fields;

    if (this.handleValidation()) {
      await axios
        .post(
          url + 'news/',
          {
            autor_noticia: author,
            titulo_noticia: fields['title'],
            contenido_noticia: fields['description'],
            videojuego_noticia: this.state.sel_Videogame,
          },
          config
        )
        .then((response) => {
          this.setState({
            status: true,
          });

          alert('Artículo creado con exito');
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
      <div className="container-news">
        <form
          name="news-form"
          className="news-form"
          onSubmit={this.createNews.bind(this)}
        >
          <div className="news-content">
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
                placeholder="¿Qué ocurrió?"
                onChange={this.handleChange.bind(this, 'description')}
                value={this.state.fields['description']}
              ></textarea>
            </div>
            <h3>Videojuego</h3>
            <select
              className="select-videogame"
              value={this.state.sel_Videogame}
              onChange={this.handleComboChange}
            >
              {this.state.videogames.map((x) => (
                <option key={x._id} value={x._id}>
                  {x.nombre_videojuego}
                </option>
              ))}
            </select>
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
