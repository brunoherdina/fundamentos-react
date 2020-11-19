import React from "react";
import "./ParOuImpar.css";

function isEven(numero) {
  return numero % 2 === 0 ? "Par" : "Ímpar";
}

export default props => {
  const numeros = props.numeros.map((numero, i) => {
    return (
      <tr key={i}>
        <td>{numero}</td>
        <td>{isEven(numero)}</td>
      </tr>
    );
  });

  return (
    <div className="TabelaNumeros">
      <table border="1">
        <thead>
          <tr>
            <th>Número</th>
            <th>Categoria</th>
          </tr>
        </thead>
        <tbody>{numeros}</tbody>
      </table>
    </div>
  );
};
