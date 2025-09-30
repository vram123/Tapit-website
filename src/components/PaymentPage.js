import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "./Payment.css";
import axios from "axios";

function PaymentPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    url: "",
    numCards: 1,
    paymentMethod: "Zelle",
    delivery: "Campus",
    note: "",
    street: "",
    city: "",
    state: "",
    zip: ""
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowPopup(true);

    try {
      const response = await axios.post("https://tapit-server.onrender.com/api/order_complete", formData);

    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
    // Later backend dev will hook into email/delivery logic
    console.log("Order submitted:", formData);
  };

  return (
    <div className="container section">
      <h1 className="center">Place Your Order</h1>
      <form className="card" onSubmit={handleSubmit}>
        {/* Name */}
        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        {/* Phone */}
        <label>
          Phone Number
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </label>

        {/* Email */}
        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        {/* URL */}
        <label>
          Profile / Resume URL
          <input
            type="url"
            name="url"
            value={formData.url}
            onChange={handleChange}
            required
          />
        </label>

        {/* Number of Cards */}
        <label>
          Number of Cards
          <input
            type="number"
            name="numCards"
            min="1"
            value={formData.numCards}
            onChange={handleChange}
            required
          />
        </label>

        {/* Payment */}
        <label>
          Preferred Payment
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="Zelle">Zelle</option>
            <option value="Venmo">Venmo</option>
            <option value="Cash">Cash</option>
          </select>
        </label>

        {/* Delivery */}
        <label>
          Delivery Option
          <select
            name="delivery"
            value={formData.delivery}
            onChange={handleChange}
          >
            <option value="Campus">Meet on Campus</option>
            <option value="Mail">Mail Delivery (+$5 flat)</option>
          </select>
        </label>

        {/* Note for Campus */}
        {formData.delivery === "Campus" && (
          <label>
            Meeting Details (time/place on campus)
            <textarea
              name="note"
              rows="3"
              value={formData.note}
              onChange={handleChange}
              placeholder="Ex: Meet outside library at 2 PM"
            />
          </label>
        )}

        {/* Address fields for Mail Delivery */}
        {formData.delivery === "Mail" && (
          <>
            <label>
              Street Address
              <input
                type="text"
                name="street"
                value={formData.street}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              City
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              State
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Zip Code
              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                required
              />
            </label>
          </>
        )}

        {/* Submit */}
        <button type="submit" className="btn primary lg">
          Submit Order
        </button>
      </form>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Thank you for your order!</h2>
            <h3><strong>Total:</strong> ${formData.numCards * 9.99}</h3>
            <p>
              Please send your payment within <strong>24 hours</strong> via{" "}
              {formData.paymentMethod}.  
              {formData.delivery === "Mail" && (
                <> A $5 mailing fee will be added.</>
              )}
            </p>
            <button className="btn ghost" onClick={() => { 
              setShowPopup(false); 
              navigate("/"); 
             }}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PaymentPage;