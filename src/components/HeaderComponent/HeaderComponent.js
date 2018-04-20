import React, { Component } from "react";
import FilterTextField from "../FilterTextField/FilterTextField";
import Button from "../Button/Button";

const HeaderComponent = () => {
  return (
    <div className="top-section">
      <h1 id="main-title">Manage groups</h1>
      <div className="wrapper">
        <FilterTextField onTextChange={this.handleSearchChange} />
        <Button />
      </div>
    </div>
  );
};
export default HeaderComponent;
