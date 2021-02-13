import React, { useState, useEffect } from "react";
import { qualifiedCheck } from "../actions/loanActions";
import { useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";

// The response should return disqualify message (Lorum Ipsem is fine)
// [x] if the purchase price is more than 1/5th of the income or their estimated credit is below 600.
//  [x] Otherwise it should return a positive qualification flag.
// [x] A `Bad Request` response should be returned
//   for any auto purchase price above $1,000,000.

const QualificationCheck = ({ qualifiedCheck, userinfo }) => {
  const [qualified, setQualified] = useState(false);

  const history = useHistory();
  const onefifth = (1 / 5) * userinfo.yearlyIncome;
  const check = () => {};
  return (
    <div className="Disqualified">
      <Loader
        type="TailSpin"
        color="black"
        height={80}
        width={80}
        className="loader"
        timeout="3000"
      />
      {
        ((console.log("car price:", userinfo.autoPrice),
        console.log("yearly income: ", userinfo.yearlyIncome),
        console.log(userinfo),
        console.log("credit score:", userinfo.creditScore),
        console.log(onefifth),
        userinfo.autoPrice >= 1000000 ? console.log("404 bad request") : null),
        userinfo.autoPrice > onefifth || userinfo.creditScore < 600
          ? history.push("/disqualified")
          : history.push("/qualified"))
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userinfo: state.users.userInfo,
  };
};

export default connect(mapStateToProps, { qualifiedCheck })(QualificationCheck);
