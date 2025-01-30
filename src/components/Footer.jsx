import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white py-3">
      <p>
        © {new Date().getFullYear()} Desentupidora. Todos os direitos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
