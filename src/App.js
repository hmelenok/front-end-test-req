import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table/Table';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      groups: []
    }
  }
  componentDidMount() {
    this.fetchData()
  }
  fetchData() {
    //getting only the fields that are needed
    fetch('/groups-summary.json')
        .then(response => response.json())
        .then(data => data.data.map(group => (
          {
            title: `${group.title}`,
            owner: `${group.ownerUsername}`,
            creationDate: `${group.createdAt}`,
            members: `${group.membersCount}`,
            gems: `${group.gemsCount}`
          }
        )))
        .then(groups => this.setState({
          groups,
          isLoading: false
        }))
        .catch(error => console.log('parsing failed', error))
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
