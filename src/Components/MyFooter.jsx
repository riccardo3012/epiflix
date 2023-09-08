import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer className="footer" bg="dark" expand="lg">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>Informazioni di Contatto</h4>
            <p>Indirizzo: Via Pippo, 12345 , Paese</p>
            <p>Email: pippo@example.com</p>
            <p>Telefono: +123 456 7890</p>
          </div>
          <div className="col-md-6">
            <h4> Link Utili</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">Chi Siamo</a>
              </li>
              <li>
                <a href="#services">Servizi</a>
              </li>
              <li>
                <a href="#contact">Contattaci</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>&copy; {new Date().getFullYear()} Epiflix</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
