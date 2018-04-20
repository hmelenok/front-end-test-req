import React, { Component } from "react";
import TableRow from "../TableRow/TableRow";

const TableBody = ({ data }) => {
  return <tbody>{data.map((row, i) => <TableRow row={row} key={i} />)}</tbody>;
};
export default TableBody;
