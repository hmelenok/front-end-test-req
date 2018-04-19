import React, { Component } from "react";

const TableHeader = ({ columns, sortColumn, sortAsc, onTableHeaderClick }) => {
  return (
    <thead>
      {columns.map(({ name, key }) => {
        const isActive = sortColumn === key;

        const classes = cx("th", {
          thActive: isActive
        });

        const icon = isActive ? (
          <span style={{ fontSize: 8 }} children={sortAsc ? "▲" : "▼"} />
        ) : null;

        return (
          <th
            className={classes}
            key={key}
            onClick={e => onTableHeaderClick(key)}
          >
            {name}
            {icon && " "}
            {icon}
          </th>
        );
      })}
    </thead>
  );
};
export default TableHeader;
