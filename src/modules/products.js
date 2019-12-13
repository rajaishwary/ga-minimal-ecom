import { getProductsApi } from "../services";

/* Constants */
export const FETCH_PRODUCTS_REQUEST = "trailers/FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "trailers/FETCH_PRODUCTS_SUCCESS";

/* Action Creators */
export function getProducts() {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: FETCH_PRODUCTS_REQUEST });
      const products = await getProductsApi();
      if (!!products) {
        dispatch({ type: FETCH_PRODUCTS_SUCCESS, data: products });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

/* Reducer */
const initialState = {
  products: [],
};

export default function trailers(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST: {
      return { ...state, products: [], isRequesting: true };
    }
    case FETCH_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: action.data,
        isRequesting: false
      };
    }

    default:
      return state;
  }
}
