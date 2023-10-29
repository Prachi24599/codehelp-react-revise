import React, { useState } from "react";

const Form = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  function titleChangeHandler(event) {
    setTitle(event.target.value);
    //   console.log(event.target.value);
  }
  function dateChangeHandler(event) {
    setDate(event.target.value);
    //   console.log(event.target.value);
  }

  const [productDetails, setProductDetails] = useState({ title: "", date: "" });

  function submitHandler(event) {
    event.preventDefault();
    console.log("Form Submitted");

    const productDate = {
      title,
      date,
    };

    console.log(productDate);
    setTitle("");
    setDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={titleChangeHandler} />
      </div>
      <div>
        <label>Date</label>
        <input
          type="date"
          value={date}
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
