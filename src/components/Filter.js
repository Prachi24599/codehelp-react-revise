import React from "react";

const Filter = ({ filterData }) => {
  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
      {filterData.map((data) => (
        <button key={data.id}>{data.title}</button>
      ))}
    </div>
  );
};

export default Filter;
