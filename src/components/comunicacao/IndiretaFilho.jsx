import React from "react";

export default props => {
  const callback = props.aoClicar;
  const gerarIdade = () => parseInt(Math.random() * 20) + 50;
  const gerarNerd = () => Math.random() > 0.5;
  return (
    <div>
      <div>Filho</div>
      <button
        onClick={e => {
          callback("Nome do pai", gerarIdade(), gerarNerd());
        }}
      >
        Fornecer informações
      </button>
    </div>
  );
};
