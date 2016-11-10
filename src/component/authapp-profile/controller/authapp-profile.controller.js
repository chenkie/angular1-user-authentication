import inject from 'ng-inject';
import jwtDecode from 'jwt-decode';

@inject('authService')
class AuthappProfile {

  profile = {};
  payload = {};

  $onInit() {
    // decode the JWT payload to get access
    // to the user's profile
  }
}

export default AuthappProfile;
