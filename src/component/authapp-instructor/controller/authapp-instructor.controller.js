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
    this.$http.get(`${API_URL}/instructors`)
      .then(response => {
        this.instructors = response.data;
      }, err => {
        this.errorMessage = err.data.message;
      });
  }

  getGravatar(email) {
    return `https://www.gravatar.com/avatar/${md5(email).toLowerCase().trim()}`;
  }
}

export default AuthappInstructor;
