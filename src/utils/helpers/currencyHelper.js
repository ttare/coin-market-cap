
const CURRENCY_LS_KEY = 'selected_currency';
const DEFAULT_CURRENCY = 'USD';

const AVAILABLE_CURRENCIES = [
  'USD',
  'EUR',
  'CNY'
];

class CurrencyHelper {

  static getAvailableCurrencies() {
    return AVAILABLE_CURRENCIES;
  }

  static getLastSelected() {
    return window.localStorage.getItem(CURRENCY_LS_KEY) || DEFAULT_CURRENCY;
  }

  static setLastSelected(currency) {
    window.localStorage.setItem(CURRENCY_LS_KEY, currency);
  }
}

export default CurrencyHelper;
