const initalState = {
  loading: false,
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
