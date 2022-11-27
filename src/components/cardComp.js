import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardComp=({coin})=> {
  return (
    <div className='col-3 p-2'>
        <Card >
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{coin.title}</Card.Title>
        <Card.Text>
          {coin.desc}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default CardComp;