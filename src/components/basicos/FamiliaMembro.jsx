import React, { cloneElement } from "react";

export default props => {
  return (
    <div>
      {props.nome} <strong> {props.sobrenome}</strong>
    </div>
  );
};
