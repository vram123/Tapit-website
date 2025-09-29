import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Impact from "./components/Impact";
import Footer from "./components/Footer";
import PaymentPage from "./components/PaymentPage";
import Main from "./components/MainPage";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
      <Footer />
    </>
  );
}
