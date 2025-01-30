import React from "react";

const Location = () => {
  return (
    <section id="location" className="py-5 text-center">
      <h2>Localização</h2>
      <div className="container">
        <iframe
          title="Google Maps"
          width="100%"
          height="400"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093715!2d144.95373531531827!3d-37.81627974202166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1fdfd17%3A0x5045675218cdb40!2sMelbourne%20Central%20Tower!5e0!3m2!1sen!2sau!4v1574312990358!5m2!1sen!2sau"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
