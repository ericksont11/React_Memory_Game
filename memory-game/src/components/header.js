import React from "react";

function Header(props) {
  return (
    <nav>
    <div className="nav-wrapper">
      <ul id="nav-mobile" className="right">
        <li><a href="sass.html">Score: {props.score} Picked: {props.picked}</a></li>
      </ul>
    </div>
  </nav>
  );
}

export default Header;