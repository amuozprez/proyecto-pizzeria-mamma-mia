import React from "react";
import { usePizzas } from "../context/PizzaContext";
import { Card, Button, Row, Col } from "react-bootstrap";

function CartItem({ item }) {
  const { removeFromCart, incrementQuantity, decrementQuantity } = usePizzas();

  return (
    <Card className="mb-3">
      <Row className="g-0">
        <Col md={4} className="d-flex align-items-center justify-content-center">
          <Card.Img src={item.img} alt={item.name} className="img-fluid cart-image" />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              Precio: ${item.price} <br />
              Cantidad: {item.quantity}
            </Card.Text>
            <div className="d-flex justify-content-between">
              <div>
                <Button variant="secondary" onClick={() => decrementQuantity(item.id)}>-</Button>
                <Button variant="secondary" onClick={() => incrementQuantity(item.id)}>+</Button>
              </div>
              <Button variant="danger" onClick={() => removeFromCart(item.id)}>Eliminar</Button>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default CartItem;