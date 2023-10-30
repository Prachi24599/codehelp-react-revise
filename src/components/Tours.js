import React from "react";
import Card from "./Card";

const Tours = ({ tours }) => {
  return (
    <div>
      {tours.map(function (tour) {
        return <Card {...tour} />;
      })}
    </div>
  );
};

export default Tours;
