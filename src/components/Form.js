import React from "react";

const Form = () => {
  return (
    <form>
      <div>
        <label>Title</label>
        <input type="text" />
      </div>
      <div>
        <label>Date</label>
        <input type="date" min="2023-01-01" max="2023-12-12" />
      </div>
      <div>
        <button type="submit">Add Product</button>
      </div>
    </form>
  );
};

export default Form;
