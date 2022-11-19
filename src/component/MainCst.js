import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MainCst = ({name,profession}) => {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="./component/img/téléchargement.png" alt= "Houssem"/>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
       {profession}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
    </div>
  )
}

export default MainCst
