import { createLazyFileRoute } from "@tanstack/react-router";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const Route = createLazyFileRoute("/login")({
  component: Login,
});

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div style={{ maxWidth: "650px", width: "100%" }}>
        <Card className="shadow-lg">
          <Card.Header className="text-center bg-primary text-white fs-4 fw-bold">
            Welcome Back!
          </Card.Header>
          <Card.Body className="p-4">
            <Card.Title className="text-center fs-5 mb-4">
              Login to Your Account
            </Card.Title>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="formEmail">
                <Form.Label column sm="3" className="fw-semibold">
                  Email
                </Form.Label>
                <Col sm="9">
                  <Form.Control type="email" placeholder="Enter email" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-4" controlId="formPassword">
                <Form.Label column sm="3" className="fw-semibold">
                  Password
                </Form.Label>
                <Col sm="9">
                  <Form.Control type="password" placeholder="Enter password" />
                </Col>
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100 fw-bold">
                Login
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
