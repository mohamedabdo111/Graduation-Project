import { UsePostDate, UsePostDateWithImage } from "../../hooks/usePostData";
import {
  code_pass,
  forget_pass,
  Login_type,
  NewPassword,
  Register_type,
} from "../types/types";

export const AuthAction = (formdata) => async (dispatch) => {
  try {
    const res = await UsePostDateWithImage("Authentication/Login", formdata);
    dispatch({
      type: Login_type,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Login_type,
      data: error.response,
    });
  }
};

export const GoogleLoginAction = (id) => async (dispatch) => {
  try {
    const res = await UsePostDateWithImage(
      `Authentication/GoogleLogin?Token=${id}`
    );
    dispatch({
      type: Login_type,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Login_type,
      data: error.response,
    });
  }
};

export const RegisterAction = (formdata) => async (dispatch) => {
  try {
    const res = await UsePostDateWithImage("Authentication/Register", formdata);
    dispatch({
      type: Register_type,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Register_type,
      data: error.response,
    });
  }
};
export const ForgetPasswordAction = (data) => async (dispatch) => {
  try {
    const res = await UsePostDate("Authentication/SendResetPassword", data);
    dispatch({
      type: forget_pass,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: forget_pass,
      data: error.response,
    });
  }
};
export const CodePasswordAction = (data) => async (dispatch) => {
  try {
    const res = await UsePostDate("Authentication/ConfirmResetPassword", data);
    dispatch({
      type: code_pass,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: code_pass,
      data: error.response,
    });
  }
};
export const NewPasswordAction = (data) => async (dispatch) => {
  try {
    const res = await UsePostDate("Authentication/ResetPassword", data);
    dispatch({
      type: NewPassword,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: NewPassword,
      data: error.response,
    });
  }
};
