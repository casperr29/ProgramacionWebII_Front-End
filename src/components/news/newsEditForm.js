import React, { Component } from 'react';
import axios from 'axios';
import api from '../../utilities/api.json';
import Cookies from 'universal-cookie';

const url = api.link;
const storageurl = api.storageUrl;
const cookies = new Cookies();

const config = {
  headers: { Authorization: `Bearer ${cookies.get('token')}` },
};

export class NewsEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      fields: { title: '', description: '' },
      errors: {},
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

  async editNews(e) {
    e.preventDefault();

    let fields = this.state.fields;

    if (this.handleValidation()) {
      await axios
        .patch(
          url + 'news/' + this.state.news._id,
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

          alert('Artículo editado con exito');
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
          onSubmit={this.editNews.bind(this)}
        >
          <div className="inputBox-image">
            <label htmlFor="file" className="file-style">
              <img
                className="img"
                src={storageurl + this.state.news.imagen_videojuego.file_name}
                width="50"
                alt="upload-img"
              ></img>
              <p>Subir foto</p>
            </label>
            <input type="file" id="file"></input>
          </div>
          <div className="news-content">
            <div className="inputBox-title">
              <ErrorMsg>{this.state.errors['title']}</ErrorMsg>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Titulo"
                onChange={this.handleChange.bind(this, 'title')}
                value={this.state.news.nombre_videojuego}
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
                value={this.state.news.descripcion_videojuego}
              ></textarea>
            </div>
          </div>
          <button className="btn-submit">
            <img
              className="catpaw"
              src="/assets/CatFootprint.png"
              alt="catpaw"
            ></img>
            Guardar
          </button>
        </form>
      </div>
    );
  }
}
