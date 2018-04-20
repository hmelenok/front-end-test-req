import React, { Component } from "react";
import "./App.css";
import Table from "./components/Table/Table";
import FilterTextField from "./components/FilterTextField/FilterTextField";
import Button from "./components/Button/Button";
import { Provider } from "react-redux";
import store from "./store";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import { fetchGroups } from "./actions/postActions";
import { connect } from "react-redux";
/*
-Remove state from components and pass it as initial in reducers
-Create corresponding actions
-Connect to store properly
-Refactor app component as far as it should only display components
*/
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
      <Provider store={store}>
        <div>
          <div className="top-section">
            <h1 id="main-title">Manage groups</h1>
            <div className="wrapper">
              <FilterTextField onTextChange={this.handleSearchChange} />
              <Button />
            </div>
          </div>
          <Table
            data={data.filter(
              row => row.title.toLowerCase().indexOf(searchTerm) !== -1
            )}
            columns={columns}
          />
          <FooterComponent />
        </div>
      </Provider>
    );
  }
}

// export default connect(null, { fetchGroups })(App);
export default App;
