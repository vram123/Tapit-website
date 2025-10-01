import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./RingShowcase.css";

export default function RingShowcase() {
  const { scrollYProgress } = useScroll();

  // Ring moves towards phone quickly
  const ringX = useTransform(scrollYProgress, [0.05, 0.25], ["0%", "160%"]);
  // Popup above phone fades in
  const popupOpacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  // Notification inside phone slides up
  const notifY = useTransform(scrollYProgress, [0.25, 0.35], [40, 0]);
  const notifOpacity = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);

  const colors = [
    "#00ff95", "#3a86ff", "#ff006e", "#ffbe0b",
    "#8338ec", "#06d6a0", "#ff4d6d", "#48cae4",
    "#9d4edd", "#ff9f1c", "#00f5d4", "#f15bb5"
  ];

  return (
    <div className="ring-page">
      {/* Hero with ring + phone */}
      <section className="ring-hero">
        {/* Ring */}
        <motion.div className="ring" style={{ x: ringX }} />

        {/* Phone */}
        <div className="phone">
          {/* Popup above phone */}
          <motion.div className="popup" style={{ opacity: popupOpacity }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
            />
            <span>NFC Connected</span>
          </motion.div>

          {/* Notification sliding from inside phone */}
          <motion.div
            className="phone-notif"
            style={{ y: notifY, opacity: notifOpacity }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
            />
            <span>LinkedIn profile opened</span>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing">
        <h2>TapIt NFC Ring</h2>
        <p>
          Always carry your <strong>LinkedIn</strong>, <strong>GitHub</strong>,
          or any profile link with you — forever. Just a tap away.
        </p>
        <div className="pricing-box">
          <div className="price-option">
            <h3>$24.99</h3>
            <p>One NFC Ring</p>
          </div>
          <div className="price-option">
            <h3>$29.99</h3>
            <p>
              One Ring + One Card <br />
              <span className="free">Free Shipping</span>
            </p>
          </div>
        </div>
        <button className="add-to-cart">Add to Cart</button>
      </section>

      {/* 🔥 Diagonal Ring Collection */}
      <section className="ring-collection">
        <h2>Choose Your Style</h2>
        <p>Available in a variety of finishes to match your personality.</p>
        <div className="ring-diagonal">
          {colors.map((color, i) => (
            <motion.div
              key={i}
              className="color-ring"
              style={{ borderColor: color, boxShadow: `0 0 25px ${color}` }}
              initial={{ x: -100, y: 100, opacity: 0 }}
              whileInView={{ x: i * 20, y: -i * 20, opacity: 1 }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 60 }}
            >
              <motion.span
                className="connect-icon"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.15 }}
              >
                
              </motion.span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
