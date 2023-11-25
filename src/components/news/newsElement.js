import styled from 'styled-components';
import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import api from '../../utilities/api.json';
import Cookies from 'universal-cookie';

const url = api.link;

const cookies = new Cookies();

const config = {
  headers: { Authorization: `Bearer ${cookies.get('token')}` },
};

const ElementButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: 20rem;
  color: #ffffff;
  font-family: 'Inter', Helvetica;
  font-weight: 400;
  margin: 0.5rem;
  padding: 1rem;
  background-color: #1b425f;
  border-radius: 20px;
  flex-wrap: nowrap;
`;

const ElementImg = styled.img`
  margin-bottom: 0.5rem;
  width: 100%;
  border-radius: 15px;
`;

const ElementData = styled.h3`
  margin: 0.3rem 0;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
`;

const ElementSubData = styled.h3`
  margin: 0rem 0.5rem;
  font-size: 0.8rem;
  text-align: center;
`;

const IconElement = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 1rem;
  margin: 0.3rem 1rem;
  font-size: 0.8rem;
  font-weight: bold;
`;

export class NewsElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
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
      videogame: props.videogame || {
        _id: '',
        nombre_videojuego: '',
        imagen_videojuego: '',
        descripcion_videojuego: '',
      },
    };
  }

  componentWillMount() {}

  async componentDidMount() {
    await axios
      .get(url + 'videogames/' + this.state.news.videojuego_noticia, config)
      .then((response) => {
        this.setState({
          status: true,
          videogame: response.data.data,
        });
        let fecha = new Date(this.state.news.fecha_noticia).toLocaleString();
        this.setState({ fecha_formateada: fecha });
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

  componentDidUpdate(prevProps, prevState) {
    //console.log(this.state.news);
  }

  componentWillUnmount() {}

  navigateTo(path) {
    useNavigate(path);
  }

  render() {
    const clickOnElement = () => {
      navigateTo('/articulo' + this.state.news._id);
      this.setState({
        status: true,
      });
    };

    return (
      <ElementButton onClick={clickOnElement}>
        <ElementImg
          alt="News-image"
          src={'/assets/Backgroundimg.png'}
        ></ElementImg>
        <div className="d-flex flex-row w-100 my-3">
          <ElementSubData>{this.state.fecha_formateada}</ElementSubData>
          <ElementSubData>
            {this.state.videogame.nombre_videojuego}
          </ElementSubData>
        </div>
        <ElementData>{this.state.news.titulo_noticia}</ElementData>
        <div className="d-flex flex-row w-100 mt-3">
          <IconElement>
            <img src="/assets/like.png"></img>
            <ElementSubData>{this.state.news.likes_noticia}</ElementSubData>
          </IconElement>
          <IconElement>
            <img src="/assets/dislike.png"></img>
            <ElementSubData>{this.state.news.dislikes_noticia}</ElementSubData>
          </IconElement>
        </div>
      </ElementButton>
    );
  }
}
