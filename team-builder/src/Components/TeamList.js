import React from "react";

const TeamList = ({ array }) => {
  return (
    <div>
      <ul>
        {array.map(name => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeamList;
