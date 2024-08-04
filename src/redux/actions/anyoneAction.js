import { UsePostDateWithOutImage } from "../../hooks/usePostData";
import {
  Add_Comment,
  Add_Like,
  Enroll,
  requestApartment,
} from "../types/types";

export const AddCommentAction = (data) => async (dispatch) => {
  try {
    const res = await UsePostDateWithOutImage("Apartment/AddComment", data);

    dispatch({
      type: Add_Comment,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Add_Comment,
      data: error.response,
    });
  }
};
export const AddLikeAction = (data) => async (dispatch) => {
  try {
    const res = await UsePostDateWithOutImage("Apartment/AddReact", data);

    dispatch({
      type: Add_Like,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Add_Like,
      data: error.response,
    });
  }
};
export const EnrollAction = (data) => async (dispatch) => {
  try {
    const res = await UsePostDateWithOutImage("Payment/Payment", data);

    dispatch({
      type: Enroll,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Enroll,
      data: error.response,
    });
  }
};
export const RequestApartmentAction = (data) => async (dispatch) => {
  try {
    const res = await UsePostDateWithOutImage("User/RequestApartment", data);

    dispatch({
      type: requestApartment,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: requestApartment,
      data: error.response,
    });
  }
};
