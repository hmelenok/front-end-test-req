import React, { Component } from "react";
import "./Table.css";
import TableRow from "../TableRow/TableRow";
import _ from "lodash";
import PropTypes from "prop-types";
import TableHeader from "../TableHeader/TableHeader";
import TableBody from "../TableBody/TableBody";

let sortBy = _.sortBy;

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortAsc: true,
      sortColumn: null
    };
    this.handleTableHeaderClick = this.handleTableHeaderClick.bind(this);
  }

  handleTableHeaderClick(key) {
    const { sortColumn, sortAsc } = this.state;

    if (key === sortColumn) {
      return this.setState({
        sortAsc: !sortAsc
      });
    }

    this.setState({
      sortAsc: true,
      sortColumn: key
    });
  }

  render() {
    const { columns, data } = this.props;
    const { sortAsc, sortColumn } = this.state;

    let sortedData = data;

    if (sortColumn) {
      sortedData = sortBy(sortedData, row => row[sortColumn]);
    }

    if (!sortAsc) {
      sortedData = sortedData.reverse();
    }

    return (
      <table id="table">
        <TableHeader
          sortAsc={sortAsc}
          sortColumn={sortColumn}
          columns={columns}
          onTableHeaderClick={this.handleTableHeaderClick}
        />
        <TableBody data={sortedData} />
      </table>
    );
  }
}
Table.propTypes = {
  isLoading: PropTypes.bool,
  defaultSortColumn: PropTypes.string,
  defaultSortAsc: PropTypes.bool,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired
    })
  ),
  data: PropTypes.array
};

Table.defaultProps = {
  defaultSortAsc: true,
  data: []
};
export default Table;
