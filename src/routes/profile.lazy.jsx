import { createLazyFileRoute } from "@tanstack/react-router";
import { Row, Col, Card } from "react-bootstrap";
import { useEffect, useState } from "react";

export const Route = createLazyFileRoute("/profile")({
  component: Profile,
});

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // get token from local storage
    const token = localStorage.getItem("token");
    if (!token) {
      window.location = "/login";
    } else {
      // hit api auth get profile and pass the token to the function
      getProfile(token);
    }
  }, []);

  const getProfile = async (token) => {
    // fetch get profile
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/auth/profile`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
        method: "GET",
      }
    );

    // get data
    const result = await response.json();
    if (result.success) {
      // set the user state here
      setUser(result.data);
      return;
    }

    alert(result.message);
  };
  return (
    <Row className="mt-5">
      <Col className="offset-md-3">
        <Card>
          <Card.Body>
            <Card.Img variant="top" src={user?.profile_picture} />
            <Card.Title>{user?.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {user?.email}
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}></Col>
    </Row>
  );
}
