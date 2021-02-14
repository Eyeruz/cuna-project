import React, { useEffect, useRef } from "react";
import Disqualification from "./Disqualification";
import { qualifiedCheck } from "../actions/loanActions";
import { useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import NewAccount from "./NewAccount";

// The response should return disqualify message (Lorum Ipsem is fine)
// [x] if the purchase price is more than 1/5th of the income or their estimated credit is below 600.
//  [x] Otherwise it should return a positive qualification flag.
// [x] A `Bad Request` response should be returned
//   for any auto purchase price above $1,000,000.

const QualificationCheck = ({ qualifiedCheck, userinfo }) => {
  // const [qualified, setQualified] = useState(false);

  const history = useHistory();
  const onefifth = (1 / 5) * userinfo.yearlyIncome;

  return (
    <div className="Disqualified">
      <Loader
        type="TailSpin"
        color="black"
        height={80}
        width={80}
        className="loader"
        timeout={500}
      />
      {userinfo.autoPrice > onefifth || userinfo.creditScore < 600 ? (
        <Disqualification />
      ) : (
        <NewAccount />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userinfo: state.users.userInfo,
  };
};

export default connect(mapStateToProps, { qualifiedCheck })(QualificationCheck);
