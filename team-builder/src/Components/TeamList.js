import React from "react";

const TeamList = ({ arrayData }) => {
  return (
    <div>
      <ul>
        {arrayData.map(name => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeamList;
