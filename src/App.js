import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Impact from "./components/Impact";
import Footer from "./components/Footer";
import PaymentPage from "./components/PaymentPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/header" />} />
        <Route path="/header" element={<Header />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;