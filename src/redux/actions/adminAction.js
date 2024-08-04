import { UseDelete } from "../../hooks/useDelete";
import { UseGetDataToken } from "../../hooks/useGetDate";
import { UsePostDateWithOutImage } from "../../hooks/usePostData";
import {
  Accept_Pending,
  Delete_User,
  Get_All_Users,
  Get_Numbers_Users,
  Get_Pending,
} from "../types/types";

export const GetAllUsersAction = (page, size, role) => async (dispatch) => {
  try {
    const res = await UseGetDataToken(
      `Admin/GetAllUsers?PageNumber=${page}&PageSize=${size}&Role=${role}`
    );

    dispatch({
      type: Get_All_Users,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Get_All_Users,
      data: error.response,
    });
  }
};
export const GetNumbersUsersAction = () => async (dispatch) => {
  try {
    const res = await UseGetDataToken(`Admin/GetUsersNumbers`);

    dispatch({
      type: Get_Numbers_Users,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Get_Numbers_Users,
      data: error.response,
    });
  }
};

export const RemoveUserAction = (id) => async (dispatch) => {
  try {
    const res = await UseDelete(`Admin/DeleteUser?UserId=${id}`);
    dispatch({
      type: Delete_User,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Delete_User,
      data: error.response,
    });
  }
};

export const GetAllPendingAction = (page, size) => async (dispatch) => {
  try {
    const res = await UseGetDataToken(
      `Admin/GetPendingApartments?PageNumber=${page}&PageSize=${size}`
    );

    dispatch({
      type: Get_Pending,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Get_Pending,
      data: error.response,
    });
  }
};

export const AcceptPendingAction = (data) => async (dispatch) => {
  try {
    const res = await UsePostDateWithOutImage("Admin/PendingResponse", data);

    dispatch({
      type: Accept_Pending,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Accept_Pending,
      data: error.response,
    });
  }
};
