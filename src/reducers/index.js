import { combineReducers } from 'redux';
import * as ACTION_TYPES from '../actions/actionTypes';

const AppReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTION_TYPES.CHANGE_CURRENCY: {
      return {
        ...state,
        list: [],
        currency: action.payload,
        selected: undefined,
      };
    }

    case ACTION_TYPES.CRYPTO_CURRENCIES: {
      return {
        ...state,
        list: action.payload,
        selected: undefined,
      };
    }

    case ACTION_TYPES.CRYPTO_CURRENCY_DETAILS: {
      let list = state.list;
      if (action.payload) {
        //opening modal should refresh data in table
        list = list.map(item => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        });
      }

      return {
        ...state,
        list,
        selected: action.payload,
      };
    }

    default:
      return state;
  }
};

export default combineReducers({
  app: AppReducer
});

