const server = 'https://api.coinmarketcap.com/v2';
const METHOD_GET = 'get';

class Http {
  static async get(url, params, headers) {
    return await Http.fetchWrapper(url, params, null, headers, METHOD_GET);
  }

  static async fetchWrapper(url, params, data, headers, method) {
    const options = {
      method,
      headers: {
        'content-type': 'text/plain',
        ...headers,
      },
    };

    return fetch(server + url, options)
      .then(response => {
        if (response.status !== 200) {
          const data = {
            error: {
              ...response.data.metadata,
              status: response.status,
            }
          };
          return new Promise(resolve => resolve(data));
        }

        return response.json();
      })
      .catch((error) => {
        return new Promise(resolve => resolve({error}));
      });

  }
}

export default Http;
