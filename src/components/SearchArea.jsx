import React, { Component } from "react";
class searchArea extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      item: ""
    };

    this.state = this.initialState;
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({
      item: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.search(this.state.item);
    this.setState(this.initialState);
  };

  render() {
    return (
      <React.Fragment>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Dictionary
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            id="inpt"
            aria-label="Sizing example input"
            placeholder="Search Phase or Word"
            aria-describedby="inputGroup-sizing-default"
            name="item"
            value={this.state.item}
            onChange={this.handleChange}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="inputGroupFileAddon04"
              onClick={this.handleSubmit}
            >
              <i className="fa fa-search" />
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default searchArea;
