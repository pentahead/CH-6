import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";

const NavigationBar = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    console.log("i will run when navigation bar loaded...");
  }, []);

  useEffect(() => {
    // get token from local storage
    const token = localStorage.token;

    if (token) {
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

    //jika token yang dimasukan tidak valid/ngawur
    localStorage.removeItem("token");

    //redirect to login
    window.location = "/login";
  };

  const logout = (event) => {
    event.preventDefault();

    // delete the local storage here
    localStorage.removeItem("token");

    //redirect to login
    window.location = "/login";
  };
  // useEffect(() => {
  //   console.log(test);
  // }, [test]);
  // setTimeout(() => {
  //   setTest("waht");
  // }, 2000);
  // setTimeout(() => {
  //   setTest("dem");
  // }, 3000);

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Student of Wakanda
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Nav>
          <Nav>
            {user ? (
              <>
                <Nav.Link as={Link} to="/profile">
                  <Image
                    src={user?.profile_picture}
                    fluid
                    style={{
                      width: "30px",
                      height: "30px",
                      display: "inline-block",
                      overflow: "hidden",
                      borderRadius: "50%",
                    }}
                  />{" "}
                  {user?.name}
                </Nav.Link>
                <Nav.Link onClick={logout}>Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavigationBar;
