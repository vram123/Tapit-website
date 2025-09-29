import React from "react";
import { Link } from "react-router-dom";
import "./../App.css";

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <h2 className="center">Simple price: <span className="price">$10</span></h2>
      <p className="center">No subscriptions. No hidden fees.</p>

      <div className="center" style={{ marginTop: 20 }}>
        <Link to="/payment" className="btn primary lg">
          Buy TapIt for $10
        </Link>
      </div>

      <a href="#impact" className="btn ghost">See our impact</a> 
    </section>
  );
}