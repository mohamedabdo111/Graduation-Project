import { UseGetDate } from "../../hooks/useGetDate";
import { Get_Apartment, Get_Apartment_Details } from "../types/types";

//`User/GetApartmentsMain?PageNumber=${number}&PageSize=${size}&Search=${search}&Gender=${gen}&City=${ci}&CountInApartment=${numCount}&minPrice=${minprice}&maxPrice=${maxprice}`

export const GetAllApartmentAction = (queryString) => async (dispatch) => {
  try {
    const res = await UseGetDate(
      `User/GetApartmentsMain?${queryString}`
    );
    dispatch({
      type: Get_Apartment,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Get_Apartment,
      data: error.response,
    });
  }
};

export const GetApartmentDetailsAction =
  (id, num, size) => async (dispatch) => {
    try {
      const res = await UseGetDate(`Apartment/GetApartmentDetails?Id=${id}`);
      dispatch({
        type: Get_Apartment_Details,
        data: res.data,
      });
    } catch (error) {
      dispatch({
        type: Get_Apartment_Details,
        data: error.response,
      });
    }
  };
