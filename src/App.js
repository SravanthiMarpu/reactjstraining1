import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our Landing Page</h1>
        <p>We offer amazing services that will help you grow your business.</p>
        <a href="#cta" className="cta-button">Get Started</a>
      </header>

      <section id="about" className="section">
        <h2>About Us</h2>
        <p>We are a team of professionals who specialize in providing top-notch solutions for your business.</p>
      </section>

      <section id="services" className="section">
        <h2>Our Services</h2>
        <ul>
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
        </ul>
      </section>

      <section id="cta" className="section cta-section">
        <h2>Ready to get started?</h2>
        <p>Contact us today to see how we can help your business grow!</p>
        <a href="mailto:contact@yourdomain.com" className="cta-button">Contact Us</a>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Your Company</p>
      </footer>
    </div>
  );
}

export default App;
