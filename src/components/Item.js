import React from "react";
import "./Item.css";

const Item = (props) => {
  const itemName = props.name;
  return (
    <div>
      <p className="nirma">{itemName}</p>;{props.children}
    </div>
  );
};

export default Item;
