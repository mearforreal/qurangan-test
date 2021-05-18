import axios from "../../axios";
import requests from "../../requests";

const AuthActionType = {
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
  LOGOUT_FAIL: "LOGOUT_FAIL",
};

const LoginAuthAction = (loginState) => {
  return async (dispatch) => {
    try {
      let username = "";

      username = loginState?.username;

      const request = await axios.get(requests.profile);
      const userInfo = request.data;

      dispatch({
        type: AuthActionType.LOGIN_SUCCESS,
        payload: { userInfo, username },
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: AuthActionType.LOGIN_FAIL, payload: {} });
    }
  };
};

const LogOutAuthAction = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(requests.logout);
      const { data } = res;
      dispatch({
        type: AuthActionType.LOGOUT_SUCCESS,
        payload: data.message,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: AuthActionType.LOGOUT_FAIL, payload: {} });
    }
  };
};

export { AuthActionType, LoginAuthAction, LogOutAuthAction };
