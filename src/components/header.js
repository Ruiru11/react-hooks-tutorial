import React from "react";

function HeaderDiv() {
  return (
    <div className="ui message">
      <div className="header">About</div>
      <p>
        This is a simple application to help you level up on React Hooks. There
        is no data persistence as this will be available in the next tutorial.
      </p>
      <p>
        Below are links to the developers LinkedIn and Github accounts
        respectively
      </p>
      <a href="https://www.linkedin.com/in/erastus-ruiru-4a2ab2b3/">
        <button className="ui linkedin button">
          <i aria-hidden="true" className="linkedin icon" /> LinkedIn
        </button>
      </a>
      <a href="https://github.com/Ruiru11">
        <button className="ui github button">
          <i aria-hidden="true" className="github icon" /> github
        </button>
      </a>
    </div>
  );
}

export default HeaderDiv;
