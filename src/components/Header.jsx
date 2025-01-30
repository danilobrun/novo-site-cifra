import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          Desentupidora
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                Sobre a Desentup
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Serviços
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#quote">
                Orçar Agora
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#schedule">
                Agendar Visita
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contatos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
