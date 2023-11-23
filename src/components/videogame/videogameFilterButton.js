import styled from 'styled-components';

import React, { Component } from 'react';

const Button = styled.button`
  display: flex;
  color: #ffffff;
  font-family: 'Inter', Helvetica;
  font-size: 1.8rem;
  font-weight: 400;
  margin: 0.5rem;
  padding: 0.25rem 1rem;
  background-color: transparent;
`;

export class VideogameFilterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      text: props.text,
      videogame_id: props.videogame_id,
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
    return <Button>{this.props.text}</Button>;
  }
}
