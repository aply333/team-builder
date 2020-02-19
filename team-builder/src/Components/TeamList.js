import React from "react";

const TheTeam = props => {
  return (
    <div>
      {props.map(name => (
        <ul>{name}</ul>
      ))}
    </div>
  );
};

export default TheTeam;
