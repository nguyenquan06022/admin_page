import React from "react";

function Card({ title, amount, image, percent, color }) {
  return (
    <div
      style={{
        backgroundColor: color,
        padding: 15,
        borderRadius: 8,
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <div
        className="d-flex"
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <p style={{ fontWeight: "bold", margin: 0 }}>{title}</p>
        <img src={image} alt="" />
      </div>
      <div>
        <h3 style={{ fontWeight: "bold", margin: 0 }}>${amount}</h3>
      </div>
      <div style={{ marginTop: 8 }}>
        <p style={{ margin: 0, color: "grey" }}>
          <span
            style={{
              color: percent.startsWith("-") ? "red" : "green",
              fontWeight: "bold",
            }}
          >
            {percent}
          </span>{" "}
          period of change
        </p>
      </div>
    </div>
  );
}

export default Card;
