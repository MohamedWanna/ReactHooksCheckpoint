import React from "react";
import { Card } from "react-bootstrap";
import { Rating } from 'react-simple-star-rating'
const MovieCard = ({ el }) => {
  return (
    <div className="image-container">
      <Card className="card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={el.poster} alt={el.title} />
        <Card.Body>
          <Card.Title className="cardtitle">{el.title}</Card.Title>
          <Card.Text className="cardtext">{el.description}</Card.Text>
          <Card.Text><Rating  ratingValue={el.rate} /* Available Props */readonly={true}/></Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
