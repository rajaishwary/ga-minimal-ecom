import { getFeConfigsApi } from "../services";

/* Constants */
export const FETCH_FECONF_REQUEST = "fe/FETCH_FECONF_REQUEST";
export const FETCH_FECONF_SUCCESS = "fe/FETCH_FECONF_SUCCESS";

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

/* Reducer */
const initialState = {
  banners: [],
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

    default:
      return state;
  }
}
