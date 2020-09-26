import React, { useState } from "react";

export default () => {
  const [toggle, setToggle] = useState(false);

  const cardBody = [
    <div className="card-body">
      <div className="row text-center">
        <div className="col">
          <p className="lead">
            Delivering quality and creativity since 2013. With people at the
            heart of what we do, our passion is serving, not selling.
          </p>
          <hr />
          <p>Find out more about who we are and what we do.</p>
          <button type="button" className="btn btn-outline-dark btn-lg">
            Find out more
          </button>
        </div>
      </div>
    </div>
  ];

  return (
    <div
      id="welcome"
      className="card container-fluid"
      onClick={() => setToggle(!toggle)}
    >
      <div className="row row-welcome text-center justify-content-center">
        <div id="welcomeCol" className="col">
          <div id="welcomeCard" className="card">
            <h1 className="card-header">People. Quality. Creativity</h1>
            {toggle ? cardBody : null}
          </div>
        </div>
      </div>
    </div>
  );
};
