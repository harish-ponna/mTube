const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isAuthenticating: false,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_USER":
      localStorage.setItem("user", JSON.stringify(payload));
      return {
        ...state,
        user: payload,
        isAuthenticating: !state.isAuthenticating,
      };
    case "REMOVE_USER":
      localStorage.removeItem("user");
      return {
        ...state,
        user: null,
        isAuthenticating: !state.isAuthenticating,
      };

    default:
      return state;
  }
};

export { userReducer };
