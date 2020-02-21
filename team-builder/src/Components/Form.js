import React, { useState, useEffect } from "react";
import TeamList from "./TeamList";

const Form = () => {
  const [members, setMembers] = useState([
    // { name: "Andrei", email: "andre@andrei", role: "student" }
  ]);

  const [member, setMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  const addMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  };

  // handleChange
  const memberHandler = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  // onSubmit
  const entrySubmit = event => {
    event.preventDefault();
    addMember(member);
    console.log(members);
  };

  return (
    <div>
      <h1>Join the List</h1>
      <form onSubmit={event => entrySubmit(event)}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={members.name}
            onChange={memberHandler}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={members.email}
            onChange={memberHandler}
          />
        </label>
        <label>
          Position
          <select name="role" onChange={memberHandler}>
            <option>Backend Engineer</option>
            <option>Frontend Engineer</option>
            <option>Designer</option>
          </select>
        </label>
        <button>Submit</button>
      </form>
      <TeamList member={members} />
    </div>
  );
};

export default Form;
