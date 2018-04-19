import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./components/Table/Table";
import FilterTextField from "./components/FilterTextField/FilterTextField";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      data: []
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }
  componentDidMount() {
    window
      .fetch("/groups-summary.json")
      .then(res => res.json())
      .then(data => {
        console.log(data.data);
        this.setState({
          data: data.data.map(group => ({
            title: group.title,
            owner: group.ownerUsername,
            creationDate: new Date(group.createdAt).toDateString(),
            members: group.membersCount,
            gems: group.gemsCount
          }))
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleSearchChange(term) {
    this.setState({
      searchTerm: term.toLowerCase()
    });
  }
  render() {
    const { searchTerm, data } = this.state;

    const columns = [
      {
        name: "Title",
        key: "title"
      },
      {
        name: "Owner",
        key: "owner"
      },
      {
        name: "CreationDate",
        key: "creationDate"
      },
      {
        name: "Members",
        key: "members"
      },
      {
        name: "Gems",
        key: "gems"
      }
    ];

    return (
      <div>
        <FilterTextField onTextChange={this.handleSearchChange} />
        <Table
          data={data.filter(
            row => row.title.toLowerCase().indexOf(searchTerm) !== -1
          )}
          columns={columns}
        />
      </div>
    );
  }
}

export default App;
