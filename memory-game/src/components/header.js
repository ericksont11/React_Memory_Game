import React from "react";
import './style.css';

function Header(props) {
  return (
    <nav>
    <div className="nav-wrapper">
      <span class="feedback">{props.feedback}</span>
      <ul id="nav-mobile" className="right">
        <li><a href="sass.html">Score: {props.score}</a></li>
      </ul>
    </div>
  </nav>
  );
}

export default Header;