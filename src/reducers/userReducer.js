const initalState = {
  loading: false,
  info: false,
  userInfo: {},
};

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
