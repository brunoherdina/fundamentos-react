import React from "react";

export default props => {
  const { min, max } = props;
  const aleatorio = Math.floor(Math.random() * (max - min)) + min;
  return <h3>O número gerado foi: {aleatorio}</h3>;
};
