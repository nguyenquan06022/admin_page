import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function MyNav() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const navItems = [
    { name: "Dashboard", icon: "images/Squares four 1.png", to: "/" },
    { name: "Projects", icon: "images/Folder.png", to: "/project" },
    { name: "Team", icon: "images/Groups.png", to: "/team" },
    { name: "Analytics", icon: "images/Pie chart.png", to: "/analytics" },
    { name: "Message", icon: "images/Chat.png", to: "/message" },
    { name: "Integrations", icon: "images/Code.png", to: "/integrations" },
  ];

  const getLinkStyle = (itemName) => ({
    paddingLeft: "0",
    backgroundColor: activeItem === itemName ? "#F44B86" : "transparent",
    color: activeItem === itemName ? "white" : "grey",
    borderRadius: 6,
    padding: "8px 10px",
    marginBottom: 5,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontWeight: 500,
    textDecoration: "none",
  });

  return (
    <div>
      <div>
        <img src="images/Image 1858.png" alt="" />
      </div>
      <br />
      <Nav className="flex-column">
        {navItems.map((item) => (
          <Nav.Link
            key={item.name}
            as={Link}
            to={item.to}
            onClick={() => setActiveItem(item.name)}
            style={getLinkStyle(item.name)}
          >
            <img src={item.icon} alt="" />
            {item.name}
          </Nav.Link>
        ))}
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
        <h4 style={{ textAlign: "center" }}>V2.0 is available</h4>
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
