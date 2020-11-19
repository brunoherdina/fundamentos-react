import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {
  return (
    <div>
      <DiretaFilho nome="Junior" idade={18} nerd={true} />
      <DiretaFilho nome="Igor" idade={22} nerd={false} />
      <DiretaFilho nome="Renato" idade={30} nerd={true} />
    </div>
  );
};
