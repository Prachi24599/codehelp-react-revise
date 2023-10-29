import React, { useState } from "react";

const Form = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  function titleChangeHandler(event) {
    setTitle(event.target.value);
    console.log(event.target.value);
  }
  function dateChangeHandler(event) {
    setDate(event.target.value);
    console.log(event.target.value);
  }

  return (
    <form>
      <div>
        <label>Title</label>
        <input type="text" onChange={titleChangeHandler} />
      </div>
      <div>
        <label>Date</label>
        <input
          type="date"
          onChange={dateChangeHandler}
          min="2023-01-01"
          max="2023-12-12"
        />
      </div>
      <div>
        <button type="submit">Add Product</button>
      </div>
    </form>
  );
};

export default Form;
