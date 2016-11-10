import inject from 'ng-inject';
import jwtDecode from 'jwt-decode';

@inject('authService')
class AuthappProfile {

  profile = {};
  payload = {};

  $onInit() {
    this.profile = jwtDecode(this.authService.getToken());
    this.payload = jwtDecode(this.authService.getToken());
    this.profile.gravatar = `${this.profile.gravatar}?s=200`;
  }
}

export default AuthappProfile;
