import React, { useState } from "react";
import "../assets/styles/Order.css";

export default function Orders() {
  const [orders, setOrders] = useState([
    { id: 1, service: "Plumbing", status: "Pending", customer: "John Doe" },
    {
      id: 2,
      service: "Salon Appointment",
      status: "Completed",
      customer: "Jane Smith",
    },
    {
      id: 3,
      service: "Electrical Repair",
      status: "Pending",
      customer: "Michael Johnson",
    },
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Open the modal with selected order details
  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  // Close the modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedOrder(null);
  };

  // Mark order as completed
  const handleMarkAsCompleted = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: "Completed" } : order
      )
    );
  };

  return (
    <div className="orders-container">
      <h2>Your Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Service</th>
            <th>Status</th>
            <th>Customer</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.service}</td>
              <td>{order.status}</td>
              <td>{order.customer}</td>
              <td>
                <button onClick={() => handleViewDetails(order)}>
                  View Details
                </button>
                {order.status === "Pending" && (
                  <button onClick={() => handleMarkAsCompleted(order.id)}>
                    Mark as Completed
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal Popup */}
      {showModal && selectedOrder && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h3>Order Details</h3>
            <p>
              <strong>Order ID:</strong> {selectedOrder.id}
            </p>
            <p>
              <strong>Service:</strong> {selectedOrder.service}
            </p>
            <p>
              <strong>Status:</strong> {selectedOrder.status}
            </p>
            <p>
              <strong>Customer:</strong> {selectedOrder.customer}
            </p>
            <button className="close-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
