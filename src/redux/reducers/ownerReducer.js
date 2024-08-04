import {
  Add_Apartment,
  Edit_Apartment,
  Get_Apartment_Edit,
  Get_Apartments_owner,
  Get_Notification,
  Get_profile,
  Get_User_requestes,
  Handle_Request,
  Remove_Apartment,
  Update_Password,
  Update_profile,
  UsersNum,
} from "../types/types";

const intial = {
  notification: [],
  apartments: [],
  remove: [],
  updataPassword: [],
  profileInfo: [],
  Updateprofile: [],
  addApartment: [],
  editApartment: [],
  getApartmentEdit: [],
  userRequests: [],
  handleRequest: [],
  numberUsers: [],
  loading: true,
};

export const AdminReducer = (state = intial, action) => {
  switch (action.type) {
    case Get_Notification: {
      return { ...state, notification: action.data, loading: false };
    }
    case Get_Apartments_owner: {
      return { ...state, apartments: action.data, loading: false };
    }
    case Remove_Apartment: {
      return { ...state, remove: action.data, loading: false };
    }
    case Update_Password: {
      return { ...state, updataPassword: action.data, loading: false };
    }
    case Get_profile: {
      return { ...state, profileInfo: action.data, loading: false };
    }
    case Update_profile: {
      return { ...state, Updateprofile: action.data, loading: false };
    }
    case Add_Apartment: {
      return { ...state, addApartment: action.data, loading: false };
    }
    case Edit_Apartment: {
      return { ...state, editApartment: action.data, loading: false };
    }
    case Get_Apartment_Edit: {
      return { ...state, getApartmentEdit: action.data, loading: false };
    }
    case Get_User_requestes: {
      return { ...state, userRequests: action.data, loading: false };
    }
    case Handle_Request: {
      return { ...state, handleRequest: action.data, loading: false };
    }
    case UsersNum: {
      return { ...state, numberUsers: action.data, loading: false };
    }
    default: {
      return state;
    }
  }
};
