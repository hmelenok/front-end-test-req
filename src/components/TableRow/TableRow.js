import React, { Component } from "react";
import "./TableRow.css";

const TableRow = ({ row }) => {
  return (
    <tr>
      {Object.keys(row).map((key, index) => {
        const td = row[key];
        return <td key={index}>{td}</td>;
      })}
    </tr>
  );
};

export default TableRow;
