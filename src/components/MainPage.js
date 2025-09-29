import React from "react";
import { Link } from "react-router-dom";
import "./../App.css";

function Main() {
  return (
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>TapIt — Tap, Connect, Done.</title>
  <meta name="description" content="TapIt NFC cards: the fastest way for students and recruiters to connect. Add phone, social, LinkedIn, resume, GitHub—exchange details on the spot. Just $10. 100% of profits fund student scholarships." />
  <link rel="preload" href="/assets/logo.png" as="image" />
  <link rel="stylesheet" href="/css/styles.css" />
  <link rel="icon" href="/assets/logo.png" type="image/png" />
</head>
<body>
  <header class="site-header">
    <div class="container header-inner">
      <img src="/assets/logo.png" alt="TapIt logo" class="logo" />
      <nav class="nav">
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#pricing">Price</a>
        <a href="#impact">Scholarships</a>
      </nav>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="container hero-inner">
        <div class="hero-text">
          <h1>TapIt — the fastest way to connect.</h1>
          <p class="tagline">
            One tap shares your <strong>phone</strong>, <strong>socials</strong>, <strong>LinkedIn</strong>, <strong>resume</strong>, and <strong>GitHub</strong>. 
            Perfect for students, recruiters, and new friends — right on the spot.
          </p>
          <div class="cta-row">
            <a class="btn primary" href="/payment">Get TapIt for $9.99</a>
            <a class="btn ghost" href="#about">How it works</a>
          </div>
          <p class="note">Compatible with most modern iOS & Android phones that support NFC.</p>
        </div>
      </div>
    </section>

    <section id="about" class="section">
      <div class="container grid two">
        <div>
          <h2>What is TapIt?</h2>
          <p>
            TapIt is a simple NFC card you can hand out or tap against a phone. With one tap, 
            it opens a clean profile page where people can instantly save your details. 
            No apps. No friction. Just <em>tap, connect, done.</em>
          </p>
          <p>
            We built TapIt for <strong>students and recruiters</strong> who need a quick, reliable way to exchange info 
            at career fairs, classes, meetups, interviews, and everyday encounters.
          </p>
        </div>
        <div class="feature-card">
          <h3>What you can include</h3>
          <ul class="checklist">
            <li>Phone number</li>
            <li>Social media handles</li>
            <li>LinkedIn profile</li>
            <li>Resume link (PDF)</li>
            <li>GitHub profile</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="features" class="section alt">
      <div class="container grid three">
        <div class="card">
          <h3>Instant</h3>
          <p>Share your info with a single tap. No apps to install — it just works.</p>
        </div>
        <div class="card">
          <h3>Customizable</h3>
          <p>Point your TapIt card to your own profile or portfolio and update any time.</p>
        </div>
        <div class="card">
          <h3>Student‑friendly</h3>
          <p>Designed for campus life, career fairs, and on‑the‑spot connections.</p>
        </div>
      </div>
    </section>

    <section id="pricing" class="section">
      <div class="container center">
        <h2>Simple price: <span class="price">$9.99</span></h2>
        <p>No subscriptions. No hidden fees. One card, unlimited connections.</p>
        <a class="btn primary lg" href="#impact">See our impact</a>
      </div>
    </section>

    <section id="impact" class="section alt">
      <div class="container grid two vcenter">
        <div>
          <h2>We’re a nonprofit with a mission</h2>
          <p>
            TapIt is run as a nonprofit initiative. We fund <strong>100% of profits</strong> into 
            <strong>scholarships</strong> that help students earn their degrees — especially in today’s economy.
          </p>
          <p>
            When you buy TapIt, you’re not just making networking easier — you’re investing in someone’s education.
          </p>
        </div>
        <div class="impact-box">
          <h3>Where the money goes</h3>
          <ul class="checklist">
            <li>Student scholarships & grants</li>
            <li>Application fee relief</li>
            <li>Career fair travel stipends</li>
          </ul>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-inner">
      <div class="brand">
        <img src="/assets/logo.png" alt="TapIt logo small" class="logo sm" />
        <span>TapIt</span>
      </div>
      <div class="legal">
        <small>© <span id="year"></span> TapIt. All rights reserved. Tap responsibly.</small>
        <small>TapIt is a nonprofit initiative; 100% of profits are directed to student scholarships.</small>
      </div>
    </div>
  </footer>

  <script src="/js/main.js"></script>
</body>
</html>
  );
}

export default Main;