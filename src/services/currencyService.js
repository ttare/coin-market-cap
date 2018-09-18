import Http from '../utils/http';

class CurrencyService {
  static async listing(currency) {
    return await Http.get(`/ticker/?convert=${currency}&structure=array`);
  }

  static async details(id, currency) {
    return await Http.get(`/ticker/${id}/?convert=${currency}`);
  }
}

export default CurrencyService;
