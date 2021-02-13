export const userInfo = (values) => {
  return (dispatch) => {
    dispatch({ type: "USER_INFO", values });
  };
};
