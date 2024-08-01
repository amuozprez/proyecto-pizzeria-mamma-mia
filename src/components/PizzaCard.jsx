import React from "react";
import { useNavigate } from "react-router-dom";
import { usePizzas } from "../context/PizzaContext";
import { Card, Button, ListGroup } from "react-bootstrap";
import { FaPizzaSlice } from "react-icons/fa";
import { capitalize } from "../utils/capitalize";

function PizzaCard({ pizza }) {
  const navigate = useNavigate();
  const { addToCart } = usePizzas();

  const irPizza = () => navigate(`/pizza/${pizza.id}`);

  return (
    <Card className="mb-4 text-center">
      <Card.Img variant="top" src={pizza.img} alt={capitalize(pizza.name)} />
      <Card.Body>
        <Card.Title className="text-center">{capitalize(pizza.name)}</Card.Title>
        <ListGroup variant="flush" className="text-start mb-3">
          {pizza.ingredients.map((ingredient, index) => (
            <ListGroup.Item key={index} className="d-flex align-items-center">
              <FaPizzaSlice className="mr-2" /> {capitalize(ingredient)}
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Card.Text className="text-center font-weight-bold" style={{ fontSize: "1.2em" }}>
          ${pizza.price}
        </Card.Text>
        <div className="d-flex justify-content-center mt-3">
          <Button variant="primary" onClick={irPizza} className="mx-2">Ver Detalles</Button>
          <Button variant="success" onClick={() => addToCart(pizza)} className="mx-2">Agregar al Carrito</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PizzaCard;