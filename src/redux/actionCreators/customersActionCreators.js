import {
  REMOVE_CUSTOMER,
  ADD_CUSTOMER,
  ADD_MANY_CUSTOMERS,
} from "../actionTypes.js";

export const addCustomer = (payload) => ({
  type: ADD_CUSTOMER,
  payload,
});
export const removeCustomer = (payload) => ({
  type: REMOVE_CUSTOMER,
  payload,
});
export const addManyCustomer = (payload) => ({
  type: ADD_MANY_CUSTOMERS,
  payload,
});
