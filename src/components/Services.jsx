import React from "react";

const Services = () => {
  return (
    <section id="services" className="py-5">
      <div className="container">
        <h2 className="text-center">Nossos Serviços</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Desentupimento de Pia</h5>
                <p className="card-text">
                  Resolvemos entupimentos rapidamente.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Desentupimento de Esgoto</h5>
                <p className="card-text">
                  Equipe especializada para emergências.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
