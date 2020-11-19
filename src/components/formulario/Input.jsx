import "./Input.css";
import React, { useState } from "react";

export default props => {
  let [valor, setValor] = useState("Inicial");

  const alterarValor = e => setValor(e.target.value);
  return (
    <div>
      <h2>{valor}</h2>
      <div className="Input">
        <input value={valor} onChange={alterarValor} />
      </div>
    </div>
  );
};
