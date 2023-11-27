import React, { Component } from 'react';
import { NewsElement } from './newsElement';
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
  width: 100%;
  height: 100%;
  margin: 1rem 1rem;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #284a6a;
`;

export class ListOfNewsElements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      news: [],
      filter: props.selVideogame || '',
      textFilter: props.textFilter || '',
    };
  }

  componentWillMount() {}

  async componentDidMount() {
    await axios
      .get(
        url +
          'news/' +
          (this.state.textFilter !== ''
            ? 'search/' + this.state.textFilter
            : ''),
        this.state.filter !== ''
          ? { videojuego_noticia: this.state.filter }
          : {},
        config
      )
      .then((response) => {
        this.setState({
          status: true,
          news: response.data,
        });
        console.log(response.data);
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
        {this.state.news.map((x, i) => (
          <NewsElement key={i} news={x} />
        ))}
      </ListContainer>
    );
  }
}
