import { initAuth0 } from "@auth0/nextjs-auth0";

export default initAuth0({
  domain: "lumberjack.auth0.com",
  clientId: "1Q1R4fDYhCpB4lTNEw5U2vM8Lbp1lPhd",
  clientSecret:
    "ao2_3OriogcpDXWiAz0byL6UZR5l-4zrkMGk4SovIyNuSlpmIlTcfDUndiguGra4",
  scope: "openid profile",
  redirectUri: "http://localhost:3000/profile",
  postLogoutRedirectUri: "http://localhost:3000/",
  session: {
    cookieSecret: "some-very-very-very-very-very-very-very-very-long-secret",
    cookieLifetime: 60 * 60 * 8
  }
});
