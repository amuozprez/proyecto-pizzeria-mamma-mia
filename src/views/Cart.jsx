import React from "react";
import CartItem from "../components/CartItem";
import { usePizzas } from "../context/PizzaContext";
import { Container, Row, Col, Card } from "react-bootstrap";

function Cart() {
  const { cart } = usePizzas();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Container className="mt-4">
      <h2>Carrito de Compras</h2>
      <Row>
        {cart.map((item) => (
          <Col key={item.id} xs={12} md={6}>
            <CartItem item={item} />
          </Col>
        ))}
      </Row>
      <Card className="mt-4">
        <Card.Body className="text-center">
          <Card.Title>Total: ${total}</Card.Title>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Cart;