import api from "../../../config/api";
import {
  canceledOrderFailure,
  canceledOrderRequest,
  canceledOrderSuccess,
  confirmedOrderFailure,
  confirmedOrderRequest,
  confirmedOrderSuccess,
  deleteOrderFailure,
  deleteOrderRequest,
  deleteOrderSuccess,
  deliveredOrderFailure,
  deliveredOrderRequest,
  deliveredOrderSuccess,
  getOrdersFailure,
  getOrdersRequest,
  getOrdersSuccess,
  placedOrderFailure,
  placedOrderRequest,
  placedOrderSuccess,
  shipOrderFailure,
  shipOrderRequest,
  shipOrderSuccess,
  getOrderByIdRequest,
  getOrderByIdSuccess,
  getOrderByIdFailure
} from "./ActionCreator";

// Fetch all orders
export const getOrders = () => {
  return async (dispatch) => {
    dispatch(getOrdersRequest());
    try {
      const response = await api.get(`/api/admin/orders/`);
      dispatch(getOrdersSuccess(response.data));
    } catch (error) {
      dispatch(getOrdersFailure(error.message));
    }
  };
};

// Fetch order by ID
export const getOrderById = (orderId) => {
  return async (dispatch) => {
    dispatch(getOrderByIdRequest());
    try {
      const response = await api.get(`/api/admin/orders/${orderId}`);
      dispatch(getOrderByIdSuccess(response.data));
    } catch (error) {
      dispatch(getOrderByIdFailure(error.message));
    }
  };
};

// Confirm order
export const confirmOrder = (orderId) => async (dispatch) => {
  dispatch(confirmedOrderRequest());
  try {
    const response = await api.put(`/api/admin/orders/${orderId}/confirmed`);
    dispatch(confirmedOrderSuccess(response.data));
  } catch (error) {
    dispatch(confirmedOrderFailure(error.message));
  }
};

// Ship order
export const shipOrder = (orderId) => {
  return async (dispatch) => {
    dispatch(shipOrderRequest());
    try {
      const response = await api.put(`/api/admin/orders/${orderId}/ship`);
      dispatch(shipOrderSuccess(response.data));
    } catch (error) {
      dispatch(shipOrderFailure(error.message));
    }
  };
};

// Deliver order
export const deliveredOrder = (orderId) => async (dispatch) => {
  dispatch(deliveredOrderRequest());
  try {
    const response = await api.put(`/api/admin/orders/${orderId}/deliver`);
    dispatch(deliveredOrderSuccess(response.data));
  } catch (error) {
    dispatch(deliveredOrderFailure(error.message));
  }
};

// Cancel order
export const cancelOrder = (orderId) => async (dispatch) => {
  dispatch(canceledOrderRequest());
  try {
    const response = await api.put(`/api/admin/orders/${orderId}/cancel`);
    dispatch(canceledOrderSuccess(response.data));
  } catch (error) {
    dispatch(canceledOrderFailure(error.message));
  }
};

// Delete order
export const deleteOrder = (orderId) => {
  return async (dispatch) => {
    dispatch(deleteOrderRequest());
    try {
      await api.delete(`/api/admin/orders/${orderId}`);
      dispatch(deleteOrderSuccess(orderId));
    } catch (error) {
      dispatch(deleteOrderFailure(error.message));
    }
  };
};
