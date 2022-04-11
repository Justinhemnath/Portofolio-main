import React from 'react';
import "../Styles/Reactcard.css";
import { Link } from "react-router-dom";

const Reactcard = (props) => {
    return (
    <div className="react-card">
        <Link to={props.location} className="card-name">
            {props.name}
        </Link>

        <a href={props.gitlink} target="_blank"className="code-btn">
            SOURCE CODE
        <span>
            <i className="fa-brands fa-github"></i>
        </span>
        </a>
    </div>
  );
};

export default Reactcard;
