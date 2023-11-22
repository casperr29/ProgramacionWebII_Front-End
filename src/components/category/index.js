import {Button, Col} from 'react-bootstrap';

export const Category = ({
  text = 'Categoria',
  color = 'primary',
  path = 'www.google.com'
}) =>
(
  <Col><Button variant={color} href={path}><h1>{text}</h1></Button></Col>
);
