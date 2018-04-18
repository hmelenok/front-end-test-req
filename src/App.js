import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table/Table';


class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    fetch('/groups-summary.json')
        .then(response => console.log(response.json()))
        .catch(error => error)
  }
  render() {
    return (
      <div className="App">
        <Table />
      </div>
    );
  }
}

export default App;
