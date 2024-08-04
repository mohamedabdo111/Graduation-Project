import { Get_Apartment, Get_Apartment_Details } from "../types/types";

const intail = { getApatments: [], getDetails: [], loading: true };
export const GetAllApartmentReducer = (state = intail, action) => {
  switch (action.type) {
    case Get_Apartment: {
      return { ...state, getApatments: action.data, loading: false };
    }

    default: {
      return state;
    }
  }
};

export const GetApartmentDetailsReducer = (state = intail, action) => {
  switch (action.type) {
    case Get_Apartment_Details: {
      return { ...state, getDetails: action.data, loading: false };
    }

    default:
      return state;
  }
};
