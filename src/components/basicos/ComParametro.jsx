import React from "react";

export default function ComParametro(props) {
  return (
    <div>
      <h3>{props.titulo}</h3>
      <h2>
        {props.aluno} tem nota {props.nota}
      </h2>
    </div>
  );
}
