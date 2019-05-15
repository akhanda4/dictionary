import React, { Component } from "react";
import "../css/sub.css";
class Sub extends Component {
  render() {
    const subsenses = this.props.subsenses;
    const rows = subsenses ? (
      subsenses.map((row, index) => {
        return (
          <span>
            <li className="def" key={index}>
              {row.definitions}
            </li>
          </span>
        );
      })
    ) : (
      <React.Fragment />
    );
    return <ol className="sub">{rows}</ol>;
  }
}

export default Sub;
