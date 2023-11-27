import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { Articulo } from '../../pages/Articulo';

const NewsLinker = () => {
  let { id } = useParams();

  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.

  return <Articulo newsId={id} />;
};

export default NewsLinker;
