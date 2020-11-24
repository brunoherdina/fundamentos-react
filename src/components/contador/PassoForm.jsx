import React from "react";

export default props => {
  return (
    <div>
      <label htmlFor="novoPasso">Passo: </label>
      <input
        id="novoPasso"
        type="number"
        value={props.passo}
        onChange={e => props.setPasso(+e.target.value)}
      />
    </div>
  );
};
