// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
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
