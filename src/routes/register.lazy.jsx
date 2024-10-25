import { createLazyFileRoute } from "@tanstack/react-router";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const Route = createLazyFileRoute("/register")({
  component: Register,
});

function Register() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div style={{ maxWidth: "650px", width: "100%" }}>
        <Card className="shadow-lg">
          <Card.Header className="text-center bg-success text-white fs-4 fw-bold">
            Register
          </Card.Header>
          <Card.Body className="p-4">
            <Card.Title className="text-center fs-5 mb-4">
              Create Your Account
            </Card.Title>
            <Form>
              {/* Name */}
              <Form.Group as={Row} className="mb-3" controlId="formName">
                <Form.Label column sm="4" className="fw-semibold">
                  Name
                </Form.Label>
                <Col sm="8">
                  <Form.Control type="text" placeholder="Enter name" />
                </Col>
              </Form.Group>

              {/* Email */}
              <Form.Group as={Row} className="mb-3" controlId="formEmail">
                <Form.Label column sm="4" className="fw-semibold">
                  Email
                </Form.Label>
                <Col sm="8">
                  <Form.Control type="email" placeholder="Enter email" />
                </Col>
              </Form.Group>

              {/* Password */}
              <Form.Group as={Row} className="mb-3" controlId="formPassword">
                <Form.Label column sm="4" className="fw-semibold">
                  Password
                </Form.Label>
                <Col sm="8">
                  <Form.Control type="password" placeholder="Enter password" />
                </Col>
              </Form.Group>

              {/* Confirm Password */}
              <Form.Group
                as={Row}
                className="mb-4"
                controlId="formConfirmPassword"
              >
                <Form.Label column sm="4" className="fw-semibold">
                  Confirm Password
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    type="password"
                    placeholder="Confirm password"
                  />
                </Col>
              </Form.Group>

              {/* Profile Picture */}
              <Form.Group
                as={Row}
                className="mb-4"
                controlId="formProfilePicture"
              >
                <Form.Label column sm="4" className="fw-semibold">
                  Profile Picture
                </Form.Label>
                <Col sm="8">
                  <Form.Control type="file" />
                </Col>
              </Form.Group>

              {/* Register Button */}
              <Button variant="success" type="submit" className="w-100 fw-bold">
                Register
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
