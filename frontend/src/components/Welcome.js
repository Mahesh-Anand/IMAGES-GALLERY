import React from "react";
import { Jumbotron, Button } from "react-bootstrap";


const Welcome = () => (
    <Jumbotron>
  <h1>Images Gallery</h1>
  <p>
    This is a simple simple application that retives photos using unsplash api.In order to start enter any start term in the input field
  </p>
  <p>
    <Button variant="primary" hred = "https://unsplash.com" target="_blank">Learn more</Button>
  </p>
</Jumbotron>
)

export default Welcome