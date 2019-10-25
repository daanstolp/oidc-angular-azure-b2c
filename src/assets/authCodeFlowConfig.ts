import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  issuer: 'https://it4dogsdev.b2clogin.com/8ee022f7-2351-438e-a61c-50e610681d78/v2.0/',
  loginUrl: 'https://it4dogsdev.b2clogin.com/it4dogsdev.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_LocalAccountSignIn',
  logoutUrl: 'https://it4dogsdev.b2clogin.com/it4dogsdev.onmicrosoft.com/oauth2/v2.0/logout?p=B2C_1_LocalAccountSignIn',
  redirectUri: 'http://localhost:4200',
  clientId: 'b0ffa467-cce1-4be1-8b42-af50ec65533f',
  scope: 'openid offline_access https://it4dogsdev.onmicrosoft.com/test/resource1',
  responseType: 'code',
  showDebugInformation: true,
  strictDiscoveryDocumentValidation: false,
  dummyClientSecret: '52rJ60-Q]~R40uN6&sne6N5i',
};
