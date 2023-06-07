import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const Search = ({word, setWord, handleSubmit}) => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs = {12} md = {8} lg = {6}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col xs = {9}>
                <Form.Control 
                    type = "text"
                    value = {word} 
                    onChange={(e) => setWord(e.target.value)} // without this we cant enter anything in the search form
                    placeholder="Search for new image..." />
              </Col>
              <Col>
                <Button variant="primary" type="submit">
                  Search i
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};


// here main container contains 12 parts
// out of that first nine is for placeholder and remaining for buttoe
export default Search;
