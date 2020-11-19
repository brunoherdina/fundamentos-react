import "./App.css";
import React from "react";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import ParOuImpar from "./components/condicional/ParOuImpar";
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
      <Card titulo="#10 - Comunicação Indireta" color="#4664AA">
        <IndiretaPai></IndiretaPai>
      </Card>

      <Card titulo="#09 - Comunicação Direta" color="#6B46AA">
        <DiretaPai></DiretaPai>
      </Card>

      <Card titulo="#08 - Renderização Condicional" color="#FFC300">
        <ParOuImpar numeros={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}></ParOuImpar>
      </Card>

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
