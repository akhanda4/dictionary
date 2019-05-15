import React, { Component } from "react";
import "../css/examples.css";
class Example extends Component {
  render() {
    const example = this.props.example;
    const rows = example ? (
      example.map((row, index) => {
        return (
          <span id="itl">
            <li key={index}>'{row.text}'</li>
          </span>
        );
      })
    ) : (
      <React.Fragment />
    );
    return <ol className="example">{rows}</ol>;
  }
}

export default Example;
