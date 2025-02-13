import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const ServiceRequest = () => {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    serviceName: "",
    serviceDesc: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [showServiceList, setShowServiceList] = useState(false);

  // Handle Input Change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Form Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.serviceName || !formData.serviceDesc) {
      alert("Please enter both Service Name and Description.");
      return;
    }

    setServices([...services, formData]);
    setFormData({ serviceName: "", serviceDesc: "" });
    setShowPopup(true);
  };

  return (
    <div className="container my-5">
      <style>
        {`
          /* Popup Overlay */
          .popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
          }

          /* Popup Box */
          .popup-box {
            background: white;
            padding: 20px;
            border-radius: 10px;
            width: 400px;
            text-align: center;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>

      <div className="row justify-content-center">
        <div className="col-md-8 p-4 shadow rounded bg-light">
          <h1 className="text-center mb-4 text-primary">Add a Service</h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Service Name</label>
              <input
                type="text"
                name="serviceName"
                className="form-control"
                placeholder="Enter Service Name"
                value={formData.serviceName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Service Description</label>
              <textarea
                name="serviceDesc"
                className="form-control"
                placeholder="Enter Service Description"
                value={formData.serviceDesc}
                onChange={handleInputChange}
                rows="3"
                required
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Add Now
              </button>
            </div>
          </form>

          {/* Added Services List Button */}
          {services.length > 0 && (
            <div className="text-center mt-3">
              <button
                className="btn btn-success"
                onClick={() => setShowServiceList(true)}
              >
                Show Added Services
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Popup for Added Service */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h4>Service Added!</h4>
            <p>
              <strong>Name:</strong> {services[services.length - 1].serviceName}
            </p>
            <p>
              <strong>Description:</strong>{" "}
              {services[services.length - 1].serviceDesc}
            </p>
            <button
              className="btn btn-primary"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Service List Modal */}
      {showServiceList && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h4>Added Services</h4>
            <ul className="list-group">
              {services.map((service, index) => (
                <li key={index} className="list-group-item">
                  <strong>{service.serviceName}:</strong> {service.serviceDesc}
                </li>
              ))}
            </ul>
            <button
              className="btn btn-danger mt-3"
              onClick={() => setShowServiceList(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceRequest;
