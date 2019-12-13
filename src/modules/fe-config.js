import { getFeConfigsApi, getPopularProductsApi } from "../services";

/* Constants */
export const FETCH_FECONF_REQUEST = "fe/FETCH_FECONF_REQUEST";
export const FETCH_FECONF_SUCCESS = "fe/FETCH_FECONF_SUCCESS";
export const FETCH_POPULAR_PRODS_REQUEST = "fe/FETCH_POPULAR_PRODS_REQUEST";
export const FETCH_POPULAR_PRODS_SUCCESS = "fe/FETCH_POPULAR_PRODS_SUCCESS";

/* Action Creators */
export function getFeConfigs() {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: FETCH_FECONF_REQUEST });
      const configs = await getFeConfigsApi();
      if (!!configs) {
        dispatch({ type: FETCH_FECONF_SUCCESS, data: configs });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function getPopularProducts() {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: FETCH_POPULAR_PRODS_REQUEST });
      const popularProducts = await getPopularProductsApi();
      if (!!popularProducts) {
        dispatch({ type: FETCH_POPULAR_PRODS_SUCCESS, data: popularProducts });
      }
    } catch (error) {
      console.log(error);
    }
  };
}


/* Reducer */
const initialState = {
  banners: [],
  popularProducts: [],
};

export default function trailers(state = initialState, action) {
  switch (action.type) {
    case FETCH_FECONF_REQUEST: {
      return { ...state, banners: [], isRequesting: true };
    }
    case FETCH_FECONF_SUCCESS: {
      return {
        ...state,
        banners: action.data[0].banners,
        isRequesting: false
      };
    }

    case FETCH_POPULAR_PRODS_REQUEST: {
      return { ...state, popularProducts: [], isRequesting: true };
    }
    case FETCH_POPULAR_PRODS_SUCCESS: {
      return {
        ...state,
        popularProducts: action.data,
        isRequesting: false
      };
    }

    default:
      return state;
  }
}
