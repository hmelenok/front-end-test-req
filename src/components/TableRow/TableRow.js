import React, { Component } from "react";
import "./TableRow.css";

const TableRow = ({ row }) => {
  return (
    <tr>
      {Object.keys(row).map(key => {
        const td = row[key];
        return <td>{td}</td>;
      })}
    </tr>
  );
};

export default TableRow;
