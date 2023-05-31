import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ImageCardWithError = ({ image,deleteImage }) => {
  if (!image) {
    return null; // or return a placeholder component/render nothing
  }
  const imageUrl = image.urls?.small;
  const title = image.title?.toUpperCase();
  //   The ? in image.urls?.small is the optional chaining operator in JavaScript.
  //  It is used to safeguard against errors when accessing nested properties of an object.
  const description = image.description || image.alt_description;

  return (
    <Card style={{ width: '18rem' }}>
      {imageUrl && <Card.Img variant="top" src={imageUrl} />}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" onClick={() => deleteImage(image.id)}>Delete</Button>
      </Card.Body>
    </Card> 
  );
};

export default ImageCardWithError;
