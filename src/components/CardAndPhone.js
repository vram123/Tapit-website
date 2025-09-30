// src/components/CardAndPhone.js
import React, { useEffect, useState } from "react";
import "./CardAndPhone.css";

export default function CardAndPhone() {
    const [scrollPos, setScrollPos] = useState(0);
    const [connected, setConnected] = useState(false);
    useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollPos(y);

      if (y > 250) {
        setConnected(true);
      } else {
        setConnected(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const progress = Math.min(scrollPos / 600, 1); // 0 → 1

  return (
    <div className="scene-wrapper">
      {/* Phone */}
      <img
        src="/phone-hand.png"
        alt="Phone in hand"
        className="phone"
        style={{
          transform: `translateX(${-(1 - progress) * 300}px) rotateY(${progress * -90}deg)`
        }}
      />

      {/* TapIt Card */}
      <div
        className="card1"
        style={{
          transform: `translateX(${(1 - progress) * 300}px) rotateY(${progress * 90}deg)`
        }}
      >
        <div className="card-shine"></div>
        <span className="card-text">TapIt</span>
      </div>

      {/* Connected Popup */}
      {connected && <div className="popup-cloud">✅ Connected</div>}
    </div>
  );
}