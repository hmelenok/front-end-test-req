import React, { Component } from "react";

class FilterTextField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  handleTextChange(e) {
    this.props.onTextChange(e.target.value);
    this.setState({
      text: e.target.value
    });
  }
  render() {
    return (
      <div
        style={{
          padding: 10
        }}
      >
        <label style={{ display: "block" }}>Search</label>
        <input
          type="search"
          placeholder="Title, owner etc."
          onChange={this.handleTextChange}
        />
      </div>
    );
  }
}
export default FilterTextField;
