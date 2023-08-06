import { loginUser, registerUser } from "../../helpers/axiosHelper";
import { loginSuccess, registerSuccess, requestPending } from "./userSlice";
import { toast } from "react-toastify";

export const LoginUserAction = (data) => async (dispatch) => {
  dispatch(requestPending());
  const { status, message, result } = await loginUser(data);

  status === "success" && dispatch(loginSuccess(result));
  toast[status](message);
};
export const registerUserAction = (data) => async (dispatch) => {
  const { status, message } = await registerUser(data);

  status === "success" && dispatch(registerSuccess({ status, message }));
  toast[status](message);
};
