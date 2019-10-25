import { Component } from '@angular/core';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from '../assets/authCodeFlowConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(readonly oauthService: OAuthService) {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    const url = 'https://it4dogsdev.b2clogin.com/8ee022f7-2351-438e-a61c-50e610681d78/v2.0/.well-known/openid-configuration?p=B2C_1_LocalAccountSignIn';
    this.oauthService
      .loadDiscoveryDocument(url)
      .then(resp => this.oauthService.tryLoginCodeFlow())
      .then(_ => {
        if (!this.oauthService.hasValidAccessToken()) {
          this.oauthService.initCodeFlow();
        }
      })
      .catch(err => {
        console.log('error: ', err);
      });
  }
}
