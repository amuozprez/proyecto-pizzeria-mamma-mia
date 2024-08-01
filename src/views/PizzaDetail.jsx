import React from "react";
import { useParams } from "react-router-dom";
import { usePizzas } from "../context/PizzaContext";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";

function PizzaDetail() {
  const { id } = useParams();
  const { pizzas, addToCart } = usePizzas();
  const pizza = pizzas.find((p) => p.id === id);

  return (
    <Container className="mt-4">
      {pizza ? (
        <Card>
          <Row className="g-0">
            <Col md={4} className="d-flex align-items-center justify-content-center">
              <img
                src={pizza.img}
                alt={pizza.name}
                className="img-fluid rounded-image"
              />
            </Col>
            <Col md={8}>
              <Card.Body>
                <Card.Title className="text-center">
                  {pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}
                </Card.Title>
                <Card.Text>{pizza.desc}</Card.Text>
                <ListGroup variant="flush">
                  {pizza.ingredients.map((ingredient, index) => (
                    <ListGroup.Item key={index}>
                      <i className="bi bi-check-circle"></i>{" "}
                      {ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                <h4 className="mt-3">${pizza.price}</h4>
                <div className="d-flex justify-content-center">
                  <Button variant="primary" className="me-2" onClick={() => addToCart(pizza)}>
                    Añadir al Carrito
                  </Button>
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      ) : (
        <p>Pizza no encontrada</p>
      )}
    </Container>
  );
}

export default PizzaDetail;