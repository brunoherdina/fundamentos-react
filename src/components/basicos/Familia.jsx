import React, { cloneElement } from "react";

export default props => {
  return (
    <div>
      {props.children.map((child, i) => {
        return cloneElement(child, { ...props, key: i });
      })}
    </div>
  );
};

// Faz um map nos filhos do elemento e para cada filho faz um cloneElement,
// passando as propriedades do elemento pai
