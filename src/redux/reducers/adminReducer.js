import {
  Accept_Pending,
  Delete_User,
  Get_All_Users,
  Get_Numbers_Users,
  Get_Pending,
} from "../types/types";

const intial = {
  getAllUsers: [],
  numberofusers: [],
  deleteuser: [],
  AllPending: [],
  handlePending: [],
  loading: true,
};
export const AdminReducerFoucseeee = (state = intial, action) => {
  switch (action.type) {
    case Get_All_Users: {
      return { ...state, getAllUsers: action.data, loading: false };
    }
    case Get_Numbers_Users: {
      return { ...state, numberofusers: action.data, loading: false };
    }
    case Delete_User: {
      return { ...state, deleteuser: action.data, loading: false };
    }
    case Get_Pending: {
      return { ...state, AllPending: action.data, loading: false };
    }
    case Accept_Pending: {
      return { ...state, handlePending: action.data, loading: false };
    }
    default: {
      return state;
    }
  }
};
