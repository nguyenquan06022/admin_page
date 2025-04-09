import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Card from "../components/Card";
import CustomerTable from "../components/CustomerTable";

function DashBoard() {
  const [metrics, setMetrics] = useState({
    turnover: { amount: "0", percent: "0%" },
    profit: { amount: "0", percent: "0%" },
    newCustomer: { amount: "0", percent: "0%" },
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [turnoverRes, profitRes, newCustomerRes] = await Promise.all([
          fetch("http://localhost:3001/api/turnover"),
          fetch("http://localhost:3001/api/profit"),
          fetch("http://localhost:3001/api/new-customer"),
        ]);

        if (!turnoverRes.ok || !profitRes.ok || !newCustomerRes.ok) {
          throw new Error("Failed to fetch data");
        }

        const [turnoverData, profitData, newCustomerData] = await Promise.all([
          turnoverRes.json(),
          profitRes.json(),
          newCustomerRes.json(),
        ]);

        setMetrics({
          turnover: {
            amount: turnoverData[0].value.toLocaleString(),
            percent: `${turnoverData[0].changePercentage}%`,
          },
          profit: {
            amount: profitData[0].value.toLocaleString(),
            percent: `${profitData[0].changePercentage}%`,
          },
          newCustomer: {
            amount: newCustomerData[0].value.toLocaleString(),
            percent: `${newCustomerData[0].changePercentage}%`,
          },
        });
      } catch (error) {
        console.error("Error fetching data:", error);
        setMetrics({
          turnover: { amount: "92,405", percent: "5.39%" },
          profit: { amount: "92,405", percent: "5.39%" },
          newCustomer: { amount: "92,405", percent: "5.39%" },
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="p-3">Loading...</div>;
  }

  return (
    <div className="p-3">
      <div className="d-flex gap-2">
        <img src="images/Squares four 1.png" alt="" />
        <p style={{ marginBottom: 0, fontWeight: "bold" }}>Overview</p>
      </div>
      <br />
      <Row>
        <Col>
          <Card
            title={"Turnover"}
            amount={metrics.turnover.amount}
            image={"images/Button 1509.png"}
            percent={metrics.turnover.percent}
            color={"rgb(255, 240, 245)"}
          />
        </Col>
        <Col>
          <Card
            title={"Profit"}
            amount={metrics.profit.amount}
            image={"images/Button 1529.png"}
            percent={metrics.profit.percent}
            color={"rgb(239, 246, 254)"}
          />
        </Col>
        <Col>
          <Card
            title={"New customer"}
            amount={metrics.newCustomer.amount}
            image={"images/Button 1530.png"}
            percent={metrics.newCustomer.percent}
            color={"rgb(239, 246, 254)"}
          />
        </Col>
      </Row>
      <br />
      <CustomerTable />
    </div>
  );
}

export default DashBoard;
