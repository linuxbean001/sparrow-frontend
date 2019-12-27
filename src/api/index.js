import { Cookies } from 'react-cookie';

const ENVIRONMENTS = {
  development: 'development',
  staging: 'staging',
  production: 'production',
};
const API_BASE_URL = {
  development: 'http://localhost:3030',
  staging: 'https://sparrowwebapp.herokuapp.com',
  production: 'https://sparrow-api-production.herokuapp.com',
};

const endpoints = environment => {
  return {
    authenticationUrl: `${API_BASE_URL[environment]}/authentication`,
    userUrl: `${API_BASE_URL[environment]}/users`,
    businessUrl: `${API_BASE_URL[environment]}/business`,
    clientUrl: `${API_BASE_URL[environment]}/clients`,
    pagesUrl: `${API_BASE_URL[environment]}/pages`,
    reportsUrl: `${API_BASE_URL[environment]}/reports`,
  };
};

const environment =
  ENVIRONMENTS[process.env.REACT_APP_BUILD_ENV] || 'development';

const API = {
  // pass in the environment variable via REACT_APP_BUILD_ENV command line argument to the build script
  environment,
  serverUrl: API_BASE_URL[environment],
  accessToken: new Cookies().get('accessToken') || null,
  authentication: {
    async create(email, password, strategy) {
      const { authenticationUrl } = endpoints(API.environment);
      const options = {
        method: 'POST',
        headers: {
          'cache-control': 'no-cache',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          strategy,
        }),
      };

      const response = await fetch(authenticationUrl, options);
      const responseJSON = await response.json();
      if (response.status === 201) {
        return responseJSON;
      }
      throw new Error('Failed to fetch user');
    },
  },
  user: {
    async create(payload) {
      const { userUrl } = endpoints(API.environment);
      const options = {
        method: 'POST',
        headers: {
          'cache-control': 'no-cache',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      };
      const response = await fetch(userUrl, options);
      const responseJSON = await response.json();
      if (response.status >= 200 && response.status < 300) {
        return responseJSON;
      }
      throw new Error('Failed to fetch user');
    },
    async get(id = '') {
      const { userUrl } = endpoints(API.environment);
      const userUrlWithQueryParam = `${userUrl}/${id}`;
      const options = {
        method: 'GET',
        headers: {
          'cache-control': 'no-cache',
          Authorization: `Bearer ${API.accessToken}`,
          'Content-Type': 'application/json',
        },
      };
      const response = await fetch(userUrlWithQueryParam, options);
      const responseJSON = await response.json();
      if (response.status >= 200 && response.status < 300) {
        return responseJSON;
      }
      throw new Error('Failed to fetch user');
    },
    async update(id = '', payload) {
      const { userUrl } = endpoints(API.environment);
      const options = {
        method: 'PATCH',
        headers: {
          'cache-control': 'no-cache',
          Authorization: `Bearer ${API.accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      };
      const response = await fetch(`${userUrl}/${id}`, options);
      const responseJSON = await response.json();
      if (response.status === 200) {
        return responseJSON;
      }
      throw new Error('Failed to fetch user');
    },
    async delete(id = '') {
      const { userUrl } = endpoints(API.environment);
      const options = {
        method: 'DELETE',
        headers: {
          'cache-control': 'no-cache',
          Authorization: `Bearer ${API.accessToken}`,
          'Content-Type': 'application/json',
        },
      };

      const response = await fetch(`${userUrl}/${id}`, options);
      const responseJSON = await response.json();
      if (response.status === 200) {
        return responseJSON;
      }
      throw new Error('Failed to fetch user');
    },
  },

  business: {
    async get() {
      const { businessUrl } = endpoints(API.environment);
      const options = {
        method: 'GET',
        headers: {
          'cache-control': 'no-cache',
          Authorization: `Bearer ${API.accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ client_id: 1 }),
      };
      const response = await fetch(businessUrl, options);
      const responseJSON = await response.json();
      if (response.status === 200) {
        return responseJSON;
      }
      throw new Error('Failed to fetch user');
    },
    async update(id = '', payload) {
      const { businessUrl: businessBaseUrl } = endpoints(API.environment);
      const businessUrl = `${businessBaseUrl}/${id}`;
      const options = {
        method: 'PATCH',
        headers: {
          'cache-control': 'no-cache',
          Authorization: `Bearer ${API.accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      };
      const response = await fetch(businessUrl, options);
      const responseJSON = await response.json();
      if (response.status === 200) {
        return responseJSON;
      }
      throw new Error('Failed to fetch user');
    },
  },

  clients: {
    async get(url = '') {
      const { clientUrl: clientBaseUrl } = endpoints(API.environment);
      const clientUrl = `${clientBaseUrl}/${url}`;
      const options = {
        method: 'GET',
        headers: {
          'cache-control': 'no-cache',
          Authorization: `Bearer ${API.accessToken}`,
          'Content-Type': 'application/json',
        },
      };
      const response = await fetch(clientUrl, options);
      const responseJSON = await response.json();
      if (response.status === 200) {
        return responseJSON;
      }
      throw new Error('Failed to fetch client');
    },
    async create(payload) {
      const { clientUrl } = endpoints(API.environment);
      const options = {
        method: 'POST',
        headers: {
          'cache-control': 'no-cache',
          Authorization: `Bearer ${API.accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      };
      const response = await fetch(clientUrl, options);
      const responseJSON = await response.json();
      if (response.status === 201) {
        return responseJSON;
      }
      throw new Error('Failed to fetch client');
    },
  },
  pages: {
    async get() {
      const { pagesUrl } = endpoints(API.environment);
      const options = {
        method: 'GET',
        headers: {
          'cache-control': 'no-cache',
          Authorization: `Bearer ${API.accessToken}`,
          'Content-Type': 'application/json',
        },
      };
      const response = await fetch(pagesUrl, options);
      const responseJSON = await response.json();
      if (response.status === 200) {
        return responseJSON;
      }
      throw new Error('Failed to fetch pages');
    },
    async update(payload) {
      const { pagesUrl } = endpoints(API.environment);
      const options = {
        method: 'PATCH',
        headers: {
          'cache-control': 'no-cache',
          Authorization: `Bearer ${API.accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      };
      const response = await fetch(`${pagesUrl}/${payload.page_id}`, options);
      const responseJSON = await response.json();
      if (response.status === 200) {
        return responseJSON;
      }
      throw new Error('Failed to fetch pages');
    },
  },
  reports: {
    async get() {
      const { reportsUrl } = endpoints(API.environment);
      const options = {
        method: 'GET',
        headers: {
          'cache-control': 'no-cache',
          Authorization: `Bearer ${API.accessToken}`,
          'Content-Type': 'application/json',
        },
      };
      const response = await fetch(reportsUrl, options);
      const responseJSON = await response.json();
      if (response.status === 200) {
        return responseJSON;
      }
      throw new Error('Failed to fetch reports');
    },
  },
};

export default API;
