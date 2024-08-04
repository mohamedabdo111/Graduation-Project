import { combineReducers } from "redux";
import {
  GetAllApartmentReducer,
  GetApartmentDetailsReducer,
} from "./getAllApartment";
import { AuthReducer } from "./authReducer";
import { AdminReducer } from "./ownerReducer";
import { AdminReducerFoucseeee } from "./adminReducer";
import { ReducerForAnyOne } from "./anyoneReducer";

export default combineReducers({
  AllApartment: GetAllApartmentReducer,
  ApartmentDetails: GetApartmentDetailsReducer,
  Auth: AuthReducer,
  // this is owner , i'm wrong
  AdminReducer: AdminReducer,
  realAdmin: AdminReducerFoucseeee,
  AnyOne: ReducerForAnyOne,
});
