import React, { Component } from "react";
import ReactDOM from "react-dom";

function MiComponente() {
  return <p>componente funcion</p>;
}

class Componenteclase extends Component {
  render() {
    return <p>componente de clase</p>;
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <p>hello {this.state.name}</p>
        <MiComponente />
        <Componenteclase />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,

  document.getElementById("root")
);
