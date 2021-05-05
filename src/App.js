import { Navbar, Nav, Image, Button } from "react-bootstrap";
import { FaDiscord } from "react-icons/fa";

function App() {
  return (
    <div className={"App-Main"}>
      <div className={"Navbar"}>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <span style={{ fontFamily: "Balsamiq Sans" }}>Dashboard</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <span style={{ fontFamily: "Krona One" }}>Home</span>
              </Nav.Link>
              <Nav.Link>
                <span style={{ fontFamily: "Krona One" }}>Dashboard</span>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <span style={{ fontFamily: "Krona One" }}>
                  Sign In &nbsp; <FaDiscord />{" "}
                </span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className={"App-Hero"}>
        <p align="center" style={{paddingTop: "70px"}}>
        <Image height={150} draggable={false} className={"Hero-Img"} src="https://cdn.discordapp.com/avatars/769841844795867137/81de51c0cfcb9881873f4df33636cccf.png?size=128" roundedCircle/>
        </p>
        <p align="center">
        <span className={"Hero-Title"}>Musix v2</span>
        </p>
        <p align="center">
          <Button>
            <span style={{fontFamily: "Balsamiq Sans"}}>
            Invite Me
            </span>
          </Button>
          &nbsp; &nbsp; &nbsp;
          <Button variant="danger">
            <span style={{fontFamily: "Balsamiq Sans"}}>
            Dashboard
            </span>
          </Button>
        </p>
      </div>
    </div>
  );
}

export default App;
