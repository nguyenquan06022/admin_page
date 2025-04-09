import React, { useEffect, useState } from "react";

const statusColors = {
  New: "#E0F2FF",
  "In-progress": "#FFF5E0",
  Completed: "#E0FFE5",
};

const textColors = {
  New: "#2196F3",
  "In-progress": "#FFA726",
  Completed: "#4CAF50",
};

const CustomerTable = () => {
  const [customers, setCustomers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const customersPerPage = 6;

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = () => {
    fetch("http://localhost:3001/api/customers")
      .then((res) => res.json())
      .then((data) => setCustomers(data))
      .catch((err) => console.error("Error fetching customers:", err));
  };

  const handleEditClick = (customer) => {
    setEditingCustomer({ ...customer });
    setIsModalOpen(true);
  };

  const handleSave = async () => {
    try {
      await fetch(
        `http://localhost:3001/api/customers/edit/${editingCustomer.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editingCustomer),
        }
      );
      setIsModalOpen(false);
      fetchCustomers();
    } catch (error) {
      console.error("Error updating customer:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingCustomer((prev) => ({ ...prev, [name]: value }));
  };

  const totalPages = Math.ceil(customers.length / customersPerPage);
  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = customers.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );

  const getPaginationRange = () => {
    const range = [];
    const left = 2;
    const right = 2;

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) range.push(i);
    } else {
      if (currentPage <= left + 1) {
        range.push(...[1, 2, 3, "...", totalPages - 1, totalPages]);
      } else if (currentPage >= totalPages - right) {
        range.push(
          ...[1, 2, "...", totalPages - 2, totalPages - 1, totalPages]
        );
      } else {
        range.push(
          ...[
            1,
            "...",
            currentPage - 1,
            currentPage,
            currentPage + 1,
            "...",
            totalPages,
          ]
        );
      }
    }
    return range;
  };

  return (
    <div style={{ overflowX: "auto", borderRadius: "8px", padding: "16px" }}>
      {/* Header */}
      <div className="d-flex" style={{ justifyContent: "space-between" }}>
        <div
          className="d-flex gap-2 flex-grow-1"
          style={{ alignItems: "center" }}
        >
          <img src="images/File text 1.png" alt="" />
          <p style={{ marginBottom: 0, fontWeight: "bold" }}>Detailed report</p>
        </div>
        <div>
          <button
            className="btn"
            style={{
              backgroundColor: "white",
              borderColor: "rgb(244, 75, 134)",
              color: "rgb(244, 75, 134)",
            }}
          >
            Add User
          </button>
        </div>
      </div>
      <br />
      {/* Table */}
      <table
        style={{ width: "100%", borderCollapse: "collapse", minWidth: "800px" }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5", textAlign: "left" }}>
            <th style={thStyle}>
              <input type="checkbox" />
            </th>
            <th style={thStyle}>CUSTOMER NAME</th>
            <th style={thStyle}>COMPANY</th>
            <th style={thStyle}>ORDER VALUE</th>
            <th style={thStyle}>ORDER DATE</th>
            <th style={thStyle}>STATUS</th>
            <th style={thStyle}></th>
          </tr>
        </thead>
        <tbody>
          {currentCustomers.map((customer, index) => (
            <tr
              key={index}
              style={{
                borderBottom: "1px solid #e0e0e0",
                backgroundColor: "#fff",
              }}
            >
              <td style={tdStyle}>
                <input type="checkbox" />
              </td>
              <td style={tdStyle}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <img
                    src={customer.avatar || "images/default-avatar.png"}
                    alt="avatar"
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <span>{customer.name}</span>
                </div>
              </td>
              <td style={tdStyle}>{customer.company}</td>
              <td style={tdStyle}>${customer.orderValue}</td>
              <td style={tdStyle}>{customer.orderDate}</td>
              <td style={tdStyle}>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "12px",
                    fontSize: "12px",
                    backgroundColor: statusColors[customer.status] || "#eee",
                    color: textColors[customer.status] || "#333",
                    fontWeight: 500,
                  }}
                >
                  {customer.status}
                </span>
              </td>
              <td style={tdStyle}>
                <img
                  src="images/create.png"
                  alt="Edit"
                  style={{
                    width: "16px",
                    height: "16px",
                    cursor: "pointer",
                    opacity: 0.6,
                    transition: "opacity 0.2s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.opacity = 1)}
                  onMouseOut={(e) => (e.currentTarget.style.opacity = 0.6)}
                  onClick={() => handleEditClick(customer)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      {/* Pagination */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p style={{ fontSize: "14px", fontWeight: 500, marginBottom: 0 }}>
          {customers.length} results
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            style={arrowButtonStyle}
          >
            {"<"}
          </button>
          {getPaginationRange().map((page, index) =>
            page === "..." ? (
              <span
                key={index}
                style={{ padding: "6px 10px", fontSize: "14px", color: "#999" }}
              >
                ...
              </span>
            ) : (
              <button
                key={index}
                onClick={() => setCurrentPage(page)}
                style={{
                  ...pageButtonStyle,
                  backgroundColor: currentPage === page ? "#ff4081" : "#fff",
                  color: currentPage === page ? "#fff" : "#333",
                  border: currentPage === page ? "none" : "1px solid #ccc",
                }}
              >
                {page}
              </button>
            )
          )}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            style={arrowButtonStyle}
          >
            {">"}
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && editingCustomer && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            <h3>Edit Customer</h3>
            <input
              type="text"
              name="name"
              value={editingCustomer.name}
              onChange={handleChange}
              placeholder="Name"
              style={inputStyle}
            />
            <input
              type="text"
              name="company"
              value={editingCustomer.company}
              onChange={handleChange}
              placeholder="Company"
              style={inputStyle}
            />
            <input
              type="number"
              name="orderValue"
              value={editingCustomer.orderValue}
              onChange={handleChange}
              placeholder="Order Value"
              style={inputStyle}
            />
            <input
              type="text"
              name="orderDate"
              value={editingCustomer.orderDate}
              onChange={handleChange}
              placeholder="Order Date"
              style={inputStyle}
            />
            <select
              name="status"
              value={editingCustomer.status}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="New">New</option>
              <option value="In-progress">In-progress</option>
              <option value="Completed">Completed</option>
            </select>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "8px",
              }}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                style={{ padding: "6px 12px" }}
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                style={{
                  padding: "6px 12px",
                  backgroundColor: "#4CAF50",
                  color: "#fff",
                  border: "none",
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Styles
const thStyle = {
  padding: "12px 16px",
  fontWeight: "bold",
  fontSize: "14px",
  borderBottom: "1px solid #e0e0e0",
};

const tdStyle = {
  padding: "12px 16px",
  fontSize: "14px",
  verticalAlign: "middle",
};

const arrowButtonStyle = {
  padding: "6px 10px",
  backgroundColor: "#fff",
  border: "1px solid #ccc",
  borderRadius: "4px",
  cursor: "pointer",
};

const pageButtonStyle = {
  padding: "6px 10px",
  borderRadius: "4px",
  fontSize: "14px",
  cursor: "pointer",
};

const inputStyle = {
  width: "100%",
  padding: "8px",
  marginBottom: "10px",
  border: "1px solid #ccc",
  borderRadius: "4px",
};

const modalOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

const modalContentStyle = {
  backgroundColor: "#fff",
  padding: "24px",
  borderRadius: "8px",
  width: "400px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
};

export default CustomerTable;
