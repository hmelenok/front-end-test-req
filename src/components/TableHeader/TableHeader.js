import React, { Component } from "react";

const Icon = ({ icon }) => <span className={`fa fa-${icon}`} />;

const TableHeader = ({ columns, sortColumn, sortAsc, onTableHeaderClick }) => {
  return (
    <thead>
      {columns.map(({ name, key }) => {
        const isActive = sortColumn === key;

        const icon = isActive ? (
          <span style={{ fontSize: 8 }} children={sortAsc ? "▲" : "▼"} />
        ) : null;

        return (
          <th key={key} onClick={e => onTableHeaderClick(key)}>
            {name}
            {icon && " "}
            {icon}
            <i class="arrow up" />
            <i class="arrow down" />
          </th>
        );
      })}
    </thead>
  );
};
export default TableHeader;
