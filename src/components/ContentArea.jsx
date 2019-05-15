import React, { Component } from "react";
import Noun from "./noun.jsx";
import Audio from "./audio.jsx";
import Verb from "./verb.jsx";
import "../css/ContentArea.css";
class ContentArea extends Component {
  state = {
    x: <Verb data={this.props.data} />
  };
  render() {
    const { data } = this.props;
    return (
      <div className="container">
        <div className="rr disable-select">
          <button
            className="aba"
            onClick={() => {
              this.setState({ x: <Noun data={data} /> });
            }}
          >
            Noun
          </button>
          <button
            className="aba"
            onClick={() => {
              this.setState({ x: <Verb data={data} /> });
            }}
          >
            Verb
          </button>
        </div>
        <div className="text-area">
          <span>{data[0].id}</span>
          <Audio data={data[0].lexicalEntries[0].pronunciations[0].audioFile} />
          {this.state.x}
        </div>
      </div>
    );
  }
}

export default ContentArea;

//this.props.data.results[0].lexicalEntries
