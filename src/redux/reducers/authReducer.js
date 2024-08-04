import {
  code_pass,
  forget_pass,
  Login_type,
  NewPassword,
  Register_type,
} from "../types/types";

const intial = {
  login: [],
  register: [],
  forgetpass: [],
  code: [],
  password: [],
  loading: true,
};
export const AuthReducer = (state = intial, action) => {
  switch (action.type) {
    case Login_type: {
      return { ...state, login: action.data, loading: false };
    }
    case Register_type: {
      return { ...state, register: action.data, loading: false };
    }

    case forget_pass: {
      return { ...state, forget_pass: action.data, loading: false };
    }
    case code_pass: {
      return { ...state, code: action.data, loading: false };
    }
    case NewPassword: {
      return { ...state, password: action.data, loading: false };
    }
    default: {
      return state;
    }
  }
};
