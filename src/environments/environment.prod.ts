export const environment = {
  production: true,
  hmr: false,
  keys: {
    token: 'TOKEN_PROXY_KEY',
    refreshToken: 'REFRESH_TOKEN_PROXY_KEY',
    user: 'USER_PROXY_KEY',
  },
  config: {
    redirectToWhenAuthenticated: '/pages/dashboard',
    redirectToWhenUnauthenticated: '/auth/login',
  },
  api: {
    baseUrl: 'https://leaf-bank.herokuapp.com',
    auth: {
      login: '/auth/local',
    },
    users: {
      me: '/users/me',
    },
  },
};
