import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import MyNav from "./components/MyNav";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Container
        style={{
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <Row>
          <Col
            md={2}
            style={{
              borderRight: "1px solid rgba(128, 128, 128, 0.3)",
              padding: 10,
            }}
          >
            <MyNav></MyNav>
          </Col>
          <Col md={10}>
            <Row>
              <Header></Header>
            </Row>
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
