import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./components/Table/Table";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      data: []
    };
  }
  componentDidMount() {
    window
      .fetch("/groups-summary.json")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          data: data.map(group => ({
            title: group.title,
            owner: group.ownerUsername,
            creationDate: group.createdAt,
            members: group.membersCount,
            gems: group.gemsCount
          }))
        });
      })
      .catch(err => {
        console.log(err);
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
        <Table columns={columns} />
      </div>
    );
  }
}

export default App;
