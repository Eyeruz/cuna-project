import React, { useEffect, useRef } from "react";
import { qualifiedCheck } from "../actions/loanActions";
import { connect } from "react-redux";

const Disqualification = ({ qualifiedCheck, message }) => {
  // const qualified = qualifiedCheck[0];
  // const mountedRef = useRef(true);

  // useEffect(() => {
  //   return () => {
  //     mountedRef.current = false;
  //   };
  // }, []);

  return (
    <div className="Disqualified">
      <h1 className="sadface"> 😑 </h1>
      {/* bring in the backend(api) message here */}
      <h3 className="h3Disqualified">
        {" "}
        {message && message[0] ? message[0].disqualified : null}
      </h3>
      <p className="Disqualified-message">
        {" "}
        {message && message[0] ? message[0].customerService : null}
      </p>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    message: state.loans.messages,
  };
};

export default connect(mapStateToProps, { qualifiedCheck })(Disqualification);
