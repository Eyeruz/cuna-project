import React, { Fragment, useState } from "react";

// - New Account Page
//   If the api call does not return a disqualification message(see below), this page
//   should have a simple account creation form including:

//   Username (Text)
//   Password (Text)

// The username should be validated as an email and password should require more than 8
// characters and a number or special character. Ensure the user types their password
// twice to validate their intent.

const NewAccout = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsername("");
    setPassword("");
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username"> User Name : </label>
        <input
          type="text"
          id="username"
          alt="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password"> Password: </label>

        <input
          type="text"
          id="password"
          alt="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="Submit" alt="submit">
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default NewAccout;
