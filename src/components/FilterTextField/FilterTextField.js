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
        <input
          type="search"
          placeholder="Search..."
          onChange={this.handleTextChange}
        />
      </div>
    );
  }
}
export default FilterTextField;
