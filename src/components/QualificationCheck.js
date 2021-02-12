import React, { useEffect } from "react";
// import qualifiedCheck from "../actions/loanActions";
import { connect } from "react-redux";

const QualificationCheck = () => {
  useEffect(() => {
    fetch("https://60260cf4186b4a001777fb7d.mockapi.io/autoloan/form", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <div></div>;
};

export default connect(null)(QualificationCheck);
