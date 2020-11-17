import "./App.css";
import React from "react";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#07 - Desafio Repetição" color="#865BEA">
        <TabelaProdutos></TabelaProdutos>
      </Card>

      <Card titulo="#06 - Repetição" color="#5BEA6C">
        <ListaAlunos></ListaAlunos>
      </Card>

      <Card titulo="#05 - Componente com filhos" color="#5DADE2">
        <Familia sobrenome="Herdina">
          <FamiliaMembro nome="Bruno" />
          <FamiliaMembro nome="Edson" />
        </Familia>
      </Card>

      <Card titulo="#04 - Número aleatório" color="#FF5733">
        <Aleatorio min={1} max={60} />
      </Card>

      <Card titulo="#03 - Fragmento" color="#C70039">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Com parâmetro" color="#900C3F">
        <ComParametro
          titulo="Situação do aluno"
          aluno="Bruno Herdina"
          nota={9.5}
        />
      </Card>

      <Card titulo="#01 - Primeiro componente" color="#581845">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
