import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");

  const entryHandler = event => {
    setName(event.target.value);
  };

  console.log("nameState", name);

  const entrySubmit = event => {
    event.preventDefault();
    return console.log("submitEvent", name);
  };

  return (
    <div>
      <h1>Join the List</h1>
      <form onSubmit={event => entrySubmit(event)}>
        <label>
          Name: <input type="text" onChange={event => entryHandler(event)} />
        </label>
        <button>Join!</button>
      </form>
      <h1>Who:{name}</h1>
    </div>
  );
};

export default Form;
