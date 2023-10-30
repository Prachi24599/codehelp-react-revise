import React from "react";

const Tours = ({ tours }) => {
  return (
    <div>
      {tours.map(function (tour) {
        return <Card></Card>;
      })}
    </div>
  );
};

export default Tours;
