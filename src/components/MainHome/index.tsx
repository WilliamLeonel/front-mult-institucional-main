import React from "react";
import "./style.css";
import Main from "../Main";

const MainHome: React.FC = () => {
  return (
    <Main>
      <h1>Bem-vindo! Inovação e paixão em cada moto para resultados excepcionais. Vamos acelerar juntos!</h1>
      <button className="cta-button">CONFIRA NOSSAS MOTOS</button>
    </Main>
  );
};

export default MainHome;