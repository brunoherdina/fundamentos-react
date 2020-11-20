import "./Contador.css";
import React, { Component } from "react";

class Contador extends Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 1
  };

  incrementar = () => {
    this.setState({
      numero: this.state.numero + this.state.passo
    });
  };

  decrementar = () => {
    this.setState({
      numero: this.state.numero - this.state.passo
    });
  };

  setPasso = event => {
    this.setState({
      passo: +event.target.value
    });
  };

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <h3>{this.state.numero}</h3>
        <div>
          <label htmlFor="novoPasso">Passo: </label>
          <input
            id="novoPasso"
            type="number"
            value={this.state.passo}
            onChange={this.setPasso}
          />
        </div>
        <button onClick={this.incrementar}>+</button>
        <button onClick={this.decrementar}>-</button>
      </div>
    );
  }
}

export default Contador;
