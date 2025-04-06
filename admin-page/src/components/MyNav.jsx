import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function MyNav() {
  return (
    <div style={{ padding: 10 }}>
      <div>
        <img src="images/Image 1858.png" alt="" />
      </div>
      <Nav className="flex-column">
        <Nav.Link as={Link} to={"/"} style={{ paddingLeft: "0" }}>
          <div style={{ display: "flex", alignItems: "center", color: "grey" }}>
            <img src="images/Squares four 1.png" alt="" />
            Dashboard
          </div>
        </Nav.Link>
        <Nav.Link as={Link} to={"/"} style={{ paddingLeft: "0" }}>
          <div style={{ display: "flex", alignItems: "center", color: "grey" }}>
            <img src="images/Folder.png" alt="" />
            Projects
          </div>
        </Nav.Link>
        <Nav.Link as={Link} to={"/"} style={{ paddingLeft: "0" }}>
          <div style={{ display: "flex", alignItems: "center", color: "grey" }}>
            <img src="images/Groups.png" alt="" />
            Team
          </div>
        </Nav.Link>
        <Nav.Link as={Link} to={"/"} style={{ paddingLeft: "0" }}>
          <div style={{ display: "flex", alignItems: "center", color: "grey" }}>
            <img src="images/Pie chart.png" alt="" />
            Analytics
          </div>
        </Nav.Link>
        <Nav.Link as={Link} to={"/"} style={{ paddingLeft: "0" }}>
          <div style={{ display: "flex", alignItems: "center", color: "grey" }}>
            <img src="images/Chat.png" alt="" />
            Message
          </div>
        </Nav.Link>
        <Nav.Link as={Link} to={"/"} style={{ paddingLeft: "0" }}>
          <div style={{ display: "flex", alignItems: "center", color: "grey" }}>
            <img src="images/Code.png" alt="" />
            Integrations
          </div>
        </Nav.Link>
      </Nav>
      <div
        style={{
          backgroundColor: "rgb(239, 246, 255)",
          padding: 20,
          borderRadius: 10,
          display: "flex",
          flexDirection: "column",
          marginTop: 20,
        }}
      >
        <img src="images/Group.png" alt="" />
        <br />
        <button
          className="btn"
          style={{ backgroundColor: "white", borderColor: "blue" }}
        >
          Try Now
        </button>
      </div>
    </div>
  );
}

export default MyNav;
