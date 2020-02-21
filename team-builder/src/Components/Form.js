import React, { useState, useEffect } from "react";
import TeamList from "./TeamList";

const Form = ({ testData }) => {
  let array = testData;
  const [name, setName] = useState("");
  const [email, setEmail] =useState("");

  const [dispName, setDispName] = useState("")
  

  const nameHandler = event => {
    setName(event.target.value);
  };

  const emailHandler = event =>{
    setEmail(event.target.value);
  }

  console.log("nameState", name);

  const entrySubmit = event => {
    event.preventDefault();
    setDispName(name)
    array.push(dispName)
  };

  return (
    <div>
      <h1>Join the List</h1>
      <form onSubmit={event => entrySubmit(event)}>
        <label>
          Name: <input type="text" onChange={event => nameHandler(event)} />
        </label>
        <label>
          Email: <input type="text" onChange={event => emailHandler(event)} />
        </label>
        <label>
          Position
          <select>
              <option>Backend Engineer</option>
              <option>Frontend Engineer</option>
              <option>Designer</option>
          </select>
        </label>
        <button>Submit</button>
      </form>
      <h1>Who: {dispName}</h1>
      <TeamList array={array}/>
    </div>
  );
};

export default Form;
