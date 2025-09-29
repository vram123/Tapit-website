import React from "react";
import { useNavigate } from "react-router-dom";
import "./../App.css";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <h1>TapIt — the fastest way to connect.</h1>
      <p>
        One tap shares your <strong>phone</strong>, <strong>socials</strong>,{" "}
        <strong>LinkedIn</strong>, <strong>resume</strong>, and{" "}
        <strong>GitHub</strong>. Perfect for students, recruiters, and friends —
        right on the spot.
      </p>

      {/* go to /payment */}
      <button
        className="btn primary"
        onClick={() => navigate("/payment")}
      >
        Get TapIt for $10
      </button>
    </section>
  );
}