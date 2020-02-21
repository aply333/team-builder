import React from "react";

const TeamList = props => {
  console.log("insideTeam",props.member)
  return (
    
    <div>
      <ul>
        {props.member.map(member => (
        <li>{member.name}: {member.email} : {member.role}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeamList;
