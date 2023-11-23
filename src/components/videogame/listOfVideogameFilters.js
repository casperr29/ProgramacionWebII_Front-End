import React, { Component } from 'react';
import { VideogameFilterButton } from './videogameFilterButton';
import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 4rem;
  width: 80%;
  margin: 2rem 1rem;
  padding: 2rem 3rem;
  border-radius: 1rem;
  background-color: #284a6a;
`;

export class ListOfVideogameFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Videogames: props.Videogames,
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    var Videogames = this.state.Videogames || [
      { text: 'Videojuego1' },
      { text: 'Videojuego1' },
      { text: 'Videojuego1' },
      { text: 'Videojuego1' },
      { text: 'Videojuego1' },
    ];

    return (
      <ListContainer>
        {Videogames.map((x, i) => (
          <VideogameFilterButton key={i} text={x.text} />
        ))}
      </ListContainer>
    );
  }
}
