import React from "react";

const Filter = ({ filterData, category, setCategory }) => {
  function filterHandler(title) {
    setCategory(title);
    console.log(title);
  }
  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
      {filterData.map((data) => (
        <button onClick={() => filterHandler(data.title)} key={data.id}>
          {data.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
