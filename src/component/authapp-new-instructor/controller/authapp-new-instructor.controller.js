import inject from 'ng-inject';
import { API_URL } from './../../../constant/config';

@inject('$state', '$http', 'authService', 'authManager')
class AuthappNewInstructor {

  addInstructor(data) {
    // make a POST request to the /api/instructors endpoint
    // to add a new instructor. Redirect to the main instructors
    // route when complete
  }
}

export default AuthappNewInstructor;
