import React, { Component } from "react";

const FooterComponent = () => {
  return (
    <div className="footer-section">
      <div id="entries">
        <div className="entries-quantity">
          Show
          <select>
            <option>5</option>
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
          entries
        </div>
        <div className="entries-shown">Showing 1 to 10 of 26 entries</div>
      </div>
      <div id="pagination">
        <div className="page-num">1</div>
        <div className="page-num">2</div>
        <div className="page-num">3</div>
      </div>
    </div>
  );
};
export default FooterComponent;
