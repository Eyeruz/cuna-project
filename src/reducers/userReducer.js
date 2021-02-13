const initalState = {
  loading: false,
  loggedin: false,
  qualifedUsers: [],
  disqualifiedUsers: [],
};

export default (state = initalState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
