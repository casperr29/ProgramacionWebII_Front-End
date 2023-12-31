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

export class VideogameEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      fields: { title: '', description: '' },
      errors: {},
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

  async editVideogame(e) {
    e.preventDefault();

    let fields = this.state.fields;

    if (this.handleValidation()) {
      await axios
        .patch(
          url + 'videogames/' + this.state.videogame._id,
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

          alert('Videojuego editado con exito');
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
          onSubmit={this.editVideogame.bind(this)}
        >
          <div className="inputBox-image">
            <label htmlFor="file" className="file-style">
              <img
                className="img"
                src={
                  storageurl + this.state.videogame.imagen_videojuego.file_name
                }
                width="50"
                alt="upload-img"
              ></img>
              <p>Subir foto</p>
            </label>
            <input type="file" id="file"></input>
          </div>
          <div className="videogame-content">
            <div className="inputBox-title">
              <ErrorMsg>{this.state.errors['title']}</ErrorMsg>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Titulo"
                onChange={this.handleChange.bind(this, 'title')}
                value={this.state.videogame.nombre_videojuego}
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
                value={this.state.videogame.descripcion_videojuego}
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
