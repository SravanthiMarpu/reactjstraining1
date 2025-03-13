import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
} from "react-router-dom";
import Header from './Components/Header';
import ClassComponent from './Components/ClassComponent';
import FunctionComponent from './Components/FunctionComponent';

function App() {
  return (
    <div className="App">
      <Header/>
      <ClassComponent/>
      <FunctionComponent/>
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
