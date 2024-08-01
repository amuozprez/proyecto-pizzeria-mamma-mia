import React from "react";
import PizzaCard from "../components/PizzaCard";
import { usePizzas } from "../context/PizzaContext";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  const { pizzas } = usePizzas();

  return (
    <Container>
      <Row>
        {pizzas.map((pizza) => (
          <Col key={pizza.id} xs={12} sm={6} md={4}>
            <PizzaCard pizza={pizza} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;