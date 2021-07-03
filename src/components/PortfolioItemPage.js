import React from "react";

const PortfolioItem = (props) => (
  <div>
    <h4>A thing I've Done</h4>
    <p>This page is for the item with id of {props.match.params.id}</p>
  </div>
);

export default PortfolioItem;
