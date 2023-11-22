import React, { Component } from 'react';
import NoticiasRow from './NoticiasRow';
import axios from "axios";
import api from '../utilities/api.json';

const url = api.link;

class NoticiasList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
    }
  }

  async getNews() {
    await axios
      .get(url + "news/")
      .then((response) => {
        this.setState({ news: response.data });
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  render() {
    return (
      <div className="container main-content">
        {
          this.state.news.map(news => {
            return <NoticiasRow imagen_noticia={news.imagen_noticia} titulo_noticia={news.titulo_noticia} contenido_noticia={news.contenido_noticia}  />
          })
        }
      </div>
    );
  }
}

export default NoticiasList;
