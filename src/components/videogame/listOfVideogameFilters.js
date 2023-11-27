import React, { Component } from 'react';
import { VideogameFilterButton } from './videogameFilterButton';
import axios from 'axios';
import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 4rem;
  width: fit-content;
  margin: 2rem 1rem;
  padding: 2rem 1rem;
  border-radius: 1rem;
  background-color: #284a6a;
`;

export class ListOfVideogameFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Videogames: props.Videogames,
      funSelVid: props.funSelVid,
      selVideogame: props.selVideogame,
      textFilter: props.textFilter
    };
  }

  componentWillMount() {}

  componentDidMount() {
    const videogames = [];

    this.setState({
      status: true,
      videogames: videogames,
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
    var Videogames = this.state.Videogames || [
      { nombre_videojuego: 'Videojuego1' },
      { nombre_videojuego: 'Videojuego1' },
      { nombre_videojuego: 'Videojuego1' },
      { nombre_videojuego: 'Videojuego1' },
      { nombre_videojuego: 'Videojuego1' },
    ];

    return (
      <ListContainer>
        {Videogames.map((x, i) => (
          <VideogameFilterButton
            key={i}
            text={x.nombre_videojuego}
            funSelVid={this.props.funSelVid}
          />
        ))}
      </ListContainer>
    );
  }
}
