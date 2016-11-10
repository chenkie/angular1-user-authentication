import inject from 'ng-inject';
import { API_URL } from './../../../constant/config';

@inject('$state', '$http', 'authService', 'authManager')
class AuthappNewInstructor {

  addInstructor(data) {
    this.$http.post(`${API_URL}/instructors`, data)
      .then(() => {
        this.$state.go('instructor');
      }, error => {
        console.log(error);
      });
  }
}

export default AuthappNewInstructor;
