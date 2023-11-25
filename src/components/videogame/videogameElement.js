import styled from 'styled-components';
import React, { Component } from 'react';
import api from '../../utilities/api.json';

const storageUrl = api.storageUrl;

const ElementButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 15rem;
  width: 12rem;
  color: #ffffff;
  font-family: 'Inter', Helvetica;
  font-weight: 400;
  margin: 0.5rem;
  padding: 0.25rem 1rem;
  background-color: #1b425f;
  border-radius: 20px;
`;

const ElementImg = styled.img`
  margin: 0.5rem;
  height: 8rem;
  padding: 0.25rem 1rem;
  border-radius: 15px;
`;

const ElementData = styled.h3`
  margin: 0.3rem 0;
  font-size: 1rem;
  font-weight: bold;
`;

export class VideogameElement extends Component {
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
      funcType: props.funcType,
      funSelVid: props.funSelVid,
    };
  }

  componentWillMount() {}

  componentDidMount() {
    this.setState({
      status: true,
    });
  }

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.status === true;
  }

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {
    //console.log(this.state.videogame);
  }

  componentWillUnmount() {}

  render() {
    const clickOnElement = () => {
      this.props.funcType(this.state.videogame);
      this.props.funcType('edit');
      this.setState({
        status: true,
      });
    };

    return (
      <ElementButton onClick={clickOnElement}>
        <ElementImg
          alt="Videogame-image"
          src={storageUrl + this.state.videogame.imagen_videojuego.file_name}
        ></ElementImg>
        <ElementData>{this.state.videogame.nombre_videojuego}</ElementData>
      </ElementButton>
    );
  }
}
