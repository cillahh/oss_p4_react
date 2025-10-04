import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const TotalCard = ({ products }) => {
  const subtotal = products.reduce(
    (acc, product) => acc + (parseInt(product.price.replace(/,/g, ""), 10)) * (product.amount || 1),
    0
  );
  const tax = subtotal * 0.18;
  const shipping = subtotal > 1000 ? 0 : 25;
  const total = subtotal + tax + shipping;

   const formatCurrency = (num) => num.toLocaleString("ko-KR");

  return (
    <Card style={{ width: "20rem", height: "10rem" }}>
      <ListGroup variant="flush">
        <ListGroup.Item className="d-flex">
          Subtotal <span className="ms-auto">{formatCurrency(subtotal)} ₩</span>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex">
          Tax <span className="ms-auto">${formatCurrency(tax)} ₩</span>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex">
          Shipping <span className="ms-auto">${formatCurrency(shipping)} ₩</span>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex">
          Total <span className="ms-auto">${formatCurrency(total)} ₩</span>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default TotalCard;
