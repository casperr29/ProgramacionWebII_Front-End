import React, { Component } from 'react';
import { VideogameElement } from './videogameElement';
import styled from 'styled-components';
import axios from 'axios';
import api from '../../utilities/api.json';
import Cookies from 'universal-cookie';

const url = api.link;
const cookies = new Cookies();

const config = {
  headers: { Authorization: `Bearer ${cookies.get('token')}` },
};

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
  height: 100%;
  width: 85%;
  height: 100%;
  margin: 2rem 1rem;
  padding: 2rem;
  border-radius: 1rem;
  background-color: #284a6a;
`;

export class ListOfVideogameElements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      videogames: [],
      funcType: props.funcType,
      funSelVid: props.funSelVid,
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

  render() {
    return (
      <ListContainer>
        {this.state.videogames.map((x, i) => (
          <VideogameElement
            key={i}
            videogame={x}
            funcType={this.props.funcType}
            funSelVid={this.props.funSelVid}
          />
        ))}
      </ListContainer>
    );
  }
}
