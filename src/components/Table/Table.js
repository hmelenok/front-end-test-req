import React, { Component } from 'react';
import './Table.css';
import TableRow from '../TableRow/TableRow';

const tableRowTitles = ["Title", "Owner", "Creation Date", "Members", "Gems", ""];

const Table = () => {
  return (
    <table id="table">
      <thead>
        <tr>
          {tableRowTitles.map((title, index) =>
            <th className="tableTitleItem" key={index}>{title}</th>
          )}
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  )
}

export default Table;