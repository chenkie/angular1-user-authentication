import inject from 'ng-inject';
import { API_URL } from './../../../constant/config';

@inject('$state', '$http', 'authService', 'authManager')
class AuthappLogin {

  errorMessage = '';

  onLoginSubmit(credentials) {
    this.$http.post(`${API_URL}/users/authenticate`, credentials)
      .then(response => {
        this.authService.finishAuthentication(response.data.token);
        this.login = {};
        this.authManager.authenticate();
        this.$state.go('home');
      }, err => {
        this.errorMessage = err.data.message;
      });
  }

  onSignupSubmit(credentials) {
    this.$http.post(`${API_URL}/users`, credentials)
      .then(response => {
        this.authService.finishAuthentication(response.data.token);
        this.signup = {};
      }, err => {
        this.errorMessage = err.data.message;
      });
  }
}

export default AuthappLogin;
