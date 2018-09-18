import * as ACTION_TYPES from './actionTypes';
import {CurrencyService} from '../services';
import CurrencyHelper from "../utils/helpers/currencyHelper";

class CurrencyActions {
  static changeCurrency(currency) {
    return async (dispatch) => {
      CurrencyHelper.setLastSelected(currency);
      dispatch({
        type: ACTION_TYPES.CHANGE_CURRENCY,
        payload: currency
      })
    }
  }

  static list(currency) {
    return async (dispatch) => {
      const response = await CurrencyService.listing(currency);
      return await dispatch({
        type: ACTION_TYPES.CRYPTO_CURRENCIES,
        payload: response.data
      })
    }
  }

  static details(cryptocurrencyId, currency) {
    return async (dispatch) => {
      let data = undefined;
      if (cryptocurrencyId) {
        // show details modal
        const response = await CurrencyService.details(cryptocurrencyId, currency);
        data = response.data;
      } //otherwise close modal

      return await dispatch({
        type: ACTION_TYPES.CRYPTO_CURRENCY_DETAILS,
        payload: data
      })
    }
  }
}

export default CurrencyActions;
