import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default props => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [nerd, setNerd] = useState("");

  function quandoClicar(nomeParam, idadeParam, nerdParam) {
    setNome(nomeParam);
    setIdade(idadeParam);
    setNerd(nerdParam);
  }

  return (
    <div>
      <div>
        <span>
          <strong>{nome} </strong>
        </span>
        <span>{idade} </span>
        <span>{nerd ? "Verdadeiro" : "Falso"}</span>
      </div>
      <IndiretaFilho aoClicar={quandoClicar} />
    </div>
  );
};
