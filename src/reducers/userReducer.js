const initalState = {
  loading: false,
  info: false,
  userInfo: {},
};
// - API call
//   [x]You should implement a mock fetch call for your backend communication.

//   [x]This call should
//   have the same interface as the real fetch and return a promise wrapped response object.

//   The response should return disqualify message (Lorum Ipsem is fine) if the purchase price
//   is more than 1/5th of the income or their estimated credit is below 600. Otherwise it
//   should return a positive qualification flag. A `Bad Request` response should be returned
//   for any auto purchase price above $1,000,000.
export default (state = initalState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "USER_INFO":
      return {
        ...state,
        userInfo: action.values,
        info: true,
      };
    default:
      return state;
  }
};
