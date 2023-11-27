import React, { Component } from 'react';
import '../css/Articulo.css';
import axios from 'axios';
import api from '../utilities/api.json';
import Cookies from 'universal-cookie';
import { Navigate } from 'react-router-dom';
import { Header } from '../components/header/header';

const url = api.link;

const cookies = new Cookies();

const config = {
  headers: { Authorization: `Bearer ${cookies.get('token')}` },
};

export class Articulo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      permission: 'user',
      status: true,
      auth: true,
      validated: true,
      newsId: props.newsId || '',
      news: props.news || {
        _id: '',
        titulo_noticia: '',
        contenido_noticia: '',
        videojuego_noticia: '',
        fecha_noticia: '',
        likes_noticia: 0,
        dislikes_noticia: 0,
      },
      fecha_formateada: '',
    };
  }

  componentWillMount() {}

  async componentDidMount() {
    await axios
      .get(url + 'users/' + cookies.get('userId'), config)
      .then((response) => {
        this.setState({
          status: true,
          validated: true,
          auth: true,
          permission: response.data.data.tipo_usuario ? 'admin' : 'user',
        });
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          status: true,
          validated: false,
          auth: false,
          permission: 'user',
        });
      });

    await axios
      .get(url + 'news/' + this.state.newsId, config)
      .then((response) => {
        this.setState({
          news: response.data.data,
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

  render() {
    return this.state.auth ? (
      <div className="background">
        <Header permission={this.state.permission} />
        <div className="container">
          <div className="container-article-comments">
            <div className="container-article">
              <img
                className="noticia-img"
                src="/assets/imagen3.png"
                alt="noticias-img"
              ></img>
              <label className="titulo">{this.state.news.titulo_noticia}</label>
              <label className="descripcion">
                {this.state.news.contenido_noticia}
              </label>
              <div className="valoracion-article">
                <button className="Likes">
                  <img
                    className="catpaw"
                    src="/assets/CatFootprint.png"
                    alt="catpaw"
                  ></img>
                  {this.state.news.likes_noticia}
                </button>
                <button className="Dislikes">
                  <img
                    className="catpaw"
                    src="/assets/CatFootprint.png"
                    alt="catpaw"
                  ></img>
                  {this.state.news.dislikes_noticia}
                </button>
              </div>
            </div>

            <div className="container-comments">
              <div className="inputComment">
                <h3>Comentarios</h3>
                <input
                  type="texttarea"
                  id="comment"
                  name="comment"
                  placeholder="Escribe un comentario..."
                ></input>
              </div>

              <div className="comments">
                <div className="comment-table-rectangle">
                  <img
                    className="profile-img"
                    src="/assets/Woman_1.jpg"
                    alt="profile-img"
                  ></img>
                  <label className="comment">Why do we use it?</label>
                </div>
                <div className="comment-table-rectangle">
                  <img
                    className="profile-img"
                    src="/assets/Woman_2.jpg"
                    alt="profile-img"
                  ></img>
                  <label className="comment">Where does it come from?</label>
                </div>
                <div className="comment-table-rectangle">
                  <img
                    className="profile-img"
                    src="/assets/Man_1.jpg"
                    alt="profile-img"
                  ></img>
                  <label className="comment">Where can I get some?</label>
                </div>
              </div>
            </div>
          </div>

          <div className="noticias-container">
            <div className="noticias-table-rectangle">
              <img
                className="noticias-img"
                src="/assets/imagen1.png"
                alt="noticias-img"
              ></img>
              <label className="titulo">Titulo</label>
            </div>
            <div className="noticias-table-rectangle">
              <img
                className="noticias-img"
                src="/assets/imagen3.png"
                alt="noticias-img"
              ></img>
              <label className="titulo">Titulo</label>
            </div>
            <div className="noticias-table-rectangle">
              <img
                className="noticias-img"
                src="/assets/image2.png"
                alt="noticias-img"
              ></img>
              <label className="titulo">Titulo</label>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <Navigate to={'/login'} replace={true} />
    );
  }
}
