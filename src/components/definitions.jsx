import React, { Component } from "react";
import Example from "./examples.jsx";
import Sub from "./sub.jsx";
import "../css/definitions.css";
class Definition extends Component {
  render() {
    const { senses } = this.props;

    const rows = senses.map((row, index) => {
      return (
        <li key={index}>
          <span>{row.definitions} </span>
          <Example example={row.examples} />

          <Sub subsenses={row.subsenses} />
        </li>
      );
    });
    return <ol>{rows}</ol>;
  }
}

export default Definition;
