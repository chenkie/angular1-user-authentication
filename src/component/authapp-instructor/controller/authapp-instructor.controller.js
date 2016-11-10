import inject from 'ng-inject';
import md5 from 'md5';
import { API_URL } from './../../../constant/config';

@inject('$state', '$http', 'authService', 'authManager')
class AuthappInstructor {

  instructors = [];
  errorMessage = '';

  $onInit() {
    this.getInstructors();
  }

  getInstructors() {
    // make a GET request to the /api/instructors endpoint
    // to get a list of instructors
  }

  getGravatar(email) {
    return `https://www.gravatar.com/avatar/${md5(email).toLowerCase().trim()}`;
  }
}

export default AuthappInstructor;
