import React, { useState } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <h4 className="text-center">Fale Conosco</h4>
        <form onSubmit={handleSubmit} className="text-center">
          <input
            type="text"
            name="name"
            placeholder="Nome"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-control mb-2"
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-control mb-2"
          />
          <textarea
            name="message"
            placeholder="Mensagem"
            value={formData.message}
            onChange={handleChange}
            required
            className="form-control mb-2"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
      <p className="text-center mt-3">
        © {new Date().getFullYear()} Desentupidora. Todos os direitos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
