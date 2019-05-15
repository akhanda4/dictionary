import React, { Component } from "react";

class Audio extends Component {
  render() {
    var a =
      this.props.data === "" ? (
        <i />
      ) : (
        <React.Fragment>
          <i
            className="fa fa-volume-up"
            onClick={() => document.getElementById("audio").play()}
          />
          <audio id="audio">
            <source type="audio/mpeg" src={this.props.data} />
          </audio>
        </React.Fragment>
      );
    return a;
  }
}

export default Audio;
