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
      <div>
        <label style={{ display: "block" }}>Search</label>
        <input
          type="search"
          placeholder="Title, owner etc."
          onChange={this.handleTextChange}
          style={{ border: "none", width: 200 }}
        />
      </div>
    );
  }
}
export default FilterTextField;
