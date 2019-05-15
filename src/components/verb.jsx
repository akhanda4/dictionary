import React, { Component } from "react";
import Definition from "./definitions.jsx";

class Verb extends Component {
  render() {
    const { data } = this.props;
    var a = data[0].lexicalEntries[1] ? (
      <Definition senses={data[0].lexicalEntries[1].entries[0].senses} />
    ) : (
      <i />
    );
    return (
      <React.Fragment>
        <span id="def">{a}</span>
      </React.Fragment>
    );
  }
}

export default Verb;
