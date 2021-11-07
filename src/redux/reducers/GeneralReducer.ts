import { SET_LOADING } from '../types';

const initialState = {
  isLoading: false,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};
