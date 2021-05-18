import { AuthActionType } from "../actions/AuthActions";

const authState = {
  isLoggedIn: false,
};

const getAuthState = () => {
  const auth = localStorage.getItem("auth");
  try {
    const authobj = JSON.parse(auth);
    return authobj;
  } catch (error) {
    return authState;
  }
};

const newAuth = getAuthState();

const authreducer = (state = newAuth, action) => {
  switch (action.type) {
    case AuthActionType.LOGIN_SUCCESS:
      const loginAuthState = {
        isLoggedIn: true,
        user: action.payload,
      };

      localStorage.setItem("auth", JSON.stringify(loginAuthState));

      return loginAuthState;
    case AuthActionType.LOGIN_FAIL:
      return { error: true, message: action.payload };

    case AuthActionType.LOGOUT_FAIL:
      localStorage.removeItem("auth", JSON.stringify(authState));
      return authState;

    case AuthActionType.LOGOUT_SUCCESS:
      localStorage.removeItem("auth", JSON.stringify(authState));
      return authState;

    default:
      return state;
  }
};

export default authreducer;
