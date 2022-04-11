import React from "react";
import "../Styles/Procard.css";

const Projectcard = (props) => {
  return (
    <div className="pro-card">
      
      <a href={props.location} target="_blank" className="card-name">
        {props.name}
      </a>

      <a href={props.gitlink} target="_blank" className="code-btn">
        SOURCE CODE
        <span>
          <i className="fa-brands fa-github"></i>
        </span>
      </a>
    </div>
  );
};

export default Projectcard;
